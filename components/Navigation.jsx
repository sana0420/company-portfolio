"use client"

import { useState } from "react"
import Image from 'next/image'
import { Menu, X, Github, Linkedin, Mail } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "3D Apps", href: "#3d-apps" },
    { name: "Games", href: "#games" },
    { name: "Configurators", href: "#configurators" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Image
              src="/cicadas-logo.png"
              alt="Logo"
              width={200}
              height={150}
              priority
            />
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 hover:bg-white/10"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/raz914" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/razi-ul-hassan-a096a9226/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:raziulhassan914@gmail.com" className="text-gray-300 hover:text-white transition-colors duration-300">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
