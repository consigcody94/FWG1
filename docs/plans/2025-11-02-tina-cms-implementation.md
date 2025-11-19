# Tina CMS Migration Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Migrate from deprecated Netlify CMS to Tina CMS with production editing capability and FWG branding.

**Architecture:** Remove Netlify CMS files, install Tina packages, translate content schema from YAML to TypeScript, customize UI with FWG logo, connect to Tina Cloud for production auth.

**Tech Stack:** Tina CMS, Next.js 14, TypeScript, Tina Cloud (auth/Git backend)

---

## Task 1: Remove Netlify CMS Files

**Files:**
- Delete: `public/admin/`
- Delete: `NETLIFY_CMS_SETUP.md`
- Delete: `CMS_DOCUMENTATION.md`
- Delete: `lib/cms-connector.ts`
- Delete: `netlify.toml`
- Modify: `package.json`

**Step 1: Delete Netlify CMS admin directory**

```bash
rm -rf public/admin/
```

**Step 2: Delete Netlify CMS documentation**

```bash
rm -f NETLIFY_CMS_SETUP.md CMS_DOCUMENTATION.md
```

**Step 3: Delete CMS connector**

```bash
rm -f lib/cms-connector.ts
```

**Step 4: Delete netlify.toml**

```bash
rm -f netlify.toml
```

**Step 5: Remove decap-server from package.json**

Remove these lines from `package.json`:
- Line 7: `"cms-proxy": "npx decap-server",`
- Line 8: `"dev:cms": "npm run cms-proxy & npm run dev",`
- Line 39: `"decap-server": "^3.3.1",`

**Step 6: Commit cleanup**

```bash
git add -A
git commit -m "chore: remove deprecated Netlify CMS

Remove Netlify CMS files and dependencies as Netlify Identity is deprecated.

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

## Task 2: Install Tina CMS

**Files:**
- Modify: `package.json`

**Step 1: Install Tina packages**

```bash
npm install tinacms
npm install --save-dev @tinacms/cli tinacms-authjs
```

**Step 2: Verify installation**

Run: `npm list tinacms @tinacms/cli`
Expected: See installed versions without errors

**Step 3: Commit dependency updates**

```bash
git add package.json package-lock.json
git commit -m "feat: add Tina CMS dependencies

Install tinacms, @tinacms/cli, and tinacms-authjs.

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

## Task 3: Initialize Tina CMS

