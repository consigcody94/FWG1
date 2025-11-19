'use client'

import { motion } from 'framer-motion'
import { TrendingUp, CheckCircle, Server, Cloud, Network, Shield, Database, Activity } from 'lucide-react'
import Link from 'next/link'
import { GlassCard } from '../../components/ui/GlassCard'

export default function ITInfrastructurePage() {
  const capabilities = [
    {
      icon: Server,
      title: "Data Center Excellence",
      description: "Modern data center design, consolidation, and optimization for federal agencies"
    },
    {
      icon: Cloud,
      title: "Cloud Transformation",
      description: "Seamless migration to cloud platforms with minimal disruption and maximum efficiency"
    },
    {
      icon: Network,
      title: "Network Architecture",
      description: "Robust, secure, and scalable network design and implementation"
    },
    {
      icon: Shield,
      title: "Infrastructure Security",
      description: "Built-in security controls and compliance frameworks for federal requirements"
    }
  ]

  const services = [
    "Data Center Transformation",
    "Cloud Migration Services",
    "Network Design & Implementation",
    "Infrastructure Monitoring",
    "Disaster Recovery Planning",
    "Virtualization Solutions",
    "Storage Solutions",
    "Backup & Recovery"
  ]

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
            <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <span className="text-sm font-bold tracking-wider">INFRASTRUCTURE EXCELLENCE</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6">IT Infrastructure, Technologies & Solutions</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Modernize your IT infrastructure with cutting-edge data center management, cloud migration, and network architecture solutions designed for federal agencies
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black mb-6 text-slate-900">Infrastructure Modernization for the Digital Age</h2>
              <p className="text-lg text-slate-600 mb-4">
                Federal Working Group delivers comprehensive IT infrastructure solutions that transform legacy systems into modern, efficient, and secure platforms.
              </p>
              <p className="text-lg text-slate-600 mb-4">
                Our team of 150+ certified engineers specializes in data center transformation, cloud migration, and hybrid infrastructure solutions that meet stringent federal requirements while maximizing operational efficiency.
              </p>
              <p className="text-lg text-slate-600">
                From initial assessment through implementation and ongoing support, we ensure your infrastructure is resilient, scalable, and optimized for mission-critical operations with 24/7 monitoring and support.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <GlassCard className="p-6 text-center">
                <Cloud className="w-12 h-12 text-blue-800 mx-auto mb-3" />
                <div className="text-3xl font-black text-blue-800 mb-2">200+</div>
                <div className="text-sm font-semibold text-slate-600">Cloud Migrations</div>
              </GlassCard>
              <GlassCard className="p-6 text-center">
                <Activity className="w-12 h-12 text-blue-800 mx-auto mb-3" />
                <div className="text-3xl font-black text-blue-800 mb-2">99.9%</div>
                <div className="text-sm font-semibold text-slate-600">Uptime Guarantee</div>
              </GlassCard>
              <GlassCard className="p-6 text-center">
                <Shield className="w-12 h-12 text-blue-800 mx-auto mb-3" />
                <div className="text-3xl font-black text-blue-800 mb-2">24/7</div>
                <div className="text-sm font-semibold text-slate-600">Support Coverage</div>
              </GlassCard>
              <GlassCard className="p-6 text-center">
                <Database className="w-12 h-12 text-blue-800 mx-auto mb-3" />
                <div className="text-3xl font-black text-blue-800 mb-2">150+</div>
                <div className="text-sm font-semibold text-slate-600">Certified Engineers</div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black mb-6 text-slate-900">Core Capabilities</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Enterprise-grade infrastructure solutions built for federal mission requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="p-6 h-full">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-700 to-blue-800 rounded-xl flex items-center justify-center mb-4">
                    <capability.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">{capability.title}</h3>
                  <p className="text-slate-600">{capability.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black mb-6 text-slate-900">Our Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              End-to-end infrastructure services from planning to optimization
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white/90 backdrop-blur-xl p-6 rounded-xl shadow-lg border-l-4 border-blue-800"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-blue-800 flex-shrink-0 mt-1" />
                  <span className="text-lg text-slate-700 font-medium">{service}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-black mb-6">Ready to Modernize Your Infrastructure?</h2>
            <p className="text-xl text-white/90 mb-8">
              Partner with certified infrastructure experts who deliver reliability and performance
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-white text-blue-800 rounded-full font-bold text-lg hover:bg-slate-100 transition-all hover:shadow-lg hover:scale-105"
              >
                Contact Us
              </Link>
              <Link
                href="/services"
                className="inline-block px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
