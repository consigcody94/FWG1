'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SearchResult {
  title: string;
  href: string;
  description: string;
  category: string;
}

// Search index - in production, this could be generated at build time
const searchIndex: SearchResult[] = [
  // Main pages
  { title: 'Home', href: '/', description: 'Federal Working Group - Excellence in federal IT solutions', category: 'Main' },
  { title: 'About Us', href: '/about', description: 'Learn about Federal Working Group', category: 'About' },
  { title: 'Services', href: '/services', description: 'Our services and solutions', category: 'Services' },
  { title: 'Careers', href: '/careers', description: 'Join our team', category: 'Careers' },
  { title: 'Contact', href: '/contact', description: 'Get in touch with us', category: 'Contact' },
  
  // About pages
  { title: 'Why FWG', href: '/about/why-fwg', description: 'Discover why Federal Working Group is your best choice', category: 'About' },
  { title: 'Commitment to Quality', href: '/about/commitment-to-quality', description: 'Our commitment to delivering quality solutions', category: 'About' },
  { title: 'Our Clients', href: '/about/our-clients', description: 'Federal agencies we serve', category: 'About' },
  { title: 'Success Stories', href: '/about/success-stories', description: 'Client success stories and testimonials', category: 'About' },
  { title: 'Caring in the Community', href: '/about/caring-in-the-community', description: 'Our community involvement', category: 'About' },
  
  // Services pages
  { title: 'Program Management', href: '/services/program-management', description: 'Program and project management services', category: 'Services' },
  { title: 'IT Infrastructure', href: '/services/it-infrastructure', description: 'IT infrastructure and solutions', category: 'Services' },
  { title: 'Enterprise Architecture', href: '/services/enterprise-architecture', description: 'Enterprise architecture services', category: 'Services' },
  { title: 'IT Security', href: '/services/it-security', description: 'IT security, strategy and operations', category: 'Services' },

  // Career pages
  { title: 'Life at FWG', href: '/careers/life-at-fwg', description: 'Experience life at Federal Working Group', category: 'Careers' },
  { title: 'Benefits', href: '/careers/benefits', description: 'Employee benefits and perks', category: 'Careers' },
  { title: 'Current Openings', href: '/careers/current-openings', description: 'View open positions', category: 'Careers' },
  
  // Job listings
  { title: 'E-Discovery Analyst', href: '/careers/e-discovery-analyst', description: 'E-Discovery Analyst position in Washington, DC', category: 'Jobs' },
  { title: 'IT Asset Manager', href: '/careers/it-asset-manager', description: 'IT Asset Manager position in Washington, DC', category: 'Jobs' },
  { title: 'Project Manager', href: '/careers/project-manager', description: 'Project Manager position in Washington, DC', category: 'Jobs' },
  { title: 'IT Project Site Lead', href: '/careers/it-project-site-lead', description: 'IT Project Site Lead position in Tuscaloosa, AL', category: 'Jobs' },
  { title: 'Senior Project Online Analyst', href: '/careers/senior-project-online-analyst', description: 'Senior Project Online Analyst in Washington, DC', category: 'Jobs' },
  { title: 'System Administration', href: '/careers/system-administration', description: 'System Administration position in Tuscaloosa, AL', category: 'Jobs' },
  { title: 'Help Desk Specialist', href: '/careers/help-desk-specialist', description: 'Help Desk Specialist position in Tuscaloosa, AL', category: 'Jobs' },
  { title: 'Network Engineer', href: '/careers/network-engineer', description: 'Network Engineer position in Tuscaloosa, AL', category: 'Jobs' },
  { title: 'IT Security Specialist', href: '/careers/itsecurityspecialist', description: 'IT Security Specialist position in Tuscaloosa, AL', category: 'Jobs' },
  { title: 'Enterprise Architect', href: '/careers/enterprise-architect', description: 'Enterprise Architect position in Suitland, MD', category: 'Jobs' },
  
  // Other pages
  { title: 'Employee Portal', href: '/employee-portal', description: 'Access employee resources and tools', category: 'Employee' },
  { title: 'Privacy Policy', href: '/privacy-policy', description: 'Our privacy policy and data practices', category: 'Legal' },
  { title: 'Terms of Service', href: '/terms-of-service', description: 'Website terms of service', category: 'Legal' },
  { title: 'Accessibility', href: '/accessibility', description: 'Website accessibility statement', category: 'Legal' },
];

