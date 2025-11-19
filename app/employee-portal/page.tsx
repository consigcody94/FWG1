import Link from "next/link";

const resources = [
  {
    title: "FWG Webmail",
    description: "Access Outlook on the web for your email, calendar, and collaboration tools.",
    href: "https://outlook.office365.com/mail/",
    cta: "Open Webmail",
    details: ["Single sign-on enabled", "Multi-factor authentication enforced"],
  },
  {
    title: "ADP Workforce Now",
    description: "Manage timesheets, payroll, benefits, and PTO requests from any device.",
    href: "https://workforcenow.adp.com/vd/client/index.html",
    cta: "Launch ADP",
    details: ["Use your FWG ADP credentials", "Support available via HR Operations"],
  },
];

export default function EmployeePortal() {
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
                Direct access to the systems you rely on every day.
              </h1>
              <p className="max-w-2xl text-lg text-slate-300">
                Launch webmail, manage payroll, or connect with support in just a click. Bookmark this page for the
                fastest path to your essential tools.
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
            {resources.map((resource) => (
              <div
                key={resource.title}
                className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-slate-900/40 transition hover:border-cyan-400/40 hover:bg-cyan-500/5"
              >
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-white">{resource.title}</h2>
                  <p className="text-sm text-slate-300">{resource.description}</p>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {resource.details.map((detail) => (
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
            <p className="font-semibold text-white">Need help fast?</p>
            <p className="mt-3">
              Call our 24/7 security operations hotline at{" "}
              <span className="font-semibold text-cyan-200">(703) 555-0127</span> for credential resets or security incidents.
            </p>
            <p className="mt-2">
              Visit our headquarters workspace on Teams to find onboarding guides, policy updates, and collaboration spaces.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
