import { ContactNowButton } from "@/components/contact/ContactNowButton";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

const BASE_OFFSET = 32;
const FOOTER_THRESHOLD = 192;

const QuickActions = () => {
	const [_, setIsNearFooter] = useState(false);
	const [bottomOffset, setBottomOffset] = useState(BASE_OFFSET);

	useEffect(() => {
		const checkFooterPosition = () => {
			const footer = document.querySelector("footer");
			if (!footer) return;

			const footerRect = footer.getBoundingClientRect();
			const footerHeight = footerRect.height;
			const windowHeight = window.innerHeight;
			const distanceToFooter = footerRect.top - windowHeight;

			if (distanceToFooter < FOOTER_THRESHOLD) {
				const overlap = FOOTER_THRESHOLD - distanceToFooter;
				const newOffset = Math.min(footerHeight + BASE_OFFSET, BASE_OFFSET + overlap);
				setBottomOffset(newOffset);
				setIsNearFooter(true);
			} else {
				setBottomOffset(BASE_OFFSET);
				setIsNearFooter(false);
			}
		};

		window.addEventListener("scroll", checkFooterPosition);
		checkFooterPosition();

		return () => window.removeEventListener("scroll", checkFooterPosition);
	}, []);

	return (
		<div className="absolute right-8" style={{ bottom: bottomOffset }}>
			<div className="flex flex-col gap-4">
				<QuickActionButton
					href="https://zalo.me/3824695044861019950"
					icon={<Image src="/zalo.svg" alt="zalo icon" width={0} height={0} className="w-10 h-auto" />}
					label="Liên hệ qua Zalo"
					className="bg-white rounded-lg"
				/>

				<ContactNowButton />
			</div>
		</div>
	);
};

const QuickActionButton = ({
	href,
	icon,
	label,
	className = "",
}: {
	href: string;
	icon: React.ReactNode;
	label: string;
	className?: string;
}) => (
	<a
		href={href}
		target="_blank"
		rel="noopener noreferrer"
		className={cn(
			"w-12 h-12 flex items-center justify-center shadow-elevation pointer-events-auto",
			"transition-all duration-300 hover:-translate-y-1 hover:scale-105",
			className,
		)}
		aria-label={label}
	>
		{icon}
	</a>
);

export default function () {
	return (
		<div className="fixed bottom-0 w-full">
			<div className="mx-auto max-w-[1440px] relative">
				<QuickActions />
			</div>
		</div>
	);
}
