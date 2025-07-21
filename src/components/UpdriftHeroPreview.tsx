'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// Dynamic Wave Component (enhanced version)
function DynamicWaves() {
  const [time, setTime] = useState(0)
  
  useEffect(() => {
    let animationId: number
    const animate = () => {
      setTime(prev => prev + 0.02)
      animationId = requestAnimationFrame(animate)
    }
    animationId = requestAnimationFrame(animate)
    return () => { if (animationId) cancelAnimationFrame(animationId) }
  }, [])

  const generateWavePoints = (
    amplitude: number,
    frequency: number,
    offset: number,
    phase: number,
    yBase: number,
    invert: boolean = false
  ) => {
    const points = []
    const width = typeof window !== 'undefined' ? window.innerWidth : 800
    for (let x = 0; x <= width; x += width / 200) {
      const normalizedX = x / width
      const y = yBase + amplitude * Math.sin(frequency * normalizedX * Math.PI * 2 + time * phase + offset)
      points.push([x, invert ? yBase * 2 - y : y])
    }
    return points
  }

  // Main wave parameters (more complex)
  const topAmplitude = 12
  const topFrequency = 1.2
  const topOffset = 0
  const topPhase = 1
  const topY = 62

  const bottomAmplitude = 8
  const bottomFrequency = 1.7
  const bottomOffset = 1.5
  const bottomPhase = 1.3
  const bottomY = 138

  // Generate points for top and bottom waves
  const topPoints = generateWavePoints(topAmplitude, topFrequency, topOffset, topPhase, topY)
  const bottomPoints = generateWavePoints(bottomAmplitude, bottomFrequency, bottomOffset, bottomPhase, bottomY)

  // Build the path: top wave → right edge → bottom wave (reversed) → left edge
  const path = [
    `M ${topPoints[0][0]},${topPoints[0][1]}`,
    ...topPoints.slice(1).map(([x, y]) => `L ${x},${y}`),
    `L ${bottomPoints[bottomPoints.length - 1][0]},${bottomPoints[bottomPoints.length - 1][1]}`,
    ...bottomPoints.slice(0, -1).reverse().map(([x, y]) => `L ${x},${y}`),
    'Z',
  ].join(' ')

  // Background wave parameters (more complex)
  const bgTopAmplitude = 18
  const bgTopFrequency = 0.9
  const bgTopOffset = 0.7
  const bgTopPhase = 0.7
  const bgTopY = 92

  const bgBottomAmplitude = 12
  const bgBottomFrequency = 1.1
  const bgBottomOffset = 2.2
  const bgBottomPhase = 1.1
  const bgBottomY = 148

  const bgTopPoints = generateWavePoints(bgTopAmplitude, bgTopFrequency, bgTopOffset, bgTopPhase, bgTopY)
  const bgBottomPoints = generateWavePoints(bgBottomAmplitude, bgBottomFrequency, bgBottomOffset, bgBottomPhase, bgBottomY)

  const bgPath = [
    `M ${bgTopPoints[0][0]},${bgTopPoints[0][1]}`,
    ...bgTopPoints.slice(1).map(([x, y]) => `L ${x},${y}`),
    `L ${bgBottomPoints[bgBottomPoints.length - 1][0]},${bgBottomPoints[bgBottomPoints.length - 1][1]}`,
    ...bgBottomPoints.slice(0, -1).reverse().map(([x, y]) => `L ${x},${y}`),
    'Z',
  ].join(' ')

  return (
    <svg className="absolute left-0 top-1/2 w-full h-[180px] -translate-y-1/2 pointer-events-none z-0" viewBox={`0 0 ${typeof window !== 'undefined' ? window.innerWidth : 800} 180`}>
      <defs>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(139, 92, 246, 0.4)" />
          <stop offset="50%" stopColor="rgba(6, 182, 212, 0.4)" />
          <stop offset="100%" stopColor="rgba(59, 130, 246, 0.4)" />
        </linearGradient>
        <linearGradient id="bgWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(139, 92, 246, 0.2)" />
          <stop offset="50%" stopColor="rgba(6, 182, 212, 0.2)" />
          <stop offset="100%" stopColor="rgba(59, 130, 246, 0.2)" />
        </linearGradient>
      </defs>
      <path d={bgPath} fill="url(#bgWaveGradient)" />
      <path d={path} fill="url(#waveGradient)" />
    </svg>
  )
}

