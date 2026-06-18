import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { MissionSection } from "@/components/mission-section"
import { WorkSection } from "@/components/work-section"
import { TeamSection } from "@/components/team-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"
import { getDefaultContent } from "@/lib/content"

export const dynamic = "force-dynamic"

export default async function Home() {
  const content = getDefaultContent()

  return (
    <>
      <Navigation />
      <main>
        <HeroSection content={content.hero} />
        <MissionSection content={content.mission} />
        <WorkSection content={content.work} />
        <TeamSection content={content.team} />
        <ContactSection content={content.contact} />
      </main>
      <SiteFooter />
    </>
  )
}
