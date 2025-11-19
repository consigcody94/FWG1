'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function TermsOfServicePage() {
  const [content, setContent] = useState<any>(null)

  useEffect(() => {
    fetch('/api/pages-content')
      .then(res => res.json())
      .then(data => setContent(data.terms))
      .catch(err => console.error('Error loading terms content:', err))
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
            <h1 className="text-5xl md:text-6xl font-black mb-6">{content.title}</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Please read these terms carefully before using our website and services.
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
            <p className="text-slate-600 mb-6">
              <strong>Last Updated:</strong> {content.lastUpdated}
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Introduction</h2>
            <p className="text-slate-600 mb-6 whitespace-pre-line">
              {content.introduction}
            </p>

            {/* Dynamic Sections from CMS */}
            {content.sections.map((section: any, index: number) => (
              <div key={index}>
                <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">{section.heading}</h2>
                <p className="text-slate-600 mb-6 whitespace-pre-line">
                  {section.content}
                </p>
              </div>
            ))}

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Contact Information</h2>
            <p className="text-slate-600 mb-6">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-slate-50 p-6 rounded-xl">
              <p className="text-slate-900 font-semibold">Federal Working Group</p>
              <p className="text-slate-600">1968 S. Coast Hwy #3479</p>
              <p className="text-slate-600">Laguna Beach, CA 92651</p>
              <p className="text-slate-600 mt-2">Email: info@federalworkinggroup.com</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
