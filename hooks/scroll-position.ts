import { useEffect, useState } from "react";

export default function useScrollPosition() {
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		function updatePosition() {
			setScrollPosition(window.pageYOffset);
		}
		window.addEventListener("scroll", updatePosition);
		updatePosition();
		return () => window.removeEventListener("scroll", updatePosition);
	}, []);

	return scrollPosition;
};

