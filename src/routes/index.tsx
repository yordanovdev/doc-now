import { Header } from '@/components/home/header/Header'
import { Services } from '@/components/home/services/Services'
import { Specialists } from '@/components/home/specialists/Specialists'
import { Steps } from '@/components/home/steps/Steps'
import { WhyUs } from '@/components/home/whyUs/WhyUs'
import { Footer } from '@/components/navbar/footer/Footer'
import { NavBar } from '@/components/navbar/NavBar'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <div className="max-md:px-4 max-md:max-w-md max-md:mx-auto overflow-x-hidden">
        <div className="max-w-378 xl:px-10 mx-auto relative">
          <Steps />
          <Services />
        </div>
      </div>
      <WhyUs />
      <Specialists />
      <Footer />
    </div>
  )
}
