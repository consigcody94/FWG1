'use client'

import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, Clock } from 'lucide-react'
import Link from 'next/link'
import { ContactForm } from '../components/contact-form'
import { useEffect, useState } from 'react'

export default function ContactPage() {
  const [content, setContent] = useState<any>(null)

  useEffect(() => {
    fetch('/api/pages-content')
      .then(res => res.json())
      .then(data => setContent(data.contact))
      .catch(err => console.error('Error loading contact content:', err))
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

      {/* Contact Information & Map - CMS EDITABLE */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-black mb-8 text-slate-900">Contact Information</h2>
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                  <div className="p-3 bg-blue-800 rounded-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Office Location</h3>
                    <p className="text-slate-600">
                      {content.address}<br />
                      {content.city}, {content.state} {content.zip}
                    </p>
                    <Link
                      href={`https://maps.google.com/?q=${encodeURIComponent(content.address + ' ' + content.city + ' ' + content.state + ' ' + content.zip)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-blue-800 hover:text-blue-800 font-semibold"
                    >
                      Get Directions →
                    </Link>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                  <div className="p-3 bg-blue-800 rounded-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Email</h3>
                    <Link
                      href={`mailto:${content.email}`}
                      className="text-slate-600 hover:text-blue-800 transition-colors"
                    >
                      {content.email}
                    </Link>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                  <div className="p-3 bg-blue-800 rounded-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Phone</h3>
                    <Link
                      href={`tel:${content.phone.replace(/[^0-9]/g, '')}`}
                      className="text-slate-600 hover:text-blue-800 transition-colors"
                    >
                      {content.phone}
                    </Link>
                  </div>
                </div>

                {/* Business Hours - CMS EDITABLE */}
                <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                  <div className="p-3 bg-blue-800 rounded-lg">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Business Hours</h3>
                    <p className="text-slate-600 whitespace-pre-line">
                      {content.businessHours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Employee Portal Link */}
              <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                <h3 className="font-bold text-slate-900 mb-2">Current Employees</h3>
                <p className="text-slate-600 mb-4">
                  Access employee resources, webmail, and time tracking systems.
                </p>
                <Link
                  href="/employee-portal"
                  className="inline-block px-6 py-3 bg-blue-800 text-white rounded-full font-semibold hover:bg-blue-800 transition-colors"
                >
                  Access Employee Portal
                </Link>
              </div>
            </motion.div>

            {/* Google Maps Embed - CMS EDITABLE */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-full min-h-[600px]"
            >
              <div className="w-full h-full rounded-xl overflow-hidden shadow-2xl border border-slate-200">
                <iframe
                  src={content.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Federal Working Group Office Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section - CMS EDITABLE */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-black mb-4 text-slate-900">{content.formHeading}</h2>
            <p className="text-lg text-slate-600">
              {content.formSubtitle}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>

      {/* CTA Section - CMS EDITABLE */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-black mb-6 text-slate-900">{content.ctaHeading}</h2>
            <p className="text-xl text-slate-600 mb-8">
              {content.ctaText}
            </p>
            <Link
              href={content.ctaButtonLink}
              className="inline-block px-8 py-4 bg-blue-800 text-white rounded-full font-bold text-lg hover:bg-blue-800 transition-all hover:shadow-lg hover:scale-105"
            >
              {content.ctaButtonText}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
