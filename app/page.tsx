import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Architecture from '@/components/Architecture'
import Skills from '@/components/Skills'
import GitHub from '@/components/GitHub'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <hr className="section-divider" />
      <About />
      <hr className="section-divider" />
      <Experience />
      <hr className="section-divider" />
      <Projects />
      <hr className="section-divider" />
      <Architecture />
      <hr className="section-divider" />
      <Skills />
      <hr className="section-divider" />
      <GitHub />
      <hr className="section-divider" />
      <Contact />
      <Footer />
    </main>
  )
}
