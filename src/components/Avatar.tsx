import { Avatar as AvatarS, AvatarFallback, AvatarImage } from "./ui/avatar";

interface Props {
	src: string;
	alt: string;
}

export default function Avatar(props: Props) {
	return (	
		<AvatarS>
			<AvatarImage src={props.src} />
			<AvatarFallback>{props.alt}</AvatarFallback>
		</AvatarS>
	);
} 
