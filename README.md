# Federal Working Group Website

A modern, fully CMS-managed Next.js website for Federal Working Group featuring comprehensive content management through Sveltia CMS.

## 🏢 Company Information

**Federal Working Group (FWG)**
7918 Jones Branch Drive, 4th Floor
McLean, VA 22102
Phone: (571) 306-2656
Email: info@federalworking.com
Website: https://www.federalworking.com

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Sveltia CMS (NetlifyCMS fork with GitHub backend)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Netlify (Continuous Deployment)
- **Version Control**: GitHub

## ✨ Features

### Content Management
- **15+ CMS-Editable Pages**: All major pages fully managed through `/admin`
- **Real-time Updates**: Content changes deploy automatically via Netlify
- **GitHub-Based**: All content stored in version control as JSON
- **No Database Required**: Git-based CMS with OAuth authentication
- **Visual Editor**: User-friendly admin interface at `/admin`

### Pages (All CMS-Editable)
#### Main Pages (7)
- ✅ Homepage - Hero, stats, services, success stories, CTA
- ✅ About - Company story, mission, vision, values, cultural pillars
- ✅ Contact - Address, phone, email, map, form, CTA
- ✅ Careers - Culture, benefits, openings, application info
- ✅ Services - All 4 service offerings with detailed descriptions
- ✅ Privacy Policy - All policy sections
- ✅ Terms of Service - All terms sections

#### About Sub-Pages (5)
- ✅ Why FWG - Differentiators, track record, customer approach
- ✅ Our Clients - Federal agency partners with logos
- ✅ Commitment to Quality - Three quality pillars
- ✅ Caring in the Community - CSR initiatives
- ✅ Success Stories - Impact metrics and case studies

#### Other Pages (2)
- ✅ Accessibility Statement - WCAG compliance information
- ✅ Employee Portal - Links to webmail and ADP

### Technical Features
- **SEO Optimized**: Dynamic sitemap, robots.txt, metadata
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Performance**: Static site generation for fast load times
- **Search**: Built-in site search functionality
- **Type Safety**: Full TypeScript implementation
- **Accessibility**: WCAG 2.1 Level AA compliant

## 📦 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Git
- GitHub account (for CMS authentication)

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/consigcody94/FWG1.git
cd FWG1-main
```

2. **Install dependencies:**
```bash
npm install
```

3. **Run the development server:**
```bash
npm run dev
```

4. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Content Management System

### Accessing the CMS

**Production CMS:**
- URL: https://www.federalworking.com/admin
- Authentication: GitHub OAuth

**Local Development:**
- URL: http://localhost:3000/admin
- Note: Use the production URL for actual content editing

### How to Edit Content

1. Visit `/admin` on the live site
2. Click "Login with GitHub"
3. Authorize the application
4. Navigate to "Site Settings" → "All Pages Content"
5. Edit any page content:
   - Text, headings, descriptions
   - Icons (from predefined sets)
   - Links and buttons
   - Contact information
   - Lists and arrays
6. Click "Save" to commit changes
7. Netlify automatically rebuilds and deploys (2-3 minutes)

### CMS Configuration

The CMS is configured in `/public/admin/config.yml`:
- **Backend**: GitHub (git-gateway with Netlify Identity)
- **Content Storage**: `/content/` directory
- **Format**: JSON files
- **Collections**:
  - Site Settings (homepage, footer)
  - All Pages Content (15+ pages in single JSON)
  - Career Postings (markdown files)
  - Success Stories (markdown files)
  - Testimonials (markdown files)

### Content Structure

All page content is centralized in:
```
content/
├── pages-content/
│   └── all-pages.json        # All 15+ pages in one file
├── settings/
│   ├── home.json             # Homepage specific content
│   └── footer.json           # Footer information
├── careers/                   # Individual job postings (markdown)
├── success-stories/          # Case studies (markdown)
└── testimonials/             # Client testimonials (markdown)
```

## 🏗️ Project Structure

```
FWG1-main/
├── app/                      # Next.js App Router
│   ├── about/               # About page + 5 sub-pages
│   ├── accessibility/       # Accessibility statement
│   ├── api/                 # API routes (content serving)
│   ├── careers/             # Careers page + job postings
│   ├── components/          # Reusable React components
│   ├── contact/             # Contact page
│   ├── employee-portal/     # Employee resources portal
│   ├── lib/                 # Utility functions
│   ├── privacy-policy/      # Privacy policy page
│   ├── services/            # Services page + 4 sub-pages
│   ├── terms-of-service/    # Terms of service page
│   ├── layout.tsx           # Root layout with navigation
│   ├── page.tsx             # Homepage
│   ├── sitemap.ts           # Dynamic sitemap generation
│   └── robots.ts            # Robots.txt configuration
├── content/                 # CMS content storage (JSON/Markdown)
├── public/
│   ├── admin/              # Sveltia CMS configuration
│   │   └── config.yml      # CMS schema and collections
│   └── assets/             # Images, PDFs, videos
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## 📝 Key Files

