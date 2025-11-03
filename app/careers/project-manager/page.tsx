'use client'

import { motion } from 'framer-motion'
import { Briefcase, CheckCircle, Award, Shield, Mail, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function ProjectManagerPage() {
  // JSON-LD structured data for JobPosting
  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Project Manager",
    "description": "Lead critical IT modernization initiatives for federal agencies and drive mission success through expert project management.",
    "datePosted": "2025-11-03",
    "employmentType": "FULL_TIME",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Federal Working Group",
      "sameAs": "https://www.federalworking.com",
      "logo": "https://www.federalworking.com/assets/fwg-logo.png"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "7918 Jones Branch Drive, 4th Floor",
        "addressLocality": "McLean",
        "addressRegion": "VA",
        "postalCode": "22102",
        "addressCountry": "US"
      }
    },
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": {
        "@type": "QuantitativeValue",
        "minValue": 90000,
        "maxValue": 140000,
        "unitText": "YEAR"
      }
    },
    "qualifications": "Bachelor's degree, PMP certification, 5+ years federal IT project management experience, Secret clearance",
    "responsibilities": "Lead IT modernization projects, manage scope/schedule/budget, coordinate stakeholders, develop project documentation",
    "industry": "Information Technology",
    "securityClearanceRequirement": "Secret"
  }

  const responsibilities = [
    "Lead IT modernization projects for federal agencies from initiation through closure",
    "Manage project scope, schedule, budget, and resources using both Agile and Waterfall methodologies",
    "Coordinate with stakeholders across multiple federal agencies and contractor teams",
    "Develop and maintain comprehensive project documentation, including project plans, risk registers, and status reports",
    "Facilitate project meetings, stand-ups, and stakeholder briefings",
    "Identify and mitigate project risks while managing change control processes",
    "Ensure compliance with federal project management standards and agency-specific requirements",
    "Mentor junior project team members and contribute to organizational PM best practices"
  ]

  const requiredQualifications = [
    "Bachelor's degree in Computer Science, Information Technology, Business Administration, or related field",
    "Project Management Professional (PMP) certification required",
    "Minimum 5 years of experience managing federal IT projects",
    "Active Secret security clearance or ability to obtain",
    "Demonstrated experience with Agile and Waterfall methodologies",
    "Experience with federal procurement processes and FAR/DFAR regulations",
    "Strong understanding of federal IT systems and modernization initiatives",
    "Excellent communication and stakeholder management skills"
  ]

  const preferredQualifications = [
    "Master's degree in related field",
    "Agile certifications (CSM, SAFe, PMI-ACP)",
    "Experience with federal cloud migration projects",
    "Knowledge of FITARA and federal IT compliance frameworks",
    "Experience with tools like JIRA, Microsoft Project, and Smartsheet",
    "Prior experience with DoD or civilian federal agencies"
  ]

  const benefits = [
    "Comprehensive health, dental, and vision insurance",
    "Competitive salary with performance-based bonuses",
    "Professional development and certification reimbursement",
    "Flexible work arrangements and remote options",
    "Generous PTO and federal holiday schedule",
    "401(k) matching program",
    "Tuition assistance for continued education",
    "Career advancement opportunities"
  ]

  return (
    <div className="bg-white min-h-screen">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
      />
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
            <h1 className="text-5xl md:text-6xl font-black mb-6">Project Manager</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Lead critical IT modernization initiatives for federal agencies and drive mission success through expert project management.
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
                Federal Working Group is seeking an experienced Project Manager to lead complex IT modernization projects
                for federal agencies. The ideal candidate will have a proven track record of successfully delivering
                federal IT projects on time and within budget, while maintaining strong stakeholder relationships and
                ensuring compliance with federal standards.
              </p>
              <p>
                You will work directly with federal clients to understand their mission-critical needs, develop
                comprehensive project plans, and lead cross-functional teams to deliver innovative technology solutions.
                This role requires both technical acumen and exceptional leadership skills to navigate the unique
                challenges of federal IT project delivery.
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
            <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Make an Impact?</h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Join our team and help modernize federal IT infrastructure while advancing your career with a
              leading government contractor.
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
                href="mailto:careers@federalworkinggroup.com?subject=Project Manager Application"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-800 rounded-full font-bold text-lg hover:bg-slate-100 transition-all hover:shadow-lg hover:scale-105"
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
