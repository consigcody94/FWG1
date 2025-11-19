'use client'

import { motion } from 'framer-motion'
import { Users, Lightbulb, Target, Heart, TrendingUp, Award, Coffee, Rocket, ArrowRight, Star, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export default function LifeAtFWGPage() {
  const cultureValues = [
    {
      icon: Lightbulb,
      title: "Innovation & Creativity",
      description: "We encourage inventive thinking and reward dynamic solutions to complex problems. Your creative ideas are valued and implemented.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Collaborative Environment",
      description: "Work alongside diverse teams of skilled professionals who support each other's growth and success through collaboration.",
      color: "from-blue-700 to-indigo-500"
    },
    {
      icon: Target,
      title: "Mission-Driven Work",
      description: "Make a real impact on federal operations and serve the public good through meaningful technology solutions.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: TrendingUp,
      title: "Entrepreneurial Spirit",
      description: "Our entrepreneurial culture rewards commitment and empowers you to take ownership of your projects and career path.",
      color: "from-purple-500 to-pink-500"
    }
  ]

  const workEnvironment = [
    {
      icon: Coffee,
      title: "Flexible Work",
      description: "Remote and hybrid options with flexible schedules",
      highlight: "Work-Life Balance"
    },
    {
      icon: Rocket,
      title: "Fast Growth",
      description: "Rapid career advancement and skill development",
      highlight: "Career Growth"
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Regular acknowledgment of contributions and achievements",
      highlight: "Employee Recognition"
    },
    {
      icon: Heart,
      title: "Supportive Culture",
      description: "Mentorship programs and collaborative team dynamics",
      highlight: "Team Support"
    }
  ]

  const testimonials = [
    {
      quote: "FWG has given me opportunities to work on cutting-edge federal projects that truly make a difference. The entrepreneurial culture here is unlike anywhere I've worked before.",
      author: "Sarah M.",
      role: "Senior Project Manager",
      years: "5 years at FWG"
    },
    {
      quote: "The professional development support is exceptional. FWG invested in my certifications and training, which has accelerated my career growth significantly.",
      author: "James T.",
      role: "Enterprise Architect",
      years: "3 years at FWG"
    },
    {
      quote: "What I love most is the collaborative environment. Everyone from leadership to new hires is approachable and willing to share knowledge and support each other.",
      author: "Maria L.",
      role: "Cybersecurity Analyst",
      years: "2 years at FWG"
    }
  ]

  const perks = [
    "Regular team building events and company outings",
    "Modern technology and tools to do your best work",
    "Professional conference attendance opportunities",
    "Mentorship from industry leaders",
    "Collaborative workspaces and remote flexibility",
    "Employee recognition and awards programs",
    "Innovation challenges and hackathons",
    "Continuous learning culture"
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
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back to Careers
            </Link>
            <h1 className="text-5xl md:text-6xl font-black mb-6">Life at FWG</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              Experience a workplace where innovation meets opportunity, creativity is rewarded, and your contributions make a real difference in federal IT modernization.
            </p>
            <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full">
              <span className="text-sm font-bold tracking-wider">WHERE TALENT THRIVES & IMPACT HAPPENS</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Culture Values */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black mb-6 text-slate-900">Our Culture & Values</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              At FWG, our culture is built on innovation, collaboration, and making meaningful impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cultureValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className={`bg-gradient-to-br ${value.color} p-6`}>
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-white">{value.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-slate-700 text-lg">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Environment */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black mb-6 text-slate-900">Work Environment</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A workplace designed for productivity, growth, and well-being
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workEnvironment.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-blue-800" />
                </div>
                <div className="inline-block px-3 py-1 bg-blue-100 rounded-full mb-4">
                  <span className="text-xs font-bold text-blue-800">{item.highlight}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black mb-6 text-slate-900">Hear from Our Team</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real experiences from FWG employees about what it's like to work here
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
              >
                <MessageCircle className="w-12 h-12 text-blue-800 mb-6" />
                <p className="text-slate-700 text-lg mb-6 italic">"{testimonial.quote}"</p>
                <div className="border-t border-slate-200 pt-6">
                  <p className="font-bold text-slate-900">{testimonial.author}</p>
                  <p className="text-blue-800 font-semibold">{testimonial.role}</p>
                  <p className="text-sm text-slate-500 mt-2">{testimonial.years}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Perks & Activities */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Star className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl font-black mb-6">Beyond the Benefits</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Additional perks and activities that make FWG a great place to work
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {perks.map((perk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <Star className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                <span className="text-white text-lg">{perk}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Growth */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <TrendingUp className="w-16 h-16 text-blue-800 mb-6" />
              <h2 className="text-4xl font-black mb-6 text-slate-900">Career Growth & Development</h2>
              <p className="text-xl text-slate-600 mb-6">
                At FWG, we invest in your professional development and create clear pathways for career advancement.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-800 rounded-full mt-2"></div>
                  <div>
                    <p className="font-bold text-lg text-slate-900">Mentorship Programs</p>
                    <p className="text-slate-600">Learn from experienced professionals and industry leaders</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-800 rounded-full mt-2"></div>
                  <div>
                    <p className="font-bold text-lg text-slate-900">Certification Support</p>
                    <p className="text-slate-600">Full funding for relevant professional certifications</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-800 rounded-full mt-2"></div>
                  <div>
                    <p className="font-bold text-lg text-slate-900">Clear Advancement Paths</p>
                    <p className="text-slate-600">Transparent promotion criteria and career ladders</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-800 rounded-full mt-2"></div>
                  <div>
                    <p className="font-bold text-lg text-slate-900">Continuous Learning</p>
                    <p className="text-slate-600">Access to training platforms, conferences, and workshops</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200"
            >
              <h3 className="text-2xl font-bold mb-6 text-slate-900">Typical Career Progression</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <p className="font-bold text-lg text-slate-900">Year 1-2</p>
                    <p className="text-slate-600">Build expertise, earn certifications, contribute to projects</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <p className="font-bold text-lg text-slate-900">Year 3-4</p>
                    <p className="text-slate-600">Lead initiatives, mentor team members, expand responsibilities</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <p className="font-bold text-lg text-slate-900">Year 5+</p>
                    <p className="text-slate-600">Senior roles, leadership positions, strategic impact</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Rocket className="w-16 h-16 text-blue-800 mx-auto mb-6" />
            <h2 className="text-4xl font-black mb-6 text-slate-900">Ready to Join Us?</h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Experience the FWG culture for yourself. Explore our current openings and take the next step in your career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/careers/current-openings"
                className="px-8 py-4 bg-blue-800 text-white rounded-full font-bold text-lg hover:bg-blue-800 transition-all hover:shadow-lg hover:scale-105"
              >
                View Current Openings
              </Link>
              <Link
                href="/careers/benefits"
                className="px-8 py-4 bg-white text-blue-800 border-2 border-blue-800 rounded-full font-bold text-lg hover:bg-blue-50 transition-all"
              >
                Explore Benefits
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
