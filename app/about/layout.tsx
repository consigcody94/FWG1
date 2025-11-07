import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Federal Working Group',
  description: 'Learn about Federal Working Group - 20+ years of excellence in federal IT solutions. Discover our story, values, and commitment to innovation, collaboration, and execution.',
  keywords: ['about FWG', 'Federal Working Group history', 'company culture', 'federal IT expertise', 'innovation', 'collaboration', 'execution'],
  openGraph: {
    title: 'About Federal Working Group | Excellence Since 2004',
    description: 'Discover the story behind Federal Working Group - from 4 employees in 2004 to over 100 professionals delivering innovative federal IT solutions.',
    url: '/about',
    type: 'website',
    images: [
      {
        url: 'https://www.federalworking.com/assets/fwg-social-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Federal Working Group About Us',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Federal Working Group | Excellence Since 2004',
    description: 'Discover the story behind Federal Working Group - from 4 employees in 2004 to over 100 professionals delivering innovative federal IT solutions.',
    images: ['https://www.federalworking.com/assets/fwg-social-preview.jpg'],
  },
  alternates: {
    canonical: '/about',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
