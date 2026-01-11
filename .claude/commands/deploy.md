# Deploy Command

Deploy the REmail website to production.

## Pre-deployment Checklist

1. **Code Quality**
   - Run `npm run lint` and fix any errors
   - Run `npm run type-check` and fix type errors
   - Run `npm run build` to verify production build

2. **SEO Verification**
   - Verify sitemap is up to date
   - Check robots.txt configuration
   - Verify all new pages have proper meta tags

3. **Environment Variables**
   - Confirm all required env vars are set in Vercel
   - No secrets in code

## Deployment Steps

### Step 1: Run Quality Checks

```bash
npm run lint
npm run type-check
npm run build
```

### Step 2: Deploy to Vercel

```bash
npx vercel --prod
```

### Step 3: Verify Redirects (if applicable)

```bash
# Test any new redirects
curl -sI "https://www.remaildirect.com/<old-path>" | grep -E "^(HTTP|location:)"
```

### Step 4: Commit Changes (if not already committed)

```bash
# Stage only the files related to this deployment
git add <specific-files>

# Commit with descriptive message
git commit -m "$(cat <<'EOF'
Your commit message here

Detailed description of changes.

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>
EOF
)"
```

### Step 5: Push and Merge to Main

```bash
# Push feature branch
git push origin content-refactor

# Merge to main for production
git checkout main
git pull origin main
git merge content-refactor --no-edit
git push origin main

# Return to feature branch
git checkout content-refactor
```

## Complete Workflow Example

```bash
# 1. Quality checks
npm run lint && npm run type-check && npm run build

# 2. Deploy to Vercel
npx vercel --prod

# 3. Commit changes
git add next.config.js
git commit -m "Add URL redirects for SEO

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"

# 4. Push feature branch
git push origin content-refactor

# 5. Merge to main
git checkout main
git pull origin main
git merge content-refactor --no-edit
git push origin main

# 6. Return to feature branch
git checkout content-refactor
```

## Post-deployment

1. Verify deployment at https://www.remaildirect.com
2. Test critical user flows:
   - Homepage loads correctly
   - Blog pages load correctly
   - Contact form works
   - Pricing page displays correctly
3. Check Google Search Console for any new issues
4. Verify analytics is tracking correctly

## Rollback (if needed)

```bash
# Revert to previous deployment in Vercel dashboard
# Or revert the commit:
git revert HEAD
git push origin main
```
