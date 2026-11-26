import Hero from "@/components/sections/Hero"
import SocialProofBar from "@/components/sections/SocialProofBar"
import AboutTeaser from "@/components/sections/AboutTeaser"
import ProgramsTeaser from "@/components/sections/ProgramsTeaser"
import CommunitySection from "@/components/sections/CommunitySection"
import Testimonials from "@/components/sections/Testimonials"
import ThanksgivingFlashSaleModal from "@/components/ui/ThanksgivingFlashSaleModal"

export default function HomePage() {
  return (
    <>
      <ThanksgivingFlashSaleModal />
      <Hero />
      <SocialProofBar />
      <AboutTeaser />
      <ProgramsTeaser />
      <CommunitySection />
      <Testimonials />
    </>
  )
}
