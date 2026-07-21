"use client"

import { useState } from "react"

const HONOR_ROLL = [
  { letter: "A", donors: ["Alfred S.", "Aldia Tyus", "Amira Elamin", "Amber Marquet", "Anita Calloway (B12)", "Anika Davidson", "Antoine Flora", "Antoinese Hearing"] },
  { letter: "B", donors: ["Beverly Davis", "Bill Murray"] },
  { letter: "C", donors: ["Chyree Mozee"] },
  { letter: "D", donors: ["Danielle Terry", "Deanna Retie", "Desiree Atkins"] },
  { letter: "E", donors: ["Ebony", "Edward Fowler", "Elizabeth N."] },
  { letter: "F", donors: ["Fletcher Mallard"] },
  { letter: "G", donors: ["Gina Bearden", "Glenys Moffitt"] },
  { letter: "I", donors: ["Ingrid Albritton"] },
  { letter: "J", donors: ["J.L. Carter", "J. Huskey", "Jaquise Stukes", "Jazz Alexander", "Jennifer Camey", "John Meadows", "Juanita Wilson", "Juliet W."] },
  { letter: "K", donors: ["Kasha Graves"] },
  { letter: "L", donors: ["LaShawn B.", "LaWanda Brown", "Lazuras Jackson", "LeCovian Thomas", "Linda DeBose", "Liz Johnson", "Lydia Lubin"] },
  { letter: "M", donors: ["Marie Destiny", "Marty B.", "Marzetta Terry", "Melissa B.", "Michelle Star", "Mohammun Moore", "Ms. Ivory Ginneh", "Myra Williams"] },
  { letter: "N", donors: ["N. Withers"] },
  { letter: "P", donors: ["P. Billionaire", "Phil Phillips", "Pierre Cooper"] },
  { letter: "R", donors: ["Raushanah Muhammad", "Robert Brooks", "Robyn Walker", "Rosemary James"] },
  { letter: "S", donors: ["Sasha Foster", "Shamika Rush", "Shondria Thomas", "Stacy Bellamy", "Stephanie Stevens"] },
  { letter: "T", donors: ["Tammy Morrison", "Taquita Edwards", "Tarsha Gordon", "TaSheen", "Tanny G.", "Teresa D.", "Tiffany Johnson", "Tonya Johnson", "Torino G.", "Tracy Miller"] },
  { letter: "V", donors: ["Velvet"] },
  { letter: "W", donors: ["Wanda Martin"] },
  { letter: "Y", donors: ["Yvonne Byrd"] },
]

const SPECIAL_GIFTS = [
  { name: "Alisa Ross", gift: "100 Purple Roses" },
  { name: "Sandy P.", gift: "Dior Pendant & Executive Pen Set" },
  { name: "Tonya Johnson", gift: "Personalized Pendants" },
]

const SPECIAL_RECOGNITION = [
  { name: "Miss Ruby", role: "Support Team" },
  { name: "Blair", role: "Support Team" },
  { name: "Coach T", role: "Thank you for your continued support and contribution." },
]

const gradientBg = "linear-gradient(135deg, #C9A84C 0%, #E8C96A 40%, #C9A84C 100%)"

export default function FoundersDayDonors() {
  const [activeLetter, setActiveLetter] = useState<string | null>(null)
  const [open, setOpen] = useState(false)
  const letters = HONOR_ROLL.map((s) => s.letter)
  const filtered = activeLetter ? HONOR_ROLL.filter((s) => s.letter === activeLetter) : []

  return (
    <section className="section-padding bg-brand-white">
      <div className="max-w-site mx-auto px-6">

        <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-4 p-6 rounded-2xl mb-6 transition-all duration-200" style={{ background: "#FBF6EC", border: "1px solid rgba(201,168,76,0.2)" }}>
          <div className="flex flex-col items-start gap-1">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#C9A84C" }}>Founders Day 2026</span>
            <span className="font-display text-2xl font-bold text-brand-black">Founders Day Donors</span>
            <span className="text-sm text-brand-brown">66 supporters — over $26,000 in contributions</span>
          </div>
          <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-200" style={{ background: "rgba(201,168,76,0.15)", transform: open ? "rotate(45deg)" : "rotate(0deg)" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2.5">
              <path d="M12 5v14M5 12h14" strokeLinecap="round" />
            </svg>
          </span>
        </button>

        {open && (
          <div className="flex flex-col gap-10">
            <div>
              <p className="text-sm text-brand-brown text-center mb-6">Click a letter to find a name.</p>
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {letters.map((letter) => (
                  <button key={letter} onClick={() => setActiveLetter(activeLetter === letter ? null : letter)} className="w-10 h-10 rounded-full text-sm font-bold transition-all duration-200" style={activeLetter === letter ? { background: gradientBg, color: "#0F0A02" } : { background: "transparent", color: "#6B5C3E", border: "1px solid rgba(201,168,76,0.3)" }}>
                    {letter}
                  </button>
                ))}
              </div>

              {filtered.length > 0 && filtered.map((section) => (
                <div key={section.letter} className="mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-display text-4xl font-bold" style={{ color: "#C9A84C" }}>{section.letter}</span>
                    <div className="flex-1 h-px" style={{ background: "rgba(201,168,76,0.2)" }} />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {section.donors.map((name) => (
                      <div key={name} className="flex items-center justify-center px-5 py-4 rounded-xl" style={{ background: "#FBF6EC", border: "1px solid rgba(201,168,76,0.15)" }}>
                        <span className="text-sm font-semibold text-brand-black">{name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold text-brand-black text-center mb-6">Special Gifts</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {SPECIAL_GIFTS.map((gift) => (
                  <div key={gift.name} className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl" style={{ background: "#0F0A02", border: "1px solid rgba(201,168,76,0.2)" }}>
                    <span className="text-2xl">💜</span>
                    <span className="font-display text-lg font-bold" style={{ color: "#E8C96A" }}>{gift.name}</span>
                    <span className="text-sm" style={{ color: "rgba(249,246,240,0.7)" }}>{gift.gift}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold text-brand-black text-center mb-4">Special Recognition</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {SPECIAL_RECOGNITION.map((person) => (
                  <div key={person.name} className="flex flex-col items-center text-center gap-2 p-6 rounded-2xl" style={{ background: "#FBF6EC", border: "1px solid rgba(201,168,76,0.15)" }}>
                    <span className="font-display text-lg font-bold text-brand-black">{person.name}</span>
                    <span className="text-sm text-brand-brown">{person.role}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center p-8 rounded-2xl" style={{ background: "#0F0A02", border: "1px solid rgba(201,168,76,0.2)" }}>
              <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(249,246,240,0.7)" }}>Thank you for believing in the vision. Thank you for believing in the mission. Thank you for believing in us.</p>
              <p className="font-display text-xl font-bold" style={{ color: "#E8C96A" }}>"One Yes Changed Thousands of Lives." 💜</p>
            </div>
          </div>
        )}

      </div>
    </section>
  )
}
