# Environment Variables Setup - Quick Reference

## Critical Variables for Deployment

Since you're not currently using the database (form submissions go to n8n webhook), but Prisma requires `DATABASE_URL` for client generation during build, you need:

### 1. DATABASE_URL (Required for Prisma)

**Why needed**: Prisma's `postinstall` script runs `prisma generate`, which requires `DATABASE_URL` to validate the schema.

**Options**:
- **Vercel Postgres** (recommended): Free tier, integrated with Vercel
- **Neon**: Free tier (0.5GB storage)
- **Supabase**: Free tier (500MB database)
- **Railway**: Free tier (limited)

**Setup Steps**:
1. Create a free PostgreSQL database (see [DEPLOYMENT-GUIDE.md](./DEPLOYMENT-GUIDE.md) for detailed steps)
2. Copy the connection string (format: `postgresql://user:password@host:port/database`)
3. Add to Vercel environment variables before first deployment

**Note**: Database can be empty - you just need the connection string for Prisma client generation. When you're ready to use database features, run migrations.

### 2. N8N_WEBHOOK_URL (Required for Contact Form)

**Used by**: Contact form API route (`src/app/api/contact/route.ts`)

**How to get**: Your n8n webhook URL that receives form submissions

**Setup**: Add to Vercel environment variables before deployment

**What happens if missing**: Contact form API returns 500 error (`"Webhook configuration error"`)

## Recommended Variables

### NEXT_PUBLIC_APP_URL
- **Used in**: Sitemap, robots.txt, metadata, absolute URL helper
- **Default**: `https://remaildirect.com`
- **Recommended**: Your production domain (e.g., `https://remail.com`)
- **When**: Set before first deployment

### NEXT_PUBLIC_SITE_URL
- **Used in**: Blog pages for Open Graph images and JSON-LD
- **Default**: `https://remaildirect.com`
- **Recommended**: Same as `NEXT_PUBLIC_APP_URL`
- **When**: Set before first deployment

## Optional Variables

### RESEND_API_KEY
- **Used in**: Email notification functions
- **What happens if missing**: Emails fail silently (logs warning, doesn't crash)
- **When to set**: When you want email notifications to work

### CONTACT_NOTIFICATION_EMAIL
- **Used in**: Contact notification emails
- **Default**: `sales@remail.com`
- **Recommended**: Your actual support/sales email

### NEXT_PUBLIC_VAPI_PUBLIC_KEY
- **Used in**: Chat widget component
- **When to set**: When you enable the chat widget

### NEXT_PUBLIC_GTM_ID
- **Used in**: Google Tag Manager component
- **When to set**: When you enable Google Tag Manager

## Migration Steps (After DATABASE_URL is Set)

Once you have your `DATABASE_URL`:

1. **Add DATABASE_URL to your .env file**:
   ```bash
   DATABASE_URL="your-connection-string-here"
   ```

2. **Create and run initial migration**:
   ```bash
   # Create the migration from schema
   npx prisma migrate dev --name init
   
   # Or for production deployment:
   npx prisma migrate deploy
   ```

This creates the database schema (empty tables) based on your `prisma/schema.prisma` file.

**Note**: The database will be empty but ready for use when you add database features.

## Quick Checklist

Before deploying to Vercel:

- [ ] Create PostgreSQL database (Vercel Postgres recommended)
- [ ] Copy `DATABASE_URL` connection string
- [ ] Get `N8N_WEBHOOK_URL` from n8n
- [ ] Add both to Vercel environment variables (Settings → Environment Variables)
- [ ] (Optional) Run initial migration locally to verify schema
- [ ] Deploy to Vercel

See [DEPLOYMENT-GUIDE.md](./DEPLOYMENT-GUIDE.md) for detailed deployment instructions.
