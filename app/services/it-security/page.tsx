'use client'

import { motion } from 'framer-motion'
import { TrendingUp, CheckCircle, Shield, Lock, Eye, AlertTriangle, FileCheck, Users } from 'lucide-react'
import Link from 'next/link'
import { GlassCard } from '../../components/ui/GlassCard'

export default function ITSecurityPage() {
  const capabilities = [
    {
      icon: Shield,
      title: "Cybersecurity Operations",
      description: "24/7 security operations center with advanced threat detection and response"
    },
    {
      icon: FileCheck,
      title: "Compliance Management",
      description: "Full compliance with FISMA, NIST, FedRAMP, and federal security frameworks"
    },
    {
      icon: Lock,
      title: "Security Architecture",
      description: "Defense-in-depth security designs protecting critical systems and data"
    },
    {
      icon: AlertTriangle,
      title: "Risk Management",
      description: "Proactive risk assessment, mitigation, and continuous monitoring programs"
    }
  ]

  const services = [
    "Cybersecurity Assessment",
    "Security Operations Center (SOC)",
    "Compliance Management (FISMA, NIST)",
    "Incident Response",
    "Security Architecture",
    "Identity & Access Management",
    "Security Training",
    "Risk Management"
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
              <span className="text-sm font-bold tracking-wider">FEDRAMP CERTIFIED</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6">IT Security, Strategy & Operations</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Comprehensive cybersecurity services including ITIL frameworks, IT governance, security operations, and strategic planning to protect federal missions
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
              <h2 className="text-4xl font-black mb-6 text-slate-900">Securing Federal Missions</h2>
              <p className="text-lg text-slate-600 mb-4">
                Federal Working Group delivers enterprise-grade cybersecurity services that protect critical systems, sensitive data, and mission-critical operations across federal agencies.
              </p>
              <p className="text-lg text-slate-600 mb-4">
                Our team of 40+ security professionals brings deep expertise in federal security frameworks, including FISMA, NIST 800-53, FedRAMP, and ITIL, ensuring comprehensive protection and full compliance.
              </p>
              <p className="text-lg text-slate-600">
                From security operations center management to incident response, risk assessment, and compliance auditing, we provide end-to-end security services that enable agencies to operate securely and confidently in an evolving threat landscape.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <GlassCard className="p-6 text-center">
                <Shield className="w-12 h-12 text-blue-800 mx-auto mb-3" />
                <div className="text-3xl font-black text-blue-800 mb-2">Zero</div>
                <div className="text-sm font-semibold text-slate-600">Security Breaches</div>
              </GlassCard>
              <GlassCard className="p-6 text-center">
                <FileCheck className="w-12 h-12 text-blue-800 mx-auto mb-3" />
                <div className="text-3xl font-black text-blue-800 mb-2">100%</div>
                <div className="text-sm font-semibold text-slate-600">Compliance Rate</div>
              </GlassCard>
              <GlassCard className="p-6 text-center">
                <Eye className="w-12 h-12 text-blue-800 mx-auto mb-3" />
                <div className="text-3xl font-black text-blue-800 mb-2">FedRAMP</div>
                <div className="text-sm font-semibold text-slate-600">Certified</div>
              </GlassCard>
              <GlassCard className="p-6 text-center">
                <Users className="w-12 h-12 text-blue-800 mx-auto mb-3" />
                <div className="text-3xl font-black text-blue-800 mb-2">40+</div>
                <div className="text-sm font-semibold text-slate-600">Security Professionals</div>
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
              Multi-layered security services protecting federal infrastructure and data
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
              Complete security lifecycle management from assessment to operations
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
            <h2 className="text-4xl font-black mb-6">Ready to Secure Your Mission?</h2>
            <p className="text-xl text-white/90 mb-8">
              Partner with FedRAMP certified security experts who protect federal operations
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
