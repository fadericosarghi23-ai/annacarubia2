// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Canonical su un solo host, con convenzione slash finale coerente.
  // Su Netlify il dominio arriva da solo: la variabile URL e' l'indirizzo
  // principale del sito (il *.netlify.app, o il dominio personalizzato appena
  // lo si collega). Da qui lo leggono landing.ts (site.dominio), canonical,
  // Open Graph, JSON-LD, sitemap e robots.txt.
  // [[DA COMPILARE: dominio di produzione]] — serve scriverlo qui solo se si
  // pubblica fuori da Netlify; il valore sotto e' il ripiego per il locale.
  site: process.env.URL || 'https://dominio-da-compilare.example',
  trailingSlash: 'always',
  // porta del dev server
  server: { port: 4625 },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});
