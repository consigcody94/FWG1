'use client'

import { motion } from 'framer-motion'
import { Award, Users, Target, Lightbulb, TrendingUp, MessageCircle, Shield, Zap } from 'lucide-react'
import Link from 'next/link'

export default function WhyFWGPage() {
  const differentiators = [
    {
      icon: Award,
      title: "96/100 Customer Satisfaction",
      description: "Industry-leading satisfaction scores reflecting our commitment to excellence and client success"
    },
    {
      icon: Users,
      title: "Lean, Agile Structure",
      description: "Efficient organizational model that delivers maximum value with minimal overhead and bureaucracy"
    },
    {
      icon: Target,
      title: "Best Practice Standards",
      description: "Rigorous adherence to PMI, ITIL, and SEI frameworks ensuring consistent, high-quality delivery"
    },
    {
      icon: Zap,
      title: "Entrepreneurial Culture",
      description: "Innovative mindset that drives creative solutions and rapid adaptation to evolving mission needs"
    }
  ]

  const trackRecord = [
    {
      metric: "1000+",
      label: "Projects Delivered",
      description: "Successfully completed across federal agencies"
    },
    {
      metric: "150+",
      label: "Agency Partners",
      description: "Trusted relationships built over two decades"
    },
    {
      metric: "500+",
      label: "Expert Professionals",
      description: "Certified, cleared, and mission-ready"
    },
    {
      metric: "20+",
      label: "Years of Excellence",
      description: "Proven track record since 2004"
    }
  ]

  const customerFirst = [
    {
      icon: Shield,
      title: "Unwavering Commitment",
      description: "We stand behind every project with dedicated resources and accountability at every level"
    },
    {
      icon: MessageCircle,
      title: "Transparent Communication",
      description: "Proactive updates, clear reporting, and open dialogue ensure alignment throughout delivery"
    },
    {
      icon: Target,
      title: "Mission-Focused Results",
      description: "Your success is our success - we measure ourselves by the impact we deliver"
    }
  ]

  const innovation = [
    {
      icon: Lightbulb,
      title: "Cutting-Edge Technology",
      description: "Cloud computing, AI/ML integration, DevSecOps, and modern architecture patterns"
    },
    {
      icon: TrendingUp,
      title: "Continuous Improvement",
      description: "Lessons learned processes, knowledge management, and evolving best practices"
    },
    {
      icon: Users,
      title: "Talent Development",
      description: "Ongoing training, certifications, and professional development for our team"
    }
  ]

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-6">
              SINCE 2004 • 20+ YEARS OF EXCELLENCE
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6">Why Choose Federal Working Group</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Two decades of proven excellence delivering mission-critical IT solutions to federal agencies
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Differentiators */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black mb-6 text-slate-900">Our Differentiators</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              What sets Federal Working Group apart in the federal IT marketplace
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-white border-2 border-slate-200 rounded-xl p-8 hover:border-blue-600 hover:shadow-2xl transition-all duration-300 h-full">
                  <div className="flex items-start gap-6">
                    <div className="p-4 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex-shrink-0">
                      <item.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 text-slate-900">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proven Track Record */}
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
              Numbers that demonstrate our commitment and capability
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trackRecord.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg text-center"
              >
                <div className="text-5xl font-black text-blue-600 mb-3">{item.metric}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.label}</h3>
                <p className="text-slate-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer-First Approach */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black mb-6 text-slate-900">Customer-First Approach</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Your mission is our priority - commitment, communication, and transparency
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {customerFirst.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-900 text-center">{item.title}</h3>
                  <p className="text-slate-600 text-center leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation & Excellence */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black mb-6 text-slate-900">Innovation & Excellence</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Staying ahead of the curve with cutting-edge technology and continuous improvement
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {innovation.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-white border-2 border-slate-200 rounded-xl p-8 hover:border-blue-600 hover:shadow-2xl transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mb-6">
                    <item.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-4xl font-black mb-6">Ready to Experience the FWG Difference?</h2>
            <p className="text-xl text-white/90 mb-8">
              Discover how our proven approach can accelerate your mission success
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/assets/FWGCap.pdf"
                className="inline-block px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-slate-100 transition-all hover:shadow-lg hover:scale-105"
              >
                Download Capabilities Statement
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
