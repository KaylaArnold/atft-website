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
            <span className="text-xs font-semibold tracking-widest uppercase text-gold">Enrollment Open</span>
            <div className="h-px w-8" style={{ background: "#C9A84C" }} />
          </div>

          <h2 className="font-display text-4xl lg:text-5xl font-bold leading-tight" style={{ color: "#F9F6F0" }}>
            Your next level starts now.
          </h2>

          <p className="text-base leading-relaxed" style={{ color: "rgba(249,246,240,0.7)" }}>
            Enrollment is currently available at $299 per month. Join today and begin your journey with the 5% Drippers.
          </p>

          <div className="w-full rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(201,168,76,0.2)" }}>
            <a href={SITE_CONFIG.enrollmentUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full px-8 py-5 text-base font-semibold text-brand-black hover:opacity-90 transition-all duration-200" style={{ background: gradientBg }}>
              Enroll Now
            </a>
          </div>

          <div className="flex flex-col gap-3 w-full">
            {[
              "Daily live trading sessions",
              "Full community and replay access",
              "Accountability, education, and support",
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
            Enrollment is completed securely through Mighty Networks.
          </p>

          <div className="w-full p-6 rounded-2xl" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(201,168,76,0.15)" }}>
            <p className="text-xs tracking-widest uppercase" style={{ color: "rgba(201,168,76,0.6)" }}>Monthly rate</p>
            <p className="font-display text-3xl font-bold mt-2" style={{ color: "#E8C96A" }}>$299/month</p>
          </div>

        </div>
      </div>
    </section>
  )
}
