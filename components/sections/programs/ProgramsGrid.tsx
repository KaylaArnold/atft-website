"use client"

type ProgramCard = {
  name: string
  badge?: string
  badgeColor?: string
  badgeBg?: string
  description: string
  details: string
  highlight: string
  price: number | null
  bookingUrl: string
  buttonLabel: string
}

type ProgramSection = {
  title: string
  eyebrow: string
  description: string
  programs: ProgramCard[]
}

const PROGRAM_SECTIONS: ProgramSection[] = [
  {
    title: "Learn the Foundations",
    eyebrow: "Start Here",
    description: "Build the knowledge, structure, and confidence you need to begin trading responsibly.",
    programs: [
      {
        name: "First Drip",
        badge: "Beginner",
        badgeColor: "#1a6b3c",
        badgeBg: "#e6f4ed",
        description: "Your first step into trading. Learn the fundamentals of options trading in a simple, structured environment, including charts, terminology, and risk management.",
        details: "A solid foundation before advanced strategies",
        highlight: "Perfect for brand-new traders",
        price: 499,
        bookingUrl: "https://httpsarlettathefriendlytraderasme.as.me/?appointmentType=88264742",
        buttonLabel: "Book This Class",
      },
    ],
  },
  {
    title: "Members Only",
    eyebrow: "5% Dripper Membership Required",
    description: "In-person, weekly class for members only",
    programs: [
            {
        name: "The DRIP Room",
        badge: "Members Only",
        badgeColor: "#8b6914",
        badgeBg: "#fbf6ec",
        description: "An exclusive session for active 5% Drippers community members. Details and schedule are shared inside the Mighty Networks community. Active membership required to book.",
        details: "Active 5% Drippers membership required",
        highlight: "Members are verified before class",
        price: null,
        bookingUrl: "https://httpsarlettathefriendlytraderasme.as.me/?appointmentType=88266056",
        buttonLabel: "Book This Class",
      },
    ],
  },
  {
    title: "Master Your Strategy",
    eyebrow: "Build Your Edge",
    description: "Strengthen your execution with focused strategies designed for different markets and trading styles.",
    programs: [
      {
        name: "Swing Drip",
        badge: "Intermediate",
        badgeColor: "#7a4f00",
        badgeBg: "#fef3e2",
        description: "Master the art of swing trading. Learn to identify high-probability opportunities, manage risk, and hold positions with confidence using the ATFT Swing Strategy.",
        details: "Designed for multi-day trades",
        highlight: "Ideal when you cannot watch the market all day",
        price: 1499,
        bookingUrl: "https://httpsarlettathefriendlytraderasme.as.me/?appointmentType=88265071",
        buttonLabel: "Book This Class",
      },
      {
        name: "Futures Drip",
        badge: "Advanced",
        badgeColor: "#8B1a1a",
        badgeBg: "#fde8e8",
        description: "Trade the futures market with confidence. Learn Coach Arletta's futures strategy using the J20 System, proper risk management, and structured trade execution.",
        details: "Learn futures from the ground up",
        highlight: "Build consistency and disciplined execution",
        price: 1499,
        bookingUrl: "https://httpsarlettathefriendlytraderasme.as.me/?appointmentType=88265110",
        buttonLabel: "Book This Class",
      },
      {
        name: "AMAC Strategy",
        badge: "Advanced",
        badgeColor: "#8B1a1a",
        badgeBg: "#fde8e8",
        description: "Add another edge to your trading. Combine the power of the MACD with the ATFT J20 System to identify stronger confirmations and higher-probability trade opportunities.",
        details: "Complements—not replaces—your current plan",
        highlight: "Increase confidence and improve trade quality",
        price: 249,
        bookingUrl: "https://httpsarlettathefriendlytraderasme.as.me/?appointmentType=88719089",
        buttonLabel: "Book This Class",
      },
    ],
  },
  {
    title: "Get Personal Coaching",
    eyebrow: "Focused Support",
    description: "Get direct guidance tailored to your mindset, habits, execution, and individual goals.",
    programs: [
      {
        name: "Private Coaching (Coach Trent & Coach Tammy)",
        description: "Personalized guidance when you need it most. Meet privately with an ATFT coach for support with mindset, accountability, trading habits, confidence, and execution.",
        details: "Available with Coach Trent or Coach Tammy",
        highlight: "Mindset, accountability, and execution support",
        price: 150,
        bookingUrl: "https://httpsarlettathefriendlytraderasme.as.me/?appointmentType=88265481",
        buttonLabel: "Book This Session",
      },
      {
        name: "Strategy Reset with Coach Arletta",
        description: "One conversation can change everything. This private session is for traders who feel stuck, overwhelmed, inconsistent, or need clarity. Identify what is holding you back and leave with a personalized action plan.",
        details: "Risk, mindset, discipline, strategy, or business growth",
        highlight: "Application and appointment required",
        price: 1299,
        bookingUrl: "https://forms.gle/Sd7nEo5uAWfVbCPT6",
        buttonLabel: "Apply for This Session",
      },
    ],
  },
  {
    title: "Premium Experiences",
    eyebrow: "Work With Coach Arletta",
    description: "Go deeper with private, high-touch experiences designed for serious traders and leaders.",
    programs: [
      {
        name: "Learn to Trade with Coach Arletta",
        description: "Private trading instruction with the founder of ATFT. Learn the complete ATFT Options Trading System directly from Coach Arletta, including options trading, the J20 Strategy, risk management, and trade execution.",
        details: "Includes 30 days of Dripper Community access",
        highlight: "Application and appointment required",
        price: 2499,
        bookingUrl: "https://forms.gle/Sd7nEo5uAWfVbCPT6",
        buttonLabel: "Apply for This Session",
      },
      {
        name: "VIP Learn to Trade with Coach Arletta",
        description: "The complete private trading experience. This comprehensive program covers options trading, swing trading, the AMAC Strategy, and risk management for traders serious about accelerating their learning.",
        details: "30 days of community access and four coaching sessions",
        highlight: "Application and appointment required",
        price: 4999,
        bookingUrl: "https://forms.gle/Sd7nEo5uAWfVbCPT6",
        buttonLabel: "Apply for This Program",
      },
      {
        name: "The Arletta Experience (Application Required)",
        description: "Beyond trading. Beyond money. Beyond the charts. A signature transformational experience for leaders, entrepreneurs, professionals, and traders ready to align their identity, purpose, leadership, and financial future.",
        details: "Focused on growth, confidence, and generational legacy",
        highlight: "Application and appointment required",
        price: null,
        bookingUrl: "https://forms.gle/Sd7nEo5uAWfVbCPT6",
        buttonLabel: "Apply for This Experience",
      },
    ],
  },
]

