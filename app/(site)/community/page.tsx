import type { Metadata } from "next"
import CommunityHero from "@/components/sections/community/CommunityHero"
import CommunityBenefits from "@/components/sections/community/CommunityBenefits"

export const metadata: Metadata = {
  title: "Community",
  description: "Join the waitlist for Mini Dripper early enrollment opening November 9, 2026. Classes begin January 18, 2027.",
}

export default function CommunityPage() {
  return (
    <div className="pt-[72px]">
      <CommunityHero />
      <CommunityBenefits />
    </div>
  )
}
