"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNavigation } from "./site-config";
import { useState } from "react";
import { Search } from "./search";

export function Header() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState<string | null>(null);

  const handleMouseEnter = (label: string) => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setOpenDropdown(null);
    }, 300); // 300ms delay before closing
    setCloseTimeout(timeout);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (mobileMenuOpen) {
      setMobileSubMenuOpen(null);
    }
  };

  const toggleMobileSubMenu = (label: string) => {
    setMobileSubMenuOpen(mobileSubMenuOpen === label ? null : label);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileSubMenuOpen(null);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3" aria-label="Federal Working Group home" onClick={closeMobileMenu}>
          <span className="relative h-12 w-auto border-slate-200 bg-white">
            <Image src="/fwg_logo-removebg-preview.png" alt="Federal Working Group Logo" width={100} height={48} className="object-contain" />
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-600">Federal Working Group</p>
            <p className="text-xs text-slate-500">Excellence in federal IT solutions since 2004</p>
          </div>
        </Link>

        {/* Hamburger Menu Button - Mobile Only */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className={`w-6 h-0.5 bg-slate-900 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-slate-900 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-slate-900 transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          {primaryNavigation.map((item) => {
            const isActive = item.href === "/" ? pathname === item.href : pathname.startsWith(item.href);
            const hasSubItems = item.subItems && item.subItems.length > 0;

            if (hasSubItems) {
              return (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.href}
                    className={`transition hover:text-slate-900 py-2 ${isActive ? "text-slate-900" : ""}`}
                  >
                    {item.label}
                  </Link>
                  {openDropdown === item.label && (
                    <div
                      className="absolute left-0 top-full pt-1 w-64"
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="rounded-lg border border-slate-200 bg-white shadow-lg py-2">
                        {item.subItems!.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`transition hover:text-slate-900 ${isActive ? "text-slate-900" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
          <Search />
          <Link
            href="/employee-portal"
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Employee Portal
          </Link>
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <nav className="mx-auto max-w-6xl px-6 py-4">
            {primaryNavigation.map((item) => {
              const isActive = item.href === "/" ? pathname === item.href : pathname.startsWith(item.href);
              const hasSubItems = item.subItems && item.subItems.length > 0;

              return (
                <div key={item.label} className="border-b border-slate-100 last:border-0">
                  <div className="flex items-center justify-between py-3">
                    <Link
                      href={item.href}
                      onClick={closeMobileMenu}
                      className={`text-base font-medium transition hover:text-slate-900 ${
                        isActive ? "text-slate-900" : "text-slate-600"
                      }`}
                    >
                      {item.label}
                    </Link>
                    {hasSubItems && (
                      <button
                        onClick={() => toggleMobileSubMenu(item.label)}
                        className="p-2 text-slate-600"
                        aria-label={`Toggle ${item.label} submenu`}
                      >
                        <svg
                          className={`w-4 h-4 transition-transform ${
                            mobileSubMenuOpen === item.label ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    )}
                  </div>
                  {hasSubItems && mobileSubMenuOpen === item.label && (
                    <div className="pb-3 pl-4 space-y-2">
                      {item.subItems!.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          onClick={closeMobileMenu}
                          className="block py-2 text-sm text-slate-600 hover:text-slate-900"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <div className="pt-4">
              <Link
                href="/employee-portal"
                onClick={closeMobileMenu}
                className="block w-full text-center rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Employee Portal
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
