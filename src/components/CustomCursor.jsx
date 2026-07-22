import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 })
  const [isHovered, setIsHovered] = useState(false)
  const [isPointer, setIsPointer] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (shouldReduceMotion) return

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })

      // Check if target or parent is interactive
      const target = e.target
      const isInteractive = target.closest('a, button, input, [role="button"], .group, .cursor-pointer')
      setIsHovered(!!isInteractive)
    }

    window.addEventListener('mousemove', updateMousePosition)
    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [shouldReduceMotion])

  if (shouldReduceMotion) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden hidden md:block">
      {/* Central Camera Crosshair Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-accent-primary shadow-glow-primary pointer-events-none -translate-x-1/2 -translate-y-1/2"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isHovered ? 1.5 : 1,
          backgroundColor: isHovered ? '#FFC94D' : '#FF3D6E',
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.1 }}
      />

      {/* Outer Viewfinder Ring & Ticks */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-accent-primary/60 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isHovered ? 1.6 : 1,
          rotate: isHovered ? 45 : 0,
          borderColor: isHovered ? 'rgba(255, 201, 77, 0.8)' : 'rgba(255, 61, 110, 0.5)',
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 20, mass: 0.2 }}
      >
        {/* Crosshair corner tick marks */}
        <div className="absolute -top-1 w-1 h-1 bg-accent-primary" />
        <div className="absolute -bottom-1 w-1 h-1 bg-accent-primary" />
        <div className="absolute -left-1 w-1 h-1 bg-accent-primary" />
        <div className="absolute -right-1 w-1 h-1 bg-accent-primary" />
      </motion.div>
    </div>
  )
}
