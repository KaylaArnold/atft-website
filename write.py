content = """\
export default function FoundersDayReplay() {
  return (
    <section id="replay" className="section-padding" style={{ background: "#FBF6EC" }}>
      <div className="max-w-site mx-auto px-6">
        <div className="flex flex-col items-center gap-6 text-center mb-10">
          <div className="flex items-center gap-3">
            <div className="h-px w-8" style={{ background: "#C9A84C" }} />
            <span className="text-xs font-semibold tracking-widest uppercase text-gold">Relive the Celebration</span>
            <div className="h-px w-8" style={{ background: "#C9A84C" }} />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-black">Watch the Replay.</h2>
          <p className="text-base text-brand-brown max-w-xl leading-relaxed">
            Could not make it to Founder's Day? Watch the full celebration and see the love and support from our incredible community.
          </p>
        </div>

        <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden" style={{ aspectRatio: "16/9", border: "1px solid rgba(201,168,76,0.2)" }}>
          <iframe
            src="https://www.youtube.com/embed/JwU2FOwxrJc"
            title="Founder's Day 2026 - Arletta The Friendly Trader"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>

        <p className="text-center text-sm text-brand-brown mt-6 opacity-60">
          The replay is available for a limited time.
        </p>
      </div>
    </section>
  )
}
"""

with open("components/sections/founders-day/FoundersDayReplay.tsx", "w", encoding="utf-8") as f:
    f.write(content)

print("Done")