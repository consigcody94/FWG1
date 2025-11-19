# Federal Working Group CMS - Complete User Guide

## Table of Contents
1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
3. [Understanding the Interface](#understanding-the-interface)
4. [Managing Content](#managing-content)
5. [Content Types Guide](#content-types-guide)
6. [Publishing Workflow](#publishing-workflow)
7. [Best Practices](#best-practices)
8. [Troubleshooting](#troubleshooting)
9. [FAQ](#faq)

---

## Introduction

### What is the FWG CMS?

The Federal Working Group Content Management System (CMS) is a modern, user-friendly platform that allows you to manage all website content without any technical knowledge. Think of it as a "Word document editor" for your website.

### Key Features

✅ **Easy to Use** - No coding or technical skills required
✅ **Instant Publishing** - Changes go live automatically
✅ **Rich Text Editing** - Format content like in Microsoft Word
✅ **Organized Collections** - Content grouped by type
✅ **Visual Preview** - See what you're creating
✅ **Secure** - GitHub-based authentication
✅ **Version Control** - All changes tracked and reversible

### What Can You Edit?

- Career job postings
- Service descriptions
- Success stories and case studies
- Team member profiles
- Client testimonials
- Homepage content
- Navigation menus
- Footer information
- General website pages

---

## Getting Started

### Step 1: Access the CMS

1. Open your web browser
2. Navigate to: **https://gentle-biscochitos-7940a8.netlify.app/admin**
3. You'll see the Sveltia CMS login screen

### Step 2: Sign In with GitHub

1. Click **"Login with GitHub"**
2. You'll be redirected to GitHub
3. If not already logged in, enter your GitHub credentials
4. Authorize the application (first time only)
5. You'll be redirected back to the CMS

**Note:** You must have access to the `consigcody94/FWG1` repository. If you get an "access denied" error, ask the repository owner to add you as a collaborator.

### Step 3: Explore the Dashboard

Once logged in, you'll see:
- **Left sidebar** - Content collections (Career Postings, Services, etc.)
- **Main area** - List of content items
- **Top bar** - Search, filters, and user menu

---

## Understanding the Interface

### The Sidebar (Content Collections)

The sidebar shows all content types organized with emoji icons:

- **🎯 Career Postings** - Job listings
- **🛠️ Services** - Service offerings
- **📄 Pages** - General website pages
- **⚙️ Site Settings** - Homepage, navigation, footer
- **💬 Testimonials** - Client feedback
- **🎯 Success Stories** - Case studies
- **👥 Team Members** - Staff profiles

### The Content List

When you click a collection, you'll see:
- **List of all items** in that collection
- **Search bar** to find specific content
- **Filters** to narrow down items
- **New [Item]** button to create new content

### The Editor

When editing content, you'll see:
- **Left side** - Form fields for content
- **Right side** - Preview (if available)
- **Top bar** - Save, publish, and status controls

---

## Managing Content

### Creating New Content

1. Click on the collection in the sidebar (e.g., "Career Postings")
2. Click the **"New Career Posting"** button (top right)
3. Fill in all required fields (marked with *)
4. Add optional fields as needed
5. Click **"Save"** when done
6. Your content will be published automatically

### Editing Existing Content

1. Click on the collection in the sidebar
2. Click on the item you want to edit
3. Make your changes in the editor
4. Click **"Save"** to publish changes
5. Changes go live in 2-3 minutes

### Deleting Content

1. Open the item you want to delete
2. Click the **three-dot menu** (⋯) in the top right
3. Select **"Delete"**
4. Confirm the deletion
5. The item will be removed from the website

### Duplicating Content

1. Open the item you want to duplicate
2. Click the **three-dot menu** (⋯)
3. Select **"Duplicate"**
4. Edit the duplicated content
5. Save to create a new item

---

## Content Types Guide

### 🎯 Career Postings

Create and manage job listings.

**Required Fields:**
- **Title** - Job title (e.g., "Senior Network Engineer")
- **Job Type** - Full-Time, Part-Time, or Contract
- **Description** - Brief summary for listings
- **Responsibilities** - List of job duties
- **Required Qualifications** - Must-have skills/experience

**Optional Fields:**
- **Security Clearance** - Required clearance level
- **Overview** - Detailed job description (supports formatting)
- **Preferred Qualifications** - Nice-to-have skills
- **Benefits** - Compensation and perks
- **Featured** - Show on homepage (toggle on/off)
- **Publish Date** - When the posting should appear

**Tips:**
- Use clear, concise bullet points
- Include specific skills and certifications
- Highlight what makes FWG a great place to work
- Set "Featured" to true for priority positions

### 🛠️ Services

Describe your service offerings.

**Required Fields:**
- **Service Title** - Name of the service
- **Description** - Brief overview
- **Content** - Full service description

**Optional Fields:**
- **Hero Image** - Banner image for the service page
- **Icon** - Visual icon (Shield, Cloud, Network, etc.)
- **Features** - List of key features with descriptions
- **Featured** - Show on homepage
- **Display Order** - Control where it appears (0 = first)

**Tips:**
- Focus on benefits, not just features
- Use clear headings in the Content field
- Add 3-5 key features
- Include specific outcomes/results

### 📄 Pages

Create general website pages.

**Required Fields:**
- **Page Title** - Name of the page
- **Page Type** - About, General, or Legal
- **Description** - SEO description
- **Content** - Main page content (supports Markdown)

**Optional Fields:**
- **Hero Video** - Path to header video
- **Sections** - Organized content blocks with icons

**Tips:**
- Keep SEO descriptions under 160 characters
- Use headings to organize content
- Break long pages into sections
- Add relevant links and calls-to-action

### ⚙️ Site Settings

#### 🏠 Home Page Settings

Control your homepage content:
- **Hero Title** - Main headline
- **Hero Subtitle** - Supporting text
- **Hero Badge** - Small badge text (e.g., "Since 2004")
- **Hero Video Path** - Background video
- **Primary/Secondary CTAs** - Button text and links
- **Statistics** - Showcase key metrics

#### 🧭 Navigation Settings

Manage your site menu:
- **Main Menu Items** - Top-level navigation
- **Submenu** - Dropdown menus (optional)

**Example:**
```
Services
  ├── IT Security
  ├── Cloud Solutions
  └── Network Engineering
```

#### 👣 Footer Settings

Configure footer content:
- **Company Tagline**
- **Address** (multiple lines)
- **Contact Information**
- **Social Media Links**
- **Copyright Text**

### 💬 Testimonials

Add client feedback.

**Required Fields:**
- **Client Name** - Full name
- **Job Title** - Their position
- **Company/Agency** - Where they work
- **Testimonial** - Their quote
- **Date** - When received

**Optional Fields:**
- **Photo** - Headshot image
- **Featured** - Show on homepage

**Tips:**
- Use real quotes (get permission first)
- Keep testimonials concise (2-4 sentences)
- Include specific results or outcomes
- Add photos when possible for credibility

### 🎯 Success Stories

Showcase your wins with case studies.

**Required Fields:**
- **Title** - Story headline
- **Client** - Client name (can anonymize)
- **Industry** - Sector (Healthcare, Defense, Finance)
- **Summary** - 1-2 sentence overview
- **Challenge** - What problem existed
- **Solution** - How FWG solved it
- **Results** - Outcomes achieved

**Optional Fields:**
- **Featured Image** - Header image
- **Key Metrics** - Quantifiable results
- **Featured** - Show on homepage
- **Date** - Completion date

**Tips:**
- Use specific numbers and percentages
- Follow Challenge → Solution → Results format
- Include 3-4 key metrics
- Tell a compelling story

**Example Metrics:**
- "Time Saved: 40%"
- "Cost Reduction: $2M annually"
- "Security Incidents: Reduced 75%"

### 👥 Team Members

Create staff profiles.

**Required Fields:**
- **Name** - Full name
- **Title** - Job title
- **Bio** - Professional biography

**Optional Fields:**
- **Photo** - Professional headshot
- **Email** - Contact email
- **LinkedIn URL** - Profile link
- **Display Order** - Where they appear (0 = first)
- **Featured** - Show on leadership page

**Tips:**
- Write bios in third person
- Focus on expertise and accomplishments
- Include certifications and education
- Keep bio to 2-3 paragraphs
- Use professional, high-quality photos

---

## Publishing Workflow

### How Publishing Works

The FWG CMS uses a **Git-based workflow**:

1. **You make changes** in the CMS editor
2. **Click "Save"** to commit changes
3. **Changes are pushed** to GitHub automatically
4. **Netlify detects** the change
5. **Site rebuilds** automatically (takes 2-3 minutes)
6. **Changes go live** on your website

### Instant Publishing

There's **no approval workflow** - when you save, changes go live. This means:

✅ **Fast** - Updates appear in minutes
✅ **Simple** - No complex approval process
⚠️ **Careful** - Double-check before saving

### Checking Your Changes

After saving:

1. Wait 2-3 minutes for deployment
2. Visit your live website
3. Navigate to the changed page
4. Verify changes appear correctly

**Tip:** Use a private/incognito browser window to avoid cached versions.

---

## Best Practices

### Writing Content

✅ **Do:**
- Write clear, concise copy
- Use bullet points for readability
- Include specific numbers and metrics
- Proofread before publishing
- Use active voice
- Focus on benefits, not features

❌ **Don't:**
- Use jargon without explanation
- Write overly long paragraphs
- Forget to add images
- Copy content from competitors
- Use all caps (except acronyms)

### Formatting Tips

**Headings:**
```
# Main Heading (use once per page)
## Section Heading
### Subsection Heading
```

**Emphasis:**
```
**Bold text** for important points
*Italic text* for emphasis
```

**Lists:**
```
- Bullet point 1
- Bullet point 2
- Bullet point 3

1. Numbered item 1
2. Numbered item 2
3. Numbered item 3
```

**Links:**
```
[Link text](https://example.com)
```

### Images

✅ **Image Best Practices:**
- Use high-quality images (at least 1200px wide)
- Compress images before uploading (use TinyPNG.com)
- Use descriptive file names (e.g., `team-photo-2025.jpg`)
- Optimize file size (keep under 500KB when possible)
- Use JPG for photos, PNG for graphics/logos

### SEO Considerations

- **Page Titles:** Keep under 60 characters
- **Descriptions:** Keep under 160 characters
- **Headings:** Use hierarchical structure (H1 → H2 → H3)
- **Links:** Use descriptive anchor text
- **Images:** Add alt text (coming soon)

### Content Organization

1. **Plan before creating** - Outline your content first
2. **Use templates** - Duplicate similar content and modify
3. **Stay consistent** - Follow the same style and tone
4. **Regular updates** - Keep content fresh and accurate
5. **Archive old content** - Remove outdated information

---

## Troubleshooting

### "I can't log in"

**Issue:** Login with GitHub fails

**Solutions:**
1. Verify you have access to the GitHub repository
2. Check if your GitHub account is a repository collaborator
3. Clear browser cache and try again
4. Try a different browser
5. Contact the repository owner to add you

### "My changes didn't appear"

**Issue:** Saved content not showing on website

**Solutions:**
1. Wait 3-5 minutes for deployment to complete
2. Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
3. Check browser console for errors
4. Visit https://app.netlify.com to check deployment status
5. Try viewing in incognito/private browser window

### "I made a mistake and want to undo"

**Issue:** Published incorrect content

**Solutions:**
1. Simply edit the content again and save
2. For deleted content, contact your developer (can be recovered from Git)
3. Use the duplicate feature to keep backups of important content

### "Images won't upload"

**Issue:** Image upload fails

**Solutions:**
1. Check file size (should be under 5MB)
2. Use supported formats (JPG, PNG, GIF, WebP)
3. Try compressing the image first
4. Check your internet connection
5. Try a different browser

### "CMS is slow or unresponsive"

**Solutions:**
1. Check your internet connection
2. Close unnecessary browser tabs
3. Clear browser cache
4. Try a different browser
5. Contact support if issue persists

---

## FAQ

### General Questions

**Q: Do I need technical skills to use the CMS?**
A: No! The CMS is designed for non-technical users. If you can use Microsoft Word, you can use this CMS.

**Q: How long does it take for changes to go live?**
A: Typically 2-3 minutes after saving.

**Q: Can multiple people edit at the same time?**
A: Yes, but avoid editing the same item simultaneously to prevent conflicts.

**Q: Is there a way to preview changes before publishing?**
A: The CMS shows a preview pane. For full site preview, changes must be published (you can immediately edit again if needed).

**Q: Can I schedule content to publish later?**
A: Not currently. All saved changes publish immediately.

**Q: What happens if I delete something by mistake?**
A: Content can be recovered from Git history. Contact your developer for assistance.

### Technical Questions

**Q: Where is my content stored?**
A: Content is stored as Markdown files in your GitHub repository (consigcody94/FWG1).

**Q: Can I edit content directly in GitHub?**
A: Yes, but we recommend using the CMS for better user experience.

**Q: How do I add new team members to the CMS?**
A: Have the repository owner add them as GitHub collaborators.

**Q: Can I export my content?**
A: Yes, all content is in your GitHub repository as Markdown files.

**Q: Is my content backed up?**
A: Yes, Git provides full version history and backup.

### Content Questions

**Q: How many career postings can I create?**
A: Unlimited.

**Q: Can I reorder items in navigation?**
A: Yes, edit the Navigation settings and rearrange items.

**Q: Can I add new content types?**
A: Yes, but this requires developer assistance to configure.

**Q: What Markdown features are supported?**
A: Headings, bold, italic, lists, links, images, and blockquotes.

**Q: Can I embed videos?**
A: Currently only video file paths are supported (not embeds like YouTube).

---

## Getting Help

### Documentation Resources

- **This Guide** - Comprehensive usage instructions
- **Quick Reference** - Cheat sheet for common tasks (docs/CMS-QUICK-REFERENCE.md)
- **Announcement** - Overview and technical setup (docs/CMS-ANNOUNCEMENT.md)

### Contact Support

For technical issues or questions:
1. Check this guide first
2. Review the troubleshooting section
3. Contact your development team
4. Check Netlify deployment logs

### Training

If you'd like hands-on training:
- Request a live training session
- Schedule one-on-one guidance
- Set up a team workshop

---

## Quick Start Checklist

Use this checklist for your first time using the CMS:

- [ ] Access the CMS at /admin
- [ ] Log in with GitHub
- [ ] Explore the different collections
- [ ] View existing sample content
- [ ] Edit a sample career posting
- [ ] Save and wait for deployment
- [ ] Check the live site to see your changes
- [ ] Create a new testimonial
- [ ] Edit homepage settings
- [ ] Add a team member profile
- [ ] Update navigation menu
- [ ] Edit footer information

---

## Conclusion

The Federal Working Group CMS puts you in complete control of your website content. With its intuitive interface and instant publishing, you can keep your site up-to-date without any technical assistance.

**Remember:**
- Changes go live immediately when you save
- All content is tracked and recoverable
- When in doubt, check this guide
- Don't hesitate to experiment

**Happy editing! 🎉**
