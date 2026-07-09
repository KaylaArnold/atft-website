'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-brand-white/95 backdrop-blur-sm shadow-sm border-b border-gold/10'
          : 'bg-transparent'
      )}
      style={{ height: 'var(--nav-height)' }}
    >
      <div className="max-w-site mx-auto px-6 h-full flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 flex-shrink-0"
          aria-label="Arletta The Friendly Trader — Home"
        >
          <Image
            src="/images/logo.png"
            alt="Arletta The Friendly Trader"
            width={48}
            height={48}
            className="object-contain"
            priority
          />
          <span className="font-[family-name:var(--font-playfair)] font-bold text-lg text-brand-black hidden sm:block">
            Arletta
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className={cn(
                'text-sm font-medium transition-colors duration-200 relative group',
                pathname === link.href
                  ? 'text-gold'
                  : 'text-brand-brown hover:text-brand-black'
              )}
            >
              {link.label}
              {/* Active underline */}
              <span
                className={cn(
                  'absolute -bottom-1 left-0 h-px bg-gold transition-all duration-200',
                  pathname === link.href
                    ? 'w-full'
                    : 'w-0 group-hover:w-full'
                )}
              />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/community"
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-gold-gradient text-brand-black text-sm font-semibold
              px-5 py-2.5 rounded-md
              hover:opacity-90 active:scale-95
              transition-all duration-200
              whitespace-nowrap
            "
          >
            Join the Waitlist →
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden p-2 transition-colors ${isScrolled ? "text-brand-black hover:text-gold" : "text-gold"}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'lg:hidden absolute top-full left-0 right-0 bg-brand-white border-b border-gold/10',
          'transition-all duration-300 overflow-hidden',
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <nav className="max-w-site mx-auto px-6 py-4 flex flex-col gap-1" aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className={cn(
                'text-sm font-medium py-3 border-b border-gold/10 transition-colors duration-200',
                pathname === link.href
                  ? 'text-gold'
                  : 'text-brand-brown hover:text-brand-black'
              )}
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile CTA */}
          <Link
            href="/community"
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-4 bg-gold-gradient text-brand-black text-sm font-semibold
              px-5 py-3 rounded-md text-center
              hover:opacity-90 transition-all duration-200
            "
          >
            Join the Waitlist →
          </Link>
        </nav>
      </div>
    </header>
  )
}
