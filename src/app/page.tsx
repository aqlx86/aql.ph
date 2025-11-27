import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Connect from '@/components/sections/Connect'

export default function Home() {
  return (
    <>
      {/* Skip to main content for accessibility */}
      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      <Header />

      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Connect />
      </main>

      <Footer />
    </>
  )
}
