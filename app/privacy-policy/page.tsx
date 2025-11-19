'use client'

import { motion } from 'framer-motion'

export default function PrivacyPolicyPage() {
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
            <h1 className="text-5xl md:text-6xl font-black mb-6">Privacy Policy</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Your privacy is important to us. This policy outlines how we collect, use, and protect your information.
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

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Introduction</h2>
            <p className="text-slate-600 mb-6">
              Federal Working Group ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Information We Collect</h2>
            <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-3">Personal Information</h3>
            <p className="text-slate-600 mb-6">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-6">
              <li>Contact us through our website forms</li>
              <li>Apply for employment</li>
              <li>Subscribe to our newsletters or communications</li>
              <li>Request information about our services</li>
            </ul>
            <p className="text-slate-600 mb-6">
              This information may include your name, email address, phone number, company name, and any other information you choose to provide.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-3">Automatically Collected Information</h3>
            <p className="text-slate-600 mb-6">
              When you visit our website, we automatically collect certain information about your device, including:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-6">
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>IP address</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">How We Use Your Information</h2>
            <p className="text-slate-600 mb-6">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-6">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Process employment applications</li>
              <li>Send you information about our services</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
              <li>Prevent fraud and enhance security</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-slate-600 mb-6">
              We use essential cookies to enhance your experience on our website and to remember your preferences. These cookies are necessary for the website to function properly. You can control cookie preferences through your browser settings. Please note that disabling cookies may affect the functionality of our website.
            </p>
            <p className="text-slate-600 mb-6">
              <strong>We do not use third-party analytics or tracking services.</strong> We respect your privacy and do not collect behavioral data or track your browsing activity across other websites.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Third-Party Services</h2>
            <p className="text-slate-600 mb-6">
              Our website may contain links to third-party services and embedded content (such as maps). These third-party services operate independently and have their own privacy policies. We are not responsible for the privacy practices of these external services.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Data Security</h2>
            <p className="text-slate-600 mb-6">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Your Rights</h2>
            <p className="text-slate-600 mb-6">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-6">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Object to processing of your personal information</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Children's Privacy</h2>
            <p className="text-slate-600 mb-6">
              Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Changes to This Policy</h2>
            <p className="text-slate-600 mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Contact Us</h2>
            <p className="text-slate-600 mb-6">
              If you have questions about this Privacy Policy, please contact us at:
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
