import { Button } from "./ui/button";

interface Props {
	path: string;
	origin: string;
	buttons?: {
		text: string;
		href: string;
		target?: string;
	}[]
}

export default function Navbar({ buttons, origin }: Props) {
	// Check if subdomain, if subdomain go to main domain by removing subdomain (ex: "subdomain.domain.com" -> "domain.com")
	// If main domain go to "/"
	// Do this by counting the number of dots in the path
	const homepage = (origin: string) => {
		if (!origin.includes(".")) return "/";

		const dots = origin.split("").filter((char) => char === ".").length;
		return dots > 2 ? "/" : "https://" + origin.split(".").slice(1).join(".");
	}

	return (
		<nav 
			className="top-0 left-0 -mb-16 w-full p-4 h-16 flex flex-row z-50 items-center"
		>
			<a href={homepage(origin)} className="mr-auto">
				<img src="/logo.svg" alt="Logo" className="w-8 h-8" />
			</a>
			<div className="flex flex-row gap-1">
				{buttons && buttons.map((button, i) => (
					<a href={button.href} target={button.target} key={i}>
						<Button
							variant="ghost"
						>
							{button.text}
						</Button>
					</a>
				))}
			</div>
		</nav>
	)
}
