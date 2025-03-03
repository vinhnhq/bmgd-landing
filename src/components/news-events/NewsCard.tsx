interface NewsCardProps {
	title: string;
	date: string;
	imageUrl: string;
}

const NewsCard = ({ title, date, imageUrl }: NewsCardProps) => {
	return (
		<div className="rounded-2xl shadow-elevation overflow-hidden group cursor-pointer">
			<div className="relative">
				<div className="aspect-[5/3] max-h-[168px] overflow-hidden">
					<img src={imageUrl} alt={title} className="w-full h-full object-cover" />
				</div>
				<div className="bg-white group-hover:bg-[#F24444] transition-colors">
					<div className="p-6">
						<h3 className="text-[15px] leading-[20px] font-bold  text-black group-hover:text-white font-variant-all-small-caps mb-4 line-clamp-3">
							{title}
						</h3>
						<div className="flex items-center gap-2 ml-5">
							<div className="w-2 h-2 rounded-full bg-[#2B2A29] group-hover:bg-white" />
							<span className="text-[14px] leading-[24px] font-semibold italic  text-[#6A6A6A] group-hover:text-white">
								{date}
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewsCard;
