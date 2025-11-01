# Federal Working Group - Advanced CMS Documentation

## 🚀 Overview

Your CMS has been upgraded to an enterprise-grade content management system with advanced features for managing your entire website.

## 🎯 Key Features

### 1. **Comprehensive Content Management**
- ✅ Full page editing (Homepage, About, Services, Careers, Contact)
- ✅ Global site settings and SEO
- ✅ Navigation management (Header & Footer)
- ✅ Blog post creation and management
- ✅ Team member profiles
- ✅ Case studies portfolio

### 2. **Advanced Field Types**
- 📝 **Markdown Editor**: Rich text editing with formatting
- 🖼️ **Media Library**: Image uploads with hints for optimal sizes
- 📅 **Date/Time Picker**: For blog posts and job postings
- ✅ **Boolean Toggles**: Published/unpublished states
- 🔢 **Number Fields**: Ratings, display order, etc.
- 📋 **Select Dropdowns**: Predefined options for consistency
- 🔗 **List Fields**: Repeatable content blocks

### 3. **SEO Optimization**
Every page includes:
- Meta title customization
- Meta description (with 155 character limit)
- Keywords management
- Social media preview images
- Validation for optimal SEO

### 4. **Validation & Hints**
- Email format validation
- Year format validation (4 digits)
- Character limits on descriptions
- Helpful hints for every field
- Required/optional field indicators

### 5. **Better UX**
- 🎨 Custom styling (dark header, clean sidebar)
- 📊 Collapsible sections for better organization
- 📋 Summary templates for list items
- 🏷️ Emojis in navigation for visual clarity
- 📝 Field hints and descriptions

## 📚 Content Collections

### ⚙️ Site Settings
**Purpose**: Global configuration and branding

**Includes**:
- Site title, tagline, and logos
- Company information (DUNS, CAGE, UEI)
- Default SEO settings
- Footer configuration

### 🧭 Navigation
**Purpose**: Manage site menus

**Includes**:
- **Header Menu**: Logo, menu items, submenus, CTA button
- **Footer Menu**: Column-based navigation, certifications

**Features**:
- External link support
- Mega menu descriptions
- Button style options (primary, secondary, outline)

### 📄 Pages
**Purpose**: Main website content

**Pages Available**:
1. **Homepage**
   - Hero section with background image
   - Company statistics (up to 6)
   - About section with markdown
   - Services showcase
   - Core values (up to 5)
   - Client testimonials with ratings
   - Certifications with badges

2. **About Page**
   - Hero section
   - Multiple content sections with images
   - Image positioning options

3. **Services Page**
   - Service listings
   - Featured services toggle
   - Full markdown details

4. **Careers Page**
   - Employee benefits
   - Job openings with applications
   - Job type selection

5. **Contact Page**
   - Contact information
   - Google Maps integration
   - Social media links

### 📝 Blog Posts
**Purpose**: Content marketing and news

**Features**:
- Create unlimited blog posts
- Categories and tags
- Featured images
- Author attribution
- Publish/draft toggle
- SEO fields per post
- Date-based slug generation

**Slug Format**: `YYYY-MM-DD-post-title`

### 👥 Team Members
**Purpose**: Showcase your team

**Features**:
- Employee profiles with photos
- Department categorization
- Display order control
- Markdown bios
- Social links
- Show/hide toggle

### 💼 Case Studies
**Purpose**: Portfolio and success stories

**Features**:
- Challenge-Solution-Results structure
- Client information with logos
- Technology tags
- Key metrics tracking
- Publish/draft control

## 🎨 Custom Styling

The CMS interface includes:
- Dark professional header (#0f172a)
- Blue accent color (#3b82f6)
- Clean sidebar with soft borders
- Smooth button animations
- Modern sans-serif fonts

## 🔧 How to Use

### Starting the CMS

```bash
# Option 1: Run both servers together
npm run dev:cms

# Option 2: Run separately
npm run cms-proxy  # In terminal 1
npm run dev        # In terminal 2
```

### Accessing the CMS

Navigate to: **http://localhost:3000/admin**

### Creating Content

1. **Blog Post**:
   - Click "📝 Blog Posts"
   - Click "New Blog Posts"
   - Fill in title, date, content
   - Upload featured image
   - Set publish status
   - Click "Publish"

2. **Team Member**:
   - Click "👥 Team Members"
   - Click "New Team Members"
   - Add name, title, photo, bio
   - Set display order
   - Click "Publish"

3. **Case Study**:
   - Click "💼 Case Studies"
   - Click "New Case Studies"
   - Fill in client, challenge, solution, results
   - Add metrics
   - Click "Publish"

### Editing Pages

1. Click "📄 Pages"
2. Select page to edit
3. Modify content
4. Click "Publish" to save

### Managing Navigation

1. Click "🧭 Navigation"
2. Edit "Header Navigation" or "Footer Navigation"
3. Add/remove/reorder menu items
4. Update CTA buttons
5. Click "Publish"

## 📝 Content Guidelines

### SEO Best Practices
- **Meta Descriptions**: 120-155 characters
- **Page Titles**: 50-60 characters
- **Alt Text**: Always add for images
- **Keywords**: 3-5 relevant keywords

### Image Specifications
- **Hero Backgrounds**: 1920x1080px
- **Featured Images**: 1200x630px
- **Team Photos**: 400x400px
- **Logos**: 200x50px minimum
- **Favicon**: 32x32px or 64x64px

### Markdown Tips
Use markdown for rich formatting:

```markdown
# Heading 1
## Heading 2
**Bold text**
*Italic text*
- Bullet list
1. Numbered list
[Link text](https://url.com)
![Alt text](image-url.jpg)
```

## 🔒 Workflow

### Content States
- **Draft**: `published: false`
- **Published**: `published: true`

### Recommended Workflow
1. Create content as draft
2. Review and edit
3. Set SEO fields
4. Upload optimized images
5. Preview changes
6. Publish when ready

## 💾 File Storage

All content is stored as JSON/Markdown in:
```
content/
├── settings/          # Site configuration
├── navigation/        # Menus
├── pages/            # Page content
├── blog/             # Blog posts (markdown)
├── team/             # Team profiles (markdown)
└── case-studies/     # Case studies (markdown)
```

Media uploads go to:
```
public/assets/uploads/
```

## 🚀 Advanced Features

### Validation
- Email format checking
- Character limits enforced
- Required field validation
- Date format validation

### Organization
- Collapsible sections
- Summary templates
- Sortable lists
- Field grouping

### User Experience
- Helpful hints on every field
- Visual feedback
- Smooth animations
- Responsive interface

## 📊 Content Statistics

You can manage:
- ∞ Pages (5 main pages pre-configured)
- ∞ Blog posts
- ∞ Team members
- ∞ Case studies
- 6 Navigation collections
- 20+ SEO fields
- 100+ editable content fields

## 🎯 Next Steps

1. **Customize branding**: Update logo and colors in Site Settings
2. **Add team members**: Showcase your leadership
3. **Create case studies**: Highlight successful projects
4. **Start blogging**: Publish industry insights
5. **Optimize SEO**: Fill in all meta descriptions
6. **Upload images**: Replace placeholders with real photos

## 💡 Tips

- Use **collapsed: true** sections to keep interface clean
- Set **summary** templates for better list previews
- Add **hints** to guide content editors
- Use **validation** to ensure data quality
- Enable **required: false** for optional fields

---

**Need Help?** Check the console for initialization messages or review the Next.js dev server logs.

**CMS Version**: Advanced v2.0
**Last Updated**: 2025-01-11
