# Simbus Technologies — Hosting & CMS Comparative Analysis
### Prepared for Tech Advisor Call | July 2026

---

## Executive Summary

The Simbus website is a **pure static HTML/CSS/JS site** — 9 pages, no server-side code, no database. This architecture is a strategic asset: it is faster, cheaper, more secure, and more AI-maintainable than a WordPress site of equivalent complexity. The recommendation is to host on a modern static hosting platform and optionally pair it with a lightweight headless CMS for content edits — avoiding WordPress entirely.

---

## The WordPress Question — Why Move Away

### What WordPress Was Built For
WordPress is a PHP-based CMS designed for blogs and database-driven sites. It runs server-side code on every page request, stores content in MySQL, and requires a PHP hosting environment.

### Why WordPress Is the Wrong Tool Here

| Pain Point | Detail |
|---|---|
| **Animations & custom UI** | WordPress themes fight against custom animations. Every update risks breaking injected CSS/JS. Page builders (Elementor, Divi) wrap everything in their own markup — your custom animations break on their next update. |
| **AI agent development** | Claude Code works directly on files. WordPress stores content in a database, not files — Claude cannot read or edit it. Every change requires WP admin access, not just file access. |
| **Performance** | WP pages are rendered server-side on every request. A static page loads in ~200ms. A default WordPress page: 800ms–2s before optimization. |
| **Security surface** | WordPress powers 43% of the web — it is the #1 target for automated attacks. Plugins introduce vulnerabilities weekly. A static site has zero server-side attack surface. |
| **Maintenance overhead** | WordPress requires constant updates: core, plugins, themes, PHP version, database backups. Static sites require none of this. |
| **Cost** | Managed WordPress hosting (WP Engine, Kinsta) starts at $25–$35/month and scales steeply. Static hosting starts at $0. |

### WordPress Pros (to be fair)
- Non-technical editors can update content via admin dashboard
- Large plugin ecosystem (SEO, forms, analytics)
- Familiar to many web agencies
- Gutenberg block editor is improving

### WordPress Cons (for this specific use case)
- Overkill for a brochure/consulting site — no dynamic content needed
- Plugin conflicts and security patches are a recurring cost
- Custom animations require fighting the theme system
- Cannot be managed by Claude Code agents
- Hosting costs 5–10x more than static alternatives
- Slower page load = worse SEO and worse user experience

---

## Hosting Platform Comparison

### Option 1: Vercel

**What it is:** Edge-first static hosting platform by the team behind Next.js. Deploys directly from GitHub. Global CDN with 100+ edge nodes.

| Factor | Detail |
|---|---|
| **Maintenance** | Zero-ops. Push to GitHub → auto-deploy in 30 seconds. No server to manage. |
| **Cost (Year 1)** | Free tier covers this site completely (100GB bandwidth, unlimited deploys) |
| **Cost (3–5 years)** | Likely $0–$20/month. Pro plan ($20/month) adds team members, password protection, analytics. |
| **Ease of onboarding** | Connect GitHub repo → done. Non-technical staff can trigger deploys by merging a PR. |
| **Security** | Automatic HTTPS, DDoS protection via Cloudflare-equivalent edge network, no server to patch. Security headers configurable in vercel.json. SOC 2 Type II certified. |
| **Content editing** | Requires editing HTML files or pairing with a CMS (see CMS section). |
| **Layout/Design control** | 100% — you own every pixel. No theme interference. |
| **Maintainability** | Git history = full audit trail. Rollback to any previous version in one click. |
| **Future-proofing** | Supports static HTML today; can migrate to Next.js, Astro, or any framework later without changing the hosting. |
| **No-code** | Deploy previews for every PR — stakeholders can review before going live. |
| **AI agent compatibility** | Native. Claude Code edits files → git push → Vercel deploys automatically. |
| **Analytics** | Built-in Web Analytics (free). |

**Vercel Pros:**
- Best-in-class deploy pipeline
- Preview URLs for every branch (show client changes before going live)
- Built-in analytics
- Zero configuration for static sites
- Claude Code integrates directly via GitHub