**Files:**
- Create: `tina/config.ts` (via CLI, then we'll customize)
- Create: `.env.local`
- Modify: `.gitignore`

**Step 1: Run Tina initialization**

```bash
npx @tinacms/cli@latest init
```

When prompted:
- "What framework are you using?" → Next.js
- "Do you want to use TypeScript?" → Yes

**Step 2: Update .gitignore for Tina**

Add to `.gitignore`:
```
# Tina CMS
.tina/__generated__
.env.local
```

**Step 3: Create environment variables template**

Create `.env.local`:
```bash
# Tina Cloud Configuration
# Get these values from https://app.tina.io after setting up your project
NEXT_PUBLIC_TINA_CLIENT_ID=
TINA_TOKEN=
NEXT_PUBLIC_TINA_BRANCH=main
```

**Step 4: Commit Tina initialization**

```bash
git add tina/ .gitignore .env.local
git commit -m "feat: initialize Tina CMS

Set up Tina configuration structure and environment variables.

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

## Task 4: Configure Tina Schema - Homepage Collection

**Files:**
- Modify: `tina/config.ts`

**Step 1: Replace tina/config.ts with base configuration**

Replace entire contents of `tina/config.ts`:

```typescript
import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.NEXT_PUBLIC_TINA_BRANCH ||
  process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "assets/uploads",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      // Collections will be added here
    ],
  },
});
```

**Step 2: Add homepage collection to schema**

In `tina/config.ts`, replace the `collections: []` array with:

```typescript
collections: [
  {
    name: "pages",
    label: "📄 Website Pages",
    path: "content",
    format: "json",
    ui: {
      allowedActions: {
        create: false,
        delete: false,
      },
    },
    match: {
      include: "site-content",
    },
    fields: [
      {
        type: "object",
        name: "hero",
        label: "Hero Section (Top Banner)",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Main Title",
            required: true,
          },
          {
            type: "string",
            name: "subtitle",
            label: "Subtitle",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "buttonText",
            label: "Button 1 Text",
          },
          {
            type: "string",
            name: "secondButtonText",
            label: "Button 2 Text",
          },
        ],
      },
      {
        type: "object",
        name: "stats",
        label: "Company Statistics",
        list: true,
        fields: [
          {
            type: "string",
            name: "value",
            label: "Number",
            description: "e.g., 20+",
          },
          {
            type: "string",
            name: "label",
            label: "Description",
            description: "e.g., Years of Excellence",
          },
        ],
      },
      {
        type: "object",
        name: "about",
        label: "About Section",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Section Title",
          },
          {
            type: "string",
            name: "content",
            label: "Content",
            ui: {
              component: "textarea",
            },
          },
        ],
      },
      {
        type: "object",
        name: "services",
        label: "Services",
        list: true,
        fields: [
          {
            type: "string",
            name: "title",
            label: "Service Name",
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "image",
            name: "image",
            label: "Image",
          },
        ],
      },
      {
        type: "object",
        name: "coreValues",
        label: "Core Values",
        list: true,
        fields: [
          {
            type: "string",
            name: "title",
            label: "Value",
            description: "e.g., INNOVATE",
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea",
            },
          },
        ],
      },
      {
        type: "object",
        name: "testimonials",
        label: "Testimonials",
        list: true,
        fields: [
          {
            type: "string",
            name: "quote",
            label: "Quote",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "author",
            label: "Author Name",
          },
          {
            type: "string",
            name: "role",
            label: "Author Title",
          },
        ],
      },
      {
        type: "object",
        name: "certifications",
        label: "Certifications",
        list: true,
        fields: [
          {
            type: "string",
            name: "title",
            label: "Certification",
          },
          {
            type: "string",
            name: "subtitle",
            label: "Description",
          },
        ],
      },
    ],
  },
],
```

**Step 3: Commit homepage collection**

```bash
git add tina/config.ts
git commit -m "feat: add homepage collection to Tina schema

Configure Tina to manage homepage content (hero, stats, services, testimonials, etc).

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

## Task 5: Configure Tina Schema - Contact Collection

**Files:**
- Modify: `tina/config.ts`

**Step 1: Add contact collection**

In `tina/config.ts`, add this collection after the pages collection (inside the `collections: [...]` array):

```typescript
{
  name: "contact",
  label: "📞 Contact Information",
  path: "content",
  format: "json",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  match: {
    include: "contact-info",
  },
  fields: [
    {
      type: "string",
      name: "phone",
      label: "Phone Number",
    },
    {
      type: "string",
      name: "email",
      label: "Email Address",
    },
    {
      type: "string",
      name: "address",
      label: "Office Address",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "hours",
      label: "Office Hours",
    },
  ],
},
```

**Step 2: Commit contact collection**

```bash
git add tina/config.ts
git commit -m "feat: add contact collection to Tina schema

Configure Tina to manage contact information.

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

## Task 6: Configure Tina Schema - Jobs Collection

**Files:**
- Modify: `tina/config.ts`

**Step 1: Add jobs collection**

In `tina/config.ts`, add this collection after the contact collection:

```typescript
{
  name: "jobs",
  label: "💼 Job Postings",
  path: "content/jobs",
  format: "md",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Job Title",
      required: true,
      isTitle: true,
    },
    {
      type: "string",
      name: "location",
      label: "Location",
      options: [
        "Washington, DC",
        "McLean, VA",
        "Tuscaloosa, AL",
        "Remote",
      ],
    },
    {
      type: "string",
      name: "department",
      label: "Department",
    },
    {
      type: "string",
      name: "type",
      label: "Employment Type",
      options: ["Full Time", "Part Time", "Contract"],
    },
    {
      type: "rich-text",
      name: "description",
      label: "Job Description",
    },
    {
      type: "string",
      name: "requirements",
      label: "Requirements",
      list: true,
    },
    {
      type: "string",
      name: "salary",
      label: "Salary Range",
    },
    {
      type: "boolean",
      name: "published",
      label: "Published",
    },
  ],
},
```

**Step 2: Commit jobs collection**

```bash
git add tina/config.ts
git commit -m "feat: add jobs collection to Tina schema

