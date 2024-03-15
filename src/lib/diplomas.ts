import type { Diploma } from "@/types/Diploma";
import { sanityClient } from "./sanity";

export const getDiplomas = async () => {
	// Diploma has a reference to "project" 
	// Project has a field called "id"
	// Add a custom field to the query called "projectId" that is the id of the project
	const diploma = await sanityClient.fetch<Diploma[] | null>(`*[_type == "diploma"] {
		id,
		name,
		"projectId": project->id,
	}`);

	return diploma;
}