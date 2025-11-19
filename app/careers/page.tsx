'use client'

import { motion } from 'framer-motion'
import { Briefcase, Heart, Users, TrendingUp, Award, Gift, DollarSign, GraduationCap } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function CareersPage() {
  const [content, setContent] = useState<any>(null)

  useEffect(() => {
    fetch('/api/pages-content')
      .then(res => res.json())
      .then(data => setContent(data.careers))
      .catch(err => console.error('Error loading careers content:', err))
  }, [])

  if (!content) {
    return <div className="min-h-screen bg-white">Loading...</div>
  }

  // Icon mapping
  const iconMap: any = {
    Heart,
    DollarSign,
    GraduationCap,
    Gift,
    TrendingUp,
    Users,
    Award,
    Briefcase
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
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              {content.heroSubtitle}
            </p>
            <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full">
              <span className="text-sm font-bold tracking-wider">{content.heroBadge}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Work Here - CMS EDITABLE */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black mb-6 text-slate-900">{content.whyFwgHeading}</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {content.whyFwgSubtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.culture.map((item: any, index: number) => {
              const IconComponent = iconMap[item.icon]
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-700 to-blue-800 rounded-2xl flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black mb-4 text-slate-900">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits - CMS EDITABLE */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black mb-6 text-slate-900">{content.benefitsHeading}</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {content.benefitsSubtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.benefits.map((benefit: any, index: number) => {
              const IconComponent = iconMap[benefit.icon]
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/90 backdrop-blur-xl p-6 rounded-xl shadow-lg text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-blue-800" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-slate-900">{benefit.title}</h3>
                  <p className="text-sm text-slate-600">{benefit.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Current Openings CTA - CMS EDITABLE */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-12 border border-blue-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-20 h-20 bg-blue-800 rounded-2xl flex items-center justify-center mb-6">
                  <Briefcase className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl font-black mb-4 text-slate-900">{content.openingsHeading}</h2>
                <p className="text-lg text-slate-600 mb-6">
                  {content.openingsSubtitle}
                </p>
                <div className="space-y-4">
                  {content.openingsList.map((opening: string, index: number) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-800 rounded-full"></div>
                      <span className="text-slate-700">{opening}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-4 text-slate-900">{content.applicationHeading}</h3>
                <p className="text-slate-600 mb-6">
                  {content.applicationSubtitle}
                </p>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Email Your Resume To:</label>
                    <Link
                      href={`mailto:${content.applicationEmail}`}
                      className="text-blue-800 hover:text-blue-800 font-semibold text-lg"
                    >
                      {content.applicationEmail}
                    </Link>
                  </div>
                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-sm text-slate-600">
                      {content.applicationNote}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Employee Portal Link - CMS EDITABLE */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-black mb-6">{content.employeePortalHeading}</h2>
            <p className="text-xl text-white/90 mb-8">
              {content.employeePortalSubtitle}
            </p>
            <Link
              href="/employee-portal"
              className="inline-block px-8 py-4 bg-white text-blue-800 rounded-full font-bold text-lg hover:bg-slate-100 transition-all hover:shadow-lg hover:scale-105"
            >
              Access Employee Portal
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
