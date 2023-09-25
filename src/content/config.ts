import { z, defineCollection, reference } from "astro:content";

const docsCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string(),
	})
});

const contributorsCollection = defineCollection({
	type: "data",
	schema: z.object({
		name: z.string(),
		avatar: z.string().url(),
		link: z.string().url(),
		core: z.boolean().optional(),
	})
})

const categoriesCollection = defineCollection({
	type: "data",
	schema: z.object({
		name: z.string(),
		emoji: z.string(),
		disabled: z.boolean().optional(),
	})
});

const knowledgeCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		authors: z.array(reference("contributors")),
		description: z.string(),
		category: reference("categories"),
		"additional-categories": z.array(reference("categories")).optional(),
	})
});

const projectsCollection = defineCollection({
	type: "data",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		link: z.string().url(),
	})
});

export const collections = {
	docs: docsCollection,
	categories: categoriesCollection,
	contributors: contributorsCollection,
	knowledge: knowledgeCollection,
	projects: projectsCollection,
}
