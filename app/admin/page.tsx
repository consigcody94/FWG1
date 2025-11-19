'use client'

import { useEffect } from 'react';

export default function AdminPage() {
  useEffect(() => {
    // Redirect to the static admin HTML
    window.location.href = '/admin/index.html';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Loading CMS Admin...</h1>
        <p className="text-slate-600">Redirecting to Sveltia CMS interface...</p>
      </div>
    </div>
  );
}
