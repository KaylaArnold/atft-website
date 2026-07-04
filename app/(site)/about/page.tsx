import type { Metadata } from "next"
import AboutHero from "@/components/sections/about/AboutHero"
import ArlettsStory from "@/components/sections/about/ArlettsStory"
import CoachTrent from "@/components/sections/about/CoachTrent"
import Philosophy from "@/components/sections/about/Philosophy"
import CoreValues from "@/components/sections/about/CoreValues"
import AboutCTA from "@/components/sections/about/AboutCTA"

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Arletta The Friendly Trader — her journey from $100 to $350,000, the 5% DRIP Method, and the team behind the education.",
}

export default function AboutPage() {
  return (
    <div className="pt-[72px]">
      <AboutHero />
      <ArlettsStory />
      <CoachTrent />
      <Philosophy />
      <CoreValues />
      <AboutCTA />
    </div>
  )
}
