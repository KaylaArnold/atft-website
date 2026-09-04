import type { Metadata } from "next"
import CommunityHero from "@/components/sections/community/CommunityHero"
import CommunityBenefits from "@/components/sections/community/CommunityBenefits"

export const metadata: Metadata = {
  title: "Community",
  description: "Enrollment is open for Arletta's private 5% Drippers trading community at $299 per month.",
}

export default function CommunityPage() {
  return (
    <div className="pt-[72px]">
      <CommunityHero />
      <CommunityBenefits />
    </div>
  )
}
