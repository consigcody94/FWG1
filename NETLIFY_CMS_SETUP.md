# Netlify CMS Setup Guide

## Configuration Complete ✅

Your CMS is now configured to work both **locally** and on **Netlify production**.

- **Local Development**: Uses local proxy server (no authentication required)
- **Production (Netlify)**: Uses Git Gateway with Netlify Identity (secure authentication)

---

## Local Development

**Start the CMS locally:**
```bash
npm run dev:cms
```

Then visit: **http://localhost:3000/admin**

No login required for local development!

---

## Production Setup on Netlify

After deploying to Netlify, follow these steps to enable authentication:

### Step 1: Enable Netlify Identity

1. Go to your Netlify site dashboard
2. Navigate to **Settings** → **Identity**
3. Click **"Enable Identity"**

### Step 2: Enable Git Gateway

1. In the Identity settings, scroll to **Services**
2. Click **"Enable Git Gateway"**
3. This allows the CMS to commit changes to your GitHub repository

### Step 3: Set Registration Preferences

1. In Identity settings, go to **Registration**
2. Set to **"Invite only"** (recommended for security)
3. This prevents random people from signing up

### Step 4: Invite Users

1. Go to **Identity** tab in your Netlify dashboard
2. Click **"Invite users"**
3. Enter email: **admin@federalworking.com**
4. User will receive an invitation email

### Step 5: Complete User Setup

1. Check the email at admin@federalworking.com
2. Click the invitation link
3. Set password: **fwg** (or whatever you prefer)
4. Complete the signup

### Step 6: Access the CMS

1. Visit **https://your-site.netlify.app/admin**
2. Click **"Login with Netlify Identity"**
3. Enter credentials:
   - Email: **admin@federalworking.com**
   - Password: **fwg** (or what you set)

---

## CMS Features

Once logged in, you can:

- ✅ Edit site settings and navigation
- ✅ Manage pages (Home, About, Services, Contact)
- ✅ Create and edit blog posts
- ✅ Add team members
- ✅ Create case studies
- ✅ Upload images and media
- ✅ All changes automatically commit to your Git repository

---

## Security Notes

- Always use strong passwords in production
- Keep registration set to "Invite only"
- Regularly review user access in Netlify Identity
- Consider enabling 2FA in Netlify Identity settings

---

## Troubleshooting

**CMS not loading on Netlify?**
- Make sure Identity is enabled
- Check that Git Gateway is enabled
- Verify the user invitation was accepted

**Can't login?**
- Check the email used matches the invited email
- Try password reset from the login page
- Check Netlify Identity logs for errors

**Changes not saving?**
- Verify Git Gateway has proper permissions
- Check your GitHub repository for new commits
- Review the browser console for errors

---

## Current Configuration

- **Backend**: Git Gateway (production) / Proxy (local)
- **Branch**: main
- **Media Folder**: public/assets/uploads
- **Collections**: 7 (Settings, Navigation, Pages, Blog, Team, Case Studies, Contact)