**Vercel Cons:**
- Serverless functions have cold start times (not relevant for static site)
- Free tier has soft limits on bandwidth (100GB) — fine for B2B consulting traffic
- Vendor lock-in if you use Vercel-specific features (not applicable here)

---

### Option 2: Netlify

**What it is:** Static hosting platform, the original pioneer of JAMstack. Very similar to Vercel, slightly older ecosystem.

| Factor | Detail |
|---|---|
| **Maintenance** | Zero-ops. Same GitHub → auto-deploy model as Vercel. |
| **Cost (Year 1)** | Free tier: 100GB bandwidth, 300 build minutes/month |
| **Cost (3–5 years)** | Pro plan: $19/month per member. Starter team: $19/month total. |
| **Ease of onboarding** | Slightly simpler UI than Vercel — easier for non-technical stakeholders to navigate the dashboard. |
| **Security** | HTTPS automatic, DDoS protection, SOC 2 Type II, role-based access control on Pro. |
| **Content editing** | Netlify CMS (now called Decap CMS) — open-source, Git-based, free. Editors use a web UI to edit content, changes committed to Git automatically. |
| **Layout/Design control** | 100% — same as Vercel. |
| **Maintainability** | Deploy previews, branch deploys, instant rollback. |
| **Future-proofing** | Supports any static framework. Edge Functions for future dynamic features. |
| **No-code** | Netlify CMS gives non-technical users a form-based editor (see CMS section). |
| **AI agent compatibility** | Native — same GitHub push model. |
| **Forms** | Built-in form handling (no backend needed) — useful for the contact page. |

**Netlify Pros:**
- Built-in form handling (contact forms work without a backend)
- Netlify CMS is free and open-source — no additional cost for content editing
- Slightly more mature identity/auth features
- Large community

**Netlify Cons:**
- Build times slightly slower than Vercel for large projects
- Analytics require paid plan
- UI feels slightly dated compared to Vercel

---

### Option 3: Cloudflare Pages

**What it is:** Cloudflare's static hosting product. Backed by the world's largest CDN (300+ edge locations).

| Factor | Detail |
|---|---|
| **Maintenance** | Zero-ops. GitHub → auto-deploy. |
| **Cost (Year 1)** | Free tier: unlimited bandwidth, unlimited requests, unlimited sites |
| **Cost (3–5 years)** | Free tier is extremely generous. Pro plan ($20/month) adds advanced analytics and Workers. |
| **Ease of onboarding** | Slightly more complex initial setup (DNS configuration). Better suited if Simbus already uses Cloudflare for DNS. |
| **Security** | Best-in-class DDoS protection (Cloudflare shields ~20% of all internet traffic). WAF, bot management, rate limiting. Most robust security of the three options. |
| **Content editing** | No native CMS — pair with Decap CMS or Sanity. |
| **Layout/Design control** | 100%. |
| **Maintainability** | Full Git-based deploy history. Instant rollbacks. |
| **Future-proofing** | Cloudflare Workers for edge computing. R2 storage. Very strong long-term vendor. |
| **No-code** | No built-in visual editor. |
| **AI agent compatibility** | Native. |

**Cloudflare Pages Pros:**
- Truly unlimited bandwidth on free tier (no soft limits)
- World's best DDoS protection included free
- Best performance globally (300+ PoPs)
- Zero egress fees
- If Simbus uses Cloudflare for DNS already — zero extra config

**Cloudflare Pages Cons:**
- No native CMS — requires separate CMS setup
- Slightly steeper learning curve than Vercel/Netlify
- Less polished developer experience
- Build system less mature

---

## Hosting Platform Summary Table

