import type { Diploma } from "@/types/Diploma";

export const getDiploma = async (id: string, locals: App.Locals) => {
	// Populate local dev environment with test data
	const { runtime } = locals;
	await populateDev(locals);

	const diploma = await runtime.env.diplomas.get<Diploma>(id.toUpperCase(), { type: "json" });

	return diploma;
}

const populateDev = async ({ runtime }: App.Locals) => {
	if (import.meta.env.DEV) {
		const empty = await runtime.env.diplomas.list().then((res) => res.keys.length === 0);
		
		if (empty) {
			await runtime.env.diplomas.put("1P0", JSON.stringify({
				id: "1P0",
				name: "Test Diploma",
				status: "ok",
			}));
		}
	}
}