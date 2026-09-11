// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://aionlineprotractor.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'pt', 'fr', 'de', 'ja', 'ko', 'it'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          es: 'es',
          pt: 'pt',
          fr: 'fr',
          de: 'de',
          ja: 'ja',
          ko: 'ko',
          it: 'it',
        },
      },
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) => !page.includes('/404') && !page.includes('/500'),
      serialize(item) {
        if (item.url === 'https://aionlineprotractor.com/') {
          item.changefreq = 'daily';
          item.priority = 1.0;
        } else if (
          item.url.includes('/360-protractor') ||
          item.url.includes('/inclinometer') ||
          item.url.includes('/three-point-angle') ||
          item.url.includes('/measure-angle-image')
        ) {
          item.changefreq = 'weekly';
          item.priority = 0.9;
        } else {
          item.changefreq = 'monthly';
          item.priority = 0.6;
        }
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
