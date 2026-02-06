## Portfolio Blueprint

Below is a complete, end-to-end, step-by-step design, development, and deployment blueprint, tailored exactly to:

- Job-focused senior engineer positioning
- Hiring managers / recruiters first
- Calm, authoritative, senior tone
- High performance on all browsers
- Zero / near-zero running cost
- Long-term SEO growth
- Dark-only, eye-safe design
- Blogs + detailed case studies + OSS credibility
- Optional contributions (UPI/QR) done tastefully

I’ll also explain why each decision is made this way and not another way.

---

## 🧭 Overall Philosophy

This portfolio is a technical credibility document disguised as a website.

It should feel like:

- A senior engineer’s personal knowledge base
- Calm, confident, unhurried
- Optimized for reading and trust, not dopamine

And very explicitly:

- No flashy visuals
- No gimmicks
- Everything intentional

---

## PHASE 0 — Brand & Positioning (Foundation)

### 0.1 Name & Domain

**Recommendation**

- **Primary**: `monisankarnath.dev`

**Why `.dev`?**

- Strong developer signal
- HTTPS enforced by default
- Recognized by recruiters
- Cleaner than `.io` for personal branding

**Why not multiple domains?**

- SEO dilution
- One canonical domain builds authority faster

### 0.2 Core Message (used everywhere)

**Primary tagline (example)**  
Software Engineer building high-performance cross-platform systems at scale.

**Supporting line**  
React · React Native · iOS · Backend · Open Source

This immediately answers:

- Who you are
- What you do
- At what level

---

## PHASE 1 — Design System (Dark, Eye-Safe)

### 1.1 Why Dark-Only?

- You work with screens all day
- Hiring managers skim at night
- OLED displays are common
- Dark themes feel more “engineering-grade”

But: dark done badly strains eyes.  
So we do **soft contrast**, not pitch black.

### 1.2 Color Palette (Exact Philosophy)

**Backgrounds**

- **Primary background**: Deep charcoal, not black
  - Example range: `#0E1117` – `#111827`
- **Surface / cards**: Slightly lifted
  - Example: `#161B22`

**Text**

- **Primary text**: Soft off-white
  - Example: `#E5E7EB`
- **Secondary text**: Muted gray
  - Example: `#9CA3AF`
- **Meta text**: Even softer
  - Example: `#6B7280`

**Accent (very restrained)**

- One accent color only
- Cool blue or muted cyan
- Used for links, highlights, focus states
- No neon, no gradients

**Why this works**

- Low eye strain
- High readability for long blogs
- Feels calm and senior
- Works across all monitors

### 1.3 Typography

**Font philosophy**

- Neutral
- Highly readable
- No “personality fonts”

**Recommendation**

- **Headings**: Geist Sans + Geist Mono
- **Body**: Same family, lighter weight
- **Code**: JetBrains Mono

**Why not fancy fonts?**

- Recruiters skim
- Fancy fonts reduce scan speed
- Engineering credibility > aesthetics

### 1.4 Spacing & Layout Rhythm

- Large vertical spacing
- Clear section separation
- No dense blocks

**Why**

- Encourages reading
- Feels confident (not trying to cram info)
- Mimics well-written technical docs

---

## PHASE 2 — Motion & Animation System

### 2.1 Animation Philosophy

Motion should **confirm, not distract**.

- No continuous animation
- No scroll-hijacking
- No parallax

### 2.2 Allowed Animations

**Page load**

- Subtle fade-in (opacity + slight `translateY`)
- Duration: **200–300ms**
- Easing: **ease-out**

**Scroll-based**

- Section reveal once (IntersectionObserver)
- Never replay on scroll

**Hover**

- Link underline fade
- Card border glow (very subtle)
- Icon translate by 1–2px max

**Why CSS-first?**

- Zero JS overhead
- Perfect browser support
- No hydration cost

### 2.3 Accessibility

- `prefers-reduced-motion` respected
- Animations disabled automatically if user prefers

This signals maturity.

---

## PHASE 3 — Information Architecture

**Top-Level Pages**

```text
/
├── /case-studies
│   └── /case-studies/[slug]
├── /blog
│   └── /blog/[slug]
├── /about
├── /contact
└── /support
```

