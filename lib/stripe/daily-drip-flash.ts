import "server-only"
import { createHash } from "node:crypto"
import type Stripe from "stripe"
import { DAILY_DRIP_TUITION_START, isDailyDripFlashWindow } from "@/lib/daily-drip-schedule"

export const DAILY_DRIP_COHORT = "2027_january_june"
export const DAILY_DRIP_PROGRAM = "5_percent_daily_drip"

const EXPECTED_AMOUNT = 9_900
const EXPECTED_CURRENCY = "usd"
const SUPPORTED_PAYMENT_METHODS = new Set(["card", "link", "cashapp", "klarna"])

const META = {
  cohort: "atft_daily_drip_cohort",
  program: "atft_program",
  tier: "atft_enrollment_tier",
  status: "atft_daily_drip_status",
  schedule: "atft_daily_drip_schedule",
  session: "atft_checkout_session",
  paymentLink: "atft_payment_link",
  event: "atft_webhook_event",
  failure: "atft_schedule_failure",
} as const

export type DailyDripFlashConfig = {
  webhookSecret: string
  paymentLinkId: string
  enrollmentFeePriceId: string
  tuitionPriceId: string
  expectedLivemode: boolean
  allowTestOutsideWindow: boolean
}

type ProcessResult =
  | { outcome: "scheduled"; scheduleId: string }
  | { outcome: "duplicate_prevented"; scheduleId: string }

export class DailyDripWindowClosedError extends Error {
  constructor() {
    super("Enrollment payment completed outside the October 27–29 Eastern Time flash-sale window")
    this.name = "DailyDripWindowClosedError"
  }
}

function requireEnvironment(name: string) {
  const value = process.env[name]?.trim()
  if (!value) throw new Error(`Missing ${name}`)
  return value
}

function requireStripeId(name: string, prefix: string) {
  const value = requireEnvironment(name)
  if (!value.startsWith(prefix)) throw new Error(`${name} must begin with ${prefix}`)
  return value
}

export function getDailyDripFlashConfig(): DailyDripFlashConfig {
  const livemode = requireEnvironment("STRIPE_DAILY_DRIP_LIVEMODE")
  if (livemode !== "true" && livemode !== "false") {
    throw new Error("STRIPE_DAILY_DRIP_LIVEMODE must be true or false")
  }

  return {
    webhookSecret: requireStripeId("STRIPE_DAILY_DRIP_WEBHOOK_SECRET", "whsec_"),
    paymentLinkId: requireStripeId("STRIPE_DAILY_DRIP_FLASH_PAYMENT_LINK_ID", "plink_"),
    enrollmentFeePriceId: requireStripeId("STRIPE_DAILY_DRIP_ENROLLMENT_FEE_PRICE_ID", "price_"),
    tuitionPriceId: requireStripeId("STRIPE_DAILY_DRIP_TUITION_PRICE_ID", "price_"),
    expectedLivemode: livemode === "true",
    allowTestOutsideWindow: livemode === "false" && process.env.STRIPE_DAILY_DRIP_TEST_ALLOW_OUTSIDE_WINDOW === "true",
  }
}

function getId(value: string | { id: string } | null) {
  if (!value) return null
  return typeof value === "string" ? value : value.id
}

export function getPaymentLinkId(session: Stripe.Checkout.Session) {
  return getId(session.payment_link)
}

function normalizeEmail(email: string) {
  return email.trim().toLowerCase()
}

function scheduleIdempotencyKey(email: string, livemode: boolean) {
  const emailHash = createHash("sha256").update(normalizeEmail(email)).digest("hex")
  return `daily-drip-2027-flash-${livemode ? "live" : "test"}-${emailHash}`
}

function shortFailure(error: unknown) {
  const message = error instanceof Error ? error.message : "Unknown scheduling error"
  return message.replace(/\s+/g, " ").slice(0, 450)
}

function cohortMetadata(session: Stripe.Checkout.Session, eventId: string, paymentLinkId: string) {
  return {
    [META.program]: DAILY_DRIP_PROGRAM,
    [META.cohort]: DAILY_DRIP_COHORT,
    [META.tier]: "faith_flash_99",
    [META.session]: session.id,
    [META.paymentLink]: paymentLinkId,
    [META.event]: eventId,
  }
}

async function retrieveCustomer(stripe: Stripe, customerId: string) {
  const customer = await stripe.customers.retrieve(customerId)
  if (customer.deleted) throw new Error("Checkout Customer was deleted")
  return customer
}

async function validatePrices(stripe: Stripe, config: DailyDripFlashConfig) {
  const [enrollmentFee, tuition] = await Promise.all([
    stripe.prices.retrieve(config.enrollmentFeePriceId),
    stripe.prices.retrieve(config.tuitionPriceId),
  ])

  if (!enrollmentFee.active || enrollmentFee.currency !== EXPECTED_CURRENCY || enrollmentFee.unit_amount !== EXPECTED_AMOUNT || enrollmentFee.recurring) {
    throw new Error("Enrollment fee Price must be an active one-time USD $99 Price")
  }

  if (!tuition.active || tuition.currency !== EXPECTED_CURRENCY || tuition.unit_amount !== EXPECTED_AMOUNT || tuition.recurring?.interval !== "month" || tuition.recurring.interval_count !== 1) {
    throw new Error("Tuition Price must be an active recurring USD $99 monthly Price")
  }
}

async function validateEnrollmentLineItem(stripe: Stripe, session: Stripe.Checkout.Session, config: DailyDripFlashConfig) {
