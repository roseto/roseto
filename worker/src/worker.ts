import { Space } from "../../src/types/Space";
import { getSpaceBySubdomain, getTemplateById } from "./lib/db";
import { headTemplate } from "./lib/head";
import { processKeys } from "./lib/templateEngine";

export interface Env {
	CACHE: KVNamespace;
}

export default {
	async fetch(req: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const DEV = req.url.includes("localhost");

		const subdomain = new URL(req.url).hostname.split('.')[0];
		const pathname = new URL(req.url).pathname;

		if (req.method === "GET" && pathname === "/") {
			const space = await getSpaceBySubdomain(subdomain);

			if (!space) {
				return new Response("Space not found", {
					status: 404,
				});
			}

			const cached = await env.CACHE.get(subdomain);

			if (cached && !DEV) {
				console.log("Serving cached page for", subdomain);

				return new Response(cached, {
					headers: {
						"content-type": "text/html;charset=UTF-8",
					},
				});
			}

			const mainTemplate = await getTemplateById(space.id);

			const pageTemplate = headTemplate + "<body>" + mainTemplate + "</body>";

			const page = processKeys(pageTemplate, {
				name: space.name,
				theme: space.themeId || "default",
			});

			ctx.waitUntil(env.CACHE.put(subdomain, page));

			return new Response(page, {
				headers: {
					"content-type": "text/html;charset=UTF-8",
				},
			});
		}

		// Favicon
		if (req.method === "GET" && pathname === "/logo.svg") {
			return await fetch("https://roseto.space/logo.svg");
		}

		// Revalidate
		if (req.method === "POST" && pathname === "/revalidate") {
			ctx.waitUntil(env.CACHE.delete(subdomain))

			return new Response("Revalidated");
		}


		return new Response("Unsupported");
	},
};
