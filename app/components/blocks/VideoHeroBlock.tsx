'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatedSection } from '../ui/AnimatedSection'
import { Button } from '../ui/Button'
import { ArrowRight, Play } from 'lucide-react'

interface VideoHeroBlockProps {
  data: {
    title?: string
    subtitle?: string
    videoUrl?: string
    videoFile?: { asset: { url: string } }
    fallbackImage?: string
    overlayOpacity?: number
    primaryButton?: { text: string; link: string }
    secondaryButton?: { text: string; link: string }
    height?: string
    autoPlay?: boolean
    loop?: boolean
    muted?: boolean
    disableOnMobile?: boolean
  }
}

export function VideoHeroBlock({ data }: VideoHeroBlockProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const videoSrc = data.videoFile?.asset?.url || data.videoUrl
  const showVideo = videoSrc && !(isMobile && data.disableOnMobile)
  const overlayOpacity = (data.overlayOpacity || 50) / 100
  const height = data.height === 'auto' ? 'min-h-screen' : `h-[${data.height}]`

  return (
    <section className={`relative ${height} flex items-center justify-center overflow-hidden`}>
      {/* Background Video or Image */}
      {showVideo ? (
        <>
          <video
            ref={videoRef}
            autoPlay={data.autoPlay}
            loop={data.loop}
            muted={data.muted}
            playsInline
            preload="metadata"
            poster={data.fallbackImage}
            onLoadedData={() => setIsVideoLoaded(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              isVideoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            aria-label={data.title ? `${data.title} background video` : 'Background video'}
          >
            {videoSrc && <source src={videoSrc} type="video/mp4" />}
            Your browser does not support the video tag.
          </video>
          {data.fallbackImage && (
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${data.fallbackImage})`,
                opacity: isVideoLoaded ? 0 : 1,
              }}
            />
          )}
        </>
      ) : (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${data.fallbackImage})` }}
        />
      )}

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-800"
        style={{ opacity: overlayOpacity }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
        <AnimatedSection animation="fade" delay={0.2}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {data.title || 'Welcome'}
          </h1>
        </AnimatedSection>

        {data.subtitle && (
          <AnimatedSection animation="fade" delay={0.4}>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90">
              {data.subtitle}
            </p>
          </AnimatedSection>
        )}

        <AnimatedSection animation="fade" delay={0.6}>
          <div className="flex flex-wrap gap-4 justify-center">
            {data.primaryButton?.text && data.primaryButton?.link && (
              <Button
                href={data.primaryButton.link}
                variant="solid"
                size="lg"
                icon={ArrowRight}
              >
                {data.primaryButton.text}
              </Button>
            )}
            {data.secondaryButton?.text && data.secondaryButton?.link && (
              <Button
                href={data.secondaryButton.link}
                variant="outline"
                size="lg"
              >
                {data.secondaryButton.text}
              </Button>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
