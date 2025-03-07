import FeaturedNews from "./FeaturedNews";
import NewsCard from "./NewsCard";
import NewsList from "./NewsList";

interface NewsContentProps {
	list: Array<{
		id: string;
		title: string;
		date: string;
	}>;
	featured: {
		id: string;
		title: string;
		date: string;
		description: string;
		imageUrl: string;
	};
	cards: Array<{
		id: string;
		title: string;
		date: string;
		imageUrl: string;
	}>;
}

export default function NewsContent({ list, featured, cards }: NewsContentProps) {
	return (
		<div className="grid grid-cols-12 gap-8">
			<div className="col-span-4">
				<NewsList items={list} />
			</div>

			<div className="col-span-5">
				<FeaturedNews {...featured} />
			</div>

			<div className="col-span-3 flex flex-col justify-between space-y-8">
				{cards.map((card) => (
					<NewsCard key={card.id} {...card} />
				))}
			</div>
		</div>
	);
}
