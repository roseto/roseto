import { createClient } from "@sanity/client"

export const sanityClient = createClient({
	projectId: import.meta.env.SANITY_PROJECT_ID,
	dataset: "production",
	useCdn: true,
	token: import.meta.env.SANITY_TOKEN,
	perspective: "published",
	apiVersion: "2022-03-07",
})