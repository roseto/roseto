import { App, getApps } from "firebase-admin/app";
import type { ServiceAccount } from "firebase-admin";
import { initializeApp, cert } from "firebase-admin/app";
import type { AstroCookies } from "astro";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import type { Space } from "@/types/Space";

const serviceAccount = {
	type: "service_account",
	project_id: import.meta.env.FIREBASE_PROJECT_ID,
	private_key_id: import.meta.env.FIREBASE_PRIVATE_KEY_ID,
	private_key: import.meta.env.FIREBASE_PRIVATE_KEY,
	client_email: import.meta.env.FIREBASE_CLIENT_EMAIL,
	client_id: import.meta.env.FIREBASE_CLIENT_ID,
	auth_uri: import.meta.env.FIREBASE_AUTH_URI,
	token_uri: import.meta.env.FIREBASE_TOKEN_URI,
	auth_provider_x509_cert_url: import.meta.env.FIREBASE_AUTH_CERT_URL,
	client_x509_cert_url: import.meta.env.FIREBASE_CLIENT_CERT_URL,
};

export const getApp = () => {
	if (getApps().length) {
		return getApps()[0];
	}

	return initializeApp({
		credential: cert(serviceAccount as ServiceAccount),
		storageBucket: "rosetodotspace.appspot.com",
		projectId: "rosetodotspace",
	});
};

export const getUser = async (app: App, cookies: AstroCookies) => {
	const idToken = cookies.get("session").value;

	if (!idToken) {
		return null;
	}

	const auth = getAuth(app);
	
	try {
		const decodedToken = await auth.verifySessionCookie(idToken);
		return decodedToken;
	} catch (e) {
		console.error(e);
		return null;
	}
}

export const getSpace = async (app: App, cookies: AstroCookies, username?: string) => {
	const auth = getAuth(app);
	const firestore = getFirestore(app);

	if (username) {
		const userRef = firestore.collection("spaces").where("username", "==", username);
		const userDoc = await userRef.get();

		if (!userDoc.empty) {
			return userDoc.docs[0].data() as Space;
		}

		return null;
	}

	const signedIn = await getUser(app, cookies);

	if (!signedIn) {
		return null;
	}
	
	const user = await auth.getUser(signedIn.uid);
	const spaceRef = firestore.collection("spaces").doc(user.uid);
	const spaceDoc = await spaceRef.get();

	if (!spaceDoc.exists) {
		return null;
	}

	return spaceDoc.data() as Space;
}

export const createSpace = async (app: App, cookies: AstroCookies, space: Partial<Space>) => {
	const auth = getAuth(app);
	const firestore = getFirestore(app);

	const signedIn = await getUser(app, cookies);

	if (!signedIn) {
		return null;
	}
	
	const user = await auth.getUser(signedIn.uid);
	const spaceRef = firestore.collection("spaces").doc(user.uid);
	await spaceRef.set(space);
}
