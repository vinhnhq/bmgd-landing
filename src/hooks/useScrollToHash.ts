import { usePathname } from "next/navigation";
import { useEffect } from "react";

export const useScrollToHash = () => {
	const pathname = usePathname();

	useEffect(() => {
		// Get the hash from the URL
		const hash = pathname.split("#")[1];
		if (hash) {
			// Remove the '#' symbol
			const elementId = hash;

			// Find the element
			const element = document.getElementById(elementId);

			if (element) {
				// Wait a bit for any animations/transitions to complete
				setTimeout(() => {
					// Calculate the element's position to center it
					const elementRect = element.getBoundingClientRect();
					const absoluteElementTop = elementRect.top + window.pageYOffset;
					const middleOfElement = absoluteElementTop - window.innerHeight / 2 + elementRect.height / 2;

					// Smooth scroll to the centered position
					window.scrollTo({
						top: middleOfElement,
						behavior: "smooth",
					});
				}, 100);
			}
		} else {
			// If no hash, scroll to top
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
	}, [pathname]); // Re-run when hash changes
};
