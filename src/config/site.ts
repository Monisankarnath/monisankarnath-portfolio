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
  youtube: {
    url: "https://www.youtube.com/@monisankarnath",
    handle: "@monisankarnath",
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
    tagline: "HLS video caching for React Native and Expo.",
    description:
      "A performant HLS video caching layer for React Native and Expo. Reduces buffering, bandwidth usage, and startup latency by caching video segments locally with intelligent eviction.",
    github: "https://github.com/Monisankarnath/expo-video-cache",
    npm: "https://www.npmjs.com/package/expo-video-cache",
    tech: ["Swift", "React Native", "Expo", "iOS", "TypeScript"],
  },
} as const;

// ============================================
// PERSONAL PROJECTS
// ============================================

export const PERSONAL_PROJECTS = [
  {
    name: "US Restaurant Chain",
    description:
      "Multi-brand platform powering 10 restaurant brands in a single Nx monorepo — web, mobile, and native apps.",
    brands: [
      { name: "Olive Garden", url: "https://www.olivegarden.com" },
      { name: "LongHorn Steakhouse", url: "https://www.longhornsteakhouse.com" },
      { name: "Cheddar's", url: "https://www.cheddars.com" },
      { name: "Ruth's Chris", url: "https://www.ruthschris.com" },
      { name: "The Capital Grille", url: "https://www.thecapitalgrille.com" },
      { name: "The Capital Burger", url: "https://www.thecapitalburger.com" },
      { name: "Seasons 52", url: "https://www.seasons52.com" },
      { name: "Eddie V's", url: "https://www.eddiev.com" },
      { name: "Yard House", url: "https://www.yardhouse.com" },
      { name: "Bahama Breeze", url: "https://www.bahamabreeze.com" },
    ],
    tech: ["Next.js", "React Native", "React", "Nx", "TypeScript"],
    role: "Led modules, cross-platform features, production stability, and UX across all devices.",
  },
  {
    name: "iOS IAP Store",
    description:
      "Swift package for in-app purchases using StoreKit2 — supports buy, upgrade, downgrade, cancel, and refund flows.",
    brands: [] as { name: string; url: string }[],
    tech: ["Swift", "StoreKit2", "iOS"],
    role: "Built and published to Swift Package Index.",
    links: {
      github: "https://github.com/nathMonisankar/IOS-IAP-store",
      spi: "https://swiftpackageindex.com/nathMonisankar/IOS-IAP-store",
    },
  },
] as const;

// ============================================
// BIO — Hero paragraph
// ============================================

export const BIO = {
  location: "Bangalore, India",
  html: `Based in <strong>Bangalore, India</strong>. Building high-performance mobile and web systems at <strong>GeekyAnts</strong>.`,
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
