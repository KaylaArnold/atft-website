import type Stripe from "stripe"
import { NextRequest, NextResponse } from "next/server"
import {
  DailyDripWindowClosedError,
  flagDailyDripSchedulingFailure,
  getDailyDripConfig,
  getPaymentLinkId,
  getTierForPaymentLink,
  processDailyDripCheckout,
} from "@/lib/stripe/daily-drip-flash"
import { getStripeClient } from "@/lib/stripe/server"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const SUCCESS_EVENTS = new Set<Stripe.Event.Type>([
  "checkout.session.completed",
  "checkout.session.async_payment_succeeded",
])

export async function POST(request: NextRequest) {
  let event: Stripe.Event
  let config
  let stripe

  try {
    config = getDailyDripConfig()
    stripe = getStripeClient()
    const signature = request.headers.get("stripe-signature")
    if (!signature) return NextResponse.json({ error: "Missing Stripe-Signature header" }, { status: 400 })
    const rawBody = await request.text()
    event = stripe.webhooks.constructEvent(rawBody, signature, config.webhookSecret)
  } catch (error) {
    console.error("[daily-drip-webhook] Signature or configuration error", error)
    return NextResponse.json({ error: "Invalid Stripe webhook request" }, { status: 400 })
  }

  if (event.type !== "checkout.session.completed" && event.type !== "checkout.session.async_payment_succeeded" && event.type !== "checkout.session.async_payment_failed") {
    return NextResponse.json({ received: true, ignored: true })
  }

  const incomingSession = event.data.object as Stripe.Checkout.Session
  const tier = getTierForPaymentLink(config, getPaymentLinkId(incomingSession))
  if (!tier) {
    return NextResponse.json({ received: true, ignored: true })
  }

  if (event.type === "checkout.session.async_payment_failed") {
    await flagDailyDripSchedulingFailure(stripe, incomingSession, event.id, new Error("Enrollment payment failed asynchronously"))
    console.error("[daily-drip-webhook] Enrollment payment failed", { eventId: event.id, sessionId: incomingSession.id, tier: tier.id })
    return NextResponse.json({ received: true, paymentFailed: true })
  }

  if (!SUCCESS_EVENTS.has(event.type)) return NextResponse.json({ received: true, ignored: true })

  try {
    const result = await processDailyDripCheckout(stripe, incomingSession, event, config, tier)
    console.info("[daily-drip-webhook] Checkout processed", { eventId: event.id, sessionId: incomingSession.id, tier: tier.id, ...result })
    return NextResponse.json({ received: true, ...result })
  } catch (error) {
    await flagDailyDripSchedulingFailure(stripe, incomingSession, event.id, error)
    if (error instanceof DailyDripWindowClosedError) {
      console.error("[daily-drip-webhook] Enrollment rejected outside the configured window", { eventId: event.id, sessionId: incomingSession.id, tier: error.tier })
      return NextResponse.json({ received: true, rejected: `outside_${error.tier}_enrollment_window` })
    }
    console.error("[daily-drip-webhook] Schedule creation failed; Stripe should retry", { eventId: event.id, sessionId: incomingSession.id, tier: tier.id, error })
    return NextResponse.json({ error: "Daily Drip tuition scheduling failed" }, { status: 500 })
  }
}
