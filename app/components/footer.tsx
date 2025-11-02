import Link from "next/link";
import Image from "next/image";
import { primaryNavigation } from "./site-config";
import { Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-black/95 text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 group">
              <span className="relative h-12 w-auto">
                <Image
                  src="/fwg_logo-removebg-preview.png"
                  alt="Federal Working Group"
                  width={100}
                  height={48}
                  className="object-contain transition-transform group-hover:scale-105"
                />
              </span>
            </div>
            <p className="mt-4 text-sm font-bold uppercase tracking-[0.3em] text-blue-400">
              Federal Working Group
            </p>
            <p className="mt-2 text-sm text-gray-400">
              Excellence in federal IT solutions since 2004
            </p>

            {/* Social Links */}
            <div className="mt-6 flex gap-4">
              <Link
                href="https://www.linkedin.com/company/federal-working-group"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-blue-600 transition-all hover:scale-110 glow-blue"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://twitter.com/federalworking"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-blue-600 transition-all hover:scale-110 glow-blue"
              >
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white mb-6">Navigate</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {primaryNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-blue-400 transition-colors hover:translate-x-1 inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Washington, DC Metro Area</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <Link href="tel:+1-555-555-5555" className="hover:text-blue-400 transition-colors">
                  (555) 555-5555
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <Link href="mailto:info@federalworkinggroup.com" className="hover:text-blue-400 transition-colors">
                  info@federalworkinggroup.com
                </Link>
              </li>
            </ul>
          </div>

          {/* Employee Portal */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white mb-6">Employee Portal</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link
                  href="/employee-portal"
                  className="hover:text-blue-400 transition-colors hover:translate-x-1 inline-block"
                >
                  Portal Login
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-400 transition-colors hover:translate-x-1 inline-block"
                >
                  Employee Resources
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-400 transition-colors hover:translate-x-1 inline-block"
                >
                  IT Support
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-400 transition-colors hover:translate-x-1 inline-block"
                >
                  HR Portal
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p>&copy; 2004-{new Date().getFullYear()} Federal Working Group. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-blue-400 transition-colors">Accessibility</Link>
            </div>
            <p>
              Site designed and guarded by{" "}
              <Link
                href="https://www.sentinelowl.org/web-dev"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors font-semibold"
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
