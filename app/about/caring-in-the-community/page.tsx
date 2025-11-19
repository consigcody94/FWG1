'use client'

import { motion } from 'framer-motion'
import { Heart, Users, TreePine, Handshake, Gift, Target } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function CaringInTheCommunityPage() {
  const [content, setContent] = useState<any>(null)

  useEffect(() => {
    fetch('/api/pages-content')
      .then(res => res.json())
      .then(data => setContent(data.caringInCommunity))
      .catch(err => console.error('Error loading caring-in-community content:', err))
  }, [])

  if (!content) {
    return <div className="min-h-screen bg-white">Loading...</div>
  }

  const iconMap: any = {
    Heart,
    Users,
    TreePine,
    Handshake,
    Gift,
    Target
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section - CMS EDITABLE */}
      <section className="relative bg-gradient-to-br from-green-600 to-blue-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-6">
              <Heart className="w-4 h-4" />
              {content.heroBadge}
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6">{content.heroTitle}</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              {content.heroSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Community Partnerships - CMS EDITABLE */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black mb-6 text-slate-900">{content.partnershipsHeading}</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {content.partnershipsSubtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.partnerships.map((item: any, index: number) => {
              const IconComponent = iconMap[item.icon]
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white border-2 border-slate-200 rounded-xl p-8 hover:border-green-600 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Environmental Responsibility - CMS EDITABLE */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black mb-6 text-slate-900">{content.environmentalHeading}</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {content.environmentalSubtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.environmental.map((item: any, index: number) => {
              const IconComponent = iconMap[item.icon]
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8 border border-green-200"
                >
                  <div className="flex items-start gap-6">
                    <div className="p-4 bg-green-600 rounded-2xl flex-shrink-0">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-slate-900">{item.title}</h3>
                      <p className="text-slate-700">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Employee Engagement - CMS EDITABLE */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black mb-6 text-slate-900">{content.engagementHeading}</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {content.engagementSubtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.engagement.map((item: any, index: number) => {
              const IconComponent = iconMap[item.icon]
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-700 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-slate-900 text-center">{item.title}</h3>
                  <p className="text-slate-600 text-center">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
