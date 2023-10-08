import { z, defineCollection } from "astro:content";

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
		avatar: z.string(),
		link: z.string().url(),
		core: z.boolean().optional(),
		partner: z.boolean().optional()
	})
})

const diplomasCollection = defineCollection({
	type: "data",
	schema: z.object({
		id: z.string().length(3),
		status: z.enum(["ok", "cancelled"]),
		name: z.string()
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

const projectsCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		link: z.string().url().optional(),
		cover: z.string().optional(),
		date: z.date().optional(),
		location: z.string().optional()
	})
});

const tiersCollection = defineCollection({
	type: "data",
	schema: z.object({
		name: z.string(),
		description: z.string(),
		type: z.enum(["service", "product", "donation", "sponsor"]),
		more: z.string().optional(),
		interval: z.enum(["once", "monthly"]),
		link: z.string().url(),
		amount: z.number().gt(0),
	})
})

export const collections = {
	docs: docsCollection,
	categories: categoriesCollection,
	contributors: contributorsCollection,
	diplomas: diplomasCollection,
	projects: projectsCollection,
	tiers: tiersCollection
}
