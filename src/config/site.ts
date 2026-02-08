/**
 * Site Configuration
 * Single source of truth for all personal info, links, and metadata.
 * Update this file to change references across the entire site.
 */

// ============================================
// IDENTITY
// ============================================

export const SITE = {
  name: "Monisankar Nath",
  title: "Software Engineer",
  domain: "monisankarnath.dev",
  url: "https://monisankarnath.dev",
} as const;

// ============================================
// CONTACT & SOCIAL
// ============================================

export const CONTACT = {
  email: "monisankarnath1@gmail.com",
  linkedin: {
    url: "https://www.linkedin.com/in/monisankar-nath",
    handle: "monisankar-nath",
  },
  github: {
    url: "https://github.com/Monisankarnath",
    handle: "@Monisankarnath",
  },
} as const;

// ============================================
// RESUME
// ============================================

export const RESUME = {
  path: "/resume/Monisankar-Nath_resume.pdf",
  filename: "Monisankar-Nath_resume.pdf",
} as const;

// ============================================
// UPI / SUPPORT
// ============================================

export const SUPPORT = {
  upiId: "monisankar.nath@ybl",
} as const;

// ============================================
// OPEN SOURCE PROJECTS
// ============================================

export const PROJECTS = {
  expoVideoCache: {
    name: "expo-video-cache",
    description:
      "A performant HLS video caching layer for React Native and Expo. Reduces buffering, bandwidth usage, and startup latency by caching video segments locally with intelligent eviction.",
    github: "https://github.com/Monisankarnath/expo-video-cache",
    npm: "https://www.npmjs.com/package/expo-video-cache",
  },
} as const;

// ============================================
// HERO — What you're currently working on
// Update these when your focus changes.
// ============================================

export const HERO = {
  headline: "Software Engineer.",
  lead: "Building high-performance mobile and web systems.",
  context: "Currently solving video caching and delivery at scale.",
  status: `Shipping ${PROJECTS.expoVideoCache.name} v2.0`,
  /** Optional — set a URL to make the status pill a link, or leave empty for plain text. */
  statusUrl: PROJECTS.expoVideoCache.npm,
} as const;

// ============================================
// SEO DEFAULTS
// ============================================

export const SEO = {
  defaultTitle: `${SITE.name} | ${SITE.title}`,
  defaultDescription: `${SITE.name} is a ${SITE.title} building scalable mobile and web applications using React Native and modern web technologies.`,
} as const;

// ============================================
// DERIVED HELPERS
// ============================================

export const MAILTO = `mailto:${CONTACT.email}` as const;
