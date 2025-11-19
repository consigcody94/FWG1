# Sveltia CMS Setup Guide

This guide will help you set up and use Sveltia CMS to manage content on your Federal Working Group website.

## 🎯 What is Sveltia CMS?

Sveltia CMS is a modern, Git-based content management system that's:
- **User-friendly**: Beautiful, intuitive interface perfect for non-technical users
- **Git-based**: All content is stored in your GitHub/GitLab repository
- **Powerful**: Supports complex content structures, media management, and editorial workflows
- **Modern**: Active development with regular updates and improvements
- **Drop-in replacement**: Compatible with Decap/Netlify CMS configuration

## 📁 Project Structure

```
your-project/
├── content/              # All your content (managed by CMS)
│   ├── careers/         # Career postings (.md files)
│   ├── services/        # Service pages (.md files)
│   ├── pages/           # General pages (.md files)
│   └── settings/        # Site settings (.json files)
├── public/
│   ├── admin/          # CMS admin interface
│   │   ├── index.html  # CMS entry point
│   │   └── config.yml  # CMS configuration
│   └── assets/         # Media files (images, videos, PDFs)
└── app/
    └── lib/
        └── content.ts   # Functions to load content in your pages
```

## 🚀 Quick Start

### Step 1: Enable Netlify Identity

1. **Log into Netlify Dashboard**: Go to https://app.netlify.com
2. **Select Your Site**: Click on your Federal Working Group site
3. **Enable Identity**:
   - Go to "Identity" tab
   - Click "Enable Identity"
4. **Configure Git Gateway**:
   - Scroll down to "Services" > "Git Gateway"
   - Click "Enable Git Gateway"
5. **Invite Users**:
   - Go to "Identity" tab
   - Click "Invite users"
   - Enter email addresses of people who should manage content
   - They'll receive an email invitation

### Step 2: Accept Your Invitation

1. Check your email for the Netlify Identity invitation
2. Click the link to accept
3. Set your password
4. You'll be redirected to `/admin` automatically

### Step 3: Access the CMS

1. **Go to**: `https://your-domain.com/admin` (or `http://localhost:3000/admin` for local development)
2. **Login**: Use your Netlify Identity credentials
3. **Start Creating**: You'll see the Sveltia CMS dashboard!

## 📝 Using the CMS

### Creating a Career Posting

1. Go to `/admin`
2. Click **"Career Postings"** in the sidebar
3. Click **"New Career Posting"**
4. Fill in the fields:
   - **Title**: e.g., "Senior Network Engineer"
   - **Job Type**: Select from dropdown
   - **Security Clearance Required**: e.g., "Security+"
   - **Description**: Short summary (shown in listings)
   - **Position Overview**: Full job description (supports Markdown)
   - **Responsibilities**: Click "Add" to add each responsibility
   - **Required Qualifications**: List required skills/experience
   - **Preferred Qualifications**: List nice-to-have skills
   - **Benefits**: List job benefits
   - **Featured**: Toggle to show as featured
   - **Publish Date**: Select date
5. Click **"Save"** (saves as draft)
6. When ready, change status to **"Ready"** and click **"Publish"**

### Creating a Service Page

1. Go to `/admin`
2. Click **"Services"** in the sidebar
3. Click **"New Service"**
4. Fill in the fields:
   - **Title**: e.g., "IT Security"
   - **Description**: Short summary
   - **Hero Image**: Upload an image (optional)
   - **Icon**: Select an icon name
   - **Body**: Full service description (Markdown)
   - **Key Features**: Add multiple features with title, description, icon
   - **Featured**: Toggle for homepage
   - **Order**: Number for sort order (lower = first)
5. Click **"Save"** and **"Publish"**

### Creating a General Page

1. Go to `/admin`
2. Click **"Pages"** in the sidebar
3. Click **"New Page"**
4. Fill in the fields:
   - **Title**: Page title
   - **Page Type**: Select type (about, general, legal)
   - **Description**: Meta description
   - **Body**: Main content (Markdown)
   - **Hero Video**: Video path (optional)
   - **Sections**: Add multiple sections with title, content, icon
5. Click **"Save"** and **"Publish"**

### Editing Home Page Settings

1. Go to `/admin`
2. Click **"Site Settings"** → **"Home Page"**
3. Edit any fields:
   - Hero title, subtitle, badge
   - Video path
   - CTA button text and links
   - Stats (value and label pairs)
4. Click **"Save"** and **"Publish"**

### Managing Media

