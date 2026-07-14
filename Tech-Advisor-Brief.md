# Simbus Technologies — Hosting & CMS Brief
### For Tech Advisor Review | July 2026

---

## What We Built

A **pure static HTML/CSS/JS website** — 9 pages, no server, no database, no framework.
- 3 core files drive the entire site: `styles.css`, `main.js`, and individual HTML pages
- Developed with **Claude Code AI agents** that edit files directly
- Currently un-hosted — seeking the right platform before go-live

---

## The Core Question: Should We Stay on WordPress?

**Short answer: No.** Here's why it matters for Simbus specifically:

| Issue | WordPress | This Static Site |
|---|---|---|
| Custom animations | Breaks on every plugin update | Works natively, always |
| AI agent development | Cannot edit a WP database | Claude edits files directly |
| Page load speed | 800ms–2s (server-rendered) | ~200ms (CDN-served) |
| Security risk | #1 attack target on the web | Zero server-side attack surface |
| 5-year hosting cost | $3,300 – $13,000+ | $0 – $1,200 |
| New dev onboarding | 2–5 days | 30 min – 2 hrs |

---

## Hosting Options — Quick Comparison

| | Vercel | Netlify | Cloudflare Pages |
|---|---|---|---|
| Free bandwidth | 100GB/mo | 100GB/mo | **Unlimited** |
| Pro cost/month | $20 | $19 | $20 |
| Built-in CMS | No | Yes (free) | No |
| Built-in forms | No | **Yes** | No |
| Security | Excellent | Excellent | **Best-in-class** |
| Preview deployments | Yes | Yes | Yes |
| AI agent fit | Native | Native | Native |
| Best for | Developer-led | Non-technical editors | Max security / budget |

**Our pick: Vercel** — best CI/CD pipeline, GitHub-native, preview URLs for client approval, Claude Code integrates directly.

---

## CMS Options — If Non-Technical Staff Need to Edit Content

| | Decap CMS | Sanity | CloudCannon |
|---|---|---|---|
| Cost/month | **Free** | $0–$15 | $45 |
| 5-year cost | **$0** | ~$900 | ~$2,700 |
| Coding needed | None | None | None |
| Visual editing | No | No | **Yes** |
| Onboarding time | 1–2 hrs | 45–60 min | **30–45 min** |
| AI (Claude) integration | Via Git | Native | Via Git |

**Our pick: Decap CMS (free)** if budget is priority. **CloudCannon ($45/mo)** if non-technical editors need the most intuitive, WordPress-like experience.

---

## 5-Year Cost Snapshot

| Stack | 5-Year Total |
|---|---|
| Vercel (free) + Decap CMS (free) | **$0** |
| Netlify Pro + Decap CMS | ~$1,140 |
| Vercel + Sanity | ~$900 |
| **WordPress (managed hosting)** | **$3,300 – $13,000+** |

---

## Who Maintains It — Team Size & Skills Needed

### Minimum: 1 person. No coding knowledge required if using CMS or Claude Code.

| Scenario | People Needed | Coding Required? | Monthly Effort |
|---|---|---|---|
| Claude Code handles everything | 1 (any role) | None — plain English | ~1 hr/month |
| CMS (CloudCannon) + Claude Code | 1 content editor | None | 2–4 hrs/month |
| Developer-maintained | 1 junior dev | Basic HTML/CSS | 2–4 hrs/month |
| WordPress (comparison) | 1 WP admin + 1 dev | WordPress + PHP | 8–15 hrs/month |

**Day-to-day operation with CMS:** The content editor logs into a web dashboard, edits text/images through a form UI, hits Publish. The site auto-deploys in 30 seconds. They never see a line of code.

---

## If Someone New Joins — How Fast Can They Get Up to Speed?

| Person | Time to Understand Full Codebase | Time to Add a Button |
|---|---|---|
| Senior developer | 20–30 min | 5 min |
| Junior developer | 1–2 hrs | 15–30 min |
| Intern / bootcamp grad | Half a day | 1–2 hrs |
| Non-technical (Claude Code) | Not needed | Describe it → done |
| **WordPress equivalent** | **2–5 days** | **30–60 min** |

### Adding a button — what it actually looks like:
1. Open `kinaxis.html` (filename is self-explanatory)
2. Find the section — HTML reads like plain English
3. Copy an existing button: `<a href="link" class="btn btn-primary">Label</a>`
4. Change the text and link — styling is automatic via shared CSS classes
5. Run one command to preview locally
6. Push to GitHub — Vercel deploys in 30 seconds

**Total time: under 15 minutes for someone with basic HTML knowledge.**
**With Claude Code: describe it in English — zero HTML knowledge needed.**

The project also has a `CLAUDE.md` file — a human-readable instruction manual covering the full file structure, all design tokens, JS features, and project rules. A new person reads it in 15–20 minutes and has a complete mental model of the entire site.

---

## Security in 60 Seconds

- No database = nothing to breach
- No PHP = nothing to exploit
- No admin login page = nothing to brute-force
- HTTPS: automatic on all three platforms
- DDoS protection: built-in, free
- Audit trail: Git history — every change, who made it, when, what changed
- Security updates needed: **zero** — static files have no CVEs

---

## Our Recommendation

| Priority | Stack | Monthly Cost |
|---|---|---|
| Best overall | **Vercel + Decap CMS** | $0 |
| Best for non-technical editors | **Netlify + CloudCannon** | $64 |
| Best security / unlimited bandwidth | **Cloudflare Pages** | $0 |
| Avoid | WordPress | $275–$1,083 |

**The AI development advantage:** With this static HTML architecture, a business stakeholder says *"update the stats on the homepage"* — Claude Code finds the file, makes the change, pushes to GitHub, and the live site updates in 30 seconds. No developer login to WP admin, no database, no fighting the theme. The file is the content.

---


