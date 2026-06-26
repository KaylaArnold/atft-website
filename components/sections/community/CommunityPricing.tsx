import { SITE_CONFIG } from "@/lib/constants"

const gradientBg = "linear-gradient(135deg, #C9A84C 0%, #E8C96A 40%, #C9A84C 100%)"

const INCLUDED = [
  "Daily live trading sessions",
  "Full replay library access",
  "Private Mighty Networks community",
  "Weekly market insights",
  "Trade education and strategy training",
  "Accountability and coaching support",
]

export default function CommunityPricing() {
  return (
    <section className="section-padding bg-brand-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }} />
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, #C9A84C 0%, transparent 70%)" }} />

      <div className="relative max-w-site mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="h-px w-8" style={{ background: "#C9A84C" }} />
              <span className="text-xs font-semibold tracking-widest uppercase text-gold">Simple Pricing</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold leading-tight" style={{ color: "#F9F6F0" }}>
              One price. Everything included.
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "rgba(249,246,240,0.7)" }}>
              No upsells. No hidden fees. No tiers. One monthly membership gives you full access to everything the 5% Drippers community has to offer — live sessions, replays, community, and coaching support.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "rgba(249,246,240,0.7)" }}>
              That works out to less than $10 a day for daily access to professional trading education and a community of serious traders.
            </p>

            <div className="p-6 rounded-2xl" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(201,168,76,0.2)" }}>
              <p className="text-sm font-semibold mb-1" style={{ color: "#E8C96A" }}>Already a member?</p>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(249,246,240,0.6)" }}>Access your community, replays, and sessions inside Mighty Networks.</p>
              <a href={SITE_CONFIG.communityUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold transition-colors duration-200" style={{ color: "#C9A84C" }}>Go to community &rarr;</a>
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
                {INCLUDED.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-sm" style={{ color: "rgba(249,246,240,0.7)" }}>{item}</span>
                  </div>
                ))}
              </div>

              <div style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }} />

              <a href={SITE_CONFIG.communityUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 rounded-md text-sm font-semibold text-brand-black hover:opacity-90 transition-all duration-200 text-center" style={{ background: gradientBg }}>
                Join the 5% Drippers
              </a>

              <p className="text-xs text-center" style={{ color: "rgba(249,246,240,0.35)" }}>
                Annual plan also available
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
