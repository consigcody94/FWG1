'use client'

import { motion } from 'framer-motion'
import { Briefcase, CheckCircle, Award, Shield, Mail, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function EnterpriseArchitectPage() {
  const responsibilities = [
    "Develop and maintain enterprise architecture frameworks aligned with federal agency mission and strategic goals",
    "Design technology roadmaps for IT modernization initiatives across federal organizations",
    "Create solution architectures for complex, mission-critical federal IT systems",
    "Lead architecture review boards and provide guidance on technology decisions",
    "Ensure alignment with federal architecture frameworks (FEAF, TOGAF, Zachman)",
    "Collaborate with stakeholders to translate business requirements into technical architecture",
    "Document architecture patterns, standards, and best practices for federal implementations",
    "Assess emerging technologies and recommend adoption strategies for federal environments"
  ]

  const requiredQualifications = [
    "Bachelor's degree in Computer Science, Information Systems, or related technical field",
    "TOGAF or Zachman Framework certification required",
    "Minimum 7 years of experience in enterprise architecture for federal agencies",
    "Active Secret security clearance or ability to obtain",
    "Deep understanding of federal IT architecture frameworks and standards",
    "Experience with cloud architecture (AWS GovCloud, Azure Government)",
    "Strong knowledge of federal compliance requirements (FISMA, FedRAMP, NIST)",
    "Excellent communication skills for presenting complex technical concepts to leadership"
  ]

  const preferredQualifications = [
    "Master's degree in Computer Science or related field",
    "Multiple architecture certifications (AWS Solutions Architect, Azure Architect)",
    "Experience with DoD Architecture Framework (DoDAF)",
    "Knowledge of zero trust architecture and federal cybersecurity frameworks",
    "Prior experience with agency-wide modernization initiatives",
    "Familiarity with microservices, containerization, and cloud-native architectures"
  ]

  const benefits = [
    "Comprehensive health, dental, and vision insurance",
    "Competitive salary commensurate with experience",
    "Professional development and certification reimbursement",
    "Flexible work arrangements with remote options",
    "Generous PTO and federal holiday schedule",
    "401(k) matching program",
    "Continuing education support",
    "Leadership development opportunities"
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
            <h1 className="text-5xl md:text-6xl font-black mb-6">Enterprise Architect</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Shape the future of federal IT infrastructure through strategic enterprise architecture and innovative technology solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Briefcase className="w-5 h-5" />
                <span className="font-semibold">Full-Time</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Shield className="w-5 h-5" />
                <span className="font-semibold">Secret Clearance Required</span>
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
                Federal Working Group is seeking a senior-level Enterprise Architect to lead strategic technology
                planning and architecture design for federal agencies. The ideal candidate will have extensive
                experience developing enterprise architectures that align IT capabilities with mission objectives
                while ensuring compliance with federal standards and frameworks.
              </p>
              <p>
                You will serve as a trusted advisor to federal clients, providing expert guidance on technology
                modernization strategies, cloud adoption, and digital transformation initiatives. This role requires
                both deep technical expertise and the ability to communicate complex architectural concepts to
                executive leadership and non-technical stakeholders.
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
            <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Shape the Future?</h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Join our team and lead transformative architecture initiatives that modernize federal IT infrastructure
              and enable mission success.
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
                href="mailto:careers@federalworkinggroup.com?subject=Enterprise Architect Application"
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
