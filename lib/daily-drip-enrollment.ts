import "server-only"
import type { DailyDripTierId } from "@/lib/daily-drip-schedule"

export { getCurrentDailyDripTier } from "@/lib/daily-drip-schedule"
export type { DailyDripTierId } from "@/lib/daily-drip-schedule"

const CHECKOUT_URLS: Record<DailyDripTierId, string> = {
  flash: "",
  early: "",
  standard: "",
}

export function getDailyDripCheckoutUrl(tier: DailyDripTierId) {
  return CHECKOUT_URLS[tier]
}

export function getDailyDripCheckoutAvailability() {
  return {
    flash: Boolean(CHECKOUT_URLS.flash),
    early: Boolean(CHECKOUT_URLS.early),
    standard: Boolean(CHECKOUT_URLS.standard),
  }
}
