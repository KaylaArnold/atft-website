import Image from "next/image"

export default function ArlettsStory() {
  return (
    <section className="section-padding bg-brand-white">
      <div className="max-w-site mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="relative">
            <div className="relative w-full max-w-md mx-auto rounded-2xl overflow-hidden" style={{ height: "560px", border: "1px solid rgba(201,168,76,0.15)" }}>
              <Image
                src="/images/arletta-about.jpg"
                alt="Arletta The Friendly Trader"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute top-4 left-4 w-8 h-8" style={{ borderTop: "2px solid rgba(201,168,76,0.5)", borderLeft: "2px solid rgba(201,168,76,0.5)" }} />
              <div className="absolute top-4 right-4 w-8 h-8" style={{ borderTop: "2px solid rgba(201,168,76,0.5)", borderRight: "2px solid rgba(201,168,76,0.5)" }} />
              <div className="absolute bottom-4 left-4 w-8 h-8" style={{ borderBottom: "2px solid rgba(201,168,76,0.5)", borderLeft: "2px solid rgba(201,168,76,0.5)" }} />
              <div className="absolute bottom-4 right-4 w-8 h-8" style={{ borderBottom: "2px solid rgba(201,168,76,0.5)", borderRight: "2px solid rgba(201,168,76,0.5)" }} />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-xl px-6 py-4 hidden lg:block" style={{ background: "#0F0A02", border: "1px solid rgba(201,168,76,0.2)" }}>
              <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "rgba(201,168,76,0.6)" }}>Started with</p>
              <p className="font-display text-2xl font-bold" style={{ color: "#E8C96A" }}>$100</p>
              <p className="text-xs mt-1" style={{ color: "rgba(249,246,240,0.5)" }}>Grew to $350,000+</p>
            </div>
          </div>

          <div className="flex flex-col gap-6" style={{ borderLeft: "3px solid #C9A84C", paddingLeft: "2rem" }}>
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold tracking-widest uppercase text-gold">Arletta's Journey</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-black leading-tight">
              The real story behind the 5% Method.
            </h2>
            <div className="flex flex-col gap-4">
              <p className="text-base leading-relaxed text-brand-brown">
                I am not here to sell hype or shortcuts. I am here to teach structure, discipline, and a smarter way to trade. My journey into day trading options was not overnight success. Like many traders, my husband Trent and I spent years learning through real experience — wins, losses, and everything in between.
              </p>
              <p className="text-base leading-relaxed text-brand-brown">
                I personally began with just $100 and, over time, grew that into more than $350,000 through skill, risk management, and consistency — not luck. That experience shaped what is now known as the 5% Method, a practical approach designed to help traders focus on capital protection first, while building steady growth.
              </p>
              <p className="text-base leading-relaxed text-brand-brown">
                We have also experienced the highs of earning over a million dollars, and the lows of losing nearly as much — and rebuilding again from the ground up. Those seasons taught us lessons no textbook ever could. That perspective is what we bring to our students every single day.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
