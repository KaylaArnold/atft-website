import type { Metadata } from "next"
import AtlantaHero from "@/components/sections/atlanta/AtlantaHero"
import AtlantaHotels from "@/components/sections/atlanta/AtlantaHotels"
import AtlantaDining from "@/components/sections/atlanta/AtlantaDining"
import AtlantaTransportation from "@/components/sections/atlanta/AtlantaTransportation"
import AtlantaThingsToDo from "@/components/sections/atlanta/AtlantaThingsToDo"
import AtlantaCTA from "@/components/sections/atlanta/AtlantaCTA"

export const metadata: Metadata = {
  title: "Atlanta Guide",
  description: "Planning a trip to Atlanta for a class or session with Arletta The Friendly Trader? Here is everything you need — hotels, dining, transportation, and things to do in Midtown Atlanta.",
}

export default function AtlantaGuidePage() {
  return (
    <div className="pt-[72px]">
      <AtlantaHero />
      <AtlantaHotels />
      <AtlantaDining />
      <AtlantaTransportation />
      <AtlantaThingsToDo />
      <AtlantaCTA />
    </div>
  )
}
