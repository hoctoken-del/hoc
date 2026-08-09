# HOC Super App — Deployment Guide

This is the self-contained static export of the HOC Super App. The production website uses the files in `index.html`, `assets/`, and `public/images/` and does not require a backend server.

## GitHub Pages

1. Upload the contents of this project to the `main` branch of your GitHub repository.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select **main** and **/ (root)**.
5. Save.

The site will be published at the repository's GitHub Pages address.

## Local development

Install Node.js 18+ and run:

```bash
npm install
npm run dev
```

For a production build:

```bash
npm run build
```

The build output is written to `dist/`.

## Local images

All HOC website images are stored in `public/images/` and are served from the project itself.

- `hoc-logo.jpg`
- `founder.jpg`
- `app-screen-1.jpg`
- `app-screen-2.jpg`
- `app-screen-3.jpg`
- `app-screen-4.jpg`
- `geo-power-1.jpg`
- `geo-power-2.jpg`
