import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default:  'Arletta The Friendly Trader',
    template: '%s | Arletta The Friendly Trader',
  },
  description:
    'Learn the 5% DRIP Method with Arletta The Friendly Trader. Disciplined options trading strategies, risk management, and consistency — for traders at every level.',
  keywords: ['trading education', 'options trading', '5% DRIP Method', 'day trading', 'trading coach', 'Atlanta trading'],
  openGraph: {
    type:     'website',
    locale:   'en_US',
    url:      'https://www.arlettathefriendlytrader.com',
    siteName: 'Arletta The Friendly Trader',
    title:    'Arletta The Friendly Trader',
    description: 'Learn the 5% DRIP Method — disciplined options trading strategies, risk management, and consistency.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arletta The Friendly Trader',
    description: 'Learn the 5% DRIP Method — disciplined options trading strategies, risk management, and consistency.',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} data-scroll-behavior="smooth">
      <body className="font-sans bg-brand-white text-brand-black antialiased">
        {children}
      </body>
    </html>
  )
}
