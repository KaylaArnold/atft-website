"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { isAtftCommunityAccessOpen } from "@/lib/daily-drip-schedule"

const BENEFITS = [
  "Six-month mentorship experience",
  "Practical trading education",
  "Risk management and discipline",
  "Mentorship and accountability",
  "Journaling and review",
  "A supportive Dripper community",
]

const gradientBg = "linear-gradient(135deg, #C9A84C 0%, #E8C96A 40%, #C9A84C 100%)"
const goldTextGradient = "linear-gradient(135deg, #C9A84C 0%, #E8C96A 50%, #C9A84C 100%)"

export default function CommunitySection() {
  const [isPostSale, setIsPostSale] = useState<boolean | null>(null)

  useEffect(() => {
    const productionHosts = new Set(["arlettathefriendlytrader.com", "www.arlettathefriendlytrader.com"])
    const showPreview = !productionHosts.has(window.location.hostname) && new URLSearchParams(window.location.search).get("previewPostBlackFriday") === "1"
    const update = () => setIsPostSale(showPreview || isAtftCommunityAccessOpen(Math.floor(Date.now() / 1000)))
    update()
    const interval = window.setInterval(update, 30_000)
    return () => window.clearInterval(interval)
  }, [])

  return (
    <section className="section-padding bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 80% 50%, #C9A84C 0%, transparent 60%)" }} />
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }} />
      <div className="relative max-w-site mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <div className="h-px w-8" style={{ background: "#C9A84C" }} />
              <span className="text-xs font-semibold tracking-widest uppercase text-gold">Six-Month Mentorship · January–June 2027</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold leading-tight" style={{ color: "#F9F6F0" }}>
              Welcome to the{" "}<span style={{ background: goldTextGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>5% Daily Drip™.</span>
            </h2>
            <p className="text-lg font-display italic text-gold">Where Trading Education Meets Life Transformation.</p>
            <p className="text-base leading-relaxed" style={{ color: "rgba(249,246,240,0.7)" }}>
              Build your market understanding while strengthening the patience, discipline, confidence, and accountability responsible trading requires.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {BENEFITS.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-xs text-gold" style={{ background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.2)" }}>✓</span>
                  <span className="text-sm" style={{ color: "rgba(249,246,240,0.75)" }}>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-sm rounded-2xl p-8 flex flex-col gap-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(201,168,76,0.25)" }}>
              {isPostSale === null ? (
                <p className="py-12 text-center text-sm" style={{ color: "rgba(249,246,240,0.55)" }}>Loading enrollment options…</p>
              ) : isPostSale ? (
                <>
                  <div className="flex flex-col gap-2">
                    <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "rgba(201,168,76,0.7)" }}>Two Ways to Join</p>
                    <p className="font-display text-4xl font-bold" style={{ color: "#E8C96A" }}>$299/month</p>
                    <p className="text-sm" style={{ color: "rgba(249,246,240,0.55)" }}>Choose structure or flexibility.</p>
                  </div>
                  <div style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }} />
                  <div className="flex flex-col gap-4">
                    <div><p className="font-semibold text-brand-white">5% Daily Drip™</p><p className="mt-1 text-sm" style={{ color: "rgba(249,246,240,0.6)" }}>Structured six-month cohort beginning January 18.</p></div>
                    <div><p className="font-semibold text-brand-white">ATFT Community</p><p className="mt-1 text-sm" style={{ color: "rgba(249,246,240,0.6)" }}>Immediate, self-paced access available year-round.</p></div>
                  </div>
                  <div style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }} />
                  <Link href="/community#enrollment" className="inline-flex items-center justify-center rounded-md px-8 py-4 text-center text-sm font-semibold text-brand-black transition-all duration-200 hover:opacity-90" style={{ background: gradientBg }}>Compare Enrollment Options</Link>
                </>
              ) : (
                <>
                  <div className="flex flex-col gap-2">
                    <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "rgba(201,168,76,0.7)" }}>Black Friday Flash Sale</p>
                    <p className="font-display text-4xl font-bold" style={{ color: "#E8C96A" }}>$99 Down</p>
                    <p className="text-sm" style={{ color: "rgba(249,246,240,0.55)" }}>Then $99/month for six months.</p>
                  </div>
                  <div style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }} />
                  <div className="flex flex-col gap-3">
                    {["January–June 2027 structured cohort", "Six monthly tuition payments", "Cohort begins January 18", "Ends November 27 at 11:59 PM ET"].map((item) => <div key={item} className="flex items-center gap-3"><span className="text-gold">✓</span><span className="text-sm" style={{ color: "rgba(249,246,240,0.7)" }}>{item}</span></div>)}
                  </div>
                  <div style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }} />
                  <a href="/api/daily-drip-enrollment?tier=flash&source=homepage-community" className="inline-flex items-center justify-center rounded-md px-8 py-4 text-center text-sm font-semibold text-brand-black transition-all duration-200 hover:opacity-90" style={{ background: gradientBg }}>Secure My $99 Monthly Rate</a>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
