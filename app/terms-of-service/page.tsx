'use client'

import { motion } from 'framer-motion'

export default function TermsOfServicePage() {
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
            <h1 className="text-5xl md:text-6xl font-black mb-6">Terms of Service</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Please read these terms carefully before using our website and services.
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
            <p className="text-slate-600 mb-6">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Agreement to Terms</h2>
            <p className="text-slate-600 mb-6">
              By accessing and using the Federal Working Group website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this website.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Use License</h2>
            <p className="text-slate-600 mb-6">
              Permission is granted to temporarily download one copy of the materials on Federal Working Group's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-6">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or public display</li>
              <li>Attempt to decompile or reverse engineer any software on the website</li>
              <li>Remove any copyright or proprietary notations from the materials</li>
              <li>Transfer the materials to another person or mirror the materials on another server</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Disclaimer</h2>
            <p className="text-slate-600 mb-6">
              The materials on Federal Working Group's website are provided on an 'as is' basis. Federal Working Group makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Limitations</h2>
            <p className="text-slate-600 mb-6">
              In no event shall Federal Working Group or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Federal Working Group's website.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Accuracy of Materials</h2>
            <p className="text-slate-600 mb-6">
              The materials appearing on Federal Working Group's website could include technical, typographical, or photographic errors. Federal Working Group does not warrant that any of the materials on its website are accurate, complete, or current. Federal Working Group may make changes to the materials contained on its website at any time without notice.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Links</h2>
            <p className="text-slate-600 mb-6">
              Federal Working Group has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Federal Working Group of the site. Use of any such linked website is at the user's own risk.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Modifications</h2>
            <p className="text-slate-600 mb-6">
              Federal Working Group may revise these Terms of Service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these Terms of Service.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Governing Law</h2>
            <p className="text-slate-600 mb-6">
              These terms and conditions are governed by and construed in accordance with the laws of the Commonwealth of Virginia and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Contact Information</h2>
            <p className="text-slate-600 mb-6">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-slate-50 p-6 rounded-xl">
              <p className="text-slate-900 font-semibold">Federal Working Group</p>
              <p className="text-slate-600">7918 Jones Branch Drive, 4th Floor</p>
              <p className="text-slate-600">McLean, VA 22102</p>
              <p className="text-slate-600 mt-2">Email: info@federalworking.com</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
