import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-slate-200">404</h1>
        <h2 className="mt-4 text-3xl font-semibold text-slate-900">Page Not Found</h2>
        <p className="mt-4 text-lg text-slate-600">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-slate-900 rounded-full hover:bg-slate-700 transition"
          >
            Return Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-slate-900 bg-white border border-slate-300 rounded-full hover:bg-slate-50 transition"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}