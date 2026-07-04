import Link from "next/link"
import Image from "next/image"

export default function AboutTeaser() {
  return (
    <section className="bg-brand-white section-padding">
      <div className="max-w-site mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="relative">
            <div className="relative w-full max-w-md mx-auto rounded-2xl overflow-hidden" style={{ height: "500px", border: "1px solid rgba(201,168,76,0.15)" }}>
              <Image
                src="/images/arletta-journal.jpg"
                alt="Arletta The Friendly Trader"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute top-4 left-4 w-8 h-8" style={{ borderTop: "2px solid rgba(201,168,76,0.4)", borderLeft: "2px solid rgba(201,168,76,0.4)" }} />
              <div className="absolute top-4 right-4 w-8 h-8" style={{ borderTop: "2px solid rgba(201,168,76,0.4)", borderRight: "2px solid rgba(201,168,76,0.4)" }} />
              <div className="absolute bottom-4 left-4 w-8 h-8" style={{ borderBottom: "2px solid rgba(201,168,76,0.4)", borderLeft: "2px solid rgba(201,168,76,0.4)" }} />
              <div className="absolute bottom-4 right-4 w-8 h-8" style={{ borderBottom: "2px solid rgba(201,168,76,0.4)", borderRight: "2px solid rgba(201,168,76,0.4)" }} />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-xl px-6 py-4 hidden lg:block" style={{ background: "#0F0A02", border: "1px solid rgba(201,168,76,0.2)" }}>
              <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "rgba(201,168,76,0.6)" }}>The 5% DRIP Method</p>
              <p className="text-sm font-semibold" style={{ color: "#F9F6F0" }}>Structure over speculation</p>
            </div>
          </div>

          <div className="flex flex-col gap-6" style={{ borderLeft: "3px solid #C9A84C", paddingLeft: "2rem" }}>
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold tracking-widest uppercase text-gold">Our Story</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-black leading-tight">
              From $100 to $350,000 — and everything in between.
            </h2>
            <div className="flex flex-col gap-4">
              <p className="text-base leading-relaxed text-brand-brown">
                I am not here to sell hype or shortcuts. I am here to teach structure, discipline, and a smarter way to trade. My journey into day trading options was not overnight success — like many traders, my husband Trent and I spent years learning through real experience.
              </p>
              <p className="text-base leading-relaxed text-brand-brown">
                I personally began with just $100 and, over time, grew that into more than $350,000 through skill, risk management, and consistency — not luck. We have also experienced the highs of earning over a million dollars, and the lows of losing nearly as much. Those seasons taught us lessons no textbook ever could.
              </p>
              <p className="text-base leading-relaxed text-brand-brown">
                That perspective is what we bring to our students every single day.
              </p>
            </div>
            <Link href="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-dark transition-colors duration-200 group">
              Meet Arletta
              <span className="group-hover:translate-x-1 transition-transform duration-200">&rarr;</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
