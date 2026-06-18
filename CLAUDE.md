# Simbus Technologies Website

Pure HTML/CSS/JS site. No frameworks. Specialist Kinaxis Maestro + Databricks consulting firm.

## Stack
- Shared CSS: `css/styles.css` — single source of truth
- Shared JS: `js/main.js`
- All HTML in `html/`, assets in `assets/images/` and `assets/video/`

## Paths (from any HTML file)
`../css/styles.css` · `../js/main.js` · `../assets/images/<file>` · `../assets/video/<file>`

## Pages (9 total in `html/`)
`index.html` · `about.html` · `services.html` · `kinaxis.html` · `databricks.html` · `careers.html` · `contact.html` · `roi-calculator.html` · `Kinaxis Planning One Page.html`

## Nav
Logo → index · Home · Who We Are · Services (dropdown: services, kinaxis, **Planning One Page**, databricks) · Careers · ROI Calculator · Contact · CTA: "Free Kinaxis Health Check" · Dark mode toggle (localStorage key: `simbus-theme`)

## Design Tokens (in `css/styles.css`)
```css
--clr-primary: #006fb7;  --clr-navy: #014e82;  --clr-dark: #012d4a;
--clr-bg: #ffffff;  --clr-bg-alt: #f4f8fb;  --clr-green: #1D9E75;
```
Font: Inter · `.sh2`: `clamp(2rem,3.8vw,3rem)` weight 900 · `.sec`: `padding: 80px 5%`

## JS Features (`main.js`)
Dark mode toggle · Mobile nav (≤960px) · Scroll reveal (`.reveal`, `.reveal-left`, `.reveal-scale`, `.stagger`) · Animated counters (`data-count`/`data-suffix` or `data-target`/`data-prefix`/`data-suffix`/`data-decimal`)

## Dark Mode
`[data-theme="dark"]` on `<html>`. Always use `var(--clr-bg)` not `#fff`. Never redefine `:root` color vars inline — it breaks dark mode.

## Rules
- Never duplicate CSS inline — link shared stylesheet only
- Nav/footer changes must be applied to **all 9 HTML files**
- `services.html` still uses inline styles (not yet migrated)
- Some pages have leftover inline `<style>` `:root` blocks — remove when editing
- `Kinaxis Planning One Page.html` is migrated: uses `../css/styles.css` + `../js/main.js` + a minimal page-specific `<style>` block (`.po-*` classes and hero background image); override `html { font-size: 121%; }` is intentional for this page

## Company Info
Email: sales@simbustech.com · Phone: +91 8310047700 · Offices: Bangalore + Atlanta
Leadership: Krishna Kumar R. (CEO) · Rajith Rajagopal (CRO) · Royston Fernandes (Head of Pre-Sales)
Stats: 100% Client Satisfaction · 40+ Consultants · 100+ Projects · 15+ Years Supply Chain

## Run Locally
```bash
python3 -m http.server 8080
# open http://localhost:8080/html/index.html
```
