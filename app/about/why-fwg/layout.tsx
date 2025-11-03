import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Why Choose Federal Working Group',
  description: '20+ years of proven excellence delivering mission-critical IT solutions. 96/100 customer satisfaction, 500+ expert professionals, 1000+ projects delivered across federal agencies.',
  keywords: ['federal IT contractor', 'government technology', 'federal agencies', 'IT consulting', 'mission critical systems', 'customer satisfaction'],
  openGraph: {
    title: 'Why Choose Federal Working Group | Proven Excellence Since 2004',
    description: '20+ years of proven excellence delivering mission-critical IT solutions. 96/100 customer satisfaction, 500+ expert professionals, 1000+ projects delivered across federal agencies.',
    url: '/about/why-fwg',
    type: 'website',
  },
  alternates: {
    canonical: '/about/why-fwg',
  },
}

export default function WhyFWGLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
