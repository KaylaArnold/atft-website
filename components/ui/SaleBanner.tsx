import Link from "next/link"

export default function SaleBanner() {
  return (
    <div className="w-full py-3 px-4 text-center text-sm font-semibold flex items-center justify-center gap-3 flex-wrap" style={{ background: "linear-gradient(135deg, #C9A84C 0%, #E8C96A 50%, #C9A84C 100%)", color: "#0F0A02" }}>
      <span>Summer Sale — Swing Drip is now just $499 (reg. $1,299)</span>
      <span style={{ opacity: 0.6 }}>|</span>
      <span>Last class at this price: July 23rd</span>
      <span style={{ opacity: 0.6 }}>|</span>
      <a href="https://httpsarlettathefriendlytraderasme.as.me/?appointmentType=88265071" target="_blank" rel="noopener noreferrer" className="underline font-bold hover:opacity-80 transition-opacity duration-200">
        Book Now
      </a>
    </div>
  )
}
