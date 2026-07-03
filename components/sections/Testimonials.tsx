const TESTIMONIALS = [
  {
    quote: "Coach Arletta and Coach Trent are truly changing lives! I am so grateful for their guidance, and the Drippers community is such an inspiring place to learn and grow. This journey has been life-changing!",
    name: "Dr. Trenee",
    handle: "@drtrenee",
    platform: "YouTube",
  },
  {
    quote: "Most grateful and thankful for you Mrs. Arletta! You deserve all the blessings that God has in store for you! There is no other like you and Coach Trent! I first found you Coach Arletta through Krystal Lee's YouTube channel. I have never looked back since that day. I am grateful and most humble to be in your community of Drippers and cousins!",
    name: "Mechelle Bellamy",
    handle: "Mighty Networks",
    platform: "Community",
  },
  {
    quote: "You make so much space and time for your community. I am so happy to be a part of a TRUE community where you are seen and heard. Love all in the atmosphere.",
    name: "Motymillion2",
    handle: "@motymillion2",
    platform: "TikTok",
  },
]

const PlatformIcon = ({ platform }: { platform: string }) => {
  if (platform === "YouTube") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="#E8C96A">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    )
  }
  if (platform === "TikTok") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="#C9A84C">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
      </svg>
    )
  }
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#C9A84C">
      <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

export default function Testimonials() {
  return (
    <section className="section-padding bg-brand-white">
      <div className="max-w-site mx-auto px-6">

        <div className="flex flex-col items-center gap-4 mb-16 text-center">
          <div className="flex items-center gap-3">
            <div className="h-px w-8" style={{ background: "#C9A84C" }} />
            <span className="text-xs font-semibold tracking-widest uppercase text-gold">Student Stories</span>
            <div className="h-px w-8" style={{ background: "#C9A84C" }} />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-black leading-tight">
            Real traders. Real results.
          </h2>
          <p className="text-base text-brand-brown max-w-xl leading-relaxed">
            Do not take our word for it. Here is what members of the 5% Drippers community have to say.
          </p>
        </div>

        <div className="rounded-2xl p-8 lg:p-12 mb-8 relative overflow-hidden" style={{ background: "#0F0A02", border: "1px solid rgba(201,168,76,0.2)" }}>
          <div className="absolute top-6 left-8 font-display text-8xl font-bold leading-none" style={{ color: "rgba(201,168,76,0.1)" }}>"</div>
          <div className="relative flex flex-col gap-6 max-w-3xl mx-auto text-center">
            <p className="font-display text-xl lg:text-2xl font-medium leading-relaxed" style={{ color: "#F9F6F0" }}>
              {TESTIMONIALS[0].quote}
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-px" style={{ background: "rgba(201,168,76,0.4)" }} />
              <div className="flex items-center gap-2">
                <PlatformIcon platform={TESTIMONIALS[0].platform} />
                <span className="text-sm font-medium" style={{ color: "#C9A84C" }}>{TESTIMONIALS[0].name}</span>
                <span className="text-sm" style={{ color: "rgba(249,246,240,0.4)" }}>{TESTIMONIALS[0].handle}</span>
              </div>
              <div className="w-8 h-px" style={{ background: "rgba(201,168,76,0.4)" }} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.slice(1).map((testimonial, index) => (
            <div key={index} className="rounded-2xl p-6 flex flex-col gap-4" style={{ background: "#FBF6EC", border: "1px solid rgba(201,168,76,0.15)" }}>
              <div className="font-display text-4xl leading-none" style={{ color: "rgba(201,168,76,0.3)" }}>"</div>
              <p className="text-base text-brand-brown leading-relaxed flex-1">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-2 pt-2" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
                <PlatformIcon platform={testimonial.platform} />
                <div>
                  <p className="text-sm font-medium text-brand-black">{testimonial.name}</p>
                  <p className="text-xs" style={{ color: "rgba(107,92,62,0.6)" }}>{testimonial.handle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
