import { headTemplate } from "./lib/head";
import { processKeys } from "./lib/templateEngine";

export interface Env {
	CACHE: KVNamespace;
}

const fetchTemplate = async () => {
	return `
		<main>
			<h1>{@username}</h1>
		</main>
	`
}

export default {
	async fetch(req: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const subdomain = new URL(req.url).hostname.split('.')[0];

		if (req.method === "GET") {
			const data = {
				username: subdomain,
			}

			const cached = await env.CACHE.get(subdomain);

			if (cached) {
				console.log("Serving cached page for", subdomain);

				return new Response(cached, {
					headers: {
						"content-type": "text/html;charset=UTF-8",
					},
				});
			}

			const mainTemplate = await fetchTemplate();

			const pageTemplate = headTemplate + "<body>" + mainTemplate + "</body>";

			const page = processKeys(pageTemplate, data);

			ctx.waitUntil(env.CACHE.put(subdomain, page));

			return new Response(page, {
				headers: {
					"content-type": "text/html;charset=UTF-8",
				},
			});
		}

		return new Response("Hello world!");
	},
};
