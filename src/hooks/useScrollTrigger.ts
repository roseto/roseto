import { useEffect, useState } from "react";

export const useScrollTrigger = (threshold: number) => {
	const [trigger, setTrigger] = useState(false);

	const callback = () => setTrigger(window.scrollY > threshold);

	useEffect(() => {
		callback();
		window.addEventListener("scroll", callback);

		return () => window.removeEventListener("scroll", callback);
	}, []);

	return trigger;
}
