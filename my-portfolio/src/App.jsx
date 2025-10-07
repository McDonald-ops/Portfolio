import './index.css'
import { useEffect, useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Portfolio from './sections/Portfolio'
import Contact from './sections/Contact'
import LoadingScreen from './components/LoadingScreen'

function App() {
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    // If document is already loaded (fast refresh), hide loader quickly
    if (document.readyState === 'complete') {
      const t = setTimeout(() => setShowLoader(false), 300)
      return () => clearTimeout(t)
    }
  }, [])

  return (
    <div className="min-h-screen">
      <AnimatePresence>{showLoader && <LoadingScreen onReady={() => setShowLoader(false)} />}</AnimatePresence>
      <Navbar />
      <main className="mx-auto max-w-7xl container-x">
        <section id="home" className="pt-32 section-y">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
            <Hero />
          </motion.div>
        </section>
        <section id="about" className="section-y">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
            <About />
          </motion.div>
        </section>
        <section id="services" className="section-y">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
            <Services />
          </motion.div>
        </section>
        <section id="portfolio" className="section-y">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
            <Portfolio />
          </motion.div>
        </section>
        <section id="contact" className="section-y">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
            <Contact />
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
