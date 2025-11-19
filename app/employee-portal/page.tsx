'use client'

import Link from "next/link"
import { useEffect, useState } from 'react'

export default function EmployeePortal() {
  const [content, setContent] = useState<any>(null)

  useEffect(() => {
    fetch('/api/pages-content')
      .then(res => res.json())
      .then(data => setContent(data.employeePortal))
      .catch(err => console.error('Error loading employee-portal content:', err))
  }, [])

  if (!content) {
    return <div className="min-h-screen bg-slate-950">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[-15%] top-[-10%] h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute right-[-10%] bottom-[-15%] h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
        </div>
        <main className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 pb-20 pt-16">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-4">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200">
                Employee Portal
              </p>
              <h1 className="text-3xl font-semibold text-white sm:text-4xl">
                {content.heroTitle}
              </h1>
              <p className="max-w-2xl text-lg text-slate-300">
                {content.introText}
              </p>
            </div>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-2 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              ← Back to main site
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {content.resources.map((resource: any) => (
              <div
                key={resource.title}
                className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-slate-900/40 transition hover:border-cyan-400/40 hover:bg-cyan-500/5"
              >
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-white">{resource.title}</h2>
                  <p className="text-sm text-slate-300">{resource.description}</p>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {resource.details.map((detail: string) => (
                      <li key={detail} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={resource.href}
                  target={resource.href.startsWith("http") ? "_blank" : undefined}
                  rel={resource.href.startsWith("http") ? "noreferrer" : undefined}
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-white/10 transition hover:bg-slate-200"
                >
                  {resource.cta}
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-slate-900 to-slate-950 p-8 text-sm text-slate-300">
            <p className="font-semibold text-white mb-2">Need Help?</p>
            <p>
              For technical support or account access issues, contact IT Support at{" "}
              <a href="mailto:support@federalworkinggroup.com" className="text-cyan-400 hover:text-cyan-300">
                support@federalworkinggroup.com
              </a>
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}
