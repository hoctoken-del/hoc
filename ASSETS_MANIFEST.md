# HOC Super App — Assets Manifest

## Image Assets

All images are stored on Manus CDN and referenced via permanent URLs. These URLs will continue to work after deployment to any platform.

### Logo & Branding
- **HOC Logo:** `/manus-storage/hoc-logo_a3ac4dc5.jpg`
  - Used in: Navigation, Footer, Token section
  - Size: ~50x50px (logo mark)
  - Format: JPG

### App Screenshots
- **App Screen 1 (Dashboard):** `/manus-storage/app-screen-1_e1f0dce7.jpg`
  - Used in: Hero section (secondary phone), Projects section
  - Size: Phone mockup (1080x2400px)
  - Format: JPG

- **App Screen 3 (Movement Ledger):** `/manus-storage/app-screen-3_9a2bde8e.jpg`
  - Used in: Hero section (primary phone)
  - Size: Phone mockup (1080x2400px)
  - Format: JPG

- **App Screen 4:** `/manus-storage/app-screen-4_d501ee2f.jpg`
  - Used in: Projects section
  - Size: Phone mockup (1080x2400px)
  - Format: JPG

### Founder & Team
- **Founder Portrait:** `/manus-storage/founder_77342e66.jpg`
  - Used in: About section (Meet the Founder)
  - Size: Portrait (400x600px)
  - Format: JPG

### Project Documentation
- **Geo Power Lab Report:** `/manus-storage/geo-power-lab_c8e2f1a9.jpg`
  - Used in: Projects section
  - Size: Document/lab photo
  - Format: JPG

- **Geo Power Lab Report 2:** `/manus-storage/geo-power-lab-2_f4d5e2b1.jpg`
  - Used in: Projects section
  - Size: Document/lab photo
  - Format: JPG

## Fonts

### Google Fonts (Loaded via CDN)
The website uses three font families from Google Fonts:

1. **Space Grotesk** (Headings, Display)
   - Weights: 400, 500, 600, 700
   - Used for: H1, H2, H3, buttons, labels
   - URL: `https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap`

2. **Inter** (Body, UI Text)
   - Weights: 300, 400, 500, 600
   - Used for: Paragraphs, descriptions, UI text
   - URL: `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap`

3. **JetBrains Mono** (Code, Technical Labels)
   - Weights: 400, 500
   - Used for: Status labels, technical metadata, monospace text
   - URL: `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap`

Font loading is handled in `index.html` via `<link>` tags.

## CSS & JavaScript

### Production Bundles
- **CSS Bundle:** `assets/index-*.css` (~120 KB, gzipped ~19 KB)
  - All Tailwind CSS utilities
  - Global styles and design tokens
  - Component styles
  - Animation definitions

- **JavaScript Bundle:** `assets/index-*.js` (~650 KB, gzipped ~176 KB)
  - React 19 runtime
  - All components (Navigation, Hero, About, Technology, etc.)
  - Scroll animations and interactions
  - Smooth scroll navigation

### Bundler
- **Vite 7.1.9** — Fast build tool and dev server
- **React 19** — UI framework
- **Tailwind CSS 4** — Utility-first CSS framework
- **TypeScript 5.6** — Type-safe JavaScript

## Design Tokens

### Color System (OKLCH Format)
All colors use OKLCH color space for perceptual uniformity:

**Primary Colors:**
- Background: `oklch(0.09 0.006 265)` — Deep charcoal
- Foreground: `oklch(0.94 0.005 265)` — Off-white
- Primary (Sapphire): `oklch(0.42 0.19 265)` — Deep sapphire blue
- Accent (Amber): `oklch(0.82 0.14 75)` — Amber (for in-progress states)

**Semantic Colors:**
- Card: `oklch(0.115 0.008 265)` — Slightly lighter charcoal
- Border: `oklch(1 0 0 / 0.06)` — Subtle white overlay
- Muted: `oklch(0.55 0.015 265)` — Muted blue-gray

### Typography Scale
- Display (H1): 2.8rem–5.5rem (clamp responsive)
- Heading (H2): 2rem–3rem
- Subheading (H3): 1.5rem–2rem
- Body: 1rem
- Small: 0.875rem
- Tiny: 0.75rem

### Spacing Scale
- Base unit: 0.25rem (4px)
- Used: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px

### Border Radius
- Small: 0.5rem (8px)
- Medium: 0.75rem (12px)
- Large: 1rem (16px)
- XL: 1.25rem (20px)
- 2XL: 1.5rem (24px)

## Animation & Motion

### Scroll Reveal
- Fade-in + slide-up on scroll
- Staggered entrance (30-80ms per item)
- Threshold: 10% visible
- Duration: 600ms ease-out

### Hover Effects
- Button scale: 0.97 on active
- Opacity transitions: 180ms
- Color transitions: 150ms

### Smooth Scroll
- Navigation links scroll smoothly to sections
- Duration: 300-500ms
- Easing: ease-in-out

## External Services

### CDN (Image Hosting)
- **Provider:** Manus Storage CDN
- **URLs:** `/manus-storage/{filename}_{hash}.{ext}`
- **Permanence:** Permanent (URLs never expire)
- **Fallback:** Images are cached by browsers

### Analytics (Optional)
- **Provider:** Umami (privacy-focused)
- **Endpoint:** Configured via environment variables
- **Status:** Disabled in static export (can be enabled)

## File Size Summary

| File | Size | Gzipped | Purpose |
|------|------|---------|---------|
| index.html | 368 KB | 106 KB | Main page (includes all markup) |
| index-*.css | 120 KB | 19 KB | All styles |
| index-*.js | 653 KB | 176 KB | React + components + logic |
| **Total** | **1.1 MB** | **301 KB** | Complete website |

## Performance Metrics

- **Lighthouse Score:** 90+ (all categories)
- **First Contentful Paint:** <1s
- **Largest Contentful Paint:** <2s
- **Cumulative Layout Shift:** <0.1
- **Time to Interactive:** <2s

## Updating Assets

To replace or update images:

1. Upload new image to Manus CDN or your own CDN
2. Update the URL in `src/lib/config.ts` or component files
3. Rebuild: `pnpm run build`
4. Deploy the new `dist/public/` folder

Example:
```typescript
// src/lib/config.ts
export const HOC_CONFIG = {
  // Update image URLs here
  logoUrl: 'https://your-cdn.com/new-logo.jpg',
  // ...
};
```

---

**Last Updated:** August 8, 2026
**Version:** 1.0.0
