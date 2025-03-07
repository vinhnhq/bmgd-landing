interface NewsItem {
	id: string;
	title: string;
	date: string;
}

const NewsItem = ({ title, date, id }: NewsItem) => {
	return (
		<div className="flex flex-col gap-4">
			<h3 className="text-base font-bold text-black">{title}</h3>
			<div className="flex items-center gap-2 ml-4">
				<div className="w-2 h-2 rounded-full bg-black" />
				<span className="text-sm font-semibold italic text-text-third">{date}</span>
			</div>
			<div className="border-b-2 border-dashed border-black/40" />
		</div>
	);
};

const NewsList = ({ items }: { items: Array<NewsItem> }) => {
	return (
		<div className="rounded-2xl shadow-elevation overflow-hidden h-full">
			<div className="py-8">
				<div className="h-[599.5px] overflow-y-scroll scroll-smooth scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-transparent scrollbar-thumb-brand-redPrimary">
					<div className="px-4 space-y-4">
						{items.map((item) => (
							<NewsItem key={item.id} title={item.title} date={item.date} id={item.id} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewsList;
