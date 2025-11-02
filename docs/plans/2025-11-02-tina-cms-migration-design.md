# Tina CMS Migration Design

**Date:** 2025-11-02
**Status:** Approved
**Author:** Claude Code

## Executive Summary

Migrate from deprecated Netlify CMS (Decap CMS) to Tina CMS with Tina Cloud for production content editing. The migration preserves all existing content structure while providing a modern, maintained CMS solution with FWG branding.

## Problem Statement

Current setup uses Netlify CMS with Git Gateway authentication, which relies on Netlify Identity. Netlify Identity is now deprecated with no future support, causing authentication failures. The existing CMS cannot be reliably used in production.

## Requirements

### Functional Requirements
- Production content editing capability (edit on live site)
- Self-hosted site on Netlify/GitHub
- Preserve existing content structure (JSON/Markdown files)
- Custom UI branding with FWG logo and colors
- Support for all existing content types:
  - Homepage content (hero, stats, services, testimonials, etc.)
  - Contact information
  - Job postings
  - Future: Blog posts, team members, case studies

### Non-Functional Requirements
- Minimal maintenance overhead
- Reliable authentication system
- Automatic deployment on content changes
- Type-safe configuration
- Modern developer experience

### Constraints
- Must work with Netlify hosting
- Must work with existing GitHub repository
- Cannot use deprecated Netlify Identity
- Preference for minimal custom backend code

## Solution: Tina CMS with Tina Cloud

### Architecture

**Components:**
1. **Tina CMS** (open-source): Frontend editing interface and schema definition
2. **Tina Cloud** (free tier): Authentication and Git operations backend
3. **GitHub**: Content storage (existing repo)
4. **Netlify**: Site hosting and automatic deployments (existing)

**Data Flow:**
```
User → Tina CMS UI → Tina Cloud → GitHub Repo → Netlify Deploy → Live Site
```

**Local Development:**
```
Developer → Tina Local Mode → Filesystem → Git Commit → GitHub → Netlify
```

### Why Tina Cloud?

**Evaluated Alternatives:**
1. **Custom Netlify Functions Backend**: Full control but high complexity, significant development time, ongoing maintenance
2. **Tina Cloud**: Managed service, free for 2 users, handles auth and Git operations, minimal maintenance
3. **Local-only editing**: No production CMS, manual Git workflow, loses business requirement

**Decision:** Tina Cloud provides the best balance of control (UI customization, content ownership) and simplicity (no backend to maintain).

## Implementation Design

### Phase 1: Cleanup (Remove Netlify CMS)

**Files to Delete:**
- `public/admin/` - Netlify CMS admin interface
- `out/admin/` - Built admin files
- `NETLIFY_CMS_SETUP.md` - Old documentation
- `CMS_DOCUMENTATION.md` - Old documentation
- `lib/cms-connector.ts` - Old CMS integration
- `netlify.toml` - Only used for Netlify CMS build config

**package.json Updates:**
- Remove `decap-server` from devDependencies
- Remove `cms-proxy` and `dev:cms` scripts

### Phase 2: Install Tina CMS

**Dependencies to Add:**
```json
{
  "dependencies": {
    "tinacms": "^latest"
  },
  "devDependencies": {
    "@tinacms/cli": "^latest",
    "tinacms-authjs": "^latest"
  }
}
```

**Initialization:**
```bash
npx @tinacms/cli@latest init
```

This creates:
- `tina/config.ts` - Main configuration file
- `tina/__generated__/` - Auto-generated types
- Updates to package.json scripts

### Phase 3: Content Schema Migration

**Existing Netlify CMS Collections:**
1. Pages (homepage, contact)
2. Job Postings

**Tina Schema Structure:**
```typescript
// tina/config.ts
export default defineConfig({
  branch: "main",
  clientId: "process.env.NEXT_PUBLIC_TINA_CLIENT_ID",
  token: "process.env.TINA_TOKEN",

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

  schema: {
    collections: [
      // Homepage collection
      // Contact collection
      // Jobs collection
    ],
  },
})
```

**Field Type Mappings:**
| Netlify CMS | Tina CMS |
|-------------|----------|
| `widget: "string"` | `type: "string"` |
| `widget: "text"` | `type: "string"` with `ui.component: "textarea"` |
| `widget: "markdown"` | `type: "rich-text"` |
| `widget: "image"` | `type: "image"` |
| `widget: "list"` | `type: "object"` with `list: true` |
| `widget: "boolean"` | `type: "boolean"` |
| `widget: "select"` | `type: "string"` with `options: []` |

