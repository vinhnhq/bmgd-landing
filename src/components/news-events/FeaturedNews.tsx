interface FeaturedNewsProps {
	title: string;
	date: string;
	description: string;
	imageUrl?: string;
}

const FeaturedNews = ({ title, date, description, imageUrl }: FeaturedNewsProps) => {
	return (
		<div className="rounded-2xl shadow-elevation overflow-hidden">
			<div className="relative">
				<div className="aspect-[4/3] bg-[#D9D9D9] overflow-hidden">
					{imageUrl && <img src={imageUrl} alt={title} className="w-full h-full object-cover" />}
				</div>
				<div className="relative">
					<div className="absolute top-0 left-0 right-0 h-2 bg-[#F24444]" />
					<div className="px-4 py-8 space-y-4">
						<h3 className="text-[24px] tracking-tight font-bold  text-black line-clamp-3 min-h-[108px]">{title}</h3>
						<div className="flex items-center gap-2 ml-6">
							<div className="w-2 h-2 rounded-full bg-[#2B2A29]" />
							<span className="text-[15px] font-semibold italic  text-[#444444] leading-6">{date}</span>
						</div>
						<p className="text-base  text-black line-clamp-3 min-h-[72px]">{description}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturedNews;