Configure Tina to manage job postings with rich text editing.

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

## Task 7: Add FWG Logo Component

**Files:**
- Create: `components/cms/FWGLogo.tsx`

**Step 1: Create components/cms directory**

```bash
mkdir -p components/cms
```

**Step 2: Create FWG logo component**

Create `components/cms/FWGLogo.tsx`:

```typescript
export const FWGLogo = () => {
  return (
    <div style={{ padding: '1rem' }}>
      <h2 style={{
        margin: 0,
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#1e293b',
        letterSpacing: '0.05em'
      }}>
        FWG CMS
      </h2>
      <p style={{
        margin: '0.25rem 0 0 0',
        fontSize: '0.75rem',
        color: '#64748b',
        fontWeight: 500
      }}>
        Federal Working Group
      </p>
    </div>
  );
};
```

**Step 3: Commit logo component**

```bash
git add components/cms/FWGLogo.tsx
git commit -m "feat: add FWG logo component for Tina CMS

Create custom logo component for CMS branding.

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

## Task 8: Customize Tina UI with FWG Branding

**Files:**
- Modify: `tina/config.ts`

**Step 1: Import logo component**

Add this import at the top of `tina/config.ts`:

```typescript
import { FWGLogo } from "../components/cms/FWGLogo";
```

**Step 2: Add logo to Tina config**

In the `defineConfig({...})` object in `tina/config.ts`, add this after the `media:` section:

```typescript
cmsCallback: (cms) => {
  import("tinacms").then(({ TinaAdmin }) => {
    cms.sidebar.hidden = false;
  });
  return cms;
},
```

And update the config to use the custom logo by modifying the config object:

Actually, Tina doesn't support custom logos in the same way. Instead, let's customize via the admin route. Let me revise:

**Step 2: Note for future customization**

For now, Tina will use default branding. Custom logo can be added later via:
- Custom admin component wrapping
- CSS overrides in public/admin/index.html

Skip this step for MVP.

**Step 3: Skip commit (no changes)**

---

## Task 9: Set Up Next.js API Routes for Tina

**Files:**
- Create: `app/api/tina/[...routes]/route.ts`

**Step 1: Create API routes directory**

```bash
mkdir -p app/api/tina/\[...routes\]
```

**Step 2: Create Tina API route handler**

Create `app/api/tina/[...routes]/route.ts`:

```typescript
import { TinaNodeBackend, LocalBackendAuthProvider } from "@tinacms/datalayer";
import { TinaAuthJSOptions, AuthJsBackendAuthProvider } from "tinacms-authjs";
import databaseClient from "../../../../tina/__generated__/databaseClient";

const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === "true";

const handler = TinaNodeBackend({
  authProvider: isLocal
    ? LocalBackendAuthProvider()
    : AuthJsBackendAuthProvider({
        authOptions: TinaAuthJSOptions({
          databaseClient: databaseClient,
          secret: process.env.NEXTAUTH_SECRET,
        }),
      }),
  databaseClient,
});

export const GET = handler;
export const POST = handler;
```

**Step 3: Commit API routes**

```bash
git add app/api/tina/
git commit -m "feat: add Tina API routes for Next.js

Set up backend routes for Tina CMS with local and cloud auth support.

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

## Task 10: Update Environment Variables

**Files:**
- Modify: `.env.local`

**Step 1: Add local development flag**

Add to `.env.local`:

```bash
# Local development mode (set to false for production)
TINA_PUBLIC_IS_LOCAL=true

# NextAuth secret (generate with: openssl rand -base64 32)
NEXTAUTH_SECRET=your-secret-here-replace-in-production
```

**Step 2: Generate NextAuth secret**

Run:
```bash
openssl rand -base64 32
```

