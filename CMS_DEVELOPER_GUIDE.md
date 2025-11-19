# Sveltia CMS - Developer Guide

This guide is for developers integrating Sveltia CMS content into the Federal Working Group Next.js application.

## 🏗️ Architecture Overview

### Tech Stack
- **CMS**: Sveltia CMS (modern replacement for Decap/Netlify CMS)
- **Backend**: Git Gateway (via Netlify Identity)
- **Content Storage**: Git repository (`/content` folder)
- **Content Format**: Markdown with YAML frontmatter + JSON
- **Parsing**: `gray-matter` for markdown parsing
- **Framework**: Next.js 16 with App Router

### Why Sveltia CMS?

✅ **User-friendly**: Best-in-class UI, perfect for non-technical users
✅ **Git-based**: Version control built-in, no database needed
✅ **Free & Open Source**: No hosting costs, active development
✅ **Drop-in compatible**: Uses same config as Decap/Netlify CMS
✅ **Modern**: Better performance, features, and UX than Decap CMS

## 📂 File Structure

```
/
├── content/                    # Content managed by CMS (committed to Git)
│   ├── careers/               # Career postings (Markdown)
│   │   └── network-engineer.md
│   ├── services/              # Service pages (Markdown)
│   │   └── it-security.md
│   ├── pages/                 # General pages (Markdown)
│   │   └── about.md
│   └── settings/              # Site configuration (JSON)
│       └── home.json
│
├── public/
│   ├── admin/                 # CMS admin interface
│   │   ├── index.html        # Loads Sveltia CMS
│   │   └── config.yml        # CMS configuration
│   └── assets/               # Media files uploaded via CMS
│
├── app/
│   ├── lib/
│   │   └── content.ts        # Content loading utilities
│   ├── careers-cms/          # Example: CMS-driven page
│   │   └── page.tsx
│   └── components/
│       └── netlify-identity-loader.tsx
│
└── CMS_SETUP_GUIDE.md        # User-facing documentation
```

## 🔧 Configuration

### CMS Config (`public/admin/config.yml`)

```yaml
backend:
  name: git-gateway
  branch: main

media_folder: "public/assets"
public_folder: "/assets"

publish_mode: editorial_workflow  # Enables drafts/review workflow

collections:
  - name: "careers"              # Collection ID
    label: "Career Postings"     # UI label
    folder: "content/careers"    # Where files are stored
    create: true                 # Allow creating new entries
    slug: "{{slug}}"            # URL-friendly filename
    fields:                      # Content fields
      - { label: "Title", name: "title", widget: "string" }
      # ... more fields
```

### Authentication Flow

1. **Netlify Identity** provides user authentication
2. **Git Gateway** gives CMS access to your Git repo
3. Users edit content in `/admin`
4. Content is committed to Git repo
5. Netlify auto-deploys changes

## 💻 Using Content in Your Code

### Import the Utilities

```typescript
import {
  getAllCareers,
  getCareerBySlug,
  getAllServices,
  getServiceBySlug,
  getAllPages,
  getPageBySlug,
  getHomeSettings
} from '@/app/lib/content';
```

### Example: List All Careers

```typescript
// app/careers/page.tsx
import { getAllCareers } from '@/app/lib/content';

export default function CareersPage() {
  const careers = getAllCareers();

  return (
    <div>
      <h1>Careers</h1>
      {careers.map(career => (
        <article key={career.slug}>
          <h2>{career.title}</h2>
          <p>{career.description}</p>
          <span>{career.jobType}</span>
          <ul>
            {career.responsibilities.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <Link href={`/careers/${career.slug}`}>
            Learn More
          </Link>
        </article>
      ))}
    </div>
  );
}
```

### Example: Single Career Detail Page

```typescript
// app/careers/[slug]/page.tsx
import { getCareerBySlug, getAllCareers } from '@/app/lib/content';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

export async function generateStaticParams() {
  const careers = getAllCareers();
  return careers.map(career => ({
    slug: career.slug
  }));
}

export default function CareerDetailPage({ params }: { params: { slug: string } }) {
  const career = getCareerBySlug(params.slug);

  if (!career) {
    notFound();
  }

  return (
    <div>
      <h1>{career.title}</h1>
      <div>
        <span>{career.jobType}</span>
        <span>{career.clearance}</span>
      </div>

      {/* Render markdown content */}
      <ReactMarkdown>{career.content}</ReactMarkdown>

      <section>
        <h2>Responsibilities</h2>
        <ul>
          {career.responsibilities.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Required Qualifications</h2>
        <ul>
          {career.requiredQualifications.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
```

### Example: Use Home Settings

```typescript
// app/page.tsx
import { getHomeSettings } from '@/app/lib/content';

export default function HomePage() {
  const settings = getHomeSettings();

  if (!settings) {
    // Fallback if settings don't exist yet
    return <div>Loading...</div>;
  }

  return (
    <div>
      <section>
        <h1>{settings.heroTitle}</h1>
        <p>{settings.heroSubtitle}</p>
        <span>{settings.heroBadge}</span>
        <video src={settings.heroVideo} />

        <a href={settings.primaryCTALink}>
          {settings.primaryCTAText}
        </a>
        <a href={settings.secondaryCTALink}>
          {settings.secondaryCTAText}
        </a>
      </section>

      <section>
        {settings.stats.map((stat, i) => (
          <div key={i}>
            <span>{stat.value}</span>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>
    </div>
  );
}
```

## 🎨 Content Types & Interfaces

### CareerPosting

