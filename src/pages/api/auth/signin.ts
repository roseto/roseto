import type { APIRoute } from "astro";
import { app } from "@/lib/firebase/server";
import { getAuth } from "firebase-admin/auth";

export const get: APIRoute = async ({ cookies, request, redirect }) => {
	const auth = getAuth(app);

	const idToken = request.headers.get("Authorization")?.split("Bearer ")[1];

	if (!idToken) {
		return new Response("No token provided", { status: 401 });
	}

	try {
		await auth.verifyIdToken(idToken);
	} catch (e) {
		return new Response("Invalid token", { status: 401 });
	}

	const fiveDays = 1000 * 60 * 60 * 24 * 5;
	const sessionCookie = auth.createSessionCookie(idToken, { expiresIn: fiveDays });

	cookies.set("session", sessionCookie, { path: "/" });

	return redirect("/home")
}
