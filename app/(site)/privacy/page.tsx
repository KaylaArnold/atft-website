import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for ATFT LLC d/b/a Arletta The Friendly Trader.",
}

export default function PrivacyPage() {
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
          <h1 className="font-display text-4xl lg:text-6xl font-bold" style={{ color: "#F9F6F0" }}>Privacy Policy</h1>
          <p className="text-sm mt-4" style={{ color: "rgba(249,246,240,0.5)" }}>ATFT LLC d/b/a Arletta The Friendly Trader &mdash; Effective Date: June 26, 2026</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex flex-col gap-10 text-brand-brown leading-relaxed">

            <p>ATFT LLC d/b/a <strong>Arletta The Friendly Trader</strong> ("ATFT," "we," "our," or "us") values your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, store, and protect your information when you use our website, enroll in our programs, purchase products or services, participate in our community, or otherwise interact with us. By using our website or services, you consent to the practices described in this Privacy Policy.</p>

            <div className="flex flex-col gap-3">
              <h2 className="font-display text-2xl font-bold text-brand-black">1. Information We Collect</h2>
              <p>We may collect personal information including your name, email address, phone number, mailing address, billing address, username, and profile information you voluntarily provide. Payments are securely processed by third-party payment processors — ATFT does not store complete credit or debit card information on our servers. When visiting our website, we may automatically collect your IP address, browser type, device type, operating system, pages viewed, time spent on pages, referral sources, and cookies. You may also provide information when registering for classes, purchasing memberships, joining our community, completing forms or surveys, contacting customer support, attending live sessions, submitting testimonials, or participating in discussions.</p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-display text-2xl font-bold text-brand-black">2. How We Use Your Information</h2>
              <p>We may use your information to process purchases, deliver educational programs, manage memberships, schedule appointments, communicate with you, respond to customer service requests, improve our services, personalize your experience, send newsletters and promotional communications, maintain security, prevent fraud, and comply with legal obligations. You may unsubscribe from marketing emails at any time using the unsubscribe link included in those communications.</p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-display text-2xl font-bold text-brand-black">3. Cookies and Analytics</h2>
              <p>Our website may use cookies and similar technologies to improve website functionality, remember user preferences, analyze website traffic, measure marketing effectiveness, and enhance the user experience. You may disable cookies through your browser settings; however, some website features may not function properly.</p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-display text-2xl font-bold text-brand-black">4. Third-Party Services</h2>
              <p>We may use trusted third-party service providers including Stripe, Mighty Networks, Zoom, Acuity Scheduling, Google Analytics, Google Workspace, YouTube, Meta (Facebook and Instagram), TikTok, and email marketing providers. These providers maintain their own privacy policies governing how they collect and process personal information.</p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-display text-2xl font-bold text-brand-black">5. Community Participation</h2>
              <p>Information you voluntarily post within community spaces, discussion boards, or live chats may be visible to other members. Please avoid posting confidential financial, personal, or sensitive information in public community areas.</p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-display text-2xl font-bold text-brand-black">6. Data Sharing</h2>
              <p>We do not sell your personal information. We may share your information only with trusted service providers necessary to operate our business, to comply with legal obligations, to protect our legal rights, or as part of a business transfer, merger, or acquisition if applicable.</p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-display text-2xl font-bold text-brand-black">7. Data Security</h2>
              <p>We implement reasonable administrative, technical, and organizational safeguards designed to protect your information. However, no method of electronic transmission or internet storage is completely secure, and we cannot guarantee absolute security.</p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-display text-2xl font-bold text-brand-black">8. Data Retention</h2>
              <p>We retain personal information only as long as reasonably necessary to provide our services, maintain business records, meet legal and tax obligations, resolve disputes, and enforce our agreements. When information is no longer needed, it is securely deleted or anonymized where appropriate.</p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-display text-2xl font-bold text-brand-black">9. Children's Privacy</h2>
              <p>Our services are intended for individuals who are at least 18 years old. We do not knowingly collect personal information from children under the age of 13. If we learn that personal information from a child has been collected unintentionally, we will take reasonable steps to delete it.</p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-display text-2xl font-bold text-brand-black">10. Your Privacy Rights</h2>
              <p>Depending on your jurisdiction, you may have the right to request access to your personal information, correct inaccurate information, request deletion of your information, request a copy of your information, object to certain processing activities, withdraw consent where applicable, and opt out of marketing communications. To exercise these rights, please contact us using the information below.</p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-display text-2xl font-bold text-brand-black">11. Third-Party Links</h2>
              <p>Our website may contain links to third-party websites or services. ATFT is not responsible for the privacy practices or content of those third-party websites.</p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-display text-2xl font-bold text-brand-black">12. Changes to This Privacy Policy</h2>
              <p>We may update this Privacy Policy periodically. Any revisions will become effective immediately upon posting the updated Privacy Policy with a revised Effective Date. Your continued use of our website or services constitutes acceptance of any updates.</p>
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
