export default function AboutHero() {
  return (
    <section className="relative bg-brand-dark overflow-hidden" style={{ paddingTop: "8rem", paddingBottom: "6rem" }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }} />
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 30% 50%, #C9A84C 0%, transparent 60%)" }} />

      <div className="relative max-w-site mx-auto px-6">
        <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="h-px w-8" style={{ background: "#C9A84C" }} />
            <span className="text-xs font-semibold tracking-widest uppercase text-gold">Our Story</span>
            <div className="h-px w-8" style={{ background: "#C9A84C" }} />
          </div>
          <h1 className="font-display text-5xl lg:text-7xl font-bold leading-tight" style={{ color: "#F9F6F0" }}>
            Meet Arletta.
          </h1>
          <p className="text-lg leading-relaxed max-w-2xl" style={{ color: "rgba(249,246,240,0.7)" }}>
            Trading educator, coach, and founder of the 5% DRIP Method. Not here to sell hype or shortcuts — here to teach structure, discipline, and a smarter way to trade.
          </p>
        </div>
      </div>
    </section>
  )
}
