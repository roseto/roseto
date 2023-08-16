import { Button } from "./ui/button";

export default function Navbar() {
	return (
		<nav className="fixed w-full p-4 border-b flex flex-row z-50 bg-background items-center shadow">
			<img src="/favicon.svg" alt="logo" className="w-8 h-8 mr-auto" />
			<Button
				variant="ghost"
				disabled
			>
				Pricing
			</Button>
			<Button
				variant="ghost"
				disabled
			>
				Dashboard
			</Button>
		</nav>
	)
}