| Criteria | Vercel | Netlify | Cloudflare Pages |
|---|---|---|---|
| **Free tier bandwidth** | 100GB/month | 100GB/month | Unlimited |
| **Cost (Pro, 3-5yr avg/month)** | $20 | $19 | $20 |
| **Deploy speed** | Fastest | Fast | Fast |
| **Built-in CMS** | No | Yes (Decap CMS) | No |
| **Built-in forms** | No | Yes (free tier) | No |
| **Security rating** | Excellent | Excellent | Best-in-class |
| **Preview deployments** | Yes | Yes | Yes |
| **Rollback** | 1-click | 1-click | 1-click |
| **AI agent compatibility** | Native | Native | Native |
| **Onboarding ease** | Very easy | Easiest | Moderate |
| **Analytics** | Built-in (free) | Paid | Paid |
| **Recommended for Simbus** | **Primary pick** | **Strong alternative** | **If on Cloudflare already** |

---

## CMS Options (for non-technical content editors)

> **Context:** The current site is pure HTML. If a non-developer needs to update text/images without touching code, a CMS layer is needed. These options work alongside static hosting — they are NOT WordPress-style monoliths.

### Option A: Decap CMS (formerly Netlify CMS) — Free, Open Source

**What it is:** A Git-based CMS. Editors log in to a web UI, make changes, and those changes are committed to the GitHub repo automatically. Works with any static site.

**How it works for Simbus:**
- Developer defines which content fields are editable (e.g., hero text, team bios, case studies)
- Content editor logs in → sees a clean form UI → saves → Netlify/Vercel auto-deploys
- No database — content lives in Markdown/JSON files in the repo
- Full version history via Git

| Factor | Detail |
|---|---|
| **Cost** | Free forever (open source) |
| **Ease of use** | Medium — non-technical users can learn in 30 minutes |
| **Security** | GitHub OAuth — same security as your repo |
| **AI compatibility** | Claude can still edit files directly; CMS edits go through same pipeline |
| **Setup time** | 2–4 hours one-time setup |

**Pros:** Free, no vendor lock-in, Git-native, works with any hosting  
**Cons:** Setup requires developer time; UI is functional but not polished

---

### Option B: Sanity — Headless CMS

**What it is:** A modern headless CMS with a real-time collaborative editor. Content is stored in Sanity's cloud, delivered via API or used to generate static pages at build time.

| Factor | Detail |
|---|---|
| **Cost** | Free tier (up to 3 users, 500K API calls/month). Growth: $15/month per project. |
| **Ease of use** | Very polished. Non-technical editors feel at home in minutes. |
| **Security** | SOC 2, GDPR, role-based access control, API token management |
| **AI compatibility** | Sanity has a native Claude integration (Sanity AI Assist). Can generate content drafts with Claude directly in the editor. |
| **Setup time** | 4–8 hours one-time setup |
| **Future-proofing** | Excellent — structured content model grows with the site |

**Pros:** Best editor experience, AI-native, real-time collaboration, strong API  
**Cons:** Requires migrating content into Sanity's schema; adds a paid dependency; overkill if only 1–2 people edit content

---

### Option C: CloudCannon — Visual CMS for Static Sites

**What it is:** A visual CMS designed specifically for static HTML/CSS/JS sites. Editors can click on any element on the live page and edit it in place — like WordPress's visual editor, but for static sites.

| Factor | Detail |
|---|---|
| **Cost** | $45/month (Starter, up to 5 editors) |
| **Ease of use** | Easiest for non-technical users — visual in-page editing |
| **Security** | SOC 2, GDPR, role-based access |
| **AI compatibility** | Works alongside Claude Code — developer edits via code, editors use visual UI |
| **Setup time** | 2–4 hours |
| **Future-proofing** | Supports Hugo, Eleventy, Jekyll, plain HTML |

**Pros:** Most WordPress-like editing experience without WordPress complexity; visual editor is immediately intuitive  
**Cons:** Most expensive CMS option; $45/month adds up over 3–5 years (~$2,700 total)

---

## CMS Summary Table

