import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Enterprise Architecture Services',
  description: 'Strategic enterprise architecture that aligns technology with business objectives. Scalable, sustainable solutions for mission-critical federal systems and digital transformation.',
  keywords: ['enterprise architecture', 'IT strategy', 'digital transformation', 'federal EA', 'technology architecture', 'systems integration'],
  openGraph: {
    title: 'Enterprise Architecture Services | Federal Working Group',
    description: 'Strategic enterprise architecture that aligns technology with business objectives. Scalable, sustainable solutions for mission-critical federal systems and digital transformation.',
    url: '/services/enterprise-architecture',
    type: 'website',
  },
  alternates: {
    canonical: '/services/enterprise-architecture',
  },
}

export default function EnterpriseArchitectureLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
