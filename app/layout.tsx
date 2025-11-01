import type { Metadata, Viewport } from "next";
import { Quantico } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { SkipNavigation } from "./components/skip-navigation";
import { CookieConsent } from "./components/cookie-consent";
import { GoogleAnalytics } from "./components/google-analytics";
import NetlifyIdentityRedirect from './components/netlify-identity-redirect';

const quantico = Quantico({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-quantico",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.federalworking.com"),
  title: {
    default: "Federal Working Group | Modern Federal IT Solutions",
    template: "%s | Federal Working Group",
  },
  description:
    "Federal Working Group delivers cybersecurity, cloud modernization, and mission-critical IT consulting trusted by federal agencies since 2004.",
  keywords: [
    "Federal Working Group",
    "federal IT services",
    "government technology",
    "cybersecurity",
    "cloud modernization",
    "enterprise architecture",
    "federal contracting",
  ],
  authors: [{ name: "Federal Working Group" }],
  openGraph: {
    title: "Federal Working Group | Modern Federal IT Solutions",
    description:
      "Trusted partner delivering cybersecurity, cloud, and mission-support solutions for U.S. federal agencies.",
    url: "/",
    siteName: "Federal Working Group",
    locale: "en_US",
    images: [
      {
        url: "https://www.federalworking.com/assets/fwg-social-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Federal Working Group hero illustration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Federal Working Group | Modern Federal IT Solutions",
    description:
      "Federal Working Group delivers cybersecurity, cloud modernization, and mission-critical IT consulting trusted by federal agencies since 2004.",
    images: ["https://www.federalworking.com/assets/fwg-social-preview.jpg"],
  },
  alternates: {
    canonical: "/",
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Federal Working Group",
  alternateName: "FWG",
  url: "https://www.federalworking.com",
  logo: "https://www.federalworking.com/assets/fwg-logo.png",
  description:
    "Excellence in federal IT solutions, cyber defense, and enterprise transformation since 2004.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "7918 Jones Branch Drive, 4th Floor",
    addressLocality: "McLean",
    addressRegion: "VA",
    postalCode: "22102",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-703-555-0100",
    contactType: "Customer Service",
    areaServed: "US",
    availableLanguage: "English",
  },
  sameAs: [
    "https://www.linkedin.com/company/federal-working-group",
    "https://twitter.com/federalworking",
  ],
  foundingDate: "2004",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quantico.variable} antialiased`}>
        <SkipNavigation />
        <Header />
        <main id="main-content" tabIndex={-1} className="focus:outline-none">
          {children}
        </main>
        <Footer />
        <CookieConsent />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <NetlifyIdentityRedirect />
      </body>
    </html>
  );
}
