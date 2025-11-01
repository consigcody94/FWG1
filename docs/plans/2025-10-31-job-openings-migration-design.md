# Job Openings Migration Design

**Date:** 2025-10-31
**Status:** Approved for Implementation

## Overview

Migrate job opening pages from federalworking.com to the new Next.js portal, creating individual static pages for each position with links, application form, and Sentinel Owl footer credit.

## Requirements

### Functional Requirements
- Scrape exact content from 10 job opening pages on federalworking.com
- Create individual static pages for each job position
- Update careers listing page with links to individual job pages
- Create centralized application form with Netlify forms
- Add Sentinel Owl credit to footer

### Technical Constraints
- SSL verification must be disabled when scraping federalworking.com
- Static pages approach (not dynamic routes)
- Content hardcoded directly in page components
- Netlify forms for application handling
- Must maintain existing site design patterns

## Architecture

### Three-Phase Implementation

**Phase 1: Content Scraping**
- Use WebFetch to retrieve all 10 job pages in parallel
- Disable SSL verification for federalworking.com
- Extract job description content from each page
- Store content for batch processing

**Phase 2: Page Generation**
- Create 10 individual page files: `app/careers/[job-slug]/page.tsx`
- URL structure: `/careers/e-discovery-analyst`, `/careers/it-asset-manager`, etc.
- Use existing site styling (Tailwind with slate color palette)
- Hardcode scraped content as JSX

**Phase 3: Integration**
- Update current-openings page with links to detailed pages
- Create application form page
- Update footer with Sentinel Owl credit

## Component Structure

### Job Pages (`app/careers/[job-slug]/page.tsx`)

Each job page includes:
- Title section with job name
- Job details (location, type)
- Full job description (scraped content as JSX)
- Call-to-action with "Apply Now" button → `/careers/apply`
- Consistent Tailwind styling (border-slate-200, text-slate-900, etc.)

### Application Page (`app/careers/apply/page.tsx`)

Netlify form with:
- Form fields:
  - First Name (text)
  - Last Name (text)
  - Phone Number (tel)
  - Email Address (email)
  - Position (dropdown with all 10 job titles)
  - Notes (textarea)
  - Resume (file upload: .doc, .docx, .pdf)
  - Cover Letter (file upload: .doc, .docx, .pdf)
- Netlify attributes: `data-netlify="true"`, `name="job-application"`
- File inputs with proper accept attributes
- Consistent site styling

### Current Openings Page Update

- Transform job cards to Link components
- Add href: `/careers/[job-slug]`
- Add hover states: `hover:border-slate-400`
- Maintain existing layout and styling

### Footer Update

- Add credit line: "Site designed and guarded by Sentinel Owl"
- Link to: `https://www.sentinelowl.org/web-dev`
- Match existing footer styling
- Position at bottom of footer component

## Job Slugs & URLs

| Job Title | Slug | Source URL |
|-----------|------|------------|
| E-Discovery Analyst | `e-discovery-analyst` | http://federalworking.com/opening/e-discovery-analyst/ |
| IT Asset Manager | `it-asset-manager` | http://federalworking.com/opening/it-asset-manager/ |
| Project Manager | `project-manager` | http://federalworking.com/opening/project-manager/ |
| IT Project Site Lead | `it-project-site-lead` | http://federalworking.com/opening/it-project-site-lead/ |
| Senior Project Online Analyst | `senior-project-online-analyst` | http://federalworking.com/opening/senior-project-online-analyst/ |
| System Administration | `system-administration` | http://federalworking.com/opening/system-administration/ |
| Help Desk Specialist | `help-desk-specialist` | http://federalworking.com/opening/help-desk-specialist/ |
| Network Engineer | `network-engineer` | http://federalworking.com/opening/network-engineer/ |
| IT Security Specialist | `itsecurityspecialist` | http://federalworking.com/opening/itsecurityspecialist/ |
| Enterprise Architect | `enterprise-architect` | http://federalworking.com/opening/enterprise-architect/ |

## Data Flow

1. **Scraping** → WebFetch retrieves job pages → Extract and store content
2. **Generation** → Create page.tsx files → Hardcode content as JSX
3. **Integration** → Update openings page links → Create application form → Update footer
4. **Testing** → Verify all links work → Test form submission → Check styling consistency

## Success Criteria

- All 10 job pages accessible at correct URLs
- Content matches exactly from federalworking.com
- Links from current-openings page work correctly
- Application form submits to Netlify
- File uploads accept correct formats
- Sentinel Owl credit displays with working link
- Consistent design across all pages
