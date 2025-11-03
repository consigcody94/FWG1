'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { updateGoogleAnalyticsConsent } from './google-analytics';

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = Cookies.get('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    } else if (consent === 'accepted') {
      updateGoogleAnalyticsConsent(true);
    }
  }, []);

  const acceptAll = () => {
    Cookies.set('cookie-consent', 'accepted', { expires: 365 });
    Cookies.set('analytics-consent', 'true', { expires: 365 });
    updateGoogleAnalyticsConsent(true);
    setShowBanner(false);
  };

  const acceptEssential = () => {
    Cookies.set('cookie-consent', 'essential', { expires: 365 });
    Cookies.set('analytics-consent', 'false', { expires: 365 });
    updateGoogleAnalyticsConsent(false);
    setShowBanner(false);
  };

  const customizeConsent = () => {
    setShowDetails(!showDetails);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 shadow-lg">
      <div className="mx-auto max-w-6xl px-6 py-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Cookie Consent
            </h3>
            <p className="text-sm text-slate-600">
              We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
              By clicking "Accept All", you consent to our use of cookies.{' '}
              <Link href="/privacy-policy" className="text-blue-800 hover:underline">
                Privacy Policy
              </Link>
            </p>
            
            {showDetails && (
              <div className="mt-4 p-4 bg-slate-50 rounded-lg">
                <h4 className="font-semibold text-sm text-slate-900 mb-2">Cookie Categories</h4>
                <div className="space-y-3">
                  <div>
                    <label className="flex items-start gap-3">
                      <input 
                        type="checkbox" 
                        checked 
                        disabled 
                        className="mt-1"
                      />
                      <div>
                        <span className="font-medium text-sm text-slate-900">Essential Cookies</span>
                        <p className="text-xs text-slate-600 mt-1">
                          Required for the website to function properly. Cannot be disabled.
                        </p>
                      </div>
                    </label>
                  </div>
                  <div>
                    <label className="flex items-start gap-3">
                      <input 
                        type="checkbox" 
                        defaultChecked
                        className="mt-1"
                      />
                      <div>
                        <span className="font-medium text-sm text-slate-900">Analytics Cookies</span>
                        <p className="text-xs text-slate-600 mt-1">
                          Help us understand how visitors interact with our website.
                        </p>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={customizeConsent}
              className="px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition"
            >
              {showDetails ? 'Hide Details' : 'Customize'}
            </button>
            <button
              onClick={acceptEssential}
              className="px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition"
            >
              Essential Only
            </button>
            <button
              onClick={acceptAll}
              className="px-4 py-2 text-sm font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-700 transition"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}