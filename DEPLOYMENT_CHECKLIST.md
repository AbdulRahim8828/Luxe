# Netlify Deployment Checklist for LUXE

## Pre-Deployment Setup

### 1. Repository Setup
- [x] Code pushed to GitHub repository
- [x] All dependencies installed (`npm install`)
- [x] Build scripts configured
- [x] Environment variables set up

### 2. Netlify Configuration
- [x] `netlify.toml` configuration file created
- [x] `public/_redirects` file for SPA routing
- [x] Build command: `npm run build`
- [x] Publish directory: `dist`
- [x] Node version: 18

### 3. Environment Variables (Set in Netlify Dashboard)
Add these in Netlify Dashboard > Site Settings > Environment Variables:

```
VITE_APP_ENV=production
VITE_APP_NAME="LUXE Wooden Furniture Polishing"
VITE_APP_URL=https://your-site-name.netlify.app
VITE_PHONE_NUMBER="+918828709945"
VITE_WHATSAPP_NUMBER="918828709945"
VITE_EMAIL="info@luxefurniturepolish.com"
```

### 4. SEO & Performance
- [x] `robots.txt` configured
- [x] Sitemap generation included in build
- [x] Meta tags and SEO components
- [x] Image optimization
- [x] Code splitting and lazy loading

### 5. Security Headers
- [x] Security headers configured in `netlify.toml`
- [x] HTTPS redirect (automatic with Netlify)
- [x] Content Security Policy headers

## Deployment Steps

### 1. Connect Repository to Netlify
1. Go to [Netlify Dashboard](https://app.netlify.com/)
2. Click "New site from Git"
3. Choose GitHub and select your repository
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: 18 (set in Environment Variables)

### 2. Environment Variables Setup
In Netlify Dashboard > Site Settings > Environment Variables, add:
- `NODE_VERSION` = `18`
- `NPM_VERSION` = `9`
- All VITE_ variables from `.env.production`

### 3. Domain Configuration
1. In Site Settings > Domain Management
2. Add custom domain (if you have one)
3. Configure DNS settings
4. Enable HTTPS (automatic)

### 4. Performance Optimization
1. Enable Asset Optimization in Site Settings
2. Configure caching headers (already in netlify.toml)
3. Enable Netlify Analytics (optional)

## Post-Deployment Verification

### 1. Functionality Tests
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Services page displays properly
- [ ] Contact forms work
- [ ] WhatsApp integration works
- [ ] Phone number links work
- [ ] Cart functionality works
- [ ] Mobile responsiveness

### 2. SEO Tests
- [ ] Meta tags display correctly
- [ ] Sitemap accessible at `/sitemap.xml`
- [ ] Robots.txt accessible at `/robots.txt`
- [ ] Social media previews work
- [ ] Page titles and descriptions correct

### 3. Performance Tests
- [ ] Page load speed < 3 seconds
- [ ] Images load properly
- [ ] No console errors
- [ ] Mobile performance good
- [ ] Lighthouse score > 90

### 4. Analytics Setup (Optional)
- [ ] Google Analytics configured
- [ ] Google Search Console verified
- [ ] Facebook Pixel (if needed)

## Troubleshooting Common Issues

### Build Failures
1. Check Node version (should be 18)
2. Clear cache: `npm run cleanup`
3. Check for TypeScript errors
4. Verify all assets exist

### Routing Issues
1. Ensure `_redirects` file is in `public/` folder
2. Check `netlify.toml` redirect rules
3. Verify React Router configuration

### Environment Variables
1. Ensure all VITE_ prefixed variables are set
2. Check variable names match exactly
3. Restart deployment after adding variables

### Performance Issues
1. Check image optimization
2. Verify code splitting is working
3. Check for large bundle sizes
4. Enable compression in Netlify

## Monitoring & Maintenance

### Regular Checks
- [ ] Monitor site performance
- [ ] Check for broken links
- [ ] Update dependencies regularly
- [ ] Monitor error logs
- [ ] Check SEO rankings

### Updates
- [ ] Content updates via CMS or code
- [ ] Security updates
- [ ] Performance optimizations
- [ ] New feature deployments

## Support Contacts
- **Netlify Support**: [Netlify Help Center](https://docs.netlify.com/)
- **Domain Issues**: Check with domain provider
- **Code Issues**: Check repository issues

---

## Quick Deploy Commands

```bash
# Local testing
npm run dev

# Production build test
npm run build
npm run preview

# Deploy to Netlify (automatic on git push)
git add .
git commit -m "Deploy to production"
git push origin main
```

## Custom Domain Setup (When Ready)

1. Purchase domain from provider (GoDaddy, Namecheap, etc.)
2. In Netlify: Site Settings > Domain Management > Add Custom Domain
3. Update DNS records at domain provider:
   - Add CNAME record: `www` → `your-site.netlify.app`
   - Add A record: `@` → Netlify's IP (provided in dashboard)
4. Wait for DNS propagation (up to 48 hours)
5. SSL certificate will be automatically provisioned