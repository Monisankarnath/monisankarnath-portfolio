import { defineCollection, z } from 'astro:content';

/**
 * Blog Collection
 * - Technical blogs on engineering, performance, architecture
 * - SEO-optimized with proper frontmatter
 */
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

/**
 * Case Studies Collection
 * - Deep dives into systems built
 * - Problem, decisions, outcomes
 */
const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    role: z.string(),
    timeline: z.string(),
    teamSize: z.string().optional(),
    metrics: z.string(), // e.g., "Reduced sync latency by 40%"
    tags: z.array(z.string()).default([]),
    publishedAt: z.coerce.date(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  blog,
  'case-studies': caseStudies,
};
