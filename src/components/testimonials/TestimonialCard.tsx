import { cn } from "@/lib/utils";
import RatingStars from "./RatingStars";

export default function TestimonialCard({
	name,
	type,
	content,
	rating,
	id,
}: {
	name: string;
	type: string;
	content: string;
	rating: number;
	id: string;
}) {
	return (
		<div
			className={cn(
				"flex flex-col gap-8 justify-between h-full",
				"p-6 rounded-2xl bg-white group cursor-pointer",
				"hover:bg-brand-redPrimary hover:text-white",
			)}
		>
			<div className="space-y-4">
				<RatingStars rating={rating} id={id} className="text-brand-redPrimary group-hover:text-white" />
				<p className="text-sm text-justify text-balance">{content}</p>
			</div>
			<div>
				<div className="text-base font-bold">{name}</div>
				<span className="text-sm font-semibold italic text-black/60 group-hover:text-white">{type}</span>
			</div>
		</div>
	);
}