Simple, predictable, SEO-friendly.

---

## PHASE 4 — Page-by-Page Design & Content

### 4.1 Home Page

**Purpose**

- Establish seniority
- Funnel visitors into case studies

**Sections**

#### 1️⃣ Hero

- Name
- Title
- Tagline
- Quick stats (very important)

**Example stats**

- 5+ years experience
- Systems used by 500M+ users
- Open source maintainer

**Why stats?**

- Recruiters scan numbers first

#### 2️⃣ Featured Case Studies

- Only **3**, not more.

Each shows:

- Problem
- Scale
- Impact
- Clickable → detailed page

**Why not all projects?**

- Curation shows seniority
- Reduces decision fatigue

#### 3️⃣ Open Source Highlight

- Dedicated callout for `expo-video-cache`.

**Why?**

- OSS signals real engineering depth
- Strong differentiator

#### 4️⃣ Latest Writing

- 2–3 recent blogs
- Shows thinking, not marketing

#### 5️⃣ CTA

- “View Resume”
- “Get in touch”

No aggressive hiring CTA.

---

### 4.2 Case Studies (Most Important)

Each case study is **long-form**.

**Structure**

1. **Title**
   - Clear, descriptive.
   - Example:  
     _Building a Fleet Tracking App Used by 50,000+ Drivers_

2. **Context**
   - Company
   - Role
   - Timeline
   - Team size

3. **Problem Statement**
   - Business problem
   - Technical constraints
   - Scale challenges

4. **Thought Process**
   - This is where you shine.
   - Tradeoffs
   - Why certain tech was chosen
   - What was rejected and why

5. **Architecture Diagram**
   - Simple SVG or image
   - System flow
   - Components interaction

   **Why diagrams?**
   - Hiring managers love clarity
   - Signals architectural thinking

6. **Implementation Details**
   - Key technical decisions
   - Performance optimizations
   - CI/CD, testing, monitoring

7. **Outcome & Impact**
   - Metrics
   - User impact
   - Business value

8. **Learnings**
   - What you’d do again
   - What you’d change

This is senior-level storytelling.

### 4.3 Blog System (SEO-First)

**Content Format (Markdown)**

Each blog must follow:

```markdown
---
title:
description:
publishedAt:
tags:
readingTime:
---

## Problem

## Background

## Approach

## Implementation

## Trade-offs

## Results

## Conclusion
```

**URL Strategy**

- Example: `/blog/expo-hls-caching-in-react-native`
- Hyphenated
- Keyword-rich
- No dates in URL

**SEO Strategy**

- One primary keyword per post
- Proper meta title & description
- Internal links to case studies
- RSS feed enabled

**Why long blogs?**

- Higher dwell time
- Better ranking
- Establish authority

---

### 4.4 About Page

Not resume copy.

**Structure**

- Short narrative
- What you enjoy building
- How you think about engineering
- Link to resume

Tone: calm, reflective, senior.

---

### 4.5 Contact / Hire Page

**Contact**

- Email
- LinkedIn
- GitHub

**Hire Signals**

- “Open to senior frontend / mobile roles”
- No desperation language

---

### 4.6 Support / Contributions Page

Handled tastefully.

**Purpose**

- Support OSS & writing
- Not transactional

**Content**

- Short explanation
- What support enables
- QR code (UPI)

**Disclaimer**

- Contributions are voluntary support, not payments for services.

**Why separate page?**

- Keeps main portfolio professional
- Avoids awkwardness

---

## PHASE 5 — Development Plan

**Stack (Final)**

- Astro
- Tailwind CSS
- Astro Content Collections
- React (opt-in)
- Markdown
- Cloudflare Pages

**Why not Next.js?**

- Overkill
- Higher hosting cost
- More JS than needed

**Folder Structure**

```text
src/
├── pages/
├── components/
├── layouts/
├── content/
│   ├── blog/
│   └── case-studies/
├── styles/
└── assets/
```

Clean, scalable, predictable.

---

## PHASE 6 — Deployment & Cost

**Hosting**

- Cloudflare Pages — free

