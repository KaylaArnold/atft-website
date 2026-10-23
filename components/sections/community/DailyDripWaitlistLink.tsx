"use client"

import { useEffect, useState } from "react"
import { SITE_CONFIG } from "@/lib/constants"
import { getCurrentDailyDripTier, isDailyDripWaitlistOpen } from "@/lib/daily-drip-schedule"

export default function DailyDripWaitlistLink() {
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    const updateAvailability = () => setIsOpen(isDailyDripWaitlistOpen(getCurrentDailyDripTier()))
    updateAvailability()
    const interval = window.setInterval(updateAvailability, 60_000)
    return () => window.clearInterval(interval)
  }, [])

  if (!isOpen) return null

  return (
    <a
      href={SITE_CONFIG.waitlistUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center rounded-md border border-gold/50 px-10 py-4 text-sm font-semibold text-gold transition-all duration-200 hover:bg-gold/10"
    >
      Join the Waitlist
    </a>
  )
}