| Criteria | Decap CMS | Sanity | CloudCannon |
|---|---|---|---|
| **Cost/month** | Free | $0–$15 | $45 |
| **Cost over 5 years** | $0 | $0–$900 | ~$2,700 |
| **Ease of use (non-dev)** | Medium | High | Very High |
| **Visual editing** | No | No | Yes |
| **AI integration** | Via Git | Native (Claude) | Via Git |
| **Setup effort** | Low | Medium | Low |
| **Vendor lock-in** | None | Medium | Medium |
| **Recommended** | Budget pick | Feature pick | WordPress-replacement feel |

---

## 3–5 Year Total Cost Projection

### Scenario A: Vercel (Free) + Decap CMS (Free)
| Year | Cost |
|---|---|
| Year 1 | $0 |
| Year 2 | $0 |
| Year 3 | $0 (upgrade to Pro if team grows: $240/yr) |
| **5-Year Total** | **$0 – $1,200** |

### Scenario B: Netlify Pro + Decap CMS (built-in)
| Year | Cost |
|---|---|
| Per year | $228 (Pro: $19/month) |
| **5-Year Total** | **~$1,140** |

### Scenario C: Vercel + Sanity Growth
| Year | Cost |
|---|---|
| Per year | $180 (Sanity: $15/month) |
| **5-Year Total** | **~$900** |

### Comparison: WordPress (WP Engine Managed)
| Year | Cost |
|---|---|
| Year 1 | $360–$600 (hosting) + $200–$500 (developer setup) |
| Per year after | $360–$600 (hosting) + $500–$2,000/yr (maintenance, plugin licenses, security patches) |
| **5-Year Total** | **$3,300 – $13,000+** |

> WordPress total cost of ownership over 5 years is **5x–20x higher** than static hosting alternatives.

---

## Who Maintains the Site After Development

This is the most important question — and the answer directly determines which hosting + CMS stack to choose. Below is a full breakdown: how many people are needed, what skills they actually require, and critically, what happens when the maintainer has **zero coding knowledge**.

---

### How Many People Are Actually Needed

The site is 9 static pages. Maintenance splits into two distinct types of work:

| Type of Work | Examples | Frequency | Coding Required? |
|---|---|---|---|
| **Content updates** | Update text, swap an image, change a stat, add a case study | Weekly / Monthly | No — with a CMS |
| **Structural changes** | Add a new page, change layout, add animations, redesign a section | Quarterly / As needed | Yes — or use Claude Code |

**Minimum team size: 1 person** — if that person either (a) uses a CMS for content or (b) uses Claude Code for everything.

**Realistic split for a small company:** 1 content editor (non-technical, uses CMS) + 1 developer on-call (or Claude Code agent) for structural changes. The developer does not need to be full-time — even 2–4 hours/month is sufficient for a stable static site.

---

### What If the Maintainer Has No Coding Knowledge?

This is the most common real-world scenario. Here is exactly what each path looks like for a non-technical person:

#### Path A — Use a Visual CMS (No Code at All)

With **CloudCannon** or **Sanity**, the maintainer never touches a single line of HTML, CSS, or JavaScript.

**What they CAN do without any coding knowledge:**
- Edit any text on any page (headings, paragraphs, stats, team bios)
- Swap images (drag and drop upload)
- Add/remove items from lists (services, case studies, team members)
- Publish/unpublish content
- Preview changes before they go live
- Roll back to a previous version if something looks wrong

**What they CANNOT do without a developer (or Claude Code):**
- Add a brand new page
- Change the layout or column structure
- Add or modify animations
- Update the navigation menu items
- Change fonts, colors, or design tokens

**Onboarding time for a non-technical person:**
- CloudCannon: ~30–45 minutes to be fully productive
- Sanity: ~45–60 minutes — slightly more powerful, slightly more UI to learn
- Decap CMS: ~1–2 hours — form-based, not visual, but still no coding required

> The key point: **the developer sets up the CMS once**. After that, the non-technical maintainer operates entirely within the CMS — they never open a code editor, never use a terminal, never touch GitHub.

---

#### Path B — Use Claude Code as the "Developer" (No In-House Coder Needed)

