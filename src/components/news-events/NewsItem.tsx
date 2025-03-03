interface NewsItemProps {
	title: string;
	date: string;
	isHighlighted?: boolean;
}

const NewsItem = ({ title, date, isHighlighted }: NewsItemProps) => {
	return (
		<div className="relative">
			{isHighlighted && <div className="absolute right-0 top-0 w-[6px] h-[202px] bg-[#F24444] rounded-[4px]" />}
			<h3 className="text-base font-bold  mb-4 pr-8">{title}</h3>
			<div className="flex items-center gap-2">
				<div className="w-2 h-2 rounded-full bg-[#2B2A29]" />
				<span className="text-[15px] font-semibold italic  text-[#444444]">{date}</span>
			</div>
			<div className="border-b-2 border-dashed border-[#A4A2A1] mt-4" />
		</div>
	);
};

export default NewsItem;
