export const NAV_LINKS = [
  { label: 'About',         href: '/about',                                       external: false },
  { label: 'Programs',      href: '/programs',                                    external: false },
  { label: 'Schedule',      href: '/schedule',                                    external: false },
  { label: '5% Daily Drip™', href: '/community',                                  external: false },
  { label: "Give Back",  href: '/give-back', external: false },
  { label: 'Atlanta Guide', href: '/atlanta-guide',                               external: false },
  { label: 'FAQ',           href: '/faq',                                         external: false },
  { label: 'Contact',       href: '/contact',                                     external: false },
] as const

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/arlettathefriendlytrader/',
  tiktok:    'https://www.tiktok.com/@arlettathefriendlytrader',
  youtube:   'https://www.youtube.com/channel/UCUu1jtNvdAEeYkJqoX9cJqg',
  community: 'https://arletta-the-friendly-trader.mn.co/',
} as const

export const SITE_CONFIG = {
  name:           'Arletta The Friendly Trader',
  tagline:        'Trade with structure. Grow with discipline.',
  communityUrl:   'https://arletta-the-friendly-trader.mn.co/',
  shopUrl:        'https://shop.arlettathefriendlytrader.com',
  bookingUrl: 'https://httpsarlettathefriendlytraderasme.as.me/schedule/1a78dddd',
  waitlistUrl: 'https://forms.gle/Z9VyFNpbc1btjt4N9',
  dailyDripUrl: '/community',
  dailyDripCohortEnrollmentUrl: 'https://arletta-the-friendly-trader.mn.co/plans/1998145?bundle_token=08dbace4fef8f14eedcd234c4b7e5664&utm_source=manual',
  atftCommunityAccessUrl: 'https://arletta-the-friendly-trader.mn.co/plans/1948245?bundle_token=dcce36b59c9ea5364a55b808327e6eb5&utm_source=manual',
  disclaimer:     'Educational content only. Trading involves risk. Past results are not indicative of future performance.',
} as const
