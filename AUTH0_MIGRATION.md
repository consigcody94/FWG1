# Migrating from Netlify Identity to Auth0

Netlify Identity is deprecated. Here's how to migrate to Auth0 for a future-proof CMS authentication.

## Why Migrate?

- ✅ Active development and support
- ✅ More authentication options (social logins, MFA, etc.)
- ✅ Better security features
- ✅ Free tier available

## Quick Migration Steps

### 1. Install Auth0 Extension

1. Go to Netlify Dashboard → Integrations
2. Search for "Auth0"
3. Click "Install"

### 2. Update CMS Config

Replace in `public/admin/config.yml`:

```yaml
# OLD (Netlify Identity)
backend:
  name: git-gateway

# NEW (Auth0)
backend:
  name: github
  repo: YourUsername/FWG1
  branch: main
```

Or use Auth0 with Netlify's OAuth:

```yaml
backend:
  name: git-gateway
  # Auth0 will handle authentication
```

### 3. Export Existing Users (Optional)

If you have existing Identity users:
1. Contact Netlify Support
2. Request Identity data export
3. Import to Auth0

## For Now: Stick with Identity

Since you're just getting started:
- ✅ Use Netlify Identity (works perfectly)
- ✅ Get your CMS running
- ✅ Migrate to Auth0 later if needed

Identity will continue to work - it's just not getting new features.
