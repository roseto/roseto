import type { Diploma } from "@/types/Diploma";
import { sanityClient } from "./sanity";

export const getDiploma = async (id: string) => {
	const diploma = await sanityClient.fetch<Diploma | null>(`*[_type == "diploma" && id == $id][0] {
		id,
		name,
		blogPost,
		projectId
	}`, { id: id.toUpperCase() });

	return diploma;
}