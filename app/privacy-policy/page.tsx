import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Federal Working Group - Learn how we protect and handle your data.',
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-white text-slate-900">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-3xl font-semibold text-slate-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
          <section>
            <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Last Updated: October 31, 2025</h2>
            <p>
              Federal Working Group ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website www.federalworking.com.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Information We Collect</h2>
            
            <h3 className="text-lg font-medium text-slate-700 mt-6 mb-3">Personal Information</h3>
            <p>We may collect personal information that you provide directly to us, including:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company name</li>
              <li>Job title</li>
              <li>Resume/CV (for job applications)</li>
            </ul>

            <h3 className="text-lg font-medium text-slate-700 mt-6 mb-3">Automatically Collected Information</h3>
            <p>When you visit our website, we may automatically collect:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent</li>
              <li>Referring website</li>
              <li>Device information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">How We Use Your Information</h2>
            <p>We use the collected information for:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Responding to inquiries and providing customer support</li>
              <li>Processing job applications</li>
              <li>Sending updates about our services</li>
              <li>Improving our website and services</li>
              <li>Complying with legal obligations</li>
              <li>Protecting against fraudulent or illegal activity</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your experience on our website. These include:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li><strong>Essential Cookies:</strong> Necessary for website functionality</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site (Google Analytics)</li>
              <li><strong>Performance Cookies:</strong> Improve website performance and user experience</li>
            </ul>
            <p className="mt-4">
              You can manage your cookie preferences through our cookie consent banner or your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Encryption of data in transit (HTTPS)</li>
              <li>Regular security assessments</li>
              <li>Limited access to personal information</li>
              <li>Employee training on data protection</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Data Retention</h2>
            <p>
              We retain personal information only for as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce our agreements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Third-Party Services</h2>
            <p>
              We may share your information with third-party service providers who assist us in operating our website and conducting our business, including:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Google Analytics (website analytics)</li>
              <li>Netlify (website hosting)</li>
              <li>Email service providers</li>
            </ul>
            <p className="mt-4">
              These providers are obligated to protect your information and use it only for the purposes we specify.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent for data processing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Children's Privacy</h2>
            <p>
              Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Contact Us</h2>
            <p>If you have questions about this Privacy Policy or our data practices, please contact us at:</p>
            <div className="mt-4 p-4 bg-slate-50 rounded-lg">
              <p className="font-medium">Federal Working Group</p>
              <p>7918 Jones Branch Drive, Suite 450</p>
              <p>McLean, VA 22102</p>
              <p>Email: privacy@federalworking.com</p>
              <p>Phone: (703) 243-0604</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}