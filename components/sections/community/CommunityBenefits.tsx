const BENEFITS = [
  { icon: "M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z", title: "Daily Live Trading Sessions", desc: "Trade alongside Arletta and the coaching team every market day. Watch real decisions made in real time with full explanation of the why behind every move." },
  { icon: "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z", title: "Full Replay Library", desc: "Missed a session? Every live session is recorded and available in the replay library. Learn at your own pace without missing a thing." },
  { icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z", title: "Private Community Access", desc: "Connect with hundreds of traders at every level. Ask questions, share wins, get feedback, and stay accountable — inside our Mighty Networks community." },
  { icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", title: "Weekly Market Insights", desc: "Every week the team breaks down what happened in the market, what to watch for, and how the 5% Method applies to current conditions." },
  { icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253", title: "Trade Education and Strategy", desc: "Beyond live sessions — ongoing education on options strategies, risk management, chart reading, and execution built around the 5% Method framework." },
  { icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", title: "Accountability and Support", desc: "Trading alone is hard. Inside the community you have a team of coaches and fellow traders keeping you accountable, motivated, and on track." },
]

export default function CommunityBenefits() {
  return (
    <section className="section-padding bg-brand-white">
      <div className="max-w-site mx-auto px-6">
        <div className="flex flex-col items-center gap-4 mb-16 text-center">
          <div className="flex items-center gap-3">
            <div className="h-px w-8" style={{ background: "#C9A84C" }} />
            <span className="text-xs font-semibold tracking-widest uppercase text-gold">What You Get</span>
            <div className="h-px w-8" style={{ background: "#C9A84C" }} />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-black">Everything included in your membership.</h2>
          <p className="text-base text-brand-brown max-w-xl leading-relaxed">One membership. Everything you need to trade with structure, stay accountable, and keep growing.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS.map((benefit) => (
            <div key={benefit.title} className="flex flex-col gap-4 p-6 rounded-2xl hover:-translate-y-1 transition-all duration-300" style={{ background: "#FBF6EC", border: "1px solid rgba(201,168,76,0.15)" }}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.2)" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d={benefit.icon} />
                </svg>
              </div>
              <h3 className="font-display text-lg font-bold text-brand-black">{benefit.title}</h3>
              <p className="text-sm text-brand-brown leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
