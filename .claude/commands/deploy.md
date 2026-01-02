# Deploy Command

Deploy the REmail website to production.

## Pre-deployment Checklist

1. **Code Quality**
   - Run `npm run lint` and fix any errors
   - Run `npm run type-check` and fix type errors
   - Run `npm run test` and ensure all tests pass

2. **Build Verification**
   - Run `npm run build` to verify production build
   - Check for any build warnings

3. **SEO Verification**
   - Verify sitemap is up to date
   - Check robots.txt configuration
   - Verify all new pages have proper meta tags

4. **Database**
   - Verify all migrations are applied
   - Check for any pending schema changes

5. **Environment Variables**
   - Confirm all required env vars are set in Vercel
   - No secrets in code

## Deployment Steps

```bash
# 1. Ensure on main branch
git checkout main
git pull origin main

# 2. Run checks
npm run lint
npm run type-check
npm run build

# 3. Deploy to Vercel
vercel --prod
```

## Post-deployment

1. Verify deployment at production URL
2. Test critical user flows:
   - Homepage loads correctly
   - Sign up flow works
   - Pricing page displays correctly
3. Check Google Search Console for any new issues
4. Monitor error tracking (Sentry) for new errors
5. Verify analytics is tracking correctly
