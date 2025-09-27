import './index.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Portfolio from './sections/Portfolio'
import Contact from './sections/Contact'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-7xl container-x">
        <section id="home" className="pt-32 section-y">
          <Hero />
        </section>
        <section id="about" className="section-y">
          <About />
        </section>
        <section id="services" className="section-y">
          <Services />
        </section>
        <section id="portfolio" className="section-y">
          <Portfolio />
        </section>
        <section id="contact" className="section-y">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
