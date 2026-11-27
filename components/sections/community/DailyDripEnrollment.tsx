"use client"

import { useEffect, useState } from "react"
import { SITE_CONFIG } from "@/lib/constants"
import { isAtftCommunityAccessOpen } from "@/lib/daily-drip-schedule"

const cohortDetails = [
  "Structured six-month trading education and mentorship",
  "January–June 2027 cohort begins January 18, 2027",
  "$99 enrollment deposit holds your seat",
  "Six monthly tuition payments of $299 begin in January",
  "Accountability, instruction, community, and milestones",
  "Total deposit plus tuition: $1,893",
]

const communityDetails = [
  "Immediate, self-paced ATFT Community access",
  "Available to join anytime, year-round",
  "No cohort schedule, graduation, or required milestones",
  "Membership continues monthly until canceled",
  "Cancel anytime",
]

export default function DailyDripEnrollment() {
  const [isPostSale, setIsPostSale] = useState<boolean | null>(null)

  useEffect(() => {
    const productionHosts = new Set(["arlettathefriendlytrader.com", "www.arlettathefriendlytrader.com"])
    const showPreview = !productionHosts.has(window.location.hostname) && new URLSearchParams(window.location.search).get("previewPostBlackFriday") === "1"
    const update = () => setIsPostSale(showPreview || isAtftCommunityAccessOpen(Math.floor(Date.now() / 1000)))
    update()
    const interval = window.setInterval(update, 30_000)
    return () => window.clearInterval(interval)
  }, [])

  if (isPostSale === null) {
    return <section id="enrollment" className="min-h-48 scroll-mt-20 bg-brand-dark" aria-label="Loading enrollment options" />
  }

  if (!isPostSale) {
    return (
      <section id="enrollment" className="section-padding scroll-mt-20 bg-brand-dark">
        <div className="mx-auto max-w-site px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Thanksgiving + Black Friday Flash Sale</p>
            <h2 className="mt-4 font-display text-4xl font-bold text-brand-white lg:text-5xl">Secure the $99 Monthly Rate</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-brand-white/70">Join the structured January–June 2027 5% Daily Drip™ cohort with a $99 enrollment deposit today, followed by six monthly tuition payments of $99.</p>
          </div>

          <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-gold/60 bg-gold/10 p-7 lg:p-9">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-xl bg-brand-white/5 p-5">
                <p className="text-sm text-brand-white/60">Due today</p>
                <p className="mt-1 font-display text-4xl font-bold text-gold">$99</p>
                <p className="mt-1 text-sm text-brand-white/70">Enrollment deposit</p>
              </div>
              <div className="rounded-xl bg-brand-white/5 p-5">
                <p className="text-sm text-brand-white/60">January–June 2027</p>
                <p className="mt-1 font-display text-4xl font-bold text-gold">$99/mo</p>
                <p className="mt-1 text-sm text-brand-white/70">Six tuition payments</p>
              </div>
            </div>
            <p className="mt-6 text-center text-base font-semibold text-brand-white">Ends Friday, November 27 at 11:59 PM Eastern</p>
            <a href="/api/daily-drip-enrollment?tier=flash&source=community-enrollment" className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-md bg-gold-gradient px-6 py-3 text-sm font-bold text-brand-black transition-opacity hover:opacity-90">SECURE MY $99 MONTHLY RATE</a>
            <p className="mt-4 text-center text-xs leading-relaxed text-brand-white/45">The $99 enrollment deposit is separate from tuition. Total deposit plus tuition: $693.</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="enrollment" className="section-padding scroll-mt-20 bg-brand-dark">
      <div className="mx-auto max-w-site px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Two Ways to Join ATFT</p>
          <h2 className="mt-4 font-display text-4xl font-bold text-brand-white lg:text-5xl">Choose the Experience That Fits You</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-brand-white/70">Choose the structured six-month 5% Daily Drip™ cohort or flexible, self-paced ATFT Community access. Both are $299 per month, but the cohort begins in January and requires a $99 seat-holding deposit today.</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <article className="flex flex-col rounded-2xl border border-gold/65 bg-gold/10 p-7 lg:p-9">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <span className="text-sm font-semibold uppercase tracking-widest text-gold">Structured Six-Month Cohort</span>
              <span className="rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-black">Enrollment Open</span>
            </div>
            <h3 className="font-display text-3xl font-bold text-brand-white">5% Daily Drip™</h3>
            <p className="mt-4 font-display text-5xl font-bold text-gold">$299<span className="text-xl">/mo</span></p>
            <p className="mt-3 text-sm leading-relaxed text-brand-white/65">$99 deposit today to hold your seat. Six $299 tuition payments begin in January.</p>
            <ul className="my-7 flex flex-1 flex-col gap-3">
              {cohortDetails.map((detail) => <li key={detail} className="flex items-start gap-3 text-sm leading-relaxed text-brand-white/75"><span className="text-gold" aria-hidden="true">✓</span><span>{detail}</span></li>)}
            </ul>
            <a href="/api/daily-drip-enrollment?tier=early&source=community-enrollment" className="inline-flex min-h-12 items-center justify-center rounded-md bg-gold-gradient px-6 py-3 text-center text-sm font-bold text-brand-black transition-opacity hover:opacity-90">HOLD MY SEAT FOR $99</a>
          </article>

          <article className="flex flex-col rounded-2xl border border-brand-white/15 bg-brand-white/5 p-7 lg:p-9">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <span className="text-sm font-semibold uppercase tracking-widest text-gold">Flexible Self-Paced Membership</span>
              <span className="rounded-full bg-brand-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-white/70">Available Year-Round</span>
            </div>
            <h3 className="font-display text-3xl font-bold text-brand-white">ATFT Community</h3>
            <p className="mt-4 font-display text-5xl font-bold text-gold">$299<span className="text-xl">/mo</span></p>
            <p className="mt-3 text-sm leading-relaxed text-brand-white/65">Charged immediately for ongoing community access.</p>
            <ul className="my-7 flex flex-1 flex-col gap-3">
              {communityDetails.map((detail) => <li key={detail} className="flex items-start gap-3 text-sm leading-relaxed text-brand-white/75"><span className="text-gold" aria-hidden="true">✓</span><span>{detail}</span></li>)}
            </ul>
            <a href={SITE_CONFIG.atftCommunityAccessUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-md border border-gold bg-transparent px-6 py-3 text-center text-sm font-bold text-gold transition-colors hover:bg-gold/10">JOIN THE ATFT COMMUNITY</a>
          </article>
        </div>

        <div className="mx-auto mt-8 max-w-4xl rounded-xl border border-gold/20 bg-brand-white/5 p-5 text-center">
          <p className="text-sm leading-relaxed text-brand-white/65"><strong className="text-brand-white">Know the difference:</strong> 5% Daily Drip™ is a structured January–June cohort with a defined six-month journey. ATFT Community is an ongoing, self-paced membership without cohort milestones or graduation requirements.</p>
        </div>
      </div>
    </section>
  )
}
