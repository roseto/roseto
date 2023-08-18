export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const subdomain = new URL(request.url).hostname.split('.')[0];
		const path = new URL(request.url).pathname;

		// Make some checks that the user exists
		if (path === "/") {
			return fetch("https://roseto.space/" + subdomain)
		} else {
			return fetch("https://roseto.space" + path)
		}
	},
};
