import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IT Security, Strategy & Operations',
  description: 'Comprehensive IT security, strategic planning, and operational excellence. ITIL frameworks, SEI best practices, cybersecurity, and risk management for secure federal systems.',
  keywords: ['IT security', 'cybersecurity', 'ITIL', 'SEI standards', 'security operations', 'risk management', 'federal security'],
  openGraph: {
    title: 'IT Security, Strategy & Operations | Federal Working Group',
    description: 'Comprehensive IT security, strategic planning, and operational excellence. ITIL frameworks, SEI best practices, cybersecurity, and risk management for secure federal systems.',
    url: '/services/it-security',
    type: 'website',
  },
  alternates: {
    canonical: '/services/it-security',
  },
}

export default function ITSecurityLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
