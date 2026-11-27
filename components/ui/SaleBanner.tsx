"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { isAtftCommunityAccessOpen } from "@/lib/daily-drip-schedule"

export default function SaleBanner() {
  const [isPostSale, setIsPostSale] = useState<boolean | null>(null)

  useEffect(() => {
    const productionHosts = new Set(["arlettathefriendlytrader.com", "www.arlettathefriendlytrader.com"])
    const showPreview = !productionHosts.has(window.location.hostname) && new URLSearchParams(window.location.search).get("previewPostBlackFriday") === "1"
    const update = () => setIsPostSale(showPreview || isAtftCommunityAccessOpen(Math.floor(Date.now() / 1000)))
    update()
    const interval = window.setInterval(update, 30_000)
    return () => window.clearInterval(interval)
  }, [])

  if (isPostSale === null) return null

  return (
    <aside aria-label="Current promotion" className="w-full py-3 px-4 text-center text-sm font-semibold flex items-center justify-center gap-3 flex-wrap" style={{ background: "linear-gradient(135deg, #C9A84C 0%, #E8C96A 50%, #C9A84C 100%)", color: "#0F0A02" }}>
      {isPostSale ? (
        <>
          <span>Choose Your Path — 5% Daily Drip™ Cohort or Self-Paced ATFT Community</span>
          <span style={{ opacity: 0.6 }}>|</span>
          <span>Both $299/month</span>
          <span style={{ opacity: 0.6 }}>|</span>
          <Link href="/community#enrollment" className="underline font-bold hover:opacity-80 transition-opacity duration-200">Compare Options</Link>
        </>
      ) : (
        <>
          <span>Black Friday Flash Sale — $99 Down + $99/Month for Six Months</span>
          <span style={{ opacity: 0.6 }}>|</span>
          <span>Ends Tonight at 11:59 PM ET</span>
          <span style={{ opacity: 0.6 }}>|</span>
          <a href="/api/daily-drip-enrollment?tier=flash&source=black-friday-banner" className="underline font-bold hover:opacity-80 transition-opacity duration-200">Enroll Now</a>
        </>
      )}
    </aside>
  )
}
