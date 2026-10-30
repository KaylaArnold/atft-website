import type { Metadata } from "next"
import ScheduleCalendar from "@/components/sections/schedule/ScheduleCalendar"

export const metadata: Metadata = {
  title: "Schedule",
  description: "Browse upcoming ATFT classes, Dripper community events, and office closures.",
}

export default function SchedulePage() {
  return (
    <>
      <section className="relative bg-brand-dark overflow-hidden" style={{ paddingTop: "6rem", paddingBottom: "5rem" }}>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }} />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, #C9A84C 0%, transparent 65%)" }} />
        <div className="relative max-w-site mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-5">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-gold" />
              <span className="text-xs font-semibold tracking-widest uppercase text-gold">Plan Your Next Drip</span>
              <div className="h-px w-8 bg-gold" />
            </div>
            <h1 className="font-display text-5xl lg:text-7xl font-bold" style={{ color: "#F9F6F0" }}>ATFT Schedule</h1>
            <p className="text-lg leading-relaxed" style={{ color: "rgba(249,246,240,0.7)" }}>
              Browse upcoming classes, Dripper community events, and office closures. Choose a class to learn more on the Programs page.
            </p>
          </div>
        </div>
      </section>
      <ScheduleCalendar />
    </>
  )
}
