// @ts-check
import { defineConfig } from 'astro/config';
import rehypeMermaid from 'rehype-mermaid';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://monisankarnath.dev',
  vite: {
    plugins: [tailwindcss()]
  },
  markdown: {
    syntaxHighlight: {
      excludeLangs: ['mermaid']
    },
    rehypePlugins: [
      [rehypeMermaid, { 
        strategy: 'img-svg', 
        dark: true,
        fontFamily: 'Geist Mono, monospace',
      }]
    ],
  },
});