import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import PortfolioSection from '../components/PortfolioSection'
import WhyMeSection from '../components/WhyMeSection'
import ProcessSection from '../components/ProcessSection'
import PricingSection from '../components/PricingSection'
import FounderSection from '../components/FounderSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#e8e8e8',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    }}>
      <Header />
      <HeroSection />
      <PortfolioSection />
      <WhyMeSection />
      <ProcessSection />
      <PricingSection />
      <FounderSection />
      <Footer />
    </div>
  )
}
