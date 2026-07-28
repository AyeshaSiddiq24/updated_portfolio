# Ayesha Siddiq — Portfolio

A fully independent React + Vite + Tailwind portfolio site. No backend, no
third-party platform dependency (no Base44) — everything, including the
resume PDF download, runs entirely in the browser.

## Run it locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Edit your content

Almost everything on the site — your name, tagline, About text, Experience
timeline, Projects, Skills, and contact links — lives in one file:

```
src/data/content.js
```

Change the text there and the site updates everywhere it's used. No need to
touch any component files for normal edits.

To swap your photo, replace `public/about-photo.jpg` with your own image
(same filename, or update the `photo` path in `content.js`).

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## Deploy to Vercel

1. Go to https://vercel.com and sign in (GitHub login is easiest)
2. Click **Add New → Project**
3. Import the GitHub repo you just pushed
4. Vercel auto-detects Vite — leave the defaults:
   - Build command: `npm run build` (auto-filled)
   - Output directory: `dist` (auto-filled)
5. Click **Deploy**

That's it — no environment variables needed, since there's no backend to
connect to. Every future `git push` to `main` will auto-redeploy on Vercel.

## Build for production manually

```bash
npm run build
npm run preview   # preview the production build locally
```

## Notes

- The resume download button generates a PDF client-side (via `jspdf`) from
  the same data in `content.js` — editing that file also updates the resume
  content.
- The live clock in the header/footer shows the current UTC time (matches
  the original site's "SYS_TIME" display).
- Light/dark theme toggle is in the top-right of the header.
