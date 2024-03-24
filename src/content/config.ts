import { z, defineCollection } from "astro:content";

const contributorsCollection = defineCollection({
	type: "data",
	schema: ({ image }) => z.object({
		name: z.string(),
		avatar: image(),
		link: z.string().url(),
		core: z.boolean().optional(),
		partner: z.boolean().optional(),
		special: z.boolean().optional(),
	})
})

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
	contributors: contributorsCollection,
	projects: projectsCollection,
	tiers: tiersCollection,
	updates: updatesCollection,
}
