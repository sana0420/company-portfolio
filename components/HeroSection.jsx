"use client"

import { useEffect, useState } from "react"
import Image from 'next/image'
export default function HeroSection() {
  const [text, setText] = useState("")
  const fullText = "3D Web Developer & Game Creator"

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, i))
      i++
      if (i > fullText.length) {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            <Image
              src="/cicadas-logo.png"
              alt="Logo"
              width={800}
              height={300}
              className="w-full max-w-3xl h-auto mx-auto"
              priority
            />
          </h1>
          <div className="h-8 mb-6">
            <p className="text-xl md:text-2xl text-gray-300 font-mono">
              {text}
              <span className="animate-pulse">|</span>
            </p>
          </div>
        </div>

        <div className="space-y-4 text-gray-300 text-lg max-w-2xl mx-auto mb-8">
          <p>
            Specializing in <span className="text-cyan-400 font-semibold">React.js</span>,
            <span className="text-purple-400 font-semibold"> Three.js</span>,
            <span className="text-pink-400 font-semibold"> R3F</span>, and
            <span className="text-yellow-400 font-semibold"> PlayCanvas</span>
          </p>
          <p>Creating immersive web games, 3D web applications, and interactive configurators</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 border-2 border-white-500 bg-gradient-to-r from-black-500 to-gray-500 text-white font-semibold rounded-full hover:from-gray-600 hover:to-black-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-black-800/25"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-white-400 text-white-400 font-semibold rounded-full hover:bg-black-400 hover:text-white transition-all duration-300 transform hover:scale-105 bg-gradient-to-r hover:from-gray-600 hover:to-black-600"
          >
            Get In Touch
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
