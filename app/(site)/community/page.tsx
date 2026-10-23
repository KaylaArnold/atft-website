import type { Metadata } from "next"
import CommunityHero from "@/components/sections/community/CommunityHero"
import CommunityBenefits from "@/components/sections/community/CommunityBenefits"
import DailyDripEnrollment from "@/components/sections/community/DailyDripEnrollment"
import DailyDripClosing from "@/components/sections/community/DailyDripClosing"
import { getDailyDripCheckoutAvailability } from "@/lib/daily-drip-enrollment"

export const metadata: Metadata = {
  title: "5% Daily Drip™ | January–June 2027",
  description: "Welcome to the 5% Daily Drip™ six-month trading education and mentorship experience. Explore January–June 2027 enrollment options.",
}

export default function CommunityPage() {
  const checkoutAvailability = getDailyDripCheckoutAvailability()

  return (
    <div className="pt-[72px]">
      <CommunityHero />
      <CommunityBenefits />
      <DailyDripEnrollment checkoutAvailability={checkoutAvailability} />
      <DailyDripClosing />
    </div>
  )
}