This is the most cost-effective path if Simbus does not have an internal developer.

**How it works in practice:**
1. A non-technical stakeholder (e.g., marketing manager) describes what they want in plain English
2. They type the request into Claude Code: *"Update the stats on the homepage — change 100+ Projects to 120+ Projects"*
3. Claude Code finds the right file, makes the change, and commits it to GitHub
4. Vercel/Netlify auto-deploys — the live site updates in 30 seconds
5. No coding knowledge required from the stakeholder at any point

**What Claude Code can handle without a human developer:**
- Text and content updates across any page
- Adding new sections or cards
- Updating images and assets
- New pages based on existing templates
- Navigation changes
- Style tweaks (colors, spacing, fonts)
- Adding animations or interactive components

**What Claude Code still needs human judgment for:**
- Major brand/design direction decisions
- New features that require external APIs or integrations
- Performance audits and strategic architecture decisions

**Skills needed to use Claude Code:** Ability to describe what you want in plain English. That is all.

---

#### Path C — Hybrid (Recommended for Simbus)

The most practical setup for a small B2B consulting firm:

| Role | Person | Tools Used | Time/Month |
|---|---|---|---|
| **Content Editor** | Marketing / BD team member | CMS web UI (no code) | 2–4 hrs |
| **Structural changes** | Claude Code agent | Claude Code + GitHub | On-demand, <30 min per request |
| **Oversight / approvals** | Any stakeholder | Vercel/Netlify preview URLs | 30 min |
| **Infrastructure** | Nobody — fully managed | Vercel/Netlify | 0 hrs |

**Total human hours needed per month: 3–5 hours. Zero coding knowledge required for day-to-day operation.**

---

### Skills Requirement Matrix by Scenario

| Scenario | Min. Team Size | Coding Knowledge Needed | CMS Needed | Claude Code Needed |
|---|---|---|---|---|
| Full AI-managed (Claude Code does everything) | 1 (any role) | None | No | Yes |
| CMS + visual editor (CloudCannon) | 1 content editor | None | Yes (CloudCannon) | Optional |
| CMS + form editor (Decap/Sanity) | 1 content editor | None | Yes | Optional |
| Developer-maintained (no CMS) | 1 junior developer | HTML/CSS basics | No | Optional |
| WordPress (for comparison) | 1 WP admin + 1 developer for custom work | WordPress admin skills + PHP for custom work | Built-in | No |

---

### What Happens If the One Maintainer Leaves?

This is the "bus factor" question — what if the person who knows the site leaves?

- **Static HTML site:** Any developer (or Claude Code) can open the files and understand the full site in under an hour. There is no hidden configuration, no database schema, no plugin interdependencies to untangle.
- **WordPress site:** Requires understanding the specific theme, which plugins are installed, custom PHP hooks, the database structure, and the hosting environment. Onboarding a new WordPress developer typically takes days, not hours.
- **With Claude Code:** The CLAUDE.md file in the repo documents the entire architecture. A new person (or AI agent) reads it and is productive immediately.

> **Static HTML is the lowest-risk architecture for team transitions.** The codebase is self-documenting and language-agnostic — any developer, anywhere, can pick it up instantly.

---

### How Long Does It Take a New Person to Understand the Codebase?

This is the real question from the tech advisor: *"If your team leaves and someone new comes in, how quickly can they get productive — and can they do something like add a new button?"*

#### The Codebase at a Glance

The Simbus site has a deliberately simple structure:

```
simbus-project/
├── css/
│   └── styles.css        ← ALL styles for every page (single file)
├── js/
│   └── main.js           ← ALL shared JS: nav, dark mode, animations, counters
├── assets/
│   └── images/           ← All images used across the site
├── index.html            ← Homepage
├── about.html
├── services.html
├── kinaxis.html
├── databricks.html
├── careers.html
├── contact.html
├── roi-calculator.html
└── Kinaxis Planning One Page.html
```

