import { createSpace, getApp, getUser } from "@/lib/firebase/server";
import { getAuth } from "firebase-admin/auth";
import { getStorage, getDownloadURL } from "firebase-admin/storage";
import type { APIRoute } from "astro";

export const post: APIRoute = async ({ request, redirect, cookies }) => {
	const body = await request.json();

	const { name, username, avatar } = body;

	if (!name || !username || !avatar) {
		return new Response("Missing fields", { status: 400 });
	}

	const app = getApp();
	const user = await getUser(app, cookies);
	
	if (!user) {
		return new Response("Unauthorized", { status: 401 });
	}

	// Upload the avatar
	const storage = getStorage(app);
	const bucket = storage.bucket();
	const file = bucket.file(`avatars/${user.uid}`);

	console.log(avatar);

	// We need to convert the avatar from a base64 to a Buffer
	const avatarBuffer = Buffer.from(avatar.replace(/^data:image\/\w+;base64,/, ""), "base64");

	await file.save(avatarBuffer, {
		contentType: avatar.type,
		metadata: {
			contentType: avatar.type,
		},
	});

	const auth = getAuth(app);

	// Update the user's display name
	await auth.updateUser(user.uid, {
		displayName: name,
		photoURL: await getDownloadURL(file),
	});
	
	createSpace(app, cookies, {
		name,
		username,
		photoUrl: await getDownloadURL(file),
	})
	
	return redirect("/home");
}
