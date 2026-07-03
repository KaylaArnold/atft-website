import { SITE_CONFIG } from "@/lib/constants"

const gradientBg = "linear-gradient(135deg, #C9A84C 0%, #E8C96A 40%, #C9A84C 100%)"

export default function CommunityWaitlist() {
  return (
    <section id="waitlist" className="section-padding bg-brand-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }} />
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, #C9A84C 0%, transparent 70%)" }} />

      <div className="relative max-w-site mx-auto px-6">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-8 text-center">

          <div className="flex items-center gap-3">
            <div className="h-px w-8" style={{ background: "#C9A84C" }} />
            <span className="text-xs font-semibold tracking-widest uppercase text-gold">Waitlist</span>
            <div className="h-px w-8" style={{ background: "#C9A84C" }} />
          </div>

          <h2 className="font-display text-4xl lg:text-5xl font-bold leading-tight" style={{ color: "#F9F6F0" }}>
            Be the first to know when enrollment opens.
          </h2>

          <p className="text-base leading-relaxed" style={{ color: "rgba(249,246,240,0.7)" }}>
            Join the waitlist and get notified before enrollment opens to the public in November 2026. Waitlist members get first access — spots fill quickly.
          </p>

          <div className="w-full rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(201,168,76,0.2)" }}>
            <a href={SITE_CONFIG.waitlistUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full px-8 py-5 text-base font-semibold text-brand-black hover:opacity-90 transition-all duration-200" style={{ background: gradientBg }}>
              Join the 5% Drippers Waitlist
            </a>
          </div>

          <div className="flex flex-col gap-3 w-full">
            {[
              "Get notified before the public when enrollment opens",
              "Learn what to expect when you join",
              "No commitment required — just your email",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-left">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-sm" style={{ color: "rgba(249,246,240,0.7)" }}>{item}</span>
              </div>
            ))}
          </div>

          <p className="text-xs" style={{ color: "rgba(249,246,240,0.35)" }}>
            We respect your privacy. You can unsubscribe at any time.
          </p>

          <div className="w-full p-6 rounded-2xl" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(201,168,76,0.15)" }}>
            <p className="text-sm font-semibold mb-2" style={{ color: "#E8C96A" }}>Enrollment windows</p>
            <div className="grid grid-cols-2 gap-4 mt-3">
              <div className="flex flex-col items-center gap-1 p-3 rounded-xl" style={{ background: "rgba(201,168,76,0.08)" }}>
                <p className="text-xs tracking-widest uppercase" style={{ color: "rgba(201,168,76,0.6)" }}>Window 1</p>
                <p className="font-display text-xl font-bold" style={{ color: "#E8C96A" }}>July</p>
                <p className="text-xs" style={{ color: "rgba(249,246,240,0.4)" }}>Closed for 2026</p>
              </div>
              <div className="flex flex-col items-center gap-1 p-3 rounded-xl" style={{ background: "rgba(201,168,76,0.08)" }}>
                <p className="text-xs tracking-widest uppercase" style={{ color: "rgba(201,168,76,0.6)" }}>Window 2</p>
                <p className="font-display text-xl font-bold" style={{ color: "#E8C96A" }}>November</p>
                <p className="text-xs" style={{ color: "rgba(249,246,240,0.4)" }}>Next opening</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
