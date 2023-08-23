import { useState } from 'react'
import './index.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import LinkShortener from './components/LinkShortener'
import AdvantageSection from './components/AdvantageSection'
import CTAsection from './components/CTAsection'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
      <header>
        <Nav />
        <Hero />
      </header>
      <main>
        <LinkShortener />
        <AdvantageSection />
        <CTAsection />
      </main>
      <Footer />
    </>
  )
}

export default App
