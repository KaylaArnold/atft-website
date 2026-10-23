import "server-only"
import Stripe from "stripe"

export const STRIPE_API_VERSION = "2026-09-30.endive" as const

let stripeClient: Stripe | undefined

function requireStripeSecretKey() {
  const value = process.env.STRIPE_SECRET_KEY?.trim()
  if (!value) throw new Error("Missing STRIPE_SECRET_KEY")
  return value
}

export function getStripeClient() {
  if (!stripeClient) {
    stripeClient = new Stripe(requireStripeSecretKey(), {
      apiVersion: STRIPE_API_VERSION,
      maxNetworkRetries: 2,
      timeout: 20_000,
      appInfo: {
        name: "ATFT 5% Daily Drip",
        version: "2027.1",
      },
    })
  }

  return stripeClient
}
