"use client"

import Navigation from "./components/Navigation"
import HeroSection from "./components/HeroSection"
import ProjectSection from "./components/ProjectSection"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"
import SpaceBackground from "./components/SpaceBackground"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Animated Space Background */}
      <SpaceBackground />

      {/* Content with higher z-index */}
      <div className="relative z-10 bg-black/20">
        <Navigation />
        <HeroSection />
        <ProjectSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  )
}
