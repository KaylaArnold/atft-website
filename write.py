content = """\
import type { Metadata } from "next"
import CommunityHero from "@/components/sections/community/CommunityHero"
import CommunityBenefits from "@/components/sections/community/CommunityBenefits"

export const metadata: Metadata = {
  title: "Community",
  description: "Join the 5% Drippers waitlist — Arletta's private trading community opens enrollment in July and November each year.",
}

export default function CommunityPage() {
  return (
    <div className="pt-[72px]">
      <CommunityHero />
      <CommunityBenefits />
    </div>
  )
}
"""

with open("app/(site)/community/page.tsx", "w", encoding="utf-8") as f:
    f.write(content)

print("Done")