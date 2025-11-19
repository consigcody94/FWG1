'use client'

import { motion } from 'framer-motion'
import { Award, Users, Target, Lightbulb, TrendingUp, MessageCircle, Shield, Zap } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function WhyFWGPage() {
  const [content, setContent] = useState<any>(null)

  useEffect(() => {
    fetch('/api/pages-content')
      .then(res => res.json())
      .then(data => setContent(data.whyFwg))
      .catch(err => console.error('Error loading why-fwg content:', err))
  }, [])

  if (!content) {
    return <div className="min-h-screen bg-white">Loading...</div>
  }

  // Icon mapping
  const iconMap: any = {
    Award,
    Users,
    Target,
    Lightbulb,
    TrendingUp,
    MessageCircle,
    Shield,
    Zap
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section - CMS EDITABLE */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-6">
              {content.heroBadge}
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6">{content.heroTitle}</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              {content.heroSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Differentiators - CMS EDITABLE */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black mb-6 text-slate-900">{content.differentiatorsHeading}</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {content.differentiatorsSubtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.differentiators.map((item: any, index: number) => {
              const IconComponent = iconMap[item.icon]
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="bg-white border-2 border-slate-200 rounded-xl p-8 hover:border-blue-800 hover:shadow-2xl transition-all duration-300 h-full">
                    <div className="flex items-start gap-6">
                      <div className="p-4 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex-shrink-0">
                        <IconComponent className="w-8 h-8 text-blue-800" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-3 text-slate-900">{item.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Proven Track Record - CMS EDITABLE */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black mb-6 text-slate-900">{content.trackRecordHeading}</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {content.trackRecordSubtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.trackRecord.map((item: any, index: number) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg text-center"
              >
                <div className="text-5xl font-black text-blue-800 mb-3">{item.metric}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.label}</h3>
                <p className="text-slate-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer-First Approach - CMS EDITABLE */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black mb-6 text-slate-900">{content.customerFirstHeading}</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {content.customerFirstSubtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.customerFirst.map((item: any, index: number) => {
              const IconComponent = iconMap[item.icon]
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200 h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-700 to-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-slate-900 text-center">{item.title}</h3>
                    <p className="text-slate-600 text-center leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Innovation & Excellence - CMS EDITABLE */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black mb-6 text-slate-900">{content.innovationHeading}</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {content.innovationSubtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.innovation.map((item: any, index: number) => {
              const IconComponent = iconMap[item.icon]
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="bg-white border-2 border-slate-200 rounded-xl p-8 hover:border-blue-800 hover:shadow-2xl transition-all duration-300 h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mb-6">
                      <IconComponent className="w-8 h-8 text-blue-800" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-slate-900">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              )
            })}
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
