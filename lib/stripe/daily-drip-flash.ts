import "server-only"
import { createHash } from "node:crypto"
import type Stripe from "stripe"
import { DAILY_DRIP_TUITION_START, isDailyDripFlashWindow } from "@/lib/daily-drip-schedule"

export const DAILY_DRIP_COHORT = "2027_january_june"
export const DAILY_DRIP_PROGRAM = "5_percent_daily_drip"

const EXPECTED_AMOUNT = 9_900
const EXPECTED_CURRENCY = "usd"
const SUPPORTED_PAYMENT_METHODS = new Set(["card", "link"])

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
  const lineItems = await stripe.checkout.sessions.listLineItems(session.id, { limit: 100 })
  if (lineItems.data.length !== 1) throw new Error("Checkout must contain exactly one enrollment fee line item")

  const lineItem = lineItems.data[0]
  const priceId = lineItem.price?.id
  if (priceId !== config.enrollmentFeePriceId || lineItem.quantity !== 1 || lineItem.amount_subtotal !== EXPECTED_AMOUNT || lineItem.currency !== EXPECTED_CURRENCY) {
    throw new Error("Checkout line item does not match the configured $99 enrollment fee Price")
  }

  if (session.amount_subtotal !== EXPECTED_AMOUNT || session.amount_total !== EXPECTED_AMOUNT || session.currency !== EXPECTED_CURRENCY) {
    throw new Error("Checkout total must be exactly USD $99")
  }
}

async function validatePaymentLink(stripe: Stripe, config: DailyDripFlashConfig) {
  const paymentLink = await stripe.paymentLinks.retrieve(config.paymentLinkId)
  if (paymentLink.livemode !== config.expectedLivemode) throw new Error("Payment Link livemode does not match the webhook environment")
  if (paymentLink.payment_intent_data?.setup_future_usage !== "off_session") {
    throw new Error("Payment Link must save the payment method with off_session future usage")
  }
}

async function retrieveReusableCard(stripe: Stripe, session: Stripe.Checkout.Session, customerId: string) {
  const paymentIntentId = getId(session.payment_intent)
  if (!paymentIntentId) throw new Error("Checkout Session has no PaymentIntent")

  const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId, { expand: ["payment_method", "latest_charge"] })
  if (paymentIntent.status !== "succeeded" || paymentIntent.amount_received !== EXPECTED_AMOUNT || paymentIntent.currency !== EXPECTED_CURRENCY) {
    throw new Error("Enrollment PaymentIntent is not a successful USD $99 payment")
  }
  if (getId(paymentIntent.customer) !== customerId) throw new Error("PaymentIntent Customer does not match Checkout Customer")
  if (paymentIntent.setup_future_usage !== "off_session") throw new Error("PaymentIntent is not authorized for future off-session use")

  const paymentMethodObject = paymentIntent.payment_method
  const paymentMethodId = getId(paymentMethodObject)
  if (!paymentMethodId) throw new Error("PaymentIntent has no saved PaymentMethod")
  const paymentMethod = typeof paymentMethodObject === "string" ? await stripe.paymentMethods.retrieve(paymentMethodId) : paymentMethodObject
  if (!paymentMethod) throw new Error("PaymentIntent PaymentMethod could not be retrieved")
  if (!SUPPORTED_PAYMENT_METHODS.has(paymentMethod.type)) throw new Error("Only reusable card or Link payment methods are supported for automatic tuition billing")
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

export async function processDailyDripFlashCheckout(stripe: Stripe, incomingSession: Stripe.Checkout.Session, event: Stripe.Event, config: DailyDripFlashConfig): Promise<ProcessResult> {
  if (event.livemode !== config.expectedLivemode) throw new Error("Stripe event livemode does not match STRIPE_DAILY_DRIP_LIVEMODE")

  const session = await stripe.checkout.sessions.retrieve(incomingSession.id)
  if (getPaymentLinkId(session) !== config.paymentLinkId) throw new Error("Checkout Session did not originate from the configured flash-sale Payment Link")
  if (session.mode !== "payment" || session.status !== "complete" || session.payment_status !== "paid") {
    throw new Error("Checkout Session is not a completed, paid one-time payment")
  }

  await Promise.all([
    validatePaymentLink(stripe, config),
    validatePrices(stripe, config),
    validateEnrollmentLineItem(stripe, session, config),
  ])

  const customerId = getId(session.customer)
  if (!customerId) throw new Error("Checkout Session has no Customer")
  const customer = await retrieveCustomer(stripe, customerId)
  const email = session.customer_details?.email ?? customer.email
  if (!email) throw new Error("Checkout Session has no customer email for duplicate prevention")

  const { paymentIntent, paymentMethod } = await retrieveReusableCard(stripe, session, customerId)
  const existingSchedule = await findExistingCohortSchedule(stripe, customerId, email)
  if (existingSchedule) {
    await recordSuccess(stripe, session, customerId, paymentIntent.id, existingSchedule.id, event.id, true)
    return { outcome: "duplicate_prevented", scheduleId: existingSchedule.id }
  }

  if (!isDailyDripFlashWindow(event.created) && !config.allowTestOutsideWindow) {
    throw new DailyDripWindowClosedError()
  }

  const metadata = cohortMetadata(session, event.id, config.paymentLinkId)
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
        items: [{ price: config.tuitionPriceId, quantity: 1 }],
        metadata,
        proration_behavior: "none",
      },
    ],
    metadata,
  }, {
    idempotencyKey: scheduleIdempotencyKey(email, event.livemode),
  })

  await recordSuccess(stripe, session, customerId, paymentIntent.id, schedule.id, event.id, false)
  return { outcome: "scheduled", scheduleId: schedule.id }
}