**Total files a new person needs to understand: 3 core files** — `styles.css`, `main.js`, and whichever HTML page they are working on. That is it. There is no build system, no framework, no compilation step, no environment variables, no package manager. Open the files in any text editor and everything is readable.

---

#### Time-to-Productive by Skill Level

| Person's Background | Time to Read the Full Codebase | Time to Make First Change | Time to Add a New Button |
|---|---|---|---|
| **Senior developer** (any language) | 20–30 minutes | Day 1 | 5 minutes |
| **Junior developer** (basic HTML/CSS knowledge) | 1–2 hours | Day 1 | 15–30 minutes |
| **Intern / bootcamp graduate** | Half a day | Day 1–2 | 1–2 hours |
| **Non-technical person using Claude Code** | Not required | Immediately | Describe it in English → done |
| **WordPress developer** (no static HTML experience) | 1–2 hours | Day 1 | 30 minutes (simpler than WP) |

> **Comparison:** A new developer joining a WordPress project of equivalent size typically needs 2–5 days to understand the theme hierarchy, plugin dependencies, custom post types, ACF fields, and deployment process before making a safe first change.

---

#### Concrete Walkthrough — "How Do I Add a New Button?"

Say a new person joins and their first task is: *"Add a 'Download Brochure' button to the Kinaxis page."*

**Step 1 — Find the right file (2 minutes)**
They open the project folder. They need `kinaxis.html`. The filename makes it obvious.

**Step 2 — Find where to place it (5 minutes)**
They open `kinaxis.html` in any text editor (VS Code, Notepad++, even Notepad). They read through the HTML — it is plain English tags (`<section>`, `<h2>`, `<p>`, `<a>`). They find the hero section or CTA section where the button should go.

**Step 3 — Write the button (2 minutes)**
They look at any existing button on the page. Every button already follows the same pattern:
```html
<a href="your-link.pdf" class="btn btn-primary">Download Brochure</a>
```
They copy the pattern, change the text and link. Done.

**Step 4 — Style it (0 minutes extra)**
The `btn` and `btn-primary` classes already exist in `styles.css`. The button automatically gets the correct Simbus blue color, hover effect, and responsive sizing. No CSS needs to be written.

**Step 5 — Preview it (1 minute)**
They run `python -m http.server 8080` in the project folder (one command, documented in CLAUDE.md). They open `localhost:8080/kinaxis.html` in a browser. They see the button exactly as it will appear live.

**Step 6 — Deploy it (1 minute)**
They commit the file to GitHub. Vercel/Netlify detects the change and auto-deploys. The live site updates in 30 seconds.

**Total time: under 15 minutes for someone with basic HTML knowledge.**

---

#### What If They Have Zero Coding Knowledge — Using Claude Code

If the new person has no coding background at all, the same task takes even less effort:

1. They open Claude Code in the project folder
2. They type: *"Add a Download Brochure button to the kinaxis.html hero section, linking to assets/simbus-brochure.pdf. Make it the same style as the existing CTA buttons."*
3. Claude Code reads the file, finds the right location, adds the button with the correct class names, and saves the file
4. They push to GitHub — site is live

**Zero HTML knowledge required. Zero CSS knowledge required.**

---

#### What the CLAUDE.md File Does for a New Person

Every project has a `CLAUDE.md` file at the root. This file is a human-readable instruction manual that covers:
- The full file structure and what each file does
- All CSS design tokens (colors, fonts, spacing) and where they live
- All JS features and how they work
- Rules the project follows (e.g., never write inline CSS, always use shared classes)
- Company info, page list, how to run the site locally

A new developer reads `CLAUDE.md` first. **After 15–20 minutes of reading it, they have a complete mental model of the entire project** — no guessing, no archaeology through the codebase.

> This document does not exist in a standard WordPress project. With WordPress, the "documentation" is whatever the previous developer remembered to write down, scattered across plugin settings, custom field configurations, and theme files.

---

#### New Person Onboarding Comparison: Static HTML vs WordPress

