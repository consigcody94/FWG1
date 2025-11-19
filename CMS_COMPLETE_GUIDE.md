# Sveltia CMS - Complete Editing Guide

## 🎉 Your Entire Site is Now Editable!

Everything on your Federal Working Group website can now be edited through the CMS at `/admin`

---

## 📋 What You Can Edit

### 🎯 Career Postings
**Path:** `/admin` → Career Postings

Edit all job listings with:
- Job title, type (Full-Time/Part-Time/Contract)
- Security clearance requirements
- Responsibilities list
- Required & preferred qualifications
- Benefits
- Feature on homepage toggle

### 🛠️ Services
**Path:** `/admin` → Services

Manage your 4 service pages:
- **IT Security**
- **IT Infrastructure**
- **Enterprise Architecture**
- **Program Management**

Each includes:
- Title, description, icon
- Full markdown content
- Key features list
- Featured toggle
- Display order

### 📄 General Pages
**Path:** `/admin` → Pages

Create and edit pages like:
- About pages
- Legal pages (privacy, terms)
- Custom landing pages

With:
- Flexible markdown content
- Hero videos
- Section builder
- SEO descriptions

### ⚙️ Site Settings

#### 🏠 Home Page
**Path:** `/admin` → Site Settings → Home Page

Edit homepage content:
- Hero title, subtitle, badge
- Hero video
- Primary & secondary CTA buttons
- Statistics (4 stats with values and labels)

#### 🧭 Navigation
**Path:** `/admin` → Site Settings → Navigation

Manage your menu structure:
- Main menu items
- Dropdown submenus
- Links and labels

Current menu includes:
- About (with 5 subpages)
- Services (with 4 subpages)
- Careers (with 4 subpages)
- Contact

#### 👣 Footer
**Path:** `/admin` → Site Settings → Footer

Update footer information:
- Company tagline
- Office address (3 lines)
- Phone & email
- Social media links (LinkedIn, Twitter, Facebook)
- Copyright text

### 💬 Testimonials
**Path:** `/admin` → Testimonials

Add client testimonials:
- Client name, title, company
- Quote/testimonial text
- Optional photo
- Featured toggle
- Date

### 🎯 Success Stories
**Path:** `/admin` → Success Stories

Create case studies with:
- Title, client, industry
- Challenge description
- Solution provided
- Results achieved
- Key metrics (custom stats)
- Featured image
- Featured toggle

### 👥 Team Members
**Path:** `/admin` → Team Members

Manage your team directory:
- Name, title, bio
- Photo
- Email, LinkedIn
- Display order
- Featured on leadership page

---

## 🎨 CMS Features

### ✨ User Experience Enhancements

1. **Emoji Navigation** 📝
   - Collections use emojis for easy recognition
   - 🎯 Careers, 🛠️ Services, ⚙️ Settings, etc.

2. **Helpful Hints** 💡
   - Every field has contextual help text
   - Examples provided where helpful

3. **Preview Paths** 👁️
   - See where content will appear
   - Direct links to live pages

4. **Sortable Lists** ↕️
   - Sort by title, date, order
   - Filter by type or status

5. **View Filters** 🔍
   - Quick filters for featured items
   - Filter by job type, etc.

6. **Rich Text Editing** ✏️
   - Markdown support with preview
   - Bold, italics, links, images
   - Lists, headings, code blocks

7. **Media Library** 🖼️
   - Upload images, PDFs, videos
   - Organized in `/public/assets`
   - Drag & drop support

8. **Custom Branding** 🎨
   - FWG logo in CMS
   - Branded loading screen
   - Professional color scheme

---

## 🚀 How to Use

### Accessing the CMS

1. **Go to:** https://gentle-biscochitos-7940a8.netlify.app/admin
2. **Click:** "Login with GitHub"
3. **Authorize:** the OAuth app (first time only)
4. **Start editing!**

### Creating New Content

1. Click the collection (e.g., "Career Postings")
2. Click "New Career Posting"
3. Fill in the fields
4. Click "Save"
5. Changes commit to GitHub
6. Netlify auto-deploys (1-2 minutes)
7. View live site!

### Editing Existing Content

1. Navigate to collection
2. Click on the item to edit
3. Make your changes
4. Click "Save"
5. Changes go live after deploy

### Working with Images

1. In any image field, click "Choose an image"
2. **Upload new:** Drag & drop or browse
3. **Use existing:** Select from media library
4. Images stored in `/public/assets`
5. Automatically optimized

