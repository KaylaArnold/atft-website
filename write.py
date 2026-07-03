content = """\
"use client"

import { useState } from "react"
import { SITE_CONFIG } from "@/lib/constants"

const FILTERS = ["All", "Beginner", "Intermediate", "Advanced", "All Levels", "In-Person", "Kids and Family", "Members Only"]

const PROGRAMS = [
  { name: "First Drip (Intro to Day Trading)", badge: "Beginner", badgeColor: "#1a6b3c", badgeBg: "#e6f4ed", description: "The official starting point for new or inconsistent traders. Learn trading basics, chart reading, candlestick patterns, and the 5% Method framework with a focus on price action, the Opening Range Breakout strategy, mindset, and risk management.", details: "Includes guided live paper trading", highlight: "Perfect for complete beginners", price: null, salePrice: null, bookingUrl: "https://httpsarlettathefriendlytraderasme.as.me/?appointmentType=88264742" },
  { name: "Swing Drip", badge: "Intermediate", badgeColor: "#7a4f00", badgeBg: "#fef3e2", description: "A focused class for traders looking to expand beyond day trading and build consistency with multi-day or multi-week positions. Learn to identify high-probability swing trade setups, plan entries and exits, manage risk over time, and maintain discipline.", details: "Multi-day and multi-week positions", highlight: "Limited time sale pricing", price: 1299, salePrice: 499, bookingUrl: "https://httpsarlettathefriendlytraderasme.as.me/?appointmentType=88265071" },
  { name: "Inner Drip", badge: "All Levels", badgeColor: "#4a1a6b", badgeBg: "#f3e6f4", description: "A premium mindset alignment session for traders who know the strategy but struggle with consistent execution due to fear, hesitation, or emotional reactivity. Regulate your nervous system and reinforce discipline, patience, and confidence.", details: "Mindset and nervous system regulation", highlight: "For traders who know but struggle to execute", price: null, salePrice: null, bookingUrl: "https://httpsarlettathefriendlytraderasme.as.me/?appointmentType=88266220" },
  { name: "Drip Reset", badge: "All Levels", badgeColor: "#4a1a6b", badgeBg: "#f3e6f4", description: "A focused refresher for traders who already know the basics but need realignment and clarity. Revisits the 5% Method to reinforce structure, disciplined execution, and proper trade management while addressing mindset challenges.", details: "Refresher and realignment session", highlight: "Regain confidence and consistency", price: null, salePrice: null, bookingUrl: "https://httpsarlettathefriendlytraderasme.as.me/?appointmentType=88264849" },
  { name: "Weekend Warrior: The Total Reset for Traders", badge: "All Levels", badgeColor: "#4a1a6b", badgeBg: "#f3e6f4", description: "A 3-day hybrid trading reset experience designed to help traders gain clarity, confidence, discipline, and alignment. Includes trading education, live coaching, mindset work, emotional reset, and accountability and strategy sessions. Only 20 seats available — first come first serve.", details: "July 24-26, 2026 | Midtown Atlanta or Zoom", highlight: "Only 20 seats — fills quickly", price: null, salePrice: null, bookingUrl: "https://httpsarlettathefriendlytraderasme.as.me/?appointmentType=93396111" },
  { name: "Futures Drip", badge: "Advanced", badgeColor: "#8B1a1a", badgeBg: "#fde8e8", description: "An advanced futures trading class for traders who understand charting basics and want to trade futures responsibly. Learn contract fundamentals, ORB 5 and ORB 15 execution, stop placement, and risk-first decision-making.", details: "Requires prior charting knowledge", highlight: "Live educational trade demonstrations", price: null, salePrice: null, bookingUrl: "https://httpsarlettathefriendlytraderasme.as.me/?appointmentType=88265110" },
  { name: "Drip Mastery Intensive", badge: "Advanced", badgeColor: "#8B1a1a", badgeBg: "#fde8e8", description: "A high-level, in-person experience for experienced traders ready to sharpen execution and expand into long-term wealth building. Led by Arletta and a team of coaches blending live trading, advanced strategy, portfolio construction, and mindset mastery.", details: "In-person with Arletta and coaches", highlight: "The most comprehensive program we offer", price: null, salePrice: null, bookingUrl: "https://httpsarlettathefriendlytraderasme.as.me/?appointmentType=88265181" },
  { name: "The Midtown Drip Room", badge: "In-Person", badgeColor: "#1a3d6b", badgeBg: "#e6eef4", description: "Trade alongside disciplined market participants in a quiet, professional Midtown Atlanta environment during peak market hours. No coaching. No trade calls. Just structure, focus, and energy at the open.", details: "Mon-Fri | 8:45 AM - 11:30 AM EST", highlight: "Weekly passes available", price: null, salePrice: null, bookingUrl: "https://httpsarlettathefriendlytraderasme.as.me/?appointmentType=89599997" },
  { name: "Tax Drip Essentials", badge: "All Levels", badgeColor: "#4a1a6b", badgeBg: "#f3e6f4", description: "An educational session that helps traders understand how trading activity affects taxes and how to stay organized for year-round compliance. Taught by a professional accountant covering tax fundamentals, record-keeping, and common mistakes.", details: "Taught by a professional accountant", highlight: "Clarity without personalized tax advice", price: null, salePrice: null, bookingUrl: "https://httpsarlettathefriendlytraderasme.as.me/?appointmentType=88266178" },
  { name: "The Family Drip", badge: "Kids and Family", badgeColor: "#1a5a6b", badgeBg: "#e6f2f4", description: "A two-day, in-person financial education experience for families ages 10 and up. Parents and children learn money fundamentals, saving, investing, trading basics, taxes, and legacy planning through interactive discussions.", details: "2-day in-person for ages 10 and up", highlight: "Build generational wealth together", price: null, salePrice: null, bookingUrl: "https://httpsarlettathefriendlytraderasme.as.me/?appointmentType=88265253" },
  { name: "The DRIP Room", badge: "Members Only", badgeColor: "#8B6914", badgeBg: "#FBF6EC", description: "An exclusive session for active 5% Drippers community members. Details and schedule are shared inside the Mighty Networks community. Active membership required to book.", details: "Active 5% Drippers membership required", highlight: "Members are verified before class", price: null, salePrice: null, bookingUrl: "https://httpsarlettathefriendlytraderasme.as.me/?appointmentType=88266056" },
]

const PRIVATE_SESSIONS = [
  { name: "Coaching Call", description: "A private one-on-one coaching session focused on strategy clarity, execution issues, mindset, or accountability within the 5% Method framework. Bring your questions, your charts, or your struggles — we will work through it together.", details: "Private session via Zoom", highlight: "Strategy, mindset, and accountability", price: 150, bookingUrl: "https://httpsarlettathefriendlytraderasme.as.me/?appointmentType=88265481" },
  { name: "Private Drip Training", description: "One-on-one personalized trading education tailored to your goals, experience level, and execution needs using the 5% Method. The most direct path to accelerated growth — fully customized to where you are right now.", details: "Fully personalized one-on-one session", highlight: "Tailored to your goals and experience", price: 1499, bookingUrl: "https://httpsarlettathefriendlytraderasme.as.me/?appointmentType=88266093" },
  { name: "401K Portfolio Reconciliation", description: "Did you know your job's default 401K settings could be keeping you from real growth? In this 30-minute private session, we review your current 401K allocations and help you shift into options with historically stronger returns — in plain English, no Wall Street jargon. Clients have seen up to 94% growth in 3 years after making simple changes.", details: "30-minute session via Zoom or phone", highlight: "Up to 94% growth seen in 3 years", price: 1299, bookingUrl: "https://httpsarlettathefriendlytraderasme.as.me/?appointmentType=88265934" },
]

const gradientBg = "linear-gradient(135deg, #C9A84C 0%, #E8C96A 40%, #C9A84C 100%)"
const cardStyle = { border: "1px solid rgba(201,168,76,0.15)", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }
const dividerStyle = { borderTop: "1px solid rgba(201,168,76,0.12)" }
const dotStyle = { background: "#C9A84C" }

export default function ProgramsGrid() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filtered = activeFilter === "All"
    ? PROGRAMS
    : PROGRAMS.filter((p) => p.badge === activeFilter)

  return (
    <div>
      <section className="bg-brand-white" style={{ paddingTop: "4rem", paddingBottom: "3rem" }}>
        <div className="max-w-site mx-auto px-6">

          <div className="flex flex-col items-center gap-4 mb-12 text-center">
            <div className="flex items-center gap-3">
              <div className="h-px w-8" style={{ background: "#C9A84C" }} />
              <span className="text-xs font-semibold tracking-widest uppercase text-gold">All Programs</span>
              <div className="h-px w-8" style={{ background: "#C9A84C" }} />
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-black">Every program. Every level.</h2>
            <p className="text-base text-brand-brown max-w-xl leading-relaxed">All programs are built on the 5% Method framework — structure, discipline, and capital protection first.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {FILTERS.map((filter) => (
              <button key={filter} onClick={() => setActiveFilter(filter)} className="text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200" style={activeFilter === filter ? { background: gradientBg, color: "#0F0A02" } : { background: "transparent", color: "#6B5C3E", border: "1px solid rgba(201,168,76,0.3)" }}>
                {filter}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-base text-brand-brown">No programs found for this level.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
              {filtered.map((program) => (
                <div key={program.name} className="flex flex-col gap-4 rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 bg-brand-white" style={cardStyle}>
                  <span className="self-start text-xs font-semibold px-3 py-1 rounded-full" style={{ background: program.badgeBg, color: program.badgeColor }}>{program.badge}</span>
                  <h3 className="font-display text-xl font-bold text-brand-black leading-tight">{program.name}</h3>
                  <p className="text-sm text-brand-brown leading-relaxed flex-1">{program.description}</p>
                  {program.salePrice && (
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-bold font-display" style={{ color: "#C9A84C" }}>${program.salePrice}</span>
                      <span className="text-sm line-through text-brand-brown opacity-60">${program.price}</span>
                      <span className="text-xs font-semibold px-2 py-1 rounded-full" style={{ background: "#e6f4ed", color: "#1a6b3c" }}>Sale</span>
                    </div>
                  )}
                  <div className="flex flex-col gap-2 pt-3" style={dividerStyle}>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={dotStyle} />
                      <span className="text-xs text-brand-brown">{program.details}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={dotStyle} />
                      <span className="text-xs font-medium" style={{ color: "#8B6914" }}>{program.highlight}</span>
                    </div>
                  </div>
                  <a href={program.bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 rounded-md text-sm font-semibold text-brand-black hover:opacity-90 transition-all duration-200 mt-2" style={{ background: gradientBg }}>Book This Class</a>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      <section className="section-padding" style={{ background: "#FBF6EC" }}>
        <div className="max-w-site mx-auto px-6">
          <div className="flex flex-col items-center gap-4 mb-16 text-center">
            <div className="flex items-center gap-3">
              <div className="h-px w-8" style={{ background: "#C9A84C" }} />
              <span className="text-xs font-semibold tracking-widest uppercase text-gold">One On One</span>
              <div className="h-px w-8" style={{ background: "#C9A84C" }} />
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-black">Private and personal sessions.</h2>
            <p className="text-base text-brand-brown max-w-xl leading-relaxed">For traders who want direct, focused attention tailored entirely to their goals and situation.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRIVATE_SESSIONS.map((session) => (
              <div key={session.name} className="flex flex-col gap-4 rounded-2xl p-6 bg-brand-white hover:-translate-y-1 transition-all duration-300" style={cardStyle}>
                <h3 className="font-display text-xl font-bold text-brand-black leading-tight">{session.name}</h3>
                <p className="text-sm text-brand-brown leading-relaxed flex-1">{session.description}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold font-display" style={{ color: "#C9A84C" }}>${session.price}</span>
                  <span className="text-xs text-brand-brown">one-time</span>
                </div>
                <div className="flex flex-col gap-2 pt-3" style={dividerStyle}>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={dotStyle} />
                    <span className="text-xs text-brand-brown">{session.details}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={dotStyle} />
                    <span className="text-xs font-medium" style={{ color: "#8B6914" }}>{session.highlight}</span>
                  </div>
                </div>
                <a href={session.bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 rounded-md text-sm font-semibold text-brand-black hover:opacity-90 transition-all duration-200 mt-2" style={{ background: gradientBg }}>Book This Session</a>
              </div>
            ))}
          </div>
          <p className="text-center text-xs mt-10" style={{ color: "rgba(107,92,62,0.5)" }}>We are not licensed financial advisors. All sessions are educational in nature. Trading involves risk and results are never guaranteed.</p>
        </div>
      </section>
    </div>
  )
}
"""

with open("components/sections/programs/ProgramsGrid.tsx", "w", encoding="utf-8") as f:
    f.write(content)

print("Done")