| Task | Static HTML (This Site) | WordPress (Equivalent Site) |
|---|---|---|
| **Understand the full codebase** | 30 min – 2 hrs | 2–5 days |
| **Add a button** | 5–15 minutes | 30–60 min (find right template, check theme functions, avoid breaking page builder) |
| **Add a new section** | 15–30 min | 1–3 hrs (page builder + theme conflicts) |
| **Change a color globally** | Edit one CSS variable in `styles.css` — 2 minutes | Find which theme setting, which plugin override, which inline style wins — 30–60 min |
| **Add a new page** | Duplicate an existing HTML file — 20 min | Create post/page, assign template, configure slug, check menus — 45–90 min |
| **Run the site locally** | One command (`python -m http.server 8080`) | Install XAMPP/Local, configure PHP, import database, set up wp-config.php — 1–3 hrs |
| **Understand what's deployed** | Open the HTML file — it IS what's deployed | Database state + theme + plugins + WP version all interact — no single source of truth |
| **Risk of breaking something** | Very low — HTML files are isolated | Medium–High — one plugin update can affect every page |

---

### Scenario Recommendations (Restated with Team Context)

#### Scenario 1: Simbus internal team maintains content, agency maintains code
- **Recommendation:** Vercel + Decap CMS or Netlify + Decap CMS
- Content editor uses CMS web UI — no coding needed
- Agency (or Claude Code) handles layout/design changes
- Cost: $0–$20/month
- **Team needed: 1 non-technical content editor + occasional developer (or Claude Code)**

#### Scenario 2: Simbus internal team maintains everything, no technical staff
- **Recommendation:** Netlify + CloudCannon or Sanity
- CloudCannon gives the most WordPress-like visual editing experience
- Non-technical staff productive within 30–45 minutes of onboarding
- Cost: $45–$65/month
- **Team needed: 1 non-technical person. No developer required for content work.**

#### Scenario 3: Agency/AI agents maintain everything
- **Recommendation:** Vercel (or Cloudflare Pages)
- Claude Code edits files → push to GitHub → auto-deploys in 30 seconds
- No CMS needed — all changes go through the AI agent in plain English
- Cost: $0/month
- **Team needed: 1 person who can describe changes in plain English. Zero coding.**
- **This is the most powerful and lowest-cost setup for AI-assisted development**

---

## Security Audit Comparison

| Security Factor | WordPress | Vercel/Netlify/CF Pages |
|---|---|---|
| **Attack surface** | PHP, MySQL, 50+ plugins each with CVEs | Zero — no server-side code |
| **Automated attacks** | High risk — bots constantly scan for WP installs | Not applicable — no login page, no database |
| **SSL/HTTPS** | Manual setup or Let's Encrypt plugin | Automatic, always on |
| **DDoS protection** | Requires Cloudflare or Sucuri plugin ($10–$30/month extra) | Built-in on all three platforms |
| **Security updates** | Weekly WordPress core + plugin updates required | None — static files don't have CVEs |
| **Data breach risk** | High (database stores user data, sessions) | None — no database |
| **Audit logs** | Plugin required ($) | Git history = complete audit trail, free |
| **WAF (Web App Firewall)** | Sucuri/Wordfence plugin ($99–$199/year) | Included free (Cloudflare Pages) or via vercel.json headers |
| **Compliance** | Requires additional plugins for GDPR/SOC 2 | Hosting platforms are SOC 2 certified; no extra config |

> **Static sites are inherently more secure** — there is no database to breach, no PHP to exploit, no admin login to brute-force.

---

## Future-Proofing Analysis

| Factor | Static (Vercel/Netlify) | WordPress |
|---|---|---|
| **Framework migration** | Can add React, Next.js, Astro on same host | Migration = full rebuild |
| **AI development** | Claude Code edits files natively | Requires WP API or database access |
| **Performance as site grows** | CDN scales infinitely, no server bottleneck | Requires hosting upgrade, caching plugins, CDN layer |
| **API integrations** | JavaScript fetch() to any API | Plugin-dependent or requires custom PHP |
| **Headless future** | Already headless — CMS is a layer, not the foundation | "Headless WordPress" adds complexity without solving the core issues |
| **Team onboarding** | Any developer can open HTML/CSS/JS files | Requires WordPress expertise (hooks, filters, theme hierarchy) |
| **Vendor dependency** | None for core stack; minimal for hosting | Deep dependency on WP ecosystem |