**Analytics**

- Cloudflare Web Analytics — free

**Domain**

- ₹800–₹1,200/year

**Total monthly cost**

- 👉 ₹0

---

## PHASE 7 — Launch & Iteration

**Launch with**

- 2 case studies
- 2 blogs

**Share on**

- LinkedIn
- GitHub README

Add content monthly.  
Let SEO compound.

---

## Final Thought

This portfolio will not scream.

It will:

- Speak calmly
- Load instantly
- Read beautifully
- Age well
- Attract the right opportunities

---

## STEP 1 — Homepage Intent & Narrative (Revised & Locked)

### Primary Goal

Create a job-focused, senior-level portfolio that:

- Converts hiring managers and recruiters
- Signals systems thinking and engineering maturity
- Feels current in Feb 2026, not trendy or flashy

### Audience Priority

1. Hiring managers / recruiters
2. Senior engineers & indie developers
3. General visitors

### Tone & Personality

- Calm
- Authoritative
- Thoughtful
- Actively shipping (not “finished”)

No hype. No emojis. No buzzwords.

### Homepage Narrative Flow (Top → Bottom)

#### 1️⃣ Hero Section (Enhanced, with Activity Signal)

**Purpose**

- Instantly answer who you are
- Establish senior credibility
- Signal that you are actively building

**Structure (Left-aligned)**

Top-left (very small, Geist Mono):

```text
monisankarnath.dev
```

Primary headline (H1):

```text
Software Engineer.
```

Supporting line (H2 / lead):

```text
Building high-performance mobile and web systems.
```

Context line (lighter, optional):

```text
Currently solving video caching and delivery at scale.
```

Status Pill (NEW, retention hook):

```text
● Shipping expo-video-cache v2.0
```

- Small green dot
- Subtle opacity pulse (1.5–2s)
- Pure CSS, no transforms

Primary CTA:

```text
Download Resume →
```

**Why this works**

- Keyword friendly without listing stacks
- Feels alive and current
- Calm, confident, senior

#### 2️⃣ Bento Grid Navigation (Single Instance)

**Purpose**

- Break vertical monotony
- Give visitors clear entry points
- Increase engagement without flash

**Placement**

- Immediately after Hero

**Grid Structure**

- 3 cards only:
  - Case Studies (primary, visually larger)
  - Open Source
  - Writing

**Design**

- Background: `#161b22`
- Border: `1px solid rgba(255,255,255,0.1)`
- Hover: slight background lift + border opacity
- No gradients, no glassmorphism

**Why**

- 2026-relevant interaction pattern
- Still professional and restrained

#### 3️⃣ Case Studies (Problem & Impact First)

**Purpose**

- Demonstrate thinking, not screenshots
- Prove real-world impact

**Case Study Header Format (LOCKED)**

```text
Fleet Tracking System
Reduced sync latency by 40% for 50k drivers
```

- Project name → Geist Sans
- Metric → Geist Mono, muted

**Each case study includes**

- Context (what existed)
- Constraints (scale, time, tech debt)
- Decisions (why this, not that)
- Diagrams (architecture / flow)
- Outcomes (measurable or qualitative)

Count: **2–3 deep dives** only.

#### 4️⃣ “How I Work” (Knowledge Graph)

**Purpose**

- Intellectual retention hook
- Signals senior-level principles

**Format**

Short list of beliefs, e.g.:

- “I prefer duplication over the wrong abstraction.”
- “Types are documentation.”
- “Performance is a feature.”

**Interaction**

- Hover / tap reveals 1-sentence explanation
- CSS-only

#### 5️⃣ Experience Snapshot

**Purpose**

- Validate background
- Keep it scannable, not verbose

**Format**

- Company
- Role
- 1–2 impact lines max

The full resume handles the rest.

#### 6️⃣ Closing Section

**Purpose**

- Calm call-to-action
- Human ending

**Example tone**

> Open to roles where engineering quality and long-term thinking matter.

**CTA**

- Download Resume

#### 7️⃣ Footer (Command-Center Hint)

**Includes**

- Name + year
- Minimal links (GitHub, LinkedIn, Email)

Hint text:

