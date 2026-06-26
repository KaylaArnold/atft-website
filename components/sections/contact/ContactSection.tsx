"use client"

import { useState } from "react"
import { SOCIAL_LINKS } from "@/lib/constants"

const gradientBg = "linear-gradient(135deg, #C9A84C 0%, #E8C96A 40%, #C9A84C 100%)"

export default function ContactSection() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="section-padding bg-brand-white">
      <div className="max-w-site mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="h-px w-8" style={{ background: "#C9A84C" }} />
                <span className="text-xs font-semibold tracking-widest uppercase text-gold">Get In Touch</span>
              </div>
              <h1 className="font-display text-4xl lg:text-5xl font-bold text-brand-black leading-tight">
                We would love to hear from you.
              </h1>
              <p className="text-base text-brand-brown leading-relaxed">
                Have a question about a program? Not sure where to start? Reach out and our team will get back to you within 1-2 business days.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#C9A84C" }}>Email</p>
                <a href="mailto:support@arlettathefriendlytrader.com" className="text-base text-brand-brown hover:text-gold transition-colors duration-200">support@arlettathefriendlytrader.com</a>
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#C9A84C" }}>Location</p>
                <p className="text-base text-brand-brown">Midtown Atlanta, Georgia</p>
              </div>

              <div className="flex flex-col gap-3">
                <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#C9A84C" }}>Follow Along</p>
                <div className="flex items-center gap-4">
                  <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-brand-brown hover:text-gold transition-colors duration-200">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    Instagram
                  </a>
                  <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-brand-brown hover:text-gold transition-colors duration-200">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
                    </svg>
                    TikTok
                  </a>
                  <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-brand-brown hover:text-gold transition-colors duration-200">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    YouTube
                  </a>
                </div>
              </div>

              <div className="p-6 rounded-2xl" style={{ background: "#FBF6EC", border: "1px solid rgba(201,168,76,0.15)" }}>
                <p className="text-sm font-semibold text-brand-black mb-1">Looking to book a class?</p>
                <p className="text-sm text-brand-brown mb-4">Head to our Programs page to browse all available classes and book directly.</p>
                <a href="/programs" className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-dark transition-colors duration-200">
                  Browse Programs &rarr;
                </a>
              </div>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center gap-6 text-center p-12 rounded-2xl" style={{ background: "#FBF6EC", border: "1px solid rgba(201,168,76,0.15)" }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.3)" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-brand-black mb-2">Message sent!</h3>
                  <p className="text-base text-brand-brown">Thank you for reaching out. We will get back to you within 1-2 business days.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-8 rounded-2xl" style={{ background: "#FBF6EC", border: "1px solid rgba(201,168,76,0.15)" }}>
                <h2 className="font-display text-2xl font-bold text-brand-black">Send us a message</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-brand-black" htmlFor="name">Full name</label>
                    <input id="name" type="text" required placeholder="Your name" value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} className="px-4 py-3 rounded-lg text-sm text-brand-black bg-brand-white outline-none transition-all duration-200" style={{ border: "1px solid rgba(201,168,76,0.25)" }} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-brand-black" htmlFor="email">Email address</label>
                    <input id="email" type="email" required placeholder="your@email.com" value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} className="px-4 py-3 rounded-lg text-sm text-brand-black bg-brand-white outline-none transition-all duration-200" style={{ border: "1px solid rgba(201,168,76,0.25)" }} />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-brand-black" htmlFor="subject">Subject</label>
                  <select id="subject" required value={formState.subject} onChange={(e) => setFormState({ ...formState, subject: e.target.value })} className="px-4 py-3 rounded-lg text-sm text-brand-black bg-brand-white outline-none transition-all duration-200" style={{ border: "1px solid rgba(201,168,76,0.25)" }}>
                    <option value="">Select a topic</option>
                    <option value="program">Question about a program</option>
                    <option value="community">5% Drippers membership</option>
                    <option value="booking">Booking and scheduling</option>
                    <option value="atlanta">Visiting Atlanta</option>
                    <option value="merchandise">ATFT Merchandise</option>
                    <option value="other">Something else</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-brand-black" htmlFor="message">Message</label>
                  <textarea id="message" required rows={5} placeholder="Tell us how we can help..." value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} className="px-4 py-3 rounded-lg text-sm text-brand-black bg-brand-white outline-none transition-all duration-200 resize-none" style={{ border: "1px solid rgba(201,168,76,0.25)" }} />
                </div>

                <button type="submit" className="inline-flex items-center justify-center px-8 py-4 rounded-md text-sm font-semibold text-brand-black hover:opacity-90 transition-all duration-200" style={{ background: gradientBg }}>
                  Send Message
                </button>

                <p className="text-xs text-center text-brand-brown opacity-60">We typically respond within 1-2 business days.</p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
