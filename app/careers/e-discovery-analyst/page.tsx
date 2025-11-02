'use client'

import { motion } from 'framer-motion'
import { Search, Database, Shield, CheckCircle, ArrowRight, Briefcase, MapPin, Clock, DollarSign } from 'lucide-react'
import Link from 'next/link'

export default function EDiscoveryAnalystPage() {
  const responsibilities = [
    "Manage electronic discovery data collection and processing workflows",
    "Administer and maintain review platforms (Relativity, Nuix, etc.)",
    "Coordinate with legal teams on discovery requests and data requirements",
    "Ensure compliance with federal e-discovery protocols and chain of custody",
    "Perform quality control and data validation on processed documents",
    "Generate reports and metrics on review progress and data volumes",
    "Troubleshoot technical issues and provide support to review teams",
    "Implement and maintain security protocols for sensitive legal data"
  ]

  const requirements = [
    "Bachelor's degree in Computer Science, Information Technology, or related field",
    "3+ years of experience in e-discovery or legal technology",
    "Relativity Certified Administrator (RCA) or Nuix certification required",
    "Strong knowledge of EDRM (Electronic Discovery Reference Model)",
    "Experience with data processing tools and review platforms",
    "Understanding of federal litigation support and legal hold procedures",
    "Excellent analytical and problem-solving skills",
    "Ability to obtain and maintain security clearance",
    "Strong communication skills for technical and non-technical audiences"
  ]

  const qualifications = [
    {
      icon: Shield,
      title: "Certifications",
      description: "Relativity RCA, Nuix Certification, or equivalent legal tech credentials"
    },
    {
      icon: Database,
      title: "Technical Skills",
      description: "Experience with SQL, data analytics, and enterprise legal platforms"
    },
    {
      icon: Search,
      title: "Legal Experience",
      description: "Knowledge of federal discovery processes and litigation support"
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
          >
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back to Careers
            </Link>
            <h1 className="text-5xl md:text-6xl font-black mb-6">E-Discovery Analyst</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mb-8">
              Join our legal technology team to manage electronic discovery workflows and support federal litigation projects with cutting-edge e-discovery platforms.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                <MapPin className="w-4 h-4" />
                <span className="font-semibold">Washington, DC / Remote</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                <Clock className="w-4 h-4" />
                <span className="font-semibold">Full-Time</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                <DollarSign className="w-4 h-4" />
                <span className="font-semibold">Competitive Salary</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Qualifications */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black mb-6 text-slate-900">Key Qualifications</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The ideal candidate brings legal tech expertise and federal experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {qualifications.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black mb-4 text-slate-900">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsibilities */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-black mb-6 text-slate-900">Responsibilities</h2>
              <p className="text-lg text-slate-600 mb-8">
                As an E-Discovery Analyst, you'll be at the forefront of legal technology, managing complex discovery workflows for federal agencies and ensuring compliance with legal standards.
              </p>
              <div className="space-y-4">
                {responsibilities.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-black mb-6 text-slate-900">Requirements</h2>
              <p className="text-lg text-slate-600 mb-8">
                We're looking for experienced professionals with a strong background in legal technology and federal e-discovery processes.
              </p>
              <div className="space-y-4">
                {requirements.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Briefcase className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-black mb-6">Ready to Apply?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Send your resume, cover letter, and relevant certifications to our careers team. We'll review your application and get back to you promptly.
            </p>
            <Link
              href="mailto:careers@federalworkinggroup.com?subject=E-Discovery Analyst Application"
              className="inline-block px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-slate-100 transition-all hover:shadow-lg hover:scale-105"
            >
              Apply Now
            </Link>
            <p className="mt-6 text-white/80">
              Or learn more about our{' '}
              <Link href="/careers/benefits" className="underline hover:text-white">
                benefits and perks
              </Link>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
