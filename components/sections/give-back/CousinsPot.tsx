export default function CousinsPot() {
  return (
    <section id="cousins-pot" className="section-padding bg-brand-white">
      <div className="max-w-site mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="h-px w-8" style={{ background: "#C9A84C" }} />
              <span className="text-xs font-semibold tracking-widest uppercase text-gold">Community Support</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-black leading-tight">
              The Cousins Pot.
            </h2>
            <p className="text-base leading-relaxed text-brand-brown">
              Around here, we're more than traders — we're cousins. The Cousins Pot is how we love on each other in practical ways. Whether someone needs a helping hand during a difficult season or we're celebrating a special moment together, every dollar placed in the pot is a reminder that no one in this community stands alone.
            </p>
            <div className="flex flex-col gap-3 p-6 rounded-2xl" style={{ background: "#FBF6EC", border: "1px solid rgba(201,168,76,0.15)" }}>
              <p className="text-sm font-semibold text-brand-black">How it works</p>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2" style={{ background: "#C9A84C" }} />
                <p className="text-sm text-brand-brown">Community members contribute any amount they feel led to give</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2" style={{ background: "#C9A84C" }} />
                <p className="text-sm text-brand-brown">Funds go toward members experiencing hardship or special moments</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2" style={{ background: "#C9A84C" }} />
                <p className="text-sm text-brand-brown">Coach Arletta oversees and coordinates distributions to those in need</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-sm rounded-2xl p-8 flex flex-col gap-6" style={{ background: "#0F0A02", border: "1px solid rgba(201,168,76,0.25)" }}>
              <div className="flex flex-col gap-2">
                <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "rgba(201,168,76,0.7)" }}>Community Fund</p>
                <p className="font-display text-3xl font-bold" style={{ color: "#E8C96A" }}>The Cousins Pot</p>
                <p className="text-sm" style={{ color: "rgba(249,246,240,0.5)" }}>Give any amount. Every dollar counts.</p>
              </div>

              <div style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }} />

              <div className="flex flex-col gap-3">
                {["Give any amount you feel led to contribute", "Support a fellow trader in need", "Celebrate a community milestone", "No minimum — every dollar matters"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-sm" style={{ color: "rgba(249,246,240,0.7)" }}>{item}</span>
                  </div>
                ))}
              </div>

              <div style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }} />

              <a href="https://buy.stripe.com/dRm8wP4ZZgc5cX8dIeb3q0m" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 rounded-md text-sm font-semibold text-brand-black hover:opacity-90 transition-all duration-200 text-center" style={{ background: "linear-gradient(135deg, #C9A84C 0%, #E8C96A 40%, #C9A84C 100%)" }}>
                Contribute to the Cousins Pot
              </a>

              <p className="text-xs text-center" style={{ color: "rgba(249,246,240,0.35)" }}>
                Processed securely through Stripe. Contributions are non-refundable.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
