# DigiHoof Marketing Website

Astro-powered static marketing site for DigiHoof, deployed via Cloudflare Pages.

## Architecture

- **Framework**: [Astro](https://astro.build/) v4 (static output)
- **Deploy**: Cloudflare Pages (auto-builds on `main` push)
- **Content**: Markdown content collections for Resources
- **Styling**: CSS custom properties with DigiHoof brand tokens

## Development

```bash
npm install
npm run dev      # Start dev server at localhost:4321
npm run build    # Build to dist/
npm run preview  # Preview production build
```

## Project Structure

```
src/
  components/
    site/          # Header, Footer
    resources/     # ResourceCard, FeaturedResource, RelatedResources
    seo/           # SEO meta, structured data
    ui/            # Button, CTA, Breadcrumb
  config/
    brand.ts       # Brand design tokens (colors, fonts, spacing)
    navigation.ts  # Nav items and footer columns
    resources.ts   # Resources section configuration
  content/
    resources/     # Markdown resource articles (content collection)
    config.ts      # Content collection schema
  layouts/
    BaseLayout.astro
    ResourceArticleLayout.astro
  lib/
    seo.ts         # SEO utility functions
    readingTime.ts # Reading time calculator
    relatedResources.ts
  pages/           # File-based routing
  styles/
    global.css     # All styles with CSS custom properties
public/
  images/          # Static assets
  _redirects       # Cloudflare Pages redirect rules
```

## TSP Publishing Contract

TSP publishes resources to `src/content/resources/{slug}.md` with frontmatter
matching the schema in `src/content/config.ts`.

**Required frontmatter fields**: `title`, `excerpt`, `publishDate`, `author`, `draft`

**Content root**: `src/content/resources`

## Cloudflare Pages Build Config

- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Node.js version**: 20.x

## Part of TSP Website Management

This site is managed through [The Social Port](https://github.com/digiscaleEQ/TheSocialPort)
workspace publishing system. The same architecture pattern is reusable for Daniel Equine,
EQPACS, and future client sites.

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
