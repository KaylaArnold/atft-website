import type { Metadata } from "next"
import CommunityHero from "@/components/sections/community/CommunityHero"
import CommunityBenefits from "@/components/sections/community/CommunityBenefits"
import DailyDripEnrollment from "@/components/sections/community/DailyDripEnrollment"
import DailyDripWaitlist from "@/components/sections/community/DailyDripWaitlist"
import DailyDripClosing from "@/components/sections/community/DailyDripClosing"
import AtftCommunityAccess from "@/components/sections/community/AtftCommunityAccess"
import { getDailyDripCheckoutAvailability } from "@/lib/daily-drip-enrollment"

export const metadata: Metadata = {
  title: "ATFT Community & 5% Daily Drip™",
  description: "Explore the January–June 2027 5% Daily Drip™ cohort or join the ATFT Community with immediate, ongoing monthly access.",
}

export default function CommunityPage() {
  const checkoutAvailability = getDailyDripCheckoutAvailability()

  return (
    <div className="pt-[72px]">
      <CommunityHero />
      <CommunityBenefits />
      <DailyDripEnrollment checkoutAvailability={checkoutAvailability} />
      <AtftCommunityAccess />
      <DailyDripWaitlist />
      <DailyDripClosing />
    </div>
  )
}
