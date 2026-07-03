import type { Metadata } from "next"
import EventsHero from "@/components/sections/events/EventsHero"
import EventsGrid from "@/components/sections/events/EventsGrid"
import AboutCTA from "@/components/sections/about/AboutCTA"

export const metadata: Metadata = {
  title: "Events",
  description: "Upcoming events from Arletta The Friendly Trader — community gatherings, live sessions, celebrations, and more.",
}

export default function EventsPage() {
  return (
    <div className="pt-[72px]">
      <EventsHero />
      <EventsGrid />
      <AboutCTA />
    </div>
  )
}