### Configuration Files
- `next.config.ts` - Next.js configuration with static export
- `tailwind.config.ts` - Tailwind CSS customization
- `public/admin/config.yml` - CMS schema and field definitions

### Content Files
- `content/pages-content/all-pages.json` - All page content (15+ pages)
- `content/settings/home.json` - Homepage-specific content
- `content/settings/footer.json` - Footer information

### API Routes
- `app/api/pages-content/route.ts` - Serves all page content
- `app/api/home-settings/route.ts` - Serves homepage content

## 🔧 Development Commands

```bash
# Development
npm run dev              # Start dev server (localhost:3000)

# Building
npm run build           # Build for production
npm run start           # Preview production build

# Code Quality
npm run lint            # Run ESLint
npm run type-check      # Check TypeScript types

# Testing
npm test                # Run tests (if configured)
```

## 🚀 Deployment

### Automatic Deployment (Netlify)

The site deploys automatically when changes are pushed to the `main` branch:

1. **Push to GitHub**: `git push origin main`
2. **Netlify Builds**: Automatically triggered
3. **Deploy**: Live in 2-3 minutes

### Build Process

```bash
npm run build
```

This creates a static export in the `out/` directory ready for deployment.

### Netlify Configuration

Build settings in `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = "out"

[[redirects]]
  from = "/admin"
  to = "/admin/index.html"
  status = 200
```

## 🔐 Environment Variables

No environment variables required! The CMS uses Netlify's built-in GitHub OAuth integration.

## 📱 Contact Information Management

All contact information is CMS-editable through `/admin`:

**Current Contact Details:**
- Address: 7918 Jones Branch Drive, 4th Floor, McLean, VA 22102
- Phone: (571) 306-2656
- Email: info@federalworking.com
- Support: support@federalworking.com
- Careers: careers@federalworking.com

To update contact info:
1. Go to `/admin`
2. Navigate to "Site Settings" → "All Pages Content" → "Contact Page"
3. Edit address, phone, email, or map location
4. Save changes

## 🔍 Search Functionality

Built-in site search includes:
- All main pages
- About sub-pages
- Service pages
- Career pages
- Job listings
- Legal pages (Privacy, Terms, Accessibility)

Search is accessed via the header search box or `Cmd/Ctrl + K`.

## 🗺️ Sitemap & SEO

- **Sitemap**: Auto-generated at `/sitemap.xml`
- **Robots.txt**: Configured at `/robots.txt`
- **Metadata**: Dynamic per-page metadata for SEO
- **Open Graph**: Social media preview images configured

## 📊 Performance

- **Static Export**: Pre-rendered pages for maximum speed
- **Image Optimization**: Next.js Image component used throughout
- **Code Splitting**: Automatic route-based code splitting
- **Cache Control**: Configured for optimal caching strategy

## 🆘 Support & Maintenance

### Common Tasks

**Update Page Content:**
1. Visit `/admin`
2. Edit content in visual editor
3. Save (auto-commits to GitHub)

**Add New Job Posting:**
1. Go to `/admin`
2. Navigate to "Career Postings"
3. Click "Create New"
4. Fill in job details
5. Save

**Update Company Address:**
1. Go to `/admin` → "All Pages Content" → "Contact Page"
2. Update address fields
3. Update Google Maps `mapUrl` if needed
4. Save changes

### Troubleshooting

**CMS Login Issues:**
- Ensure you have GitHub access to the repository
- Clear browser cache and cookies
- Try incognito/private browsing mode

**Build Failures:**
- Check TypeScript errors: `npm run type-check`
- Review build logs in Netlify dashboard
- Ensure all required fields in CMS are filled

**Content Not Updating:**
- Wait 2-3 minutes for Netlify to rebuild
- Check Netlify deploy status
- Verify changes were saved in CMS
- Clear browser cache

## 📚 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Sveltia CMS Documentation](https://github.com/sveltia/sveltia-cms)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Test locally: `npm run dev`
4. Build and verify: `npm run build`
5. Commit: `git commit -m "Description of changes"`
6. Push: `git push origin feature/your-feature`
7. Create Pull Request on GitHub

## 📄 License

© 2025 Federal Working Group. All rights reserved.

## 🔗 Links

- **Website**: https://www.federalworking.com
- **CMS Admin**: https://www.federalworking.com/admin
- **GitHub**: https://github.com/consigcody94/FWG1
- **Netlify**: https://app.netlify.com/sites/gentle-biscochitos-7940a8

---

**Last Updated**: November 2025
**Maintained By**: Federal Working Group IT Team
