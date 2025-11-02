'use client'

import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { AnimatedSection } from "../ui/AnimatedSection"
import { Container } from "../ui/Container"
import * as Icons from 'lucide-react'

interface StatsBlockProps {
  data: {
    items?: Array<{
      value?: string
      label?: string
      prefix?: string
      suffix?: string
      subtext?: string
      icon?: string
    }>
    layout?: 'horizontal' | 'grid'
    animated?: boolean
    showSeparators?: boolean
    backgroundColor?: any
  }
}

function useCountUp(end: number, duration: number = 2000, shouldStart: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!shouldStart) return

    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }
    requestAnimationFrame(step)
  }, [end, duration, shouldStart])

  return count
}

export function StatsBlock({ data }: StatsBlockProps) {
  if (!data.items || data.items.length === 0) return null

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })
  const bgColor = data.backgroundColor?.hex || data.backgroundColor

  const getIcon = (iconName?: string) => {
    if (!iconName) return null
    const Icon = (Icons as any)[iconName]
    return Icon ? <Icon className="w-8 h-8 mb-3 text-blue-600" /> : null
  }

  const StatItem = ({ stat, index }: { stat: any; index: number }) => {
    const numericValue = parseInt(stat.value?.replace(/[^0-9]/g, '') || '0')
    const animatedValue = useCountUp(numericValue, 2000, inView && data.animated !== false)
    const displayValue = data.animated !== false ? animatedValue : stat.value

    return (
      <div className={`text-center ${data.showSeparators && index !== 0 ? 'border-l border-slate-300 pl-8' : ''}`}>
        {getIcon(stat.icon)}
        <div className="text-5xl font-bold text-blue-600 mb-2">
          {stat.prefix}{displayValue}{stat.suffix}
        </div>
        <div className="text-lg font-medium text-slate-700 mb-1">{stat.label}</div>
        {stat.subtext && (
          <div className="text-sm text-slate-500">{stat.subtext}</div>
        )}
      </div>
    )
  }

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: bgColor }} ref={ref}>
      <Container width="standard" padding="md">
        <AnimatedSection animation="fade" stagger>
          <div className={`
            ${data.layout === 'horizontal'
              ? 'flex flex-wrap justify-around gap-8'
              : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'
            }
          `}>
            {data.items.map((stat, index) => (
              <StatItem key={index} stat={stat} index={index} />
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  )
}
