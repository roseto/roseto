import { Button } from "./ui/button";

interface Props {
	path: string;
}

export default function Navbar({ path }: Props) {
	return (
		<nav className="fixed w-full p-4 border-b flex flex-row z-50 bg-background items-center shadow">
			<img src="/logo.svg" alt="logo" className="w-8 h-8 mr-auto" />
			<Button
				variant="ghost"
				disabled
				className={`${path === "/dashboard" ? "text-primary" : ""}`}
			>
				Your Space
			</Button>
		</nav>
	)
}