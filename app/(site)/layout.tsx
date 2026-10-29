import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import BackToTop from '@/components/ui/BackToTop'
import SaleBanner from '@/components/ui/SaleBanner'

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SaleBanner />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <BackToTop />
    </>
  )
}
