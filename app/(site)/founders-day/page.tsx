import type { Metadata } from "next"
import FoundersDayHero from "@/components/sections/founders-day/FoundersDayHero"
import FoundersDayTiers from "@/components/sections/founders-day/FoundersDayTiers"

export const metadata: Metadata = {
  title: "Founders Day",
  description: "Celebrate Founders Day with Arletta The Friendly Trader. Your support helps continue the mission of trading education and community.",
  openGraph: {
    title: "Founder's Day - Arletta The Friendly Trader",
    description: "Show your support for Coach Arletta on Founder's Day, July 11, 2026.",
    images: [
      {
        url: '/images/founders-day-og.png',
        width: 1200,
        height: 630,
        alt: "Founder's Day - Arletta The Friendly Trader",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Founder's Day - Arletta The Friendly Trader",
    description: "Show your support for Coach Arletta on Founder's Day, July 11, 2026.",
    images: ['/images/founders-day-og.png'],
  },
}

export default function FoundersDayPage() {
  return (
    <div className="pt-[72px]">
      <FoundersDayHero />
      <FoundersDayTiers />
    </div>
  )
}
