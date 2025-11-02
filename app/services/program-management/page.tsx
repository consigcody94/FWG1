'use client'

import { motion } from 'framer-motion'
import { TrendingUp, CheckCircle, Target, Users, BarChart, Lightbulb } from 'lucide-react'
import Link from 'next/link'
import { GlassCard } from '../../components/ui/GlassCard'

export default function ProgramManagementPage() {
  const capabilities = [
    {
      icon: Target,
      title: "PMI Standards & Methodologies",
      description: "Application of Project Management Institute best practices and proven methodologies"
    },
    {
      icon: Users,
      title: "Agile & Waterfall Approaches",
      description: "Flexible implementation of both agile and traditional waterfall methodologies"
    },
    {
      icon: BarChart,
      title: "Risk Management",
      description: "Proactive risk identification, assessment, and mitigation strategies"
    },
    {
      icon: Lightbulb,
      title: "Resource Optimization",
      description: "Strategic resource planning and allocation for maximum efficiency"
    }
  ]

  const services = [
    "Program Management Office (PMO) Setup and Support",
    "Project Planning and Execution",
    "Stakeholder Communication and Reporting",
    "Change Management and Organizational Development",
    "Portfolio Management and Governance",
    "Quality Assurance and Performance Metrics",
    "Budget and Schedule Management",
    "Risk and Issue Management"
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
            <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <span className="text-sm font-bold tracking-wider">PMI CERTIFIED PROFESSIONALS</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6">Program and Project Management</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Comprehensive program and project management services leveraging PMI standards and best practices to ensure successful delivery
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
              <h2 className="text-4xl font-black mb-6 text-slate-900">Excellence in Project Delivery</h2>
              <p className="text-lg text-slate-600 mb-4">
                Federal Working Group's program and project management services deliver results through proven methodologies, experienced professionals, and a commitment to excellence.
              </p>
              <p className="text-lg text-slate-600 mb-4">
                Our PMI-certified project managers bring deep federal sector experience, ensuring projects are delivered on time, within budget, and exceeding quality expectations.
              </p>
              <p className="text-lg text-slate-600">
                We apply industry-leading frameworks and adapt our approach to meet the unique needs of each engagement, from small initiatives to large-scale transformational programs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <GlassCard className="p-6 text-center">
                <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-black text-blue-600 mb-2">98%</div>
                <div className="text-sm font-semibold text-slate-600">On-Time Delivery</div>
              </GlassCard>
              <GlassCard className="p-6 text-center">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-black text-blue-600 mb-2">50+</div>
                <div className="text-sm font-semibold text-slate-600">PMI Certified PMs</div>
              </GlassCard>
              <GlassCard className="p-6 text-center">
                <Target className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-black text-blue-600 mb-2">500+</div>
                <div className="text-sm font-semibold text-slate-600">Projects Delivered</div>
              </GlassCard>
              <GlassCard className="p-6 text-center">
                <BarChart className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-black text-blue-600 mb-2">96/100</div>
                <div className="text-sm font-semibold text-slate-600">Client Satisfaction</div>
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
              Comprehensive project management services tailored to federal requirements
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
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
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
              Comprehensive program and project management solutions
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
                className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-600"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-lg text-slate-700 font-medium">{service}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-black mb-6">Ready to Transform Your Projects?</h2>
            <p className="text-xl text-white/90 mb-8">
              Partner with PMI-certified professionals who deliver results
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-slate-100 transition-all hover:shadow-lg hover:scale-105"
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
