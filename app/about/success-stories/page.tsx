'use client'

import { motion } from 'framer-motion'
import { Award, TrendingUp, Users, Shield } from 'lucide-react'
import { SuccessStoriesBlock } from '../../components/blocks/SuccessStoriesBlock'
import { useEffect, useState } from 'react'

export default function SuccessStoriesPage() {
  const [content, setContent] = useState<any>(null)

  useEffect(() => {
    fetch('/api/pages-content')
      .then(res => res.json())
      .then(data => setContent(data.successStories))
      .catch(err => console.error('Error loading success-stories content:', err))
  }, [])

  if (!content) {
    return <div className="min-h-screen bg-white">Loading...</div>
  }

  const iconMap: any = {
    Award,
    TrendingUp,
    Users,
    Shield
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section - CMS EDITABLE */}
      <section className="relative bg-gradient-to-br from-purple-600 to-blue-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-6">
              <Award className="w-4 h-4" />
              {content.heroBadge}
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6">{content.heroTitle}</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              {content.heroSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Overview - CMS EDITABLE */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black mb-6 text-slate-900">{content.impactHeading}</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {content.impactSubtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.impactMetrics.map((item: any, index: number) => {
              const IconComponent = iconMap[item.icon]
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 shadow-lg text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-black text-slate-900 mb-2">{item.metric}</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.label}</h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Success Stories List - From Markdown CMS */}
      <SuccessStoriesBlock />
    </div>
  )
}
