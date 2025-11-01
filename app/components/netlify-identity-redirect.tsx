
"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const NetlifyIdentityRedirect = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (window.location.hash.includes('_token')) {
      // The presence of a token in the hash indicates a confirmation link click
      const token = window.location.hash.split('=')[1];
      if (token) {
        // Store the token or let the identity widget handle it, then redirect
        // The identity widget should pick up the token automatically.
        // We just need to redirect to the admin page.
        window.location.href = '/admin/';
      }
    }
  }, [pathname]);

  return null; // This component doesn't render anything
};

export default NetlifyIdentityRedirect;
