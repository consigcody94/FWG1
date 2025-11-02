'use client'

import { motion } from 'framer-motion'
import { Users, Clipboard, MessageSquare, CheckCircle, ArrowRight, Briefcase, MapPin, Clock, DollarSign, Target } from 'lucide-react'
import Link from 'next/link'

export default function ITProjectSiteLeadPage() {
  const responsibilities = [
    "Lead on-site operations for federal IT projects and initiatives",
    "Coordinate daily activities of project teams and technical staff",
    "Serve as primary point of contact for client stakeholders and agency representatives",
    "Monitor project progress, timelines, and deliverable quality",
    "Facilitate communication between remote teams and on-site personnel",
    "Manage resource allocation and staffing requirements for site operations",
    "Conduct regular status meetings and provide executive updates",
    "Ensure compliance with federal security protocols and site regulations",
    "Address and resolve operational issues and escalations promptly",
    "Maintain accurate project documentation and reporting"
  ]

  const requirements = [
    "Bachelor's degree in Information Technology, Business, or related field",
    "5+ years of experience in IT project management or site leadership",
    "PMP, CAPM, or equivalent project management certification preferred",
    "Proven experience managing federal government projects",
    "Strong leadership and team management capabilities",
    "Excellent stakeholder communication and relationship management skills",
    "Experience with Agile/Scrum methodologies",
    "Ability to obtain and maintain security clearance",
    "Proficiency with project management tools (MS Project, Jira, etc.)",
    "Strong problem-solving and conflict resolution abilities"
  ]

  const qualifications = [
    {
      icon: Users,
      title: "Leadership",
      description: "5+ years leading technical teams and managing federal projects"
    },
    {
      icon: MessageSquare,
      title: "Communication",
      description: "Expert stakeholder management and executive presentation skills"
    },
    {
      icon: Target,
      title: "Project Management",
      description: "PMP certified with proven track record of successful delivery"
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
            <h1 className="text-5xl md:text-6xl font-black mb-6">IT Project Site Lead</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mb-8">
              Lead on-site federal IT projects as the primary coordinator between technical teams, stakeholders, and agency representatives. Make an impact through exceptional leadership.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                <MapPin className="w-4 h-4" />
                <span className="font-semibold">Federal Sites / DC Area</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                <Clock className="w-4 h-4" />
                <span className="font-semibold">Full-Time</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                <DollarSign className="w-4 h-4" />
                <span className="font-semibold">Competitive Salary + Bonus</span>
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
              The ideal candidate combines technical knowledge with exceptional leadership
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
                As an IT Project Site Lead, you'll be the driving force behind successful federal IT projects, ensuring seamless coordination and exceptional delivery.
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
                We're seeking experienced leaders who can navigate the complexities of federal IT projects with confidence and expertise.
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
            <h2 className="text-4xl font-black mb-6">Ready to Lead?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Send your resume, cover letter, and leadership experience details to our careers team. We're looking for exceptional leaders to drive our federal projects.
            </p>
            <Link
              href="mailto:careers@federalworkinggroup.com?subject=IT Project Site Lead Application"
              className="inline-block px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-slate-100 transition-all hover:shadow-lg hover:scale-105"
            >
              Apply Now
            </Link>
            <p className="mt-6 text-white/80">
              Questions?{' '}
              <Link href="/careers/apply" className="underline hover:text-white">
                Learn more about our application process
              </Link>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
