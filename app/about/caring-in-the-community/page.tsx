'use client'

import { motion } from 'framer-motion'
import { Heart, Users, TreePine, Handshake, Gift, Target } from 'lucide-react'
import Link from 'next/link'

export default function CaringInTheCommunityPage() {
  const partnerships = [
    {
      icon: Users,
      title: "Local Charities",
      description: "Supporting food banks, homeless shelters, and community development organizations that strengthen our neighborhoods"
    },
    {
      icon: Target,
      title: "Education Initiatives",
      description: "STEM education programs, coding bootcamps for underserved communities, and scholarship opportunities"
    },
    {
      icon: Handshake,
      title: "Volunteer Programs",
      description: "Team volunteer days, mentorship programs, and skills-based volunteering to maximize community impact"
    }
  ]

  const environmental = [
    {
      icon: TreePine,
      title: "Sustainable Practices",
      description: "Paperless operations, energy-efficient offices, and carbon footprint reduction initiatives"
    },
    {
      icon: TreePine,
      title: "Green Technology",
      description: "Promoting sustainable IT solutions and helping federal clients adopt eco-friendly technologies"
    }
  ]

  const engagement = [
    {
      icon: Heart,
      title: "Volunteer Time Off",
      description: "Paid time off for employees to volunteer with causes they're passionate about"
    },
    {
      icon: Gift,
      title: "Matching Donations",
      description: "Company matches employee charitable donations to amplify their impact"
    },
    {
      icon: Users,
      title: "Team Service Events",
      description: "Regular company-wide volunteer activities building community and camaraderie"
    }
  ]

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 to-blue-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-6">
              <Heart className="w-4 h-4" />
              GIVING BACK • BUILDING COMMUNITY
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6">Caring in the Community</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Our commitment extends beyond business - we're dedicated to making a positive impact in the communities we serve
            </p>
          </motion.div>
        </div>
      </section>

      {/* Corporate Social Responsibility Vision */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl font-black mb-6 text-slate-900">Our CSR Vision</h2>
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-12 border border-green-200">
              <p className="text-xl text-slate-700 leading-relaxed mb-6">
                At Federal Working Group, we believe that business success and social responsibility go hand in hand. Our corporate social responsibility initiatives reflect our core values of service, integrity, and community engagement.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We're committed to creating positive change through strategic partnerships, environmental stewardship, and empowering our employees to make a difference.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Partnerships */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black mb-6 text-slate-900">Community Partnerships</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Building lasting relationships with organizations that strengthen our communities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerships.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mb-6">
                    <item.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Commitment */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black mb-6 text-slate-900">Environmental Commitment</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Sustainable practices and green initiatives for a better tomorrow
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {environmental.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200 rounded-xl p-8 hover:border-green-600 hover:shadow-2xl transition-all duration-300 h-full">
                  <div className="flex items-start gap-6">
                    <div className="p-4 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex-shrink-0">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 text-slate-900">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Engagement */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black mb-6 text-slate-900">Employee Engagement</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Empowering our team to make a difference in causes they care about
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {engagement.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-blue-800" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-900 text-center">{item.title}</h3>
                  <p className="text-slate-600 text-center leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Highlights */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-green-600 to-blue-800 text-white rounded-3xl p-12 md:p-16 text-center"
          >
            <h2 className="text-4xl font-black mb-6">Making a Real Difference</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12">
              Together with our employees and partners, we're creating lasting positive impact in our communities
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-4xl font-black mb-2">1000+</div>
                <div className="text-lg text-white/90">Volunteer Hours Annually</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-4xl font-black mb-2">25+</div>
                <div className="text-lg text-white/90">Partner Organizations</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-4xl font-black mb-2">100%</div>
                <div className="text-lg text-white/90">Employee Participation</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-black mb-6">Join Our Mission</h2>
            <p className="text-xl text-white/90 mb-8">
              Partner with a company that values community impact as much as business success
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-white text-blue-800 rounded-full font-bold text-lg hover:bg-slate-100 transition-all hover:shadow-lg hover:scale-105"
              >
                Contact Us
              </Link>
              <Link
                href="/about/why-fwg"
                className="inline-block px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all"
              >
                Learn More About FWG
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