> Press ⌘K to search projects, blogs, and pages

---

## STEP 2 — Typography System (Revised & Locked)

### Philosophy

- Typography is the design
- Fewer fonts = more authority
- Long-form readability > decoration

### Font Stack (LOCKED)

**Primary**

- Geist Sans — headings, body, UI

**Secondary**

- Geist Mono — metrics, tags, metadata, domain text

### Font Usage Rules

| Element         | Font       | Weight | Notes              |
| --------------- | ---------- | ------ | ------------------ |
| H1 / Hero       | Geist Sans | 600    | Tracking: -0.02em  |
| H2 / Section    | Geist Sans | 600    | Calm authority     |
| Body            | Geist Sans | 400    | Leading: 1.65–1.75 |
| Meta / Metrics  | Geist Mono | 400    | Muted color        |
| Labels / Domain | Geist Mono | 400    | Small, uppercase   |

### Type Scale (Fluid, not fixed)

Use `clamp()` everywhere:

- Hero: ~48px
- H2: ~24px
- Body: 16–18px
- Meta: 13–14px

Typography scales smoothly across:

- Mobile
- Tablet
- Desktop
- Ultrawide

### Line Length & Rhythm

- Max paragraph width: **60–68ch**
- Headings: slightly tighter line-height
- Body text: generous spacing

This is what creates the “expensive” feel.

---

## STEP 3 — Layout & Visual System (Revised & Locked)

### Core Principle

Full-width canvas with **disciplined reading rhythm**.

### Layout

- Background spans full viewport
- Content is anchored, not boxed
- No rigid fixed containers
- Scales naturally with screen size

### Spacing System

- Section spacing: **96–128px**
- Inner spacing: **24–48px**
- Based on **8-point rhythm**

Nothing random.

### Dark Theme (Eye-Safe)

**Background**

- `#0E1116` or `#0F172A`
- Never pure black

**Text**

- Primary: soft white (not `#FFF`)
- Secondary: muted gray

### Visual Depth Details

**Subtle Borders**

```css
border: 1px solid rgba(255, 255, 255, 0.1);
```

Creates depth without clutter.

**Noise Texture (Premium Detail)**

- Very faint SVG noise
- 2–4% opacity
- Fixed background layer
- No scroll cost

Prevents OLED flatness.

### Noise Texture — Implementation Constraints

- Noise is implemented as a tiny inline SVG pattern (~200 bytes), base64-encoded
- Pattern is repeated via CSS background (no image assets, no network request)
- Opacity strictly capped at 2–4%
- Noise layer is fixed and non-interactive
- Noise is disabled automatically when:
  - prefers-reduced-transparency is detected
  - prefers-reduced-motion is enabled
- Noise must never affect:
  - Text contrast
  - Accessibility scores
  - Lighthouse performance metrics

Why this matters

- Prevents banding on OLED displays
- Avoids unnecessary payload and layout cost
- Preserves premium depth without visual noise fatigue

This locks the decision and prevents future “let’s try a PNG” drift.

### Motion Philosophy

- Micro-only
- Opacity + translate (4–8px)
- No 3D
- No scroll hijacking
- Respects `prefers-reduced-motion`

### Performance Budget

- No JS for layout
- Astro islands only when needed
- LCP \< 1.5s
- CLS ≈ 0

### Resume Handling (LOCKED)

- Downloadable PDF only
- Hosted locally
- Clear file name:  
  `Monisankar-Nath-Software-Engineer.pdf`

---

## ⌘K Command Palette & Search System

### Purpose

- Provide fast navigation for power users
- Enable discovery of blogs, case studies, and internal pages
- Reduce friction for repeat visitors and hiring managers

### Behavior

- **Triggered via:**
  - ⌘K (macOS)
  - Ctrl+K (Windows/Linux)
- Opens a centered `<dialog>` modal
- Instant open (≤100ms perceived delay)
- Esc always closes
- Fully keyboard navigable

### Search Scope (Explicit)

Search indexes include:

- Static pages (`/about`, `/open-source`, `/contact`)
- Case studies
- Blog posts (title + slug + description)
- Open-source project pages

### Search Rules

