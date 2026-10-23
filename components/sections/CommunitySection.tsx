import Link from "next/link"
import { SITE_CONFIG } from "@/lib/constants"

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
              <div className="flex flex-col gap-2">
                <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "rgba(201,168,76,0.7)" }}>Enrollment Launches</p>
                <p className="font-display text-4xl font-bold" style={{ color: "#E8C96A" }}>October 27, 2026</p>
                <p className="text-sm" style={{ color: "rgba(249,246,240,0.55)" }}>72-Hour Faith Flash Sale begins at $99/month.</p>
              </div>
              <div style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }} />
              <div className="flex flex-col gap-3">
                {["72-hour launch pricing", "Six monthly tuition payments", "Same six-month experience at every tier", "All deadlines use Eastern Time"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="text-gold">✓</span>
                    <span className="text-sm" style={{ color: "rgba(249,246,240,0.7)" }}>{item}</span>
                  </div>
                ))}
              </div>
              <div style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }} />
              <Link href={SITE_CONFIG.dailyDripUrl} className="inline-flex items-center justify-center px-8 py-4 rounded-md text-sm font-semibold text-brand-black hover:opacity-90 transition-all duration-200 text-center" style={{ background: gradientBg }}>
                Explore 5% Daily Drip™
              </Link>
              <p className="text-xs text-center" style={{ color: "rgba(249,246,240,0.35)" }}>View all three tiers, billing details, and deadlines.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
