"use client";

import Script from "next/script";
import { useEffect } from "react";

const cmsConfig = {
  backend: {
    name: 'git-gateway',
    branch: 'main',
  },
  media_folder: 'public/assets/uploads',
  public_folder: '/assets/uploads',
  logo_url: '/fwg_logo-removebg-preview.png',

  // Collections organized by category
  collections: [
    // ==================== SITE CONFIGURATION ====================
    {
      name: 'settings',
      label: '⚙️ Site Settings',
      description: 'Global site configuration and branding',
      files: [
        {
          label: 'General Settings',
          name: 'general',
          file: 'content/settings/general.json',
          fields: [
            {
              label: 'Site Information',
              name: 'site_info',
              widget: 'object',
              collapsed: false,
              fields: [
                {
                  label: 'Site Title',
                  name: 'title',
                  widget: 'string',
                  hint: 'Main site title used in browser tabs and search results'
                },
                {
                  label: 'Tagline',
                  name: 'tagline',
                  widget: 'string',
                  hint: 'Brief description of your company'
                },
                {
                  label: 'Site Logo',
                  name: 'logo',
                  widget: 'image',
                  hint: 'Recommended: PNG format with transparent background, min 200x50px'
                },
                {
                  label: 'Favicon',
                  name: 'favicon',
                  widget: 'image',
                  required: false,
                  hint: 'Small icon shown in browser tabs (32x32px or 64x64px)'
                },
              ],
            },
            {
              label: 'Company Information',
              name: 'company',
              widget: 'object',
              collapsed: true,
              fields: [
                { label: 'Company Name', name: 'name', widget: 'string' },
                { label: 'Founded Year', name: 'founded', widget: 'string', pattern: ['^\\d{4}$', 'Must be a 4-digit year'] },
                { label: 'DUNS Number', name: 'duns', widget: 'string', required: false, hint: '9-digit DUNS number' },
                { label: 'CAGE Code', name: 'cage', widget: 'string', required: false, hint: '5-character CAGE code' },
                { label: 'UEI Number', name: 'uei', widget: 'string', required: false, hint: 'Unique Entity Identifier' },
              ],
            },
            {
              label: 'SEO Defaults',
              name: 'seo',
              widget: 'object',
              collapsed: true,
              fields: [
                {
                  label: 'Meta Description',
                  name: 'description',
                  widget: 'text',
                  hint: 'Default description for pages without specific SEO settings (155 characters max)',
                  pattern: ['^.{0,155}$', 'Must be 155 characters or less']
                },
                {
                  label: 'Keywords',
                  name: 'keywords',
                  widget: 'list',
                  hint: 'Default keywords for SEO'
                },
                {
                  label: 'Social Preview Image',
                  name: 'og_image',
                  widget: 'image',
                  required: false,
                  hint: 'Default image for social media shares (1200x630px recommended)'
                },
              ],
            },
            {
              label: 'Footer Settings',
              name: 'footer',
              widget: 'object',
              collapsed: true,
              fields: [
                { label: 'Copyright Text', name: 'copyright', widget: 'string' },
                { label: 'Footer Tagline', name: 'tagline', widget: 'string' },
              ],
            },
          ],
        },
      ],
    },

    // ==================== NAVIGATION ====================
    {
      name: 'navigation',
      label: '🧭 Navigation',
      description: 'Header and footer navigation menus',
      files: [
        {
          label: 'Header Navigation',
          name: 'header',
          file: 'content/navigation/header.json',
          fields: [
            {
              label: 'Logo',
              name: 'logo',
              widget: 'image',
              hint: 'Logo shown in the header'
            },
            {
              label: 'Main Menu Items',
              name: 'menuItems',
              widget: 'list',
              summary: '{{fields.label}}',
              fields: [
                { label: 'Menu Label', name: 'label', widget: 'string' },
                { label: 'Link URL', name: 'href', widget: 'string', hint: 'e.g., /about or https://external.com' },
                { label: 'Open in New Tab', name: 'external', widget: 'boolean', required: false, default: false },
                {
                  label: 'Submenu Items',
                  name: 'submenu',
                  widget: 'list',
                  required: false,
                  collapsed: true,
                  summary: '{{fields.label}}',
                  fields: [
                    { label: 'Label', name: 'label', widget: 'string' },
                    { label: 'Link', name: 'href', widget: 'string' },
                    { label: 'Description', name: 'description', widget: 'text', required: false, hint: 'Brief description shown in mega menu' },
                  ],
                },
              ],
            },
            {
              label: 'Call-to-Action Button',
              name: 'ctaButton',
              widget: 'object',
              collapsed: true,
              fields: [
                { label: 'Button Label', name: 'label', widget: 'string' },
                { label: 'Button Link', name: 'href', widget: 'string' },
                { label: 'Button Style', name: 'style', widget: 'select', options: ['primary', 'secondary', 'outline'], default: 'primary' },
              ],
            },
          ],
        },
        {
          label: 'Footer Navigation',
          name: 'footer',
          file: 'content/navigation/footer.json',
          fields: [
            {
              label: 'Footer Columns',
              name: 'columns',
              widget: 'list',
              max: 4,
              summary: '{{fields.title}}',
              fields: [
                { label: 'Column Title', name: 'title', widget: 'string' },
                {
                  label: 'Links',
                  name: 'links',
                  widget: 'list',
                  summary: '{{fields.label}}',
                  fields: [
                    { label: 'Link Label', name: 'label', widget: 'string' },
                    { label: 'URL', name: 'href', widget: 'string' },
                    { label: 'External Link', name: 'external', widget: 'boolean', required: false, default: false },
                  ],
                },
              ],
            },
            { label: 'Footer Bottom Text', name: 'bottomText', widget: 'string', hint: 'Text shown at the bottom of footer' },
            {
              label: 'Certifications & Badges',
              name: 'certifications',
              widget: 'list',
              hint: 'List of certifications to display in footer',
              field: { label: 'Certification Name', name: 'cert', widget: 'string' },
            },
          ],
        },
      ],
    },

    // ==================== PAGES ====================
    {
      name: 'pages',
      label: '📄 Pages',
      description: 'Main website pages and content',
      files: [
        {
          label: 'Homepage',
          name: 'home',
          file: 'content/site-content.json',
          fields: [
            {
              label: 'SEO Settings',
              name: 'seo',
              widget: 'object',
              collapsed: true,
              fields: [
                { label: 'Page Title', name: 'title', widget: 'string', required: false },
                { label: 'Meta Description', name: 'description', widget: 'text', required: false, hint: '155 characters max' },
                { label: 'Keywords', name: 'keywords', widget: 'list', required: false },
              ],
            },
            {
              label: 'Hero Section',
              name: 'hero',
              widget: 'object',
              collapsed: false,
              fields: [
                { label: 'Main Headline', name: 'title', widget: 'string', hint: 'Large headline text' },
                { label: 'Subheadline', name: 'subtitle', widget: 'text', hint: 'Supporting text below headline' },
                { label: 'Background Image', name: 'backgroundImage', widget: 'image', required: false, hint: 'Hero background (1920x1080px recommended)' },
                { label: 'Primary Button Text', name: 'buttonText', widget: 'string' },
                { label: 'Primary Button Link', name: 'buttonLink', widget: 'string', required: false, default: '/services' },
                { label: 'Secondary Button Text', name: 'secondButtonText', widget: 'string' },
                { label: 'Secondary Button Link', name: 'secondButtonLink', widget: 'string', required: false, default: '/contact' },
              ],
            },
            {
              label: 'Company Statistics',
              name: 'stats',
              widget: 'list',
              summary: '{{fields.value}} - {{fields.label}}',
              max: 6,
              fields: [
                { label: 'Number/Value', name: 'value', widget: 'string', hint: 'e.g., "20+" or "500"' },
                { label: 'Label', name: 'label', widget: 'string', hint: 'e.g., "Years of Excellence"' },
                { label: 'Icon', name: 'icon', widget: 'string', required: false, hint: 'Icon name or emoji' },
              ],
            },
            {
              label: 'About Section',
              name: 'about',
              widget: 'object',
              collapsed: true,
              fields: [
                { label: 'Section Title', name: 'title', widget: 'string' },
                { label: 'Content', name: 'content', widget: 'markdown', hint: 'Use markdown for rich formatting' },
                { label: 'Image', name: 'image', widget: 'image', required: false },
              ],
            },
            {
              label: 'Services Showcase',
              name: 'services',
              widget: 'list',
              required: false,
              collapsed: true,
              summary: '{{fields.title}}',
              fields: [
                { label: 'Service Title', name: 'title', widget: 'string' },
                { label: 'Description', name: 'description', widget: 'text' },
                { label: 'Icon/Image', name: 'image', widget: 'image', required: false },
                { label: 'Link to Service Page', name: 'link', widget: 'string', required: false },
              ],
            },
            {
              label: 'Core Values',
              name: 'coreValues',
              widget: 'list',
              required: false,
              collapsed: true,
              summary: '{{fields.title}}',
              max: 5,
              fields: [
                { label: 'Value Title', name: 'title', widget: 'string' },
                { label: 'Description', name: 'description', widget: 'text' },
                { label: 'Icon', name: 'icon', widget: 'string', required: false },
              ],
            },
            {
              label: 'Client Testimonials',
              name: 'testimonials',
              widget: 'list',
              required: false,
              collapsed: true,
              summary: '{{fields.author}} - {{fields.role}}',
              fields: [
                { label: 'Testimonial Quote', name: 'quote', widget: 'text' },
                { label: 'Client Name', name: 'author', widget: 'string' },
                { label: 'Job Title', name: 'role', widget: 'string' },
                { label: 'Company/Agency', name: 'company', widget: 'string', required: false },
                { label: 'Photo', name: 'photo', widget: 'image', required: false },
                { label: 'Rating (1-5)', name: 'rating', widget: 'number', required: false, min: 1, max: 5 },
              ],
            },
            {
              label: 'Certifications & Compliance',
              name: 'certifications',
              widget: 'list',
              required: false,
              collapsed: true,
              summary: '{{fields.title}}',
              fields: [
                { label: 'Certification Name', name: 'title', widget: 'string' },
                { label: 'Details', name: 'subtitle', widget: 'string' },
                { label: 'Badge/Logo', name: 'badge', widget: 'image', required: false },
              ],
            },
          ],
        },
        {
          label: 'About Page',
          name: 'about',
          file: 'content/pages/about.json',
          fields: [
            {
              label: 'SEO',
              name: 'seo',
              widget: 'object',
              collapsed: true,
              fields: [
                { label: 'Page Title', name: 'title', widget: 'string', required: false },
                { label: 'Meta Description', name: 'description', widget: 'text', required: false },
              ],
            },
            {
              label: 'Page Hero',
              name: 'hero',
              widget: 'object',
              fields: [
                { label: 'Page Title', name: 'title', widget: 'string' },
                { label: 'Subtitle', name: 'subtitle', widget: 'string' },
                { label: 'Hero Image', name: 'image', widget: 'image', required: false },
              ],
            },
            {
              label: 'Content Sections',
              name: 'sections',
              widget: 'list',
              required: false,
              summary: '{{fields.title}}',
              fields: [
                { label: 'Section Title', name: 'title', widget: 'string' },
                { label: 'Content', name: 'content', widget: 'markdown' },
                { label: 'Section Image', name: 'image', widget: 'image', required: false },
                { label: 'Image Position', name: 'imagePosition', widget: 'select', options: ['left', 'right', 'top', 'bottom'], default: 'right', required: false },
              ],
            },
          ],
        },
        {
          label: 'Services Page',
          name: 'services',
          file: 'content/pages/services.json',
          fields: [
            {
              label: 'SEO',
              name: 'seo',
              widget: 'object',
              collapsed: true,
              fields: [
                { label: 'Page Title', name: 'title', widget: 'string', required: false },
                { label: 'Meta Description', name: 'description', widget: 'text', required: false },
              ],
            },
            {
              label: 'Hero',
              name: 'hero',
              widget: 'object',
              fields: [
                { label: 'Title', name: 'title', widget: 'string' },
                { label: 'Subtitle', name: 'subtitle', widget: 'string' },
              ],
            },
            {
              label: 'Services',
              name: 'services',
              widget: 'list',
              required: false,
              summary: '{{fields.name}}',
              fields: [
                { label: 'Service Name', name: 'name', widget: 'string' },
                { label: 'Short Description', name: 'description', widget: 'text' },
                { label: 'Full Details', name: 'details', widget: 'markdown', required: false },
                { label: 'Icon/Image', name: 'icon', widget: 'image', required: false },
                { label: 'Featured', name: 'featured', widget: 'boolean', default: false, required: false },
              ],
            },
          ],
        },
        {
          label: 'Careers Page',
          name: 'careers',
          file: 'content/pages/careers.json',
          fields: [
            {
              label: 'SEO',
              name: 'seo',
              widget: 'object',
              collapsed: true,
              fields: [
                { label: 'Page Title', name: 'title', widget: 'string', required: false },
                { label: 'Meta Description', name: 'description', widget: 'text', required: false },
              ],
            },
            {
              label: 'Hero',
              name: 'hero',
              widget: 'object',
              fields: [
                { label: 'Title', name: 'title', widget: 'string' },
                { label: 'Subtitle', name: 'subtitle', widget: 'string' },
                { label: 'Hero Image', name: 'image', widget: 'image', required: false },
              ],
            },
            {
              label: 'Employee Benefits',
              name: 'benefits',
              widget: 'list',
              required: false,
              summary: '{{fields.title}}',
              fields: [
                { label: 'Benefit Title', name: 'title', widget: 'string' },
                { label: 'Description', name: 'description', widget: 'text' },
                { label: 'Icon', name: 'icon', widget: 'string', required: false },
              ],
            },
            {
              label: 'Current Job Openings',
              name: 'openings',
              widget: 'list',
              required: false,
              summary: '{{fields.title}} - {{fields.location}}',
              fields: [
                { label: 'Job Title', name: 'title', widget: 'string' },
                { label: 'Location', name: 'location', widget: 'string' },
                { label: 'Job Type', name: 'type', widget: 'select', options: ['Full-time', 'Part-time', 'Contract', 'Remote'], default: 'Full-time' },
                { label: 'Description', name: 'description', widget: 'markdown' },
                { label: 'Requirements', name: 'requirements', widget: 'list', required: false },
                { label: 'Posted Date', name: 'posted', widget: 'datetime', required: false },
                { label: 'Application Link', name: 'applyLink', widget: 'string', required: false },
              ],
            },
          ],
        },
        {
          label: 'Contact Page',
          name: 'contact',
          file: 'content/pages/contact.json',
          fields: [
            {
              label: 'SEO',
              name: 'seo',
              widget: 'object',
              collapsed: true,
              fields: [
                { label: 'Page Title', name: 'title', widget: 'string', required: false },
                { label: 'Meta Description', name: 'description', widget: 'text', required: false },
              ],
            },
            { label: 'Phone Number', name: 'phone', widget: 'string' },
            { label: 'Email Address', name: 'email', widget: 'string', pattern: ['^[^@]+@[^@]+\\.[^@]+$', 'Must be a valid email'] },
            { label: 'Physical Address', name: 'address', widget: 'text' },
            { label: 'Business Hours', name: 'hours', widget: 'string' },
            { label: 'Google Maps Embed URL', name: 'mapUrl', widget: 'string', required: false, hint: 'Embed URL from Google Maps' },
            {
              label: 'Social Media Links',
              name: 'social',
              widget: 'object',
              required: false,
              fields: [
                { label: 'LinkedIn', name: 'linkedin', widget: 'string', required: false },
                { label: 'Twitter/X', name: 'twitter', widget: 'string', required: false },
                { label: 'Facebook', name: 'facebook', widget: 'string', required: false },
                { label: 'Instagram', name: 'instagram', widget: 'string', required: false },
              ],
            },
          ],
        },
      ],
    },

    // ==================== BLOG ====================
    {
      name: 'blog',
      label: '📝 Blog Posts',
      description: 'Manage blog articles and news',
      folder: 'content/blog',
      create: true,
      slug: '{{year}}-{{month}}-{{day}}-{{slug}}',
      identifier_field: 'title',
      summary: '{{title}} - {{date}}',
      sortable_fields: ['date', 'title', 'author'],
      fields: [
        { label: 'Title', name: 'title', widget: 'string' },
        { label: 'Publish Date', name: 'date', widget: 'datetime' },
        { label: 'Author', name: 'author', widget: 'string' },
        { label: 'Featured Image', name: 'featured_image', widget: 'image' },
        { label: 'Excerpt', name: 'excerpt', widget: 'text', hint: 'Brief summary (160 characters max)' },
        { label: 'Content', name: 'body', widget: 'markdown' },
        { label: 'Categories', name: 'categories', widget: 'list', required: false },
        { label: 'Tags', name: 'tags', widget: 'list', required: false },
        { label: 'Published', name: 'published', widget: 'boolean', default: false },
        {
          label: 'SEO',
          name: 'seo',
          widget: 'object',
          collapsed: true,
          required: false,
          fields: [
            { label: 'Meta Title', name: 'title', widget: 'string', required: false },
            { label: 'Meta Description', name: 'description', widget: 'text', required: false },
          ],
        },
      ],
    },

    // ==================== TEAM MEMBERS ====================
    {
      name: 'team',
      label: '👥 Team Members',
      description: 'Company leadership and team profiles',
      folder: 'content/team',
      create: true,
      slug: '{{slug}}',
      identifier_field: 'name',
      summary: '{{name}} - {{title}}',
      fields: [
        { label: 'Full Name', name: 'name', widget: 'string' },
        { label: 'Job Title', name: 'title', widget: 'string' },
        { label: 'Department', name: 'department', widget: 'select', options: ['Executive', 'Engineering', 'Operations', 'Sales', 'HR', 'Other'] },
        { label: 'Photo', name: 'photo', widget: 'image', hint: 'Professional headshot (400x400px recommended)' },
        { label: 'Bio', name: 'bio', widget: 'markdown' },
        { label: 'Email', name: 'email', widget: 'string', required: false },
        { label: 'LinkedIn', name: 'linkedin', widget: 'string', required: false },
        { label: 'Display Order', name: 'order', widget: 'number', default: 0, hint: 'Lower numbers appear first' },
        { label: 'Show on Website', name: 'published', widget: 'boolean', default: true },
      ],
    },

    // ==================== CASE STUDIES ====================
    {
      name: 'case_studies',
      label: '💼 Case Studies',
      description: 'Client success stories and projects',
      folder: 'content/case-studies',
      create: true,
      slug: '{{slug}}',
      identifier_field: 'title',
      summary: '{{title}} - {{client}}',
      fields: [
        { label: 'Project Title', name: 'title', widget: 'string' },
        { label: 'Client Name', name: 'client', widget: 'string' },
        { label: 'Client Logo', name: 'client_logo', widget: 'image', required: false },
        { label: 'Industry', name: 'industry', widget: 'string' },
        { label: 'Project Date', name: 'date', widget: 'datetime' },
        { label: 'Featured Image', name: 'featured_image', widget: 'image' },
        { label: 'Challenge', name: 'challenge', widget: 'markdown' },
        { label: 'Solution', name: 'solution', widget: 'markdown' },
        { label: 'Results', name: 'results', widget: 'markdown' },
        {
          label: 'Technologies Used',
          name: 'technologies',
          widget: 'list',
          required: false,
          hint: 'Technologies, tools, or frameworks used'
        },
        {
          label: 'Key Metrics',
          name: 'metrics',
          widget: 'list',
          required: false,
          fields: [
            { label: 'Metric', name: 'label', widget: 'string' },
            { label: 'Value', name: 'value', widget: 'string' },
          ],
        },
        { label: 'Published', name: 'published', widget: 'boolean', default: false },
      ],
    },
  ],
};

