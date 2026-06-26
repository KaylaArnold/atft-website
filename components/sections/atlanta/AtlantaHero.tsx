export default function AtlantaHero() {
  return (
    <section className="relative bg-brand-dark overflow-hidden" style={{ paddingTop: "8rem", paddingBottom: "6rem" }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }} />
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 60% 50%, #C9A84C 0%, transparent 60%)" }} />

      <div className="relative max-w-site mx-auto px-6">
        <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="h-px w-8" style={{ background: "#C9A84C" }} />
            <span className="text-xs font-semibold tracking-widest uppercase text-gold">Midtown Atlanta</span>
            <div className="h-px w-8" style={{ background: "#C9A84C" }} />
          </div>
          <h1 className="font-display text-5xl lg:text-7xl font-bold leading-tight" style={{ color: "#F9F6F0" }}>
            Your Atlanta guide.
          </h1>
          <p className="text-lg leading-relaxed max-w-2xl" style={{ color: "rgba(249,246,240,0.7)" }}>
            Coming in from out of town for a class or session? We have got you covered. Here is everything you need to know about getting here, where to stay, where to eat, and what to do while you are in Midtown Atlanta.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
            {["Hotels", "Dining", "Transportation", "Things To Do"].map((item) => (
              <span key={item} className="text-xs font-medium px-4 py-2 rounded-full" style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)", color: "rgba(201,168,76,0.8)" }}>
                {item}
              </span>
            ))}
          </div>
          <div className="p-4 rounded-xl mt-2" style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)" }}>
            <p className="text-sm" style={{ color: "rgba(249,246,240,0.7)" }}>
              Our exact office address is shared after booking. All classes are held in Midtown Atlanta.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
