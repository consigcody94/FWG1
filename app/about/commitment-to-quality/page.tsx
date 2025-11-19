'use client'

import { motion } from 'framer-motion'
import { Shield, Target, TrendingUp, Users, CheckCircle, BarChart3 } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function CommitmentToQualityPage() {
  const [content, setContent] = useState<any>(null)

  useEffect(() => {
    fetch('/api/pages-content')
      .then(res => res.json())
      .then(data => setContent(data.commitmentToQuality))
      .catch(err => console.error('Error loading commitment-to-quality content:', err))
  }, [])

  if (!content) {
    return <div className="min-h-screen bg-white">Loading...</div>
  }

  const iconMap: any = {
    CheckCircle,
    Shield,
    TrendingUp,
    Users,
    Target,
    BarChart3
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section - CMS EDITABLE */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-black mb-6">{content.heroTitle}</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              {content.heroSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Three Pillars - CMS EDITABLE */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black mb-6 text-slate-900">{content.pillarsHeading}</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {content.pillarsSubtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.pillars.map((pillar: any, index: number) => {
              const IconComponent = iconMap[pillar.icon]
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white border-2 border-slate-200 rounded-xl p-8 hover:border-blue-800 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-blue-800" />
                  </div>
                  <h3 className="text-2xl font-black mb-4 text-slate-900">{pillar.title}</h3>
                  <p className="text-slate-600 mb-6">{pillar.description}</p>
                  <ul className="space-y-3">
                    {pillar.features.map((feature: string, i: number) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-800 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quality Focus Areas - CMS EDITABLE */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black mb-6 text-slate-900">{content.securityHeading}</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {content.securitySubtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.securityFocus.map((item: any, index: number) => {
              const IconComponent = iconMap[item.icon]
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 shadow-lg"
                >
                  <div className="flex items-start gap-6">
                    <div className="p-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex-shrink-0">
                      <IconComponent className="w-8 h-8 text-blue-800" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-slate-900">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
