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
  path: "/resume/Monisankar_Nath_Resume.pdf",
  filename: "Monisankar_Nath_Resume.pdf",
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

export type OpenSourceProject = {
  name: string;
  tagline: string;
  description: string;
  github: string;
  npm?: string;
  spi?: string;
  tech: readonly string[];
  stats?: {
    downloads?: string;
    stars?: string;
    lastUpdated?: string;
  };
};

export const PROJECTS = {
  expoVideoCache: {
    name: "expo-video-cache",
    tagline: "HLS video caching for React Native and Expo.",
    description:
      "A performant HLS video caching layer for React Native and Expo. Reduces buffering, bandwidth usage, and startup latency by caching video segments locally with intelligent eviction.",
    github: "https://github.com/Monisankarnath/expo-video-cache",
    npm: "https://www.npmjs.com/package/expo-video-cache",
    tech: ["Swift", "React Native", "Expo", "iOS", "TypeScript"],
    stats: {
      downloads: "100+ weekly",
      stars: "3",
      lastUpdated: "Feb 2026",
    },
  },
  iosIap: {
    name: "IOS-IAP-store",
    tagline: "Swift package for Apple in-app purchases using StoreKit 2.",
    description:
      "Handles buy, upgrade, downgrade, cancel, and refund flows with 85%+ XCTest coverage and an Xcode Cloud pipeline that auto-publishes to TestFlight.",
    github: "https://github.com/nathMonisankar/IOS-IAP-store",
    spi: "https://swiftpackageindex.com/nathMonisankar/IOS-IAP-store",
    tech: ["Swift", "StoreKit 2", "iOS"],
  },
} as const satisfies Record<string, OpenSourceProject>;

// ============================================
// PROFESSIONAL PROJECTS
// ============================================

export type Brand = { name: string; url: string };

export type ProfessionalProject = {
  name: string;
  image: string;
  description: string;
  brands: readonly Brand[];
  tech: readonly string[];
  role: string;
  liveUrl?: string;
};

export const PERSONAL_PROJECTS: readonly ProfessionalProject[] = [
  {
    name: "Ajio — India's 2nd Largest Fashion E-commerce",
    image: "/images/ajio.png",
    description:
      "Crash rate 98.79% → 99.91% (~1,600 weekly crashes eliminated). Cold start ↓20%, screen load ↓25%, 60 FPS at 10K+ items.",
    brands: [],
    tech: ["React Native", "Swift", "SwiftUI", "UIKit", "TypeScript"],
    role: "React Native and iOS developer",
    liveUrl: "https://www.ajio.com/",
  },
  {
    name: "Darden — $13.2B Restaurant Chain Platform",
    image: "/images/darden.png",
    description:
      "Auth defects ↓40% across 11 brands, 2,200+ locations. Owned reservation, menu, order tracking, curbside, waitlist end-to-end.",
    brands: [
      { name: "Olive Garden", url: "https://www.olivegarden.com" },
      {
        name: "LongHorn Steakhouse",
        url: "https://www.longhornsteakhouse.com",
      },
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
    role: "",
    liveUrl: "https://www.olivegarden.com/",
  },
  {
    name: "Talenzap — Skills Contest Video Platform",
    image: "/images/talenzap.png",
    description:
      "Launched to 1,000+ users by clearing P0 blockers. Offline-first caching cut cold-start ~35%. Open-source expo-video-cache: 300+ weekly downloads.",
    brands: [],
    tech: ["React Native", "Expo", "TypeScript", "Swift", "Video Streaming"],
    role: "",
    liveUrl: "https://www.talenzap.com/",
  },
  {
    name: "MyJobDrop — Belgian Job Portal",
    image: "/images/mjd.png",
    description:
      "Full-stack platform serving 100+ companies and 1,000+ professionals. End-to-end delivery in a 3-person team.",
    brands: [],
    tech: ["React Native", "Flutter", "Next.js", "FastAPI", "AWS", "Terraform"],
    role: "",
    liveUrl: "https://www.myjobdrop.com",
  },
  {
    name: "Trovey — Australian Travel & Itinerary App",
    image: "/images/trovey.png",
    description:
      "Custom renderer replacing Konva RN Web. Native-smooth 60 FPS on complex itinerary views across iOS/Android.",
    brands: [],
    tech: ["React Native", "Expo", "NestJS", "TypeScript"],
    role: "",
    liveUrl: "https://www.trovey.com",
  },
  {
    name: "Jio Design System — 500M+ Downloads Ecosystem",
    image: "/images/jio.png",
    description:
      "iOS pod size ↓50%, UI bugs ↓40%. Powers 10+ apps across 500M+ download ecosystem.",
    brands: [],
    tech: ["Swift", "SwiftUI", "Figma"],
    role: "",
  },
];

// ============================================
// EXPERIENCE
// ============================================

export type Experience = {
  company: string;
  role: string;
  period: string;
  impact: readonly string[];
  tags: readonly string[];
};

export const EXPERIENCES: readonly Experience[] = [
  {
    company: "GeekyAnts",
    role: "Senior Software Engineer III",
    period: "Oct 2021 — Present",
    impact: [
      "Lead performance optimization and brownfield migration for India's 2nd largest fashion e-commerce app, eliminating ~1,600 weekly crashes and cutting cold start by ~20% during high-traffic sale events.",
      "Architect high-performance native modules and design systems, building a C++ JSI map clustering engine for 50K+ users and contributing to a SwiftUI design system powering 10+ apps with 500M+ downloads.",
      "Build offline-first video architecture with expo-video-cache (300+ weekly downloads), cutting first contentful paint by ~40% and enabling instant HLS playback for 1,000+ users across 500+ studios.",
      "Drive end-to-end delivery across web and mobile platforms for global clients, reducing auth defects by ~40% across 11 restaurant brands and building full-stack solutions for international markets.",
    ],
    tags: [
      "TypeScript",
      "React Native",
      "Next.js",
      "Swift",
      "NestJS",
      "FastAPI",
    ],
  },
  {
    company: "Wipro",
    role: "Software Engineer",
    period: "2020 — 2021",
    impact: [
      "Worked as an HRMS technical Oracle EBS developer, building PL/SQL triggers and reports for enterprise HR systems.",
    ],
    tags: ["SQL", "PL/SQL", "Oracle EBS"],
  },
];

// ============================================
// AWARDS & RECOGNITION
// ============================================

export type Award = {
  name: string;
  issuer: string;
  reason: string;
  href: string;
};

export const AWARDS: readonly Award[] = [
  {
    name: "Tech Innovator Award",
    issuer: "GeekyAnts",
    reason:
      "Geospatial map performance optimization on Alarmas — C++ JSI clustering pipeline rendering 1,000+ live devices at 60 FPS.",
    href: "/case-studies/react-native-gps-map-scaling-performance",
  },
  {
    name: "Impact Contributor Award",
    issuer: "GeekyAnts",
    reason:
      "Authored expo-video-cache — an open-source HLS caching library for React Native, used in production with 100+ weekly downloads.",
    href: "/case-studies/expo-video-ios-offline-caching",
  },
];

// ============================================
// BIO — Hero paragraph
// ============================================

export const BIO = {
  location: "Bangalore, India",
  html: `I'm a Senior Software Engineer at <strong>GeekyAnts</strong>, based in Bangalore, India, building mobile and web products with a focus on user experience. Currently exploring new frontend opportunities.`,
} as const;

// ============================================
// HERO — What you're currently working on
// Update these when your focus changes.
// ============================================

export const HERO = {
  greeting: "Hi, my name is",
  headline: "I work on React Native at scale.",
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
