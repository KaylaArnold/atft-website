import type { Metadata } from "next"
import CommunityHero from "@/components/sections/community/CommunityHero"
import CommunityBenefits from "@/components/sections/community/CommunityBenefits"
import CommunityPricing from "@/components/sections/community/CommunityPricing"
import CommunityFAQ from "@/components/sections/community/CommunityFAQ"
import AboutCTA from "@/components/sections/about/AboutCTA"

export const metadata: Metadata = {
  title: "Community",
  description: "Join the 5% Drippers — Arletta's private trading community with daily live sessions, replays, and real support for 299 per month.",
}

export default function CommunityPage() {
  return (
    <div className="pt-[72px]">
      <CommunityHero />
      <CommunityBenefits />
      <CommunityPricing />
      <CommunityFAQ />
      <AboutCTA />
    </div>
  )
}
