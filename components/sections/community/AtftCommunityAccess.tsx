'use client'

import { useEffect, useState } from 'react'
import { SITE_CONFIG } from '@/lib/constants'
import { isAtftCommunityAccessOpen } from '@/lib/daily-drip-schedule'

const BENEFITS = [
  'Immediate access to the ATFT Community',
  'Self-paced access with no cohort schedule',
  'Join at any time throughout the year',
  'No six-month cohort commitment',
  'No graduation requirement or program milestones',
  'Ongoing access while your membership remains active',
]

export default function AtftCommunityAccess() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const productionHosts = new Set(['arlettathefriendlytrader.com', 'www.arlettathefriendlytrader.com'])
    const showPreview = !productionHosts.has(window.location.hostname) && new URLSearchParams(window.location.search).get('previewCommunityAccess') === '1'
    const updateAvailability = () => setIsOpen(showPreview || isAtftCommunityAccessOpen(Math.floor(Date.now() / 1000)))
    updateAvailability()
    const interval = window.setInterval(updateAvailability, 60_000)
    return () => window.clearInterval(interval)
  }, [])

  if (!isOpen) return null

  return (
    <section id="community-access" className="section-padding scroll-mt-20 bg-brand-cream">
      <div className="mx-auto max-w-site px-6">
        <div className="mx-auto grid max-w-5xl overflow-hidden rounded-2xl border border-gold/30 bg-brand-white shadow-sm lg:grid-cols-[1.25fr_0.75fr]">
          <div className="p-8 lg:p-12">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gold">Available Anytime · Year-Round</p>
            <h2 className="font-display text-4xl font-bold leading-tight text-brand-black lg:text-5xl">ATFT Community Access</h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-brown">
              Want to be part of the ATFT Community without committing to a six-month program? Join anytime for immediate, self-paced community access—without cohort deadlines, graduation requirements, or program milestones.
            </p>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {BENEFITS.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-sm leading-relaxed text-brand-brown">
                  <span className="mt-0.5 text-gold" aria-hidden="true">✓</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-center bg-brand-dark p-8 text-center lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">Community Membership</p>
            <p className="mt-4 font-display text-5xl font-bold text-gold">$299<span className="text-xl">/mo</span></p>
            <p className="mt-3 text-sm leading-relaxed text-brand-white/70">Self-paced access begins immediately. Membership renews monthly until canceled.</p>
            <a
              href={SITE_CONFIG.atftCommunityAccessUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex min-h-12 items-center justify-center rounded-md bg-gold-gradient px-6 py-3 text-sm font-bold text-brand-black transition-opacity hover:opacity-90"
            >
              JOIN THE ATFT COMMUNITY
            </a>
            <p className="mt-4 text-xs leading-relaxed text-brand-white/45">Community access only. This is not enrollment in a six-month 5% Daily Drip™ cohort.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
