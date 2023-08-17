import { Badge } from "@/components/ui/badge";

const URL = "https://roseto.instatus.com/summary.json";

interface StatusResponse {
	page: {
		status: "UP" | "HASISSUES" | "UNDERMAINTENANCE";
	}
}

const data: StatusResponse = await fetch(URL).then((res) => res.json()).catch(() => ({ page: { status: "UNDERMAINTENANCE" } }));
const statusDisplay = data.page.status === "UP" ? "Operational" : data.page.status === "HASISSUES" ? "Issues" : "Maintenance";

export default function StatusBadge() {
	return (
		<a
			href="https://roseto.instatus.com"
			target="_blank"
			rel="noreferrer noopener"
		>
			<Badge
				variant={data.page.status === "UP" ? "outline" : data.page.status === "HASISSUES" ? "destructive" : "secondary"}
				className={data.page.status === "UP" ? "border-background" : ""}
			>
				<div
					className={`w-2 h-2 rounded-full mr-2 ${data.page.status === "UP" ? "bg-green-500" : data.page.status === "HASISSUES" ? "bg-red-500" : "bg-yellow-500"}`}
				/>
				Status: {statusDisplay}
			</Badge>
		</a>
	)
}