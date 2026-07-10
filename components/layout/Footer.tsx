import Link from "next/link"
import Image from "next/image"
import { NAV_LINKS, SOCIAL_LINKS, SITE_CONFIG } from "@/lib/constants"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-dark text-brand-white">
      <div className="max-w-site mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">

        <div className="md:col-span-1 flex flex-col gap-4">
          <Link href="/" aria-label="Arletta Home">
            <Image src="/images/logo.png" alt="Arletta The Friendly Trader" width={64} height={64} className="object-contain" />
          </Link>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(249,246,240,0.6)", maxWidth: "200px" }}>
            Trade with structure. Grow with discipline.
          </p>
          <div className="flex items-center gap-4 mt-2">
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-gold transition-colors" style={{ color: "rgba(249,246,240,0.5)" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-gold transition-colors" style={{ color: "rgba(249,246,240,0.5)" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:text-gold transition-colors" style={{ color: "rgba(249,246,240,0.5)" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/></svg>
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-xs font-semibold tracking-widest uppercase text-gold">Explore</p>
          <ul className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noopener noreferrer" : undefined} className="text-sm hover:text-gold transition-colors" style={{ color: "rgba(249,246,240,0.6)" }}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-xs font-semibold tracking-widest uppercase text-gold">Programs</p>
          <ul className="flex flex-col gap-3">
            {["First Drip", "Swing Drip", "Futures Drip", "Weekend Warrior", "See All Programs"].map((program) => (
              <li key={program}>
                <Link href="/programs" className="text-sm hover:text-gold transition-colors" style={{ color: "rgba(249,246,240,0.6)" }}>
                  {program}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-xs font-semibold tracking-widest uppercase text-gold">Community</p>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(249,246,240,0.6)" }}>
            Join hundreds of traders learning the 5% DRIP Method together — live sessions, replays, and real support.
          </p>
          <a href={SITE_CONFIG.waitlistUrl} target="_blank" rel="noopener noreferrer" className="inline-block text-brand-black text-sm font-semibold px-5 py-3 rounded-md text-center hover:opacity-90 transition-all duration-200 mt-2" style={{ background: "linear-gradient(135deg, #C9A84C 0%, #E8C96A 40%, #C9A84C 100%)" }}>
            Join the Waitlist
          </a>
          <p className="text-xs mt-2" style={{ color: "rgba(249,246,240,0.4)" }}>
            Next enrollment opens in November 2026.
          </p>
        </div>

      </div>

      <div style={{ borderTop: "1px solid rgba(249,246,240,0.1)" }}>
        <div className="max-w-site mx-auto px-6 py-6 flex flex-col gap-4 sm:flex-row items-center justify-between">
          <p className="text-xs" style={{ color: "rgba(249,246,240,0.4)" }}>
            &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="/terms" className="text-xs hover:text-gold transition-colors duration-200" style={{ color: "rgba(249,246,240,0.4)" }}>Terms</a>
            <a href="/privacy" className="text-xs hover:text-gold transition-colors duration-200" style={{ color: "rgba(249,246,240,0.4)" }}>Privacy</a>
            <a href="/disclaimer" className="text-xs hover:text-gold transition-colors duration-200" style={{ color: "rgba(249,246,240,0.4)" }}>Trading Disclaimer</a>
          </div>
          <p className="text-xs text-center sm:text-right max-w-lg" style={{ color: "rgba(249,246,240,0.4)" }}>
            {SITE_CONFIG.disclaimer}
          </p>
        </div>
      </div>

    </footer>
  )
}
