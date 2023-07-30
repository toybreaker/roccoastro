import { defineConfig } from 'astro/config'
import partytown from '@astrojs/partytown'
import sitemap from '@astrojs/sitemap'
import robotsTxt from 'astro-robots-txt'
import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true
  },
  output: 'static',
  build: {
    // The 'auto' option will inline only the stylesheets that are below the vite.build.assetsInlineLimit threshold,
    // reducing the number of requests for smaller sheets.
    // Larger stylesheets, such as global ones used by all pages,
    // will still be fetched externally and cached:
    // inlineStylesheets: 'auto'

    // inline all stylesheets:
    inlineStylesheets: 'always'
  },
  integrations: [
    sitemap(),
    robotsTxt(),
    mdx({
      extendMarkdownConfig: false,
      gfm: true,
      drafts: true
    }),
    partytown({
      // Example: Add dataLayer.push as a forwarding-event.
      config: {
        forward: ['dataLayer.push']
      }
    })
  ],
  outDir: './dist',
  site: 'https://n.roccomarosi.com/',
  base: '/'
})
