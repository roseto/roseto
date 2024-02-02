import { useInView } from "react-intersection-observer";

interface Props {
	triggerInView?: boolean;
	children: React.ReactNode;
	className?: string;
	delay?: 100 | 150 | 200 | 300 | 500 | 700 | 1000;
}

// We use this so Tailwind can generate the animation classes
const _animationStringDelay = "delay-100 delay-150 delay-200 delay-300 delay-500 delay-700 delay-1000";

export default function SlideUp({ children, delay, className, triggerInView }: Props) {
	const isBrowser = typeof window !== "undefined";
	const { ref, inView } = useInView({
		threshold: 0.40,
		triggerOnce: true,
		initialInView: true
	});
	
	const triggered = isBrowser && triggerInView ? inView : true;

	// Don't even ask me about the noscript tag, it's a hack to make sure the animation works even with JS disabled
	return (
		<>
			<div
				className={`slide-up-container opacity-0 noscript:opacity-1 ${triggered ? "animate-slide-up" : ""} ${delay ? "delay-" + delay : ""} ${className || ""}`}
				ref={ref}
			>
				{children}
			</div>
		</>
	)
}
