'use client'

import { motion } from 'framer-motion'
import { Building2, CheckCircle, Award, Shield } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function OurClientsPage() {
  const clients = [
    {
      name: "Department of Commerce",
      website: "commerce.gov",
      abbreviation: "DOC",
      logo: "/assets/clients/commerce.png"
    },
    {
      name: "Department of Treasury",
      website: "treasury.gov",
      abbreviation: "TREASURY",
      logo: "/assets/clients/treasury.png"
    },
    {
      name: "Department of Homeland Security",
      website: "dhs.gov",
      abbreviation: "DHS",
      logo: "/assets/clients/homeland.png"
    },
    {
      name: "Department of Health and Human Services",
      website: "hhs.gov",
      abbreviation: "HHS",
      logo: "/assets/clients/health.png"
    },
    {
      name: "Environmental Protection Agency",
      website: "epa.gov",
      abbreviation: "EPA",
      logo: "/assets/clients/environment.png"
    },
    {
      name: "Federal Communications Commission",
      website: "fcc.gov",
      abbreviation: "FCC"
    },
    {
      name: "Federal Aviation Administration",
      website: "faa.gov",
      abbreviation: "FAA"
    },
    {
      name: "Department of Agriculture",
      website: "usda.gov",
      abbreviation: "USDA"
    },
    {
      name: "Department of Justice",
      website: "justice.gov",
      abbreviation: "DOJ"
    }
  ]

  const achievements = [
    {
      icon: Award,
      title: "20+ Years",
      description: "Serving Federal Agencies"
    },
    {
      icon: Building2,
      title: "150+ Partners",
      description: "Government Relationships"
    },
    {
      icon: CheckCircle,
      title: "1000+ Projects",
      description: "Successfully Delivered"
    },
    {
      icon: Shield,
      title: "96/100",
      description: "Customer Satisfaction"
    }
  ]

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-black mb-6">Our Clients</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Trusted by federal agencies to deliver mission-critical IT solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Client Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black mb-6 text-slate-900">Federal Agency Partners</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Delivering excellence to the nation's most critical agencies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={client.abbreviation}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <div className="group bg-white border-2 border-slate-200 rounded-xl p-8 hover:border-blue-600 hover:shadow-2xl transition-all duration-300 h-full flex flex-col items-center justify-center text-center">
                  {/* Agency Seal/Logo */}
                  <div className="w-24 h-24 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative">
                    {client.logo ? (
                      <Image
                        src={client.logo}
                        alt={`${client.name} Logo`}
                        width={96}
                        height={96}
                        className="object-contain"
                      />
                    ) : (
                      <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                        <div className="text-white font-black text-sm leading-tight text-center px-2">
                          {client.abbreviation}
                        </div>
                      </div>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {client.name}
                  </h3>

                  <a
                    href={`https://${client.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 text-sm font-semibold"
                  >
                    {client.website} →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black mb-6 text-slate-900">Proven Track Record</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Two decades of excellence serving the federal government
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-2">{achievement.title}</h3>
                <p className="text-slate-600">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contract Vehicle */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-12 border border-blue-200 text-center"
          >
            <h2 className="text-3xl font-black mb-4 text-slate-900">CIOSP3 Contract Vehicle</h2>
            <p className="text-lg text-slate-600 mb-6">
              Federal Working Group operates under the Chief Information Officer - Solutions and Partners 3 (CIOSP3) contract vehicle, streamlining procurement for federal agencies.
            </p>
            <div className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full font-bold">
              Authorized Federal Contract Holder
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-black mb-6">Partner With Us</h2>
            <p className="text-xl text-white/90 mb-8">
              Join our growing list of satisfied federal agency clients
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-slate-100 transition-all hover:shadow-lg hover:scale-105"
              >
                Contact Us
              </Link>
              <Link
                href="/assets/FWGCap.pdf"
                className="inline-block px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all"
              >
                Download Capabilities
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
