'use client'

import { motion } from 'framer-motion'
import { Users, Target, MessageSquare, Award, TrendingUp, Heart, Lightbulb, Zap } from 'lucide-react'
import Link from 'next/link'
import { VideoHero } from '../components/effects/VideoHero'

export default function AboutPage() {
  const coreValues = [
    {
      icon: TrendingUp,
      title: "High Performance",
      description: "Delivering best-in-class services leading to innovative solutions and high satisfaction levels"
    },
    {
      icon: Heart,
      title: "Commitment",
      description: "Unwavering dedication to serve our customers and exceed expectations"
    },
    {
      icon: MessageSquare,
      title: "Communication",
      description: "Transparent, clear, and consistent communication with all stakeholders"
    },
    {
      icon: Target,
      title: "Customer Focus",
      description: "Maintaining a track record of exceeding customer expectations"
    }
  ]

  const culturalPillars = [
    {
      icon: Lightbulb,
      title: "Innovate",
      description: "At FWG, innovation is at the heart of everything we do. We leverage cutting-edge technologies and forward-thinking strategies to create tailored solutions that drive success."
    },
    {
      icon: Users,
      title: "Collaborate",
      description: "At FWG, collaboration is the cornerstone of our success. We believe that the best solutions emerge from diverse perspectives and collective expertise working together."
    },
    {
      icon: Zap,
      title: "Execute",
      description: "At FWG, we are dedicated to the successful execution of projects. Our methodical approach combines strategic planning, agile methodologies, and deep understanding of clients' objectives."
    }
  ]

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <VideoHero videoSrc="/assets/about.mp4" />

      {/* Company Story */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-black mb-6 text-slate-900">Our Story</h2>
              <p className="text-lg text-slate-600 mb-4">
                Established in 2004, Federal Working Group has grown from a small team of 4 employees to over 100 professionals specializing in federal government services.
              </p>
              <p className="text-lg text-slate-600 mb-4">
                Our workplace emphasizes curiosity, creativity, collaboration, and an entrepreneurial spirit, positioning our employees as drivers of innovation.
              </p>
              <p className="text-lg text-slate-600">
                Over two decades, we've built a reputation for excellence, consistently delivering innovative solutions that exceed customer expectations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl text-center">
                <div className="text-5xl font-black text-blue-800 mb-2">20+</div>
                <div className="text-sm font-semibold text-slate-600">Years of Excellence</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl text-center">
                <div className="text-5xl font-black text-purple-600 mb-2">100+</div>
                <div className="text-sm font-semibold text-slate-600">Skilled Professionals</div>
              </div>
              <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-8 rounded-xl text-center">
                <div className="text-5xl font-black text-cyan-600 mb-2">150+</div>
                <div className="text-sm font-semibold text-slate-600">Government Partners</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl text-center">
                <div className="text-5xl font-black text-green-600 mb-2">1000+</div>
                <div className="text-sm font-semibold text-slate-600">Projects Completed</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cultural Pillars */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black mb-6 text-slate-900">How We Work</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Three core principles guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {culturalPillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-700 to-blue-800 rounded-2xl flex items-center justify-center mb-6">
                  <pillar.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black mb-4 text-slate-900">{pillar.title}</h3>
                <p className="text-slate-600">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black mb-6 text-slate-900">Our Core Values</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Four cornerstones to our success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-10 h-10 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learn More About FWG */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-black mb-6 text-slate-900">Learn More</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Explore our clients, quality commitment, and service offerings
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border border-blue-200 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-3 text-slate-900">Our Clients</h3>
              <p className="text-slate-600 mb-6">
                Trusted by 9 major federal agencies including Department of Commerce, Treasury, DHS, and more.
              </p>
              <Link
                href="/about/our-clients"
                className="inline-block px-6 py-3 bg-blue-800 text-white rounded-full font-semibold hover:bg-blue-800 transition-colors"
              >
                View Client Portfolio →
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl border border-purple-200 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-3 text-slate-900">Commitment to Quality</h3>
              <p className="text-slate-600 mb-6">
                Learn about our three pillars of quality: Assurance, Controls, and Continuous Improvement.
              </p>
              <Link
                href="/about/commitment-to-quality"
                className="inline-block px-6 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition-colors"
              >
                Explore Our Quality →
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-black mb-6 text-slate-900">What We Offer</h3>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
              Comprehensive federal IT services delivered by experienced professionals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold mb-3 text-slate-900">Program and Project Management Services</h3>
              <p className="text-slate-600">PMI-certified professionals delivering excellence in project execution</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold mb-3 text-slate-900">IT Infrastructure, Technologies and Solutions</h3>
              <p className="text-slate-600">Comprehensive infrastructure and cloud transformation services</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold mb-3 text-slate-900">Enterprise Architecture</h3>
              <p className="text-slate-600">Strategic architecture aligned with business objectives</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold mb-3 text-slate-900">IT Security, Strategy and Operations</h3>
              <p className="text-slate-600">ITIL and SEI best practices for secure operations</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/services"
              className="inline-block px-8 py-4 bg-blue-800 text-white rounded-full font-bold text-lg hover:bg-blue-800 transition-all hover:shadow-lg hover:scale-105"
            >
              Explore Our Services
            </Link>
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
            <h2 className="text-4xl font-black mb-6">Join Our Team</h2>
            <p className="text-xl text-white/90 mb-8">
              Looking for a place where you can put your creativity and experience to work? We're seeking dynamic and skilled professionals to join our team.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/careers"
                className="inline-block px-8 py-4 bg-white text-blue-800 rounded-full font-bold text-lg hover:bg-slate-100 transition-all hover:shadow-lg hover:scale-105"
              >
                View Career Opportunities
              </Link>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
