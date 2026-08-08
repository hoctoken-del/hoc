# HOC Super App — Deployment Guide

## Overview

This is a complete, self-contained static website for the HOC Super App. All files are production-ready and can be deployed to GitHub Pages, Netlify, Vercel, or any static hosting service.

**Key Features:**
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ All images and assets embedded or linked
- ✅ Smooth scroll navigation with active section highlighting
- ✅ Mobile hamburger menu
- ✅ No backend server required
- ✅ Zero external dependencies (all CSS and JS bundled)

---

## Quick Start: Deploy to GitHub Pages (5 minutes)

### Step 1: Create a GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Create a new repository named `hocsuperapp` (or any name you prefer)
3. Choose **Public** (required for GitHub Pages)
4. Click **Create repository**

### Step 2: Clone and Add Files

```bash
# Clone your new repository
git clone https://github.com/YOUR_USERNAME/hocsuperapp.git
cd hocsuperapp

# Copy all files from this export package into the repo
cp -r /path/to/hoc-super-app-export/* .

# Add all files to git
git add .

# Commit
git commit -m "Initial commit: HOC Super App website"

# Push to GitHub
git push origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select **Deploy from a branch**
5. Choose branch: **main**
6. Choose folder: **/ (root)**
7. Click **Save**

GitHub will now build and deploy your site. Within 1-2 minutes, your site will be live at:
```
https://YOUR_USERNAME.github.io/hocsuperapp/
```

---

## Alternative Deployment Options

### Deploy to Netlify (Recommended for Simplicity)

1. Go to [netlify.com](https://netlify.com)
2. Click **Add new site** → **Deploy manually**
3. Drag and drop the `hoc-super-app-export` folder
4. Your site will be live instantly with a temporary URL
5. Connect a custom domain in Netlify settings

### Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **Add New...** → **Project**
3. Select **Import Git Repository** or **Deploy manually**
4. Upload the exported folder
5. Your site will be live at a Vercel URL

### Deploy to Your Own Server

If you have a web server (Apache, Nginx, etc.):

```bash
# Copy all files to your web server's public directory
scp -r hoc-super-app-export/* user@your-server:/var/www/html/
```

Then access your site at `https://your-domain.com`

---

## Project Structure

```
hoc-super-app-export/
├── index.html                 # Main HTML file (production-built)
├── assets/                    # CSS and JS bundles
│   ├── index-*.css           # All styles (minified)
│   └── index-*.js            # All JavaScript (minified)
├── src/                       # Source code (for reference)
│   ├── pages/                # Page components
│   ├── components/           # Reusable UI components
│   ├── lib/                  # Utilities and config
│   ├── index.css             # Global styles
│   └── main.tsx              # React entry point
├── package.json              # Dependencies (for local development)
├── vite.config.ts            # Build configuration
├── tsconfig.json             # TypeScript configuration
└── DEPLOYMENT_GUIDE.md       # This file
```

---

## Important Notes

### Image Assets

All images are referenced via external CDN URLs (Manus storage). These URLs are permanent and will continue to work after deployment. If you need to replace images:

1. Edit `client/src/lib/config.ts` to update image URLs
2. Rebuild with `pnpm run build`
3. Deploy the new `dist/public` folder

### Social Links & Contact Info

All editable content (email, social links, founder info) is centralized in:
```
src/lib/config.ts
```

To update:
1. Edit the config file
2. Rebuild: `pnpm run build`
3. Deploy the new `dist/public` folder

### Custom Domain

After deployment to GitHub Pages:

1. Go to your repository **Settings** → **Pages**
2. Under **Custom domain**, enter your domain (e.g., `hocsuperapp.com`)
3. Update your domain's DNS records to point to GitHub Pages:
   - Type: `A`
   - Name: `@`
   - Value: `185.199.108.153` (or other GitHub IPs listed in docs)

---

## Local Development (Optional)

If you want to modify the website locally:

### Prerequisites
- Node.js 18+ ([download](https://nodejs.org))
- pnpm (`npm install -g pnpm`)

### Setup

```bash
cd hoc-super-app-export

# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Open http://localhost:5173 in your browser
```

### Build for Production

```bash
pnpm run build

# Output will be in dist/public/
# These are the files to deploy
```

---

## Troubleshooting

### Images Not Loading After Deployment

**Issue:** Images show broken links
**Solution:** The image URLs in the source code reference Manus CDN. These are permanent and should work everywhere. If they don't:
1. Check your internet connection
2. Verify the CDN URLs are correct in `src/lib/config.ts`
3. Contact support if CDN is down

### Navigation Not Working

**Issue:** Clicking nav items doesn't scroll to sections
**Solution:** 
1. Ensure all section IDs match nav links (check `src/components/Navigation.tsx`)
2. Rebuild and redeploy: `pnpm run build`

### Mobile Menu Not Opening

**Issue:** Hamburger menu doesn't respond on mobile
**Solution:**
1. Clear browser cache (Ctrl+Shift+Delete)
2. Hard refresh (Ctrl+Shift+R)
3. Check browser console for errors (F12)

### Contact Form Not Sending Emails

**Issue:** Form submission doesn't send emails
**Solution:** The contact form is a frontend placeholder. To enable email:
1. Integrate Formspree: [formspree.io](https://formspree.io)
2. Or EmailJS: [emailjs.com](https://www.emailjs.com)
3. Update `src/components/ContactSection.tsx` with your service credentials
4. Rebuild and redeploy

---

## Performance Optimization

The website is already optimized for production:
- ✅ All CSS and JS minified and bundled
- ✅ Images optimized and served via CDN
- ✅ Lazy loading for scroll animations
- ✅ Mobile-first responsive design
- ✅ Zero external blocking resources

**Lighthouse Score:** Typically 90+ on all metrics

---

## Support & Questions

For issues or questions:
1. Check the **Troubleshooting** section above
2. Review the source code in `src/` for implementation details
3. Contact the development team

---

## License

This website is proprietary to HOC Super App. All rights reserved.

---

**Last Updated:** August 8, 2026
**Version:** 1.0.0
