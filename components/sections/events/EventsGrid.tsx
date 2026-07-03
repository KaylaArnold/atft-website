"use client"

import { useState } from "react"

const EVENTS = [
  {
    name: "TEACHING MOMENTS: w/ Coach Arletta LIVE | Options Trading Training & Q&A",
    date: "2026-07-08",
    displayDate: "Wednesday, July 8, 2026",
    time: "1:00 PM - 2:00 PM EDT",
    description: "Join Coach Arletta live each Wednesday for a free options trading lesson, practical market insights, and live Q&A. Learn one key trading concept each week and get your questions answered in real time.",
    location: "Zoom",
    audience: "Everyone",
    emoji: "graduate",
    registration: null,
    recurring: "Every Wednesday",
  },
  {
    name: "Drip & Tell Thursday LIVE",
    date: "2026-07-09",
    displayDate: "Thursday, July 9, 2026",
    time: "1:00 PM - 2:00 PM EDT",
    description: "Every Thursday, members of the 5% Drippers community take the mic to share their real trading journeys. Hear honest testimonies, celebrate wins, learn from challenges, and be encouraged by traders at every stage of the journey.",
    location: "Zoom",
    audience: "5% Drippers Community",
    emoji: "mic",
    registration: null,
    recurring: "Every Thursday",
  },
  {
    name: "Founders Day: A Celebration of Giving",
    date: "2026-07-11",
    displayDate: "Saturday, July 11, 2026",
    time: "2:00 PM - 6:00 PM EDT",
    description: "Join us as we celebrate Coach Arletta's vision, honor her impact, and give back in appreciation for all she has invested in this community. Every gift — large or small — is a meaningful way to say thank you.",
    location: "TBA",
    audience: "Community",
    emoji: "celebration",
    registration: null,
    recurring: null,
  },
  {
    name: "Mini Dripper Live Orientation",
    date: "2026-07-13",
    displayDate: "Monday, July 13, 2026",
    time: "9:30 AM - 10:30 AM EDT",
    description: "Welcome to Mini Drippers! Meet your instructor and fellow members, review program expectations, confirm access to Thinkorswim, Robinhood, Zoom, and Mighty Networks, and get your questions answered before classes begin.",
    location: "Zoom",
    audience: "Mini Drippers Students",
    emoji: "orientation",
    registration: null,
    recurring: null,
  },
]

const AUDIENCE_COLORS: Record<string, { bg: string; color: string }> = {
  "Everyone":               { bg: "#e6f4ed", color: "#1a6b3c" },
  "5% Drippers Community":  { bg: "#f3e6f4", color: "#4a1a6b" },
  "Community":              { bg: "#fef3e2", color: "#7a4f00" },
  "Mini Drippers Students": { bg: "#e6eef4", color: "#1a3d6b" },
}

