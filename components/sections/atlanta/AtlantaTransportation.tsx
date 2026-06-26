export default function AtlantaTransportation() {
  return (
    <section className="section-padding bg-brand-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }} />
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 30% 50%, #C9A84C 0%, transparent 60%)" }} />

      <div className="relative max-w-site mx-auto px-6">
        <div className="flex flex-col gap-4 mb-12">
          <div className="flex items-center gap-3">
            <div className="h-px w-8" style={{ background: "#C9A84C" }} />
            <span className="text-xs font-semibold tracking-widest uppercase text-gold">Getting Here</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold leading-tight" style={{ color: "#F9F6F0" }}>Transportation options.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-4 p-6 rounded-2xl" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(201,168,76,0.2)" }}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.2)" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
            </div>
            <h3 className="font-display text-xl font-bold" style={{ color: "#F9F6F0" }}>Uber and Lyft</h3>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(249,246,240,0.6)" }}>From Hartsfield-Jackson Atlanta International Airport, ride-share is approximately 20-30 minutes to Midtown. Travel time varies based on traffic.</p>
          </div>

          <div className="flex flex-col gap-4 p-6 rounded-2xl" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(201,168,76,0.2)" }}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.2)" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <h3 className="font-display text-xl font-bold" style={{ color: "#F9F6F0" }}>MARTA Rail</h3>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(249,246,240,0.6)" }}>Take the Red or Gold Line from the airport and exit at Midtown Station or Arts Center Station. Both stations are within walking distance of our office.</p>
          </div>

          <div className="flex flex-col gap-4 p-6 rounded-2xl" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(201,168,76,0.2)" }}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.2)" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3" />
                <rect x="9" y="11" width="14" height="10" rx="2" />
                <circle cx="12" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
              </svg>
            </div>
            <h3 className="font-display text-xl font-bold" style={{ color: "#F9F6F0" }}>Parking</h3>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(249,246,240,0.6)" }}>Paid parking garages are available throughout Midtown, including several within walking distance of our office. We recommend checking your hotel for valet and overnight parking options before arrival.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
