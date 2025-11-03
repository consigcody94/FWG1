'use client'

import { motion } from 'framer-motion'
import { Briefcase, MapPin, Clock, DollarSign, Search, Filter, ArrowRight, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function CurrentOpeningsPage() {
  const [selectedDepartment, setSelectedDepartment] = useState('All')

  const departments = ['All', 'Project Management', 'IT Infrastructure', 'Legal Technology', 'Cybersecurity', 'Enterprise Architecture']

  const jobs = [
    {
      title: "E-Discovery Analyst",
      department: "Legal Technology",
      location: "Washington, DC / Remote",
      type: "Full-Time",
      salary: "Competitive",
      link: "/careers/e-discovery-analyst",
      description: "Manage electronic discovery workflows and support federal litigation with cutting-edge e-discovery platforms."
    },
    {
      title: "IT Project Site Lead",
      department: "Project Management",
      location: "Federal Sites / DC Area",
      type: "Full-Time",
      salary: "Competitive + Bonus",
      link: "/careers/it-project-site-lead",
      description: "Lead on-site federal IT projects as primary coordinator between technical teams and stakeholders."
    },
    {
      title: "Senior Project Online Analyst",
      department: "Project Management",
      location: "Washington, DC / Remote",
      type: "Full-Time",
      salary: "Senior Level",
      link: "/careers/senior-project-online-analyst",
      description: "Design and implement Microsoft Project Online and PPM solutions for federal agencies."
    },
    {
      title: "Senior Project Manager",
      department: "Project Management",
      location: "Washington, DC",
      type: "Full-Time",
      salary: "Competitive",
      link: "/careers",
      description: "Lead complex federal IT projects from initiation through delivery, managing cross-functional teams."
    },
    {
      title: "Enterprise Architect",
      department: "Enterprise Architecture",
      location: "Washington, DC / Remote",
      type: "Full-Time",
      salary: "Senior Level",
      link: "/careers",
      description: "Design enterprise architecture solutions for federal agencies using modern frameworks and methodologies."
    },
    {
      title: "Cybersecurity Analyst",
      department: "Cybersecurity",
      location: "Washington, DC",
      type: "Full-Time",
      salary: "Competitive",
      link: "/careers",
      description: "Implement security controls and monitoring for federal systems in compliance with NIST frameworks."
    },
    {
      title: "IT Infrastructure Specialist",
      department: "IT Infrastructure",
      location: "DC Metro Area",
      type: "Full-Time",
      salary: "Competitive",
      link: "/careers",
      description: "Manage and optimize federal IT infrastructure including servers, networks, and cloud environments."
    },
    {
      title: "SharePoint Administrator",
      department: "IT Infrastructure",
      location: "Washington, DC / Remote",
      type: "Full-Time",
      salary: "Competitive",
      link: "/careers",
      description: "Administer SharePoint Online environments and develop custom solutions for federal collaboration."
    }
  ]

  const filteredJobs = selectedDepartment === 'All'
    ? jobs
    : jobs.filter(job => job.department === selectedDepartment)

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
            <h1 className="text-5xl md:text-6xl font-black mb-6">Current Openings</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              Join our team of talented professionals working on mission-critical federal IT projects. Find your perfect role below.
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full">
              <Briefcase className="w-5 h-5" />
              <span className="text-sm font-bold tracking-wider">{filteredJobs.length} POSITIONS AVAILABLE</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Filter className="w-5 h-5 text-slate-600" />
              <h2 className="text-xl font-bold text-slate-900">Filter by Department</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDepartment(dept)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    selectedDepartment === dept
                      ? 'bg-blue-800 text-white shadow-lg scale-105'
                      : 'bg-white text-slate-600 hover:bg-slate-100 shadow-md'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-6">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={job.link}>
                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all hover:scale-[1.02] border border-slate-200 group">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-14 h-14 bg-gradient-to-br from-blue-700 to-blue-800 rounded-2xl flex items-center justify-center flex-shrink-0">
                            <Briefcase className="w-7 h-7 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-blue-800 transition-colors">
                              {job.title}
                            </h3>
                            <div className="inline-block px-3 py-1 bg-blue-100 rounded-full">
                              <span className="text-sm font-bold text-blue-800">{job.department}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-slate-600 mb-4">{job.description}</p>
                        <div className="flex flex-wrap gap-4">
                          <div className="flex items-center gap-2 text-slate-600">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold">{job.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-600">
                            <Clock className="w-4 h-4" />
                            <span className="text-sm font-semibold">{job.type}</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-600">
                            <DollarSign className="w-4 h-4" />
                            <span className="text-sm font-semibold">{job.salary}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <div className="flex items-center gap-2 px-6 py-3 bg-blue-800 text-white rounded-full font-bold group-hover:bg-blue-800 transition-colors">
                          <span>View Details</span>
                          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <Search className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-2">No positions found</h3>
              <p className="text-slate-600">Try selecting a different department filter</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Don't See a Fit */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-12 border border-blue-200 text-center"
          >
            <h2 className="text-4xl font-black mb-6 text-slate-900">Don't See the Perfect Role?</h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              We're always looking for talented professionals. Send us your resume and let us know how you can contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="mailto:careers@federalworkinggroup.com"
                className="px-8 py-4 bg-blue-800 text-white rounded-full font-bold text-lg hover:bg-blue-800 transition-all hover:shadow-lg hover:scale-105"
              >
                Submit General Application
              </Link>
              <Link
                href="/careers/apply"
                className="px-8 py-4 bg-white text-blue-800 border-2 border-blue-800 rounded-full font-bold text-lg hover:bg-blue-50 transition-all"
              >
                Application Process
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-black mb-6">Why Work at FWG?</h2>
              <p className="text-xl text-white/90 mb-6">
                Join a dynamic team that values innovation, collaboration, and professional growth. We offer competitive compensation, comprehensive benefits, and meaningful work.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-white/90">Competitive salaries and performance bonuses</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-white/90">Comprehensive health, dental, and vision insurance</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-white/90">401(k) with company matching</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-white/90">Professional development and certification support</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-white/90">Flexible work arrangements</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-4"
            >
              <Link
                href="/careers/benefits"
                className="px-8 py-4 bg-white text-blue-800 rounded-full font-bold text-lg hover:bg-slate-100 transition-all hover:shadow-lg text-center"
              >
                Explore Full Benefits Package
              </Link>
              <Link
                href="/careers/life-at-fwg"
                className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white border-2 border-white rounded-full font-bold text-lg hover:bg-white/30 transition-all text-center"
              >
                Learn About Life at FWG
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
