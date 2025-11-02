'use client'

import Image from 'next/image'
import Link from 'next/link'
import { AnimatedSection } from '../ui/AnimatedSection'
import { Container } from '../ui/Container'
import { motion } from 'framer-motion'

interface ClientsLogosBlockProps {
  data: {
    heading?: string
    description?: string
    logos?: Array<{
      name: string
      logo: string
      url?: string
    }>
    displayStyle?: 'grid' | 'marquee'
    columns?: number
    logoSize?: 'sm' | 'md' | 'lg'
    grayscale?: boolean
    backgroundColor?: any
    padding?: 'sm' | 'md' | 'lg' | 'xl'
  }
}

export function ClientsLogosBlock({ data }: ClientsLogosBlockProps) {
  if (!data.logos || data.logos.length === 0) return null

  const bgColor = data.backgroundColor?.hex || data.backgroundColor
  const sizeClasses = {
    sm: 'h-12',
    md: 'h-16',
    lg: 'h-24',
  }

  const LogoItem = ({ logo }: { logo: any }) => {
    const logoImage = (
      <div className="relative w-full h-full flex items-center justify-center p-4">
        <Image
          src={logo.logo}
          alt={logo.name}
          width={200}
          height={100}
          className={`${sizeClasses[data.logoSize || 'md']} w-auto object-contain transition-all duration-300 ${
            data.grayscale ? 'grayscale hover:grayscale-0 opacity-70 hover:opacity-100' : ''
          }`}
        />
      </div>
    )

    if (logo.url) {
      return (
        <motion.a
          href={logo.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="block"
        >
          {logoImage}
        </motion.a>
      )
    }

    return logoImage
  }

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: bgColor }}>
      <Container width="standard" padding={data.padding || 'md'}>
        {(data.heading || data.description) && (
          <AnimatedSection animation="fade" className="text-center mb-12">
            {data.heading && (
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{data.heading}</h2>
            )}
            {data.description && (
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">{data.description}</p>
            )}
          </AnimatedSection>
        )}

        {data.displayStyle === 'marquee' ? (
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-12"
              animate={{ x: [0, -1920] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {/* Duplicate logos for seamless loop */}
              {[...data.logos, ...data.logos].map((logo, index) => (
                <div key={index} className="flex-shrink-0">
                  <LogoItem logo={logo} />
                </div>
              ))}
            </motion.div>
          </div>
        ) : (
          <AnimatedSection animation="fade" stagger>
            <div
              className="grid gap-8"
              style={{
                gridTemplateColumns: `repeat(${data.columns || 4}, minmax(0, 1fr))`,
              }}
            >
              {data.logos.map((logo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <LogoItem logo={logo} />
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        )}
      </Container>
    </section>
  )
}
