import { z, defineCollection } from "astro:content";

const projectsCollection = defineCollection({
	type: "content",
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		spec: z.string().url().optional(),
		link: z.string().url().optional(),
		cover: image().or(z.string().url()).optional(),
		date: z.date().optional(),
		location: z.string().optional(),
		aliases: z.array(z.string()).optional(),
	})
});

const updatesCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		date: z.date(),
	})
});

export const collections = {
	projects: projectsCollection,
	updates: updatesCollection,
}
