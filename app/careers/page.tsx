'use client'

import { motion } from 'framer-motion'
import { Briefcase, Heart, Users, TrendingUp, Award, Gift, DollarSign, GraduationCap } from 'lucide-react'
import Link from 'next/link'

export default function CareersPage() {
  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision insurance for you and your family"
    },
    {
      icon: DollarSign,
      title: "Competitive Compensation",
      description: "Competitive salaries and performance-based bonuses"
    },
    {
      icon: GraduationCap,
      title: "Professional Development",
      description: "Training programs, certifications, and continuous learning opportunities"
    },
    {
      icon: Gift,
      title: "Work-Life Balance",
      description: "Flexible work arrangements and generous PTO policy"
    }
  ]

  const culture = [
    {
      icon: TrendingUp,
      title: "Entrepreneurial Spirit",
      description: "Our entrepreneurial culture rewards employees who are willing to make a commitment and find dynamic solutions to complex problems"
    },
    {
      icon: Users,
      title: "Collaborative Environment",
      description: "Work with a diverse team of inventive thinkers and courageous doers in a highly collaborative setting"
    },
    {
      icon: Award,
      title: "Recognition & Growth",
      description: "Make a difference and be recognized for the value you offer in an environment that values your creativity and experience"
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
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-black mb-6">Join Our Team</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              If you are looking for a place where you can put your creativity and experience to work, make a difference and be recognized for the value you offer, you've found it here.
            </p>
            <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full">
              <span className="text-sm font-bold tracking-wider">WE'RE SEEKING DYNAMIC AND SKILLED PROFESSIONALS</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Work Here */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black mb-6 text-slate-900">Why Federal Working Group?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              An entrepreneurial environment where innovation meets opportunity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {culture.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
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

      {/* Benefits */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black mb-6 text-slate-900">Comprehensive Benefits</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We invest in our employees' well-being and professional growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/90 backdrop-blur-xl p-6 rounded-xl shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-blue-800" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-slate-900">{benefit.title}</h3>
                <p className="text-sm text-slate-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings CTA */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-12 border border-blue-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-20 h-20 bg-blue-800 rounded-2xl flex items-center justify-center mb-6">
                  <Briefcase className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl font-black mb-4 text-slate-900">Current Openings</h2>
                <p className="text-lg text-slate-600 mb-6">
                  We're always looking for talented professionals to join our team. Explore our current opportunities and find your perfect fit.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-800 rounded-full"></div>
                    <span className="text-slate-700">Project Managers</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-800 rounded-full"></div>
                    <span className="text-slate-700">IT Infrastructure Specialists</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-800 rounded-full"></div>
                    <span className="text-slate-700">Enterprise Architects</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-800 rounded-full"></div>
                    <span className="text-slate-700">Cybersecurity Professionals</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-4 text-slate-900">Submit Your Application</h3>
                <p className="text-slate-600 mb-6">
                  Don't see the perfect role? Send us your resume and let us know how you can contribute to our mission.
                </p>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Email Your Resume To:</label>
                    <Link
                      href="mailto:careers@federalworkinggroup.com"
                      className="text-blue-800 hover:text-blue-800 font-semibold text-lg"
                    >
                      careers@federalworkinggroup.com
                    </Link>
                  </div>
                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-sm text-slate-600">
                      Please include your resume, cover letter, and any relevant certifications or security clearances.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Employee Portal Link */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-black mb-6">Current Employees</h2>
            <p className="text-xl text-white/90 mb-8">
              Access employee resources, webmail, time tracking, and IT support through our employee portal.
            </p>
            <Link
              href="/employee-portal"
              className="inline-block px-8 py-4 bg-white text-blue-800 rounded-full font-bold text-lg hover:bg-slate-100 transition-all hover:shadow-lg hover:scale-105"
            >
              Access Employee Portal
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
