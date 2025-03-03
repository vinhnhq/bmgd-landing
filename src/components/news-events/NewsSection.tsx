import { HeaderTitle } from "@/components/me/header";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NewsContent from "./NewsContent";
import { useState } from "react";

interface NewsSectionProps {
	title: string;
	data: {
		list: Array<{ id: string; title: string; date: string }>;
		featured: {
			id: string;
			title: string;
			date: string;
			description: string;
			imageUrl?: string;
		};
		cards: Array<{
			id: string;
			title: string;
			date: string;
			imageUrl: string;
		}>;
	};
	eventsData?: {
		list: Array<{ id: string; title: string; date: string }>;
		featured: {
			id: string;
			title: string;
			date: string;
			description: string;
			imageUrl?: string;
		};
		cards: Array<{
			id: string;
			title: string;
			date: string;
			imageUrl: string;
		}>;
	};
	tabs: Array<{
		value: string;
		label: string;
	}>;
	defaultTab?: string;
}

const NewsSection = ({ title, data, eventsData, tabs, defaultTab = tabs[0]?.value }: NewsSectionProps) => {
	const [activeTab, setActiveTab] = useState(defaultTab);

	return (
		<div>
			<div className="flex justify-between mb-4">
				<HeaderTitle title={title} />

				<Tabs defaultValue={defaultTab} className="w-auto" onValueChange={setActiveTab}>
					<TabsList className="bg-transparent border-none p-0 h-auto">
						{tabs.map((tab, index) => (
							<TabsTrigger
								key={tab.value}
								value={tab.value}
								className={`text-[28px] font-bold pb-2 px-0 ${
									index < tabs.length - 1 ? "mr-8" : ""
								} data-[state=active]:text-[#D71D22] data-[state=inactive]:text-[#858585] bg-transparent hover:text-[#D71D22] hover:bg-transparent transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#D71D22] after:opacity-0 hover:after:opacity-100 data-[state=active]:after:opacity-100 after:transition-opacity`}
							>
								{tab.label}
							</TabsTrigger>
						))}
					</TabsList>
				</Tabs>
			</div>

			<NewsContent {...(activeTab.includes("event") ? eventsData || data : data)} />
		</div>
	);
};

export default NewsSection;
