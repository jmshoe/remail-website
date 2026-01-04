# Deployment Guide - Environment Variables Setup

This guide covers setting up the required environment variables for deploying REmail to Vercel.

## Critical Environment Variables

Since you're currently not using the database (form submissions go to n8n webhook), but Prisma requires `DATABASE_URL` for client generation, you need to set up a minimal database.

### Required Variables

1. **`DATABASE_URL`** - PostgreSQL connection string (required for Prisma client generation)
2. **`N8N_WEBHOOK_URL`** - n8n webhook URL for contact form submissions

## Step 1: Create Vercel Postgres Database

### Option A: Vercel Postgres (Recommended)

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Navigate to **Storage** → **Create Database**
3. Select **Postgres**
4. Choose a name (e.g., `remail-db`)
5. Select the **Free** tier (sufficient for now)
6. Create the database
7. **Copy the `DATABASE_URL`** from the database settings

### Option B: Alternative Free PostgreSQL Options

- **Neon**: [neon.tech](https://neon.tech) - Free tier (0.5GB storage)
- **Supabase**: [supabase.com](https://supabase.com) - Free tier (500MB database)
- **Railway**: [railway.app](https://railway.app) - Free tier (limited)

For any of these, create a PostgreSQL database and copy the connection string (it will be in the format: `postgresql://user:password@host:port/database`)

## Step 2: Run Initial Migration

Once you have your `DATABASE_URL`:

1. **Set DATABASE_URL locally** (temporarily for migration):
   ```bash
   # Option 1: Add to .env file
   echo "DATABASE_URL=your-connection-string-here" >> .env
   
   # Option 2: Set for single command
   export DATABASE_URL="your-connection-string-here"
   ```

2. **Create and run the initial migration**:
   ```bash
   # Create the migration
   npx prisma migrate dev --name init
   
   # Or if deploying to production, use:
   npx prisma migrate deploy
   ```

This will create the database schema (empty tables) based on your `prisma/schema.prisma` file.

## Step 3: Set Environment Variables in Vercel

After connecting your GitHub repo to Vercel (see main deployment guide):

1. Go to **Vercel Dashboard** → Your Project → **Settings** → **Environment Variables**
2. Add each variable:

   **Required:**
   - `DATABASE_URL` = Your PostgreSQL connection string
   - `N8N_WEBHOOK_URL` = Your n8n webhook URL

   **Recommended:**
   - `NEXT_PUBLIC_APP_URL` = `https://remaildirect.com` (or your Vercel preview URL)
   - `NEXT_PUBLIC_SITE_URL` = `https://remaildirect.com` (same as above)

3. Select environments: **Production**, **Preview**, and **Development** (or just Production for now)
4. Click **Save** after each variable

## Step 4: Verify Database Setup

After deployment:

1. Check that the build succeeded (no Prisma errors)
2. Verify the database schema exists (you can use Prisma Studio or connect via database client)
3. The database will be empty but ready for use when you add database features

## Notes

- The database is required **only** for Prisma client generation - it doesn't need to store any data yet
- The free tier is sufficient for now (schema only, no data)
- When you're ready to use database features, migrations are already set up
- You can run migrations locally or via Vercel's database management interface
