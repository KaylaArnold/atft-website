"use client"

import { useState } from "react"

const FAQS = [
  {
    q: "Do I need any trading experience to join?",
    a: "Not at all. First Drip and Kid's Drip are designed specifically for complete beginners. If you are brand new, start there. If you have some experience but need realignment, Drip Reset is a great fit.",
  },
  {
    q: "Are classes live or pre-recorded?",
    a: "Most of our programs are live sessions — either in-person in Atlanta or via Zoom. Live paper trading and live demonstrations are a core part of how we teach. The 5% Drippers community subscription includes a replay library for members who cannot attend live.",
  },
  {
    q: "What is the 5% Method?",
    a: "The 5% Method is a structured options trading framework developed by Arletta that focuses on capital protection, disciplined execution, and consistent small gains over time. It is designed to help traders build a repeatable process rather than chasing wins.",
  },
  {
    q: "Do classes happen online or in-person?",
    a: "Both. The Midtown Drip Room and The Drip Mastery Intensive are in-person experiences in Atlanta. Most other classes are offered via Zoom. Check individual program details or contact us to confirm current availability.",
  },
  {
    q: "How is this different from free YouTube content?",
    a: "Our YouTube channel provides foundational education for free. Our paid programs offer live interaction, direct feedback, guided paper trading, accountability, and access to our coaching team — things a recorded video cannot provide.",
  },
  {
    q: "Is this financial advice?",
    a: "No. All programs are educational in nature. We teach trading strategies, risk management, and market structure — but nothing we share constitutes personalized financial or investment advice. Trading involves risk and results are never guaranteed.",
  },
]

export default function ProgramsFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="section-padding" style={{ background: "#FBF6EC" }}>
      <div className="max-w-site mx-auto px-6">
        <div className="flex flex-col items-center gap-4 mb-16 text-center">
          <div className="flex items-center gap-3">
            <div className="h-px w-8" style={{ background: "#C9A84C" }} />
            <span className="text-xs font-semibold tracking-widest uppercase text-gold">Common Questions</span>
            <div className="h-px w-8" style={{ background: "#C9A84C" }} />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-black">
            Frequently asked questions.
          </h2>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden bg-brand-white"
              style={{ border: "1px solid rgba(201,168,76,0.15)" }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-gold-tint transition-colors duration-200"
              >
                <span className="font-display text-lg font-semibold text-brand-black">{faq.q}</span>
                <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-200" style={{ background: "rgba(201,168,76,0.15)", transform: openIndex === index ? "rotate(45deg)" : "rotate(0deg)" }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2.5">
                    <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-base text-brand-brown leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
