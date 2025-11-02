'use client'

import { motion } from 'framer-motion'
import { FileText, Mail, Award, Clock, CheckCircle, Send, ArrowRight, User, Briefcase } from 'lucide-react'
import Link from 'next/link'

export default function HowToApplyPage() {
  const steps = [
    {
      number: "01",
      icon: FileText,
      title: "Prepare Your Materials",
      description: "Gather your resume, cover letter, and relevant certifications",
      details: [
        "Updated resume highlighting relevant experience",
        "Tailored cover letter explaining your interest in the role",
        "Copies of professional certifications (PMP, CISSP, etc.)",
        "Security clearance information (if applicable)",
        "References available upon request"
      ]
    },
    {
      number: "02",
      icon: Mail,
      title: "Submit Your Application",
      description: "Email your materials to our careers team",
      details: [
        "Send to: careers@federalworkinggroup.com",
        "Subject line: Position title you're applying for",
        "Include all materials in PDF format",
        "Brief email introduction (2-3 sentences)",
        "Mention any employee referrals if applicable"
      ]
    },
    {
      number: "03",
      icon: User,
      title: "Initial Review",
      description: "Our team reviews your application",
      details: [
        "Applications reviewed within 1-2 business days",
        "Confirmation email sent upon receipt",
        "Qualifications matched against position requirements",
        "Top candidates selected for phone screening",
        "All applicants receive status updates"
      ]
    },
    {
      number: "04",
      icon: Briefcase,
      title: "Interview Process",
      description: "Meet with our hiring team",
      details: [
        "Phone screening with HR (30 minutes)",
        "Technical interview with team lead (60 minutes)",
        "Final interview with leadership (45 minutes)",
        "Opportunity to ask questions at each stage",
        "Feedback provided throughout the process"
      ]
    }
  ]

  const tips = [
    {
      icon: Award,
      title: "Highlight Your Clearance",
      description: "If you have an active security clearance, mention it prominently in your resume and cover letter."
    },
    {
      icon: FileText,
      title: "Tailor Your Application",
      description: "Customize your resume and cover letter for each specific position, highlighting relevant skills and experience."
    },
    {
      icon: CheckCircle,
      title: "Emphasize Federal Experience",
      description: "If you have worked with federal agencies before, make sure to highlight that experience and any relevant contract work."
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
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back to Careers
            </Link>
            <h1 className="text-5xl md:text-6xl font-black mb-6">How to Apply</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              Ready to join Federal Working Group? Our application process is straightforward and designed to help you showcase your talents.
            </p>
            <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full">
              <span className="text-sm font-bold tracking-wider">START YOUR CAREER JOURNEY TODAY</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Steps */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black mb-6 text-slate-900">Application Process</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Follow these four simple steps to apply for a position at FWG
            </p>
          </motion.div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Step Number */}
                  <div className="lg:col-span-2 flex flex-col items-center lg:items-start">
                    <div className="text-8xl font-black text-blue-100 leading-none">
                      {step.number}
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="lg:col-span-10">
                    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
                      <div className="flex items-start gap-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                          <step.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-3xl font-black mb-3 text-slate-900">{step.title}</h3>
                          <p className="text-lg text-slate-600 mb-6">{step.description}</p>
                          <ul className="space-y-3">
                            {step.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                <span className="text-slate-700">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Tips */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black mb-6 text-slate-900">Application Tips</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Make your application stand out with these helpful tips
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tips.map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mb-6">
                  <tip.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-black mb-4 text-slate-900">{tip.title}</h3>
                <p className="text-slate-600">{tip.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Clock className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-4xl font-black mb-6 text-slate-900">What to Expect</h2>
            <p className="text-xl text-slate-600 mb-12">
              Our typical hiring timeline from application to offer
            </p>
          </motion.div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1-2</span>
                </div>
                <div>
                  <p className="font-bold text-lg text-slate-900">Days</p>
                  <p className="text-slate-600">Initial application review and confirmation</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <p className="font-bold text-lg text-slate-900">Week</p>
                  <p className="text-slate-600">Phone screening with HR team</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <p className="font-bold text-lg text-slate-900">Weeks</p>
                  <p className="text-slate-600">Technical and final interviews</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">3-4</span>
                </div>
                <div>
                  <p className="font-bold text-lg text-slate-900">Weeks</p>
                  <p className="text-slate-600">Offer decision and background check process</p>
                </div>
              </div>
            </div>
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
            transition={{ duration: 0.6 }}
          >
            <Send className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl font-black mb-6">Ready to Apply?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Browse our current openings and submit your application today. We're excited to learn more about you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/careers/current-openings"
                className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-slate-100 transition-all hover:shadow-lg hover:scale-105"
              >
                View Current Openings
              </Link>
              <Link
                href="mailto:careers@federalworkinggroup.com"
                className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white border-2 border-white rounded-full font-bold text-lg hover:bg-white/30 transition-all"
              >
                Email Careers Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
