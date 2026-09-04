"use client"

import { useState } from "react"
import Link from "next/link"

const FAQ_SECTIONS = [
  {
    category: "General",
    questions: [
      { q: "Who is Arletta The Friendly Trader?", a: "Arletta is a trading educator and coach based in Midtown Atlanta, Georgia. She began her trading journey with just $100 and grew it to over $350,000 through skill, risk management, and consistency. Today she teaches the 5% DRIP Method alongside her husband Coach Trent and a team of experienced educators." },
      { q: "What is the 5% DRIP Method?", a: "The 5% DRIP Method is a proprietary educational framework developed by Arletta that teaches structured, disciplined trading habits. It focuses on capital protection first, consistent small gains over time, and emotional discipline rather than chasing home runs." },
      { q: "Is this financial advice?", a: "No. All content, programs, classes, sessions, and materials provided by Arletta The Friendly Trader are strictly for educational purposes only. We are not licensed financial advisors. Nothing we share constitutes personalized financial, investment, legal, or tax advice." },
      { q: "Are results guaranteed?", a: "No. Trading involves substantial risk and results are never guaranteed. Past performance is not indicative of future results. Testimonials reflect individual experiences and are not typical." },
    ],
  },
  {
    category: "Programs and Classes",
    questions: [
      { q: "Do I need trading experience to join a class?", a: "Not at all. First Drip is designed specifically for complete beginners. If you have some experience but need realignment, Weekend Warrior or a Coaching Call may be a better fit. We have options for every level." },
      { q: "Are classes live or pre-recorded?", a: "All of our classes are live sessions — either in-person in Midtown Atlanta or via Zoom. Some community membership sessions are recorded and added to the replay library for members who cannot attend live." },
      { q: "How do I book a class?", a: "Visit our Programs page and click the Book This Class button on any program. You will be taken directly to our Acuity scheduling page where you can select your date and complete your booking." },
      { q: "Are all sales final?", a: "Yes. All purchases are final. No refunds, credits, or rescheduling will be provided for any reason. If a class is canceled by our team, you will be rescheduled at no additional charge. Please review our full Terms and Conditions before purchasing." },
      { q: "Can I share my class access with someone else?", a: "No. Each booking is for one individual participant only. Class content, recordings, access links, and materials may not be shared, distributed, or reproduced in any form." },
      { q: "What do I need to attend a Zoom class?", a: "You need a reliable internet connection, a functioning device, and the Zoom app installed. It is your responsibility to ensure you have the correct Zoom link and working access before the session begins." },
    ],
  },
  {
    category: "Community Membership",
    questions: [
      { q: "What is the 5% Drippers community?", a: "The 5% Drippers is a private trading community hosted on Mighty Networks. Members get access to daily live trading sessions, a full replay library, weekly market insights, trade education, and a supportive group of traders all learning the 5% DRIP Method together." },
      { q: "I am an existing member. How do I access the community?", a: "If you are already a 5% Drippers member, you can log back in directly through Mighty Networks. Visit our Community page and click the 'Access your community here' link at the bottom of the enrollment box." },
      { q: "Is enrollment currently open?", a: "Yes. Enrollment for the 5% Drippers community is open now at $299 per month. Select any Enroll Now button on the website to get started through Mighty Networks." },
      { q: "How much does the community cost?", a: "Membership is $299 per month. An annual plan is also available. There is no long-term commitment — you can cancel at any time." },
      { q: "How do I access the community after joining?", a: "After signing up you will receive an invitation to join our Mighty Networks community where everything lives — sessions, replays, discussions, and resources." },
      { q: "Is the community membership the same as the classes?", a: "No. The community membership and individual classes are separate. The membership gives you ongoing daily access. The classes are standalone educational programs. Many members participate in both." },
    ],
  },
  {
    category: "Visiting Atlanta",
    questions: [
      { q: "Where are in-person classes held?", a: "All in-person classes are held in Midtown Atlanta, Georgia. The exact address is shared after booking." },
      { q: "Do you have hotel recommendations?", a: "Yes — visit our Atlanta Guide page for a full list of recommended hotels, dining options, and transportation information for visitors." },
      { q: "Is there parking available?", a: "Paid parking garages are available throughout Midtown. We recommend checking with your hotel for valet and overnight parking options before your visit." },
    ],
  },
  {
    category: "Contact and Support",
    questions: [
      { q: "How do I contact the team?", a: "You can reach us via the contact form on our Contact page or by emailing support@arlettathefriendlytrader.com. We typically respond within 1-2 business days." },
      { q: "Where can I follow Arletta on social media?", a: "You can find us on Instagram, TikTok, and YouTube — all @arlettathefriendlytrader. We post free trading education, market insights, and community updates regularly." },
    ],
  },
]

export default function FAQSection() {
  const [openItem, setOpenItem] = useState<string | null>(null)
  const toggle = (key: string) => setOpenItem(openItem === key ? null : key)

  return (
    <section className="section-padding bg-brand-white">
      <div className="max-w-site mx-auto px-6">

        <div className="flex flex-col items-center gap-4 mb-16 text-center">
          <div className="flex items-center gap-3">
            <div className="h-px w-8" style={{ background: "#C9A84C" }} />
            <span className="text-xs font-semibold tracking-widest uppercase text-gold">FAQ</span>
            <div className="h-px w-8" style={{ background: "#C9A84C" }} />
          </div>
          <h1 className="font-display text-4xl lg:text-6xl font-bold text-brand-black">Frequently Asked Questions.</h1>
          <p className="text-base text-brand-brown max-w-xl leading-relaxed">
            Everything you need to know about our programs, community, and how we work. Still have questions? <Link href="/contact" className="text-gold hover:underline">Contact us</Link>.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {FAQ_SECTIONS.map((section) => (
            <div key={section.category}>
              <h2 className="font-display text-2xl font-bold text-brand-black mb-6 pb-3" style={{ borderBottom: "2px solid rgba(201,168,76,0.2)" }}>
                {section.category}
              </h2>
              <div className="flex flex-col gap-3">
                {section.questions.map((faq, index) => {
                  const key = section.category + index
                  return (
                    <div key={key} className="rounded-2xl overflow-hidden bg-brand-white" style={{ border: "1px solid rgba(201,168,76,0.15)" }}>
                      <button onClick={() => toggle(key)} className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-gold-tint transition-colors duration-200">
                        <span className="font-display text-lg font-semibold text-brand-black">{faq.q}</span>
                        <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-200" style={{ background: "rgba(201,168,76,0.15)", transform: openItem === key ? "rotate(45deg)" : "rotate(0deg)" }}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2.5">
                            <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                          </svg>
                        </span>
                      </button>
                      {openItem === key && (
                        <div className="px-6 pb-6">
                          <p className="text-base text-brand-brown leading-relaxed">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl text-center" style={{ background: "#FBF6EC", border: "1px solid rgba(201,168,76,0.15)" }}>
          <h3 className="font-display text-2xl font-bold text-brand-black mb-2">Still have questions?</h3>
          <p className="text-base text-brand-brown mb-6">Our team is happy to help. Reach out and we will get back to you within 1-2 business days.</p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-md text-sm font-semibold text-brand-black hover:opacity-90 transition-all duration-200" style={{ background: "linear-gradient(135deg, #C9A84C 0%, #E8C96A 40%, #C9A84C 100%)" }}>
            Contact Us
          </Link>
        </div>

      </div>
    </section>
  )
}
