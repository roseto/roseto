import { z, defineCollection, reference } from "astro:content";

const rosetoDocsCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string(),
	})
});

const authorsCollection = defineCollection({
	type: "data",
	schema: z.object({
		name: z.string(),
		avatar: z.string().url(),
		handle: z.string(),
		link: z.string().url(),
	})
});

const categoriesCollection = defineCollection({
	type: "data",
	schema: z.object({
		name: z.string(),
		emoji: z.string(),
		disabled: z.boolean().optional(),
	})
});

const docsCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		author: reference("authors"),
		description: z.string(),
		category: reference("categories"),
		"additional-categories": z.array(reference("categories")).optional(),
	})
});

export const collections = {
	"roseto-docs": rosetoDocsCollection,
	authors: authorsCollection,
	categories: categoriesCollection,
	docs: docsCollection,
	guides: docsCollection,
}
