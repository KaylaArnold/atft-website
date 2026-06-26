content = """\
import { SITE_CONFIG } from "@/lib/constants"

const gradientBg = "linear-gradient(135deg, #C9A84C 0%, #E8C96A 40%, #C9A84C 100%)"

const CATEGORIES = [
  { name: "Apparel", icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", desc: "T-shirts, hoodies, and more" },
  { name: "Headwear", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z", desc: "Hats and caps" },
  { name: "Accessories", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", desc: "Bags, lanyards, and more" },
  { name: "Drinkware", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2", desc: "Mugs, tumblers, and bottles" },
  { name: "Desk Essentials", icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", desc: "Mouse pads and desk gear" },
  { name: "Trading Journals", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253", desc: "Stay organized and disciplined" },
]

const FEATURED_PRODUCTS = [
  { name: "ATFT Classic Tee", category: "Apparel", placeholder: "T-Shirt" },
  { name: "5% Drippers Hoodie", category: "Apparel", placeholder: "Hoodie" },
  { name: "ATFT Snapback", category: "Headwear", placeholder: "Hat" },
  { name: "Trader Mug", category: "Drinkware", placeholder: "Mug" },
  { name: "ATFT Mouse Pad", category: "Desk Essentials", placeholder: "Mouse Pad" },
  { name: "Trading Journal", category: "Trading Journals", placeholder: "Journal" },
]

export default function ShopPreview() {
  return (
    <div>
      <section className="relative bg-brand-dark overflow-hidden" style={{ paddingTop: "8rem", paddingBottom: "6rem" }}>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }} />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 30% 50%, #C9A84C 0%, transparent 60%)" }} />

        <div className="relative max-w-site mx-auto px-6">
          <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
            <div className="flex items-center gap-3">
              <div className="h-px w-8" style={{ background: "#C9A84C" }} />
              <span className="text-xs font-semibold tracking-widest uppercase text-gold">ATFT Merchandise</span>
              <div className="h-px w-8" style={{ background: "#C9A84C" }} />
            </div>
            <h1 className="font-display text-5xl lg:text-7xl font-bold leading-tight" style={{ color: "#F9F6F0" }}>
              Wear the drip.
            </h1>
            <p className="text-lg leading-relaxed max-w-2xl" style={{ color: "rgba(249,246,240,0.7)" }}>
              Rep the 5% Method with official ATFT merchandise. Apparel, accessories, drinkware, desk essentials, and more — all available in our Shopify store.
            </p>
            <a href={SITE_CONFIG.shopUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 rounded-md text-sm font-semibold text-brand-black hover:opacity-90 transition-all duration-200" style={{ background: gradientBg }}>
              Shop All Products
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-white">
        <div className="max-w-site mx-auto px-6">
          <div className="flex flex-col items-center gap-4 mb-16 text-center">
            <div className="flex items-center gap-3">
              <div className="h-px w-8" style={{ background: "#C9A84C" }} />
              <span className="text-xs font-semibold tracking-widest uppercase text-gold">Categories</span>
              <div className="h-px w-8" style={{ background: "#C9A84C" }} />
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-black">Shop by category.</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
            {CATEGORIES.map((cat) => (
              <a key={cat.name} href={SITE_CONFIG.shopUrl} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 p-5 rounded-2xl text-center hover:-translate-y-1 transition-all duration-300 group" style={{ background: "#FBF6EC", border: "1px solid rgba(201,168,76,0.15)" }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200" style={{ background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.2)" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d={cat.icon} />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-black">{cat.name}</p>
                  <p className="text-xs text-brand-brown mt-0.5">{cat.desc}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="flex flex-col items-center gap-4 mb-12 text-center">
            <div className="flex items-center gap-3">
              <div className="h-px w-8" style={{ background: "#C9A84C" }} />
              <span className="text-xs font-semibold tracking-widest uppercase text-gold">Featured Products</span>
              <div className="h-px w-8" style={{ background: "#C9A84C" }} />
            </div>
            <h2 className="font-display text-4xl font-bold text-brand-black">Fan favorites.</h2>
            <p className="text-base text-brand-brown max-w-xl leading-relaxed">Product photos coming soon. Visit our Shopify store to see the full collection.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {FEATURED_PRODUCTS.map((product) => (
              <a key={product.name} href={SITE_CONFIG.shopUrl} target="_blank" rel="noopener noreferrer" className="flex flex-col gap-3 rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300 group" style={{ border: "1px solid rgba(201,168,76,0.15)" }}>
                <div className="relative w-full flex items-center justify-center" style={{ aspectRatio: "1/1", background: "linear-gradient(135deg, #F0EBE0 0%, #E8E0D0 100%)" }}>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.2)" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(201,168,76,0.5)" strokeWidth="1.5">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <path d="M3 9h18M9 21V9" />
                      </svg>
                    </div>
                    <p className="text-xs" style={{ color: "rgba(107,92,62,0.4)" }}>{product.placeholder}</p>
                  </div>
                </div>
                <div className="p-3">
                  <p className="text-xs text-brand-brown mb-1">{product.category}</p>
                  <p className="text-sm font-semibold text-brand-black leading-tight">{product.name}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center">
            <a href={SITE_CONFIG.shopUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 rounded-md text-sm font-semibold text-brand-black hover:opacity-90 transition-all duration-200" style={{ background: gradientBg }}>
              View Full Collection
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }} />
        <div className="relative max-w-site mx-auto px-6 text-center flex flex-col items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="h-px w-8" style={{ background: "#C9A84C" }} />
            <span className="text-xs font-semibold tracking-widest uppercase text-gold">Powered by Shopify</span>
            <div className="h-px w-8" style={{ background: "#C9A84C" }} />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold leading-tight" style={{ color: "#F9F6F0" }}>
            Ready to rep the drip?
          </h2>
          <p className="text-lg leading-relaxed max-w-xl" style={{ color: "rgba(249,246,240,0.7)" }}>
            All orders are processed securely through our Shopify store. Fast shipping, easy returns, and quality you can feel.
          </p>
          <a href={SITE_CONFIG.shopUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 rounded-md text-sm font-semibold text-brand-black hover:opacity-90 transition-all duration-200" style={{ background: gradientBg }}>
            Shop Now
          </a>
        </div>
      </section>
    </div>
  )
}
"""

with open("components/sections/shop/ShopPreview.tsx", "w", encoding="utf-8") as f:
    f.write(content)

print("Done")