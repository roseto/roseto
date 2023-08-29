import { z, defineCollection, reference } from "astro:content";

const docsCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string(),
	})
});

const authorCollection = defineCollection({
	type: "data",
	schema: z.object({
		name: z.string(),
		avatar: z.string().url(),
		handle: z.string(),
		link: z.string().url(),
	})
});

export const collections = {
	docs: docsCollection,
	authors: authorCollection,
}
