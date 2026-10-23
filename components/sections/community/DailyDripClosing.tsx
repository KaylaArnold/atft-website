import Link from "next/link"
import { SITE_CONFIG } from "@/lib/constants"

export default function DailyDripClosing() {
  return (
    <section className="section-padding bg-brand-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="rounded-2xl px-6 py-12 lg:px-12 lg:py-16" style={{ background: "#FBF6EC", border: "1px solid rgba(201,168,76,0.2)" }}>
          <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-4">The Bigger Question</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-black mb-6">YOUR MONEY MAY CHANGE. BUT WHO ARE YOU BECOMING?</h2>
          <p className="text-base leading-relaxed text-brand-brown max-w-2xl mx-auto">The goal is not only to understand the market differently. It is to grow in discipline, patience, decision-making, confidence, and the long-term habits you carry into every part of your life.</p>
          <div className="h-px my-10" style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.6), transparent)" }} />
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-brand-black mb-4">YOUR SEAT AT THE DRIP TABLE IS WAITING.</h2>
          <p className="font-display text-xl italic text-gold mb-8">Come for the education. Stay for the growth. Become part of the family.</p>
          <p className="font-semibold text-brand-black">Coach Arletta | The Friendly Trader</p>
          <blockquote className="font-display text-xl italic text-brand-brown mt-4">“Confusion creates fear. Clarity creates confidence. Confidence creates consistency.”</blockquote>
          <p className="text-sm mt-8 text-brand-brown">Already a member? <a href={SITE_CONFIG.communityUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-gold hover:underline">Access the ATFT community</a>.</p>
        </div>
        <div className="mt-8 text-left rounded-xl p-5" style={{ border: "1px solid rgba(201,168,76,0.18)" }}>
          <p className="text-xs leading-relaxed text-brand-brown"><strong className="text-brand-black">Trading Risk Disclaimer:</strong> Trading involves substantial risk, including possible loss of capital. This is an educational program, not personalized financial advice. The 5% Daily Drip™ strategy does not guarantee daily profits or investment returns. Individual results vary. Please review our <Link href="/disclaimer" className="text-gold hover:underline">full trading disclaimer</Link>.</p>
        </div>
      </div>
    </section>
  )
}
