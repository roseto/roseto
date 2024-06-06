import { z, defineCollection } from "astro:content";

const projectsCollection = defineCollection({
	type: "content",
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		link: z.string().url().optional(),
		cover: image().or(z.string().url()).optional(),
		date: z.date().optional(),
		location: z.string().optional(),
		aliases: z.array(z.string()).optional(),
	})
});

const servicesCollection = defineCollection({
	type: "content",
	schema: ({ image }) => z.object({
		icon: image().or(z.string().url()),
		title: z.string(),
		description: z.string(),
		pricing: z.string().optional(),
		className: z.string().optional(),
		link: z.string().url().or(z.string()).optional(),
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
	services: servicesCollection,
	projects: projectsCollection,
	updates: updatesCollection,
}
