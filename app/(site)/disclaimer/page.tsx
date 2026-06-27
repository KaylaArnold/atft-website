import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Trading Disclaimer",
  description: "Trading Disclaimer for ATFT LLC d/b/a Arletta The Friendly Trader.",
}

export default function DisclaimerPage() {
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
          <h1 className="font-display text-4xl lg:text-6xl font-bold" style={{ color: "#F9F6F0" }}>Trading Disclaimer</h1>
          <p className="text-sm mt-4" style={{ color: "rgba(249,246,240,0.5)" }}>ATFT LLC d/b/a Arletta The Friendly Trader &mdash; Effective Date: June 26, 2026</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex flex-col gap-10 text-brand-brown leading-relaxed">

            <div className="p-6 rounded-2xl" style={{ background: "#fde8e8", border: "1px solid rgba(139,26,26,0.2)" }}>
              <p className="text-sm font-semibold mb-2" style={{ color: "#8B1a1a" }}>Important — Please Read Before Proceeding</p>
              <p className="text-sm" style={{ color: "#8B1a1a" }}>ATFT LLC d/b/a Arletta The Friendly Trader provides educational content designed to help individuals better understand the financial markets. Please read this disclaimer carefully before using our website, purchasing our products, or participating in any of our programs.</p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-display text-2xl font-bold text-brand-black">Educational Purposes Only</h2>
              <p>All information provided by ATFT — including classes, webinars, livestreams, coaching sessions, memberships, videos, social media content, written materials, charts, examples, presentations, community discussions, and downloadable resources — is provided solely for educational and informational purposes. Nothing provided by ATFT should be interpreted as financial, investment, legal, accounting, or tax advice. Participation in our programs does not create an advisor-client, broker-client, fiduciary, or other professional relationship.</p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-display text-2xl font-bold text-brand-black">No Investment Advice</h2>
              <p>ATFT does not provide personalized investment recommendations or individualized trading advice. Any examples of trades, strategies, market commentary, chart analysis, watchlists, or educational demonstrations are intended solely to illustrate trading concepts and should not be interpreted as recommendations to buy, sell, or hold any security or financial instrument. You are solely responsible for evaluating any investment or trading decision before acting.</p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-display text-2xl font-bold text-brand-black">Trading Involves Risk</h2>
              <p>Trading stocks, options, futures, forex, cryptocurrencies, and other financial instruments involves substantial risk and is not suitable for everyone. You acknowledge and understand that you may lose part or all of your invested capital, trading results are never guaranteed, financial markets are unpredictable, even experienced traders incur losses, and you should never trade with money you cannot afford to lose. You assume full responsibility for all trading decisions and the results of those decisions.</p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-display text-2xl font-bold text-brand-black">No Guarantees</h2>
              <p>ATFT makes no guarantees regarding profitability, trading performance, investment returns, income generation, financial success, or achievement of any specific results. Any statements regarding potential earnings, account growth, or trading performance are examples only and should not be interpreted as promises or guarantees.</p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-display text-2xl font-bold text-brand-black">Past Performance</h2>
              <p>Past performance is not indicative or predictive of future results. Historical examples, case studies, testimonials, demonstrations, and previous trading results do not guarantee that similar outcomes will be achieved in the future.</p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-display text-2xl font-bold text-brand-black">Testimonials</h2>
              <p>Testimonials and success stories shared by students or community members reflect individual experiences. These testimonials are not intended to represent or guarantee that current or future participants will achieve the same or similar results. Individual outcomes vary based on many factors, including experience, knowledge, discipline, market conditions, risk management, and personal decision-making.</p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-display text-2xl font-bold text-brand-black">Simulated and Hypothetical Performance</h2>
              <p>From time to time, ATFT may present hypothetical, simulated, paper trading, or educational examples. Hypothetical or simulated performance has inherent limitations and does not represent actual trading. Unlike real trading, simulated results do not account for market liquidity, slippage, order execution delays, emotional decision-making, brokerage commissions and fees, or real-world market conditions. Accordingly, hypothetical performance results should not be viewed as guarantees of future success.</p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-display text-2xl font-bold text-brand-black">Third-Party Platforms</h2>
              <p>ATFT may discuss or demonstrate third-party platforms, software, brokers, websites, charting services, or financial tools. References to any third-party company, product, or service do not constitute an endorsement or recommendation. Participants are responsible for conducting their own research before selecting any broker, trading platform, or financial service.</p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-display text-2xl font-bold text-brand-black">Accuracy of Information</h2>
              <p>While ATFT strives to provide accurate and current educational information, we make no representations or warranties regarding the completeness, accuracy, reliability, or timeliness of any information presented. Financial markets change rapidly, and information may become outdated.</p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-display text-2xl font-bold text-brand-black">Personal Responsibility</h2>
              <p>You are solely responsible for your financial decisions, your trading activity, your investment choices, your tax obligations, and consulting qualified financial, legal, accounting, or tax professionals when appropriate. ATFT is not responsible for any losses or damages arising from your reliance on educational content.</p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-display text-2xl font-bold text-brand-black">Limitation of Liability</h2>
              <p>To the fullest extent permitted by law, ATFT LLC, Arletta The Friendly Trader, its owners, employees, contractors, instructors, affiliates, and representatives shall not be liable for any direct, indirect, incidental, consequential, special, or punitive damages arising from your use of our educational materials, participation in our programs, or reliance on any information provided. Your use of our website and services is entirely at your own risk.</p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-display text-2xl font-bold text-brand-black">Acceptance of This Disclaimer</h2>
              <p>By accessing our website, purchasing our products or services, joining our community, attending classes, or otherwise using any ATFT resources, you acknowledge that you have read, understood, and agree to this Trading Disclaimer.</p>
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
