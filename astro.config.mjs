import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import prefetch from "@astrojs/prefetch";
import cloudflare from "@astrojs/cloudflare";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 3000
  },
  vite: {
    build: {
      rollupOptions: {
        external: ["fs/promises"],
      },  
    }
  },
  site: "https://roseto.dev",
  trailingSlash: "ignore",
  integrations: [react(), tailwind({
    applyBaseStyles: false
  }), sitemap(), mdx(), prefetch(), partytown()],
  build: {
    format: "file"
  },
  output: "hybrid",
  adapter: cloudflare({
    imageService: "compile",
    runtime: {
      mode: "local",
      persistTo: ".wrangler/state/v3"
    }
  })
});