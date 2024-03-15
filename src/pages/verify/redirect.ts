import type { APIRoute } from "astro";

export const prerender = false;

export const POST: APIRoute = async ({ url, request }) => {
	const formData = await request.formData();
	let id = formData.get("id") as string | undefined;

	if (!id) {
		return new Response(null, {
			status: 302,
			headers: {
				Location: "/verify",
			},
		});
	}

	const exists = await fetch(url.origin + "/verify/" + id.toUpperCase());

	if (exists.status === 200) {
		return new Response(null, {
			status: 302,
			headers: {
				Location: `/verify/${id.toUpperCase()}`,
			},
		});
	}

	return new Response(null, {
		status: 302,
		headers: {
			Location: `/verify/not-found`,
		},
	});
}