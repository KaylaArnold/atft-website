import type { Metadata } from "next"
import FAQSection from "@/components/sections/faq/FAQSection"

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Arletta The Friendly Trader — programs, community membership, booking, and more.",
}

export default function FAQPage() {
  return (
    <div className="pt-[72px]">
      <FAQSection />
    </div>
  )
}
