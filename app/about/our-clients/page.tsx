'use client'

import { motion } from 'framer-motion'
import { Building2, CheckCircle, Award, Shield } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function OurClientsPage() {
  const [content, setContent] = useState<any>(null)

  useEffect(() => {
    fetch('/api/pages-content')
      .then(res => res.json())
      .then(data => setContent(data.ourClients))
      .catch(err => console.error('Error loading our-clients content:', err))
  }, [])

  if (!content) {
    return <div className="min-h-screen bg-white">Loading...</div>
  }

  const iconMap: any = {
    Award,
    Building2,
    CheckCircle,
    Shield
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Client Grid - CMS EDITABLE */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-black mb-6 text-slate-900">{content.heroTitle}</h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-12">
              {content.heroSubtitle}
            </p>
          </motion.div>

          <div className="mb-20">
            <h2 className="text-3xl font-black text-center mb-4 text-slate-900">{content.heading}</h2>
            <p className="text-xl text-slate-600 text-center mb-12">{content.subtitle}</p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {content.clients.map((client: any, index: number) => (
                <motion.div
                  key={client.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white border-2 border-slate-200 rounded-xl p-8 hover:border-blue-800 hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center text-center"
                >
                  <div className="relative w-24 h-24 mb-4">
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1">{client.abbreviation}</h3>
                  <p className="text-sm text-slate-600">{client.website}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements - CMS EDITABLE */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.achievements.map((achievement: any, index: number) => {
              const IconComponent = iconMap[achievement.icon]
              return (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200 text-center"
                >
                  <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-black text-blue-800 mb-2">{achievement.title}</h3>
                  <p className="text-slate-700 font-semibold">{achievement.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
