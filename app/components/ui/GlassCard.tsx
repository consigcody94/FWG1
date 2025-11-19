'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
}

export function GlassCard({ children, className = '', hover = true, glow = false }: GlassCardProps) {
  return (
    <motion.div
      className={`
        relative
        bg-white/80
        backdrop-blur-2xl
        border border-white/40
        rounded-2xl
        p-8
        shadow-2xl
        ${glow ? 'shadow-blue-800/20' : ''}
        ${className}
      `}
      whileHover={
        hover
          ? {
              y: -8,
              scale: 1.02,
              borderColor: 'rgba(30, 58, 138, 0.6)',
              boxShadow: glow
                ? '0 25px 50px -12px rgba(30, 58, 138, 0.4), 0 0 30px rgba(30, 58, 138, 0.3)'
                : '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            }
          : {}
      }
      transition={{
        duration: 0.3,
        ease: 'easeOut',
      }}
    >
      {/* Inner glow effect */}
      {glow && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-800/10 via-transparent to-purple-500/10 pointer-events-none" />
      )}

      {children}
    </motion.div>
  )
}
