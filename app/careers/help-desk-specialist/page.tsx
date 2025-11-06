'use client'

import { motion } from 'framer-motion'
import { Briefcase, CheckCircle, Award, Shield, Mail, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function HelpDeskSpecialistPage() {
  const responsibilities = [
    "Provide Tier 2/3 technical support for federal agency end-users and IT systems",
    "Troubleshoot hardware, software, and network connectivity issues",
    "Document support tickets and maintain detailed records in ticketing systems",
    "Escalate complex technical issues to appropriate teams and follow through to resolution",
    "Configure and deploy workstations, laptops, and mobile devices for federal users",
    "Create and maintain technical documentation and knowledge base articles",
    "Conduct user training on federal IT systems and security best practices",
    "Support ITIL-based service management processes and meet SLA requirements"
  ]

  const requiredQualifications = [
    "Associate degree in Information Technology or related field (or equivalent experience)",
    "CompTIA A+ certification required",
    "Minimum 2 years of experience in technical support or help desk role",
    "Excellent customer service and communication skills",
    "Strong troubleshooting abilities across Windows and Mac environments",
    "Experience with ticketing systems (ServiceNow, Remedy, or similar)",
    "Knowledge of Active Directory and Office 365 administration",
    "Ability to work in a fast-paced, customer-focused environment"
  ]

  const preferredQualifications = [
    "Additional certifications (Network+, Security+, ITIL Foundation)",
    "Experience supporting federal government users",
    "Active security clearance",
    "Knowledge of mobile device management (MDM) solutions",
    "Familiarity with remote support tools",
    "Prior experience in ITSM processes and ITIL framework"
  ]

  const benefits = [
    "Comprehensive health, dental, and vision insurance",
    "Competitive salary with growth opportunities",
    "Certification training and exam reimbursement",
    "Flexible work schedule options",
    "Generous PTO and federal holiday schedule",
    "401(k) matching program",
    "Professional development support",
    "Career advancement pathways"
  ]

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-900 text-white py-20">
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
            <h1 className="text-5xl md:text-6xl font-black mb-6">Help Desk Specialist</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Deliver exceptional technical support and enable federal agency users to accomplish their missions.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Briefcase className="w-5 h-5" />
                <span className="font-semibold">Full-Time</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Shield className="w-5 h-5" />
                <span className="font-semibold">CompTIA A+ Required</span>
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
                Federal Working Group is seeking a customer-focused Help Desk Specialist to provide technical support
                for federal agency users. The ideal candidate will have strong troubleshooting skills, excellent
                communication abilities, and a passion for helping users resolve technical challenges.
              </p>
              <p>
                You will serve as the frontline support for federal users, handling a variety of technical issues
                from basic software problems to complex system configurations. This role offers an excellent opportunity
                to develop your technical skills while supporting important government missions and advancing your
                IT career.
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
                  className="flex items-start gap-4 bg-white/90 backdrop-blur-xl p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <CheckCircle className="w-6 h-6 text-blue-800 flex-shrink-0 mt-1" />
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
                <div className="w-12 h-12 bg-gradient-to-br from-blue-700 to-blue-800 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-black text-slate-900">Required Qualifications</h2>
              </div>
              <div className="space-y-3">
                {requiredQualifications.map((qual, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-800 rounded-full flex-shrink-0 mt-2"></div>
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
      <section className="py-20 px-6 bg-gradient-to-br from-blue-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Launch Your Career?</h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Join our team and provide exceptional support while developing your skills in federal IT environments.
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
                href="mailto:careers@federalworking.com?subject=Help Desk Specialist Application"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-800 rounded-full font-bold text-lg hover:bg-slate-100 transition-all hover:shadow-lg hover:scale-105"
              >
                careers@federalworking.com
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
