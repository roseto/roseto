import { initializeApp } from "firebase/app";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

export const firebaseConfig = {
	apiKey: "AIzaSyAFo1Srete0yGbKOVHJB0whtwhYiUH3arQ",
	authDomain: "auth.roseto.space",
	projectId: "rosetodotspace",
	storageBucket: "rosetodotspace.appspot.com",
	messagingSenderId: "420637582866",
	appId: "1:420637582866:web:7264f4dc54b65261311acb"
};

export const app = initializeApp(firebaseConfig);

declare global {
	interface Window {
		FIREBASE_APPCHECK_DEBUG_TOKEN: string;
	}
}

export const initAppCheck = () => {
	// Check if in development mode
	if (import.meta.env.DEV) {
		self.FIREBASE_APPCHECK_DEBUG_TOKEN = import.meta.env.PUBLIC_FIREBASE_APPCHECK_DEBUG_TOKEN;
	};

	initializeAppCheck(app, {
		provider: new ReCaptchaV3Provider("6LcfD7snAAAAAEyEd6WPYLIBk5hJiTTu29tgDd0J")
	});
}
