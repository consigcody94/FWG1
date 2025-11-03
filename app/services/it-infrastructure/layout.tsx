import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IT Infrastructure & Cloud Solutions',
  description: 'Comprehensive data center management, cloud computing, and IT infrastructure services. Expert cloud migration, modernization, and cutting-edge technology solutions for federal agencies.',
  keywords: ['IT infrastructure', 'cloud computing', 'data center management', 'cloud migration', 'federal cloud', 'infrastructure modernization'],
  openGraph: {
    title: 'IT Infrastructure & Cloud Solutions | Federal Working Group',
    description: 'Comprehensive data center management, cloud computing, and IT infrastructure services. Expert cloud migration, modernization, and cutting-edge technology solutions for federal agencies.',
    url: '/services/it-infrastructure',
    type: 'website',
  },
  alternates: {
    canonical: '/services/it-infrastructure',
  },
}

export default function ITInfrastructureLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