- No fuzzy gimmicks
- Prefix and substring matching only
- Results ranked by:
  1. Page type (Case Study > Blog > Static)
  2. Title match
  3. Slug match

### Implementation Strategy (Astro-Friendly)

- Search index generated at build time
- Index stored as static JSON
- No runtime crawling
- No external search service
- No analytics dependency

### Performance Constraints

- Zero blocking JS on initial load
- Search logic loaded only on interaction
- No hydration of the entire page
- Works offline once loaded

### Visual Constraints

- Styled identically to site theme
- No SaaS-like animations
- No glowing highlights
- No search “chrome”
- Feels like a system tool, not a feature demo

---

## STEP 4 — Experience Architecture & Anti-Drift Rules

### A. Navigation Philosophy

- No traditional top navigation bar
- No sticky header
- Homepage acts as the primary router
- Navigation is intentional and contextual (Bento Grid + ⌘K hint)
- Avoid “just-in-case” links

### B. External Links & Signals

- External links open in a new tab
- GitHub links point to specific repositories or organizations where possible
- GitHub is treated as **proof of work**, not a social feed
- Email is low-friction (`mailto:` or copy-to-clipboard)
- Avoid link overload in the footer

### C. Case Study Page Structure

- Case studies are long-form, single-column layouts
- Reading width matches homepage (60–68ch)
- No sticky sidebars or floating TOCs
- Diagrams are functional and inline, not decorative
- Content favors reasoning and trade-offs over visuals

### D. SEO & Metadata Intent

- Human-first content, search engines are secondary
- Clean semantic HTML (`<main>`, `<section>`, proper heading order)
- Meaningful headings (no keyword stuffing)
- Thoughtful Open Graph and social preview metadata
- Homepage is indexable and canonical

---

### 🔒 Explicit Locks (Anti-Drift Rules)

#### A. Content Freshness Rule

- Homepage always reflects current focus or active work
- “Current status” must be truthful or removed
- No archived or stale “latest” sections
- Remove outdated content instead of hiding it

#### B. Explicitly Avoid (Hard No List)

- Carousels or sliders
- Auto-playing video or audio
- Skill bars, progress meters, or ratings
- Testimonials or quotes
- Timeline-style resumes
- Flashy animations or scroll hijacking
- Overuse of badges or icons

---

# Improvement Plan

## Visual, Navigation & Content

### 1. Visual Interest (Without Losing Seriousness)

**Goal**

- Increase engagement and depth without adding flash, noise, or gimmicks.

**Keep**

- Dark theme
- Subtle gradients
- Calm, professional tone

**Improve (precisely)**

#### 1.1 Focus-based visual hierarchy

- Add subtle radial glow behind:
  - Hero headline
  - Featured case study card
- Glow should be:
  - Low opacity
  - Static (not animated)
  - Barely noticeable
- Reference: Linear, Vercel dashboards

#### 1.2 Motion as affordance (not decoration)

**Card hover**

- Border intensity ↑
- Arrow shifts 2–4px
- Background glow slightly increases

**Timing**

- 120–180ms
- Ease-out only
- No parallax. No scroll-jank. No “wow” effects.

#### 1.3 Typographic contrast tuning

- Increase separation between:
  - Section titles
  - Descriptions
  - Metadata
- Body text currently feels uniform → reduce cognitive scanning cost.

---

### 2. Navigation Fix (Non-Technical Friendly)

**Problem**

- Cmd + K only navigation blocks recruiters and founders.

**Solution**

- Add explicit footer navigation, minimal and obvious.

**Footer Navigation (ONLY these)**

- About
- Contact
- Support

**❌ Do NOT repeat**

- Case Studies
- Open Source
- Writing
- Social links (already present)

**Cmd + K**

- Keep it
- Treat it as power-user bonus, not core navigation

---

### 3. Hero Section Cleanup

#### 3.1 Remove domain name from hero

- `monisankarnath.dev` at the top → **remove**

**Reason**

- Redundant
- Weakens confidence
- Adds visual noise

Domain belongs to:

- Browser
- Footer
- Metadata

#### 3.2 Resume CTA repositioning

**Current**

- “Download Resume” in hero → feels desperate

