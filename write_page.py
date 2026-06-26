content = """\
import Hero from "@/components/sections/Hero"
import SocialProofBar from "@/components/sections/SocialProofBar"
import AboutTeaser from "@/components/sections/AboutTeaser"
import ProgramsTeaser from "@/components/sections/ProgramsTeaser"
import CommunitySection from "@/components/sections/CommunitySection"

export default function HomePage() {
  return (
    <>
      <Hero />
      <SocialProofBar />
      <AboutTeaser />
      <ProgramsTeaser />
      <CommunitySection />
    </>
  )
}
"""

with open("app/(site)/page.tsx", "w", encoding="utf-8") as f:
    f.write(content)

print("Done")