export default function AdminPage() {
  useEffect(() => {
    // Add custom FWG branding and styling to CMS
    const style = document.createElement('style');
    style.textContent = `
      /* FWG Custom CMS Styling */
      :root {
        --fwg-navy: #0f172a;
        --fwg-blue: #3b82f6;
        --fwg-light: #f8fafc;
        --fwg-border: #e2e8f0;
      }

      /* Custom FWG Header Branding - Keep original size */
      [class*="AppHeader"] {
        background: linear-gradient(135deg, var(--fwg-navy) 0%, #1e293b 100%) !important;
        border-bottom: 3px solid var(--fwg-blue) !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
      }

      /* Add centered FWG logo and text */
      [class*="AppHeader"]::before {
        content: '';
        display: inline-block;
        width: 36px;
        height: 36px;
        background-image: url('/fwg_logo-removebg-preview.png');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        margin-right: 12px;
      }

      [class*="AppHeader"]::after {
        content: 'FWG Content Management System';
        font-size: 1.125rem;
        font-weight: 600;
        color: white;
      }

      /* Hide original header content */
      [class*="AppHeader"] > * {
        display: none !important;
      }

      /* Sidebar Customization */
      [class*="Sidebar"] {
        background: var(--fwg-light) !important;
        border-right: 2px solid var(--fwg-border) !important;
      }

      /* Sidebar Items */
      [class*="SidebarItem"] {
        border-radius: 8px;
        margin: 4px 8px;
        transition: all 0.2s ease;
      }

      [class*="SidebarItem"]:hover {
        background: white !important;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        transform: translateX(4px);
      }

      /* Active Collection */
      [class*="SidebarItem"][class*="active"] {
        background: var(--fwg-blue) !important;
        color: white !important;
        box-shadow: 0 4px 6px rgba(59, 130, 246, 0.3);
      }

      /* Buttons */
      button[class*="Button"] {
        border-radius: 8px;
        font-weight: 600;
        transition: all 0.2s ease;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        font-size: 0.875rem;
      }

      button[class*="Button"]:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 12px rgba(0,0,0,0.15);
      }

      /* Primary Buttons */
      button[class*="Button"][class*="primary"] {
        background: var(--fwg-blue) !important;
        border: none !important;
      }

      button[class*="Button"][class*="primary"]:hover {
        background: #2563eb !important;
      }

      /* Cards and Content Areas */
      [class*="Card"] {
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        border: 1px solid var(--fwg-border);
      }

      /* Input Fields */
      input[type="text"],
      input[type="email"],
      textarea,
      select {
        border-radius: 8px;
        border: 2px solid var(--fwg-border);
        transition: all 0.2s;
      }

      input[type="text"]:focus,
      input[type="email"]:focus,
      textarea:focus,
      select:focus {
        border-color: var(--fwg-blue);
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
      }

      /* Collection Cards */
      [class*="CollectionCard"] {
        border-radius: 12px;
        transition: all 0.2s;
      }

      [class*="CollectionCard"]:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 16px rgba(0,0,0,0.12);
      }

      /* Custom Scrollbar */
      ::-webkit-scrollbar {
        width: 12px;
        height: 12px;
      }

      ::-webkit-scrollbar-track {
        background: var(--fwg-light);
      }

      ::-webkit-scrollbar-thumb {
        background: #cbd5e1;
        border-radius: 6px;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: #94a3b8;
      }

      /* Loading Spinner */
      [class*="Loader"] {
        border-color: var(--fwg-blue) !important;
      }

      /* Success Messages */
      [class*="Toast"][class*="success"] {
        background: #10b981 !important;
        border-radius: 8px;
      }

      /* Error Messages */
      [class*="Toast"][class*="error"] {
        background: #ef4444 !important;
        border-radius: 8px;
      }

      /* Add subtle animation to app */
      [class*="App-module"] {
        animation: fadeIn 0.3s ease-in;
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      /* Custom Badge for FWG */
      [class*="AppHeader"] {
        position: relative;
      }

      /* Typography improvements */
      [class*="App-module"] {
        font-family: 'Inter', system-ui, -apple-system, sans-serif;
      }

      h1, h2, h3, h4, h5, h6 {
        font-weight: 700;
        color: var(--fwg-navy);
      }

      /* Improve form labels */
      label {
        font-weight: 600;
        color: #334155;
        margin-bottom: 0.5rem;
      }

      /* Add hover effect to clickable items */
      [role="button"],
      a {
        transition: all 0.2s ease;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const initCMS = () => {
    if (typeof window !== "undefined" && (window as any).CMS) {
      const CMS = (window as any).CMS;
      CMS.init({ config: cmsConfig });
      console.log("✨ Advanced CMS initialized successfully");
    }
  };

  return (
    <div id="nc-root">

      <Script
        src="https://unpkg.com/netlify-cms@^2/dist/netlify-cms.js"
        strategy="afterInteractive"
        onLoad={initCMS}
      />
    </div>
  );
}
