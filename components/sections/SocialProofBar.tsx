export default function SocialProofBar() {
  const stats = [
    { value: "1,000+", label: "Students Taught" },
    { value: "11K+", label: "TikTok Followers" },
    { value: "3,500+", label: "YouTube Subscribers" },
    { value: "1,700+", label: "Instagram Community" },
    { value: "3+", label: "Years Teaching Live" },
    { value: "5%", label: "The Method That Changes Everything" },
  ]

  return (
    <section className="bg-brand-black py-6 overflow-hidden" style={{ borderTop: "1px solid rgba(201,168,76,0.15)", borderBottom: "1px solid rgba(201,168,76,0.15)" }}>
      <div className="flex animate-scroll">
        {[...stats, ...stats].map((stat, index) => (
          <div key={index} className="flex items-center gap-3 flex-shrink-0 px-10">
            <span className="font-display text-2xl font-bold" style={{ color: "#E8C96A" }}>
              {stat.value}
            </span>
            <span className="text-xs tracking-widest uppercase" style={{ color: "rgba(249,246,240,0.45)" }}>
              {stat.label}
            </span>
            <div className="w-px h-6 ml-10" style={{ background: "rgba(201,168,76,0.2)" }} />
          </div>
        ))}
      </div>
    </section>
  )
}
