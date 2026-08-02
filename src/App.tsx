import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { PreferencesProvider } from './context/PreferencesContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import Chatbot from './components/Chatbot'
import Onboarding from './components/Onboarding'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Infusions from './pages/Infusions'
import Contact from './pages/Contact'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  const [showOnboarding, setShowOnboarding] = useState(true)

  const handleOnboardingComplete = () => {
    setShowOnboarding(false)
  }

  return (
    <BrowserRouter>
      <PreferencesProvider>
        <CartProvider>
          {showOnboarding && <Onboarding onComplete={handleOnboardingComplete} />}
          <ScrollToTop />
          <Navbar />
          <CartDrawer />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/a-propos" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/infusions" element={<Infusions />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
          <Chatbot />
        </CartProvider>
      </PreferencesProvider>
    </BrowserRouter>
  )
}
