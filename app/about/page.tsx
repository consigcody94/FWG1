'use client'

import { motion } from 'framer-motion'
import { Users, Target, MessageSquare, Award, TrendingUp, Heart, Lightbulb, Zap } from 'lucide-react'
import Link from 'next/link'
import { VideoHero } from '../components/effects/VideoHero'
import { useEffect, useState } from 'react'

export default function AboutPage() {
  const [content, setContent] = useState<any>(null)

  useEffect(() => {
    fetch('/api/pages-content')
      .then(res => res.json())
      .then(data => setContent(data.about))
      .catch(err => console.error('Error loading about content:', err))
  }, [])

  if (!content) {
    return <div className="min-h-screen bg-white">Loading...</div>
  }

  // Icon mapping
  const iconMap: any = {
    TrendingUp, Heart, MessageSquare, Target, Lightbulb, Users, Zap, Award
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section - CMS EDITABLE */}
      <VideoHero videoSrc={content.heroVideo} height="h-[60vh]" loop={false} />

      {/* Company Story - CMS EDITABLE */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-black mb-6 text-slate-900">{content.companyStory.heading}</h2>
              <div className="text-lg text-slate-600 whitespace-pre-line">{content.companyStory.content}</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl text-center">
                <div className="text-5xl font-black text-blue-800 mb-2">20+</div>
                <div className="text-sm font-semibold text-slate-600">Years of Excellence</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl text-center">
                <div className="text-5xl font-black text-purple-600 mb-2">100+</div>
                <div className="text-sm font-semibold text-slate-600">Skilled Professionals</div>
              </div>
              <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-8 rounded-xl text-center">
                <div className="text-5xl font-black text-cyan-600 mb-2">150+</div>
                <div className="text-sm font-semibold text-slate-600">Government Partners</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl text-center">
                <div className="text-5xl font-black text-green-600 mb-2">1000+</div>
                <div className="text-sm font-semibold text-slate-600">Projects Completed</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cultural Pillars - CMS EDITABLE */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black mb-6 text-slate-900">How We Work</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Three core principles guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.culturalPillars.map((pillar: any, index: number) => {
              const IconComponent = iconMap[pillar.icon]
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-700 to-blue-800 rounded-2xl flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black mb-4 text-slate-900">{pillar.title}</h3>
                  <p className="text-slate-600">{pillar.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Core Values - CMS EDITABLE */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black mb-6 text-slate-900">Our Core Values</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Four cornerstones to our success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.coreValues.map((value: any, index: number) => {
              const IconComponent = iconMap[value.icon]
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-10 h-10 text-blue-800" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision - CMS EDITABLE */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-black mb-6">Our Mission</h3>
              <p className="text-xl text-white/90">{content.mission}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-black mb-6">Our Vision</h3>
              <p className="text-xl text-white/90">{content.vision}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Learn More About FWG */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-black mb-6 text-slate-900">Learn More</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Explore our clients, quality commitment, and service offerings
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border border-blue-200 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-3 text-slate-900">Our Clients</h3>
              <p className="text-slate-600 mb-6">
                Trusted by 9 major federal agencies including Department of Commerce, Treasury, DHS, and more.
              </p>
              <Link
                href="/about/our-clients"
                className="inline-block px-6 py-3 bg-blue-800 text-white rounded-full font-semibold hover:bg-blue-900 transition-colors"
              >
                View Client Portfolio →
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl border border-purple-200 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-3 text-slate-900">Commitment to Quality</h3>
              <p className="text-slate-600 mb-6">
                Learn about our three pillars of quality: Assurance, Controls, and Continuous Improvement.
              </p>
              <Link
                href="/about/commitment-to-quality"
                className="inline-block px-6 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition-colors"
              >
                Explore Our Quality →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-black mb-6">Join Our Team</h2>
            <p className="text-xl text-white/90 mb-8">
              Looking for a place where you can put your creativity and experience to work? We're seeking dynamic and skilled professionals to join our team.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/careers"
                className="inline-block px-8 py-4 bg-white text-blue-800 rounded-full font-bold text-lg hover:bg-slate-100 transition-all hover:shadow-lg hover:scale-105"
              >
                View Career Opportunities
              </Link>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
