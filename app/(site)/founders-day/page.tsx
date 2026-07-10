import type { Metadata } from "next"
import FoundersDayHero from "@/components/sections/founders-day/FoundersDayHero"
import FoundersDayTiers from "@/components/sections/founders-day/FoundersDayTiers"

export const metadata: Metadata = {
  title: "Founders Day",
  description: "Celebrate Founders Day with Arletta The Friendly Trader. Your support helps continue the mission of trading education and community.",
}

export default function FoundersDayPage() {
  return (
    <div className="pt-[72px]">
      <FoundersDayHero />
      <FoundersDayTiers />
    </div>
  )
}
