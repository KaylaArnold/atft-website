import { NextRequest, NextResponse } from "next/server"
import { getCurrentDailyDripTier, getDailyDripCheckoutUrl, type DailyDripTierId } from "@/lib/daily-drip-enrollment"

export const dynamic = "force-dynamic"

export function GET(request: NextRequest) {
  const requestedTier = request.nextUrl.searchParams.get("tier")
  const validTiers: DailyDripTierId[] = ["flash", "early", "standard"]

  if (!requestedTier || !validTiers.includes(requestedTier as DailyDripTierId)) {
    return NextResponse.redirect(new URL("/community?enrollment=unavailable#enrollment", request.url))
  }

  const tier = requestedTier as DailyDripTierId
  const activeTier = getCurrentDailyDripTier()
  const checkoutUrl = getDailyDripCheckoutUrl(tier)

  if (activeTier !== tier || !checkoutUrl) {
    return NextResponse.redirect(new URL("/community?enrollment=unavailable#enrollment", request.url))
  }

  return NextResponse.redirect(checkoutUrl)
}
