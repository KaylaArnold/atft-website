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
