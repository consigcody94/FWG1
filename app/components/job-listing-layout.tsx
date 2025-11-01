import React from 'react';
import Link from 'next/link';

export interface JobDetails {
  title: string;
  location: string;
  type: string;
  description: string;
  responsibilities: React.ReactNode;
  qualifications: React.ReactNode;
  certifications?: React.ReactNode;
  additionalInfo?: React.ReactNode;
}

interface JobListingLayoutProps {
  job: JobDetails;
}

export function JobListingLayout({ job }: JobListingLayoutProps) {
  return (
    <div className="bg-white text-slate-900">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            {job.title}
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            {job.location} | {job.type}
          </p>
        </div>
        
        <div className="mt-12 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-slate-800 border-b pb-2 mb-4">
              Job Description
            </h2>
            <p className="text-slate-600 leading-relaxed">{job.description}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 border-b pb-2 mb-4">
              Key Responsibilities
            </h2>
            <div className="text-slate-600 space-y-2">
              {job.responsibilities}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 border-b pb-2 mb-4">
              Qualifications
            </h2>
            <div className="text-slate-600 space-y-2">
              {job.qualifications}
            </div>
          </section>

          {job.certifications && (
            <section>
              <h2 className="text-2xl font-semibold text-slate-800 border-b pb-2 mb-4">
                Certifications and Compliance
              </h2>
              <div className="text-slate-600 space-y-2">
                {job.certifications}
              </div>
            </section>
          )}

          {job.additionalInfo && (
            <section>
              <h2 className="text-2xl font-semibold text-slate-800 border-b pb-2 mb-4">
                Additional Information
              </h2>
              <div className="text-slate-600 space-y-2">
                {job.additionalInfo}
              </div>
            </section>
          )}

          <section className="border-t pt-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">
              How to Apply
            </h2>
            <p className="text-slate-600 mb-4">
              Please submit your resume and cover letter to{' '}
              <a
                href="mailto:careers@federalworking.com"
                className="text-blue-600 hover:underline font-medium"
              >
                careers@federalworking.com
              </a>
              {' '}with the subject line: "{job.title} - {job.location}".
            </p>
            <p className="text-slate-600 mb-6">
              Federal Working Group is an Equal Opportunity Employer committed to building a diverse and inclusive team.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/careers/apply"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-slate-900 rounded-full hover:bg-slate-700 transition"
              >
                Apply Now
              </Link>
              <Link
                href="/careers/current-openings"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-slate-900 bg-white border border-slate-300 rounded-full hover:bg-slate-50 transition"
              >
                View All Openings
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}