// Starfield Component (enhanced)
function Starfield() {
  const [stars, setStars] = useState<Array<{x: number, y: number, size: number, opacity: number, layer: number}>>([])

  useEffect(() => {
    const generateStars = () => {
      const newStars = []
      // Multiple layers of stars
      for (let layer = 0; layer < 3; layer++) {
        const starsPerLayer = [40, 30, 20][layer]
        for (let i = 0; i < starsPerLayer; i++) {
          newStars.push({
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 3 + 1,
            opacity: Math.random() * 0.8 + 0.2,
            layer
          })
        }
      }
      setStars(newStars)
    }
    generateStars()
  }, [])

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      {stars.map((star, index) => (
        <div
          key={index}
          className="absolute bg-white rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animation: `twinkle ${3 + star.layer}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 3}s`,
            zIndex: star.layer
          }}
        />
      ))}
    </div>
  )
}

// River Particles Component (enhanced)
function RiverParticles() {
  const [particles, setParticles] = useState<Array<{id: string, x: number, y: number, size: number, color: string, animationType: string, speed: number, delay: number, stream: number}>>([])

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = []
      const numParticles = 35
      const numStreams = 4
      
      for (let i = 0; i < numParticles; i++) {
        const stream = Math.floor(Math.random() * numStreams)
        newParticles.push({
          id: `particle-${i}`,
          x: Math.random() * 100,
          y: 40 + (stream * 20) + Math.random() * 20,
          size: Math.random() * 4 + 2,
          color: ['#8b5cf6', '#06b6d4', '#3b82f6', '#f59e0b', '#ec4899'][Math.floor(Math.random() * 5)],
          animationType: Math.random() > 0.5 ? 'riverFlow' : 'streamFlow',
          speed: Math.random() * 4 + 3,
          delay: Math.random() * 3,
          stream
        })
      }
      setParticles(newParticles)
    }
    generateParticles()
  }, [])

  return (
    <div className="absolute left-0 top-1/2 w-full h-[180px] -translate-y-1/2 pointer-events-none z-10">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full blur-sm"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            animation: `${particle.animationType} ${particle.speed}s linear infinite`,
            animationDelay: `${particle.delay}s`,
            zIndex: particle.stream
          }}
        />
      ))}
    </div>
  )
}

