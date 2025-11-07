'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AccessibilityPage() {
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
            <h1 className="text-5xl md:text-6xl font-black mb-6">Accessibility Statement</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Federal Working Group is committed to ensuring digital accessibility for all users.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto prose prose-slate prose-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Our Commitment</h2>
            <p className="text-slate-600 mb-6">
              Federal Working Group is committed to ensuring that our website is accessible to people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Conformance Status</h2>
            <p className="text-slate-600 mb-6">
              We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. These guidelines explain how to make web content more accessible for people with disabilities and user-friendly for everyone.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Accessibility Features</h2>
            <p className="text-slate-600 mb-6">
              Our website includes the following accessibility features:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-6">
              <li>Keyboard navigation support</li>
              <li>Skip navigation links for screen readers</li>
              <li>Descriptive alt text for images</li>
              <li>Semantic HTML structure</li>
              <li>ARIA labels and landmarks</li>
              <li>Sufficient color contrast ratios</li>
              <li>Resizable text without loss of functionality</li>
              <li>Form labels and error messages</li>
              <li>Accessible contact forms</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Known Limitations</h2>
            <p className="text-slate-600 mb-6">
              Despite our best efforts, some content on this website may not yet be fully accessible. We are actively working to address the following known limitations:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-6">
              <li>Some older PDF documents may not be fully accessible</li>
              <li>Background videos currently lack captions (coming soon)</li>
              <li>Some third-party embedded content may have accessibility limitations</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Assistive Technologies</h2>
            <p className="text-slate-600 mb-6">
              Our website is designed to be compatible with the following assistive technologies:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-6">
              <li>Screen readers (JAWS, NVDA, VoiceOver)</li>
              <li>Screen magnification software</li>
              <li>Speech recognition software</li>
              <li>Keyboard-only navigation</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Feedback and Contact</h2>
            <p className="text-slate-600 mb-6">
              We welcome your feedback on the accessibility of our website. If you encounter any accessibility barriers or have suggestions for improvement, please contact us:
            </p>
            <div className="bg-slate-50 p-6 rounded-xl mb-6">
              <p className="text-slate-900 font-semibold">Federal Working Group</p>
              <p className="text-slate-600">7918 Jones Branch Drive, 4th Floor</p>
              <p className="text-slate-600">McLean, VA 22102</p>
              <p className="text-slate-600 mt-2">Email: info@federalworking.com</p>
              <Link href="/contact" className="inline-block mt-4 px-6 py-3 bg-blue-800 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors">
                Contact Us
              </Link>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Continuous Improvement</h2>
            <p className="text-slate-600 mb-6">
              Accessibility is an ongoing effort. We regularly review our website and make improvements based on:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-6">
              <li>User feedback and testing</li>
              <li>Automated accessibility audits</li>
              <li>Manual testing with assistive technologies</li>
              <li>Updates to WCAG guidelines</li>
              <li>Industry best practices</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Technical Specifications</h2>
            <p className="text-slate-600 mb-6">
              The accessibility of this website relies on the following technologies:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-6">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript (with graceful degradation)</li>
              <li>WAI-ARIA</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Assessment and Testing</h2>
            <p className="text-slate-600 mb-6">
              Federal Working Group assessed the accessibility of this website through:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-6">
              <li>Internal evaluation and testing</li>
              <li>Automated accessibility testing tools</li>
              <li>Keyboard navigation testing</li>
              <li>Screen reader compatibility testing</li>
            </ul>

            <p className="text-slate-600 mt-8">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
