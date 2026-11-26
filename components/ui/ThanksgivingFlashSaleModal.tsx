'use client'

import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

const SALE_START = Date.parse('2026-11-26T00:00:00-05:00')
const SALE_END = Date.parse('2026-11-28T00:00:00-05:00')
const DISMISSED_KEY = 'atft-thanksgiving-flash-sale-dismissed'

export default function ThanksgivingFlashSaleModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const now = Date.now()
    if (now < SALE_START || now >= SALE_END || sessionStorage.getItem(DISMISSED_KEY) === 'true') return

    const showTimer = window.setTimeout(() => setIsOpen(true), 500)
    const closeTimer = window.setTimeout(() => setIsOpen(false), Math.max(0, SALE_END - now))

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') dismiss()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.clearTimeout(showTimer)
      window.clearTimeout(closeTimer)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  function dismiss() {
    sessionStorage.setItem(DISMISSED_KEY, 'true')
    setIsOpen(false)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 px-4 py-8 backdrop-blur-sm" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && dismiss()}>
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="thanksgiving-sale-title"
        aria-describedby="thanksgiving-sale-description"
        className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-gold/40 bg-brand-black text-brand-white shadow-2xl"
      >
        <div className="absolute inset-x-0 top-0 h-1 bg-gold-gradient" />
        <button
          type="button"
          onClick={dismiss}
          aria-label="Close Thanksgiving flash sale"
          className="absolute right-4 top-4 z-10 rounded-full border border-brand-white/20 bg-brand-white/10 p-2 text-brand-white transition-colors hover:bg-brand-white/20"
        >
          <X size={20} aria-hidden="true" />
        </button>

        <div className="px-6 py-9 text-center sm:px-10 sm:py-11">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-gold">Thanksgiving + Black Friday Flash Sale</p>
          <h2 id="thanksgiving-sale-title" className="font-display text-4xl font-bold leading-tight sm:text-5xl">
            Secure the <span className="text-gold">$99 Monthly Rate</span>
          </h2>
          <p id="thanksgiving-sale-description" className="mx-auto mt-5 max-w-md text-base leading-relaxed text-brand-white/80">
            Join the January–June 2027 5% Daily Drip™ cohort with a $99 enrollment deposit today, then six monthly tuition payments of $99.
          </p>

          <div className="mx-auto my-7 grid max-w-md grid-cols-2 gap-3 text-left">
            <div className="rounded-xl border border-gold/20 bg-brand-white/5 p-4">
              <p className="text-sm text-brand-white/60">Due today</p>
              <p className="mt-1 font-display text-3xl font-bold text-gold">$99</p>
              <p className="mt-1 text-sm text-brand-white/70">Enrollment deposit</p>
            </div>
            <div className="rounded-xl border border-gold/20 bg-brand-white/5 p-4">
              <p className="text-sm text-brand-white/60">January–June</p>
              <p className="mt-1 font-display text-3xl font-bold text-gold">$99/mo</p>
              <p className="mt-1 text-sm text-brand-white/70">Six tuition payments</p>
            </div>
          </div>

          <p className="mb-5 text-base font-semibold text-brand-white">Ends Friday, November 27 at 11:59 PM Eastern</p>
          <a
            href="/api/daily-drip-enrollment?tier=flash&source=thanksgiving-black-friday"
            className="inline-flex min-h-12 w-full max-w-md items-center justify-center rounded-md bg-gold-gradient px-6 py-3 text-base font-bold text-brand-black transition-opacity hover:opacity-90"
          >
            SECURE MY $99 MONTHLY RATE
          </a>
          <p className="mx-auto mt-5 max-w-md text-xs leading-relaxed text-brand-white/50">
            The $99 enrollment deposit is separate from tuition and does not count toward the six monthly payments. Total enrollment deposit plus tuition: $693.
          </p>
        </div>
      </section>
    </div>
  )
}
