import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware(async ({ request, url }, next) => {
	// Check if the request has a subdomain
	console.log("URL:", url);
	const subdomain = url.hostname.split(".")[0];

	if (subdomain !== url.hostname) {
		console.log("Subdomain:", subdomain);
		const res = await fetch(url.origin.replace(subdomain + ".", "") + "/users/" + subdomain);

		return res;
	}

	return next();
});
