export default function Philosophy() {
  return (
    <section className="section-padding bg-brand-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }} />
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 70% 50%, #C9A84C 0%, transparent 60%)" }} />

      <div className="relative max-w-site mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="h-px w-8" style={{ background: "#C9A84C" }} />
              <span className="text-xs font-semibold tracking-widest uppercase text-gold">Our Philosophy</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold leading-tight" style={{ color: "#F9F6F0" }}>
              Trading should feel structured, educated, and intentional.
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "rgba(249,246,240,0.7)" }}>
              Not stressful or chaotic. This is not about chasing quick wins or unrealistic promises. It is about learning how to trade with confidence and clarity, manage risk responsibly, build habits that support long-term growth, and create freedom through informed decision-making.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "rgba(249,246,240,0.7)" }}>
              Whether you are brand new or simply tired of inconsistent results, our goal is to help you trade smarter — one well-planned trade at a time.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {[
              { label: "Education before execution", desc: "We never encourage trading without first understanding the why behind every decision." },
              { label: "Risk management first", desc: "Capital protection is the foundation of every strategy we teach." },
              { label: "Community support", desc: "Trading is better together. Our community keeps you accountable and inspired." },
              { label: "Honest and transparent", desc: "We share the wins and the losses. Real experience makes better teachers." },
            ].map((item) => (
              <div key={item.label} className="flex gap-4 p-4 rounded-xl" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(201,168,76,0.15)" }}>
                <div className="flex-shrink-0 w-2 h-2 rounded-full mt-2" style={{ background: "#C9A84C" }} />
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ color: "#E8C96A" }}>{item.label}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(249,246,240,0.6)" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
