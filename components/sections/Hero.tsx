"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { SITE_CONFIG } from "@/lib/constants"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-brand-dark overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }} />
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #C9A84C 0%, transparent 50%)" }} />

      <div className="relative max-w-site mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-end w-full">

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <div className="h-px w-8" style={{ background: "#C9A84C" }} />
            <span className="text-xs font-semibold tracking-widest uppercase text-gold">The 5% Method</span>
          </div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="font-display text-4xl lg:text-6xl font-bold leading-tight" style={{ color: "#F9F6F0" }}>
            Trade with{" "}
            <span style={{ background: "linear-gradient(135deg, #C9A84C 0%, #E8C96A 50%, #C9A84C 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>structure.</span>
            <br />
            Grow with{" "}
            <span style={{ background: "linear-gradient(135deg, #C9A84C 0%, #E8C96A 50%, #C9A84C 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>discipline.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.35 }} className="text-lg leading-relaxed max-w-lg" style={{ color: "rgba(249,246,240,0.7)" }}>
            Learn the 5% Method — a structured options trading framework focused on discipline, risk management, and consistency. Taught by Arletta The Friendly Trader and her team of coaches.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="flex flex-col sm:flex-row gap-4">
            <Link href="/community" className="inline-flex items-center justify-center px-8 py-4 rounded-md text-sm font-semibold text-brand-black hover:opacity-90 transition-all duration-200" style={{ background: "linear-gradient(135deg, #C9A84C 0%, #E8C96A 40%, #C9A84C 100%)" }}>
              Join the Waitlist
            </Link>
            <Link href="/programs" className="inline-flex items-center justify-center px-8 py-4 rounded-md text-sm font-semibold transition-all duration-200" style={{ color: "#F9F6F0", border: "1px solid rgba(201,168,76,0.4)" }}>
              Explore Programs
            </Link>
          </motion.div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.7 }} className="text-xs" style={{ color: "rgba(249,246,240,0.35)" }}>
            {SITE_CONFIG.disclaimer}
          </motion.p>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.3 }} className="relative flex items-end justify-center">
          <Image
            src="/images/arletta-hero.png"
            alt="Arletta The Friendly Trader"
            width={480}
            height={640}
            className="object-contain object-bottom drop-shadow-2xl"
            priority
          />
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.8 }} className="absolute bottom-4 left-0 rounded-xl px-5 py-4" style={{ background: "#1E1608", border: "1px solid rgba(201,168,76,0.3)" }}>
            <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "rgba(201,168,76,0.6)" }}>Started with</p>
            <p className="font-display text-2xl font-bold" style={{ color: "#E8C96A" }}>$100</p>
            <p className="text-xs mt-1" style={{ color: "rgba(249,246,240,0.5)" }}>Grew to $350,000+</p>
          </motion.div>
        </motion.div>

      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: "linear-gradient(to bottom, transparent, rgba(15,10,2,0.3))" }} />
    </section>
  )
}
