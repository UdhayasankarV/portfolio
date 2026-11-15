# Placeholders to fill

All editable copy lives in `src/data/content.ts`. Search for `[ADD:` in that file.

| Item | Location (approx.) | Notes |
| --- | --- | --- |
| Canonical / live URL | `siteMeta.canonicalUrl` | Also update `index.html`, `public/robots.txt`, `public/sitemap.xml` |
| JS/TS/React skills | `skills` → Languages & frameworks | Remove chip if not applicable |
| Authentication skill | `skills` → API & backend | Remove or specify (e.g. JWT) |
| Other tools | `skills` → Tools | e.g. Azure DevOps, Docker |
| Experience entry | `experience[0]` | Company, role, duration, location, 3–5 factual bullets |
| Projects (2–4) | `projects[]` | Name, summary, problem, role, tech, features, links |
| Available chip | `profile.availableForOpportunities` | Set `true` only when you want it shown |
| Formspree | `.env` → `VITE_FORMSPREE_ENDPOINT` | Optional contact form |

After filling placeholders, remove the `[ADD: …]` markers so they do not appear on the live site.
