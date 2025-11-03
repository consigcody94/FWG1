'use client'

import { motion } from 'framer-motion'
import { LineChart, Database, BarChart3, CheckCircle, ArrowRight, Briefcase, MapPin, Clock, DollarSign, Zap } from 'lucide-react'
import Link from 'next/link'

export default function SeniorProjectOnlineAnalystPage() {
  const responsibilities = [
    "Design and implement Microsoft Project Online and PPM solutions for federal agencies",
    "Configure and customize Project Online sites, workflows, and reporting",
    "Integrate Project Online with SharePoint, Power BI, and Microsoft 365 ecosystem",
    "Develop advanced portfolio dashboards and executive reporting solutions",
    "Provide technical guidance on project portfolio management best practices",
    "Conduct requirements gathering and solution architecture for PPM implementations",
    "Create and maintain project templates, custom fields, and calculated columns",
    "Train users and administrators on Project Online capabilities and features",
    "Troubleshoot technical issues and optimize system performance",
    "Migrate legacy project data to Project Online environments"
  ]

  const requirements = [
    "Bachelor's degree in Computer Science, Information Systems, or related field",
    "5+ years of hands-on experience with Microsoft Project Online/Project for the Web",
    "Expert-level knowledge of project portfolio management concepts and tools",
    "Strong experience with Power BI for project reporting and analytics",
    "Proficiency in SharePoint Online administration and customization",
    "Experience with Power Automate (Flow) and PowerApps integration",
    "Knowledge of JavaScript, REST API, and CSOM for Project Online",
    "Federal government project management experience strongly preferred",
    "Excellent analytical and problem-solving capabilities",
    "Strong communication skills with technical and executive audiences",
    "Ability to obtain and maintain security clearance"
  ]

  const qualifications = [
    {
      icon: LineChart,
      title: "Project Online Expert",
      description: "5+ years implementing and optimizing MS Project Online and PPM solutions"
    },
    {
      icon: BarChart3,
      title: "Power BI Analytics",
      description: "Advanced reporting and dashboard creation for executive insights"
    },
    {
      icon: Zap,
      title: "Integration Specialist",
      description: "Expert in SharePoint, Power Platform, and Microsoft 365 integrations"
    }
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
          >
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back to Careers
            </Link>
            <h1 className="text-5xl md:text-6xl font-black mb-6">Senior Project Online Analyst</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mb-8">
              Transform federal project portfolio management with Microsoft Project Online expertise. Design enterprise PPM solutions that drive strategic decision-making.
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
                <span className="font-semibold">Senior Level Compensation</span>
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
              The ideal candidate is a recognized expert in Microsoft Project Online and PPM solutions
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
                <div className="w-16 h-16 bg-gradient-to-br from-blue-700 to-blue-800 rounded-2xl flex items-center justify-center mb-6">
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
                As a Senior Project Online Analyst, you'll architect and implement enterprise PPM solutions that transform how federal agencies manage project portfolios.
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
                    <CheckCircle className="w-6 h-6 text-blue-800 flex-shrink-0 mt-0.5" />
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
                We're seeking senior-level professionals with deep technical expertise in Microsoft Project Online and the broader Microsoft ecosystem.
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
                    <CheckCircle className="w-6 h-6 text-blue-800 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-black mb-6 text-slate-900">Technology Stack</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12">
              Work with cutting-edge Microsoft technologies and enterprise tools
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Microsoft Project Online',
              'Project for the Web',
              'Power BI',
              'SharePoint Online',
              'Power Automate',
              'PowerApps',
              'REST API',
              'JavaScript/CSOM'
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white/90 backdrop-blur-xl p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <span className="font-bold text-slate-900">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-900 to-blue-900 text-white">
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
            <h2 className="text-4xl font-black mb-6">Ready to Make an Impact?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join our team and help federal agencies transform their project portfolio management capabilities with Microsoft Project Online.
            </p>
            <Link
              href="mailto:careers@federalworkinggroup.com?subject=Senior Project Online Analyst Application"
              className="inline-block px-8 py-4 bg-white text-blue-800 rounded-full font-bold text-lg hover:bg-slate-100 transition-all hover:shadow-lg hover:scale-105"
            >
              Apply Now
            </Link>
            <p className="mt-6 text-white/80">
              Explore all{' '}
              <Link href="/careers/current-openings" className="underline hover:text-white">
                current openings
              </Link>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
