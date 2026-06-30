# Simbus Technologies Website

Pure HTML/CSS/JS static site. Specialist Kinaxis Maestro + Databricks consulting firm.

## Stack & Paths
- `css/styles.css` — single source of truth for ALL styles (no inline duplication)
- `js/main.js` — shared JS for all pages (nav injection, dark mode, mobile nav, scroll reveal, counters)
- All 9 HTML files at **project root** (not in a subfolder) → paths: `css/styles.css` · `js/main.js` · `assets/images/<file>`
- No framework — vanilla JS only. Alpine.js if complexity grows (drop-in script tag).

## Pages (9 total — all at root)
`index.html` · `about.html` · `services.html` · `kinaxis.html` · `databricks.html` · `careers.html` · `contact.html` · `roi-calculator.html` · `Kinaxis Planning One Page.html`

## Nav (injected via main.js — edit once, applies everywhere)
Home · Who We Are · Services ▾ (Kinaxis Maestro, Kinaxis® Planning One™, Databricks) · Careers · Benefit Calc · Contact Us · CTA: "Free Kinaxis Health Check" · Dark mode toggle
- Nav HTML lives **only** in `js/main.js` → `nav.innerHTML = ...`
- Active link auto-detected from `location.pathname`
- Each HTML has an empty `<nav></nav>` placeholder

## Design Tokens (`css/styles.css`)
```css
--clr-primary:#006fb7; --clr-navy:#014e82; --clr-dark:#012d4a;
--clr-bg:#ffffff; --clr-bg-alt:#f4f8fb; --clr-green:#1D9E75;
```
Font: Inter · `.sh2`: `clamp(2rem,3.8vw,3rem)` wt 900 · `.sec`: `padding:80px 5%`

## JS Features (main.js — runs in order)
1. Nav injection + active link detection
2. Dark mode toggle (`localStorage` key: `simbus-theme`, `[data-theme="dark"]` on `<html>`)
3. Mobile nav hamburger + dropdown toggle (≤960px)
4. Scroll reveal: `.reveal` `.reveal-left` `.reveal-scale` `.stagger`
5. Animated counters: `data-count`/`data-suffix` or `data-target`/`data-prefix`/`data-suffix`/`data-decimal`

## Nav Hover Effects (css/styles.css)
- Vertical left bar on hover: `::before` `scaleY(0→1)`
- Pill background: `background:rgba(255,255,255,.12)` on hover
- Dropdown: opacity+translateY animation (desktop); display:none/block (mobile via `.open` class)
- Mobile dropdown gap bug fix: `opacity:1!important; visibility:visible!important` inside `@media(max-width:960px)`

## Responsive Grid Utilities (css/styles.css)
```
.grid-2col   → 1fr 1fr  (→ 1fr at ≤960px)
.grid-4col   → repeat(4,1fr)  (→ 2col at ≤960px)
.dc-grid-2col → 1fr 1fr  (→ 1fr at ≤960px)
```
Use these classes instead of inline `style="grid-template-columns:..."` — inline styles can't respond to media queries.

## Rules
- **Never** duplicate CSS inline — `css/styles.css` only
- **Never** hardcode `grid-template-columns` in `style=""` attributes — use `.grid-2col`, `.grid-4col`, `.dc-grid-2col` or add a new utility class
- **Nav changes** → edit `js/main.js` nav.innerHTML only (not HTML files)
- **Footer changes** → edit `css/styles.css` + the footer HTML in each of the 9 files
- Dark mode: always `var(--clr-bg)` not `#fff`. Never redefine `:root` inline.
- `Kinaxis Planning One Page.html`: `html { font-size: 121% }` override is intentional — keep it
- Page-specific `<style>` blocks are allowed for hero backgrounds, page-only components, scoped overrides (e.g. `.ab-hero .eyebrow`)

## Trusted Partners Carousel (index.html)
- Logos at `assets/trusted_partners/` · No hyperlinks on logos
- Blackberry uses `.c-logo-white` (white bg + padding) — apply to any logo with dark/transparent bg
- Logo size: `height:62px` · Item padding: `0 48px`

## Company Info
Email: sales@simbustech.com · Phone: +91 8310047700 · Offices: Bangalore + Atlanta
Leadership: Krishna Kumar R. (CEO) · Rajith Rajagopal (CRO) · Royston Fernandes (Head of Pre-Sales)
Stats: 100% Client Satisfaction · 40+ Consultants · 100+ Projects · 15+ Years Supply Chain

## Run Locally
```bash
# From project root (Windows)
python -m http.server 8080
# open http://localhost:8080/index.html
```
