# monisankarnath.dev

Personal portfolio and engineering blog.

Built with [Astro](https://astro.build), [Tailwind CSS](https://tailwindcss.com), and [Geist](https://vercel.com/font) typeface. Deployed on [Cloudflare Pages](https://pages.cloudflare.com).

## Stack

- **Framework** — Astro 5 (static output, zero JS by default)
- **Styling** — Tailwind CSS 4
- **Typography** — Geist Sans + Geist Mono
- **Content** — Markdown via Astro Content Collections
- **Diagrams** — Mermaid (rendered at build time via rehype-mermaid)
- **Hosting** — Cloudflare Pages

## Project Structure

```
src/
├── components/        # Reusable Astro components
├── config/
│   └── site.ts        # Central config — all links, metadata, hero content
├── content/
│   ├── blog/          # Blog posts (Markdown)
│   └── case-studies/  # Case studies (Markdown)
├── layouts/           # Page layouts (Base, Blog, Case Study)
├── pages/             # File-based routing
├── scripts/           # Client-side utilities
└── styles/            # Global CSS + design tokens
```

## Pages

| Route              | Purpose                          |
|-------------------|----------------------------------|
| `/`               | Homepage                          |
| `/case-studies`   | Case study index                  |
| `/case-studies/*` | Individual case study             |
| `/blog`           | Blog index                        |
| `/blog/*`         | Individual blog post              |
| `/open-source`    | Open source contributions         |
| `/about`          | Background and approach           |
| `/contact`        | Contact information               |
| `/support`        | Voluntary support (UPI)           |

## Configuration

All personal info, external links, and dynamic content live in a single file:

```
src/config/site.ts
```

This includes name, email, social links, resume path, UPI ID, open source project details, hero section content, and SEO defaults. Every page and component imports from this file — update once, propagates everywhere.

## Features

- **⌘K Command Palette** — keyboard-driven navigation and search across all pages and content
- **Content Navigation** — "Next Read" suggestions at the bottom of case studies and blog posts, linking to the next item or a related post across collections
- **Dark theme only** — optimized for readability with soft contrast, no pure black or white
- **Fluid typography** — all type sizes use `clamp()` for smooth scaling across viewports
- **Minimal motion** — CSS-only transitions, respects `prefers-reduced-motion`

## Layouts

**Case studies** — two-column with sticky sidebar TOC on desktop (≥1280px), single column on mobile.

**Blog posts** — single-column, narrow reading width (~65ch). Intentionally distinct from case studies.

## Development

```bash
npm install
npm run dev        # Start dev server
npm run build      # Production build
npm run preview    # Preview production build
```

Requires Node 18+.

## Content

Case studies and blog posts are written in Markdown under `src/content/`. Frontmatter schema is defined in `src/content/config.ts`.

### Adding a case study

```markdown
---
title: "Project Title"
description: "One-line description of the problem and outcome."
role: "Your role"
timeline: "Duration"
metrics: "Key measurable impact"
tags: ["React Native", "Node.js"]
publishedAt: 2026-02-01
layout: ../../layouts/CaseStudyLayout.astro
---
```

### Adding a blog post

```markdown
---
title: "Post Title"
description: "Brief description for SEO and previews."
publishedAt: 2026-02-01
tags: ["performance", "react-native"]
layout: ../../layouts/BlogLayout.astro
---
```

## License

Content and writing are copyright. Source code is available for reference.
