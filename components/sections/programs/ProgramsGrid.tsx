import Link from "next/link"

const PROGRAMS = [
  { name: "The Midtown Drip Room", badge: "In-Person", badgeColor: "#1a3d6b", badgeBg: "#e6eef4", description: "Trade alongside disciplined market participants in a quiet, professional Midtown environment during peak market hours. No coaching. No trade calls. Just structure, focus, and energy at the open.", details: "Mon-Fri | 8:45 AM - 11:30 AM EST", highlight: "Weekly passes available" },
  { name: "First Drip", badge: "Beginner", badgeColor: "#1a6b3c", badgeBg: "#e6f4ed", description: "The official starting point for new or inconsistent traders. Learn trading basics, chart reading, candlestick patterns, and the 5% Method framework with a focus on price action, the Opening Range Breakout strategy, mindset, and risk management.", details: "Includes guided live paper trading", highlight: "Perfect for complete beginners" },
  { name: "Tiff's Mini Drip", badge: "Beginner", badgeColor: "#1a6b3c", badgeBg: "#e6f4ed", description: "A focused training designed to help traders ease into live trading using low-cost options contracts while applying the 5% Method. Taught by Coach Tiff, emphasizing disciplined execution, ORB 5 and ORB 15 setups, proper entries and exits, and risk management.", details: "Taught by Coach Tiff", highlight: "Build confidence with live trades" },
  { name: "Swing Drip", badge: "Intermediate", badgeColor: "#7a4f00", badgeBg: "#fef3e2", description: "A focused class for traders looking to expand beyond day trading and build consistency with multi-day or multi-week positions. Learn to identify high-probability swing trade setups, plan entries and exits, and manage risk over time.", details: "Multi-day and multi-week positions", highlight: "Expand beyond day trading" },
  { name: "Inner Drip", badge: "All Levels", badgeColor: "#4a1a6b", badgeBg: "#f3e6f4", description: "A premium mindset alignment session for traders who know the strategy but struggle with consistent execution due to fear, hesitation, or emotional reactivity. Regulate your nervous system and reinforce discipline, patience, and confidence.", details: "Mindset and nervous system regulation", highlight: "For traders who know but struggle to execute" },
  { name: "Drip Reset", badge: "All Levels", badgeColor: "#4a1a6b", badgeBg: "#f3e6f4", description: "A focused refresher for traders who already know the basics but need realignment and clarity. Revisits the 5% Method to reinforce structure, disciplined execution, and proper trade management while addressing mindset challenges.", details: "Refresher and realignment session", highlight: "Regain confidence and consistency" },
  { name: "Futures Drip", badge: "Advanced", badgeColor: "#8B1a1a", badgeBg: "#fde8e8", description: "An advanced futures trading class for traders who understand charting basics and want to trade futures responsibly. Learn contract fundamentals, ORB 5 and ORB 15 execution, stop placement, and risk-first decision-making.", details: "Requires charting knowledge", highlight: "Live educational trade demonstrations" },
  { name: "The Drip Mastery Intensive", badge: "Advanced", badgeColor: "#8B1a1a", badgeBg: "#fde8e8", description: "A high-level, in-person experience for experienced traders ready to sharpen execution and expand into long-term wealth building. Led by Arletta and a team of coaches blending live trading, advanced strategy, portfolio construction, and mindset mastery.", details: "In-person with Arletta and coaches", highlight: "The most comprehensive program we offer" },
  { name: "Kid's Drip", badge: "Kids and Family", badgeColor: "#1a5a6b", badgeBg: "#e6f2f4", description: "A live, interactive Zoom class designed to introduce kids and teens ages 10-17 to money, markets, and mindset in a safe, age-appropriate way. Focuses on discipline, emotional control, and smart decision-making.", details: "Ages 10-17 via Live Zoom", highlight: "No real trading required" },
  { name: "The Family Drip", badge: "Kids and Family", badgeColor: "#1a5a6b", badgeBg: "#e6f2f4", description: "A two-day, in-person financial education experience for families ages 10 and up. Parents and children learn money fundamentals, saving, investing, trading basics, taxes, and legacy planning through interactive discussions.", details: "2-day in-person for ages 10 and up", highlight: "Build generational wealth together" },
  { name: "Tax Drip Essentials", badge: "All Levels", badgeColor: "#4a1a6b", badgeBg: "#f3e6f4", description: "An educational session that helps traders understand how trading activity affects taxes and how to stay organized for year-round compliance. Taught by a professional accountant covering tax fundamentals and record-keeping best practices.", details: "Taught by a professional accountant", highlight: "Clarity without personalized advice" },
]

const cardStyle = { border: "1px solid rgba(201,168,76,0.15)", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }
const dividerStyle = { borderTop: "1px solid rgba(201,168,76,0.12)" }
const dotStyle = { background: "#C9A84C" }
const btnStyle = { background: "linear-gradient(135deg, #C9A84C 0%, #E8C96A 40%, #C9A84C 100%)" }

export default function ProgramsGrid() {
  return (
    <section className="section-padding bg-brand-white">
      <div className="max-w-site mx-auto px-6">
        <div className="flex flex-col items-center gap-4 mb-16 text-center">
          <div className="flex items-center gap-3">
            <div className="h-px w-8" style={{ background: "#C9A84C" }} />
            <span className="text-xs font-semibold tracking-widest uppercase text-gold">All Programs</span>
            <div className="h-px w-8" style={{ background: "#C9A84C" }} />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-black">Every program. Every level.</h2>
          <p className="text-base text-brand-brown max-w-xl leading-relaxed">All programs are built on the 5% Method framework — structure, discipline, and capital protection first.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROGRAMS.map((program) => (
            <div key={program.name} className="flex flex-col gap-4 rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 bg-brand-white" style={cardStyle}>
              <span className="self-start text-xs font-semibold px-3 py-1 rounded-full" style={{ background: program.badgeBg, color: program.badgeColor }}>{program.badge}</span>
              <h3 className="font-display text-xl font-bold text-brand-black leading-tight">{program.name}</h3>
              <p className="text-sm text-brand-brown leading-relaxed flex-1">{program.description}</p>
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
              <a href="https://www.arlettathefriendlytrader.com/book-consultation" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 rounded-md text-sm font-semibold text-brand-black hover:opacity-90 transition-all duration-200 mt-2" style={btnStyle}>Book This Class</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
