export const processKeys = (template: string, data: Record<string, string>) => {
	return template.replace(/{@(\w+)}/g, (_, key) => {
		return data[key] || "";
	});
};
