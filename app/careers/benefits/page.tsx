'use client'

import { motion } from 'framer-motion'
import { Heart, DollarSign, GraduationCap, Umbrella, Clock, TrendingUp, Users, Award, Home, Plane, Gift, Shield, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function BenefitsPage() {
  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      items: [
        "Comprehensive medical insurance with multiple plan options",
        "Dental and vision coverage for employees and families",
        "Health Savings Account (HSA) with employer contributions",
        "Employee Assistance Program (EAP) for mental health support",
        "Wellness programs and fitness reimbursements"
      ],
      color: "from-red-500 to-pink-500"
    },
    {
      icon: DollarSign,
      title: "Financial Benefits",
      items: [
        "Competitive salaries aligned with market rates",
        "Performance-based bonuses and incentives",
        "401(k) retirement plan with company matching",
        "Profit sharing opportunities",
        "Referral bonuses for successful hires"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: GraduationCap,
      title: "Professional Development",
      items: [
        "Tuition reimbursement for relevant degree programs",
        "Professional certification support and exam fees",
        "Annual training and conference allowances",
        "Access to online learning platforms and courses",
        "Mentorship and career development programs"
      ],
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Clock,
      title: "Work-Life Balance",
      items: [
        "Flexible work arrangements and remote work options",
        "Generous paid time off (PTO) policy",
        "Paid holidays including federal holidays",
        "Paid parental leave for new parents",
        "Flexible schedules to accommodate personal needs"
      ],
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: Umbrella,
      title: "Insurance & Protection",
      items: [
        "Life insurance and AD&D coverage",
        "Short-term and long-term disability insurance",
        "Professional liability insurance",
        "Identity theft protection services",
        "Legal assistance program"
      ],
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: Gift,
      title: "Additional Perks",
      items: [
        "Employee recognition and awards programs",
        "Team building events and company outings",
        "Technology stipend for remote workers",
        "Commuter benefits and parking reimbursement",
        "Employee discounts on products and services"
      ],
      color: "from-cyan-500 to-teal-500"
    }
  ]

  const highlights = [
    {
      icon: TrendingUp,
      title: "Competitive Compensation",
      description: "Market-leading salaries with performance bonuses"
    },
    {
      icon: Shield,
      title: "Comprehensive Coverage",
      description: "Full health, dental, vision, and life insurance"
    },
    {
      icon: Home,
      title: "Work Flexibility",
      description: "Remote work options and flexible schedules"
    },
    {
      icon: Award,
      title: "Career Growth",
      description: "Continuous learning and advancement opportunities"
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
            <h1 className="text-5xl md:text-6xl font-black mb-6">Benefits & Perks</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              We invest in our employees' well-being, growth, and success. Discover the comprehensive benefits package that makes FWG a great place to work.
            </p>
            <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full">
              <span className="text-sm font-bold tracking-wider">SUPPORTING YOUR SUCCESS & WELL-BEING</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Highlights */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black mb-6 text-slate-900">Why Our Benefits Matter</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We believe in taking care of our employees so they can focus on doing their best work
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Benefits */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black mb-6 text-slate-900">Complete Benefits Package</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Everything you need to thrive professionally and personally
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className={`bg-gradient-to-br ${category.color} p-6`}>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <category.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-black text-white">{category.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 401k Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <TrendingUp className="w-16 h-16 text-blue-400 mb-6" />
              <h2 className="text-4xl font-black mb-6">Retirement Planning</h2>
              <p className="text-xl text-white/90 mb-6">
                We're committed to helping you build a secure financial future through our comprehensive 401(k) retirement program.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <div>
                    <p className="font-bold text-lg">Company Matching</p>
                    <p className="text-white/80">Generous employer match on your contributions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <div>
                    <p className="font-bold text-lg">Investment Options</p>
                    <p className="text-white/80">Diverse portfolio options to match your risk tolerance</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <div>
                    <p className="font-bold text-lg">Financial Guidance</p>
                    <p className="text-white/80">Access to professional financial advisors</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold mb-6">Additional Financial Benefits</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <DollarSign className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Profit Sharing</p>
                    <p className="text-sm text-white/80">Annual profit sharing based on company performance</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Performance Bonuses</p>
                    <p className="text-sm text-white/80">Recognition for exceptional contributions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Referral Bonuses</p>
                    <p className="text-sm text-white/80">Rewards for bringing talented people to our team</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Gift className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-4xl font-black mb-6 text-slate-900">Join Our Team</h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Ready to enjoy these benefits while making an impact on federal IT modernization? Explore our current openings and apply today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/careers/current-openings"
                className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all hover:shadow-lg hover:scale-105"
              >
                View Current Openings
              </Link>
              <Link
                href="/careers/apply"
                className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-full font-bold text-lg hover:bg-blue-50 transition-all"
              >
                Learn How to Apply
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
