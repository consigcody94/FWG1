'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

interface VideoHeroProps {
  videoSrc: string
  title?: string
  subtitle?: string
  badge?: string
  primaryCTA?: { text: string; link: string }
  secondaryCTA?: { text: string; link: string }
}

export function VideoHero({
  videoSrc,
  title,
  subtitle,
  badge,
  primaryCTA,
  secondaryCTA,
}: VideoHeroProps) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      {(title || subtitle || badge || primaryCTA || secondaryCTA) && (
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Badge */}
            {badge && (
              <motion.div
                className="inline-block mb-8 px-6 py-3 bg-gradient-to-r from-blue-900/30 to-purple-600/30 backdrop-blur-md border border-blue-700/50 rounded-full"
                whileHover={{ scale: 1.05, borderColor: 'rgba(59, 130, 246, 0.8)' }}
              >
                <span className="text-sm font-bold tracking-wider text-blue-300">
                  {badge}
                </span>
              </motion.div>
            )}

            {/* Title */}
            {title && (
              <h1 className="text-7xl md:text-9xl font-black mb-6 gradient-text-animated leading-none drop-shadow-2xl">
                {title}
              </h1>
            )}

            {/* Subtitle */}
            {subtitle && (
              <p className="text-2xl md:text-4xl mb-12 text-white max-w-4xl mx-auto text-glow-blue font-light drop-shadow-lg">
                {subtitle}
              </p>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              {primaryCTA && (
                <Link href={primaryCTA.link}>
                  <motion.div
                    className="group px-10 py-5 bg-gradient-to-r from-blue-900 to-blue-900 rounded-full font-bold text-lg hover-glow flex items-center gap-3 cursor-pointer shadow-2xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {primaryCTA.text}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                </Link>
              )}
              {secondaryCTA && (
                <Link href={secondaryCTA.link}>
                  <motion.div
                    className="px-10 py-5 bg-white/10 backdrop-blur-md border border-white/30 rounded-full font-bold text-lg hover-lift cursor-pointer shadow-2xl"
                    whileHover={{ scale: 1.05, borderColor: 'rgba(255, 255, 255, 0.5)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {secondaryCTA.text}
                  </motion.div>
                </Link>
              )}
            </div>
          </motion.div>
        </div>
      )}

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-blue-700/50 rounded-full flex justify-center p-2 backdrop-blur-sm">
          <motion.div
            className="w-1 h-2 bg-blue-700 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}
