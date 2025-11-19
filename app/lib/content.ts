import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export interface CareerPosting {
  slug: string;
  title: string;
  jobType: string;
  clearance?: string;
  description: string;
  overview?: string;
  responsibilities: string[];
  requiredQualifications: string[];
  preferredQualifications: string[];
  benefits: string[];
  featured: boolean;
  date: string;
  content: string;
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  heroImage?: string;
  icon?: string;
  body: string;
  features: Array<{
    title: string;
    description: string;
    icon?: string;
  }>;
  featured: boolean;
  order: number;
}

export interface Page {
  slug: string;
  title: string;
  pageType: string;
  description: string;
  body: string;
  heroVideo?: string;
  sections?: Array<{
    title: string;
    content: string;
    icon?: string;
  }>;
}

export interface HomeSettings {
  heroTitle: string;
  heroSubtitle: string;
  heroBadge: string;
  heroVideo: string;
  primaryCTAText: string;
  primaryCTALink: string;
  secondaryCTAText: string;
  secondaryCTALink: string;
  stats: Array<{
    value: string;
    label: string;
  }>;
}

/**
 * Get all career postings
 */
export function getAllCareers(): CareerPosting[] {
  const careersDirectory = path.join(contentDirectory, 'careers');

  // Check if directory exists
  if (!fs.existsSync(careersDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(careersDirectory);
  const allCareers = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(careersDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        jobType: data.jobType,
        clearance: data.clearance,
        description: data.description,
        overview: data.overview,
        responsibilities: data.responsibilities || [],
        requiredQualifications: data.requiredQualifications || [],
        preferredQualifications: data.preferredQualifications || [],
        benefits: data.benefits || [],
        featured: data.featured || false,
        date: data.date,
        content,
      } as CareerPosting;
    });

  // Sort by date (newest first)
  return allCareers.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

/**
 * Get a single career posting by slug
 */
export function getCareerBySlug(slug: string): CareerPosting | null {
  const careersDirectory = path.join(contentDirectory, 'careers');
  const fullPath = path.join(careersDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    jobType: data.jobType,
    clearance: data.clearance,
    description: data.description,
    overview: data.overview,
    responsibilities: data.responsibilities || [],
    requiredQualifications: data.requiredQualifications || [],
    preferredQualifications: data.preferredQualifications || [],
    benefits: data.benefits || [],
    featured: data.featured || false,
    date: data.date,
    content,
  } as CareerPosting;
}

/**
 * Get all services
 */
export function getAllServices(): Service[] {
  const servicesDirectory = path.join(contentDirectory, 'services');

  if (!fs.existsSync(servicesDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(servicesDirectory);
  const allServices = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(servicesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        description: data.description,
        heroImage: data.heroImage,
        icon: data.icon,
        body: content,
        features: data.features || [],
        featured: data.featured || false,
        order: data.order || 0,
      } as Service;
    });

  // Sort by order
  return allServices.sort((a, b) => a.order - b.order);
}

/**
 * Get a single service by slug
 */
export function getServiceBySlug(slug: string): Service | null {
  const servicesDirectory = path.join(contentDirectory, 'services');
  const fullPath = path.join(servicesDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    description: data.description,
    heroImage: data.heroImage,
    icon: data.icon,
    body: content,
    features: data.features || [],
    featured: data.featured || false,
    order: data.order || 0,
  } as Service;
}

/**
 * Get all pages
 */
export function getAllPages(): Page[] {
  const pagesDirectory = path.join(contentDirectory, 'pages');

  if (!fs.existsSync(pagesDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(pagesDirectory);
  return fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(pagesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        pageType: data.pageType,
        description: data.description,
        body: content,
        heroVideo: data.heroVideo,
        sections: data.sections,
      } as Page;
    });
}

/**
 * Get a single page by slug
 */
export function getPageBySlug(slug: string): Page | null {
  const pagesDirectory = path.join(contentDirectory, 'pages');
  const fullPath = path.join(pagesDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    pageType: data.pageType,
    description: data.description,
    body: content,
    heroVideo: data.heroVideo,
    sections: data.sections,
  } as Page;
}

/**
 * Get home page settings
 */
export function getHomeSettings(): HomeSettings | null {
  const settingsPath = path.join(contentDirectory, 'settings', 'home.json');

  if (!fs.existsSync(settingsPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(settingsPath, 'utf8');
  return JSON.parse(fileContents) as HomeSettings;
}