```typescript
interface CareerPosting {
  slug: string;                    // URL slug (e.g., "network-engineer")
  title: string;                   // Job title
  jobType: string;                 // "Full-Time" | "Part-Time" | "Contract"
  clearance?: string;              // Security clearance requirement
  description: string;             // Short description
  overview?: string;               // Long description
  responsibilities: string[];      // Array of responsibilities
  requiredQualifications: string[];
  preferredQualifications: string[];
  benefits: string[];
  featured: boolean;
  date: string;                    // ISO date string
  content: string;                 // Markdown content (from body)
}
```

### Service

```typescript
interface Service {
  slug: string;
  title: string;
  description: string;
  heroImage?: string;
  icon?: string;
  body: string;                    // Markdown content
  features: Array<{
    title: string;
    description: string;
    icon?: string;
  }>;
  featured: boolean;
  order: number;                   // For sorting
}
```

### Page

```typescript
interface Page {
  slug: string;
  title: string;
  pageType: string;                // "about" | "general" | "legal"
  description: string;
  body: string;                    // Markdown content
  heroVideo?: string;
  sections?: Array<{
    title: string;
    content: string;
    icon?: string;
  }>;
}
```

### HomeSettings

```typescript
interface HomeSettings {
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
```

## 🔐 Security Considerations

### Input Sanitization

Content from CMS is stored in Git, which means:
- ✅ Content is version-controlled
- ✅ Changes are auditable
- ✅ Can be code-reviewed before deployment
- ⚠️ Still sanitize markdown output for XSS prevention

Use `react-markdown` with safe defaults:

```typescript
import ReactMarkdown from 'react-markdown';

<ReactMarkdown
  components={{
    // Customize/sanitize components as needed
    img: ({node, ...props}) => <img {...props} loading="lazy" />
  }}
>
  {content}
</ReactMarkdown>
```

### Access Control

- Users are managed via Netlify Identity
- Git commits are attributed to CMS users
- Can set up approval workflows in CMS config

## 🚀 Deployment

### Netlify Auto-Deploy

1. CMS user makes changes in `/admin`
2. Changes are committed to Git repo
3. Netlify detects Git changes
4. Runs `npm run build`
5. Deploys new static site

### Environment Variables

No environment variables needed! Everything is configured via:
- `public/admin/config.yml` (CMS config)
- Netlify Identity (set up in Netlify dashboard)

## 🧪 Local Development

### Option 1: Test Backend (No Git)

Uncomment in `public/admin/config.yml`:

```yaml
backend:
  name: test-repo
```

This allows testing CMS locally without Git commits.

### Option 2: Full Setup

1. Use Netlify CLI: `netlify dev`
2. This proxies Netlify Identity locally
3. Access at `http://localhost:8888/admin`

## 📝 Adding New Collections

### Step 1: Update CMS Config

Edit `public/admin/config.yml`:

```yaml
collections:
  - name: "blog"              # New collection
    label: "Blog Posts"
    folder: "content/blog"
    create: true
    slug: "{{year}}-{{month}}-{{slug}}"
    fields:
      - { label: "Title", name: "title", widget: "string" }
      - { label: "Date", name: "date", widget: "datetime" }
      - { label: "Author", name: "author", widget: "string" }
      - { label: "Body", name: "body", widget: "markdown" }
```

### Step 2: Create Content Utilities

Add to `app/lib/content.ts`:

```typescript
export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  content: string;
}

export function getAllBlogPosts(): BlogPost[] {
  const blogDirectory = path.join(contentDirectory, 'blog');
  // ... similar to getAllCareers()
}
```

### Step 3: Create Pages

```typescript
// app/blog/page.tsx
import { getAllBlogPosts } from '@/app/lib/content';

export default function BlogPage() {
  const posts = getAllBlogPosts();
  // ... render posts
}
```

## 🎯 Best Practices

### Content Organization

- ✅ One collection per content type
- ✅ Use descriptive slugs (auto-generated from title)
- ✅ Store media in `/public/assets`
- ✅ Use frontmatter for structured data
- ✅ Use markdown body for rich text content

### Performance

- ✅ Content is read at build time (static generation)
- ✅ No runtime CMS API calls (fast!)
- ✅ Images are optimized via Next.js Image component
- ✅ Full site regenerates on content change

### Code Organization

```
app/
├── lib/
│   └── content.ts          # All content utilities
├── components/
│   └── content/            # Content-specific components
│       ├── CareerCard.tsx
│       ├── ServiceCard.tsx
│       └── MarkdownRenderer.tsx
└── (routes)/
    ├── careers/
    ├── services/
    └── blog/
```

## 🆘 Troubleshooting

### Build Fails: "Cannot find content directory"

**Solution**: Make sure `content/` folders exist:
```bash
mkdir -p content/{careers,services,pages,settings}
```

### TypeScript Errors

**Solution**: Import types from content.ts:
```typescript
import type { CareerPosting, Service } from '@/app/lib/content';
```

### Content Not Updating

**Solution**:
1. Check Git repo for new commits
2. Verify Netlify deploy succeeded
3. Clear Next.js cache: `rm -rf .next`
4. Rebuild: `npm run build`

## 📚 Resources

- **Sveltia CMS**: https://github.com/sveltia/sveltia-cms
- **Netlify CMS Config Reference**: https://decapcms.org/docs/configuration-options/
- **Next.js Data Fetching**: https://nextjs.org/docs/app/building-your-application/data-fetching
- **gray-matter**: https://github.com/jonschlinkert/gray-matter

## 🎉 Summary

You now have a fully integrated Git-based CMS that:
- ✅ Stores content in Git (version controlled)
- ✅ Provides a beautiful admin UI for non-technical users
- ✅ Integrates seamlessly with Next.js
- ✅ Auto-deploys on Netlify
- ✅ Requires no database or backend
- ✅ Is completely free and open source

Happy coding! 🚀
