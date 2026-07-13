"use client"

import { useState } from "react"

const HONOR_ROLL = [
  { letter: "A", donors: [
    { name: "Alfred S.", contribution: "$400" },
    { name: "Aldia Tyus", contribution: "$150" },
    { name: "Amira Elamin", contribution: "$150" },
    { name: "Amber Marquet", contribution: "$150" },
    { name: "Anita Calloway (B12)", contribution: "$1,000" },
    { name: "Anika Davidson", contribution: "$400" },
    { name: "Antoine Flora", contribution: "$400" },
    { name: "Antoinese Hearing", contribution: "$150" },
  ]},
  { letter: "B", donors: [
    { name: "Beverly Davis", contribution: "$400" },
    { name: "Bill Murray", contribution: "$150" },
  ]},
  { letter: "C", donors: [
    { name: "Chyree Mozee", contribution: "$50" },
  ]},
  { letter: "D", donors: [
    { name: "Danielle Terry", contribution: "$100" },
    { name: "Deanna Retie", contribution: "$50" },
    { name: "Desiree Atkins", contribution: "$200" },
  ]},
  { letter: "E", donors: [
    { name: "Ebony", contribution: "$150" },
    { name: "Elizabeth N.", contribution: "$500" },
    { name: "Edward Fowler", contribution: "$500" },
  ]},
  { letter: "F", donors: [
    { name: "Fletcher Mallard", contribution: "$400" },
  ]},
  { letter: "G", donors: [
    { name: "Gina Bearden", contribution: "$250" },
    { name: "Glenys Moffitt", contribution: "$1,000" },
  ]},
  { letter: "I", donors: [
    { name: "Ingrid Albritton", contribution: "$250" },
  ]},
  { letter: "J", donors: [
    { name: "J.L. Carter", contribution: "$50" },
    { name: "J. Huskey", contribution: "$150" },
    { name: "Jaquise Stukes", contribution: "$500" },
    { name: "Jazz Alexander", contribution: "$100" },
    { name: "Jennifer Camey", contribution: "$150" },
    { name: "John Meadows", contribution: "$150" },
    { name: "Juanita Wilson", contribution: "$3,000" },
    { name: "Juliet W.", contribution: "$250" },
  ]},
  { letter: "K", donors: [
    { name: "Kasha Graves", contribution: "$150" },
  ]},
  { letter: "L", donors: [
    { name: "LaShawn B.", contribution: "$150" },
    { name: "Lateaisha Johnson", contribution: "$300" },
    { name: "LaWanda Brown", contribution: "$150" },
    { name: "Lazuras Jackson", contribution: "$200" },
    { name: "LeCovian Thomas", contribution: "$150" },
    { name: "Linda DeBose", contribution: "$1,250" },
    { name: "Liz Johnson", contribution: "$2,000" },
    { name: "Lydia Lubin", contribution: "$150" },
  ]},
  { letter: "M", donors: [
    { name: "Marie Destiny", contribution: "$200" },
    { name: "Marty B.", contribution: "$500" },
    { name: "Marzetta Terry", contribution: "$200" },
    { name: "Melissa B.", contribution: "$500" },
    { name: "Michelle Star", contribution: "$1,000" },
    { name: "Mohammun Moore", contribution: "$150" },
    { name: "Ms. Ivory Ginneh", contribution: "$150" },
    { name: "Myra Williams", contribution: "$1,000" },
  ]},
  { letter: "N", donors: [
    { name: "N. Withers", contribution: "$150" },
  ]},
  { letter: "P", donors: [
    { name: "P. Billionaire", contribution: "$300" },
    { name: "Pierre Cooper", contribution: "$100" },
    { name: "Phil Phillips", contribution: "$100" },
    { name: "Phylis Temea", contribution: "$150" },
  ]},
  { letter: "R", donors: [
    { name: "Raushanah Muhammad", contribution: "$300" },
    { name: "Robert Brooks", contribution: "$300" },
    { name: "Robyn Walker", contribution: "$300" },
    { name: "Rosemary James", contribution: "$150" },
  ]},
  { letter: "S", donors: [
    { name: "Sasha Foster", contribution: "$150" },
    { name: "Shamika Rush", contribution: "$150" },
    { name: "Shante Jenkins", contribution: "$200" },
    { name: "Shondria Thomas", contribution: "$150" },
    { name: "Stacy Bellamy", contribution: "$50" },
    { name: "Stephanie Stevens", contribution: "$300" },
  ]},
  { letter: "T", donors: [
    { name: "Tammy Morrison", contribution: "$250" },
    { name: "Tarsha Gordon", contribution: "$200" },
    { name: "Taquita Edwards", contribution: "$300" },
    { name: "TaSheen", contribution: "$1,000" },
    { name: "Tanny G.", contribution: "$150" },
    { name: "Teresa D.", contribution: "$150" },
    { name: "Tiffany Johnson", contribution: "$150" },
    { name: "Tonya Johnson", contribution: "$500" },
    { name: "Torino G.", contribution: "$100" },
    { name: "Tracy Miller", contribution: "$150" },
  ]},
  { letter: "V", donors: [
    { name: "Velvet", contribution: "$300" },
  ]},
  { letter: "W", donors: [
    { name: "Wanda Martin", contribution: "$200" },
  ]},
  { letter: "Y", donors: [
    { name: "Yvonne Byrd", contribution: "$100" },
  ]},
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

export default function FoundersDayHonorRoll() {
  const [activeLetter, setActiveLetter] = useState<string | null>(null)
  const letters = HONOR_ROLL.map((s) => s.letter)
  const filtered = activeLetter ? HONOR_ROLL.filter((s) => s.letter === activeLetter) : []

  return (
    <section id="honor-roll" className="section-padding bg-brand-white">
      <div className="max-w-site mx-auto px-6">

        <div className="flex flex-col items-center gap-6 text-center mb-16 max-w-3xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="h-px w-8" style={{ background: "#C9A84C" }} />
            <span className="text-xs font-semibold tracking-widest uppercase text-gold">Founders Day 2026</span>
            <div className="h-px w-8" style={{ background: "#C9A84C" }} />
          </div>
          <h2 className="font-display text-4xl lg:text-6xl font-bold text-brand-black">A Message for Our Donors</h2>
          <p className="text-base text-brand-brown leading-relaxed italic">With Deep Gratitude</p>

          <div className="p-8 rounded-2xl text-left" style={{ background: "#FBF6EC", border: "1px solid rgba(201,168,76,0.2)" }}>
            <p className="text-base text-brand-brown leading-relaxed mb-4">One year ago, I answered God's call to teach people how to trade and build wealth through discipline, wisdom, and faith. I had no idea that one "yes" would become a movement that would impact thousands of lives.</p>
            <p className="text-base text-brand-brown leading-relaxed mb-4">Founders Day was not simply a celebration of a business milestone — it was a celebration of every life changed, every breakthrough experienced, every fear overcome, and every dream that began to feel possible.</p>
            <p className="text-base text-brand-brown leading-relaxed mb-4">To every person who gave a financial gift, sent flowers, presented a thoughtful gift, served behind the scenes, prayed, encouraged me, or simply showed up to celebrate this moment — thank you. Your generosity was not just a gift to me. It was an investment in a mission committed to changing lives for generations to come.</p>
            <p className="text-base text-brand-brown leading-relaxed mb-4">I am deeply honored, incredibly humbled, and forever grateful to each of you. May God return your generosity to you, pressed down, shaken together, and running over.</p>
            <p className="text-sm font-semibold text-brand-black mt-4">With love and sincere appreciation,</p>
            <p className="text-sm text-brand-brown">Coach Arletta Harris</p>
            <p className="text-sm text-brand-brown">Founder, Arletta The Friendly Trader</p>
            <p className="text-sm italic mt-2" style={{ color: "#C9A84C" }}>"One Yes Changed Thousands of Lives." 💜</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mt-4">
            <div className="flex flex-col items-center gap-2 p-5 rounded-2xl" style={{ background: "#0F0A02", border: "1px solid rgba(201,168,76,0.2)" }}>
              <span className="font-display text-3xl font-bold" style={{ color: "#E8C96A" }}>66</span>
              <span className="text-xs tracking-widest uppercase" style={{ color: "rgba(201,168,76,0.6)" }}>Supporters Honored</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-5 rounded-2xl" style={{ background: "#0F0A02", border: "1px solid rgba(201,168,76,0.2)" }}>
              <span className="font-display text-3xl font-bold" style={{ color: "#E8C96A" }}>$26,000+</span>
              <span className="text-xs tracking-widest uppercase" style={{ color: "rgba(201,168,76,0.6)" }}>In Contributions</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-5 rounded-2xl" style={{ background: "#0F0A02", border: "1px solid rgba(201,168,76,0.2)" }}>
              <span className="font-display text-3xl font-bold" style={{ color: "#E8C96A" }}>💜</span>
              <span className="text-xs tracking-widest uppercase" style={{ color: "rgba(201,168,76,0.6)" }}>Prayers & Kind Acts</span>
            </div>
          </div>
          <p className="text-xs text-brand-brown opacity-50">As of July 19, 2026.</p>
        </div>

        <div className="mb-16">
          <h3 className="font-display text-3xl font-bold text-brand-black text-center mb-2">Founder's Day Donors</h3>
          <p className="text-sm text-brand-brown opacity-60 text-center mb-8">Click a letter to find your name.</p>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {letters.map((letter) => (
              <button key={letter} onClick={() => setActiveLetter(activeLetter === letter ? null : letter)} className="w-10 h-10 rounded-full text-sm font-bold transition-all duration-200" style={activeLetter === letter ? { background: gradientBg, color: "#0F0A02" } : { background: "transparent", color: "#6B5C3E", border: "1px solid rgba(201,168,76,0.3)" }}>
                {letter}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-8">
            {filtered.map((section) => (
              <div key={section.letter}>
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-display text-4xl font-bold" style={{ color: "#C9A84C" }}>{section.letter}</span>
                  <div className="flex-1 h-px" style={{ background: "rgba(201,168,76,0.2)" }} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {section.donors.map((donor) => (
                    <div key={donor.name} className="flex items-center justify-between px-5 py-4 rounded-xl" style={{ background: "#FBF6EC", border: "1px solid rgba(201,168,76,0.15)" }}>
                      <span className="text-sm font-semibold text-brand-black">{donor.name}</span>
                      <span className="text-sm font-bold" style={{ color: "#C9A84C" }}>{donor.contribution}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="font-display text-3xl font-bold text-brand-black text-center mb-8">Expressions of Kindness</h3>
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

        <div className="mb-16">
          <h3 className="font-display text-3xl font-bold text-brand-black text-center mb-4">Special Recognition</h3>
          <p className="text-base text-brand-brown text-center max-w-2xl mx-auto mb-8">These individuals gave something that cannot be measured in dollars. Their service, dedication, encouragement, and willingness to help made Founders Day possible.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {SPECIAL_RECOGNITION.map((person) => (
              <div key={person.name} className="flex flex-col items-center text-center gap-2 p-6 rounded-2xl" style={{ background: "#FBF6EC", border: "1px solid rgba(201,168,76,0.15)" }}>
                <span className="font-display text-lg font-bold text-brand-black">{person.name}</span>
                <span className="text-sm text-brand-brown">{person.role}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center max-w-2xl mx-auto p-10 rounded-2xl" style={{ background: "#0F0A02", border: "1px solid rgba(201,168,76,0.2)" }}>
          <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(249,246,240,0.7)" }}>Every contribution, every prayer, every encouraging word, every gift, and every act of kindness has become part of the story God is writing through this community.</p>
          <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(249,246,240,0.7)" }}>Thank you for believing in the vision. Thank you for believing in the mission. Thank you for believing in us. May God continue to bless you abundantly.</p>
          <p className="font-display text-xl font-bold mt-6" style={{ color: "#E8C96A" }}>"One Yes Changed Thousands of Lives." 💜</p>
        </div>

      </div>
    </section>
  )
}
