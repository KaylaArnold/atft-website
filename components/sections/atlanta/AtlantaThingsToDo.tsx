const ATTRACTIONS = [
  { name: "Piedmont Park", desc: "Atlanta's most beloved green space — perfect for a morning walk or relaxing afternoon before or after class.", type: "Park" },
  { name: "Atlanta Botanical Garden", desc: "World-class gardens right next to Piedmont Park. Beautiful any time of year.", type: "Attraction" },
  { name: "High Museum of Art", desc: "One of the Southeast's premier art museums, located right in Midtown.", type: "Museum" },
  { name: "Fox Theatre", desc: "A historic and stunning venue for shows, concerts, and performances.", type: "Entertainment" },
  { name: "Colony Square", desc: "A vibrant mixed-use destination with dining, shopping, and entertainment in the heart of Midtown.", type: "Shopping" },
  { name: "Beltline Eastside Trail", desc: "A scenic trail connecting Atlanta neighborhoods — great for walking, running, or cycling.", type: "Outdoors" },
]

const typeColors: Record<string, { bg: string; color: string }> = {
  Park:          { bg: "#e6f4ed", color: "#1a6b3c" },
  Attraction:    { bg: "#fef3e2", color: "#7a4f00" },
  Museum:        { bg: "#f3e6f4", color: "#4a1a6b" },
  Entertainment: { bg: "#fde8e8", color: "#8B1a1a" },
  Shopping:      { bg: "#e6eef4", color: "#1a3d6b" },
  Outdoors:      { bg: "#e6f4ed", color: "#1a6b3c" },
}

export default function AtlantaThingsToDo() {
  return (
    <section className="section-padding bg-brand-white">
      <div className="max-w-site mx-auto px-6">
        <div className="flex flex-col gap-4 mb-12">
          <div className="flex items-center gap-3">
            <div className="h-px w-8" style={{ background: "#C9A84C" }} />
            <span className="text-xs font-semibold tracking-widest uppercase text-gold">Explore Atlanta</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-black">Things to do while you are here.</h2>
          <p className="text-base text-brand-brown max-w-xl leading-relaxed">Staying for the weekend? Midtown Atlanta has plenty to keep you busy before and after your session.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ATTRACTIONS.map((attraction) => (
            <div key={attraction.name} className="flex flex-col gap-3 p-6 rounded-2xl hover:-translate-y-1 transition-all duration-300" style={{ background: "#FBF6EC", border: "1px solid rgba(201,168,76,0.15)" }}>
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-display text-lg font-bold text-brand-black">{attraction.name}</h3>
                <span className="flex-shrink-0 text-xs font-semibold px-3 py-1 rounded-full" style={{ background: typeColors[attraction.type].bg, color: typeColors[attraction.type].color }}>{attraction.type}</span>
              </div>
              <p className="text-sm text-brand-brown leading-relaxed">{attraction.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
