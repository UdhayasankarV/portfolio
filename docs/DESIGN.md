# Design Note — Udhayasankar V Portfolio

## Profile (restated)

- **Name:** Udhayasankar V
- **Role:** Software Engineer (broad; not limited to backend)
- **Location:** Salem, India
- **Focus:** C# / ASP.NET Core Web API, SQL Server & PostgreSQL, REST APIs, debugging, AI-assisted development with Cursor
- **Links:** GitHub (`vudhayasankar`), LinkedIn, email, resume PDF

Content that is not yet provided (experience bullets, projects, optional skills) lives as clearly marked `[ADD: …]` placeholders in `src/data/content.ts`.

---

## Concept: “Engineer’s Workbench”

A dark, editorial, slightly technical identity — crafted, not templated. Think of an engineer’s desk after hours: ink surfaces, amber instrument light, mono labels, generous spacing. Distinct from white/minimal centered-tab portfolios (e.g. h2hcloud-style layouts): asymmetric hero, bento skills, timeline experience, case-study projects.

**Do not copy** the reference site’s layout, sections, colours, animations, or structure.

---

## Palette

| Token | Dark (default) | Light |
| --- | --- | --- |
| Background (ink) | `#0B0D12` | `#F6F4EF` |
| Surface | `#12151C` | `#FFFFFF` |
| Surface elevated | `#181C25` | `#EFECE4` |
| Text | `#E8EAF0` | `#12141A` |
| Muted | `#8A91A3` | `#5C6370` |
| Accent (amber) | `#F5A524` | `#C67D0A` |
| Secondary (teal, sparse) | `#5EEAD4` | `#0D9488` |
| Border | `rgba(232,234,240,0.08)` | `rgba(18,20,26,0.08)` |

Single warm amber accent; teal used sparingly for status/secondary highlights. No heavy rainbow gradients.

---

## Typography

| Role | Family | Notes |
| --- | --- | --- |
| Headings | **Sora** | Large, confident; tracking slightly tight on display sizes |
| Body | **Inter** | Readable at 16–18px; comfortable line-height |
| Labels / tags / code | **JetBrains Mono** | Chips, section labels, code card, meta |

Loaded via `@fontsource` packages (no render-blocking Google Fonts CSS).

---

## Section layout

1. **Floating glass nav** — pill bar, active-section indicator, smooth scroll; mobile slide-in drawer; theme toggle.
2. **Hero** — asymmetric split: oversized name + role + intro + CTAs (View Projects, Contact Me) | offset profile frame (amber outline) + floating mono “code card” (`GET /api/engineer`). No “Available for opportunities” chip until confirmed.
3. **About** — short professional summary from provided copy; location and focus areas.
4. **Skills** — bento grid by category; Lucide icons; mono chips; hover lift; no progress bars.
5. **Experience** — vertical timeline (accent line + scroll reveal); placeholder entry until filled.
6. **Projects** — large case-study cards with hover spotlight, tech chips, links; placeholders until filled.
7. **AI-Assisted Development** — honest strength narrative + 4-step workflow (Context → Prompt → Review → Ship); no productivity %.
8. **Contact** — email, GitHub, LinkedIn, Download Resume (if `resume.pdf` present), mailto / Formspree via env.
9. **Footer** — compact credit + year + links.

---

## Motion & interaction

- Framer Motion: fade/slide section reveals, staggered children, restrained hover/focus.
- Hero: subtle grid / cursor-spotlight; respect `prefers-reduced-motion`.
- Focus rings WCAG AA; 8px spacing scale; `rounded-2xl` cards; 1px subtle borders.

---

## Technical stack

React + Vite + TypeScript · Tailwind (design tokens) · Framer Motion · lucide-react · content-driven via `src/data/content.ts`.

---

## Quality targets

Original craft, AA contrast, Lighthouse 90+ (Perf / A11y / BP / SEO), GitHub → Vercel continuous deploy.
