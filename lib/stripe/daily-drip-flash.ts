import "server-only"
import { createHash } from "node:crypto"
import type Stripe from "stripe"
import {
  DAILY_DRIP_TUITION_START,
  isDailyDripEarlyWindow,
  isDailyDripFlashWindow,
} from "@/lib/daily-drip-schedule"

export const DAILY_DRIP_COHORT = "2027_january_june"
export const DAILY_DRIP_PROGRAM = "5_percent_daily_drip"

const ENROLLMENT_FEE_AMOUNT = 9_900
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

export type DailyDripPromotionalTierId = "flash" | "early"

export type DailyDripTierConfig = {
  id: DailyDripPromotionalTierId
  paymentLinkId: string
  enrollmentFeePriceId: string
  tuitionPriceId: string
  tuitionAmount: number
  metadataTier: string
  isEnrollmentWindow: (timestamp: number) => boolean
  windowDescription: string
}

export type DailyDripConfig = {
  webhookSecret: string
  expectedLivemode: boolean
  allowTestOutsideWindow: boolean
  tiers: DailyDripTierConfig[]
}

type ProcessResult =
  | { outcome: "scheduled"; scheduleId: string }
  | { outcome: "duplicate_prevented"; scheduleId: string }

export class DailyDripWindowClosedError extends Error {
  readonly tier: DailyDripPromotionalTierId

