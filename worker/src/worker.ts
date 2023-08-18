export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const subdomain = new URL(request.url).hostname.split('.')[0];

		return fetch("https://roseto.space/users/" + subdomain)
	},
};
