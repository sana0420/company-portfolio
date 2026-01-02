"use client"

import { useEffect, useState } from "react"

export default function SpaceBackground() {
  const [stars, setStars] = useState([])
  const [shootingStars, setShootingStars] = useState([])

  useEffect(() => {
    // Generate random stars
    const starArray = Array.from({ length: 200 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDelay: Math.random() * 3,
      size: Math.random() * 3 + 1,
    }))
    setStars(starArray)

    // Generate shooting stars - spread across entire top and right edges
    const shootingStarArray = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: Math.random() * 120 + 20, // Spread from 20% to 140% (off-screen)
      top: Math.random() * 80 - 20, // Start from -20% to 60% (some off-screen)
      animationDelay: Math.random() * 15 + i * 2, // Stagger them more
      duration: Math.random() * 3 + 4, // Longer duration for seamless effect
    }))
    setShootingStars(shootingStarArray)
  }, [])

  return (
    <>
      {/* Main space background */}
      <div className="fixed inset-0 w-full h-full bg-gradient-to-b from-gray-800 via-gray-900 to-black" />

      {/* Stars layer */}
      <div className="fixed inset-0 w-full h-full">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.animationDelay}s`,
              animationDuration: "3s",
            }}
          />
        ))}
      </div>

      {/* Shooting Stars layer */}
      <div className="fixed inset-0 w-full h-full overflow-hidden">
        {shootingStars.map((star) => (
          <div
            key={star.id}
            className="absolute"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              animationDelay: `${star.animationDelay}s`,
              animationDuration: `${star.duration}s`,
            }}
          >
            {/* Shooting star tail with gradient opacity - rotated diagonally */}
            <div className="w-40 h-0.5 bg-gradient-to-r from-white via-white/60 via-white/30 to-transparent animate-shooting-star transform -rotate-45" />
          </div>
        ))}
      </div>

      {/* Static Moon */}
      <div className="fixed top-20 right-20 w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-400 rounded-full opacity-80">
        <div className="absolute top-2 left-3 w-3 h-3 bg-gray-500 rounded-full opacity-50" />
        <div className="absolute top-6 right-4 w-2 h-2 bg-gray-500 rounded-full opacity-30" />
        <div className="absolute bottom-4 left-6 w-4 h-4 bg-gray-500 rounded-full opacity-40" />
      </div>

      {/* Nebula clouds */}
      <div className="fixed inset-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-700 rounded-full opacity-20 animate-pulse blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-slate-800 rounded-full opacity-20 animate-pulse blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-zinc-800 rounded-full opacity-15 animate-pulse blur-3xl" />
      </div>
    </>
  )
}