  constructor(tier: DailyDripPromotionalTierId, windowDescription: string) {
    super(`Enrollment payment completed outside the ${windowDescription}`)
    this.name = "DailyDripWindowClosedError"
    this.tier = tier
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

function optionalStripeId(name: string, prefix: string) {
  const value = process.env[name]?.trim()
  if (!value) return null
  if (!value.startsWith(prefix)) throw new Error(`${name} must begin with ${prefix}`)
  return value
}

export function getDailyDripConfig(): DailyDripConfig {
  const livemode = requireEnvironment("STRIPE_DAILY_DRIP_LIVEMODE")
  if (livemode !== "true" && livemode !== "false") {
    throw new Error("STRIPE_DAILY_DRIP_LIVEMODE must be true or false")
  }

  const enrollmentFeePriceId = requireStripeId("STRIPE_DAILY_DRIP_ENROLLMENT_FEE_PRICE_ID", "price_")
  const tiers: DailyDripTierConfig[] = [
    {
      id: "flash",
      paymentLinkId: requireStripeId("STRIPE_DAILY_DRIP_FLASH_PAYMENT_LINK_ID", "plink_"),
      enrollmentFeePriceId,
      tuitionPriceId: requireStripeId("STRIPE_DAILY_DRIP_TUITION_PRICE_ID", "price_"),
      tuitionAmount: 9_900,
      metadataTier: "faith_flash_99",
      isEnrollmentWindow: isDailyDripFlashWindow,
      windowDescription: "October 27–29 Eastern Time flash-sale window",
    },
  ]

  const earlyPaymentLinkId = optionalStripeId("STRIPE_DAILY_DRIP_EARLY_PAYMENT_LINK_ID", "plink_")
  const earlyTuitionPriceId = optionalStripeId("STRIPE_DAILY_DRIP_EARLY_TUITION_PRICE_ID", "price_")
  if (Boolean(earlyPaymentLinkId) !== Boolean(earlyTuitionPriceId)) {
    throw new Error("STRIPE_DAILY_DRIP_EARLY_PAYMENT_LINK_ID and STRIPE_DAILY_DRIP_EARLY_TUITION_PRICE_ID must be configured together")
  }
  if (earlyPaymentLinkId && earlyTuitionPriceId) {
    tiers.push({
      id: "early",
      paymentLinkId: earlyPaymentLinkId,
      enrollmentFeePriceId,
      tuitionPriceId: earlyTuitionPriceId,
      tuitionAmount: 29_900,
      metadataTier: "early_enrollment_299",
      isEnrollmentWindow: isDailyDripEarlyWindow,
      windowDescription: "October 30–December 15 Eastern Time early-enrollment window",
    })
  }

  return {
    webhookSecret: requireStripeId("STRIPE_DAILY_DRIP_WEBHOOK_SECRET", "whsec_"),
    expectedLivemode: livemode === "true",
    allowTestOutsideWindow: livemode === "false" && process.env.STRIPE_DAILY_DRIP_TEST_ALLOW_OUTSIDE_WINDOW === "true",
    tiers,
  }
}

function getId(value: string | { id: string } | null) {
  if (!value) return null
  return typeof value === "string" ? value : value.id
}

export function getPaymentLinkId(session: Stripe.Checkout.Session) {
  return getId(session.payment_link)
}

export function getTierForPaymentLink(config: DailyDripConfig, paymentLinkId: string | null) {
  if (!paymentLinkId) return null
  return config.tiers.find((tier) => tier.paymentLinkId === paymentLinkId) ?? null
}

function normalizeEmail(email: string) {
  return email.trim().toLowerCase()
}

function scheduleIdempotencyKey(email: string, livemode: boolean, tier: DailyDripPromotionalTierId) {
  const emailHash = createHash("sha256").update(normalizeEmail(email)).digest("hex")
  return `daily-drip-2027-${tier}-${livemode ? "live" : "test"}-${emailHash}`
}

function shortFailure(error: unknown) {
  const message = error instanceof Error ? error.message : "Unknown scheduling error"
  return message.replace(/\s+/g, " ").slice(0, 450)
}

function cohortMetadata(session: Stripe.Checkout.Session, eventId: string, tier: DailyDripTierConfig) {
  return {
    [META.program]: DAILY_DRIP_PROGRAM,
    [META.cohort]: DAILY_DRIP_COHORT,
    [META.tier]: tier.metadataTier,
    [META.session]: session.id,
    [META.paymentLink]: tier.paymentLinkId,
    [META.event]: eventId,
  }
}

async function retrieveCustomer(stripe: Stripe, customerId: string) {
  const customer = await stripe.customers.retrieve(customerId)
  if (customer.deleted) throw new Error("Checkout Customer was deleted")
  return customer
}

async function validatePrices(stripe: Stripe, tier: DailyDripTierConfig) {
  const [enrollmentFee, tuition] = await Promise.all([
    stripe.prices.retrieve(tier.enrollmentFeePriceId),
    stripe.prices.retrieve(tier.tuitionPriceId),
  ])

  if (!enrollmentFee.active || enrollmentFee.currency !== EXPECTED_CURRENCY || enrollmentFee.unit_amount !== ENROLLMENT_FEE_AMOUNT || enrollmentFee.recurring) {
    throw new Error("Enrollment fee Price must be an active one-time USD $99 Price")
  }

  if (!tuition.active || tuition.currency !== EXPECTED_CURRENCY || tuition.unit_amount !== tier.tuitionAmount || tuition.recurring?.interval !== "month" || tuition.recurring.interval_count !== 1) {
    throw new Error(`Tuition Price must be an active recurring USD $${tier.tuitionAmount / 100} monthly Price`)
  }
}

async function validateEnrollmentLineItem(stripe: Stripe, session: Stripe.Checkout.Session, tier: DailyDripTierConfig) {
  const lineItems = await stripe.checkout.sessions.listLineItems(session.id, { limit: 100 })
  if (lineItems.data.length !== 1) throw new Error("Checkout must contain exactly one enrollment fee line item")

  const lineItem = lineItems.data[0]
  const priceId = lineItem.price?.id
  if (priceId !== tier.enrollmentFeePriceId || lineItem.quantity !== 1 || lineItem.amount_subtotal !== ENROLLMENT_FEE_AMOUNT || lineItem.currency !== EXPECTED_CURRENCY) {
    throw new Error("Checkout line item does not match the configured $99 enrollment fee Price")
  }

  if (session.amount_subtotal !== ENROLLMENT_FEE_AMOUNT || session.amount_total !== ENROLLMENT_FEE_AMOUNT || session.currency !== EXPECTED_CURRENCY) {
    throw new Error("Checkout total must be exactly USD $99")
  }
}

async function validatePaymentLink(stripe: Stripe, config: DailyDripConfig, tier: DailyDripTierConfig) {
  const paymentLink = await stripe.paymentLinks.retrieve(tier.paymentLinkId)
  if (!paymentLink.active) throw new Error("Payment Link is inactive")
  if (paymentLink.livemode !== config.expectedLivemode) throw new Error("Payment Link livemode does not match the webhook environment")
  if (paymentLink.customer_creation !== "always") throw new Error("Payment Link must always create a Customer")
  if (paymentLink.payment_intent_data?.setup_future_usage !== "off_session") {
    throw new Error("Payment Link must save the payment method with off_session future usage")
  }
  if (paymentLink.automatic_tax.enabled) throw new Error("Payment Link automatic tax must be disabled so the enrollment total remains $99")
}

async function retrieveReusablePaymentMethod(stripe: Stripe, session: Stripe.Checkout.Session, customerId: string) {
  const paymentIntentId = getId(session.payment_intent)
  if (!paymentIntentId) throw new Error("Checkout Session has no PaymentIntent")

  const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId, { expand: ["payment_method", "latest_charge"] })
  if (paymentIntent.status !== "succeeded" || paymentIntent.amount_received !== ENROLLMENT_FEE_AMOUNT || paymentIntent.currency !== EXPECTED_CURRENCY) {
    throw new Error("Enrollment PaymentIntent is not a successful USD $99 payment")
  }
  if (getId(paymentIntent.customer) !== customerId) throw new Error("PaymentIntent Customer does not match Checkout Customer")
  if (paymentIntent.setup_future_usage !== "off_session") throw new Error("PaymentIntent is not authorized for future off-session use")

  const paymentMethodObject = paymentIntent.payment_method
  const paymentMethodId = getId(paymentMethodObject)
  if (!paymentMethodId) throw new Error("PaymentIntent has no saved PaymentMethod")
  const paymentMethod = typeof paymentMethodObject === "string" ? await stripe.paymentMethods.retrieve(paymentMethodId) : paymentMethodObject
  if (!paymentMethod) throw new Error("PaymentIntent PaymentMethod could not be retrieved")
  if (!SUPPORTED_PAYMENT_METHODS.has(paymentMethod.type)) throw new Error("Payment method is not supported for automatic Daily Drip tuition billing")
  if (getId(paymentMethod.customer) !== customerId) throw new Error("PaymentMethod is not attached to the Checkout Customer")

  const latestCharge = paymentIntent.latest_charge
  if (!latestCharge || typeof latestCharge === "string" || latestCharge.status !== "succeeded" || !latestCharge.paid || latestCharge.refunded) {
    throw new Error("Enrollment charge is not a successful, unreversed payment")
  }

  return { paymentIntent, paymentMethod }
}

async function findCohortScheduleForCustomer(stripe: Stripe, customerId: string) {
  const schedules = await stripe.subscriptionSchedules.list({ customer: customerId, limit: 100 })
  return schedules.data.find((schedule) => schedule.metadata?.[META.program] === DAILY_DRIP_PROGRAM && schedule.metadata?.[META.cohort] === DAILY_DRIP_COHORT)
}

async function findExistingCohortSchedule(stripe: Stripe, customerId: string, email: string) {
  const customerIds = new Set<string>([customerId])
  const matchingCustomers = await stripe.customers.list({ email: normalizeEmail(email), limit: 100 })
  matchingCustomers.data.forEach((customer) => customerIds.add(customer.id))

  for (const id of customerIds) {
    const schedule = await findCohortScheduleForCustomer(stripe, id)
    if (schedule) return schedule
  }

  return null
}

async function recordSuccess(stripe: Stripe, session: Stripe.Checkout.Session, customerId: string, paymentIntentId: string, scheduleId: string, eventId: string, duplicate: boolean) {
  const status = duplicate ? "duplicate_schedule_prevented" : "scheduled"
  const metadata = {
    [META.status]: status,
    [META.schedule]: scheduleId,
    [META.event]: eventId,
    [META.session]: session.id,
  }

  await Promise.all([
    stripe.customers.update(customerId, { metadata }),
    stripe.checkout.sessions.update(session.id, { metadata }),
    stripe.paymentIntents.update(paymentIntentId, { metadata }),
  ])
}

export async function flagDailyDripSchedulingFailure(stripe: Stripe, session: Stripe.Checkout.Session, eventId: string, error: unknown) {
  const customerId = getId(session.customer)
  const paymentIntentId = getId(session.payment_intent)
  const metadata = {
    [META.status]: "scheduling_failed",
    [META.failure]: shortFailure(error),
    [META.event]: eventId,
    [META.session]: session.id,
  }
  const updates: Promise<unknown>[] = [stripe.checkout.sessions.update(session.id, { metadata })]
  if (customerId) updates.push(stripe.customers.update(customerId, { metadata }))
  if (paymentIntentId) updates.push(stripe.paymentIntents.update(paymentIntentId, { metadata }))
  await Promise.allSettled(updates)
}

export async function processDailyDripCheckout(
  stripe: Stripe,
  incomingSession: Stripe.Checkout.Session,
  event: Stripe.Event,
  config: DailyDripConfig,
  tier: DailyDripTierConfig,
): Promise<ProcessResult> {
  if (event.livemode !== config.expectedLivemode) throw new Error("Stripe event livemode does not match STRIPE_DAILY_DRIP_LIVEMODE")

  const session = await stripe.checkout.sessions.retrieve(incomingSession.id)
  if (getPaymentLinkId(session) !== tier.paymentLinkId) throw new Error("Checkout Session did not originate from the configured Payment Link")
  if (session.mode !== "payment" || session.status !== "complete" || session.payment_status !== "paid") {
    throw new Error("Checkout Session is not a completed, paid one-time payment")
  }

  await Promise.all([
    validatePaymentLink(stripe, config, tier),
    validatePrices(stripe, tier),
    validateEnrollmentLineItem(stripe, session, tier),
  ])

  const customerId = getId(session.customer)
  if (!customerId) throw new Error("Checkout Session has no Customer")
  const customer = await retrieveCustomer(stripe, customerId)
  const email = session.customer_details?.email ?? customer.email
  if (!email) throw new Error("Checkout Session has no customer email for duplicate prevention")

  const { paymentIntent, paymentMethod } = await retrieveReusablePaymentMethod(stripe, session, customerId)
  const existingSchedule = await findExistingCohortSchedule(stripe, customerId, email)
  if (existingSchedule) {
    await recordSuccess(stripe, session, customerId, paymentIntent.id, existingSchedule.id, event.id, true)
    return { outcome: "duplicate_prevented", scheduleId: existingSchedule.id }
  }

  if (!tier.isEnrollmentWindow(event.created) && !config.allowTestOutsideWindow) {
    throw new DailyDripWindowClosedError(tier.id, tier.windowDescription)
  }

  const metadata = cohortMetadata(session, event.id, tier)
  const schedule = await stripe.subscriptionSchedules.create({
    customer: customerId,
    billing_mode: { type: "classic" },
    start_date: DAILY_DRIP_TUITION_START,
    end_behavior: "cancel",
    default_settings: {
      billing_cycle_anchor: "phase_start",
      collection_method: "charge_automatically",
      default_payment_method: paymentMethod.id,
      description: "5% Daily Drip™ January–June 2027 tuition",
    },
    phases: [
      {
        billing_cycle_anchor: "phase_start",
        collection_method: "charge_automatically",
        default_payment_method: paymentMethod.id,
        duration: { interval: "month", interval_count: 6 },
        items: [{ price: tier.tuitionPriceId, quantity: 1 }],
        metadata,
        proration_behavior: "none",
      },
    ],
    metadata,
  }, {
    idempotencyKey: scheduleIdempotencyKey(email, event.livemode, tier.id),
  })

  await recordSuccess(stripe, session, customerId, paymentIntent.id, schedule.id, event.id, false)
  return { outcome: "scheduled", scheduleId: schedule.id }
}
