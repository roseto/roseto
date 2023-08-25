import { Badge } from "@/components/ui/badge";
import { useMemo, useState } from "react";
import useSWR from "swr";

const URL = "https://roseto.instatus.com/summary.json";

interface StatusResponse {
	page: {
		status: "UP" | "HASISSUES" | "UNDERMAINTENANCE";
	}
}

const fetcher = (url: string) => fetch(url)
	.then((res) => res.json())
	.then((data: StatusResponse) => data.page.status);

export default function StatusBadge() {
	const { data, error, isLoading } = useSWR(URL, fetcher);

	const statusDisplay = useMemo(() => {
		if (isLoading) return "Loading...";
		if (error) return "Error";
		if (data === "UP") return "Operational";
		if (data === "HASISSUES") return "Issues";
		if (data === "UNDERMAINTENANCE") return "Under Maintenance";
		return "Unknown";
	}, [data]);

	return (
		<a
			href="https://roseto.instatus.com"
			target="_blank"
			rel="noreferrer noopener"
		>
			<Badge
				variant={data === "UP" ? "outline" : data === "HASISSUES" ? "destructive" : "secondary"}
				className={data === "UP" ? "border-muted-foreground" : ""}
			>
				<div
					className={`w-2 h-2 rounded-full mr-2 ${data === "UP" ? "bg-green-500" : data === "HASISSUES" ? "bg-red-500" : "bg-yellow-500"}`}
				/>
				Status: {statusDisplay}
			</Badge>
		</a>
	);
}
