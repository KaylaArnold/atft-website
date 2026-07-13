import Image from "next/image"

export default function FoundersDayHero() {
  return (
    <section className="relative bg-brand-dark overflow-hidden" style={{ paddingTop: "8rem", paddingBottom: "6rem" }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }} />
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, #C9A84C 0%, transparent 70%)" }} />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Image src="/images/logo-watermark.png" alt="" width={600} height={600} className="object-contain select-none" style={{ opacity: 0.08 }} aria-hidden={true} priority />
      </div>

      <div className="relative max-w-site mx-auto px-6">
        <div className="flex flex-col items-center text-center gap-8 max-w-3xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="h-px w-8" style={{ background: "#C9A84C" }} />
            <span className="text-xs font-semibold tracking-widest uppercase text-gold">Founder's Day 2026</span>
            <div className="h-px w-8" style={{ background: "#C9A84C" }} />
          </div>

          <h1 className="font-display text-5xl lg:text-7xl font-bold leading-tight" style={{ color: "#F9F6F0" }}>
            Thank You.
          </h1>

          <p className="text-base leading-relaxed max-w-2xl" style={{ color: "rgba(249,246,240,0.65)" }}>
            Thank you to everyone who celebrated Founder's Day and supported the vision of ATFT. Your generosity, encouragement, and belief in this community mean more than words can express.
          </p>

          <p className="text-base leading-relaxed max-w-2xl" style={{ color: "rgba(249,246,240,0.65)" }}>
            By request, the Founder's Day giving page will remain open through Sunday, July 19, 2026, at 11:59 PM EDT for anyone who would still like to contribute.
          </p>

          <p className="text-sm italic" style={{ color: "rgba(249,246,240,0.4)" }}>
            — Coach Arletta
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <div className="flex flex-col items-center gap-1 px-6 py-3 rounded-xl" style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)" }}>
              <span className="text-xs tracking-widest uppercase" style={{ color: "rgba(201,168,76,0.6)" }}>Giving Closes</span>
              <span className="text-sm font-semibold" style={{ color: "#F9F6F0" }}>Sunday, July 19, 2026</span>
            </div>
            <div className="flex flex-col items-center gap-1 px-6 py-3 rounded-xl" style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)" }}>
              <span className="text-xs tracking-widest uppercase" style={{ color: "rgba(201,168,76,0.6)" }}>Deadline</span>
              <span className="text-sm font-semibold" style={{ color: "#F9F6F0" }}>11:59 PM EDT</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href="#replay" className="inline-flex items-center justify-center px-6 py-3 rounded-md text-sm font-semibold text-brand-black hover:opacity-90 transition-all duration-200" style={{ background: "linear-gradient(135deg, #C9A84C 0%, #E8C96A 40%, #C9A84C 100%)" }}>
            Watch the Replay
          </a>
          <a href="#honor-roll" className="inline-flex items-center justify-center px-6 py-3 rounded-md text-sm font-semibold text-brand-black hover:opacity-90 transition-all duration-200" style={{ background: "linear-gradient(135deg, #C9A84C 0%, #E8C96A 40%, #C9A84C 100%)" }}>
            View the Honor Roll
          </a>
          <a href="#tiers" className="inline-flex items-center justify-center px-6 py-3 rounded-md text-sm font-semibold text-brand-black hover:opacity-90 transition-all duration-200" style={{ background: "linear-gradient(135deg, #C9A84C 0%, #E8C96A 40%, #C9A84C 100%)" }}>
            Show Your Support
          </a>
        </div>
        </div>
      </div>
    </section>
  )
}