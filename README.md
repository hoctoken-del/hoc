# HOC Super App — Static Website Export

This is a complete, production-ready static website for the HOC Super App. Deploy it anywhere in seconds.

## 🚀 Quick Deploy

### GitHub Pages (Recommended)
```bash
git clone https://github.com/YOUR_USERNAME/hocsuperapp.git
cd hocsuperapp
cp -r /path/to/hoc-super-app-export/* .
git add . && git commit -m "Deploy HOC website" && git push
```
Then enable Pages in repository settings. Your site will be live at `https://YOUR_USERNAME.github.io/hocsuperapp/`

### Netlify
Drag and drop the `hoc-super-app-export` folder to [netlify.com](https://netlify.com) — instant deploy.

### Vercel
Upload to [vercel.com](https://vercel.com) — instant deploy.

## 📁 What's Included

- **index.html** — Production-built HTML (368 KB, all assets bundled)
- **assets/** — Minified CSS and JavaScript
- **src/** — Full source code (TypeScript + React)
- **DEPLOYMENT_GUIDE.md** — Detailed deployment instructions
- **package.json** — Dependencies for local development

## ✨ Features

✅ Fully responsive (mobile, tablet, desktop)  
✅ Smooth scroll navigation  
✅ Mobile hamburger menu  
✅ All images and assets included  
✅ No backend required  
✅ Zero external dependencies  
✅ Production-optimized  

## 📖 Documentation

See **DEPLOYMENT_GUIDE.md** for:
- Step-by-step GitHub Pages setup
- Alternative deployment options (Netlify, Vercel, custom server)
- Local development setup
- Troubleshooting guide
- Performance optimization tips

## 🔧 Local Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm run dev

# Build for production
pnpm run build
```

## 📝 Edit Content

All editable content is in `src/lib/config.ts`:
- Founder name, email, bio
- Social media links
- Token information
- Contact details

After editing, rebuild: `pnpm run build`

## 🌐 Deployed Site

Current live version: [hocsuperapp-bclp9cwe.manus.space](https://hocsuperapp-bclp9cwe.manus.space)

---

**Version:** 1.0.0  
**Built:** August 8, 2026  
**Status:** Production Ready ✅
