import Link from "next/link"

export default function SaleBanner() {
  return (
    <aside aria-label="Current promotion" className="w-full py-3 px-4 text-center text-sm font-semibold flex items-center justify-center gap-3 flex-wrap" style={{ background: "linear-gradient(135deg, #C9A84C 0%, #E8C96A 50%, #C9A84C 100%)", color: "#0F0A02" }}>
      <span>End-of-Year Program Sale — Select ATFT courses are now $499</span>
      <span style={{ opacity: 0.6 }}>|</span>
      <span>Ends December 31 · AMAC remains $249</span>
      <span style={{ opacity: 0.6 }}>|</span>
      <Link href="/programs" className="underline font-bold hover:opacity-80 transition-opacity duration-200">
        View Programs
      </Link>
    </aside>
  )
}
