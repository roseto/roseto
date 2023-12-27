import { useScrollTrigger } from "@/hooks/useScrollTrigger";
import { Button } from "./ui/button";

interface Props {
	path: string;
	buttons?: {
		text: string;
		href: string;
		target?: string;
	}[]
}

export default function Navbar({ buttons }: Props) {
	return (
		<nav 
			className="top-0 left-0 -mb-16 w-full p-4 h-16 flex flex-row z-50 items-center"
		>
			<a href="/" className="mr-auto">
				<img src="/logo.svg" alt="logo" className="w-8 h-8" />
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
