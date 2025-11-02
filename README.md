# Federal Working Group Website

A modern, SEO-optimized multi-page Next.js application for Federal Working Group with integrated Tina CMS for content management.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **CMS**: Tina CMS (Cloud)
- **Deployment**: Netlify (Static Export)
- **Git**: GitHub

## Quick Start

### Prerequisites
- Node.js 18+ and npm
- Git
- GitHub account (for CMS access)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd FWG
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` with your Tina Cloud credentials (see **CMS Setup** below).

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) to view the site.

## Content Management System

This project uses **Tina CMS** for visual content editing.

### Accessing the CMS

- **Production**: https://gentle-biscochitos-7940a8.netlify.app/admin
- **Development**: http://localhost:3000/admin

### CMS Features

- ✅ Visual editing with real-time preview
- ✅ Git-based content storage (JSON/Markdown)
- ✅ TypeScript type safety
- ✅ Three content collections:
  - **Pages**: Homepage content (hero, stats, services, testimonials)
  - **Contact**: Contact information and hours
  - **Jobs**: Job postings with rich text

### CMS Setup (For Developers)

1. Sign up for [Tina Cloud](https://app.tina.io) (free tier includes 2 users)
2. Create a new project and connect your GitHub repository
3. Copy your credentials to `.env.local`:
   - `NEXT_PUBLIC_TINA_CLIENT_ID` - From Tina Cloud dashboard
   - `TINA_TOKEN` - From Tina Cloud dashboard
   - `NEXT_PUBLIC_TINA_BRANCH` - Usually "main"
   - `NEXTAUTH_SECRET` - Generate with `openssl rand -base64 32`

### How CMS Works

1. Content editors sign in via GitHub at `/admin`
2. Edit content visually in the admin interface
3. Changes are committed directly to GitHub
4. Netlify automatically rebuilds and deploys the site
5. Content is stored in `content/` directory as JSON/Markdown

## Building for Production

```bash
npm run build
```

This command:
1. Runs `npx tinacms build --skip-cloud-checks` to generate the admin interface
2. Runs `next build` to create the static export in the `out/` directory

## Deployment

The site is deployed automatically to Netlify when changes are pushed to the `main` branch.

### Required Environment Variables (Netlify)

Set these in Netlify dashboard under **Site settings** → **Environment variables**:

- `NEXT_PUBLIC_TINA_CLIENT_ID`
- `TINA_TOKEN`
- `NEXT_PUBLIC_TINA_BRANCH`
- `NEXTAUTH_SECRET`

## Project Structure

```
FWG/
├── app/               # Next.js app directory
│   ├── admin/        # CMS admin interface wrapper
│   ├── about/        # About pages
│   ├── careers/      # Career pages
│   ├── components/   # Reusable components
│   ├── contact/      # Contact page
│   ├── contracts/    # Contract vehicle pages
│   └── services/     # Service pages
├── content/          # CMS content (JSON/Markdown)
│   ├── contact-info.json
│   ├── site-content.json
│   └── jobs/        # Job postings
├── tina/            # Tina CMS configuration
│   ├── config.ts    # Schema and collections
│   └── __generated__/  # Auto-generated types
└── public/
    ├── admin/       # Generated admin interface
    └── assets/      # Static assets

```

## Key Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server (after build)
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier

## Documentation

- [PROJECT_DOCUMENTATION.md](./PROJECT_DOCUMENTATION.md) - Comprehensive project documentation
- [.env.example](./.env.example) - Environment variables template

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tina CMS Documentation](https://tina.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Support

For questions or issues, please open an issue in the GitHub repository.
