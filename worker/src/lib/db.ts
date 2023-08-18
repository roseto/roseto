import { Space } from "../../../src/types/Space";
import { Template } from "../../../src/types/Template";
import { collection, where, query, getDocs } from "firebase/firestore";
import { firestore } from "./firebase";

export const getSpaceBySubdomain = async (subdomain: string): Promise<Space | null> => {
	const spaces = collection(firestore, "spaces");
	const q = query(spaces, where("subdomain", "==", subdomain));
	const querySnapshot = await getDocs(q);

	if (querySnapshot.empty) {
		return null;
	}

	return querySnapshot.docs[0].data() as Space;
}

export const getSpaceById = async (id: string): Promise<Space | null> => {
	const spaces = collection(firestore, "spaces");
	const q = query(spaces, where("id", "==", id));
	const querySnapshot = await getDocs(q);

	if (querySnapshot.empty) {
		return null;
	}

	return querySnapshot.docs[0].data() as Space;
}

export const getTemplateById = async (id: string): Promise<Template | null> => {
	const templates = collection(firestore, "templates");
	const q = query(templates, where("id", "==", id));
	const querySnapshot = await getDocs(q);

	if (querySnapshot.empty) {
		return null;
	}

	return querySnapshot.docs[0].data() as Template;
}
