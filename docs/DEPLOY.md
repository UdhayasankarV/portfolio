# Deploy guide — GitHub + Vercel

## A. Authenticate GitHub CLI (required once)

In PowerShell (from any folder):

```powershell
$env:Path = "$env:LOCALAPPDATA\gh-portable\bin;$env:Path"
# If gh.exe is nested, find it:
# Get-ChildItem "$env:LOCALAPPDATA\gh-portable" -Recurse -Filter gh.exe

gh auth login
```

Choose:

1. **GitHub.com**
2. **HTTPS**
3. **Login with a web browser**
4. Copy the one-time code, press Enter, approve in the browser

Confirm:

```powershell
gh auth status
```

Then tell the agent (or run the commands in section B yourself).

## B. Create repo and push

From `c:\Udhay\portfolio`:

```powershell
gh repo create portfolio --public --source=. --remote=origin --push
```

If `portfolio` is taken:

```powershell
gh repo create udhayasankar-portfolio --public --source=. --remote=origin --push
```

Repo URL will look like: `https://github.com/vudhayasankar/portfolio`

## C. Deploy on Vercel

### Option 1 — Vercel Dashboard (recommended)

1. Go to [https://vercel.com/signup](https://vercel.com/signup) and sign in with **GitHub**.
2. **Add New… → Project** → import `vudhayasankar/portfolio` (or `udhayasankar-portfolio`).
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`
6. Root directory: `.` (default)
7. Environment variables (optional):
   - `VITE_FORMSPREE_ENDPOINT` = your Formspree URL
   - `VITE_SITE_URL` = `https://your-project.vercel.app`
8. Click **Deploy**.
9. After deploy, copy the production URL and update:
   - `src/data/content.ts` → `siteMeta.canonicalUrl`
   - `index.html` canonical / Open Graph / JSON-LD URLs
   - `public/robots.txt` and `public/sitemap.xml`
10. Commit and push — Vercel redeploys automatically on every push to `main`.

### Option 2 — Vercel CLI

```powershell
npm i -g vercel
cd c:\Udhay\portfolio
vercel login
vercel
# Production:
vercel --prod
```

Link the project to the GitHub repo in the Vercel dashboard so future `git push` deploys automatically.

## D. Custom domain (later)

1. Vercel project → **Settings → Domains** → add your domain.
2. Add the DNS records Vercel shows (usually A/CNAME at your registrar).
3. Wait for SSL to provision.
4. Update canonical URLs in content / SEO files to the custom domain, then push.
