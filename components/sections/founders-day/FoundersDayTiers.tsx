"use client"

const TIERS = [
  { name: "First Drip", amount: 150, url: "https://buy.stripe.com/9B64gzbon0d75uG5bIb3q06" },
  { name: "Rising Dripper", amount: 200, url: "https://buy.stripe.com/bJe14n2RR6Bv0amaw2b3q07" },
  { name: "Community Dripper", amount: 250, url: "https://buy.stripe.com/5kQ8wPbonbVPg9k33Ab3q08" },
  { name: "Dedicated Dripper", amount: 300, url: "https://buy.stripe.com/bJe6oHdwv7Fz9KWaw2b3q09" },
  { name: "Bronze Dripper", amount: 400, url: "https://buy.stripe.com/bJe3cv2RR8JD9KWfQmb3q0a" },
  { name: "Silver Dripper", amount: 500, url: "https://buy.stripe.com/eVqbJ16433pj1eqcEab3q0b" },
  { name: "Gold Dripper", amount: 750, url: "https://buy.stripe.com/cNi9ATdwvgc59KWdIeb3q0c" },
  { name: "Platinum Dripper", amount: 1000, url: "https://buy.stripe.com/eVqeVd0JJ1hb7CO47Eb3q0d" },
  { name: "Diamond Dripper", amount: 1500, url: "https://buy.stripe.com/28EeVdcsr8JD4qCdIeb3q0e" },
  { name: "Elite Dripper", amount: 2000, url: "https://buy.stripe.com/fZubJ14ZZf812iugUqb3q0f" },
  { name: "Legacy Dripper", amount: 3000, url: "https://buy.stripe.com/6oU8wP643f81aP0aw2b3q0g" },
  { name: "Visionary", amount: 5000, url: "https://buy.stripe.com/bJe7sL7870d74qC0Vsb3q0h" },
  { name: "Founding Partner", amount: 8000, url: "https://buy.stripe.com/9B66oH1NNcZT9KW7jQb3q0i" },
  { name: "Founder's Circle", amount: 10000, url: "https://buy.stripe.com/9B67sLfEDe3X2iueMib3q0j" },
  { name: "Cornerstone", amount: 20000, url: "https://buy.stripe.com/bJecN5fEDgc53my47Eb3q0k" },
  { name: "My Own Drip", amount: null, url: "https://donate.stripe.com/14A3cvbonbVP9KWcEab3q0l" },
]

const gradientBg = "linear-gradient(135deg, #C9A84C 0%, #E8C96A 40%, #C9A84C 100%)"

export default function FoundersDayTiers() {
  return (
    <section id="tiers" className="section-padding bg-brand-white">
      <div className="max-w-site mx-auto px-6">

        <div className="flex flex-col items-center gap-4 mb-16 text-center">
          <div className="flex items-center gap-3">
            <div className="h-px w-8" style={{ background: "#C9A84C" }} />
            <span className="text-xs font-semibold tracking-widest uppercase text-gold">Choose Your Level</span>
            <div className="h-px w-8" style={{ background: "#C9A84C" }} />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-black">Show your support.</h2>
          <p className="text-base text-brand-brown max-w-xl leading-relaxed">
            Every contribution — large or small — makes a difference. Choose the amount that feels right for you.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {TIERS.map((tier) => (
            <a key={tier.name} href={tier.url} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-center gap-2 p-6 rounded-2xl bg-brand-white hover:-translate-y-1 transition-all duration-300 group" style={{ border: "1px solid rgba(201,168,76,0.2)", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-1" style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="null" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              {tier.amount ? (
                <span className="font-display text-3xl font-bold" style={{ color: "#C9A84C" }}>
                  ${tier.amount.toLocaleString()}
                </span>
              ) : (
                <span className="font-display text-2xl font-bold" style={{ color: "#C9A84C" }}>
                  Custom
                </span>
              )}
              <span className="text-xs font-medium text-brand-brown">{tier.name}</span>
              <div className="mt-2 w-full pt-3" style={{ borderTop: "1px solid rgba(201,168,76,0.12)" }}>
                <span className="text-xs font-semibold" style={{ color: "#8B6914" }}>Donate &rarr;</span>
              </div>
            </a>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4 mt-8 mb-8 p-6 rounded-2x1" style={{ background: "#FBF6EC", border: "1px solid rgba(201,168,76,0.15)" }}>
          <p className="text-sm font-semibold text-brand-black">Share this page with your fellow Drippers and Friends!</p>
          <p className="text-xs text-brand-brown">Help us spread the word about Founders Day!</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.arlettathefriendlytrader.com/founders-day" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 hover:opacity-80" style={{ background: "#1877F2", color: "#fff" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.553-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.3281-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              Facebook
            </a>
            <a href="https://twitter.com/intent/tweet?text=Show%20your%20support%20for%20Coach%20Arletta%20on%20Founder%27s%20Day!&url=https://www.arlettathefriendlytrader.com/founders-day" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 hover:opacity-80" style={{ background: "#000", color: "#fff" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
  X / Twitter
</a>
            <a href="https://www.youtube.com/share?url=https://youtube.com/live/JwU2FOwxrJc" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 hover:opacity-80" style={{ background: "#FF0000", color: "#fff" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <button onClick={() => { navigator.clipboard.writeText("https://www.arlettathefriendlytrader.com/founders-day"); alert("Link copied!"); }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 hover:opacity-80" style={{ background: "#0F0A02", color: "#E8C96A", border: "1px solid rgba(201,168,76,0.3)" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="null" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
              Copy Link
            </button>
          </div>
        </div>

        <div className="text-center flex flex-col gap-3">
          <p className="text-xs text-brand-brown opacity-60">
            Donations are processed securely through Stripe. All contributions are non-refundable.
          </p>
          <p className="text-xs text-brand-brown opacity-60">
            Donations to Arletta The Friendly Trader are not tax deductible as charitable contributions.
          </p>
        </div>

      </div>
    </section>
  )
}
