import type { Metadata } from "next"
import CommunityHero from "@/components/sections/community/CommunityHero"
import CommunityBenefits from "@/components/sections/community/CommunityBenefits"
import CommunityFAQ from "@/components/sections/community/CommunityFAQ"

export const metadata: Metadata = {
  title: "Community",
  description: "Join the 5% Drippers waitlist — Arletta's private trading community opens enrollment in July and November each year.",
}

export default function CommunityPage() {
  return (
    <div className="pt-[72px]">
      <CommunityHero />
      <CommunityBenefits />
      <CommunityFAQ />
    </div>
  )
}
