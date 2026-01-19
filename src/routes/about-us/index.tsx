import { AboutUsHeader } from '@/components/about-us/header/header'
import { HowItStarted } from '@/components/about-us/how-it-started/HowItStarted'
import { OurMission } from '@/components/about-us/our-mission/OurMission'
import { OurValues } from '@/components/about-us/our-values/OurValues'
import { People } from '@/components/about-us/people/People'
import { TrustAndSecurity } from '@/components/about-us/trust-and-security/TrustAndSecurity'
import { Footer } from '@/components/navbar/footer/Footer'
import { NavBar } from '@/components/navbar/NavBar'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about-us/')({ component: AboutUs })

function AboutUs() {
  return (
    <div>
      <NavBar />
      <AboutUsHeader />
      <HowItStarted />
      <OurMission />
      <OurValues />
      <People />
      <TrustAndSecurity />
      <Footer />
    </div>
  )
}
