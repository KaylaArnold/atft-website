import Image from "next/image"

export default function CoachTrent() {
  return (
    <section className="section-padding relative overflow-hidden" style={{ background: "#FBF6EC" }}>
      <div className="max-w-site mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <div className="flex items-center gap-3">
              <div className="h-px w-8" style={{ background: "#C9A84C" }} />
              <span className="text-xs font-semibold tracking-widest uppercase text-gold">Meet the Team</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-black leading-tight">
              Partners in life, trading, and teaching.
            </h2>
            <div className="flex flex-col gap-4">
              <p className="text-base leading-relaxed text-brand-brown">
                Trent and I are partners in life and in this work. Our journey has not been linear. We have experienced the highs of earning over a million dollars, and the lows of losing nearly as much — and rebuilding again from the ground up.
              </p>
              <p className="text-base leading-relaxed text-brand-brown">
                Those seasons taught us lessons no textbook ever could. That perspective is what we bring to our students — not theory alone, but real-world insight grounded in discipline, resilience, and emotional control.
              </p>
              <p className="text-base leading-relaxed text-brand-brown">
                Today, we work alongside a trusted team of experienced educators to support traders at different stages — from beginners starting with small accounts to more seasoned traders looking for consistency and clarity.
              </p>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative w-full max-w-md mx-auto rounded-2xl overflow-hidden" style={{ height: "560px", border: "1px solid rgba(201,168,76,0.2)" }}>
              <Image
                src="/images/arletta-trent.jpg"
                alt="Arletta and Coach Trent at a winery"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute top-4 left-4 w-8 h-8" style={{ borderTop: "2px solid rgba(201,168,76,0.5)", borderLeft: "2px solid rgba(201,168,76,0.5)" }} />
              <div className="absolute top-4 right-4 w-8 h-8" style={{ borderTop: "2px solid rgba(201,168,76,0.5)", borderRight: "2px solid rgba(201,168,76,0.5)" }} />
              <div className="absolute bottom-4 left-4 w-8 h-8" style={{ borderBottom: "2px solid rgba(201,168,76,0.5)", borderLeft: "2px solid rgba(201,168,76,0.5)" }} />
              <div className="absolute bottom-4 right-4 w-8 h-8" style={{ borderBottom: "2px solid rgba(201,168,76,0.5)", borderRight: "2px solid rgba(201,168,76,0.5)" }} />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-xl px-6 py-4 hidden lg:block" style={{ background: "#0F0A02", border: "1px solid rgba(201,168,76,0.2)" }}>
              <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "rgba(201,168,76,0.6)" }}>Together since</p>
              <p className="font-display text-2xl font-bold" style={{ color: "#E8C96A" }}>Day 1</p>
              <p className="text-xs mt-1" style={{ color: "rgba(249,246,240,0.5)" }}>Life & trading partners</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
