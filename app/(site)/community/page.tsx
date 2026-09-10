import type { Metadata } from "next"
import CommunityHero from "@/components/sections/community/CommunityHero"
import CommunityBenefits from "@/components/sections/community/CommunityBenefits"

export const metadata: Metadata = {
  title: "Community",
  description: "The current 5% Drippers class is underway. Join the waitlist for the next enrollment period in October 2026.",
}

export default function CommunityPage() {
  return (
    <div className="pt-[72px]">
      <CommunityHero />
      <CommunityBenefits />
    </div>
  )
}