**Change**

- ❌ Remove from hero
- ✅ Add at the end of Experience section
- Replace “View full resume →” with:
  - “View full resume (PDF)”
  - or “Download resume (PDF)”
- Tone: calm, optional, professional.

---

### 4. Case Studies (Primary Differentiator)

This is the most important section of the site.

#### 4.1 `/case-studies` (Index Page)

**Purpose**

Show:

- Thinking
- Decision-making
- System-level ownership
- Not volume.

**Layout**

- Grid with one featured case study larger
- Others standard size
- This hierarchy should feel intentional

**Each Case Study Card**

- Title
- 1–2 line description
- Optional image (NOT mandatory)

**👉 Image rules**

- Use only if diagram/screenshot adds understanding
- Text-only is completely acceptable and senior-coded

#### 4.2 Initial Case Studies (Dummy Content)

Add exactly two for now:

**1. `caching-hls-stream`**

- **Title:** Caching HLS Streams at Scale
- **Description:**  
  Designing a performant video caching layer to reduce buffering, bandwidth usage, and startup latency in mobile environments.

**2. `clustering-in-map`**

- **Title:** Clustering Large Map Datasets
- **Description:**  
  Rendering dense geospatial data efficiently using clustering strategies to maintain smooth UX at scale.

#### 4.3 `/case-studies/[slug]` (Detail Page)

Each case study page must follow the same narrative structure:

1. Context
2. Problem
3. Constraints
4. Architecture & Decisions
5. Trade-offs
6. Outcome & Impact
7. What I’d Improve Next Time

**Include**

- Diagrams
- Architecture visuals
- Small code snippets only when helpful

**📌 Reference**

- Stripe engineering deep dives
- Netflix tech blog
- Josh Comeau’s long-form breakdowns

---

### 5. Open Source Strategy

**Current State**

- One major contribution: `expo-video-cache`
- That’s enough.

**Decision**

- ✅ Keep a dedicated page

**`/open-source` Page**

**Content**

- Single strong card (future-proof):
  - Project name
  - Short description
  - npm link
  - GitHub repo link
  - Lightweight stats:
    - Downloads
    - Stars
    - Last updated

Do NOT over-design this page.  
If more contributions come later, it scales naturally.

---

### 6. Writing / Blog System

Your direction here is already correct. Just formalize it.

**`/blog` (Index Page)**

Each blog item shows:

- Title
- Short description
- Read time
- Publish date (optional but recommended)
- No thumbnails unless diagrams are core to the article.

**`/blog/[slug]` (Detail Page)**

**Requirements**

- SEO-friendly slug
- Rendered fully via Markdown
- Supports:
  - Images
  - Diagrams
  - Embedded videos (optional)

**Content Guidance (Important)**

Avoid beginner tutorials.  
Write about:

- Trade-offs
- Architecture decisions
- Performance lessons
- Things that went wrong

**📌 Reference**

- Overreacted.io (Dan Abramov)
- Kent C. Dodds (conceptual posts)

---

### 7. Component Architecture (Engineering Hygiene)

You are thinking correctly — enforce reuse.

**Required Reusable Components**

- `CaseStudyCard`
- `OpenSourceContributionCard`
- `BlogListItem`

**Each component**

- Data-driven
- No hardcoded copy
- Reused across index + detail pages

This ensures:

- Consistency
- Easier iteration
- Clear mental model

---

### 8. Final Implementation Order (Strict)

1. Footer navigation (About, Contact, Support)
2. Hero cleanup (remove domain + resume CTA)
3. Case Studies routing + dummy content
4. Open Source page
5. Blog index + markdown rendering
6. Visual polish (glow, motion, typography)

---

## Case Study vs Blog Differentiation (FIX 1–3)

### FIX 1 — Spec Grid Header (Primary Differentiator)

**Goal**

Make Case Studies instantly feel like engineering artifacts, not articles, using structure only.

**Idea**

Update the Case Study page header to visually differentiate it from blog posts without changing fonts, colors, or design tokens.

**Requirements**

- Keep the blog header unchanged.
- Case Study header must use a grid-based “spec sheet” layout directly below the title.
- The grid should surface **execution metadata**, not prose.

