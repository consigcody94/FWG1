import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Program & Project Management Services',
  description: 'PMI-certified program and project management services for federal agencies. Expert delivery leveraging best practices, agile methodologies, and proven frameworks.',
  keywords: ['program management', 'project management', 'PMI certified', 'federal IT projects', 'agile', 'waterfall', 'PMO'],
  openGraph: {
    title: 'Program & Project Management Services | Federal Working Group',
    description: 'PMI-certified program and project management services for federal agencies. Expert delivery leveraging best practices, agile methodologies, and proven frameworks.',
    url: '/services/program-management',
    type: 'website',
  },
  alternates: {
    canonical: '/services/program-management',
  },
}

export default function ProgramManagementLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
