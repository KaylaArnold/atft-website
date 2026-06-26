const RESTAURANTS = [
  { name: "Pasta da Pulcinella", address: "1100 W Peachtree St NW, Atlanta, GA 30309", desc: "A Midtown favorite known for authentic Italian cuisine, fresh pasta, and an intimate dining experience.", cuisine: "Italian", url: "https://www.pastadapulcinella.com/" },
  { name: "South City Kitchen", address: "1144 Crescent Ave NE, Atlanta, GA 30309", desc: "Upscale Southern dining featuring Atlanta favorites in a charming Midtown setting just minutes from our office.", cuisine: "Southern", url: "https://www.southcitykitchen.com/" },
  { name: "Dos Caminos", address: "1100 Peachtree St NE, Atlanta, GA 30309", desc: "Vibrant Mexican cuisine with lunch, dinner, and happy hour options just steps away from Midtown.", cuisine: "Mexican", url: "https://www.doscaminos.com/location/atlanta/" },
]

export default function AtlantaDining() {
  return (
    <section id="dining" className="section-padding" style={{ background: "#FBF6EC" }}>
      <div className="max-w-site mx-auto px-6">
        <div className="flex flex-col gap-4 mb-12">
          <div className="flex items-center gap-3">
            <div className="h-px w-8" style={{ background: "#C9A84C" }} />
            <span className="text-xs font-semibold tracking-widest uppercase text-gold">Where to Eat</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-black">Dining near our office.</h2>
          <p className="text-base text-brand-brown max-w-xl leading-relaxed">Great food is never far away in Midtown Atlanta. Here are a few of our favorites close to the office.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {RESTAURANTS.map((restaurant) => (
            <a key={restaurant.name} href={restaurant.url} target="_blank" rel="noopener noreferrer" className="flex flex-col gap-4 p-6 rounded-2xl bg-brand-white hover:-translate-y-1 transition-all duration-300 group" style={{ border: "1px solid rgba(201,168,76,0.15)" }}>
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-display text-lg font-bold text-brand-black group-hover:text-gold transition-colors duration-200">{restaurant.name}</h3>
                <span className="flex-shrink-0 text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "#FBF6EC", color: "#8B6914", border: "1px solid rgba(201,168,76,0.2)" }}>{restaurant.cuisine}</span>
              </div>
              <p className="text-sm text-brand-brown leading-relaxed flex-1">{restaurant.desc}</p>
              <p className="text-xs text-brand-brown opacity-60">{restaurant.address}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
