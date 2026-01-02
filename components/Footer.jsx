"use client"

import { Github, Linkedin, Mail, Heart } from "lucide-react"
import Image from 'next/image'
export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <Image
              src="/cicadas-logo.png"
              alt="Logo"
              width={200}
              height={500}
              priority
            />
            <p className="text-gray-400">3D Web Developer & Game Creator</p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/raz914"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800/50 rounded-lg hover:bg-gray-500/20 transition-colors duration-300 group"
            >
              <Github className="w-5 h-5 text-gray-400 group-hover:text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/razi-ul-hassan-a096a9226/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800/50 rounded-lg hover:bg-gray-500/20 transition-colors duration-300 group"
            >
              <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white" />
            </a>
            <a
              href="mailto:raziulhassan914@gmail.com"
              className="p-3 bg-gray-800/50 rounded-lg hover:bg-gray-500/20 transition-colors duration-300 group"
            >
              <Mail className="w-5 h-5 text-gray-400 group-hover:text-white" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400 fill-current" />
            <span>using React, Three.js & Next.js</span>
          </p>
          <p className="text-gray-500 text-sm mt-2">© 2025 Cicadas Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
