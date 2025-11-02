'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { AnimatedSection } from '../ui/AnimatedSection'
import { Container } from '../ui/Container'
import * as Icons from 'lucide-react'

interface CapabilitiesMatrixBlockProps {
  data: {
    heading?: string
    description?: string
    capabilities?: Array<{
      title: string
      description?: string
      icon?: string
      stat?: string
      link?: string
    }>
    layout?: '2' | '3' | '4'
    hoverEffect?: 'lift' | 'glow' | 'scale'
    cardStyle?: 'solid' | 'gradient' | 'glass'
    backgroundColor?: any
    padding?: 'sm' | 'md' | 'lg' | 'xl'
  }
}

export function CapabilitiesMatrixBlock({ data }: CapabilitiesMatrixBlockProps) {
  if (!data.capabilities || data.capabilities.length === 0) return null

  const bgColor = data.backgroundColor?.hex || data.backgroundColor
  const gridCols = {
    '2': 'grid-cols-1 md:grid-cols-2',
    '3': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    '4': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  }

  const cardStyles = {
    solid: 'bg-white border border-slate-200',
    gradient: 'bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200',
    glass: 'bg-white/10 backdrop-blur-lg border border-white/20',
  }

  const hoverEffects = {
    lift: 'hover:-translate-y-2 hover:shadow-xl',
    glow: 'hover:shadow-lg hover:shadow-blue-500/50',
    scale: 'hover:scale-105',
  }

  const getIcon = (iconName?: string) => {
    if (!iconName) return Icons.Box
    const Icon = (Icons as any)[iconName] || Icons.Box
    return Icon
  }

  const CapabilityCard = ({ capability, index }: { capability: any; index: number }) => {
    const Icon = getIcon(capability.icon)

    const card = (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className={`
          p-8 rounded-2xl transition-all duration-300
          ${cardStyles[data.cardStyle || 'solid']}
          ${hoverEffects[data.hoverEffect || 'lift']}
          ${capability.link ? 'cursor-pointer' : ''}
        `}
      >
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-600 text-white flex items-center justify-center">
            <Icon className="w-6 h-6" />
          </div>
          <div className="flex-1">
            {capability.stat && (
              <div className="text-sm font-semibold text-blue-600 mb-1">
                {capability.stat}
              </div>
            )}
            <h3 className="text-xl font-bold mb-2">{capability.title}</h3>
            {capability.description && (
              <p className="text-slate-600 text-sm leading-relaxed">
                {capability.description}
              </p>
            )}
          </div>
        </div>
      </motion.div>
    )

    if (capability.link) {
      return (
        <Link href={capability.link} className="block">
          {card}
        </Link>
      )
    }

    return card
  }

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: bgColor }}>
      <Container width="standard" padding={data.padding || 'lg'}>
        {(data.heading || data.description) && (
          <AnimatedSection animation="fade" className="text-center mb-12">
            {data.heading && (
              <h2 className="text-3xl md:text-5xl font-bold mb-4">{data.heading}</h2>
            )}
            {data.description && (
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">{data.description}</p>
            )}
          </AnimatedSection>
        )}

        <div className={`grid gap-6 ${gridCols[data.layout || '3']}`}>
          {data.capabilities.map((capability, index) => (
            <CapabilityCard key={index} capability={capability} index={index} />
          ))}
        </div>
      </Container>
    </section>
  )
}
