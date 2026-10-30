"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight, CalendarDays, ChevronLeft, ChevronRight, Clock, LockKeyhole, MapPin } from "lucide-react"
import { PUBLIC_SCHEDULE, type PublicScheduleEvent } from "@/lib/public-schedule"

const badgeStyles = {
  class: { label: "Public Class", background: "#e6f4ed", color: "#1a6b3c" },
  member: { label: "Members Only", background: "#fef3e2", color: "#7a4f00" },
  closure: { label: "Office Closed", background: "#fde8e8", color: "#8B1a1a" },
}

function EventContent({ event }: { event: PublicScheduleEvent }) {
  const badge = badgeStyles[event.type]

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="font-display text-xl font-bold text-brand-black">{event.date}</span>
          <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: badge.background, color: badge.color }}>
            {badge.label}
          </span>
        </div>
        {event.href && (
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-gold-dark">
            View details <ArrowUpRight size={15} aria-hidden="true" />
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto] gap-5 md:items-end">
        <div>
          <h3 className="font-display text-2xl font-bold text-brand-black">{event.title}</h3>
          {event.description && <p className="mt-2 text-sm leading-relaxed text-brand-brown">{event.description}</p>}
        </div>
        <div className="flex flex-col sm:flex-row md:flex-col gap-2 text-sm text-brand-brown md:min-w-52">
          <span className="inline-flex items-center gap-2"><Clock size={16} className="text-gold-dark" aria-hidden="true" />{event.time}</span>
          {event.location && <span className="inline-flex items-center gap-2"><MapPin size={16} className="text-gold-dark" aria-hidden="true" />{event.location}</span>}
          {event.type === "member" && <span className="inline-flex items-center gap-2"><LockKeyhole size={16} className="text-gold-dark" aria-hidden="true" />Current Drippers</span>}
        </div>
      </div>
    </>
  )
}

export default function ScheduleCalendar() {
  const [monthIndex, setMonthIndex] = useState(0)
  const month = PUBLIC_SCHEDULE[monthIndex]

  return (
    <section className="bg-brand-white py-16 lg:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-gold-dark">
                <CalendarDays size={20} aria-hidden="true" />
                <span className="text-xs font-semibold tracking-widest uppercase">Public Schedule</span>
              </div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-brand-black">{month.label}</h2>
              <p className="text-sm text-brand-brown">All times are Eastern. Select a class to view its program details.</p>
            </div>

            <div className="flex items-center gap-3" aria-label="Choose schedule month">
              <button type="button" onClick={() => setMonthIndex((index) => Math.max(0, index - 1))} disabled={monthIndex === 0} aria-label="Previous month" className="w-11 h-11 rounded-full border border-gold/30 inline-flex items-center justify-center text-brand-black hover:bg-gold-tint disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
                <ChevronLeft size={20} aria-hidden="true" />
              </button>
              <div className="flex items-center gap-2">
                {PUBLIC_SCHEDULE.map((scheduleMonth, index) => (
                  <button key={scheduleMonth.id} type="button" onClick={() => setMonthIndex(index)} aria-pressed={monthIndex === index} className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${monthIndex === index ? "bg-brand-dark text-brand-white" : "bg-gold-tint text-brand-brown hover:text-brand-black"}`}>
                    {scheduleMonth.label.split(" ")[0]}
                  </button>
                ))}
              </div>
              <button type="button" onClick={() => setMonthIndex((index) => Math.min(PUBLIC_SCHEDULE.length - 1, index + 1))} disabled={monthIndex === PUBLIC_SCHEDULE.length - 1} aria-label="Next month" className="w-11 h-11 rounded-full border border-gold/30 inline-flex items-center justify-center text-brand-black hover:bg-gold-tint disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
                <ChevronRight size={20} aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-4" aria-live="polite">
            {month.events.map((event) => {
              const cardClassName = "rounded-2xl border border-gold/15 bg-white p-5 sm:p-6 flex flex-col gap-5 transition-all"

              return event.href ? (
                <Link key={event.id} href={event.href} className={`${cardClassName} hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold`}>
                  <EventContent event={event} />
                </Link>
              ) : (
                <article key={event.id} className={cardClassName}>
                  <EventContent event={event} />
                </article>
              )
            })}
          </div>

          <div className="rounded-xl p-5 text-sm leading-relaxed text-brand-brown" style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)" }}>
            Dates and times may change. Booking availability and the most current class details appear on each program&apos;s scheduling page.
          </div>
        </div>
      </div>
    </section>
  )
}
