import Image from "next/image"

const LEARNING_TOPICS = [
  "Stock charts, candlesticks, and market movement",
  "The 5% Daily Drip™ trading approach",
  "Technical analysis and potential entries and exits",
  "Risk management and stop losses",
  "Patience, discipline, and emotional control",
  "Protecting your trading capital",
  "Journaling, review, and accountability",
  "Learning alongside other traders",
]

export default function CommunityBenefits() {
  return (
    <section className="section-padding bg-brand-white">
      <div className="max-w-site mx-auto px-6 space-y-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative min-h-[420px] overflow-hidden rounded-2xl">
            <Image src="/images/arletta-teaching.jpg" alt="Coach Arletta teaching trading education" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-xs font-semibold tracking-widest uppercase text-gold">Meet Coach Arletta</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-black">The Friendly Trader.</h2>
            <p className="text-base leading-relaxed text-brand-brown">Coach Arletta makes trading education practical, relatable, and clear. She teaches students to understand what they are doing, take personal responsibility for their decisions, and build the emotional discipline that responsible trading requires.</p>
            <blockquote className="font-display text-2xl italic leading-relaxed text-brand-black border-l-2 border-gold pl-5">“Never allow your money to grow faster than your discipline.”</blockquote>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <article className="rounded-2xl p-8 lg:p-10" style={{ background: "#FBF6EC", border: "1px solid rgba(201,168,76,0.2)" }}>
            <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-4">More Than a Class</p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-brand-black mb-5">What Does It Mean to Become a Dripper?</h2>
            <p className="text-base leading-relaxed text-brand-brown">Becoming a Dripper means entering a supportive community built around mentorship, accountability, encouragement, and growth. You will have people beside you, but you must still do your own work: study, practice, journal, review, ask questions, and take responsibility for every trading decision.</p>
          </article>
          <article className="rounded-2xl p-8 lg:p-10 bg-brand-dark">
            <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-4">Grow Together</p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-5" style={{ color: "#F9F6F0" }}>A Community That Feels Like Family</h2>
            <p className="text-base leading-relaxed" style={{ color: "rgba(249,246,240,0.72)" }}>The ATFT community brings education, encouragement, and accountability into one space. Students learn alongside people who understand the journey, celebrate progress, and support personal growth both inside and outside the market.</p>
          </article>
        </div>

        <div>
          <div className="flex flex-col items-center gap-4 mb-10 text-center">
            <p className="text-xs font-semibold tracking-widest uppercase text-gold">Six Months of Growth</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-black">What Will You Learn?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {LEARNING_TOPICS.map((topic) => (
              <div key={topic} className="flex items-start gap-3 rounded-xl p-5" style={{ background: "#FBF6EC", border: "1px solid rgba(201,168,76,0.18)" }}>
                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-brand-black bg-gold">✓</span>
                <p className="text-sm leading-relaxed text-brand-brown">{topic}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
