import Image from "next/image"

export default function FoundersDayHero() {
  return (
    <section className="relative bg-brand-dark overflow-hidden" style={{ paddingTop: "8rem", paddingBottom: "6rem" }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }} />
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, #C9A84C 0%, transparent 70%)" }} />

      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Image src="/images/logo-watermark.png" alt="" width={600} height={600} className="object-contain select-none" style={{ opacity: 0.08 }} aria-hidden={true} priority />
      </div>

      <div className="relative max-w-site mx-auto px-6">
        <div className="flex flex-col items-center text-center gap-8 max-w-3xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="h-px w-8" style={{ background: "#C9A84C" }} />
            <span className="text-xs font-semibold tracking-widest uppercase text-gold">July 11, 2026</span>
            <div className="h-px w-8" style={{ background: "#C9A84C" }} />
          </div>

          <h1 className="font-display text-5xl lg:text-7xl font-bold leading-tight" style={{ color: "#F9F6F0" }}>
            Founders Day.
          </h1>

          <p className="text-lg leading-relaxed" style={{ color: "rgba(249,246,240,0.7)" }}>
            A Celebration of Giving
          </p>

          <p className="text-base leading-relaxed max-w-2xl" style={{ color: "rgba(249,246,240,0.65)" }}>
            Founder's Day is a special opportunity for us to celebrate the journey we've built together as a community. Your support is never expected, but every contribution is deeply appreciated and helps me continue creating the education, resources, and opportunities that have become the heart of ATFT. Thank you for believing in the vision and for being a part of this incredible journey with me.
          </p>

          <p className="text-sm italic" style={{ color: "rgba(249,246,240,0.4)" }}>
            — Coach Arletta
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <div className="flex flex-col items-center gap-1 px-6 py-3 rounded-xl" style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)" }}>
              <span className="text-xs tracking-widest uppercase" style={{ color: "rgba(201,168,76,0.6)" }}>Date</span>
              <span className="text-sm font-semibold" style={{ color: "#F9F6F0" }}>Saturday, July 11, 2026</span>
            </div>
            <div className="flex flex-col items-center gap-1 px-6 py-3 rounded-xl" style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)" }}>
              <span className="text-xs tracking-widest uppercase" style={{ color: "rgba(201,168,76,0.6)" }}>Time</span>
              <span className="text-sm font-semibold" style={{ color: "#F9F6F0" }}>2:00 PM - 6:00 PM EDT</span>
            </div>
          </div>

          <a href="#tiers" className="inline-flex items-center justify-center px-10 py-4 rounded-md text-sm font-semibold text-brand-black hover:opacity-90 transition-all duration-200" style={{ background: "linear-gradient(135deg, #C9A84C 0%, #E8C96A 40%, #C9A84C 100%)" }}>
            Show Your Support
          </a>
        </div>
      </div>
    </section>
  )
}