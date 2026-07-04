"use client"

import { useState } from "react"

const FAQS = [
  { q: "What exactly is the 5% Drippers community?", a: "The 5% Drippers is a private trading community hosted on Mighty Networks. Members get access to daily live trading sessions, a full replay library, weekly market insights, trade education, and a supportive group of traders all learning the 5% DRIP Method together." },
  { q: "How do I access the community after joining?", a: "After signing up you will receive an invitation to join our Mighty Networks community. Everything — live sessions, replays, discussions, and resources — lives inside that platform. You can access it on desktop or via the Mighty Networks mobile app." },
  { q: "What time are the daily live sessions?", a: "Live sessions are held during market hours. Specific session times are shared inside the community. All sessions are recorded and added to the replay library so you never miss a thing." },
  { q: "Do I need to be an experienced trader to join?", a: "No. The community welcomes traders at every level. Beginners will find the live sessions educational and the community supportive. More experienced traders benefit from daily structure, accountability, and the coaching team's insight." },
  { q: "Can I cancel anytime?", a: "Yes. There is no long-term commitment. You can cancel your monthly membership at any time inside of the Mighty Networks app and your access will continue through the end of your current billing period." },
  { q: "Is this the same as the trading classes?", a: "No — the community membership and the individual classes are separate. The membership gives you ongoing daily access to live sessions and community. The classes are standalone educational programs focused on specific topics or skill levels. Many members do both." },
]

export default function CommunityFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="section-padding bg-brand-white">
      <div className="max-w-site mx-auto px-6">
        <div className="flex flex-col items-center gap-4 mb-16 text-center">
          <div className="flex items-center gap-3">
            <div className="h-px w-8" style={{ background: "#C9A84C" }} />
            <span className="text-xs font-semibold tracking-widest uppercase text-gold">Common Questions</span>
            <div className="h-px w-8" style={{ background: "#C9A84C" }} />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-black">Questions about the community.</h2>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {FAQS.map((faq, index) => (
            <div key={index} className="rounded-2xl overflow-hidden bg-brand-white" style={{ border: "1px solid rgba(201,168,76,0.15)" }}>
              <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-gold-tint transition-colors duration-200">
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
