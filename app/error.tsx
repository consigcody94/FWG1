'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-slate-200">500</h1>
        <h2 className="mt-4 text-2xl font-semibold text-slate-900">
          Something went wrong
        </h2>
        <p className="mt-4 text-slate-600">
          We encountered an unexpected error. Please try again or contact support if the problem persists.
        </p>
        {error.digest && (
          <p className="mt-2 text-sm text-slate-500">
            Error ID: {error.digest}
          </p>
        )}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-slate-900 rounded-full hover:bg-slate-700 transition"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-slate-900 bg-white border border-slate-300 rounded-full hover:bg-slate-50 transition"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}