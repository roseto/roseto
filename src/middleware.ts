import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async ({ request, url }, next) => {
	if (url.hostname.startsWith("sign.") && !request.headers.has("X-Astro-Rewrite")) {
		url.hostname = url.hostname.slice(5);
		url.pathname = "/sign"
		const res = await fetch(url, {
			...request,
			headers: {
				...request.headers,
				"X-Astro-Rewrite": "true"
			}
		})

		return res;
	}

	// Continue to the next middleware or route handler
	return next();
});
