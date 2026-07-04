import type { Metadata } from "next"
import ProgramsHero from "@/components/sections/programs/ProgramsHero"
import ProgramsGrid from "@/components/sections/programs/ProgramsGrid"

export const metadata: Metadata = {
  title: "Programs",
  description: "Explore all trading education programs by Arletta The Friendly Trader — from beginner to advanced, in-person to online.",
}

export default function ProgramsPage() {
  return (
    <div className="pt-[72px]">
      <ProgramsHero />
      <ProgramsGrid />
    </div>
  )
}