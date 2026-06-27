import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and Conditions for ATFT LLC d/b/a Arletta The Friendly Trader.",
}

export default function TermsPage() {
  return (
    <div className="pt-[72px] bg-brand-white">
      <section className="relative bg-brand-dark overflow-hidden" style={{ paddingTop: "6rem", paddingBottom: "4rem" }}>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }} />
        <div className="relative max-w-site mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8" style={{ background: "#C9A84C" }} />
            <span className="text-xs font-semibold tracking-widest uppercase text-gold">Legal</span>
            <div className="h-px w-8" style={{ background: "#C9A84C" }} />
          </div>
          <h1 className="font-display text-4xl lg:text-6xl font-bold" style={{ color: "#F9F6F0" }}>Terms and Conditions</h1>
          <p className="text-sm mt-4" style={{ color: "rgba(249,246,240,0.5)" }}>ATFT LLC d/b/a Arletta The Friendly Trader &mdash; Last Updated: June 26, 2026</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex flex-col gap-10 text-brand-brown leading-relaxed">

            <p>Welcome to <strong>ATFT LLC d/b/a Arletta The Friendly Trader</strong> ("ATFT," "Company," "we," "our," or "us"). These Terms and Conditions ("Terms") govern your use of our website, educational programs, memberships, community platforms, products, services, and events. By purchasing, registering for, accessing, or participating in any of our services, you acknowledge that you have read, understood, and agree to be bound by these Terms.</p>

            <div className="flex flex-col gap-3">
              <h2 className="font-display text-2xl font-bold text-brand-black">1. All Sales Are Final</h2>
              <p>All purchases are final. No refunds, credits, exchanges, or rescheduling will be provided for any reason, including but not limited to missed classes or appointments, scheduling conflicts, failure to attend, personal emergencies, technical issues on the participant's side, travel issues, illness, or dissatisfaction after purchase. Please ensure you are able to attend before completing your purchase.</p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-display text-2xl font-bold text-brand-black">2. Company-Initiated Cancellations</h2>
              <p>If ATFT cancels a scheduled class, consultation, event, or program, participants will be rescheduled at no additional charge. If rescheduling is not reasonably possible, ATFT may, at its sole discretion, provide an alternative solution.</p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-display text-2xl font-bold text-brand-black">3. Booking and Attendance Policy</h2>
              <p>Each registered participant must have their own booking. One individual may purchase multiple seats; however, each seat is valid for one participant only. Accounts, registrations, memberships, and event access may not be shared.</p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-display text-2xl font-bold text-brand-black">4. Access Responsibility</h2>
              <p>It is the participant's responsibility to ensure they have the correct Zoom link, the correct event location, a reliable internet connection, a functioning computer or mobile device, and any required software or applications. Failure to attend because of missing or incorrect login information, internet problems, device issues, user error, software issues, or platform access issues will be considered a no-show and does not qualify for a refund, credit, or rescheduling.</p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-display text-2xl font-bold text-brand-black">5. Membership Access</h2>
              <p>Memberships are intended solely for the registered member. Sharing login credentials, allowing unauthorized access, or distributing member-only content is strictly prohibited. Violation of this policy may result in immediate termination without refund.</p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-display text-2xl font-bold text-brand-black">6. No Sharing of Materials</h2>
              <p>All educational materials, videos, livestreams, recordings (when provided), PDFs, worksheets, strategies, presentations, templates, graphics, downloads, community content, and access links are for the registered participant only. You may not copy, record, download (unless expressly permitted), screenshot for redistribution, share, upload, publish, sell, reproduce, modify, redistribute, or teach commercially using our materials without prior written permission from ATFT.</p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-display text-2xl font-bold text-brand-black">7. Educational Use Only</h2>
              <p>All content provided by ATFT is for educational and informational purposes only. Nothing provided by ATFT constitutes financial advice, investment advice, tax advice, accounting advice, legal advice, or personalized trading recommendations. Participants are solely responsible for their own financial decisions.</p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-display text-2xl font-bold text-brand-black">8. Trading Risk Disclosure</h2>
              <p>Trading stocks, options, futures, forex, cryptocurrency, and other financial instruments involves substantial risk. You acknowledge that you may lose some or all of your invested capital, past performance does not guarantee future results, ATFT makes no guarantees regarding profitability or trading success, and all trading decisions are your sole responsibility.</p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-display text-2xl font-bold text-brand-black">9. Community Conduct</h2>
              <p>We are committed to maintaining a respectful learning environment. Participants agree not to engage in harassment, bullying, threats, hate speech, defamation, abusive language, discrimination, knowingly false statements about the Company, disruptive conduct, solicitation of members without permission, or any behavior that interferes with the learning experience. ATFT reserves the right to determine whether conduct violates this policy.</p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-display text-2xl font-bold text-brand-black">10. Termination of Services</h2>
              <p>ATFT reserves the right to suspend or terminate access to any program, membership, event, or community without refund if a participant violates these Terms, shares paid content, shares login credentials, engages in disruptive behavior, harasses staff or members, violates applicable laws, or misuses Company resources.</p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-display text-2xl font-bold text-brand-black">11. Recording and Media Consent</h2>
              <p>Classes, webinars, livestreams, community events, and educational sessions may be recorded or photographed. By participating, you grant ATFT permission to use your name, voice, image, video, and comments for educational, promotional, marketing, training, or business purposes without additional compensation. If you do not wish to appear in recordings used for promotional purposes, you must notify us in writing before the session begins.</p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-display text-2xl font-bold text-brand-black">12. Intellectual Property</h2>
              <p>All content created by ATFT, including the 5% Method, course materials, branding, logos, videos, graphics, frameworks, presentations, worksheets, website content, and community content is protected by applicable intellectual property laws. No ownership rights are transferred through your purchase.</p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-display text-2xl font-bold text-brand-black">13. Privacy</h2>
              <p>Your use of our services is also governed by our Privacy Policy, which explains how we collect, use, and protect your information.</p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-display text-2xl font-bold text-brand-black">14. Limitation of Liability</h2>
              <p>To the fullest extent permitted by law, ATFT LLC, Arletta The Friendly Trader, its owners, employees, contractors, affiliates, instructors, and representatives shall not be liable for any direct, indirect, incidental, consequential, special, exemplary, or punitive damages arising from participation in any class or program, trading losses, investment decisions, website use, community participation, technical interruptions, third-party platforms, or reliance on educational content. Your sole remedy for dissatisfaction with our services is to discontinue use.</p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-display text-2xl font-bold text-brand-black">15. Indemnification</h2>
              <p>You agree to indemnify, defend, and hold harmless ATFT LLC, Arletta The Friendly Trader, its owners, employees, contractors, instructors, affiliates, and agents from any claims, liabilities, damages, losses, costs, or expenses, including reasonable attorneys' fees, arising from your use of our services, your violation of these Terms, your violation of applicable law, or your misuse of Company materials.</p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-display text-2xl font-bold text-brand-black">16. Third-Party Services</h2>
              <p>Our website and services may utilize third-party providers including Stripe, Mighty Networks, Zoom, Acuity Scheduling, Google, YouTube, Meta (Facebook and Instagram), and TikTok. We are not responsible for the privacy practices, availability, or performance of third-party services.</p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-display text-2xl font-bold text-brand-black">17. Governing Law</h2>
              <p>These Terms shall be governed by and interpreted in accordance with the laws of the State of Georgia, without regard to conflict of law principles. Any legal action relating to these Terms shall be brought exclusively in the appropriate state or federal courts located within Georgia.</p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-display text-2xl font-bold text-brand-black">18. Force Majeure</h2>
              <p>ATFT shall not be responsible for delays or failure to perform resulting from events beyond our reasonable control, including natural disasters, severe weather, fire, flood, power outages, internet outages, government actions, public health emergencies, labor disputes, acts of terrorism, or other unforeseen circumstances.</p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-display text-2xl font-bold text-brand-black">19. Changes to These Terms</h2>
              <p>We reserve the right to update these Terms at any time. Changes become effective immediately upon posting on our website unless otherwise stated. The version in effect at the time of your purchase or registration will govern your participation.</p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-display text-2xl font-bold text-brand-black">Contact Us</h2>
              <p>ATFT LLC d/b/a Arletta The Friendly Trader<br />Email: <a href="mailto:info@arlettathefriendlytrader.com" className="text-gold hover:underline">info@arlettathefriendlytrader.com</a><br />Website: <a href="https://www.arlettathefriendlytrader.com" className="text-gold hover:underline">www.arlettathefriendlytrader.com</a></p>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
