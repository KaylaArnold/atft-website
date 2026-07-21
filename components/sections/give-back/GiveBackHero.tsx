export default function GiveBackHero() {
  return (
    <section className="relative bg-brand-dark overflow-hidden" style={{ paddingTop: "8rem", paddingBottom: "6rem" }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }} />
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, #C9A84C 0%, transparent 70%)" }} />

      <div className="relative max-w-site mx-auto px-6">
        <div className="flex flex-col items-center text-center gap-8 max-w-3xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="h-px w-8" style={{ background: "#C9A84C" }} />
            <span className="text-xs font-semibold tracking-widest uppercase text-gold">ATFT Community</span>
            <div className="h-px w-8" style={{ background: "#C9A84C" }} />
          </div>

          <h1 className="font-display text-5xl lg:text-7xl font-bold leading-tight" style={{ color: "#F9F6F0" }}>
            Give Back.
          </h1>

          <p className="text-lg leading-relaxed max-w-2xl" style={{ color: "rgba(249,246,240,0.7)" }}>
            This community was built on generosity, faith, and the belief that we are stronger together. Whether you are giving to a fellow trader in need or investing in the mission that started it all — every act of giving matters here.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href="#cousins-pot" className="inline-flex items-center justify-center px-6 py-3 rounded-md text-sm font-semibold text-brand-black hover:opacity-90 transition-all duration-200" style={{ background: "linear-gradient(135deg, #C9A84C 0%, #E8C96A 40%, #C9A84C 100%)" }}>
              The Cousins Pot
            </a>
            <a href="#founders-fund" className="inline-flex items-center justify-center px-6 py-3 rounded-md text-sm font-semibold text-brand-black hover:opacity-90 transition-all duration-200" style={{ background: "linear-gradient(135deg, #C9A84C 0%, #E8C96A 40%, #C9A84C 100%)" }}>
              Founder's Fund
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
