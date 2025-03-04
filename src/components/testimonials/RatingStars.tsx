import { cn } from "@/lib/utils";
import { FaStar } from "react-icons/fa";

export default function RatingStars({
	rating,
	id,
	className,
}: {
	rating: number;
	id: string;
	className?: string;
}) {
	return (
		<div className={cn("flex gap-1", className)} role="img" aria-label={`${rating} out of 5 stars`}>
			{Array.from({ length: rating }).map((_, index) => (
				<FaStar key={`${id}-star-${index + 1}`} className="w-4 h-4" />
			))}
		</div>
	);
}
