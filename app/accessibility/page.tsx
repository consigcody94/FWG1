'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function AccessibilityPage() {
  const [content, setContent] = useState<any>(null)

  useEffect(() => {
    fetch('/api/pages-content')
      .then(res => res.json())
      .then(data => setContent(data.accessibility))
      .catch(err => console.error('Error loading accessibility content:', err))
  }, [])

  if (!content) {
    return <div className="min-h-screen bg-white">Loading...</div>
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

      {/* Content Section - CMS EDITABLE */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto prose prose-slate prose-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {content.sections.map((section: any, index: number) => (
              <div key={index} className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">{section.heading}</h2>
                <p className="text-slate-600 mb-6 whitespace-pre-line leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}

            <div className="bg-slate-50 p-6 rounded-xl mt-12">
              <p className="text-slate-900 font-semibold">Federal Working Group</p>
              <p className="text-slate-600">1968 S. Coast Hwy #3479</p>
              <p className="text-slate-600">Laguna Beach, CA 92651</p>
              <p className="text-slate-600 mt-2">Email: info@federalworkinggroup.com</p>
              <Link href="/contact" className="inline-block mt-4 px-6 py-3 bg-blue-800 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
