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
    'Learn the 5% Method with Arletta The Friendly Trader. Disciplined options trading strategies, risk management, and consistency — for traders at every level.',
  keywords: ['trading education', 'options trading', '5% method', 'day trading', 'trading coach'],
  openGraph: {
    type:     'website',
    locale:   'en_US',
    url:      'https://www.arlettathefriendlytrader.com',
    siteName: 'Arletta The Friendly Trader',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans bg-brand-white text-brand-black antialiased">
        {children}
      </body>
    </html>
  )
}