import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HomePage    from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import AboutPage   from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import './index.css'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/"         element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about"    element={<AboutPage />} />
          <Route path="/contact"  element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />

      <div className="whatsapp-float">
        <a href="https://wa.me/97259208937" target="_blank" rel="noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="whatsapp" />
        </a>
      </div>
    </BrowserRouter>
  )
}