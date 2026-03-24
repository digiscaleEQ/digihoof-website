# DigiHoof Marketing Site

Static marketing site served via Cloudflare Workers at **digihoof.com**.

## Structure

```
cloudflare-pages/digihoof-marketing/
├── wrangler.toml        # Cloudflare Workers config
├── index.html           # Homepage (digihoof.com)
├── pricing.html         # /pricing
├── tutorial.html        # /tutorial
├── about.html           # /about
├── resources.html       # /resources
├── support.html         # /support
├── security.html        # /security
├── terms.html           # /terms
├── privacy.html         # /privacy
├── liability.html       # /liability
├── css/main.css         # Stylesheet
└── images/              # Logos and photos
```

## Deploy

```bash
cd cloudflare-pages/digihoof-marketing
npx wrangler deploy
```

That's it. No build step — files are uploaded directly to Cloudflare.

## Important

- **Git push does NOT deploy.** You must run `npx wrangler deploy` manually.
- **`wrangler.toml` must stay in this directory.** It sets `html_handling = "drop-trailing-slash"` which prevents 307 redirect loops on clean URLs like `/pricing`.
- **Clean URLs work automatically.** `/pricing` serves `pricing.html`, `/about` serves `about.html`, etc. No `_redirects` file needed.
- **Login links must use full URLs.** The "Clinic Login" button should link to `https://app.digihoof.com/login` (not `/login`).

## Domains

| URL | What it serves |
|---|---|
| `digihoof.com` | Marketing site (this project) |
| `www.digihoof.com` | Marketing site (this project) |
| `app.digihoof.com` | Clinic app (FastAPI on DigitalOcean) |

## Adding a new page

1. Create `newpage.html` in this directory
2. Link to it as `/newpage` (no `.html` extension) in nav/footer
3. Run `npx wrangler deploy`

## Rollback

Check previous versions in the Cloudflare dashboard:
**Workers & Pages → digihoof-marketing → Deployments**
