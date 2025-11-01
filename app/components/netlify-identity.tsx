"use client";

import Script from "next/script";
import { useEffect } from "react";

export function NetlifyIdentity() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Handle the redirect from email confirmation
      if (
        window.location.hash &&
        window.location.hash.includes("recovery_token")
      ) {
        // Redirect to admin with the token
        window.location.href = `/admin/${window.location.hash}`;
      } else if (
        window.location.hash &&
        window.location.hash.includes("confirmation_token")
      ) {
        // Redirect to admin with the token
        window.location.href = `/admin/${window.location.hash}`;
      } else if (
        window.location.hash &&
        window.location.hash.includes("invite_token")
      ) {
        // Redirect to admin with the token
        window.location.href = `/admin/${window.location.hash}`;
      }
    }
  }, []);

  return (
    <Script
      src="https://identity.netlify.com/v1/netlify-identity-widget.js"
      strategy="afterInteractive"
      onLoad={() => {
        if (window.netlifyIdentity) {
          window.netlifyIdentity.init();
        }
      }}
    />
  );
}
