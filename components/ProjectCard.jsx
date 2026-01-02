"use client"

import { useState } from "react"
import { ExternalLink, Github, ImageIcon } from "lucide-react"
import Image from "next/image"

export default function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  if (!project) return null

  const { title = "Project", description = "", url, github, tech = [], category = "project", image } = project

  const imgSrc = image || `/placeholder.svg?height=200&width=400&text=${encodeURIComponent(title)}`

  return (
    <div
      className={`group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-slate-500/20 rounded-xl overflow-hidden transition-all duration-500 hover:border-slate-400/50 hover:shadow-2xl hover:shadow-slate-500/10 transform hover:-translate-y-2 ${index % 2 === 0 ? "hover:rotate-1" : "hover:-rotate-1"
        }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-500/5 to-neutral-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Project Image */}
      <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
        <Image
          src={imgSrc}
          alt={title}
          fill
          className={`object-cover transition-all duration-500 ${isHovered ? "scale-110" : "scale-100"
            } ${imageLoaded ? "opacity-100" : "opacity-0"}`}
          onLoadingComplete={() => setImageLoaded(true)}
          onError={() => setImageLoaded(true)}
          priority={index < 6} // Load first 6 images with priority
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>

        {/* Image placeholder when loading */}
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center space-y-2 text-gray-500">
              <ImageIcon className="w-8 h-8" />
              <span className="text-sm">Loading...</span>
            </div>
          </div>
        )}

        {/* Project category badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-slate-200 text-xs rounded-full border border-slate-500/30">
            {category.toString().replace(/-/g, " ").toUpperCase()}
          </span>
        </div>

        {/* Action buttons overlay */}
        <div
          className={`absolute top-4 right-4 flex space-x-2 transition-all duration-300 ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
            }`}
        >
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-black/50 backdrop-blur-sm rounded-lg hover:bg-slate-500/30 transition-colors duration-300 group/link"
            >
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover/link:text-white" />
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-black/50 backdrop-blur-sm rounded-lg hover:bg-slate-500/30 transition-colors duration-300 group/link"
            >
              <Github className="w-4 h-4 text-slate-400 group-hover/link:text-white" />
            </a>
          )}
        </div>
      </div>

      {/* Project content */}
      <div className="relative p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white group-hover:text-slate-200 transition-colors duration-300 mb-2">
            {title}
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
        </div>

        {tech && tech.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tech.map((t, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-gradient-to-r from-slate-500/20 to-neutral-500/20 text-slate-300 text-xs rounded-full border border-slate-500/30"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>

      <div
        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-500 to-neutral-500 transform origin-left transition-transform duration-500 ${isHovered ? "scale-x-100" : "scale-x-0"
          }`}
      ></div>
    </div>
  )
}