1. Click the **"Media"** tab in the sidebar
2. **Upload files**: Drag and drop or click to upload
3. **Organize**: Files are stored in `/public/assets`
4. **Insert in content**: Click on an image while editing to insert it

## 🎨 Content Writing Tips

### Markdown Basics

The CMS supports Markdown formatting:

```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold text**
*Italic text*

- Bullet list item
- Another item

1. Numbered list
2. Another item

[Link text](https://example.com)

![Image alt text](/assets/image.jpg)
```

### Best Practices

1. **Be Descriptive**: Write clear titles and descriptions
2. **Use Featured Wisely**: Only feature 3-4 items for homepage
3. **Optimize Images**: Compress images before uploading
4. **Preview Before Publishing**: Use the preview panel to check formatting
5. **Use Editorial Workflow**: Save as draft, review, then publish

## 🔧 Integration with Your Website

### Example: Display Careers on a Page

The example page at `/careers-cms` shows how to use CMS content:

```typescript
import { getAllCareers } from '../lib/content';

export default function CareersPage() {
  const careers = getAllCareers();

  return (
    <div>
      {careers.map(career => (
        <div key={career.slug}>
          <h2>{career.title}</h2>
          <p>{career.description}</p>
          {/* ... more fields ... */}
        </div>
      ))}
    </div>
  );
}
```

### Available Functions (in `app/lib/content.ts`)

```typescript
// Careers
getAllCareers()              // Get all career postings
getCareerBySlug('slug')      // Get one career by slug

// Services
getAllServices()             // Get all services
getServiceBySlug('slug')     // Get one service

// Pages
getAllPages()                // Get all pages
getPageBySlug('slug')        // Get one page

// Settings
getHomeSettings()            // Get home page settings
```

## 🔒 Security & Permissions

### User Roles

Netlify Identity supports role-based access:
- **Admin**: Full access to all content
- **Editor**: Can create and edit, but not publish
- **Viewer**: Read-only access

To set roles:
1. Go to Netlify Dashboard → Identity
2. Click on a user
3. Edit their role

### Content Approval Workflow

The CMS has an editorial workflow enabled:
1. **Drafts**: Work in progress, not published
2. **In Review**: Ready for review by another team member
3. **Ready**: Approved and ready to publish

To use workflow:
1. Create/edit content and save as draft
2. Change status to "In Review"
3. Reviewer approves and changes to "Ready"
4. Author publishes to live site

## 🐛 Troubleshooting

### Can't Access /admin

**Solution**:
- Make sure you're logged into Netlify Identity
- Clear browser cache and cookies
- Try incognito/private browsing

### Changes Not Appearing on Live Site

**Solution**:
- Check that you clicked "Publish" (not just "Save")
- Wait 1-2 minutes for Netlify to rebuild
- Check Netlify deploy logs for errors

### "Error: Failed to persist entry"

**Solution**:
- Check your internet connection
- Verify Git Gateway is enabled in Netlify
- Make sure you have write permissions to the repo

### Images Not Loading

**Solution**:
- Check that images are in `/public/assets/`
- Use `/assets/image.jpg` format (not `public/assets/`)
- Verify file extensions are lowercase (.jpg, not .JPG)

## 📚 Additional Resources

- **Sveltia CMS Documentation**: https://github.com/sveltia/sveltia-cms
- **Netlify Identity Docs**: https://docs.netlify.com/visitor-access/identity/
- **Markdown Guide**: https://www.markdownguide.org/basic-syntax/

## 🎯 Next Steps

1. ✅ **Enable Netlify Identity** (follow Step 1 above)
2. ✅ **Invite team members** to manage content
3. ✅ **Create your first career posting** in the CMS
4. ✅ **Update home page settings** with your content
5. ✅ **Add service pages** for each of your offerings
6. 🚀 **Integrate CMS content** into your existing pages (replace hardcoded content with functions from `app/lib/content.ts`)

## 💡 Pro Tips

1. **Test Locally First**: You can use the test backend by uncommenting the test-repo backend in `public/admin/config.yml`
2. **Backup Your Content**: Content is in Git, so it's automatically backed up!
3. **Use Collections**: Organize related content into collections
4. **Rich Text Editor**: Sveltia CMS has a beautiful WYSIWYG editor - use it!
5. **Keyboard Shortcuts**: Press `?` in the CMS to see keyboard shortcuts

---

**Need Help?** Contact your development team or refer to the documentation links above.

Happy content managing! 🎉