Copy the output and replace `your-secret-here-replace-in-production` in `.env.local`.

**Step 3: Commit environment template (not .env.local itself)**

Note: `.env.local` is gitignored, so no commit needed. Document in README instead (next task).

---

## Task 11: Build Tina Schema

**Files:**
- Generate: `tina/__generated__/*`

**Step 1: Build Tina configuration**

```bash
npx tinacms build
```

Expected: Generates types and database client in `tina/__generated__/`

**Step 2: Verify generated files**

Run: `ls -la tina/__generated__/`
Expected: See `client.ts`, `types.ts`, `databaseClient.ts`, etc.

**Step 3: Commit generated files**

```bash
git add tina/__generated__
git commit -m "build: generate Tina schema types

Build Tina configuration and generate TypeScript types.

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

## Task 12: Test Tina Locally

**Files:**
- None (testing only)

**Step 1: Start development server**

```bash
npm run dev
```

Expected: Server starts on http://localhost:3000

**Step 2: Access Tina admin**

Open browser to: http://localhost:3000/admin

Expected: Tina CMS interface loads

**Step 3: Verify collections appear**

Check sidebar for:
- 📄 Website Pages
- 📞 Contact Information
- 💼 Job Postings

Expected: All three collections visible

**Step 4: Test editing homepage**

1. Click "📄 Website Pages"
2. Click "site-content"
3. Try editing the hero title
4. Click Save

Expected: Changes save without errors

**Step 5: Verify file changes**

```bash
git diff content/site-content.json
```

Expected: See the change you made reflected in the file

**Step 6: Revert test changes**

```bash
git checkout content/site-content.json
```

**Step 7: Stop development server**

Press Ctrl+C in terminal

---

## Task 13: Update Documentation

**Files:**
- Create: `docs/TINA_CMS.md`

**Step 1: Create Tina CMS documentation**

Create `docs/TINA_CMS.md`:

```markdown
# Tina CMS Documentation

## Overview

This project uses Tina CMS for content management. Tina provides:
- ✅ Visual editing interface
- ✅ Git-based content storage
- ✅ TypeScript type safety
- ✅ Local and production editing

## Local Development

### Starting the CMS