export default function UpdriftHeroPreview() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const heroJobs = [
    { company: 'Stripe', role: 'Senior Frontend Engineer', salary: '$160k - $220k', logo: '💳' },
    { company: 'Anthropic', role: 'Product Manager - AI', salary: '$180k - $250k', logo: '🤖' },
    { company: 'Docker', role: 'DevOps Engineer', salary: '$130k - $170k', logo: '🐳' },
    { company: 'Figma', role: 'UX Designer', salary: '$120k - $160k', logo: '🎨' }
  ]

  return (
    <div className="relative min-h-[700px] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Starfield Background */}
      {isClient && <Starfield />}
      
      {/* Dynamic Waves */}
      {isClient && <DynamicWaves />}
      
      {/* River Particles */}
      {isClient && <RiverParticles />}
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Hero Content */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-500/20 text-purple-400 border border-purple-500/30 backdrop-blur-sm">
                Smart Job Matching
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Happy with your
                <span className="block bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  current position?
                </span>
              </h1>
              <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
                UpDrift finds jobs that actually match what you're looking for. No more scrolling through irrelevant listings.
              </p>
            </motion.div>
            
            {/* Search Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-blue-500 rounded-xl blur opacity-30 animate-pulse"></div>
              <div className="relative bg-black/20 backdrop-blur-xl rounded-xl p-4 border border-purple-500/20 shadow-xl">
                <div className="space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="relative">
                      <svg className="absolute left-3 top-3 h-4 w-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <input 
                        placeholder="Job title or keywords"
                        className="pl-10 h-12 text-sm bg-black/30 border-0 rounded-lg focus:ring-2 focus:ring-purple-500/50 text-white placeholder-gray-400 w-full"
                      />
                    </div>
                    <div className="relative">
                      <svg className="absolute left-3 top-3 h-4 w-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <input 
                        placeholder="City, state, or remote"
                        className="pl-10 h-12 text-sm bg-black/30 border-0 rounded-lg focus:ring-2 focus:ring-cyan-500/50 text-white placeholder-gray-400 w-full"
                      />
                    </div>
                  </div>
                  <button 
                    className="w-full h-12 text-sm rounded-lg bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 transform hover:scale-105 transition-all shadow-lg text-white font-medium"
                  >
                    Search Jobs
                  </button>
                </div>
              </div>
            </motion.div>
            
            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-2"
            >
              {['Remote Work', 'Tech Companies', 'High Growth'].map((tag, index) => (
                <span 
                  key={tag} 
                  className="cursor-pointer hover:bg-purple-500/10 transform hover:scale-110 transition-all px-3 py-1 border border-purple-500/30 hover:border-purple-500/50 text-white rounded-full text-sm"
                  style={{
                    animation: `float ${2 + index * 0.5}s ease-in-out infinite`,
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
          
          {/* Right: Floating Job Cards */}
          <div className="relative">
            <div className="space-y-4">
              {heroJobs.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                  className={`transition-all duration-500 hover:scale-105`}
                  style={{
                    animation: `heroCardFloat ${5 + index * 0.5}s ease-in-out infinite`,
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  <div className="bg-black/20 backdrop-blur-xl border border-purple-500/20 shadow-xl hover:shadow-2xl transition-shadow cursor-pointer rounded-lg">
                    <div className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center text-lg backdrop-blur-xl">
                          {job.logo}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-white text-sm">{job.role}</h3>
                          <p className="text-xs text-gray-300">{job.company}</p>
                          <p className="text-xs font-medium text-purple-400">{job.salary}</p>
                        </div>
                        <button 
                          className="text-xs text-gray-400 hover:text-purple-400 transition-colors opacity-60 hover:opacity-100 bg-transparent border-none cursor-pointer"
                        >
                          View →
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes heroCardFloat {
          0%, 100% { transform: translateY(0px); }
          20% { transform: translateY(-3.5px); }
          50% { transform: translateY(2px); }
          80% { transform: translateY(-2.5px); }
        }
        
        @keyframes riverFlow {
          0% { 
            transform: translateX(-20px) translateY(0px);
            opacity: 0;
          }
          8% {
            opacity: 0.9;
          }
          15% {
            transform: translateX(15vw) translateY(-1px);
          }
          35% {
            transform: translateX(35vw) translateY(1px);
          }
          55% {
            transform: translateX(55vw) translateY(-0.5px);
          }
          75% {
            transform: translateX(75vw) translateY(0.5px);
          }
          92% {
            opacity: 0.9;
          }
          100% { 
            transform: translateX(calc(100vw + 20px)) translateY(-1px);
            opacity: 0;
          }
        }
        
        @keyframes streamFlow {
          0% { 
            transform: translateX(-30px) translateY(0px) scaleX(0.3);
            opacity: 0;
          }
          12% {
            opacity: 0.7;
            transform: translateX(5vw) translateY(0px) scaleX(1);
          }
          25% {
            transform: translateX(25vw) translateY(-0.5px) scaleX(1.1);
          }
          50% {
            transform: translateX(50vw) translateY(0px) scaleX(1);
          }
          75% {
            transform: translateX(75vw) translateY(0.5px) scaleX(1.1);
          }
          88% {
            opacity: 0.7;
            transform: translateX(95vw) translateY(0px) scaleX(1);
          }
          100% { 
            transform: translateX(calc(100vw + 30px)) translateY(-0.5px) scaleX(0.3);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
} 