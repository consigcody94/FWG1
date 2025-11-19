'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Cloud, Network, Shield, CheckCircle, Award } from 'lucide-react'
import Link from 'next/link'
import { GlassCard } from '../components/ui/GlassCard'
import { useEffect, useState } from 'react'

export default function ServicesPage() {
  const [content, setContent] = useState<any>(null)

  useEffect(() => {
    fetch('/api/pages-content')
      .then(res => res.json())
      .then(data => setContent(data.services))
      .catch(err => console.error('Error loading services content:', err))
  }, [])

  if (!content) {
    return <div className="min-h-screen bg-white">Loading...</div>
  }

  // Icon mapping
  const iconMap: any = {
    TrendingUp,
    Cloud,
    Network,
    Shield,
    CheckCircle,
    Award
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section with Video Background - CMS EDITABLE */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={content.heroVideo} type="video/mp4" />
          </video>
          {/* Frosted Glass Effect */}
          <div className="absolute inset-0 backdrop-blur-[8px] bg-white/20" />
          {/* Dark Overlay with Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-black mb-6 text-white">{content.heroTitle}</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              {content.heroSubtitle}
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              {content.heroBadges.map((badge: string, index: number) => (
                <div key={index} className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                  {badge}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Differentiators - CMS EDITABLE */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-black mb-4 text-slate-900">{content.whyFwgHeading}</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {content.whyFwgSubtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.differentiators.map((item: any, index: number) => {
              const IconComponent = iconMap[item.icon]
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * (index + 1) }}
                  className="bg-white p-8 rounded-xl shadow-lg"
                >
                  <div className="w-12 h-12 bg-blue-800 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-slate-900">{item.stat}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Detail - CMS EDITABLE */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {content.servicesList.map((service: any, index: number) => {
              const IconComponent = iconMap[service.icon]
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <GlassCard glow className="overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <div className="flex items-center gap-4 mb-6">
                          <div className={`p-4 bg-gradient-to-br from-${service.color}-500/20 to-${service.color}-600/20 rounded-2xl`}>
                            <IconComponent className={`w-10 h-10 text-${service.color}-600`} />
                          </div>
                          <h3 className="text-3xl font-black text-slate-900">{service.title}</h3>
                        </div>
                        <p className="text-lg text-slate-600 mb-6">{service.description}</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-4">Key Capabilities:</h4>
                        <ul className="space-y-3">
                          {service.features.map((feature: string) => (
                            <li key={feature} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-blue-800 flex-shrink-0 mt-0.5" />
                              <span className="text-slate-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Culture & Approach - CMS EDITABLE */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-black mb-6 text-slate-900">{content.approachHeading}</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {content.approachSubtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.approachCards.map((card: any, index: number) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-4 text-slate-900">{card.title}</h3>
                <p className="text-slate-600 mb-4">
                  {card.description}
                </p>
                <ul className="space-y-2 text-slate-600">
                  {card.items.map((item: string, i: number) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - CMS EDITABLE */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-black mb-6">{content.ctaHeading}</h2>
            <p className="text-xl text-white/90 mb-8">
              {content.ctaSubtitle}
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href={content.ctaButton1Link}
                className="inline-block px-8 py-4 bg-white text-blue-800 rounded-full font-bold text-lg hover:bg-slate-100 transition-all hover:shadow-lg hover:scale-105"
              >
                {content.ctaButton1Text}
              </Link>
              <Link
                href={content.ctaButton2Link}
                className="inline-block px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all"
              >
                {content.ctaButton2Text}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
