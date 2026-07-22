import { useState, useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export default function TiltCard({ children, className = '', maxTilt = 12, ...props }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0, scale: 1 })
  const cardRef = useRef(null)
  const shouldReduceMotion = useReducedMotion()

  const handleMouseMove = (e) => {
    if (shouldReduceMotion || !cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    // Calculate position from -1 to 1 relative to center
    const xPct = (mouseX / width - 0.5) * 2
    const yPct = (mouseY / height - 0.5) * 2

    // rotateX is inverted relative to mouse Y
    const rotateX = -yPct * maxTilt
    const rotateY = xPct * maxTilt

    setTilt({ x: rotateX, y: rotateY, scale: 1.02 })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, scale: 1 })
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: tilt.x,
        rotateY: tilt.y,
        scale: tilt.scale,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
