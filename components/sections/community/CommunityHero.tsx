import { SITE_CONFIG } from "@/lib/constants"

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
            <span className="text-xs font-semibold tracking-widest uppercase text-gold">Private Community</span>
            <div className="h-px w-8" style={{ background: "#C9A84C" }} />
          </div>

          <h1 className="font-display text-5xl lg:text-7xl font-bold leading-tight" style={{ color: "#F9F6F0" }}>
            The{" "}
            <span style={{ background: goldText, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              5% Drippers.
            </span>
          </h1>

          <p className="text-lg leading-relaxed" style={{ color: "rgba(249,246,240,0.7)" }}>
            A private trading community built for traders who are serious about growth. Daily live sessions, real education, accountability, and a group of people who actually show up every single day.
          </p>

          <div className="w-full rounded-2xl p-8 flex flex-col items-center gap-6" style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.3)" }}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ background: "#C9A84C" }} />
              <p className="text-sm font-semibold tracking-wide uppercase" style={{ color: "#E8C96A" }}>Enrollment is open now</p>
            </div>

            <p className="text-base text-center leading-relaxed" style={{ color: "rgba(249,246,240,0.7)" }}>
              Join the 5% Drippers Community for daily live sessions, structured education, accountability, and support from traders committed to consistency and growth.
            </p>

            <div className="flex flex-col items-center gap-2">
              <p className="text-xs tracking-widest uppercase" style={{ color: "rgba(201,168,76,0.6)" }}>Regular monthly rate</p>
              <p className="font-display text-4xl font-bold" style={{ color: "#E8C96A" }}>$499/month</p>
            </div>

            <a href={SITE_CONFIG.enrollmentUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-10 py-4 rounded-md text-sm font-semibold text-brand-black hover:opacity-90 transition-all duration-200" style={{ background: gradientBg }}>
              Enroll Now
            </a>

            <p className="text-xs" style={{ color: "rgba(249,246,240,0.4)" }}>
              Complete enrollment securely through Mighty Networks.
            </p>

            <p className="text-sm text-center leading-relaxed rounded-xl px-5 py-4 w-full" style={{ color: "rgba(249,246,240,0.75)", background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.18)" }}>
              <strong style={{ color: "#E8C96A" }}>Waitlist members:</strong> {SITE_CONFIG.waitlistDiscountNotice}
            </p>

            <div style={{ borderTop: "1px solid rgba(201,168,76,0.15)", paddingTop: "1rem", width: "100%" }}>
              <p className="text-sm text-center" style={{ color: "rgba(249,246,240,0.5)" }}>
                Already a member?{" "}
                <a href={SITE_CONFIG.communityUrl} target="_blank" rel="noopener noreferrer" style={{ color: "#C9A84C", fontWeight: "600", textDecoration: "underline" }}>
                  Access your community here
                </a>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8 w-full max-w-lg pt-4" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
            <div className="flex flex-col items-center gap-1">
              <span className="font-display text-3xl font-bold" style={{ color: "#E8C96A" }}>Daily</span>
              <span className="text-xs text-center" style={{ color: "rgba(249,246,240,0.5)" }}>Live Sessions</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="font-display text-3xl font-bold" style={{ color: "#E8C96A" }}>1,000+</span>
              <span className="text-xs text-center" style={{ color: "rgba(249,246,240,0.5)" }}>Students Taught</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="font-display text-3xl font-bold" style={{ color: "#E8C96A" }}>3+</span>
              <span className="text-xs text-center" style={{ color: "rgba(249,246,240,0.5)" }}>Years Teaching</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