### Markdown Formatting

The CMS supports full markdown:

```markdown
# Heading 1
## Heading 2

**Bold text**
*Italic text*

- Bullet list
- Another item

1. Numbered list
2. Another item

[Link text](https://example.com)

![Image alt](/assets/image.jpg)
```

---

## 🔐 User Management

### Who Can Edit?

Anyone with **write access** to the GitHub repository `consigcody94/FWG1`

### Adding Editors

1. Go to https://github.com/consigcody94/FWG1
2. Settings → Collaborators
3. Add people (GitHub username or email)
4. They get invited, accept, then can access CMS

### Removing Access

1. Go to repo Settings → Collaborators
2. Click "Remove" next to their name
3. They immediately lose CMS access

---

## 📊 Content Strategy Tips

### Career Postings

- Keep titles clear and specific
- Use featured toggle for priority positions
- Update regularly (remove filled positions)
- Use SEO-friendly descriptions

### Services

- Use display order to prioritize
- Feature top 3-4 services on homepage
- Keep descriptions concise but compelling
- Use bullet points for readability

### Success Stories

- Include specific metrics when possible
- Use client testimonials as quotes
- Feature best stories on homepage
- Update with recent wins

### Team Members

- Professional photos work best
- Keep bios to 2-3 paragraphs
- Feature leadership team
- Keep LinkedIn profiles updated

---

## 🐛 Troubleshooting

### CMS Won't Load

1. Hard refresh: Ctrl+Shift+R (Cmd+Shift+R on Mac)
2. Clear browser cache
3. Try incognito/private browsing
4. Check GitHub OAuth is authorized

### Changes Not Appearing

1. Verify you clicked "Save" (not just preview)
2. Wait 1-2 minutes for Netlify deploy
3. Check Netlify dashboard for deploy status
4. Hard refresh the live site

### Can't Upload Images

1. Check file size (max ~5MB recommended)
2. Use common formats (JPG, PNG, WebP)
3. Ensure you're in an image field
4. Try drag-and-drop instead of browse

### Authentication Issues

1. Verify GitHub OAuth credentials are in Netlify env vars
2. Check OAuth app callback URL matches site URL
3. Revoke and re-authorize OAuth app
4. Contact admin to verify repo permissions

---

## 💡 Pro Tips

1. **Draft Mode:** Save work-in-progress without publishing
2. **Bulk Edit:** Update multiple items at once
3. **Search:** Use the search bar to find content quickly
4. **Duplicate:** Copy existing content to create similar items
5. **Keyboard Shortcuts:** Cmd/Ctrl+S to save quickly
6. **Preview:** Click preview to see changes before saving
7. **Undo:** Cmd/Ctrl+Z works in text editors
8. **Media Cleanup:** Delete unused images to save space

---

## 📈 What's Editable Summary

| Content Type | Quantity | Can Create New | Notes |
|-------------|----------|----------------|-------|
| Career Postings | Unlimited | ✅ Yes | Job listings |
| Services | 4 created | ✅ Yes | Service pages |
| Pages | 1 created | ✅ Yes | General content |
| Testimonials | 0 | ✅ Yes | Client quotes |
| Success Stories | 0 | ✅ Yes | Case studies |
| Team Members | 0 | ✅ Yes | Staff directory |
| Home Settings | 1 | ❌ Edit only | Homepage content |
| Navigation | 1 | ❌ Edit only | Menu structure |
| Footer | 1 | ❌ Edit only | Footer content |

**Total:** Entire site is editable! 🎉

---

## 🎯 Getting Started Checklist

- [ ] Access CMS at `/admin`
- [ ] Login with GitHub
- [ ] Review existing content
- [ ] Update home page settings
- [ ] Edit navigation if needed
- [ ] Update footer with correct info
- [ ] Create your first testimonial
- [ ] Add a success story
- [ ] Add team members
- [ ] Create/edit career postings
- [ ] Upload company photos/media
- [ ] Test saving and viewing changes
- [ ] Invite other editors

---

## 📚 Additional Resources

- **Sveltia CMS Docs:** https://github.com/sveltia/sveltia-cms
- **Markdown Guide:** https://www.markdownguide.org/
- **GitHub Repo:** https://github.com/consigcody94/FWG1
- **Live Site:** https://gentle-biscochitos-7940a8.netlify.app

---

**Questions?** The CMS has helpful hints on every field. Just hover over the (?) icons!

Happy editing! 🚀
