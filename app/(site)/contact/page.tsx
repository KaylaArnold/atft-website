import type { Metadata } from "next"
import ContactSection from "@/components/sections/contact/ContactSection"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Arletta The Friendly Trader. Questions about programs, membership, or visiting Atlanta — we are here to help.",
}

export default function ContactPage() {
  return (
    <div className="pt-[72px]">
      <ContactSection />
    </div>
  )
}
