# FWG CMS - Quick Reference Guide

## 🚀 Getting Started

**CMS URL:** https://gentle-biscochitos-7940a8.netlify.app/admin

**Login:** Click "Login with GitHub" → Authorize → Start editing

**Publishing Time:** 2-3 minutes after saving

---

## 📋 Common Tasks

### Create New Content

1. Click collection in sidebar (e.g., "Career Postings")
2. Click **"New [Item]"** button
3. Fill in required fields (marked with *)
4. Click **"Save"**
5. Wait 2-3 minutes for deployment

### Edit Existing Content

1. Click collection in sidebar
2. Click item to edit
3. Make changes
4. Click **"Save"**

### Delete Content

1. Open item
2. Click **⋯** (three-dot menu)
3. Select **"Delete"**
4. Confirm

### Duplicate Content

1. Open item
2. Click **⋯** menu
3. Select **"Duplicate"**
4. Edit and save

---

## 📝 Content Collections

| Icon | Collection | Purpose |
|------|------------|---------|
| 🎯 | Career Postings | Job listings |
| 🛠️ | Services | Service offerings |
| 📄 | Pages | General website pages |
| ⚙️ | Site Settings | Homepage, navigation, footer |
| 💬 | Testimonials | Client feedback |
| 🎯 | Success Stories | Case studies |
| 👥 | Team Members | Staff profiles |

---

## ✍️ Markdown Formatting Cheat Sheet

### Headings
```
# Heading 1 (largest)
## Heading 2
### Heading 3
```

### Text Formatting
```
**Bold text**
*Italic text*
***Bold and italic***
```

### Lists

**Bulleted:**
```
- Item 1
- Item 2
- Item 3
```

**Numbered:**
```
1. First item
2. Second item
3. Third item
```

### Links
```
[Link text](https://example.com)
```

### Images
```
![Alt text](/path/to/image.jpg)
```

Or use the image upload widget in the CMS.

---

## 🎯 Field Types Guide

### String
Single line of text (e.g., title, name)

### Text
Multiple lines of text (e.g., description, quote)

### Markdown
Rich text with formatting (headings, bold, lists, links)

### Select
Dropdown menu with predefined options

### Boolean
Toggle switch (on/off, true/false)

### Number
Numeric value

### DateTime
Date and/or time picker

### Image
Upload or select image file

### List
Multiple items (can add/remove)

### Object
Group of related fields

---

## 🎨 Content Best Practices

### Writing

✅ **Do:**
- Write clear, concise copy
- Use bullet points
- Include specific metrics
- Proofread before saving
- Use active voice

❌ **Don't:**
- Use unexplained jargon
- Write long paragraphs
- Publish without proofreading
- Use all caps (except acronyms)

### Images

✅ **Best Practices:**
- High quality (1200px+ wide)
- Compressed (under 500KB)
- JPG for photos, PNG for logos
- Descriptive file names

### SEO

- **Page titles:** Under 60 characters
- **Descriptions:** Under 160 characters
- **Headings:** Use H1 → H2 → H3 hierarchy

---

## 🔧 Collection-Specific Tips

### Career Postings

**Required:** Title, Job Type, Description, Responsibilities, Qualifications
**Pro Tip:** Set "Featured" to true for priority positions

### Services

**Required:** Title, Description, Content
**Pro Tip:** Add 3-5 key features with descriptions

### Success Stories

**Required:** Title, Client, Industry, Summary, Challenge, Solution, Results
**Pro Tip:** Include 3-4 metrics with specific numbers

### Testimonials

**Required:** Name, Title, Company, Quote, Date
**Pro Tip:** Keep quotes to 2-4 sentences, add photos

### Team Members

**Required:** Name, Title, Bio
**Pro Tip:** Write bios in third person, include certifications

---

## ⚙️ Site Settings Quick Guide

### 🏠 Homepage

Edit these for homepage changes:
- Hero title/subtitle
- Call-to-action buttons
- Statistics
- Video background

### 🧭 Navigation

Edit menu structure:
- Add/remove menu items
- Create dropdown submenus
- Reorder items

### 👣 Footer

Edit footer content:
- Company tagline
- Contact information
- Social media links
- Copyright text

---

## 🐛 Quick Troubleshooting

### "Can't log in"
- Check GitHub repository access
- Try different browser
- Clear browser cache

### "Changes didn't appear"
- Wait 3-5 minutes
- Hard refresh (Ctrl+Shift+R)
- Check in incognito window

### "Made a mistake"
- Edit and save again
- Contact developer to recover deleted content

### "Images won't upload"
- Check file size (under 5MB)
- Use JPG or PNG format
- Compress image first

---

## 📊 Publishing Workflow

```
Make Changes → Click Save → GitHub Commit → Netlify Build → Live Site
                (instant)    (instant)        (2-3 min)     (live!)
```

**Important:** Changes go live immediately when you save!

---

## 🎓 Learning Path

**Day 1:**
1. Log in and explore
2. Edit existing content
3. View changes on live site

**Day 2:**
4. Create new content
5. Add images
6. Edit site settings

**Week 1:**
7. Master all content types
8. Learn Markdown formatting
9. Optimize for SEO

---

## 💡 Pro Tips

1. **Duplicate similar content** instead of creating from scratch
2. **Use the search bar** to find content quickly
3. **Test in incognito** to see changes without cache
4. **Keep descriptions concise** for better readability
5. **Add images** to make content more engaging
6. **Use metrics** to showcase results
7. **Regular updates** keep content fresh
8. **Mobile-friendly** write content works on all devices

---

## 📞 Need Help?

1. **Read the full guide:** `docs/CMS-USER-GUIDE.md`
2. **Check troubleshooting** section
3. **Contact development team**
4. **Request training session**

---

## 🔐 Access & Security

**Who can access:**
- GitHub repository collaborators only

**To add users:**
1. Go to https://github.com/consigcody94/FWG1/settings/access
2. Click "Add people"
3. Enter their GitHub username
4. They can now log in to the CMS

**Security:**
- All changes tracked in Git
- Full audit trail
- Secure GitHub OAuth
- HTTPS encryption

---

## ✅ Pre-Launch Checklist

Before going live with new content:

- [ ] Proofread all text
- [ ] Check spelling and grammar
- [ ] Verify all links work
- [ ] Optimize images
- [ ] Test on mobile (after publishing)
- [ ] Review SEO descriptions
- [ ] Set correct dates
- [ ] Configure featured items
- [ ] Save and wait for deployment
- [ ] Check live site

---

## 📚 Quick Links

- **CMS Admin:** https://gentle-biscochitos-7940a8.netlify.app/admin
- **Live Site:** https://gentle-biscochitos-7940a8.netlify.app
- **GitHub Repo:** https://github.com/consigcody94/FWG1
- **Netlify Dashboard:** https://app.netlify.com/sites/gentle-biscochitos-7940a8

---

## 🎯 Most Common Tasks (90% of usage)

### 1. Post a New Job
`Career Postings` → `New Career Posting` → Fill form → Save

### 2. Update Homepage Hero
`Site Settings` → `Home Page` → Edit hero fields → Save

### 3. Add Team Member
`Team Members` → `New Team Member` → Fill form → Upload photo → Save

### 4. Edit Service Description
`Services` → Click service → Edit content → Save

### 5. Add Client Testimonial
`Testimonials` → `New Testimonial` → Fill form → Save

### 6. Update Footer Contact Info
`Site Settings` → `Footer` → Edit contact fields → Save

---

**Print this page and keep it at your desk for quick reference!**
