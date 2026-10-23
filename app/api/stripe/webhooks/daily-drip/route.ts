import type Stripe from "stripe"
import { NextRequest, NextResponse } from "next/server"
import { DailyDripWindowClosedError, flagDailyDripSchedulingFailure, getDailyDripFlashConfig, getPaymentLinkId, processDailyDripFlashCheckout } from "@/lib/stripe/daily-drip-flash"
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
    config = getDailyDripFlashConfig()
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
  if (getPaymentLinkId(incomingSession) !== config.paymentLinkId) {
    return NextResponse.json({ received: true, ignored: true })
  }

  if (event.type === "checkout.session.async_payment_failed") {
    await flagDailyDripSchedulingFailure(stripe, incomingSession, event.id, new Error("Enrollment payment failed asynchronously"))
    console.error("[daily-drip-webhook] Enrollment payment failed", { eventId: event.id, sessionId: incomingSession.id })
    return NextResponse.json({ received: true, paymentFailed: true })
  }

  if (!SUCCESS_EVENTS.has(event.type)) return NextResponse.json({ received: true, ignored: true })

  try {
    const result = await processDailyDripFlashCheckout(stripe, incomingSession, event, config)
    console.info("[daily-drip-webhook] Checkout processed", { eventId: event.id, sessionId: incomingSession.id, ...result })
    return NextResponse.json({ received: true, ...result })
  } catch (error) {
    await flagDailyDripSchedulingFailure(stripe, incomingSession, event.id, error)
    if (error instanceof DailyDripWindowClosedError) {
      console.error("[daily-drip-webhook] Enrollment rejected outside the flash-sale window", { eventId: event.id, sessionId: incomingSession.id })
      return NextResponse.json({ received: true, rejected: "outside_flash_sale_window" })
    }
    console.error("[daily-drip-webhook] Schedule creation failed; Stripe should retry", { eventId: event.id, sessionId: incomingSession.id, error })
    return NextResponse.json({ error: "Daily Drip tuition scheduling failed" }, { status: 500 })
  }
}
