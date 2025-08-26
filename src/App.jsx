import React, { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import Hero from "./components/Hero"
import About from "./components/about"
import Stack from "./components/Stack"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import "./index.css"
import NavBars from "./components/NavBars"



function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])
  return (
    <main>
        <NavBars />
        <Hero />
        <About />
        <Stack />
        <Contact />
        <Footer />
    </main>
  )
}

export default App