'use client'

import { motion } from 'framer-motion'
import { Briefcase, CheckCircle, Award, Shield, Mail, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function ITAssetManagerPage() {
  const responsibilities = [
    "Manage complete IT asset lifecycle from procurement through disposal for federal agencies",
    "Maintain accurate asset inventory databases and track hardware/software across the enterprise",
    "Coordinate with procurement teams to acquire IT equipment in compliance with federal regulations",
    "Conduct regular audits to ensure asset tracking accuracy and compliance",
    "Develop and implement asset management policies and procedures",
    "Generate reports on asset utilization, costs, and compliance metrics for leadership",
    "Manage software license compliance and optimize license utilization",
    "Coordinate secure disposal and sanitization of IT equipment per federal standards"
  ]

  const requiredQualifications = [
    "Bachelor's degree in Information Technology, Business Administration, or related field",
    "ITIL Foundation certification required",
    "Minimum 3 years of experience in IT asset management or related role",
    "Strong understanding of IT asset lifecycle management principles",
    "Experience with asset management software and database systems",
    "Knowledge of federal procurement processes and compliance requirements",
    "Excellent organizational and analytical skills",
    "Strong attention to detail and data accuracy"
  ]

  const preferredQualifications = [
    "IAITAM certification (CSAM, CITAM) or SAM certification",
    "Active security clearance",
    "Experience with ServiceNow ITAM or similar enterprise tools",
    "Knowledge of software licensing models and compliance frameworks",
    "Familiarity with federal supply schedules (GSA, DLA)",
    "Prior experience working with federal agencies or DoD"
  ]

  const benefits = [
    "Comprehensive health, dental, and vision insurance",
    "Competitive salary with annual increases",
    "Certification training and exam reimbursement",
    "Flexible work arrangements with remote options",
    "Generous PTO and federal holiday schedule",
    "401(k) matching program",
    "Professional development opportunities",
    "Career advancement pathways"
  ]

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/careers"
              className="inline-flex items-center text-white/90 hover:text-white mb-6 text-sm font-semibold"
            >
              ← Back to Careers
            </Link>
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <span className="text-sm font-bold tracking-wider">JOIN OUR TEAM</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6">IT Asset Manager</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Optimize IT asset lifecycle management and ensure compliance for federal agency operations.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Briefcase className="w-5 h-5" />
                <span className="font-semibold">Full-Time</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Shield className="w-5 h-5" />
                <span className="font-semibold">ITIL Foundation Required</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Job Overview */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-black mb-6 text-slate-900">Position Overview</h2>
            <div className="prose prose-lg max-w-none text-slate-700">
              <p>
                Federal Working Group is seeking a detail-oriented IT Asset Manager to oversee the complete lifecycle
                of IT assets for federal agencies. The ideal candidate will have strong organizational skills, experience
                with asset management systems, and knowledge of federal procurement and compliance requirements.
              </p>
              <p>
                You will be responsible for maintaining accurate asset inventories, optimizing asset utilization,
                ensuring compliance with federal regulations, and providing strategic insights on IT asset investments.
                This role offers the opportunity to work with diverse technologies while supporting efficient IT
                operations across federal agencies.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Responsibilities */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-black mb-8 text-slate-900">Key Responsibilities</h2>
            <div className="grid gap-4">
              {responsibilities.map((responsibility, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-slate-700">{responsibility}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Required Qualifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-black text-slate-900">Required Qualifications</h2>
              </div>
              <div className="space-y-3">
                {requiredQualifications.map((qual, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-slate-700">{qual}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Preferred Qualifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-400 to-slate-500 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-black text-slate-900">Preferred Qualifications</h2>
              </div>
              <div className="space-y-3">
                {preferredQualifications.map((qual, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-slate-600 rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-slate-700">{qual}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-black mb-8 text-slate-900">Benefits & Perks</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm"
                >
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <p className="text-slate-700">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Optimize IT Operations?</h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Join our team and manage critical IT assets that enable federal agencies to achieve their missions efficiently.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Mail className="w-8 h-8" />
                <h3 className="text-2xl font-bold">Apply Now</h3>
              </div>
              <p className="text-white/90 mb-6">
                Send your resume, cover letter, and any relevant certifications to:
              </p>
              <Link
                href="mailto:careers@federalworkinggroup.com?subject=IT Asset Manager Application"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-slate-100 transition-all hover:shadow-lg hover:scale-105"
              >
                careers@federalworkinggroup.com
                <ArrowRight className="w-5 h-5" />
              </Link>
              <p className="text-sm text-white/70 mt-6">
                Federal Working Group is an Equal Opportunity Employer
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
