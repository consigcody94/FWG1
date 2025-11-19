'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Cloud, Network, Shield, CheckCircle, Award } from 'lucide-react'
import Link from 'next/link'
import { GlassCard } from '../components/ui/GlassCard'

export default function ServicesPage() {
  const services = [
    {
      icon: TrendingUp,
      title: "Program and Project Management",
      description: "Comprehensive program and project management services leveraging PMI standards and best practices to ensure successful project delivery and organizational excellence.",
      features: [
        "Project Management Institute (PMI) Standards",
        "Agile and Waterfall Methodologies",
        "Risk Management and Mitigation",
        "Stakeholder Communication and Reporting",
        "Resource Planning and Optimization"
      ],
      color: "blue"
    },
    {
      icon: Cloud,
      title: "IT Infrastructure, Technologies & Solutions",
      description: "Comprehensive data center management and transformation services, cloud computing solutions, and cutting-edge IT infrastructure leveraging the latest technologies.",
      features: [
        "Data Center Management and Transformation",
        "Cloud Migration and Optimization",
        "Network Architecture and Design",
        "Infrastructure Modernization",
        "Hybrid Cloud Solutions"
      ],
      color: "cyan"
    },
    {
      icon: Network,
      title: "Enterprise Architecture",
      description: "Strategic enterprise architecture services that align technology with business objectives, ensuring scalable and sustainable solutions for mission-critical federal systems.",
      features: [
        "Enterprise Architecture Planning",
        "Technology Roadmap Development",
        "Business Process Optimization",
        "Solution Architecture Design",
        "Architecture Governance"
      ],
      color: "purple"
    },
    {
      icon: Shield,
      title: "IT Security, Strategy & Operations",
      description: "Comprehensive IT security, strategic planning, and operational excellence services applying ITIL frameworks and Software Engineering Institute best practices.",
      features: [
        "Cybersecurity Assessment and Implementation",
        "ITIL Framework Application",
        "IT Governance and Compliance",
        "Security Operations and Monitoring",
        "Strategic IT Planning"
      ],
      color: "green"
    }
  ]

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/assets/video1.mp4" type="video/mp4" />
          </video>
          {/* Frosted Glass Effect */}
          <div className="absolute inset-0 backdrop-blur-[8px] bg-white/20" />
          {/* Dark Overlay with Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-black mb-6 text-white">Services & Solutions</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              Elite capabilities for mission-critical federal IT transformation
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                PMI Certified
              </div>
              <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                ITIL Frameworks
              </div>
              <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                SEI Best Practices
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-black mb-4 text-slate-900">Why Choose FWG?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Effective support that builds customer trust and loyalty
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="w-12 h-12 bg-blue-800 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">96/100</h3>
              <p className="text-slate-600">Customer Satisfaction Score</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="w-12 h-12 bg-blue-800 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">Lean Structure</h3>
              <p className="text-slate-600">Attracting and retaining highly skilled professionals</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="w-12 h-12 bg-blue-800 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">Best Practices</h3>
              <p className="text-slate-600">ITIL, PMI, and SEI framework expertise</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GlassCard glow className="overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`p-4 bg-gradient-to-br from-${service.color}-500/20 to-${service.color}-600/20 rounded-2xl`}>
                          <service.icon className={`w-10 h-10 text-${service.color}-600`} />
                        </div>
                        <h3 className="text-3xl font-black text-slate-900">{service.title}</h3>
                      </div>
                      <p className="text-lg text-slate-600 mb-6">{service.description}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-4">Key Capabilities:</h4>
                      <ul className="space-y-3">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-blue-800 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Approach */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-black mb-6 text-slate-900">Our Approach</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A highly collaborative and collegial work environment based on fairness and transparent business understandings
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Structured Frameworks</h3>
              <p className="text-slate-600 mb-4">
                We apply industry-leading structured management frameworks including:
              </p>
              <ul className="space-y-2 text-slate-600">
                <li>• ITIL (IT Infrastructure Library)</li>
                <li>• Project Management Institute Standards</li>
                <li>• Software Engineering Institute Best Practices</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Competitive Advantage</h3>
              <p className="text-slate-600 mb-4">
                Our lean structure and focus on excellence ensures:
              </p>
              <ul className="space-y-2 text-slate-600">
                <li>• Highly skilled and experienced professionals</li>
                <li>• Competitive rates without sacrificing quality</li>
                <li>• Collaborative and transparent partnerships</li>
              </ul>
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
            <h2 className="text-4xl font-black mb-6">Ready to Transform Your IT Operations?</h2>
            <p className="text-xl text-white/90 mb-8">
              Download our capabilities statement to learn more about our comprehensive service offerings.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/assets/FWGCap.pdf"
                className="inline-block px-8 py-4 bg-white text-blue-800 rounded-full font-bold text-lg hover:bg-slate-100 transition-all hover:shadow-lg hover:scale-105"
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
