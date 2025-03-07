import { HeaderTitle } from "@/components/me/header";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { useState } from "react";
import NewsContent from "./NewsContent";

interface NewsSectionProps {
	title: string;
	data: {
		list: Array<{ id: string; title: string; date: string }>;
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
	};
	eventsData?: {
		list: Array<{ id: string; title: string; date: string }>;
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
					<TabsList className="bg-transparent border-none p-0 h-auto gap-4">
						{tabs.map((tab, index) => (
							<TabsTrigger
								key={tab.value}
								value={tab.value}
								className={cn(
									"text-2xl font-bold pb-2 px-0 relative transition-all duration-100",
									"bg-transparent hover:text-functional-link",
									"data-[state=active]:text-functional-link",
									"after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5",
									"after:bg-functional-link after:opacity-0 hover:after:opacity-100 data-[state=active]:after:opacity-100",
								)}
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
