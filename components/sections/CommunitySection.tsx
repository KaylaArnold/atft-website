import { SITE_CONFIG } from "@/lib/constants"

const BENEFITS = [
  { icon: "M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z", label: "Daily Live Trading Sessions" },
  { icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z", label: "Access to 5% Drippers Community" },
  { icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253", label: "Trade Education & Strategy Training" },
  { icon: "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z", label: "Replay Library" },
  { icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", label: "Weekly Market Insights" },
  { icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", label: "Accountability & Support" },
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
              <span className="text-xs font-semibold tracking-widest uppercase text-gold">Monthly Membership</span>
            </div>

            <h2 className="font-display text-4xl lg:text-5xl font-bold leading-tight" style={{ color: "#F9F6F0" }}>
              Join the{" "}
              <span style={{ background: goldTextGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                5% Drippers.
              </span>
            </h2>

            <p className="text-base leading-relaxed" style={{ color: "rgba(249,246,240,0.7)" }}>
              The 5% Drippers is our private trading community where members get access to daily live sessions, real-time education, and a supportive group of traders all working toward the same goal — consistency and growth.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {BENEFITS.map((benefit) => (
                <div key={benefit.label} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.2)" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d={benefit.icon} />
                    </svg>
                  </div>
                  <span className="text-sm" style={{ color: "rgba(249,246,240,0.75)" }}>{benefit.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-sm rounded-2xl p-8 flex flex-col gap-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(201,168,76,0.25)" }}>

              <div className="flex flex-col gap-2">
                <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "rgba(201,168,76,0.7)" }}>Monthly membership</p>
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-6xl font-bold" style={{ color: "#E8C96A" }}>${SITE_CONFIG.communityPrice}</span>
                  <span className="text-base" style={{ color: "rgba(249,246,240,0.5)" }}>/month</span>
                </div>
                <p className="text-xs" style={{ color: "rgba(249,246,240,0.4)" }}>Cancel anytime. No long-term commitment.</p>
              </div>

              <div style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }} />

              <div className="flex flex-col gap-3">
                {["Daily live trading sessions", "Full community access", "Replay library included", "Weekly market insights"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-sm" style={{ color: "rgba(249,246,240,0.7)" }}>{item}</span>
                  </div>
                ))}
              </div>

              <div style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }} />

              <a href={SITE_CONFIG.enrollmentUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 rounded-md text-sm font-semibold text-brand-black hover:opacity-90 transition-all duration-200 text-center" style={{ background: gradientBg }}>
                Enroll Now
              </a>

              <p className="text-xs text-center" style={{ color: "rgba(249,246,240,0.35)" }}>
                Enrollment is open now at $299/month.
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
