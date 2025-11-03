import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Project Manager Career Opportunity',
  description: 'Join Federal Working Group as a PMP-certified Project Manager. Lead federal IT modernization projects, work with cutting-edge technology, and advance your career with competitive benefits.',
  keywords: ['project manager jobs', 'PMP certified', 'federal IT jobs', 'government contractor careers', 'IT project management', 'security clearance jobs'],
  openGraph: {
    title: 'Project Manager Career | Federal Working Group',
    description: 'Join Federal Working Group as a PMP-certified Project Manager. Lead federal IT modernization projects, work with cutting-edge technology, and advance your career with competitive benefits.',
    url: '/careers/project-manager',
    type: 'website',
  },
  alternates: {
    canonical: '/careers/project-manager',
  },
}

export default function ProjectManagerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
