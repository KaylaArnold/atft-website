import { Check } from "lucide-react"
import { SITE_CONFIG } from "@/lib/constants"

type PathwayLevel = {
  level: string
  title: string
  action: string
  price?: string
  summary: string
  qualification?: string
  duration?: string
  access?: string
  journey?: string
  principle?: string
  topics: string[]
  buttonLabel: string
  buttonUrl: string
}

const APPLICATION_URL = "https://forms.gle/Sd7nEo5uAWfVbCPT6"

const PATHWAY_LEVELS: PathwayLevel[] = [
  {
    level: "Level 1",
    title: "The Academy",
    action: "Learn It",
    summary: "This is where Mini Drippers are built. Learn the foundation of the ATFT trading system and how to responsibly grow from your first $100.",
    topics: [
      "Trading discipline and risk management",
      "Chart reading and structured execution",
      "Building confidence and responsible account growth",
    ],
    buttonLabel: "Join the Academy Waitlist",
    buttonUrl: SITE_CONFIG.waitlistUrl,
  },
  {
    level: "Level 2",
    title: "Dripper Maintenance",
    action: "Maintain It",
    price: "$99/month",
    summary: "Eligible Academy graduates can continue with the structure and accountability needed to protect their discipline, sharpen execution, and keep growing.",
    qualification: "Eligible graduates of approved ATFT Academy programs",
    topics: [
      "Ongoing structure and accountability",
      "Stronger discipline and execution",
      "Continued, responsible account growth",
    ],
    buttonLabel: "Apply for Consideration",
    buttonUrl: "https://forms.gle/NuWg3Dnyb2ZC8fQn9",
  },
  {
    level: "Level 3",
    title: "Advanced Wealth & Scaling",
    action: "Grow It",
    price: "$5,000",
    summary: "Move from being a good trader to responsibly managing a serious trading account. This level is about learning how to trade size without allowing discipline or risk controls to break down.",
    qualification: "Approximately $50,000+ trading account",
    duration: "90 days · Once per week",
    access: "Coach Arletta returns as your primary coach",
    journey: "$50K → $100K → $200K → $400K",
    principle: "We’re not teaching you how to trade anymore. We’re teaching you how to trade size.",
    topics: [
      "Contract scaling and advanced position sizing",
      "Stop-loss execution and Robinhood risk controls",
      "Futures integration and swing-trading expansion",
      "Capital allocation and business structure",
      "The psychology of trading increased size",
    ],
    buttonLabel: "Apply for This Level",
    buttonUrl: APPLICATION_URL,
  },
  {
    level: "Level 4",
    title: "Executive Wealth",
    action: "Preserve It",
    price: "$30,000",
    summary: "For traders who have built serious capital and are ready to learn how to protect, structure, preserve, and multiply what they have created.",
    qualification: "Established by application and financial milestone review",
    duration: "6 months",
    access: "High-level direct access to Coach Arletta",
    principle: "You’ve made serious capital. Now learn what wealth builders do with it.",
    topics: [
      "Covered calls and advanced options-income strategies",
      "Portfolio building and income-producing assets",
      "Capital preservation and tax-strategy education",
      "Business, trust, and asset-structure education",
      "Legacy, estate, beneficiary, and succession planning",
    ],
    buttonLabel: "Apply for This Level",
    buttonUrl: APPLICATION_URL,
  },
]

const gradientBg = "linear-gradient(135deg, #C9A84C 0%, #E8C96A 40%, #C9A84C 100%)"

export default function DripperPathway() {
  return (
    <section className="bg-brand-white py-16 lg:py-20">
      <div className="max-w-site mx-auto px-6">
        <div className="flex flex-col items-center text-center gap-3 max-w-3xl mx-auto mb-10">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-gold" />
            <span className="text-xs font-semibold tracking-widest uppercase text-gold">Find Your Level</span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <p className="text-sm lg:text-base leading-relaxed text-brand-brown">
            Move from building your trading foundation to managing, protecting, and preserving significant wealth. Each level is designed for a different stage of your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {PATHWAY_LEVELS.map((item) => (
            <article key={item.level} className="flex flex-col rounded-2xl p-6 lg:p-8 bg-brand-white hover:-translate-y-1 transition-transform duration-300" style={{ border: "1px solid rgba(201,168,76,0.2)", boxShadow: "0 4px 20px rgba(28,22,10,0.06)" }}>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                <span className="text-xs font-semibold tracking-widest uppercase text-gold">{item.level}</span>
                <span className="rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider" style={{ color: "#1C160A", background: gradientBg }}>{item.action}</span>
              </div>

              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
                <h3 className="font-display text-2xl lg:text-3xl font-bold text-brand-black">{item.title}</h3>
                {item.price && <span className="font-display text-xl font-bold text-gold">{item.price}</span>}
              </div>

              <p className="text-sm leading-relaxed mb-5 text-brand-brown">{item.summary}</p>

              {(item.qualification || item.duration || item.access || item.journey) && (
                <div className="grid gap-2 rounded-xl p-4 mb-5" style={{ background: "rgba(201,168,76,0.08)" }}>
                  {item.qualification && <p className="text-xs text-brand-brown"><strong className="text-brand-black">Qualification:</strong> {item.qualification}</p>}
                  {item.duration && <p className="text-xs text-brand-brown"><strong className="text-brand-black">Duration:</strong> {item.duration}</p>}
                  {item.access && <p className="text-xs text-brand-brown"><strong className="text-brand-black">Access:</strong> {item.access}</p>}
                  {item.journey && <p className="text-xs text-brand-brown"><strong className="text-brand-black">Target journey:</strong> {item.journey}</p>}
                </div>
              )}

              <ul className="grid gap-3 mb-6 flex-1">
                {item.topics.map((topic) => (
                  <li key={topic} className="flex items-start gap-3 text-sm text-brand-brown">
                    <Check aria-hidden="true" className="w-4 h-4 mt-0.5 flex-shrink-0 text-gold" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>

              {item.principle && (
                <p className="font-display text-lg italic leading-relaxed text-brand-black border-l-2 border-gold pl-4 mb-6">“{item.principle}”</p>
              )}

              <a href={item.buttonUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 rounded-md text-sm font-semibold text-brand-black hover:opacity-90 transition-opacity" style={{ background: gradientBg }}>
                {item.buttonLabel}
              </a>
            </article>
          ))}
        </div>

        <p className="text-center text-xs leading-relaxed mt-8 max-w-4xl mx-auto" style={{ color: "rgba(107,92,62,0.55)" }}>
          ATFT provides financial education, not individualized financial, legal, tax, or investment advice. Legal, tax, trust, and estate matters should be addressed by appropriately licensed professionals.
        </p>
      </div>
    </section>
  )
}
