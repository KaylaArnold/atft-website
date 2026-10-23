"use client"

import { useEffect, useState } from "react"
import { SITE_CONFIG } from "@/lib/constants"
import { getCurrentDailyDripTier, isDailyDripWaitlistOpen } from "@/lib/daily-drip-schedule"

const gradientBg = "linear-gradient(135deg, #C9A84C 0%, #E8C96A 40%, #C9A84C 100%)"

export default function DailyDripWaitlist() {
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    const updateAvailability = () => setIsOpen(isDailyDripWaitlistOpen(getCurrentDailyDripTier()))
    updateAvailability()
    const interval = window.setInterval(updateAvailability, 60_000)
    return () => window.clearInterval(interval)
  }, [])

  if (!isOpen) return null

  return (
    <section id="waitlist" className="section-padding bg-brand-cream scroll-mt-20">
      <div className="max-w-site mx-auto px-6">
        <div className="mx-auto max-w-3xl rounded-2xl p-8 text-center lg:p-12" style={{ background: "#1C160A", border: "1px solid rgba(201,168,76,0.3)" }}>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gold">Waitlist Open Through December 15</p>
          <h2 className="mb-5 font-display text-4xl font-bold lg:text-5xl" style={{ color: "#F9F6F0" }}>Stay connected to the 5% Daily Drip™.</h2>
          <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed" style={{ color: "rgba(249,246,240,0.7)" }}>
            Join the waitlist for January–June 2027 cohort reminders, enrollment updates, and program information. The waitlist remains open until standard enrollment begins December 16, 2026.
          </p>
          <a href={SITE_CONFIG.waitlistUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-md px-8 py-4 text-sm font-bold tracking-wide text-brand-black transition-opacity hover:opacity-90" style={{ background: gradientBg }}>
            JOIN THE 5% DAILY DRIP™ WAITLIST
          </a>
          <p className="mt-4 text-xs" style={{ color: "rgba(249,246,240,0.4)" }}>No payment is required to join the waitlist.</p>
        </div>
      </div>
    </section>
  )
}
