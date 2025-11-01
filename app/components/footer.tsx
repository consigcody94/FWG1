import Link from "next/link";
import Image from "next/image";
import { primaryNavigation } from "./site-config";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="relative h-10 w-auto border-white/20">
                <Image src="/fwg_logo-removebg-preview.png" alt="Federal Working Group" width={80} height={40} className="object-contain" />
              </span>
              <p className="text-sm font-semibold uppercase tracking-[0.3em]">Federal Working Group</p>
            </div>
            <p className="mt-4 text-sm text-slate-300">Excellence in federal IT solutions since 2004</p>
            <div className="mt-4 flex gap-3 text-sm text-slate-300">
              <Link href="https://www.linkedin.com/company/federal-working-group" target="_blank" rel="noreferrer">
                LinkedIn
              </Link>
              <Link href="https://twitter.com/federalworking" target="_blank" rel="noreferrer">
                Twitter
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em]">Navigate</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {primaryNavigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em]">Resources</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">Terms of Service</Link>
              </li>
              <li>
                <Link href="#">Accessibility</Link>
              </li>
              <li>
                <Link href="#">Site Map</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em]">Employee Portal</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/employee-portal">Portal Login</Link>
              </li>
              <li>
                <Link href="#">Employee Resources</Link>
              </li>
              <li>
                <Link href="#">IT Support</Link>
              </li>
              <li>
                <Link href="#">HR Portal</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-slate-400">
          <p>&copy; 2004-2025 Federal Working Group. All rights reserved.</p>
          <p>Site designed and guarded by <Link href="https://www.sentinelowl.org/web-dev" target="_blank" rel="noreferrer" className="underline">Sentinel Owl</Link>.</p>
        </div>
      </div>
    </footer>
  );
}
