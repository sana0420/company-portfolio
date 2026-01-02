"use client"

import { useState } from "react"
import { Mail, MessageCircle, Send, Github, Linkedin } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-slate-400 to-slate-400 bg-clip-text text-transparent">
            Let's Create Together
          </span>
        </h2>
        <p className="text-gray-300 text-lg">Ready to bring your 3D web project to life? Let's discuss your ideas!</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-slate-500/10 to-neutral-500/10 rounded-xl border border-slate-500/20">
            <div className="p-3 bg-slate-500/20 rounded-lg">
              <Mail className="w-6 h-6 text-slate-400" />
            </div>
            <div>
              <h3 className="text-white font-semibold">Email</h3>
              <a href="mailto:raziulhassan914@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                raziulhassan914@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-slate-500/10 to-gray-500/10 rounded-xl border border-slate-500/20">
            <div className="p-3 bg-slate-500/20 rounded-lg">
              <Linkedin className="w-6 h-6 text-slate-400" />
            </div>
            <div>
              <h3 className="text-white font-semibold">LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/razi-ul-hassan-a096a9226/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-gray-500/10 to-gray-600/10 rounded-xl border border-gray-500/20">
            <div className="p-3 bg-gray-500/20 rounded-lg">
              <Github className="w-6 h-6 text-gray-400" />
            </div>
            <div>
              <h3 className="text-white font-semibold">GitHub</h3>
              <a
                href="https://github.com/raz914"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gray-400 transition-colors"
              >
                View Projects
              </a>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-xl border border-gray-700">
            <h3 className="text-white font-semibold mb-4">What I Can Help With:</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• 3D Web Applications & Experiences</li>
              <li>• Interactive Product Configurators</li>
              <li>• Web-based Games & Simulations</li>
              <li>• Three.js & React Three Fiber Development</li>
              <li>• PlayCanvas Game Development</li>
            </ul>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400/20 text-white placeholder-gray-400 transition-colors"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400/20 text-white placeholder-gray-400 transition-colors"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400/20 text-white placeholder-gray-400 transition-colors resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <button
            type="submit"
            className="w-full px-8 py-4 bg-gradient-to-r from-slate-500 to-neutral-500 text-white font-semibold rounded-lg hover:from-slate-600 hover:to-neutral-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gray-500/25 flex items-center justify-center space-x-2"
          >
            <Send className="w-5 h-5" />
            <span>Send Message</span>
          </button>
        </form>
      </div>
    </section>
  )
}
