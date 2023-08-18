export interface Space {
	id: string;
	subdomain: string;
	templateId?: string;
	themeId?: string;

	name: string;

	social?: {
		instagram?: string;
		twitter?: string;
		facebook?: string;
		youtube?: string;
		tiktok?: string;
	}
}
