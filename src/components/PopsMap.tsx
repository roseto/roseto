import "leaflet/dist/leaflet.css";
import "@/styles/map.css";
import mapJson from "@/assets/map.json";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { useEffect, useState } from "react";

const icon = L.divIcon({
	className: "pop-icon",
	iconSize: [16, 16],
});

export default function PopsMap() {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

	useEffect(() => {		
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		}

		window.addEventListener("resize", handleResize);
		
		return () => {
			window.removeEventListener("resize", handleResize);
		}
	}, []);

	return (
		<MapContainer
			center={[51.505, -0.09]}
			zoom={isMobile ? 1 : 2}
			scrollWheelZoom={false}
			className="w-full h-full rounded z-10"
			bounds={[
				[85.0511287798, -180],
				[-85.0511287798, 180],
			]}
			maxBounds={[
				[85.0511287798, -180],
				[-85.0511287798, 180],
			]}
		>
			<TileLayer 
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			/>
			{mapJson.map((pop) => (
				<Marker icon={icon} key={pop.title} position={[pop.latitude, pop.longitude]}>
					<Popup
						className="text-center"
					>
						{pop.title}
					</Popup>
				</Marker>
			))}
		</MapContainer>
	)
}
