import { z, defineCollection } from "astro:content";

const infoCollection = defineCollection({
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
		projectId: z.string().optional(),
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
	info: infoCollection,
	categories: categoriesCollection,
	contributors: contributorsCollection,
	projects: projectsCollection,
	tiers: tiersCollection
}