### Phase 4: UI Customization

**FWG Branding:**
```typescript
// In tina/config.ts
export default defineConfig({
  // ... other config

  // Custom branding
  admin: {
    auth: {
      // Tina Cloud auth
    },
  },

  // Custom logo component
  sidebar: {
    logo: () => (
      <img
        src="/assets/fwg-logo.svg"
        alt="FWG CMS"
        style={{ maxWidth: '150px' }}
      />
    ),
  },
})
```

**Customization Points:**
- Logo replacement in sidebar
- Brand colors (via Tina's theme config)
- Custom field components if needed
- Custom CSS for deeper styling

### Phase 5: Tina Cloud Integration

**Setup Steps:**
1. Create project at app.tina.io
2. Connect GitHub repository
3. Authorize Tina Cloud for repo access
4. Obtain Client ID and Token
5. Add to environment variables:
   ```
   NEXT_PUBLIC_TINA_CLIENT_ID=<client-id>
   TINA_TOKEN=<token>
   ```
6. Deploy to Netlify with environment variables configured

**Authentication Flow:**
- User visits `/admin`
- Tina redirects to Tina Cloud for auth
- User logs in (GitHub OAuth via Tina)
- Tina Cloud returns auth token
- CMS loads with user's permissions

### Phase 6: Local Development Workflow

**Developer Experience:**
```bash
npm run dev
# Opens localhost:3000
# CMS accessible at localhost:3000/admin
```

**Local Mode:**
- Tina runs in filesystem mode
- Changes write directly to local files
- Developer commits/pushes manually
- No Tina Cloud needed for local dev

**Benefits:**
- Work offline
- Fast iteration
- Full Git control
- Type-safe editing

## Content Migration Strategy

**No Data Migration Needed:**
- Existing content files stay in place
- Tina reads/writes same JSON/Markdown format
- File paths remain identical
- Only schema definition changes

**Validation Steps:**
1. Configure Tina schema to match existing structure
2. Start Tina locally
3. Verify all content appears in CMS
4. Test editing each content type
5. Confirm file changes are clean (no extra fields)

## Deployment Strategy

**Netlify Configuration:**
- Build command: `npm run build` (unchanged)
- Publish directory: `out` (unchanged)
- Environment variables: Add Tina Cloud credentials
- Build hooks: Triggered by GitHub commits (unchanged)

**Git Workflow:**
1. Content editor logs into production CMS
2. Makes changes via Tina UI
3. Tina Cloud commits to GitHub (automated)
4. Netlify detects commit and rebuilds (automated)
5. Changes go live

## Testing Plan

**Local Testing:**
- [ ] All collections visible in CMS
- [ ] Can edit homepage content
- [ ] Can edit contact info
- [ ] Can create/edit/delete job postings
- [ ] Media uploads work
- [ ] Changes write to correct files
- [ ] No extra fields or corruption

**Production Testing:**
- [ ] Can access /admin on production
- [ ] Authentication works
- [ ] Can edit content
- [ ] Changes trigger Netlify rebuild
- [ ] Changes appear on live site

## Rollback Plan

If issues occur:
1. Git history preserved - can revert commits
2. Old Netlify CMS config backed up (in git history)
3. Can restore from any commit point
4. No data loss risk (all in Git)

## Success Criteria

- [ ] Netlify CMS completely removed
- [ ] Tina CMS installed and configured
- [ ] All existing content accessible in new CMS
- [ ] FWG branding applied to CMS UI
- [ ] Local editing works (`npm run dev`)
- [ ] Production editing works (via Tina Cloud)
- [ ] Content changes deploy automatically
- [ ] No authentication errors
- [ ] Documentation updated

## Future Enhancements

After successful migration:
- Add blog post collection
- Add team members collection
- Add case studies collection
- Advanced media management
- Preview deployments for draft content
- Multi-environment support (staging/production)

## References

- Tina CMS Documentation: https://tina.io/docs/
- Tina Cloud: https://app.tina.io
- Migration Guide: https://tina.io/docs/setup-overview/
- Content Modeling: https://tina.io/docs/schema/
