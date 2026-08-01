import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { PreferencesProvider } from './context/PreferencesContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import Chatbot from './components/Chatbot'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Infusions from './pages/Infusions'
import Contact from './pages/Contact'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <PreferencesProvider>
        <CartProvider>
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
