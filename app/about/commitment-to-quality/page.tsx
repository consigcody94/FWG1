'use client'

import { motion } from 'framer-motion'
import { Shield, Target, TrendingUp, Users, CheckCircle, BarChart3 } from 'lucide-react'
import Link from 'next/link'

export default function CommitmentToQualityPage() {
  const pillars = [
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Built into every phase of our management process",
      features: [
        "Integrated planning and execution",
        "Continuous monitoring and validation",
        "Proactive risk identification",
        "Systematic quality checks"
      ]
    },
    {
      icon: Shield,
      title: "Quality Controls",
      description: "Integral part of all deliverables",
      features: [
        "Security Management - Committed to ensure compliance with Federal mandates",
        "Individual Accountability - Personnel ensure customer satisfaction",
        "Customer-Centered Focus - Performance measures quantify quality, timeliness, and effectiveness",
        "Deliverable verification processes"
      ]
    },
    {
      icon: TrendingUp,
      title: "Quality Improvement",
      description: "Continuous assessment and adjustment",
      features: [
        "Statistical analysis of performance",
        "Product enhancement initiatives",
        "Risk management optimization",
        "Efficiency improvements"
      ]
    }
  ]

  const securityFocus = [
    {
      icon: Shield,
      title: "Federal Compliance",
      description: "Committed to ensure compliance with Federal mandates and protect sensitive government data"
    },
    {
      icon: Users,
      title: "Individual Accountability",
      description: "Every team member ensures customer satisfaction through systematic execution of quality processes"
    },
    {
      icon: Target,
      title: "Customer-Centered Metrics",
      description: "Performance measures quantify quality, timeliness, and effectiveness of assigned work"
    },
    {
      icon: BarChart3,
      title: "Continuous Improvement",
      description: "Statistical analysis drives product enhancement, risk management, and efficiency gains"
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
            <h1 className="text-5xl md:text-6xl font-black mb-6">Commitment to Quality</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Excellence in every phase, every deliverable, every interaction
            </p>
          </motion.div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black mb-6 text-slate-900">Three Pillars of Quality</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our quality approach is organized around three fundamental pillars
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border-2 border-slate-200 rounded-xl p-8 hover:border-blue-600 hover:shadow-2xl transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <pillar.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black mb-3 text-slate-900">{pillar.title}</h3>
                <p className="text-slate-600 mb-6 font-semibold">{pillar.description}</p>
                <ul className="space-y-3">
                  {pillar.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Controls */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black mb-6 text-slate-900">Quality in Action</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              How we deliver excellence across every engagement
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityFocus.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-slate-900">{item.title}</h3>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture of Quality */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl font-black mb-6 text-slate-900">Beyond Metrics</h2>
            <p className="text-xl text-slate-600 mb-8">
              Quality extends beyond numbers to include a culture of open communication and dialogue, encompassing program management reviews, customer meetings, and employee discussion and training sessions.
            </p>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
              <p className="text-lg text-slate-700 italic">
                "We recognize that quality is not just about meeting standards—it's about building lasting relationships through transparency, accountability, and continuous improvement."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-black mb-6">Experience Our Quality</h2>
            <p className="text-xl text-white/90 mb-8">
              Partner with a team committed to excellence in every engagement
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-slate-100 transition-all hover:shadow-lg hover:scale-105"
              >
                Contact Us
              </Link>
              <Link
                href="/about/our-clients"
                className="inline-block px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all"
              >
                View Our Clients
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
