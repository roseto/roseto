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
	const { ref, inView } = useInView({
		threshold: 0.35,
		triggerOnce: true,
	});
	
	// Don't even ask me about the noscript tag, it's a hack to make sure the animation works even with JS disabled
	return (
		<>
			<noscript className="hidden">
				<style>{`
					.slide-up-container {
						opacity: 1;
					}
				`}</style>
			</noscript>
			<div
				className={`slide-up-container opacity-0 ${triggerInView ? inView ? "animate-slide-up" : "" : "animate-slide-up"} ${delay ? "delay-" + delay : ""} ${className || ""}`}
				ref={ref}
			>
				{children}
			</div>
		</>
	)
}
