import Link from "next/link"

const FEATURED_PROGRAMS = [
  {
    name: "First Drip",
    badge: "Beginner",
    badgeColor: "#1a6b3c",
    badgeBg: "#e6f4ed",
    description: "The official starting point for new or inconsistent traders. Learn trading basics, chart reading, candlestick patterns, and the 5% Method framework.",
    highlight: "Includes live paper trading",
  },
  {
    name: "Swing Drip",
    badge: "Intermediate",
    badgeColor: "#7a4f00",
    badgeBg: "#fef3e2",
    description: "For traders looking to expand beyond day trading. Build consistency with multi-day positions, high-probability setups, and emotional control.",
    highlight: "Multi-day & multi-week positions",
  },
  {
    name: "Inner Drip",
    badge: "All Levels",
    badgeColor: "#4a1a6b",
    badgeBg: "#f3e6f4",
    description: "A premium mindset alignment session for traders who know the strategy but struggle with consistent execution due to fear or emotional reactivity.",
    highlight: "Mindset & nervous system regulation",
  },
  {
    name: "The Drip Mastery Intensive",
    badge: "Advanced",
    badgeColor: "#8B1a1a",
    badgeBg: "#fde8e8",
    description: "A high-level in-person experience for experienced traders ready to sharpen execution, expand into long-term wealth building, and master professional trade execution.",
    highlight: "In-person with Arletta & coaches",
  },
]

export default function ProgramsTeaser() {
  return (
    <section className="section-padding" style={{ background: "#FBF6EC" }}>
      <div className="max-w-site mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="h-px w-8" style={{ background: "#C9A84C" }} />
              <span className="text-xs font-semibold tracking-widest uppercase text-gold">Trading Education</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-black leading-tight">
              Find your program.
              <br />
              Start your drip.
            </h2>
          </div>
          <p className="text-base text-brand-brown max-w-sm leading-relaxed">
            From complete beginners to experienced traders — we have a structured program designed for exactly where you are right now.
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {FEATURED_PROGRAMS.map((program) => (
            <div
              key={program.name}
              className="flex flex-col gap-4 rounded-2xl p-6 bg-brand-white group hover:-translate-y-1 transition-all duration-300"
              style={{ border: "1px solid rgba(201,168,76,0.15)" }}
            >
              {/* Badge */}
              <span
                className="self-start text-xs font-semibold px-3 py-1 rounded-full"
                style={{ background: program.badgeBg, color: program.badgeColor }}
              >
                {program.badge}
              </span>

              {/* Name */}
              <h3 className="font-display text-xl font-bold text-brand-black leading-tight">
                {program.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-brand-brown leading-relaxed flex-1">
                {program.description}
              </p>

              {/* Highlight */}
              <div className="flex items-center gap-2 pt-2" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#C9A84C" }} />
                <span className="text-xs font-medium" style={{ color: "#8B6914" }}>
                  {program.highlight}
                </span>
              </div>

              {/* CTA */}
              <Link
                href="/programs"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-dark transition-colors duration-200 group"
              >
                Learn more
                <span className="group-hover:translate-x-1 transition-transform duration-200">&rarr;</span>
              </Link>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-sm font-semibold text-brand-black hover:opacity-90 transition-all duration-200"
            style={{ background: "linear-gradient(135deg, #C9A84C 0%, #E8C96A 40%, #C9A84C 100%)" }}
          >
            View all 11 programs &rarr;
          </Link>
        </div>

      </div>
    </section>
  )
}
