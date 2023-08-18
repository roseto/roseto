export interface Space {
	id: string;
	username: string;
	name: string;
	avatarUrl: string;

	backgroundImageUrl?: string;
	textAlign?: "left" | "center" | "right";
	textColor?: string;
	textFont?: "sans-serif" | "serif" | "monospace" | "cursive" | "fantasy";

	social?: {
		instagram?: string;
		twitter?: string;
		facebook?: string;
		youtube?: string;
		tiktok?: string;
	}
}
