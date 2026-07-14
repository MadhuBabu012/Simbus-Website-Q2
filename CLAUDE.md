# Simbus Technologies Website

Pure HTML/CSS/JS static site. Specialist Kinaxis Maestro + Databricks consulting firm.

## Stack & Paths
- `css/styles.css` — single source of truth for ALL styles (no inline duplication)
- `js/main.js` — shared JS for all pages (nav injection, mobile nav, scroll reveal, counters)
- All 9 HTML files at **project root** → paths: `css/styles.css` · `js/main.js` · `assets/images/<file>`
- No framework — vanilla JS only.

## Pages (9 total — all at root)
`index.html` · `about.html` · `services.html` · `kinaxis.html` · `databricks.html` · `careers.html` · `contact.html` · `roi-calculator.html` · `Kinaxis Planning One Page.html`

## Nav (injected via main.js — edit once, applies everywhere)
Home · Who We Are · Services ▾ (Kinaxis Maestro, Kinaxis® Planning One™, Databricks) · Careers · Benefit Calc · Contact Us · CTA: "Free Kinaxis Health Check" · Hamburger (mobile only)
- Nav HTML lives **only** in `js/main.js` → `nav.innerHTML = ...`
- Active link auto-detected from `location.pathname`
- Each HTML has an empty `<nav></nav>` placeholder
- Nav links + CTA are **right-aligned** — `.nav-links` has `margin-left:auto`, `.nav-cta` has `margin-left:16px`
- Dropdown icons: inline SVG prefixed per item (supply chain, calendar, Databricks brand icon)

## Design Tokens (`css/styles.css`)
```css
--clr-primary:#006fb7; --clr-navy:#014e82; --clr-dark:#012d4a;
--clr-bg:#ffffff; --clr-bg-alt:#f4f8fb; --clr-green:#1D9E75;
```
- Font: Inter · Base: `font-size:14px` on `html` (scales all rem values)
- `.sh2`: `clamp(1.25rem,2.1vw,1.75rem)` wt 800 · `.eyebrow`: `1.15rem` wt 800
- `.sec`: `padding:80px 5%`

## Hero Entrance Animations (`css/styles.css`)
- `@keyframes heroSlideDown` applies to all hero sections on page load
- Eyebrow → delay 0.08s · H1 → delay 0.20s
- Hero classes covered: `.hero` `.ab-hero` `.sov-hero` `.sv-hero` `.cr-hero` `.ch` `.po-hero`
- Page-specific `@keyframes fadeUp` may exist in inline `<style>` — intentional, takes precedence

## JS Features (main.js)
1. Nav injection + active link detection
2. Mobile nav hamburger + dropdown toggle (≤960px)
3. Scroll reveal: `.reveal` `.reveal-left` `.reveal-scale` `.stagger`
4. Animated counters: `data-count`/`data-suffix` or `data-target`/`data-prefix`/`data-suffix`/`data-decimal`

## Nav Hover Effects
- Vertical left bar: `::before` `scaleY(0→1)`
- Pill background: `rgba(255,255,255,.12)` on hover
- Dropdown: opacity+translateY (desktop); `.open` class (mobile)
- Mobile dropdown gap fix: `opacity:1!important; visibility:visible!important` in `@media(max-width:960px)`

## Responsive Grid Utilities
```
.grid-2col    → 1fr 1fr       (→ 1fr at ≤960px)
.grid-4col    → repeat(4,1fr) (→ 2col at ≤960px)
.dc-grid-2col → 1fr 1fr       (→ 1fr at ≤960px)
```
Never use inline `style="grid-template-columns:..."` — use utility classes instead.

## Favicon (`favicon_io/` folder)
All 9 pages include:
```html
<link rel="icon" href="favicon_io/favicon.ico" sizes="any">
<link rel="icon" href="favicon_io/favicon-32x32.png" type="image/png" sizes="32x32">
<link rel="icon" href="favicon_io/favicon-16x16.png" type="image/png" sizes="16x16">
<link rel="apple-touch-icon" href="favicon_io/apple-touch-icon.png">
<link rel="manifest" href="favicon_io/site.webmanifest">
```
`site.webmanifest` — name: "Simbus Technologies", theme_color: "#006fb7"

## Assets
- Nav logo: `assets/images/shared/simbus-technologies.webp` · height: 48px
- Footer logo: `assets/images/shared/simbus-technologies.webp` · height: 48px · `filter:brightness(0) invert(1)`
- Favicon: `assets/images/shared/simbus-favicon.png` (also in `favicon_io/`)
- Trusted partners: `assets/trusted_partners/` · No hyperlinks · height:62px · Blackberry uses `.c-logo-white`
- Nav dropdown icons: inline SVG (no image files)

## Rules
- **Never** duplicate CSS inline — `css/styles.css` only
- **Never** hardcode `grid-template-columns` in `style=""` — use utility classes
- **Nav changes** → edit `js/main.js` nav.innerHTML only
- **Footer changes** → edit `css/styles.css` + footer HTML in each of the 9 files
- Dark mode: always `var(--clr-bg)` not `#fff`
- `Kinaxis Planning One Page.html`: `html { font-size: 121% }` override is intentional — keep it
- Page-specific `<style>` blocks allowed for hero backgrounds, page-only components, scoped overrides

## SEO
- Full strategy documented in `SEO-Strategy-Vercel-Sanity.md`
- Future stack: Astro + Sanity CMS + Vercel — keywords managed via Sanity SEO schema
- Current pages need: unique `<title>`, `<meta name="description">`, `<meta name="keywords">` per page
- `sitemap.xml` + `robots.txt` needed before going live

## Company Info
Email: sales@simbustech.com · Phone: +91 8310047700 · Offices: Bangalore + Atlanta
Leadership: Krishna Kumar R. (CEO) · Rajith Rajagopal (CRO) · Royston Fernandes (Head of Pre-Sales)
Stats: 100% Client Satisfaction · 40+ Consultants · 100+ Projects · 15+ Years Supply Chain

## Run Locally
```bash
python -m http.server 8080
# open http://localhost:8080/index.html
```
