import DailyDripWaitlistLink from "@/components/sections/community/DailyDripWaitlistLink"

const gradientBg = "linear-gradient(135deg, #C9A84C 0%, #E8C96A 40%, #C9A84C 100%)"
const goldText = "linear-gradient(135deg, #C9A84C 0%, #E8C96A 50%, #C9A84C 100%)"

export default function CommunityHero() {
  return (
    <section className="relative bg-brand-dark overflow-hidden" style={{ paddingTop: "8rem", paddingBottom: "6rem" }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }} />
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, #C9A84C 0%, transparent 70%)" }} />

      <div className="relative max-w-site mx-auto px-6">
        <div className="flex flex-col items-center text-center gap-8 max-w-3xl mx-auto">

          <div className="flex items-center gap-3">
            <div className="h-px w-8" style={{ background: "#C9A84C" }} />
            <span className="text-xs font-semibold tracking-widest uppercase text-gold">ATFT Academy · January–June 2027</span>
            <div className="h-px w-8" style={{ background: "#C9A84C" }} />
          </div>

          <h1 className="font-display text-5xl lg:text-7xl font-bold leading-tight" style={{ color: "#F9F6F0" }}>
            WELCOME TO THE{" "}
            <span style={{ background: goldText, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              5% DAILY DRIP™
            </span>
          </h1>

          <p className="text-lg leading-relaxed" style={{ color: "rgba(249,246,240,0.7)" }}>
            Where Trading Education Meets Life Transformation.
          </p>

          <div className="w-full rounded-2xl p-8 flex flex-col items-center gap-6" style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.3)" }}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ background: "#C9A84C" }} />
              <p className="text-sm font-semibold tracking-wide uppercase" style={{ color: "#E8C96A" }}>Your Next Chapter Begins Here</p>
            </div>

            <p className="text-base text-center leading-relaxed" style={{ color: "rgba(249,246,240,0.7)" }}>
              ATFT Academy is about more than making money. The 5% Daily Drip™ helps students build trading knowledge while strengthening discipline, patience, confidence, accountability, and community through a six-month mentorship experience.
            </p>

            <div className="flex flex-col items-center gap-2">
              <p className="text-xs tracking-widest uppercase" style={{ color: "rgba(201,168,76,0.6)" }}>Enrollment launches</p>
              <p className="font-display text-4xl font-bold" style={{ color: "#E8C96A" }}>October 27, 2026</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="#enrollment" className="inline-flex items-center justify-center px-10 py-4 rounded-md text-sm font-semibold text-brand-black hover:opacity-90 transition-all duration-200" style={{ background: gradientBg }}>
                View Enrollment Options
              </a>
              <DailyDripWaitlistLink />
            </div>

            <p className="text-xs" style={{ color: "rgba(249,246,240,0.4)" }}>
              January–June 2027 cohort · Three enrollment windows · Same six-month experience
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 w-full max-w-lg pt-4" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
            <div className="flex flex-col items-center gap-1">
              <span className="font-display text-3xl font-bold" style={{ color: "#E8C96A" }}>6</span>
              <span className="text-xs text-center" style={{ color: "rgba(249,246,240,0.5)" }}>Months</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="font-display text-3xl font-bold" style={{ color: "#E8C96A" }}>Jan–Jun</span>
              <span className="text-xs text-center" style={{ color: "rgba(249,246,240,0.5)" }}>2027 Cohort</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="font-display text-3xl font-bold" style={{ color: "#E8C96A" }}>One</span>
              <span className="text-xs text-center" style={{ color: "rgba(249,246,240,0.5)" }}>Dripper Family</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
