import { cn } from "@/lib/utils";
import { ExclamationTriangleIcon, InfoCircledIcon } from "@radix-ui/react-icons";

interface Props {
	type: "info" | "error"
}

function Hint({ className, type, ...props }: JSX.IntrinsicElements["div"] & Props) {
	const typeColor = type === "error" ? "text-destructive" : "text-muted-foreground";

	return (
		<div
			className={cn("flex flex-row flex-nowrap gap-1", typeColor, className)}
			{...props}
		>
			{type === "error" ? 
				<ExclamationTriangleIcon className="w-4 h-4"/>
				:
				<InfoCircledIcon className="w-4 h-4"/>
			}
			<p className="text-xs">
				{props.children}
			</p>
		</div>
	)
}

export { Hint }
