import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header'
import Footer from './components/Footer'
import QuoteModal from './components/QuoteModal'
import Home from './pages/Home'
import ServicesPage from './pages/ServicesPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import './App.css'

function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen">
          <Header onQuoteClick={() => setIsQuoteModalOpen(true)} />
          <Routes>
            <Route path="/" element={<Home onQuoteClick={() => setIsQuoteModalOpen(true)} />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
          <QuoteModal 
            isOpen={isQuoteModalOpen} 
            onClose={() => setIsQuoteModalOpen(false)} 
          />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
