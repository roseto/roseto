import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import prefetch from "@astrojs/prefetch";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	server: {
		port: 3000
	},
	integrations: [
		react(), 
		tailwind({
			applyBaseStyles: false
		}), 
		sitemap(), 
		mdx(), 
		prefetch()
	],
	vite: {
		build: {
		  minify: false,
		},
	  },	
	output: "hybrid",
	adapter: cloudflare({
		runtime: {
			mode: "local",
			persistTo: ".wrangler/state/v3"
		}
	})
});
