"use client"

import { useState, useEffect, useRef } from "react"
import ProjectCard from "./ProjectCard"
import Image from "next/image"

// Import all images
import vhalorImg from "../public/assets/vhalor.png"
import spicybeatsImg from "../public/assets/spicybeats.png"
import mindmatchImg from "../public/assets/mindmatch.png"
import colorballImg from "../public/assets/colorball.png"
import soaringWithDronesImg from "../public/assets/soaringWithDrones.png"
import spacehunterImg from "../public/assets/spacehunter.png"
import crimsonvibesImg from "../public/assets/crimsonvibes.png"
import ringconfig1Img from "../public/assets/ringconfig1.png"
import ringConfig2Img from "../public/assets/ringConfig2.png"
import porchImg from "../public/assets/porch.png"
import saunaImg from "../public/assets/sauna.png"
import shadowImg from "../public/assets/shadow.png"
import slotImg from "../public/assets/slot.png"
import spiderImg from "../public/assets/spider.png"
import dotImg from "../public/assets/dot.png"
import paddleImg from "../public/assets/paddle.png"

export default function ProjectSection() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const preloadedImagesRef = useRef([])

  // Preload all images
  useEffect(() => {
    const imageSources = [
      vhalorImg,
      spicybeatsImg,
      mindmatchImg,
      colorballImg,
      soaringWithDronesImg,
      spacehunterImg,
      crimsonvibesImg,
      ringconfig1Img,
      ringConfig2Img,
      porchImg,
      saunaImg,
      shadowImg,
      slotImg,
      spiderImg,
      dotImg,
      paddleImg,
    ]

    const preloadImages = async () => {
      const imagePromises = imageSources.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new window.Image()
          img.onload = () => {
            preloadedImagesRef.current.push(img)
            resolve(img)
          }
          img.onerror = reject
          img.src = src.src || src
        })
      })

      try {
        await Promise.all(imagePromises)
        setImagesLoaded(true)
      } catch (error) {
        console.error("Error preloading images:", error)
        // Still set as loaded to prevent blocking the UI
        setImagesLoaded(true)
      }
    }

    preloadImages()
  }, [])

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "3d-apps", name: "3D Web Apps" },
    { id: "games", name: "Games" },
    { id: "configurators", name: "Configurators" },
  ]

  const projects = [
    // 3D Web Apps
    {
      title: "Vhalor",
      description:
        "A 3D web experience made in React, R3F, Three.js, designed to sell clothing products with immersive 3D visualization.",
      url: "https://www.vhalor.com/",
      category: "3d-apps",
      tech: ["React", "Three.js", "R3F", "WebGL"],
      image: vhalorImg,
    },
    {
      title: "Spicy Beats",
      description:
        "A 3D web app that visualizes music through various 3D shapes and effects, featuring a user-friendly interface for searching and playing songs.",
      url: "https://spicybeats.netlify.app/",
      category: "3d-apps",
      tech: ["Three.js", "Web Audio API", "React"],
      image: spicybeatsImg,
    },
    {
      title: "Mind Match PK",
      description:
        "A web application helping users find therapists in Pakistan according to their preferences and needs.",
      url: "https://mindmatchpk.netlify.app/",
      category: "3d-apps",
      tech: ["React", "Node.js", "Database"],
      image: mindmatchImg,
    },

    // 3D Games
    {
      title: "Color Ball Chaos",
      description:
        "Control a rolling ball through vibrant environments where color is critical. Avoid obstacles, collect power-ups, and survive 99 challenging levels.",
      url: "http://colorballchaos.web.app/",
      category: "games",
      tech: ["Three.js", "WebGL", "Physics Engine"],
      image: colorballImg,
    },
    {
      title: "Soaring With Drones",
      description:
        "A third-person educational game combining fun with learning. Control a drone in a 3D world to complete awareness-building tasks.",
      url: "https://voluble-axolotl-6f5fbc.netlify.app/",
      category: "games",
      tech: ["Three.js", "R3F", "Educational Gaming"],
      image: soaringWithDronesImg,
    },
    {
      title: "Space Hunter",
      description:
        "A classic space shooter with modern effects. Shoot enemies, dodge asteroids, pick up power-ups in this arcade-style adventure.",
      url: "https://space-hunter.netlify.app/",
      category: "games",
      tech: ["JavaScript", "Canvas API", "Game Physics"],
      image: spacehunterImg,
    },
    {
      title: "Crimson Vibes",
      description:
        "A multiplayer game where you destroy other submarines and be the last player standing in underwater combat.",
      url: "https://crimsonvibes.dev/3d/",
      category: "games",
      tech: ["Three.js", "Multiplayer", "WebSockets"],
      image: crimsonvibesImg,
    },

    // Configurators
    {
      title: "Ring Configurator",
      description:
        "A real-time 3D ring customization tool allowing users to interactively design rings by changing styles, materials, and viewing angles.",
      url: "https://ringss-configurator.netlify.app/",
      category: "configurators",
      tech: ["Three.js", "R3F", "3D Modeling"],
      image: ringconfig1Img,
    },
    {
      title: "Wedding Ring Configurator",
      description:
        "Tailored for weddings and engagements, this configurator lets users design rings with detailed personalization options.",
      url: "https://aura3dring.web.app/",
      category: "configurators",
      tech: ["Three.js", "Custom Materials", "Real-time Rendering"],
      image: ringConfig2Img,
    },
    {
      title: "Porch Configurator",
      description:
        "A web-based 3D visualization platform for building and customizing porch designs with adjustable structure, colors, and materials.",
      url: "https://luxury-salamander-ba1cc9.netlify.app/",
      category: "configurators",
      tech: ["Three.js", "Architectural Visualization", "Material Editor"],
      image: porchImg,
    },
    {
      title: "Sauna Viewer",
      description:
        "A fully interactive 3D tool for visualizing sauna interiors with focus on points of interest and detailed exploration.",
      url: "https://vikarasauna.netlify.app/",
      category: "configurators",
      tech: ["Three.js", "Interior Design", "Interactive 3D"],
      image: saunaImg,
    },
    {
      title: "3D Paddle Configurator",
      description:
        "A real-time 3D customization tool built with React and Three.js that enables users to visualize and configure sports paddle court. Features an intuitive control panel for adjusting frame colors, turf textures, and glass tinting, with smooth camera controls and professional lighting. Built using React Three Fiber for optimized 3D rendering performance.",
      url: "https://paddleconfigurator.netlify.app/",
      category: "configurators",
      tech: ["React", "Three.js", "React Three Fiber", "3D Rendering"],
      image: paddleImg,
    },

    // 2D Games
    {
      title: "The Shadow",
      description:
        "A 2D platformer game featuring AI enemies and aesthetic level design with challenging gameplay mechanics.",
      url: "https://the-shadow.netlify.app/",
      category: "games",
      tech: ["JavaScript", "Canvas API", "AI Programming"],
      image: shadowImg,
    },
    {
      title: "Slot Game",
      description: "A slot machine game developed using PlayCanvas with engaging animations and sound effects.",
      url: "https://slotmachinewaka.web.app/",
      category: "games",
      tech: ["PlayCanvas", "Game Logic", "Animations"],
      image: slotImg,
    },
    {
      title: "Spider Solitaire",
      description:
        "A classic spider solitaire card game implemented in React with smooth animations and intuitive gameplay.",
      url: "https://steady-boba-64645a.netlify.app/",
      category: "games",
      tech: ["React", "Game Logic", "Card Games"],
      image: spiderImg,
    },
    {
      title: "Dot Catcher",
      description: "An endless and addictive tap-and-pop game made in Three.js with engaging 3D visual effects.",
      url: "https://dapper-fairy-e5a6a5.netlify.app/",
      category: "games",
      tech: ["Three.js", "Endless Runner", "Touch Controls"],
      image: dotImg,
    },
  ]

  const filteredProjects = Array.isArray(projects)
    ? activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory)
    : []

  return (
    <section id="projects" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-slate-400 to-slate-400 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Explore my collection of 3D web applications, interactive games, and custom configurators
        </p>
      </div>

      {!imagesLoaded && (
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-neutral-400"></div>
            <span className="text-gray-300">Loading projects...</span>
          </div>
        </div>
      )}

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${activeCategory === category.id
              ? "bg-gradient-to-r border-2 border-white-500 bg-gradient-to-r from-black-500 to-gray-500 text-white shadow-lg"
              : "bg-gradient-to-r text-white hover:from-gray-600 hover:to-black-600 border border-gray-600"
              }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
