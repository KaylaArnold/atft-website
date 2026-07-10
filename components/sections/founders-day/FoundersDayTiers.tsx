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
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
            <a href="https://twitter.com/intent/tweet?text=Join%20me%20in%20celebrating%20Founders%20Day%20with%20Coach%20Arletta!%20Show%20your%20support%20here%3A&url=https://www.arlettathefriendlytrader.com/founders-day" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 hover:opacity-80" style={{ background: "#000", color: "#fff" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              X / Twitter            
            </a>
            <a href="https://www.instagram.com/arlettathefriendlytrader" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 hover:opacity-80" style={{ background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)", color: "#fff" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              Instagram
            </a>
            <button onClick={() => { navigator.clipboard.writeText("https://www.arlettathefriendlytrader.com/founders-day"); alert("Link copied!"); }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 hover:opacity-80" style={{ background: "#0F0A02", color: "#E8C96A", border: "1px solid rgba(201,168,76,0.3)" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
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
