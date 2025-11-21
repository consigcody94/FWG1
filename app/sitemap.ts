import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.federalworking.com';
  
  // Main pages
  const mainPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/accessibility`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ];
  
  // About pages
  const aboutPages = [
    '/about/why-fwg',
    '/about/commitment-to-quality',
    '/about/our-clients',
    '/about/success-stories',
    '/about/caring-in-the-community',
  ].map(path => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));
  
  // Service pages
  const servicePages = [
    '/services/program-management',
    '/services/it-infrastructure',
    '/services/enterprise-architecture',
    '/services/it-security',
  ].map(path => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));
  
  // Career pages
  const careerPages = [
    '/careers/life-at-fwg',
    '/careers/benefits',
    '/careers/current-openings',
    '/careers/apply',
  ].map(path => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));
  
  // Job listings
  const jobPages = [
    '/careers/e-discovery-analyst',
    '/careers/it-asset-manager',
    '/careers/project-manager',
    '/careers/it-project-site-lead',
    '/careers/senior-project-online-analyst',
    '/careers/system-administration',
    '/careers/help-desk-specialist',
    '/careers/network-engineer',
    '/careers/itsecurityspecialist',
    '/careers/enterprise-architect',
  ].map(path => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));
  
  // Employee portal (lower priority)
  const employeePages = [
    {
      url: `${baseUrl}/employee-portal`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.4,
    },
  ];
  
  return [
    ...mainPages,
    ...aboutPages,
    ...servicePages,
    ...careerPages,
    ...jobPages,
    ...employeePages,
  ];
}