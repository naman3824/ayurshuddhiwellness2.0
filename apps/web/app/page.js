import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Hero from '../components/sections/Hero'
import RootedInTradition from '../components/sections/RootedInTradition'
import ThreePillars from '../components/sections/ThreePillars'
import Journal from '../components/sections/Journal'
import CTABanner from '../components/sections/CTABanner'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <RootedInTradition />
        <ThreePillars />
        <Journal />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
