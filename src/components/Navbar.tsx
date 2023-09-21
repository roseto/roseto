import { Button } from "./ui/button";

interface Props {
	path: string;
	buttons?: {
		text: string;
		href: string;
	}[]
}

export default function Navbar({ buttons }: Props) {
	return (
		<nav transition:persist className="top-0 left-0 fixed w-full p-4 h-16 border-b flex flex-row z-50 bg-background items-center shadow">
			<a href="/" className="mr-auto">
				<img src="/logo.svg" alt="logo" className="w-8 h-8" />
			</a>
			<div className="flex flex-row gap-1">
				{buttons && buttons.map((button, i) => (
					<a href={button.href} key={i}>
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
