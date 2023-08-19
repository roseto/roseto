import type { APIRoute } from "astro";
import { app } from "@/lib/firebase/server";
import { DecodedIdToken, getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

export const get: APIRoute = async ({ cookies, request, redirect }) => {
	const auth = getAuth(app);
	const firestore = getFirestore(app);

	const idToken = request.headers.get("Authorization")?.split("Bearer ")[1];
	let decodedToken: DecodedIdToken;

	if (!idToken) {
		return new Response("No token provided", { status: 401 });
	}

	try {
		decodedToken = await auth.verifyIdToken(idToken);
	} catch (e) {
		console.error(e);
		return new Response("Invalid token", { status: 401 });
	}

	const fiveDays = 1000 * 60 * 60 * 24 * 5;
	const sessionCookie = await auth.createSessionCookie(idToken, { expiresIn: fiveDays });

	cookies.set("session", sessionCookie, { path: "/" });

	const userRef = firestore.collection("users").doc(decodedToken.uid);
	const userDoc = await userRef.get();

	if (!userDoc.exists) {
		return redirect("/onboarding");
	}

	return redirect("/home")
}
