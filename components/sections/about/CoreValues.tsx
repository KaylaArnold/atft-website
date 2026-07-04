const VALUES = [
  { icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253", label: "Education First", desc: "Every session starts with understanding before action." },
  { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", label: "Risk Management", desc: "Protect capital first. Growth follows discipline." },
  { icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z", label: "Community", desc: "Traders grow faster together than alone." },
  { icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", label: "Proven Strategy", desc: "The 5% DRIP Method is built on years of real trading experience." },
  { icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z", label: "Transparency", desc: "We share wins, losses, and everything in between." },
  { icon: "M13 10V3L4 14h7v7l9-11h-7z", label: "Clear Goals", desc: "Every trader needs a plan. We help you build yours." },
]

export default function CoreValues() {
  return (
    <section className="section-padding bg-brand-white">
      <div className="max-w-site mx-auto px-6">

        <div className="flex flex-col items-center gap-4 mb-16 text-center">
          <div className="flex items-center gap-3">
            <div className="h-px w-8" style={{ background: "#C9A84C" }} />
            <span className="text-xs font-semibold tracking-widest uppercase text-gold">What We Stand For</span>
            <div className="h-px w-8" style={{ background: "#C9A84C" }} />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-black">
            Our core values.
          </h2>
          <p className="text-base text-brand-brown max-w-xl leading-relaxed">
            Building wealth through education, strategy, and community support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUES.map((value) => (
            <div key={value.label} className="flex flex-col gap-4 p-6 rounded-2xl hover:-translate-y-1 transition-all duration-300" style={{ background: "#FBF6EC", border: "1px solid rgba(201,168,76,0.15)" }}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.2)" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d={value.icon} />
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold text-brand-black">{value.label}</h3>
              <p className="text-sm text-brand-brown leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
