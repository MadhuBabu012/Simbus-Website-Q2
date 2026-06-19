# Simbus Technologies — Website Deployment Guide

> A complete reference covering all deployment-related questions for the Simbus Technologies website.

---

## Table of Contents

1. [Can I Deploy My Site on Sanity?](#1-can-i-deploy-my-site-on-sanity)
2. [What is Sanity CMS?](#2-what-is-sanity-cms)
3. [Sanity Pricing — What if I Get 10 Users?](#3-sanity-pricing--what-if-i-get-10-users)
4. [Where Should I Deploy My Site?](#4-where-should-i-deploy-my-site)
5. [Hosting Options Besides Netlify](#5-hosting-options-besides-netlify)
6. [Is Deploying Just Compute + Database?](#6-is-deploying-just-compute--database)
7. [Do I Need Node.js to Make My Site Dynamic?](#7-do-i-need-nodejs-to-make-my-site-dynamic)
8. [Recommended Setup for Simbus Technologies](#8-recommended-setup-for-simbus-technologies)

---

## 1. Can I Deploy My Site on Sanity?

**No — Sanity is not a hosting platform.**

Sanity is a **headless CMS (Content Management System)** used for managing and editing content. It is not meant to host or serve your website to visitors.

For deploying (hosting) your site, you need a separate platform like **Netlify, Vercel, or Cloudflare Pages.**

| Tool | Purpose |
|---|---|
| **Sanity** | Managing content (text, images, pages) |
| **Netlify / Vercel** | Hosting and serving the website |

---

## 2. What is Sanity CMS?

Sanity is a **headless CMS** — it stores and manages your website content, and your site fetches that content via an API.

### Why Use Sanity?

Non-technical staff can log into **Sanity Studio** (a clean web-based admin panel) and edit content without touching any code.

### What Staff See in Sanity Studio

```
📄 Pages
  ├── Home
  ├── About
  ├── Services
  └── Contact

🖼️ Images / Assets
👥 Team Members
```

They click, edit text, swap images, hit **Publish** — no code, no FTP, no Git.

### What It Takes to Integrate Sanity

| Step | Description |
|---|---|
| Create Sanity project & define schemas | Define what content is editable |
| Rewrite HTML pages to fetch from Sanity API | Replace hardcoded text with `fetch()` calls |
| Deploy site on Netlify/Vercel | Point domain, done |
| Give staff Sanity Studio access | Add them as editors in Sanity dashboard |

### Before vs After Sanity Integration

**Before (hardcoded HTML):**
```html
<h1>Specialist Kinaxis Maestro + Databricks Consulting</h1>
<p>100% Client Satisfaction · 40+ Consultants</p>
```

**After (fetches from Sanity):**
```js
const data = await sanityClient.fetch(`*[_type == "homePage"][0]`)
document.querySelector('h1').textContent = data.heading
```

### Is Sanity Worth It?

| Situation | Recommendation |
|---|---|
| Staff update content frequently (weekly/monthly) | Yes, use Sanity |
| Content changes rarely (a few times a year) | Overkill — not needed |
| Want a polished long-term CMS | Yes, use Sanity |

---

## 3. Sanity Pricing — What if I Get 10 Users?

### Important Clarification

Sanity pricing is based on **editor users** (people who log into Sanity Studio) — **not website visitors.**

**10 people visiting your website = zero cost impact on Sanity.**

### Sanity Free Plan Limits

| Limit | Free Plan | Simbus Usage |
|---|---|---|
| Studio editor users | 2 users | 1–2 staff who edit content |
| API requests/day | 10,000 | 10 visitors = ~50–100 requests max |
| Bandwidth | 5GB/month | Fine for a company site |
| Assets storage | 20GB | Fine for images/videos |

### When Do You Need to Pay?

| Scenario | Cost |
|---|---|
| Up to 2 editor users | Free |
| 3+ editor users | $15/month (Growth plan) |
| Very high traffic (10k+ API calls/day) | Growth plan |

**Conclusion:** For Simbus Technologies, the **free plan is more than enough.**

---

## 4. Where Should I Deploy My Site?

### Recommended: Netlify (Free)

- Drag & drop your project folder — live in 2 minutes
- Auto-deploys when you push to Git
- Free SSL certificate included
- Works perfectly with Sanity

### Full Setup Picture

```
Any CMS like Sanity Studio        →  Staff edit content here
      ↓ (API)
Your HTML/JS site    →  Fetches & displays content
      ↓
Hosting sites like Netlify, Vercel, 
      cloudFlare pages, hostinger    →  Hosts & serves the site live
      ↓
simbustech.com       →  Your custom domain
```

### Cost Summary

| Service | Cost |
|---|---|
| Sanity (CMS) | Free |
| Netlify (Hosting) | Free |
| Domain (simbustech.com) | ~$10–15/year |

**Total: essentially free except the domain.**

---

## Hosting Options

### Free Options

| Platform | Setup | Best For |
|---|---|---|
| **Vercel** | Git-connected | Best Netlify alternative, very fast |
| **GitHub Pages** | Push to repo | Simple, no extra account needed |
| **Cloudflare Pages** | Git-connected | Fastest global CDN performance |
| **Firebase Hosting** | CLI deploy | Google ecosystem |
| **Render** | Git-connected | Good free tier |

### Paid Options (Better for Business)

| Platform | Cost | Why Consider |
|---|---|---|
| **AWS S3 + CloudFront** | ~$1–5/mo | Enterprise-grade, very reliable |
| **Google Cloud Storage** | ~$1–5/mo | Google infrastructure |
| **DigitalOcean** | $5/mo | Simple, developer-friendly |
| **Azure Static Web Apps** | Free tier available | Microsoft ecosystem |

### Top Recommendation for Simbus Technologies

**Cloudflare Pages** — free, fastest global performance, professional, pairs perfectly with Sanity.

---

## 6. Is Deploying Just Compute + Database?

**Not for a static site like Simbus Technologies.**

### Static Site (Your Current Site — Pure HTML/CSS/JS)

```
No compute needed
No database needed
Just file storage + CDN delivery
```

- Your HTML/CSS/JS files are just **files**
- A server simply **serves those files** to the browser
- The browser does all the work
- No processing happens on the server

### Dynamic Site (WordPress, Node.js, etc.)

```
Needs compute  → server to run code
Needs database → to store content
Server processes requests and builds pages
```

### What Netlify/Vercel Actually Do for Static Sites

1. **Store your files** (HTML, CSS, JS, images)
2. **Deliver them fast** via CDN (servers worldwide)
3. **Handle SSL/HTTPS** for you
4. **Point your domain** to those files

That's it — no compute, no database needed.

### Overview

Since your static site has no database, Sanity fills that gap:

```
Sanity    →  Database (stores your content)
Vercel   →  File server (serves your HTML/JS)
Browser   →  Fetches from both, renders the page
```

---

## 7. Do I Need Node.js to Make My Site Dynamic?

**It depends on what "dynamic" features you need.**

### Level 1: Dynamic Content via CMS — No Node.js Needed

Staff edit content in Sanity → your JS fetches it → displays on page.

```js
// Just vanilla JS fetch — no Node.js needed
const data = await fetch('https://your-sanity-api.io/query')
document.querySelector('h1').textContent = data.heading
```

### Level 2: Backend Features — Node.js May Be Needed

| Feature | Needs Backend? |
|---|---|
| CMS content (Sanity) | No |
| Contact form emails | No (use Formspree) |
| User login/accounts | Yes |
| ROI Calculator (save results) | Yes |
| Blog with comments | Yes |
| Payment processing | Yes |
| Database queries | Yes |

### For Simbus Technologies Specifically

```
Contact form        →  Formspree (free, no Node.js)
ROI Calculator      →  Client-side JS math (no backend needed)
Content management  →  Sanity (no Node.js)
Everything else     →  Static HTML/CSS/JS
```

### If You Do Need a Backend — Use Serverless Functions

The modern approach is **not a full Node.js server** — it's small serverless functions:

```
Vercel / Netlify
  ├── Your static HTML/CSS/JS files
  └── /api/contact.js  ← small Node.js function (runs only when called)
```

You write small functions, the platform runs them — no server to manage.

### Contact Form Without Node.js — Formspree

```html
<form action="https://formspree.io/f/your-id" method="POST">
  <input type="email" name="email" placeholder="Your email" />
  <textarea name="message" placeholder="Your message"></textarea>
  <button type="submit">Send</button>
</form>
```

Submissions are emailed directly to `sales@simbustech.com` — no backend needed.

---

## 8. Recommended Setup for Simbus Technologies

### Final Architecture

```
┌─────────────────────────────────────────────┐
│           SIMBUS TECHNOLOGIES WEBSITE       │
├─────────────────────────────────────────────┤
│  Sanity CMS (Free)                          │
│  → Staff edit content via Sanity Studio     │
│  → Stores text, images, page content        │
├─────────────────────────────────────────────┤
│  Cloudflare Pages / Vercel (Free)           │
│  → Hosts HTML/CSS/JS files                  │
│  → Serves site to visitors via CDN          │
├─────────────────────────────────────────────┤
│  Formspree (Free)                           │
│  → Handles contact form submissions         │
│  → Emails to sales@simbustech.com           │
├─────────────────────────────────────────────┤
│  Custom Domain: simbustech.com (~$12/year)  │
└─────────────────────────────────────────────┘
```

### Total Monthly Cost

| Service | Cost |
|---|---|
| Sanity CMS | $0 |
| Hosting (Cloudflare/Vercel) | $0 |
| Contact Form (Formspree) | $0 |
| Domain | ~$1/month (~$12/year) |
| **Total** | **~$1/month** |

### What Staff Can Do (Without Touching Code)

- Edit any text content on any page
- Swap out images
- Update team member info
- Update stats (consultants, projects, years)
- Add/remove services
- Publish changes instantly

---

*Document created: June 2026*
*Project: Simbus Technologies Website*
*Stack: Pure HTML/CSS/JS + Sanity CMS + Cloudflare Pages*