const EmojiIcon = ({ type }: { type: string }) => {
  if (type === "mic") return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="23" />
      <line x1="8" y1="23" x2="16" y2="23" />
    </svg>
  )
  if (type === "celebration") return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
  if (type === "graduate") return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  )
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function ListView({ events }: { events: typeof EVENTS }) {
  return (
    <div className="flex flex-col gap-6">
      {events.map((event, index) => (
        <div key={index} className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-6 rounded-2xl bg-brand-white hover:-translate-y-0.5 transition-all duration-300" style={{ border: "1px solid rgba(201,168,76,0.15)", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
          <div className="flex flex-col items-start lg:items-center lg:text-center gap-3">
            <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)", color: "#C9A84C" }}>
              <EmojiIcon type={event.emoji} />
            </div>
            <div>
              <p className="text-sm font-semibold text-brand-black">{event.displayDate}</p>
              <p className="text-xs text-brand-brown mt-0.5">{event.time}</p>
            </div>
            {event.recurring && (
              <span className="text-xs font-medium px-3 py-1 rounded-full" style={{ background: "#FBF6EC", color: "#8B6914", border: "1px solid rgba(201,168,76,0.2)" }}>
                {event.recurring}
              </span>
            )}
          </div>
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h3 className="font-display text-xl font-bold text-brand-black leading-tight">{event.name}</h3>
            <p className="text-sm text-brand-brown leading-relaxed">{event.description}</p>
          </div>
          <div className="flex flex-col gap-3 lg:items-end justify-between">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                <span className="text-xs text-brand-brown">{event.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                <span className="text-xs font-medium" style={{ color: AUDIENCE_COLORS[event.audience]?.color || "#8B6914" }}>{event.audience}</span>
              </div>
            </div>
            {event.registration ? (
              <a href={event.registration} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-5 py-2.5 rounded-md text-xs font-semibold text-brand-black hover:opacity-90 transition-all duration-200" style={{ background: "linear-gradient(135deg, #C9A84C 0%, #E8C96A 40%, #C9A84C 100%)" }}>Register Now</a>
            ) : (
              <span className="text-xs font-medium" style={{ color: "#1a6b3c" }}>Free to attend</span>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

function CalendarView({ events }: { events: typeof EVENTS }) {
  const [selectedEvent, setSelectedEvent] = useState<typeof EVENTS[0] | null>(null)

  const year = 2026
  const month = 6
  const monthName = "July 2026"
  const daysInMonth = 31
  const firstDayOfMonth = new Date(year, month, 1).getDay()

  const eventsByDay: Record<number, typeof EVENTS> = {}
  events.forEach(event => {
    const day = parseInt(event.date.split("-")[2])
    if (!eventsByDay[day]) eventsByDay[day] = []
    eventsByDay[day].push(event)
  })

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-2xl overflow-hidden bg-brand-white" style={{ border: "1px solid rgba(201,168,76,0.15)" }}>
        <div className="flex items-center justify-between px-6 py-4" style={{ background: "#0F0A02", borderBottom: "1px solid rgba(201,168,76,0.2)" }}>
          <h3 className="font-display text-xl font-bold" style={{ color: "#E8C96A" }}>{monthName}</h3>
        </div>
        <div className="grid grid-cols-7" style={{ borderBottom: "1px solid rgba(201,168,76,0.1)" }}>
          {days.map(day => (
            <div key={day} className="py-3 text-center text-xs font-semibold tracking-wide uppercase" style={{ color: "#C9A84C", borderRight: "1px solid rgba(201,168,76,0.08)" }}>
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7">
          {Array.from({ length: firstDayOfMonth }).map((_, i) => (
            <div key={"empty-" + i} className="min-h-[80px] p-2" style={{ borderRight: "1px solid rgba(201,168,76,0.08)", borderBottom: "1px solid rgba(201,168,76,0.08)", background: "rgba(201,168,76,0.02)" }} />
          ))}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1
            const dayEvents = eventsByDay[day] || []
            const hasEvents = dayEvents.length > 0
            return (
              <div key={day} className="min-h-[80px] p-2 cursor-pointer hover:bg-gold-tint transition-colors duration-150" style={{ borderRight: "1px solid rgba(201,168,76,0.08)", borderBottom: "1px solid rgba(201,168,76,0.08)" }} onClick={() => hasEvents && setSelectedEvent(dayEvents[0])}>
                <span className="text-xs font-medium" style={{ color: hasEvents ? "#C9A84C" : "#6B5C3E" }}>{day}</span>
                {dayEvents.map((event, idx) => (
                  <div key={idx} className="mt-1 px-1.5 py-0.5 rounded text-xs truncate" style={{ background: "rgba(201,168,76,0.15)", color: "#8B6914", fontSize: "10px" }}>
                    {event.name.length > 20 ? event.name.substring(0, 20) + "..." : event.name}
                  </div>
                ))}
              </div>
            )
          })}
        </div>
      </div>

      {selectedEvent && (
        <div className="rounded-2xl p-6 bg-brand-white" style={{ border: "1px solid rgba(201,168,76,0.3)", boxShadow: "0 4px 24px rgba(201,168,76,0.1)" }}>
          <div className="flex items-start justify-between gap-4 mb-4">
            <h3 className="font-display text-xl font-bold text-brand-black leading-tight">{selectedEvent.name}</h3>
            <button onClick={() => setSelectedEvent(null)} className="text-brand-brown hover:text-brand-black transition-colors flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
            </button>
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <p className="text-sm font-semibold text-brand-black">{selectedEvent.displayDate} &bull; {selectedEvent.time}</p>
            <div className="flex items-center gap-4">
              <span className="text-xs text-brand-brown">{selectedEvent.location}</span>
              <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ background: AUDIENCE_COLORS[selectedEvent.audience]?.bg, color: AUDIENCE_COLORS[selectedEvent.audience]?.color }}>{selectedEvent.audience}</span>
              {selectedEvent.recurring && <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ background: "#FBF6EC", color: "#8B6914" }}>{selectedEvent.recurring}</span>}
            </div>
          </div>
          <p className="text-sm text-brand-brown leading-relaxed mb-4">{selectedEvent.description}</p>
          {selectedEvent.registration ? (
            <a href={selectedEvent.registration} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 rounded-md text-sm font-semibold text-brand-black hover:opacity-90 transition-all duration-200" style={{ background: "linear-gradient(135deg, #C9A84C 0%, #E8C96A 40%, #C9A84C 100%)" }}>Register Now</a>
          ) : (
            <p className="text-sm font-medium" style={{ color: "#1a6b3c" }}>Free to attend — no registration required</p>
          )}
        </div>
      )}
    </div>
  )
}

export default function EventsGrid() {
  const [view, setView] = useState<"list" | "calendar">("calendar")

  return (
    <section className="section-padding bg-brand-white">
      <div className="max-w-site mx-auto px-6">

        <div className="flex flex-col items-center gap-4 mb-12 text-center">
          <div className="flex items-center gap-3">
            <div className="h-px w-8" style={{ background: "#C9A84C" }} />
            <span className="text-xs font-semibold tracking-widest uppercase text-gold">July 2026</span>
            <div className="h-px w-8" style={{ background: "#C9A84C" }} />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-black">What is coming up.</h2>
          <p className="text-base text-brand-brown max-w-xl leading-relaxed">
            Mark your calendar. These events are separate from our trading classes — check the Programs page for all bookable classes.
          </p>

          <div className="flex items-center gap-2 p-1 rounded-full mt-2" style={{ background: "#FBF6EC", border: "1px solid rgba(201,168,76,0.2)" }}>
            <button onClick={() => setView("list")} className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200" style={view === "list" ? { background: "linear-gradient(135deg, #C9A84C 0%, #E8C96A 40%, #C9A84C 100%)", color: "#0F0A02" } : { color: "#6B5C3E" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></svg>
              List
            </button>
            <button onClick={() => setView("calendar")} className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200" style={view === "calendar" ? { background: "linear-gradient(135deg, #C9A84C 0%, #E8C96A 40%, #C9A84C 100%)", color: "#0F0A02" } : { color: "#6B5C3E" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
              Calendar
            </button>
          </div>
        </div>

        {view === "list" ? <ListView events={EVENTS} /> : <CalendarView events={EVENTS} />}

        <div className="mt-12 p-6 rounded-2xl text-center" style={{ background: "#FBF6EC", border: "1px solid rgba(201,168,76,0.15)" }}>
          <p className="text-sm font-semibold text-brand-black mb-1">More events coming soon</p>
          <p className="text-sm text-brand-brown">Check back regularly or follow us on social media for the latest announcements.</p>
        </div>

      </div>
    </section>
  )
}
