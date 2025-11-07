'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Cookies from 'js-cookie';

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = Cookies.get('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    Cookies.set('cookie-consent', 'accepted', { expires: 365 });
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 shadow-lg">
      <div className="mx-auto max-w-6xl px-6 py-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Cookie Notice
            </h3>
            <p className="text-sm text-slate-600">
              We use essential cookies to ensure our website functions properly and to remember your preferences.
              By continuing to use this site, you consent to our use of cookies.{' '}
              <Link href="/privacy-policy" className="text-blue-800 hover:underline">
                Privacy Policy
              </Link>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={acceptCookies}
              className="px-6 py-2 text-sm font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-700 transition"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}