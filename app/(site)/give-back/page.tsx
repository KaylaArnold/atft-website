import type { Metadata } from "next"
import GiveBackHero from "@/components/sections/give-back/GiveBackHero"
import CousinsPot from "@/components/sections/give-back/CousinsPot"
import FoundersFund from "@/components/sections/give-back/FoundersFund"
import FoundersDayDonors from "@/components/sections/give-back/FoundersDayDonors"

export const metadata: Metadata = {
  title: "Give Back",
  description: "Support the ATFT community through the Cousins Pot or contribute to the Founder's Fund. Together we rise.",
}

export default function GiveBackPage() {
  return (
    <div className="pt-[72px]">
      <GiveBackHero />
      <CousinsPot />
      <FoundersFund />
      <FoundersDayDonors />
    </div>
  )
}