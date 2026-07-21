export default function FoundersFound() {
  return (
    <section id="founders-fund" className="section-padding bg-brand-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }} />
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 30% 50%, #C9A84C 0%, transparent 60%)" }} />

      <div className="relative max-w-site mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="h-px w-8" style={{ background: "#C9A84C" }} />
              <span className="text-xs font-semibold tracking-widest uppercase text-gold">Year Round Giving</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold leading-tight" style={{ color: "#F9F6F0" }}>
              Founder's Fund.
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "rgba(249,246,240,0.7)" }}>
              Coach Arletta pours everything she has into this community — her time, her knowledge, her heart, and her faith. The Founder's Fund is an opportunity to give back to the person who started it all, any time of year, in any amount you feel led to contribute.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "rgba(249,246,240,0.7)" }}>
              No tiers. No expectations. Just gratitude expressed in whatever way feels right to you.
            </p>

            <div className="p-5 rounded-2xl" style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)" }}>
              <p className="text-sm italic" style={{ color: "rgba(249,246,240,0.6)" }}>
                "One Yes Changed Thousands of Lives." 💜
              </p>
              <p className="text-xs mt-2" style={{ color: "rgba(201,168,76,0.5)" }}>— Coach Arletta Harris</p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-sm rounded-2xl p-8 flex flex-col gap-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(201,168,76,0.25)" }}>
              <div className="flex flex-col gap-2">
                <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "rgba(201,168,76,0.7)" }}>Support Coach Arletta</p>
                <p className="font-display text-3xl font-bold" style={{ color: "#E8C96A" }}>Founder's Fund</p>
                <p className="text-sm" style={{ color: "rgba(249,246,240,0.5)" }}>Give any amount, any time.</p>
              </div>

              <div style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }} />

              <a href="https://buy.stripe.com/6oUbJ12RRbVPcX8cEab3q0n" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 rounded-md text-sm font-semibold text-brand-black hover:opacity-90 transition-all duration-200 text-center" style={{ background: "linear-gradient(135deg, #C9A84C 0%, #E8C96A 40%, #C9A84C 100%)" }}>
                Give to the Founder's Fund
              </a>

              <p className="text-xs text-center" style={{ color: "rgba(249,246,240,0.35)" }}>
                Processed securely through Stripe. Contributions are non-refundable and not tax deductible.
              </p>
            </div>
          </div>

        </div>

        <div className="mt-16">
          <div className="flex flex-col items-center gap-4 mb-8 text-center">
            <div className="flex items-center gap-3">
              <div className="h-px w-8" style={{ background: "#C9A84C" }} />
              <span className="text-xs font-semibold tracking-widest uppercase text-gold">Founder's Day 2026</span>
              <div className="h-px w-8" style={{ background: "#C9A84C" }} />
            </div>
            <h3 className="font-display text-3xl font-bold leading-tight" style={{ color: "#F9F6F0" }}>Watch the Replay.</h3>
            <p className="text-base max-w-xl" style={{ color: "rgba(249,246,240,0.6)" }}>
              Relive the celebration that started it all. See the love, the tears, and the gratitude from our incredible community.
            </p>
          </div>
          <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden" style={{ aspectRatio: "16/9", border: "1px solid rgba(201,168,76,0.2)" }}>
            <iframe
              src="https://www.youtube.com/embed/JwU2FOwxrJc"
              title="Founder's Day 2026 - Arletta The Friendly Trader"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
