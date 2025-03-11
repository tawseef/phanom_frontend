import './App.css'
import BlogSection from './components/BlogSection/BlogSection'
import Footer from './components/Footer/Footer'
import HeroSection from './components/HeroSection/HeroSection'
import MarketingSection from './components/MarketingSection/MarketingSection'
import MediaSection from './components/MediaSection/MediaSection'
import Navbar from './components/Navbar/Navbar'
import PlansAndPrice from './components/PlansAndPrice/PlansAndPrice'
import Service from './components/Service/Service'


function App() {

  return (
    <div>
      <Navbar /> 
      <HeroSection />    
      <MediaSection />
      <MarketingSection />
      <PlansAndPrice />
      <Service />
      <BlogSection />
      <Footer />
    </div>
  )
}

export default App
