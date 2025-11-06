'use client'

import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, Clock } from 'lucide-react'
import Link from 'next/link'

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-black mb-6">Get In Touch</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Ready to transform your federal IT operations? Contact us today to discuss your project needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information & Map */}
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
                      7918 Jones Branch Drive<br />
                      4th Floor<br />
                      McLean, VA 22102
                    </p>
                    <Link
                      href="https://maps.google.com/?q=7918+Jones+Branch+Drive+McLean+VA+22102"
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
                      href="mailto:info@federalworking.com"
                      className="text-slate-600 hover:text-blue-800 transition-colors"
                    >
                      info@federalworking.com
                    </Link>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                  <div className="p-3 bg-blue-800 rounded-lg">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Business Hours</h3>
                    <p className="text-slate-600">
                      Monday - Friday: 8:00 AM - 5:00 PM EST<br />
                      Saturday - Sunday: Closed
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

            {/* Google Maps Embed */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-full min-h-[600px]"
            >
              <div className="w-full h-full rounded-xl overflow-hidden shadow-2xl border border-slate-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3101.8837776869567!2d-77.22044492346934!3d38.92897997171291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64d17c17c2f21%3A0x8ba4f5b5f5ca5f6d!2s7918%20Jones%20Branch%20Dr%2C%20McLean%2C%20VA%2022102!5e0!3m2!1sen!2sus!4v1704825600000!5m2!1sen!2sus"
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

      {/* CTA Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-black mb-6 text-slate-900">Ready to Get Started?</h2>
            <p className="text-xl text-slate-600 mb-8">
              Download our capabilities statement to learn more about how Federal Working Group can support your mission-critical IT needs.
            </p>
            <Link
              href="/assets/FWGCap.pdf"
              className="inline-block px-8 py-4 bg-blue-800 text-white rounded-full font-bold text-lg hover:bg-blue-800 transition-all hover:shadow-lg hover:scale-105"
            >
              Download Capabilities Statement
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
