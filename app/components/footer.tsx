import Link from "next/link";
import Image from "next/image";
import { primaryNavigation } from "./site-config";
import { Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-white/90 backdrop-blur-xl text-slate-900 border-t border-slate-200/50">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Company Info */}
          <div className="md:col-span-1">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-800">
              Federal Working Group
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Excellence in federal IT solutions since 2004
            </p>

            {/* Social Links */}
            <div className="mt-6 flex gap-4">
              <Link
                href="https://www.linkedin.com/company/federal-working-group"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-slate-100 hover:bg-blue-800 hover:text-white transition-all hover:scale-110 text-slate-600"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://twitter.com/federalworking"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-slate-100 hover:bg-blue-800 hover:text-white transition-all hover:scale-110 text-slate-600"
              >
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-900 mb-6">Navigate</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              {primaryNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-blue-800 transition-colors hover:translate-x-1 inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-900 mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-800 flex-shrink-0 mt-0.5" />
                <span>7918 Jones Branch Drive<br />4th Floor<br />McLean, VA 22102</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-800" />
                <Link href="mailto:info@federalworking.com" className="hover:text-blue-800 transition-colors">
                  info@federalworking.com
                </Link>
              </li>
            </ul>
          </div>

          {/* Employee Portal */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-900 mb-6">Employee Portal</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>
                <Link
                  href="/employee-portal"
                  className="hover:text-blue-800 transition-colors hover:translate-x-1 inline-block"
                >
                  Portal Login
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-800 transition-colors hover:translate-x-1 inline-block"
                >
                  Employee Resources
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-800 transition-colors hover:translate-x-1 inline-block"
                >
                  IT Support
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-800 transition-colors hover:translate-x-1 inline-block"
                >
                  HR Portal
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-slate-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 text-xs text-slate-500 text-center md:text-left">
            <p className="order-1 md:order-1">&copy; 2004-{new Date().getFullYear()} Federal Working Group. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 order-3 md:order-2">
              <Link href="/privacy-policy" className="hover:text-blue-800 transition-colors whitespace-nowrap">Privacy Policy</Link>
              <Link href="/terms-of-service" className="hover:text-blue-800 transition-colors whitespace-nowrap">Terms of Service</Link>
              <Link href="/accessibility" className="hover:text-blue-800 transition-colors whitespace-nowrap">Accessibility</Link>
            </div>
            <p className="order-2 md:order-3 whitespace-nowrap">
              Site designed and guarded by{" "}
              <Link
                href="https://www.sentinelowl.org/web-dev"
                target="_blank"
                rel="noreferrer"
                className="text-blue-800 hover:text-blue-800 transition-colors font-semibold"
              >
                Sentinel Owl
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
