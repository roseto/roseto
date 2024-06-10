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

const contributionTiersCollection = defineCollection({
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
	contributionTiers: contributionTiersCollection,
	services: servicesCollection,
	projects: projectsCollection,
	updates: updatesCollection,
}
