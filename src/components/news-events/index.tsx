import { Container } from "@/components/layout";
import NewsSection from "./NewsSection";

const mockNews = {
	list: [
		{
			id: "1",
			title: "Bảo hiểm du lịch - Giải pháp an toàn cho mọi chuyến đi",
			date: "12/12/2023",
		},
		{
			id: "2",
			title: "Bảo hiểm sức khỏe toàn diện - Chăm sóc sức khỏe tối ưu",
			date: "11/12/2023",
		},
		{
			id: "3",
			title: "Bảo hiểm tai nạn 24/7 - An tâm mọi lúc mọi nơi",
			date: "10/12/2023",
		},
	],
	featured: {
		id: "4",
		title: "Bảo hiểm du lịch - Đồng hành cùng mọi hành trình",
		date: "09/12/2023",
		description:
			"Khám phá giải pháp bảo hiểm du lịch toàn diện, mang đến sự an tâm tuyệt đối cho mọi chuyến đi của bạn.",
		imageUrl: "/news.png",
	},
	cards: [
		{
			id: "5",
			title: "Bảo hiểm sức khỏe - Chăm sóc sức khỏe toàn diện",
			date: "08/12/2023",
			imageUrl: "/news-1.png",
		},
		{
			id: "6",
			title: "Bảo hiểm nhân thọ - Bảo vệ tương lai",
			date: "07/12/2023",
			imageUrl: "/news-2.png",
		},
	],
};

const mockEvents = {
	list: [
		{
			id: "1",
			title: "Hội thảo giới thiệu sản phẩm bảo hiểm mới",
			date: "15/12/2023",
		},
		{
			id: "2",
			title: "Chương trình đào tạo đại lý bảo hiểm",
			date: "14/12/2023",
		},
		{
			id: "3",
			title: "Hội nghị khách hàng thân thiết 2023",
			date: "13/12/2023",
		},
	],
	featured: {
		id: "4",
		title: "Triển lãm bảo hiểm quốc tế 2023",
		date: "12/12/2023",
		description:
			"Sự kiện quy tụ các công ty bảo hiểm hàng đầu, giới thiệu các sản phẩm và giải pháp bảo hiểm mới nhất.",
		imageUrl: "/person_drawing.jpeg",
	},
	cards: [
		{
			id: "5",
			title: "Hội thảo tư vấn bảo hiểm sức khỏe",
			date: "11/12/2023",
			imageUrl: "/health_insurance.jpeg",
		},
		{
			id: "6",
			title: "Chương trình tri ân khách hàng",
			date: "10/12/2023",
			imageUrl: "/visa_application.jpeg",
		},
	],
};

const firstSectionTabs = [
	{ value: "daily", label: "Tin Tức Hàng Ngày" },
	{ value: "events", label: "Dành Cho CTV" },
];

const NewsEvents = () => {
	return (
		<Container className="px-28 my-16">
			<NewsSection
				title="Tin Tức & Sự Kiện"
				data={mockNews}
				eventsData={mockEvents}
				tabs={firstSectionTabs}
				defaultTab="daily"
			/>
		</Container>
	);
};

export default NewsEvents;
