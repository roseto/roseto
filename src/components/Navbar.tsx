import { Button } from "./ui/button";

interface Props {
	path: string;
	buttons?: {
		text: string;
		href: string;
		target?: string;
		"data-astro-reload"?: boolean;
	}[]
}

export default function Navbar({ buttons }: Props) {
	return (
		<nav 
			className="top-0 left-0 w-full p-4 h-16 flex flex-row items-center"
		>
			<a href="/" className="mr-auto">
				<img src="/logo.svg" alt="Logo" className="w-8 h-8" />
			</a>
			<div className="flex flex-row gap-1">
				{buttons && buttons.map((button, i) => (
					<a href={button.href} target={button.target} data-astro-reload={button["data-astro-reload"]} key={i}>
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
