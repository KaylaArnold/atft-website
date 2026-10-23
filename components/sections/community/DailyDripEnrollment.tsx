"use client"

import { useEffect, useState } from "react"
import { getCurrentDailyDripTier, type DailyDripEnrollmentPhase, type DailyDripTierId } from "@/lib/daily-drip-schedule"

type CheckoutAvailability = Record<DailyDripTierId, boolean>

const TIERS = [
  { id: "flash" as const, tier: "Tier 1", title: "72-Hour Faith Flash Sale", dates: "October 27–29, 2026", price: "$99/month", details: ["$99 enrollment fee paid immediately", "$99 per month for six months, January–June 2027", "Total tuition: $594", "Total including enrollment fee: $693"], deadline: "October 29 at 11:59 PM Eastern", button: "SECURE MY $99 MONTHLY RATE" },
  { id: "early" as const, tier: "Tier 2", title: "Early Enrollment Special", dates: "October 30–December 15, 2026", price: "$299/month", details: ["$99 enrollment fee paid immediately", "$299 per month for six months, January–June 2027", "Total tuition: $1,794", "Total including enrollment fee: $1,893"], deadline: "December 15 at 11:59 PM Eastern", button: "LOCK IN MY $299 MONTHLY RATE" },
  { id: "standard" as const, tier: "Tier 3", title: "Standard 2027 Enrollment", dates: "Begins December 16, 2026", price: "$499/month", details: ["No separate enrollment fee", "First $499 payment counts toward tuition", "$499 per month for six months", "Total tuition: $2,994"], deadline: "January–June 2027 cohort", button: "JOIN THE JANUARY 2027 COHORT" },
]

function getTierStatus(id: DailyDripTierId, phase: DailyDripEnrollmentPhase) {
  if (phase === "prelaunch") return id === "flash" ? "up-next" : "upcoming"
  const order: DailyDripTierId[] = ["flash", "early", "standard"]
  const currentIndex = order.indexOf(phase)
  const tierIndex = order.indexOf(id)
  if (tierIndex < currentIndex) return "closed"
  if (tierIndex === currentIndex) return "active"
  return "upcoming"
}

export default function DailyDripEnrollment({ checkoutAvailability }: { checkoutAvailability: CheckoutAvailability }) {
  const [phase, setPhase] = useState<DailyDripEnrollmentPhase>("prelaunch")
  useEffect(() => {
    const updatePhase = () => setPhase(getCurrentDailyDripTier())
    updatePhase()
    const interval = window.setInterval(updatePhase, 60_000)
    return () => window.clearInterval(interval)
  }, [])

  return (
    <section id="enrollment" className="section-padding bg-brand-dark scroll-mt-20">
      <div className="max-w-site mx-auto px-6">
        <div className="flex flex-col items-center gap-4 mb-12 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-gold">January–June 2027 Cohort</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold" style={{ color: "#F9F6F0" }}>Choose Your Enrollment Window</h2>
          <p className="text-base max-w-2xl leading-relaxed" style={{ color: "rgba(249,246,240,0.7)" }}>All three tiers receive the same six-month 5% Daily Drip™ experience. The website automatically makes only the currently available rate enrollable.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {TIERS.map((tier) => {
            const status = getTierStatus(tier.id, phase)
            const isActive = status === "active"
            const hasVerifiedUrl = checkoutAvailability[tier.id]
            const canEnroll = isActive && hasVerifiedUrl
            const statusLabel = status === "active" ? "Available Now" : status === "closed" ? "Closed" : status === "up-next" ? "Opens October 27" : "Upcoming"
            return (
              <article key={tier.id} className="flex flex-col rounded-2xl p-7" style={{ background: isActive ? "rgba(201,168,76,0.12)" : "rgba(255,255,255,0.04)", border: isActive ? "1px solid rgba(232,201,106,0.75)" : "1px solid rgba(201,168,76,0.22)" }}>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <span className="text-xs font-semibold tracking-widest uppercase text-gold">{tier.tier}</span>
                  <span className="rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider" style={{ color: status === "active" ? "#1C160A" : "rgba(249,246,240,0.65)", background: status === "active" ? "#E8C96A" : "rgba(249,246,240,0.08)" }}>{statusLabel}</span>
                </div>
                <h3 className="font-display text-2xl font-bold mb-2" style={{ color: "#F9F6F0" }}>{tier.title}</h3>
                <p className="text-sm text-gold mb-6">{tier.dates}</p>
                <p className="font-display text-4xl font-bold mb-6" style={{ color: "#E8C96A" }}>{tier.price}</p>
                <ul className="flex flex-col gap-3 mb-7 flex-1">
                  {tier.details.map((detail) => <li key={detail} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: "rgba(249,246,240,0.72)" }}><span className="text-gold" aria-hidden="true">✓</span><span>{detail}</span></li>)}
                </ul>
                <p className="text-xs mb-4" style={{ color: "rgba(249,246,240,0.48)" }}>{tier.deadline}</p>
                {canEnroll ? <a href={`/api/daily-drip-enrollment?tier=${tier.id}`} className="inline-flex min-h-12 items-center justify-center rounded-md px-4 py-3 text-center text-xs font-bold tracking-wide text-brand-black bg-gold hover:opacity-90 transition-opacity">{tier.button}</a> : <button type="button" disabled className="min-h-12 rounded-md px-4 py-3 text-xs font-bold tracking-wide cursor-not-allowed" style={{ color: "rgba(249,246,240,0.45)", background: "rgba(249,246,240,0.08)" }}>{tier.button}</button>}
                {isActive && !hasVerifiedUrl && <p className="text-xs text-center mt-3 text-gold">Secure enrollment link being finalized.</p>}
              </article>
            )
          })}
        </div>
        <div className="mt-10 rounded-2xl p-6 lg:p-8" style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)" }}>
          <h3 className="font-display text-xl font-bold mb-3" style={{ color: "#F9F6F0" }}>Enrollment Fee Disclosure</h3>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(249,246,240,0.68)" }}>The $99 promotional enrollment fee is separate from tuition and does not count toward a monthly tuition payment. Paying the fee during the applicable promotional window locks in that monthly rate. Promotional tuition payments begin in January 2027 and continue through June 2027. Standard enrollment has no separate fee; its first $499 payment counts toward tuition and must not be charged again as January tuition.</p>
        </div>
      </div>
    </section>
  )
}