---

## Addressing Cross-Questions

**Q: "WordPress has millions of users and plugins — isn't it more reliable?"**
> WordPress is reliable for what it was built for: content-heavy sites managed by non-developers. For a B2B consulting site with custom animations, AI-assisted development, and a design-first approach, the plugin ecosystem is a liability, not an asset. Every plugin is a dependency that can break, conflict, or introduce a vulnerability.

**Q: "What if we want to add a blog or resources section later?"**
> Static hosting handles this natively. Decap CMS or Sanity can manage blog posts as Markdown files. The blog generates as static HTML at deploy time — faster than WordPress's dynamic rendering, and no database required.

**Q: "What happens if Vercel/Netlify goes down?"**
> These platforms have 99.99% uptime SLAs backed by multi-region CDN infrastructure. WordPress hosting (even managed) typically offers 99.9% (8.7 hours downtime/year vs. 52 minutes). More importantly, since the site is pure static files, you can move to any CDN in under an hour — there is no database to export.

**Q: "Can non-technical staff update the site without a developer?"**
> Yes — with Decap CMS, Sanity, or CloudCannon, a content editor can update text, images, and structured content through a web UI. The developer defines which fields are editable; the editor cannot accidentally break the layout (unlike WordPress where a bad plugin update can take down the entire site).

**Q: "What about SEO — doesn't WordPress have better SEO tools?"**
> WordPress SEO plugins (Yoast, RankMath) generate meta tags and sitemaps. These are trivially achievable in static HTML with manual meta tags or via Decap CMS fields. Static sites score higher on Core Web Vitals (Google's ranking factor) than WordPress sites by default — faster load = better SEO rank.

**Q: "We have a small IT team — who handles infrastructure?"**
> With Vercel or Netlify, there is no infrastructure to manage. No servers, no databases, no PHP versions, no plugin updates. The "infrastructure" is: push code to GitHub. The hosting platform handles the rest. Your IT team's involvement is zero after initial setup.

**Q: "What about forms on the contact page?"**
> Netlify provides built-in form handling on the free tier — no backend needed. For Vercel or Cloudflare Pages, a free service like Formspree or EmailJS handles form submissions. The current contact page can be wired up in 30 minutes.

**Q: "Can Claude AI really make changes to the site automatically?"**
> Yes — and this is a key differentiator. Claude Code has direct access to the HTML/CSS/JS files. A business stakeholder can say "add a new case study to the kinaxis page" and Claude updates the file, commits to GitHub, and the site deploys in 30 seconds. With WordPress, Claude would need database access and WP API credentials and would still fight the theme system. With static HTML, the file IS the content.

---

## Recommendation

| Priority | Recommendation |
|---|---|
| **Best overall** | **Vercel + Decap CMS** — $0/month, best AI compatibility, enterprise-grade hosting |
| **Best for non-technical editors** | **Netlify + CloudCannon** — $64/month, most intuitive editing experience |
| **Best security** | **Cloudflare Pages** — free, unmatched DDoS protection, unlimited bandwidth |
| **Avoid** | WordPress — 5–20x higher cost, security burden, fights AI-assisted development |

**For Simbus specifically:** Given that the development model involves Claude Code agents making changes, and that the site is already built as pure static HTML, **Vercel is the natural fit**. It has the best CI/CD pipeline, native GitHub integration, preview deployments for client review, and the lowest long-term cost. Pair it with **Decap CMS** if non-technical staff need to edit content, or leave it as developer-managed if all changes go through Claude Code.

---

*Document prepared for Simbus Technologies tech advisor call | July 2026*
*Site: 9-page static HTML/CSS/JS | No framework | No database | No backend*