const gradientBg = "linear-gradient(135deg, #C9A84C 0%, #E8C96A 40%, #C9A84C 100%)"
const cardStyle = { border: "1px solid rgba(201,168,76,0.15)", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }
const dividerStyle = { borderTop: "1px solid rgba(201,168,76,0.12)" }
const dotStyle = { background: "#C9A84C" }

const getGridClass = (count: number) => {
  if (count === 1) return "grid grid-cols-1 max-w-md mx-auto"
  if (count === 2) return "grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto"
  return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
}

export default function ProgramsGrid() {
  return (
    <section className="bg-brand-white" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
      <div className="max-w-site mx-auto px-6">
        <div className="flex flex-col gap-14">
          {PROGRAM_SECTIONS.map((section) => (
            <div key={section.title}>
              <div className="flex flex-col items-center gap-2 mb-7 text-center">
                <div className="flex items-center gap-3">
                  <div className="h-px w-6" style={{ background: "#C9A84C" }} />
                  <span className="text-xs font-semibold tracking-widest uppercase text-gold">{section.eyebrow}</span>
                  <div className="h-px w-6" style={{ background: "#C9A84C" }} />
                </div>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-brand-black">{section.title}</h2>
                <p className="text-sm text-brand-brown max-w-xl leading-relaxed">{section.description}</p>
              </div>

              <div className={`${getGridClass(section.programs.length)} gap-6 items-stretch`}>
                {section.programs.map((program) => (
                  <div key={program.name} className="flex flex-col gap-4 rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 bg-brand-white" style={cardStyle}>
                    {program.badge && (
                      <span className="self-start text-xs font-semibold px-3 py-1 rounded-full" style={{ background: program.badgeBg, color: program.badgeColor }}>{program.badge}</span>
                    )}
                    <h4 className="font-display text-xl font-bold text-brand-black leading-tight">{program.name}</h4>
                    <p className="text-sm text-brand-brown leading-relaxed flex-1">{program.description}</p>

                    {program.price ? (
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm text-brand-brown">Investment:</span>
                        <span className="text-2xl font-bold font-display" style={{ color: "#C9A84C" }}>{program.price.toLocaleString()}</span>
                      </div>
                    ) : (
                      <div className="text-sm font-semibold" style={{ color: "#C9A84C" }}>Application Required</div>
                    )}

                    <div className="flex flex-col gap-2 pt-3" style={dividerStyle}>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={dotStyle} />
                        <span className="text-xs text-brand-brown">{program.details}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={dotStyle} />
                        <span className="text-xs font-medium" style={{ color: "#8B6914" }}>{program.highlight}</span>
                      </div>
                    </div>

                    <a href={program.bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 rounded-md text-sm font-semibold text-brand-black hover:opacity-90 transition-all duration-200 mt-2" style={{ background: gradientBg }}>{program.buttonLabel}</a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs mt-12" style={{ color: "rgba(107,92,62,0.5)" }}>We are not licensed financial advisors. All sessions are educational in nature. Trading involves risk and results are never guaranteed.</p>
      </div>
    </section>
  )
}