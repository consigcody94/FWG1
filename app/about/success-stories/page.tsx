'use client'

import { motion } from 'framer-motion'
import { Award, TrendingUp, Users, Shield } from 'lucide-react'
import Link from 'next/link'
import { SuccessStoriesBlock } from '../../components/blocks/SuccessStoriesBlock'

export default function SuccessStoriesPage() {
  const impactMetrics = [
    {
      icon: Award,
      metric: "1000+",
      label: "Projects Completed",
      description: "Mission-critical deliveries"
    },
    {
      icon: Users,
      metric: "150+",
      label: "Federal Agencies",
      description: "Trusted partnerships"
    },
    {
      icon: TrendingUp,
      metric: "96/100",
      label: "Satisfaction Score",
      description: "Industry-leading results"
    },
    {
      icon: Shield,
      metric: "20+",
      label: "Years of Service",
      description: "Proven track record"
    }
  ]

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 to-blue-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-6">
              <Award className="w-4 h-4" />
              PROVEN EXCELLENCE • REAL RESULTS
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6">Success Stories</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Real-world impact across federal agencies - delivering mission-critical solutions that transform government operations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Overview */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black mb-6 text-slate-900">Our Impact by the Numbers</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Two decades of excellence delivering transformative solutions to federal agencies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <div className="text-4xl font-black text-purple-600 mb-2">{item.metric}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.label}</h3>
                  <p className="text-slate-600 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Context Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl font-black mb-6 text-slate-900">Transforming Federal IT Operations</h2>
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-12 border border-purple-200">
              <p className="text-xl text-slate-700 leading-relaxed mb-6">
                From the Census Bureau's critical decennial operations to the IRS's implementation of the Affordable Care Act, Federal Working Group has been the trusted partner for federal agencies tackling their most complex IT challenges.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our success stories demonstrate our ability to deliver innovative solutions at scale, supporting mission-critical operations that serve millions of Americans.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Stories Block */}
      <SuccessStoriesBlock
        data={{
          heading: "Featured Client Success Stories",
          subtitle: "Deep-dive into our most impactful federal agency partnerships"
        }}
      />

      {/* Client Diversity Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black mb-6 text-slate-900">Across All Federal Sectors</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our expertise spans diverse federal agencies and mission areas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "Financial Services",
                agencies: ["Treasury Department", "IRS", "OCC", "Financial Crimes Network"]
              },
              {
                category: "National Security",
                agencies: ["Homeland Security", "Department of Defense", "Intelligence Agencies"]
              },
              {
                category: "Public Health",
                agencies: ["HHS", "CDC", "FDA", "USDA"]
              },
              {
                category: "Statistical Agencies",
                agencies: ["Census Bureau", "BLS", "BEA", "Statistical Data Centers"]
              },
              {
                category: "Regulatory Bodies",
                agencies: ["EPA", "FCC", "FAA", "Regulatory Commissions"]
              },
              {
                category: "Justice & Commerce",
                agencies: ["DOJ", "Commerce Dept", "Patent Office", "Trade Administration"]
              }
            ].map((sector, index) => (
              <motion.div
                key={sector.category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">{sector.category}</h3>
                  <ul className="space-y-2">
                    {sector.agencies.map((agency) => (
                      <li key={agency} className="flex items-start gap-2 text-slate-600">
                        <span className="text-purple-600 font-bold">•</span>
                        <span>{agency}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-black mb-6">Ready to Create Your Success Story?</h2>
            <p className="text-xl text-white/90 mb-8">
              Partner with Federal Working Group to deliver transformative IT solutions for your agency
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-white text-purple-600 rounded-full font-bold text-lg hover:bg-slate-100 transition-all hover:shadow-lg hover:scale-105"
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
