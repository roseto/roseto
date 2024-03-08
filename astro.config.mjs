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
	site: "https://roseto.co",
	trailingSlash: "ignore",
	integrations: [
		react(), 
		tailwind({
			applyBaseStyles: false
		}), 
		sitemap(), 
		mdx(), 
		prefetch()
	],
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
