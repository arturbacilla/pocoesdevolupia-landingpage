import { useEffect, useState } from "react";

export const useScrollProgress = () => {
	const [scrollProgress, setScrollProgress] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const totalHeight =
				document.documentElement.scrollHeight - window.innerHeight;
			const currentProgress = (window.scrollY / totalHeight) * 100;
			setScrollProgress(Math.min(currentProgress, 100));
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll(); // Initial calculation

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return scrollProgress;
};
