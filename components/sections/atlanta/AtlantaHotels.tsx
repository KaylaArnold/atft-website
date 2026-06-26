const CLOSEST_HOTELS = [
  { name: "Residence Inn by Marriott Atlanta Midtown/Peachtree", address: "1365 Peachtree St NE", distance: "0.2 miles away", perks: ["Complimentary breakfast", "Suites with kitchenettes", "Great for longer stays"], url: "https://www.marriott.com/en-us/hotels/atlri-residence-inn-atlanta-midtown-peachtree-at-17th/overview/" },
  { name: "Atlanta Marriott Suites Midtown", address: "35 14th Street NE", distance: "0.3 miles away", perks: ["Spacious suite-style rooms", "Indoor and outdoor pool", "Ideal for business travelers"], url: "https://www.marriott.com/en-us/hotels/atlms-atlanta-marriott-suites-midtown/overview/" },
  { name: "Hampton Inn & Suites Midtown", address: "1231 W Peachtree St NE", distance: "0.3 miles away", perks: ["Complimentary breakfast", "Rooftop lounge", "Affordable and convenient"], url: "https://www.hilton.com/en/hotels/atlmnhx-hampton-suites-atlanta-midtown/" },
  { name: "The Starling Atlanta Midtown", address: "188 14th Street NE", distance: "0.4 miles away", perks: ["Modern upscale accommodations", "Rooftop pool", "Walking distance to restaurants"], url: "https://www.thestarling.com/" },
]

const LUXURY_HOTELS = [
  { name: "Four Seasons Hotel Atlanta", address: "75 14th Street NE", perks: ["Five-star luxury experience", "Spa services", "Fine dining", "Premium Midtown location"], url: "https://www.fourseasons.com/atlanta/" },
  { name: "Epicurean Atlanta, Autograph Collection", address: "1117 W Peachtree St NW", perks: ["Luxury culinary-inspired hotel", "Rooftop pool and bar", "Steps from our office"], url: "https://www.epicureanhotelatlanta.com/" },
  { name: "Kimpton Shane Hotel", address: "1340 W Peachtree St NW", perks: ["Boutique luxury hotel", "Modern design", "Excellent on-site dining"], url: "https://www.shanehotelatlanta.com/" },
  { name: "Moxy Atlanta Midtown", address: "48 13th Street NE", perks: ["Trendy atmosphere", "Modern rooms", "Great for younger travelers"], url: "https://www.marriott.com/en-us/hotels/atlox-moxy-atlanta-midtown/" },
]

const cardStyle = { border: "1px solid rgba(201,168,76,0.15)" }
const dotStyle = { background: "#C9A84C" }

export default function AtlantaHotels() {
  return (
    <section className="section-padding bg-brand-white">
      <div className="max-w-site mx-auto px-6">

        <div className="flex flex-col gap-4 mb-12">
          <div className="flex items-center gap-3">
            <div className="h-px w-8" style={{ background: "#C9A84C" }} />
            <span className="text-xs font-semibold tracking-widest uppercase text-gold">Where to Stay</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-black">Closest hotels to our office.</h2>
          <p className="text-base text-brand-brown max-w-xl leading-relaxed">All hotels below are within walking distance of our Midtown Atlanta location. Exact address shared after booking.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {CLOSEST_HOTELS.map((hotel) => (
            <a key={hotel.name} href={hotel.url} target="_blank" rel="noopener noreferrer" className="flex flex-col gap-4 p-6 rounded-2xl bg-brand-white hover:-translate-y-1 transition-all duration-300 group" style={cardStyle}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-lg font-bold text-brand-black leading-tight group-hover:text-gold transition-colors duration-200">{hotel.name}</h3>
                  <p className="text-sm text-brand-brown mt-1">{hotel.address}</p>
                </div>
                <span className="flex-shrink-0 text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "#e6f4ed", color: "#1a6b3c" }}>{hotel.distance}</span>
              </div>
              <div className="flex flex-col gap-2 pt-3" style={{ borderTop: "1px solid rgba(201,168,76,0.12)" }}>
                {hotel.perks.map((perk) => (
                  <div key={perk} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={dotStyle} />
                    <span className="text-xs text-brand-brown">{perk}</span>
                  </div>
                ))}
              </div>
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-4 mb-12">
          <div className="flex items-center gap-3">
            <div className="h-px w-8" style={{ background: "#C9A84C" }} />
            <span className="text-xs font-semibold tracking-widest uppercase text-gold">Luxury and Boutique</span>
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-brand-black">Premium stays in Midtown.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {LUXURY_HOTELS.map((hotel) => (
            <a key={hotel.name} href={hotel.url} target="_blank" rel="noopener noreferrer" className="flex flex-col gap-4 p-6 rounded-2xl hover:-translate-y-1 transition-all duration-300 group" style={{ background: "#FBF6EC", border: "1px solid rgba(201,168,76,0.15)" }}>
              <div>
                <h3 className="font-display text-lg font-bold text-brand-black leading-tight group-hover:text-gold transition-colors duration-200">{hotel.name}</h3>
                <p className="text-sm text-brand-brown mt-1">{hotel.address}</p>
              </div>
              <div className="flex flex-col gap-2 pt-3" style={{ borderTop: "1px solid rgba(201,168,76,0.12)" }}>
                {hotel.perks.map((perk) => (
                  <div key={perk} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={dotStyle} />
                    <span className="text-xs text-brand-brown">{perk}</span>
                  </div>
                ))}
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}
