const gradientBg = "linear-gradient(135deg, #C9A84C 0%, #E8C96A 40%, #C9A84C 100%)"

export default function AtlantaCTA() {
  return (
    <section className="section-padding bg-brand-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }} />
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, #C9A84C 0%, transparent 70%)" }} />

      <div className="relative max-w-site mx-auto px-6 text-center flex flex-col items-center gap-8 max-w-3xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="h-px w-8" style={{ background: "#C9A84C" }} />
          <span className="text-xs font-semibold tracking-widest uppercase text-gold">Need Help?</span>
          <div className="h-px w-8" style={{ background: "#C9A84C" }} />
        </div>

        <h2 className="font-display text-4xl lg:text-5xl font-bold leading-tight" style={{ color: "#F9F6F0" }}>
          Questions about your visit?
        </h2>

        <p className="text-lg leading-relaxed" style={{ color: "rgba(249,246,240,0.7)" }}>
          If you have questions about lodging, transportation, or navigating Midtown Atlanta, our support team is happy to help before your visit.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-md text-sm font-semibold text-brand-black hover:opacity-90 transition-all duration-200" style={{ background: gradientBg }}>
            Contact Us
          </a>
          <a href="mailto:support@arlettathefriendlytrader.com" className="inline-flex items-center justify-center px-8 py-4 rounded-md text-sm font-semibold transition-all duration-200" style={{ color: "#F9F6F0", border: "1px solid rgba(201,168,76,0.4)" }}>
            support@arlettathefriendlytrader.com
          </a>
        </div>
      </div>
    </section>
  )
}
