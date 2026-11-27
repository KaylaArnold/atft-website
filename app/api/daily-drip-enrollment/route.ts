import { NextRequest, NextResponse } from "next/server"
import { getCurrentDailyDripTier, getDailyDripCheckoutUrl, type DailyDripTierId } from "@/lib/daily-drip-enrollment"
import { isAtftCommunityAccessOpen, isDailyDripEarlyCheckoutWindow, isDailyDripThanksgivingFlashWindow } from "@/lib/daily-drip-schedule"

export const dynamic = "force-dynamic"

export function GET(request: NextRequest) {
  const requestedTier = request.nextUrl.searchParams.get("tier")
  const validTiers: DailyDripTierId[] = ["flash", "early", "standard"]

  if (!requestedTier || !validTiers.includes(requestedTier as DailyDripTierId)) {
    return NextResponse.redirect(new URL("/community?enrollment=unavailable#enrollment", request.url))
  }

  const tier = requestedTier as DailyDripTierId
  const now = Math.floor(Date.now() / 1000)
  const activeTier = getCurrentDailyDripTier()
  const checkoutUrl = getDailyDripCheckoutUrl(tier)
  const isThanksgivingFlash = tier === "flash" && isDailyDripThanksgivingFlashWindow(now)

  if (isAtftCommunityAccessOpen(now)) {
    if (tier === "flash") {
      return NextResponse.redirect(new URL("/community?enrollment=unavailable#enrollment", request.url))
    }
    const cohortCheckoutUrl = isDailyDripEarlyCheckoutWindow(now) ? getDailyDripCheckoutUrl("early") : ""
    return cohortCheckoutUrl
      ? NextResponse.redirect(cohortCheckoutUrl)
      : NextResponse.redirect(new URL("/community?enrollment=unavailable#enrollment", request.url))
  }

  if ((activeTier !== tier && !isThanksgivingFlash) || !checkoutUrl) {
    return NextResponse.redirect(new URL("/community?enrollment=unavailable#enrollment", request.url))
  }

  return NextResponse.redirect(checkoutUrl)
}
