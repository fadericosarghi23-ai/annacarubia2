import type { APIRoute } from 'astro';

// robots.txt generato in build: la riga Sitemap usa lo stesso dominio di
// canonical e sitemap (astro.config.mjs -> site, su Netlify la variabile URL).
export const GET: APIRoute = ({ site }) =>
  new Response(
    `User-agent: *\nAllow: /\n\nSitemap: ${new URL('sitemap-index.xml', site).href}\n`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
  );
