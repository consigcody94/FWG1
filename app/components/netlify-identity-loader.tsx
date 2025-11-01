"use client";

import Script from "next/script";

export default function NetlifyIdentityLoader() {
  return (
    <Script
      src="https://identity.netlify.com/v1/netlify-identity-widget.js"
      strategy="afterInteractive"
      onLoad={() => {
        if (window.location.hash.includes("invite_token")) {
          const token = window.location.hash.split("=")[1];
          document.cookie = `nf_jwt=${token}`;
          window.location.href = "/admin/";
        }
        const windowWithIdentity = window as any;
        if (windowWithIdentity.netlifyIdentity) {
          windowWithIdentity.netlifyIdentity.on('init', (user: any) => {
            if (!user) {
              windowWithIdentity.netlifyIdentity.on('login', () => {
                document.location.href = '/admin/';
              });
            }
          });
        }
      }}
    />
  );
}
