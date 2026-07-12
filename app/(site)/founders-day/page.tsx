import type { Metadata } from "next"
import FoundersDayHero from "@/components/sections/founders-day/FoundersDayHero"
import FoundersDayReplay from "@/components/sections/founders-day/FoundersDayReplay"
import FoundersDayTiers from "@/components/sections/founders-day/FoundersDayTiers"

export const metadata: Metadata = {
  title: "Founders Day",
  description: "Celebrate Founders Day with Arletta The Friendly Trader. Your support helps continue the mission of trading education and community.",
  openGraph: {
    title: "Founder's Day - Arletta The Friendly Trader",
    description: "Show your support for Coach Arletta on Founder's Day, July 11, 2026.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Founder's Day - Arletta The Friendly Trader",
    description: "Show your support for Coach Arletta on Founder's Day, July 11, 2026.",
  },
}

export default function FoundersDayPage() {
  return (
    <div className="pt-[72px]">
      <FoundersDayHero />
      <FoundersDayReplay />
      <FoundersDayTiers />
    </div>
  )
}