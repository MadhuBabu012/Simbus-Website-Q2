# SEO Strategy — Simbus Technologies
**Stack: Astro + Sanity CMS + Vercel**

---

## Where Keywords Live

| Layer | Tool | Who Manages |
|---|---|---|
| Content & Keywords | Sanity Studio | Marketing (Rajith, Royston) |
| HTML Meta Tags | Astro `Base.astro` | Developer (one-time setup) |
| Hosting & Crawl | Vercel + `vercel.json` | Developer (one-time setup) |
| Sitemap & Robots | Astro sitemap plugin | Auto-generated on every build |

---

## 1. Sanity CMS — SEO Schema

Add this SEO object to every page schema in Sanity Studio so marketing can update keywords without code changes.

```js
// sanity/schemas/seo.js
export default {
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    {
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'Recommended: 50–60 characters',
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'Recommended: 150–160 characters. Shown in Google search results.',
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'string',
      description: 'Comma-separated. e.g. Kinaxis Maestro consulting, supply chain planning India',
    },
    {
      name: 'ogImage',
      title: 'Social Share Image',
      type: 'image',
      description: 'Shown when page is shared on LinkedIn, WhatsApp etc. Recommended: 1200x630px',
    },
    {
      name: 'noIndex',
      title: 'Hide from Google',
      type: 'boolean',
      description: 'Turn ON only for pages you do not want indexed (e.g. thank-you pages)',
      initialValue: false,
    },
  ],
}
```

---

## 2. Astro — Base Layout (Renders Meta Tags)

```astro
---
// src/layouts/Base.astro
const { seo } = Astro.props;
const defaultTitle       = 'Simbus Technologies — Kinaxis & Databricks Consulting';
const defaultDescription = 'Expert Kinaxis Maestro and Databricks consulting firm. 100+ projects, 40+ consultants. Offices in Bangalore and Atlanta.';
const defaultImage       = '/assets/images/shared/og-cover.jpg';
---
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Primary SEO -->
  <title>{seo?.metaTitle || defaultTitle}</title>
  <meta name="description" content={seo?.metaDescription || defaultDescription}>
  <meta name="keywords"    content={seo?.keywords || 'Kinaxis Maestro consulting, Databricks consulting, supply chain planning'}>
  <meta name="robots"      content={seo?.noIndex ? 'noindex, nofollow' : 'index, follow'}>

  <!-- Open Graph (LinkedIn, WhatsApp, Slack previews) -->
  <meta property="og:title"       content={seo?.metaTitle || defaultTitle}>
  <meta property="og:description" content={seo?.metaDescription || defaultDescription}>
  <meta property="og:image"       content={seo?.ogImage?.asset?.url || defaultImage}>
  <meta property="og:type"        content="website">

  <!-- Canonical URL (prevents duplicate content penalty) -->
  <link rel="canonical" href={Astro.url.href}>

  <!-- Favicon -->
  <link rel="icon"             href="/favicon_io/favicon.ico" sizes="any">
  <link rel="icon"             href="/favicon_io/favicon-32x32.png" type="image/png" sizes="32x32">
  <link rel="icon"             href="/favicon_io/favicon-16x16.png" type="image/png" sizes="16x16">
  <link rel="apple-touch-icon" href="/favicon_io/apple-touch-icon.png">
  <link rel="manifest"         href="/favicon_io/site.webmanifest">

  <link rel="stylesheet" href="/styles/global.css">
</head>
```

---

## 3. Vercel — `vercel.json`

Place this file at the project root.

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Robots-Tag",         "value": "index, follow" },
        { "key": "X-Content-Type-Options","value": "nosniff" },
        { "key": "X-Frame-Options",       "value": "SAMEORIGIN" }
      ]
    },
    {
      "source": "/assets/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ]
}
```

---

## 4. Astro Config — Auto Sitemap

```js
// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import sanity from '@sanity/astro';

export default defineConfig({
  site: 'https://simbustech.com',
  integrations: [
    sitemap(),
    sanity({
      projectId: process.env.SANITY_PROJECT_ID,
      dataset:   process.env.SANITY_DATASET,
      useCdn:    true,
    }),
  ],
});
```

This auto-generates `sitemap.xml` on every Vercel build — no manual updates needed.

---

## 5. `robots.txt`

Place at `public/robots.txt`:

```
User-agent: *
Allow: /
Sitemap: https://simbustech.com/sitemap-index.xml
```

---

## 6. Structured Data (Schema.org)

Add this to `Base.astro` for Google to understand Simbus as a business:

```astro
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Simbus Technologies",
  "description": "Kinaxis Maestro and Databricks consulting firm",
  "url": "https://simbustech.com",
  "telephone": "+91-8310047700",
  "email": "sales@simbustech.com",
  "address": [
    {
      "@type": "PostalAddress",
      "addressLocality": "Bangalore",
      "addressCountry": "IN"
    },
    {
      "@type": "PostalAddress",
      "addressLocality": "Atlanta",
      "addressCountry": "US"
    }
  ],
  "sameAs": [
    "https://linkedin.com/company/simbustech"
  ]
}
</script>
```

---

## 7. Google Search Console (One-Time Setup)

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property → enter `https://simbustech.com`
3. Verify via Vercel DNS (add TXT record)
4. Submit sitemap → `https://simbustech.com/sitemap-index.xml`
5. Google indexes all pages within 3–7 days

---

## 8. Priority Keywords Per Page

| Page | Primary Keyword | Secondary Keywords |
|---|---|---|
| Home | Kinaxis Maestro consulting firm | supply chain consulting India, Kinaxis partner |
| Kinaxis Maestro | Kinaxis Maestro implementation | Kinaxis AMS support, Kinaxis Expert Pod |
| Kinaxis Planning One | Kinaxis Planning One partner | supply chain planning SaaS |
| Databricks | Databricks consulting India | Databricks implementation, data engineering |
| About | supply chain consulting company Bangalore | Simbus Technologies, Krishna Kumar |
| Careers | supply chain jobs Bangalore | Kinaxis jobs India, Databricks careers |
| Contact | Kinaxis consulting contact | supply chain consulting enquiry |

---

## 9. Build & Deploy Flow

```
Rajith updates keywords in Sanity Studio
        ↓
Sanity webhook triggers Vercel rebuild
        ↓
Astro fetches content → injects meta tags → generates sitemap
        ↓
Vercel deploys updated static site (~30 seconds)
        ↓
Google crawls updated meta tags on next visit
```

---

## Environment Variables (Vercel Dashboard)

| Variable | Value |
|---|---|
| `SANITY_PROJECT_ID` | From sanity.io project settings |
| `SANITY_DATASET` | `production` |
| `SANITY_API_VERSION` | `2024-01-01` |

Add these in: Vercel Dashboard → Project → Settings → Environment Variables

---

*Last updated: July 2026*