\`\`\`bash
npm run dev
\`\`\`

Access CMS at: http://localhost:3000/admin

### Environment Setup

Copy `.env.local` and configure:

\`\`\`bash
# Local development
TINA_PUBLIC_IS_LOCAL=true

# Generate secret
NEXTAUTH_SECRET=$(openssl rand -base64 32)
\`\`\`

## Content Collections

### 📄 Website Pages
- **File**: `content/site-content.json`
- **Contains**: Homepage content (hero, stats, services, values, testimonials, certifications)
- **Format**: JSON

### 📞 Contact Information
- **File**: `content/contact-info.json`
- **Contains**: Phone, email, address, hours
- **Format**: JSON

### 💼 Job Postings
- **Path**: `content/jobs/*.md`
- **Contains**: Individual job postings
- **Format**: Markdown with frontmatter

## Production Setup

### Tina Cloud Configuration

1. Go to https://app.tina.io
2. Create new project
3. Connect your GitHub repository
4. Authorize Tina Cloud for repo access
5. Get Client ID and Token from project settings

### Environment Variables (Netlify)

Add to Netlify environment variables:

\`\`\`
NEXT_PUBLIC_TINA_CLIENT_ID=<from-tina-cloud>
TINA_TOKEN=<from-tina-cloud>
NEXT_PUBLIC_TINA_BRANCH=main
TINA_PUBLIC_IS_LOCAL=false
NEXTAUTH_SECRET=<generate-new-secret>
\`\`\`

### Production Workflow

1. Editor visits https://yoursite.com/admin
2. Tina redirects to Tina Cloud for authentication
3. Editor logs in via GitHub OAuth
4. Editor makes content changes
5. Tina Cloud commits changes to GitHub
6. Netlify detects commit and rebuilds site
7. Changes go live

## Customization

### Modifying Schema

Edit `tina/config.ts` to:
- Add new collections
- Add new fields
- Change field types
- Update validation

After changes, rebuild:

\`\`\`bash
npx tinacms build
\`\`\`

### Adding Collections

Example:

\`\`\`typescript
{
  name: "blog",
  label: "Blog Posts",
  path: "content/blog",
  format: "md",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
      isTitle: true,
    },
    {
      type: "rich-text",
      name: "body",
      label: "Content",
      isBody: true,
    },
  ],
}
\`\`\`

## Troubleshooting

### "Failed to load collections"
- Run `npx tinacms build`
- Check `tina/__generated__/` exists
- Restart dev server

### "Unauthorized" in production
- Verify Tina Cloud env vars in Netlify
- Check Tina Cloud project connected to correct repo
- Verify GitHub permissions granted

### Changes not saving
- Check file permissions
- Verify content path exists
- Check browser console for errors

## Resources

- Tina Docs: https://tina.io/docs/
- Schema Reference: https://tina.io/docs/schema/
- Rich Text: https://tina.io/docs/editing/markdown/
- Tina Cloud: https://app.tina.io
\`\`\`

**Step 2: Commit documentation**

\`\`\`bash
git add docs/TINA_CMS.md
git commit -m "docs: add Tina CMS documentation

Document setup, usage, and troubleshooting for Tina CMS.

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"
\`\`\`

---

## Task 14: Update Main README

**Files:**
- Modify: `README.md` (if exists) or Create it

**Step 1: Add CMS section to README**

If `README.md` exists, add this section. If not, create it with this content:

\`\`\`markdown
## Content Management

This site uses Tina CMS for content editing.

### Quick Start

\`\`\`bash
npm run dev
\`\`\`

Access CMS: http://localhost:3000/admin

### Documentation

See [docs/TINA_CMS.md](docs/TINA_CMS.md) for complete setup and usage instructions.

### Production Editing

Visit https://yoursite.com/admin (requires Tina Cloud setup)
\`\`\`

**Step 2: Commit README update**

\`\`\`bash
git add README.md
git commit -m "docs: update README with Tina CMS information

Add CMS quick start and documentation link.

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"
\`\`\`

---

## Task 15: Final Testing Checklist

**Files:**
- None (verification only)

**Step 1: Verify all content loads**

\`\`\`bash
npm run dev
\`\`\`

Open http://localhost:3000/admin

Test each collection:
- [ ] Homepage content visible and editable
- [ ] Contact info visible and editable
- [ ] Job postings list visible
- [ ] Can create new job posting
- [ ] Can edit existing job posting
- [ ] Can delete job posting (if any test ones)

**Step 2: Verify builds successfully**

\`\`\`bash
npm run build
\`\`\`

Expected: Build completes without errors

**Step 3: Verify all commits made**

\`\`\`bash
git log --oneline
\`\`\`

Expected: See all commits from this plan

**Step 4: Create summary**

Document any issues found or additional work needed.

---

## Next Steps (After Plan Complete)

1. **Tina Cloud Setup**:
   - Create project at app.tina.io
   - Connect GitHub repository
   - Get Client ID and Token
   - Add to Netlify environment variables

2. **Production Deployment**:
   - Push feature branch to GitHub
   - Create pull request
   - Merge to main
   - Netlify auto-deploys

3. **Test Production CMS**:
   - Visit https://yoursite.com/admin
   - Authenticate via Tina Cloud
   - Make test edit
   - Verify commit appears in GitHub
   - Verify Netlify rebuilds automatically

4. **Optional Enhancements**:
   - Add blog collection
   - Add team members collection
   - Add case studies collection
   - Customize logo further
   - Add custom CSS for CMS UI

---

## Verification Commands

### Check Tina is installed
\`\`\`bash
npm list tinacms @tinacms/cli
\`\`\`

### Rebuild schema
\`\`\`bash
npx tinacms build
\`\`\`

### Start dev server
\`\`\`bash
npm run dev
\`\`\`

### Build production
\`\`\`bash
npm run build
\`\`\`

### Check git status
\`\`\`bash
git status
git log --oneline -10
\`\`\`
