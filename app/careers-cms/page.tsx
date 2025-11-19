import { getAllCareers } from '../lib/content';
import Link from 'next/link';
import { Briefcase, Clock, Shield } from 'lucide-react';

export const metadata = {
  title: 'Careers (CMS Example)',
  description: 'Example page showing careers loaded from Sveltia CMS',
};

export default function CareersCMSPage() {
  const careers = getAllCareers();

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <span className="text-sm font-bold tracking-wider">CMS EXAMPLE PAGE</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Careers from CMS
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl">
            This page demonstrates career postings loaded dynamically from the Sveltia CMS.
            Edit content in <code className="bg-white/10 px-2 py-1 rounded">/admin</code> to see changes here.
          </p>
          <div className="flex gap-4">
            <Link
              href="/admin"
              className="inline-flex items-center gap-2 bg-white text-blue-900 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors"
            >
              Open CMS Admin
            </Link>
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-bold hover:bg-white/20 transition-colors"
            >
              View Original Careers Page
            </Link>
          </div>
        </div>
      </section>

      {/* Career Listings */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black mb-12 text-slate-900">
            Current Openings ({careers.length})
          </h2>

          {careers.length === 0 ? (
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-8 text-center">
              <p className="text-lg text-slate-700 mb-4">
                No career postings found. Create some in the CMS!
              </p>
              <Link
                href="/admin"
                className="inline-flex items-center gap-2 bg-blue-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-800 transition-colors"
              >
                Open CMS Admin
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {careers.map((career) => (
                <div
                  key={career.slug}
                  className="bg-white border-2 border-slate-200 rounded-lg p-8 hover:border-blue-500 hover:shadow-lg transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        {career.title}
                      </h3>
                      <p className="text-slate-600 mb-4">{career.description}</p>
                    </div>
                    {career.featured && (
                      <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-bold">
                        ⭐ Featured
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Briefcase className="w-5 h-5" />
                      <span className="font-semibold">{career.jobType}</span>
                    </div>
                    {career.clearance && (
                      <div className="flex items-center gap-2 text-slate-600">
                        <Shield className="w-5 h-5" />
                        <span className="font-semibold">{career.clearance}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2 text-slate-600">
                      <Clock className="w-5 h-5" />
                      <span>Posted: {new Date(career.date).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-sm">
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2">Responsibilities</h4>
                      <p className="text-slate-600">{career.responsibilities.length} listed</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2">Required Skills</h4>
                      <p className="text-slate-600">{career.requiredQualifications.length} items</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2">Benefits</h4>
                      <p className="text-slate-600">{career.benefits.length} benefits</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Link
                      href={`/careers/${career.slug}`}
                      className="inline-flex items-center gap-2 bg-blue-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-800 transition-colors"
                    >
                      View Details →
                    </Link>
                    <Link
                      href={`/admin/#/collections/careers/entries/${career.slug}`}
                      className="inline-flex items-center gap-2 bg-slate-100 text-slate-900 px-6 py-3 rounded-lg font-bold hover:bg-slate-200 transition-colors"
                    >
                      Edit in CMS
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Instructions Section */}
      <section className="bg-slate-100 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-8 text-slate-900">
            How to Use the CMS
          </h2>
          <div className="bg-white rounded-lg p-8 space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">1. Access the CMS</h3>
              <p className="text-slate-700">
                Navigate to <code className="bg-slate-100 px-2 py-1 rounded">/admin</code> to access the Sveltia CMS interface.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">2. Authenticate</h3>
              <p className="text-slate-700">
                Enable Netlify Identity in your Netlify dashboard and invite users to manage content.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">3. Create & Edit Content</h3>
              <p className="text-slate-700">
                Use the intuitive interface to create career postings, services, and pages. All changes are saved to your Git repository.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">4. Publish</h3>
              <p className="text-slate-700">
                Changes are committed to your repo and automatically deployed by Netlify.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
