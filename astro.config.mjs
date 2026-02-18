// @ts-check
import { defineConfig } from 'astro/config';
import rehypeMermaid from 'rehype-mermaid';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://monisankarnath.dev',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  },
  markdown: {
    syntaxHighlight: {
      excludeLangs: ['mermaid']
    },
    rehypePlugins: [
      [rehypeMermaid, { 
        strategy: 'pre-mermaid',
      }]
    ],
  },
});