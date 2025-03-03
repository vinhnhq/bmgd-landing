interface NewsListProps {
	items: Array<{
		id: string;
		title: string;
		date: string;
	}>;
}

const NewsItem = ({ title, date }: { title: string; date: string }) => {
	return (
		<div className="relative">
			<div className="flex flex-col gap-2 pb-4">
				<h3 className="text-base font-bold text-black line-clamp-3">{title}</h3>
				<div className="flex items-center gap-2 ml-6">
					<div className="w-2 h-2 rounded-full bg-[#2B2A29]" />
					<span className="text-[15px] font-semibold italic  text-[#444444]">{date}</span>
				</div>
			</div>
			<div className="border-b-2 border-dashed border-[#A4A2A1]" />
		</div>
	);
};

const NewsList = ({ items }: NewsListProps) => {
	return (
		<div className="rounded-2xl shadow-elevation">
			<div className="py-8">
				<div className="h-[599.5px] overflow-y-scroll scroll-smooth scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-transparent scrollbar-thumb-[#F24444]">
					<div className="px-4 space-y-4">
						{items.map((item) => (
							<NewsItem key={item.id} title={item.title} date={item.date} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewsList;
