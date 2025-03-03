import RatingStars from "./RatingStars";

interface TestimonialCardProps {
	name: string;
	type: string;
	content: string;
	rating: number;
	id: string;
}

const TestimonialCard = ({ name, type, content, rating, id }: TestimonialCardProps) => {
	return (
		<div className="rounded-2xl shadow-md shadow-slate-900/40 overflow-hidden group cursor-pointer h-full">
			<div className="bg-white group-hover:bg-[#F24444] transition-colors p-8 h-full">
				<div className="mb-6">
					<RatingStars rating={rating} id={id} />
				</div>
				<p className="text-[15px] leading-[24px]  text-black group-hover:text-white mb-6 line-clamp-[7]">{content}</p>
				<div className="mt-auto">
					<h3 className="text-[15px] leading-[20px] font-bold  text-black group-hover:text-white">{name}</h3>
					<span className="text-[14px] leading-[24px] font-semibold italic  text-[#6A6A6A] group-hover:text-white">
						{type}
					</span>
				</div>
			</div>
		</div>
	);
};

export default TestimonialCard;