export function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();

  // Close search when route changes
  useEffect(() => {
    setIsOpen(false);
    setQuery('');
    setResults([]);
  }, [pathname]);

  // Handle clicks outside search
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Cmd/Ctrl + K to open search
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault();
        setIsOpen(true);
        setTimeout(() => inputRef.current?.focus(), 100);
      }
      
      // Escape to close
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
        setQuery('');
        setResults([]);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Search function
  const performSearch = useCallback((searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const filtered = searchIndex.filter(item => 
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query)
    );

    // Sort by relevance (title matches first)
    filtered.sort((a, b) => {
      const aInTitle = a.title.toLowerCase().includes(query);
      const bInTitle = b.title.toLowerCase().includes(query);
      
      if (aInTitle && !bInTitle) return -1;
      if (!aInTitle && bInTitle) return 1;
      
      return 0;
    });

    setResults(filtered.slice(0, 8)); // Limit to 8 results
    setSelectedIndex(0);
  }, []);

  // Handle search input
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    performSearch(value);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % results.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + results.length) % results.length);
    } else if (e.key === 'Enter' && results.length > 0) {
      e.preventDefault();
      window.location.href = results[selectedIndex].href;
    }
  };

  return (
    <div ref={searchRef} className="relative">
      {/* Search Button */}
      <button
        onClick={() => {
          setIsOpen(true);
          setTimeout(() => inputRef.current?.focus(), 100);
        }}
        className="flex items-center gap-2 px-3 py-1.5 text-sm text-slate-600 bg-slate-50 border border-slate-300 rounded-lg hover:bg-slate-100 transition"
        aria-label="Search (Ctrl+K)"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span className="hidden sm:inline">Search</span>
        <kbd className="hidden sm:inline px-1.5 py-0.5 text-xs font-medium text-slate-500 bg-slate-200 rounded">
          ⌘K
        </kbd>
      </button>

      {/* Search Modal */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-96 max-w-[calc(100vw-2rem)] bg-white rounded-xl shadow-2xl border border-slate-200 z-50">
          <div className="p-4 border-b border-slate-200">
            <div className="relative">
              <svg 
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={handleSearch}
                onKeyDown={handleKeyDown}
                placeholder="Search pages, services, jobs..."
                className="w-full pl-10 pr-4 py-2 text-sm text-slate-900 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                aria-label="Search input"
                autoComplete="off"
              />
            </div>
          </div>

          {/* Search Results */}
          {results.length > 0 ? (
            <div className="max-h-96 overflow-y-auto p-2">
              {results.map((result, index) => (
                <Link
                  key={result.href}
                  href={result.href}
                  className={`block px-3 py-2 rounded-lg transition ${
                    index === selectedIndex
                      ? 'bg-slate-100 text-slate-900'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                  onMouseEnter={() => setSelectedIndex(index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium">{result.title}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{result.description}</p>
                    </div>
                    <span className="text-xs text-slate-400 ml-2">{result.category}</span>
                  </div>
                </Link>
              ))}
            </div>
          ) : query && (
            <div className="p-8 text-center text-sm text-slate-500">
              No results found for "{query}"
            </div>
          )}

          {/* Search Tips */}
          {!query && (
            <div className="p-4 border-t border-slate-200">
              <p className="text-xs text-slate-500">
                <span className="font-medium">Tips:</span> Use arrow keys to navigate, Enter to select, Esc to close
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}