**Header structure**

1. Title (same typography as blog titles)
2. One-line description
3. Below the description, render a **boxed grid** (2–4 columns on desktop, stacked on mobile) containing:
   - Impact / Metrics (visually emphasized)
   - Role
   - Timeline
   - Company or Tech Stack

**Visual constraints**

- Use existing border color (e.g. `white/10`)
- Subtle background tint only (e.g. `white/5`)
- Rounded corners consistent with the rest of the system
- No icons, no accent colors, no animations

**Success criteria**

- At first glance, the Case Study page must feel like a **technical report or execution summary**
- The Blog page must **never** contain boxed metadata or grid layouts at the top

**Why this works**

- Forces separation via layout, not decoration
- Prevents creative drift
- Establishes a non-negotiable invariant: **blogs never get boxes**

---

### FIX 2 — Wide Layout + Sticky Context (Documentation Mode)

**Goal**

Make Case Studies feel skimmable, reference-like, and non-linear—a documentation mode, not a reading mode.

**Why**

This single phrase prevents someone from “beautifying” it like a blog later.

**Idea**

Update the Case Study page layout only to introduce a documentation-style reading experience. This change must not affect blog pages or shared prose components.

**Requirements**

- Case Study pages should use a **wider max-width** and a **two-column layout** on desktop.

**Layout behavior**

- **Left column (≈70%):** Main content (Context, Problem, Architecture, Trade-offs, Outcome)
- **Right column (≈30%):** Sticky sidebar
- Sidebar must never push or wrap main content; it should disappear entirely on smaller breakpoints.

**Active section feedback**

- As the reader scrolls, the corresponding heading in the sidebar should:
  - Increase opacity
  - Slightly brighten (no color change)
  - Optionally apply a subtle left indicator or underline
- The active state should feel like focus, not animation
  - No motion beyond opacity / color shift
- Sidebar typography should rely heavily on Geist Mono for hierarchy and scannability

**Sticky sidebar contents**

- “On this page” table of contents (auto-generated from headings)
- Tech stack as small text badges or inline labels
- Optional repository or demo link

**Visual constraints**

- Sidebar must be visually quiet (no cards, no heavy borders)
- Use smaller text and subtle separators
- Sticky behavior should activate only on desktop (≥1024px)

**Success criteria**

- Case Studies feel like **reference material**
- Blogs still feel like **linear essays**
- The difference is obvious within 2 seconds of landing

**Why this works**

- Introduces hierarchy without clutter
- Reinforces “this is serious” without shouting
- Matches how engineers actually read case studies

---

### FIX 3 — First-Scroll Engineering Artifact (Blueprint Signal)

**Goal**

Make Case Studies visually prove complexity early—without diagrams for decoration.

**Prompt**

Enforce a rule for Case Study pages only:  
**Each Case Study must include at least one technical artifact within the first 1–1.5 scrolls.**

**Acceptable artifacts**

- Architecture diagram (ASCII, Mermaid, or simple SVG)
- System flow block
- Trade-off or decision table
- Execution constraints or invariants list

**Constraints**

- The artifact must be **relevant to the system**, not decorative
- It must be **visually separated** from prose (spacing, subtle border, or code-style block)
- Blogs must **NOT** include architecture diagrams or system artifacts by default

**Design rules**

- No bright colors or illustrations
- Prefer monospace or code-adjacent styling
- Keep it scannable, not verbose

**Success criteria**

- A user can visually identify “this is a system” before reading a paragraph
- The Case Study feels closer to a **design doc** than a blog post

**Why this prompt works**

- Forces substance, not aesthetics
- Prevents diagrams from becoming fluff
- Locks in a repeatable quality bar for future case studies

---

### Execution order (important)

Do them **exactly** in this order:

1. **Fix 1 — Spec Grid Header**  
   → Validate first-glance differentiation

2. **Fix 2 — Wide + Sticky Layout**  
   → Validate reading mode difference

3. **Fix 3 — Artifact Rule**  
   → Validate depth & seriousness

After each fix, ask yourself only one question:

> “Could this ever be mistaken for a blog?”
