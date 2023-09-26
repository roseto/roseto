import { cn } from "@/lib/utils";
import { InfoCircledIcon } from "@radix-ui/react-icons";

function Hint({ className, ...props }: JSX.IntrinsicElements["div"]) {
	return (
		<div
			className={cn("flex flex-row flex-nowrap gap-1 text-muted-foreground", className)}
			{...props}
		>
			<InfoCircledIcon className="w-4 h-4"/>
			<p className="text-xs">
				{props.children}
			</p>
		</div>
	)
}

export { Hint }
