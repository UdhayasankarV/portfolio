# Udhayasankar V — Portfolio

Personal portfolio for **Udhayasankar V**, Software Engineer (Chennai, India). Dark “Engineer’s Workbench” aesthetic with a light theme toggle, content-driven sections, and a GitHub → Vercel deploy path.

## Tech stack

- React 19 + Vite + TypeScript
- Tailwind CSS v4 (design tokens)
- Framer Motion
- lucide-react
- @fontsource (Sora, Inter, JetBrains Mono)

## Features

- Asymmetric hero with profile frame + mono API “code card”
- Floating glass navigation with active-section indicator
- Skills bento grid, experience timeline, case-study project cards
- AI-assisted development section with Context → Prompt → Review → Ship workflow
- Contact via mailto (optional Formspree via env)
- Dark / light themes, reduced-motion support, SEO + JSON-LD Person schema
- SPA rewrite for Vercel

## Setup

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start Vite dev server |
| `npm run build` | Typecheck + production build → `dist/` |
| `npm run preview` | Preview the production build |
| `npm run lint` | TypeScript project build check |

## Project structure

```
portfolio/
├── docs/DESIGN.md
├── public/          # favicon, robots.txt, sitemap, resume, images
├── src/
│   ├── components/  # Navbar, Hero, sections, ui/*
│   ├── data/content.ts   # ← edit all site copy here
│   ├── hooks/
│   ├── lib/
│   ├── App.tsx
│   └── index.css
├── .env.example
└── vercel.json
```

## Updating content

1. Edit `src/data/content.ts` (experience, projects, skills placeholders marked `[ADD: …]`).
2. Replace `public/images/profile.jpg` or `public/resume.pdf` if needed.
3. Commit and push to `main` — Vercel redeploys automatically.

## Environment variables

Copy `.env.example` to `.env` (never commit `.env`):

- `VITE_FORMSPREE_ENDPOINT` — optional Formspree form URL
- `VITE_SITE_URL` — optional canonical site URL

## Deployment (Vercel)

- Framework preset: **Vite**
- Build command: `npm run build`
- Output directory: `dist`
- `vercel.json` includes SPA rewrites

## Design

See [docs/DESIGN.md](docs/DESIGN.md) for palette, typography, and section layout.
