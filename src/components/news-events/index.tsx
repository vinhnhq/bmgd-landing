"use client";

import { Container } from "@/components/layout";
import NewsSection from "./NewsSection";

const images = {
	news: "/news.png",
	news1: "/news-1.png",
	news2: "/news-2.png",
	personDrawing: "/person_drawing.jpeg",
	healthInsurance: "/health_insurance.jpeg",
	visaApplication: "/visa_application.jpeg",
};

const mockNews = {
	list: [
		{
			id: "1",
			title: "BẢO MINH KÝ KẾT HỢP TÁC CÙNG BỆNH VIỆN PHỤ SẢN HÀ NỘI",
			date: "11/10/2024",
		},
		{
			id: "2",
			title: "ĐẠI HỘI ĐỒNG CỔ ĐÔNG BẢO MINH (BMI) 2024: CAM KẾT ĐỒNG HÀNH VÀ PHÁT TRIỂN BỀN VỮNG",
			date: "24/04/2024",
		},
		{
			id: "3",
			title: "BẢO MINH CHI TRẢ BỒI THƯỜNG CHO THÂN NHÂN NGƯỜI TỬ VONG TRONG VỤ CHÁY CHUNG CƯ MINI",
			date: "13/09/2023",
		},
		{
			id: "4",
			title: 'BẢO MINH TÀI TRỢ CHƯƠNG TRÌNH "CHẮP CÁNH ƯỚC MƠ" CHO TRẺ EM NGHÈO LẦN THỨ 8 TỈNH BẮC GIANG',
			date: "10/09/2023",
		},
		{
			id: "5",
			title: "BẢO MINH TRIỂN KHAI CHƯƠNG TRÌNH HỖ TRỢ KHÁCH HÀNG VÙNG LŨ MIỀN TRUNG",
			date: "05/09/2023",
		},
		{
			id: "6",
			title: "BẢO MINH THAM GIA HỘI NGHỊ PHÁT TRIỂN BẢO HIỂM BỀN VỮNG 2023",
			date: "01/09/2023",
		},
		{
			id: "7",
			title: "BẢO MINH RA MẮT SẢN PHẨM BẢO HIỂM SỨC KHỎE TOÀN DIỆN MỚI",
			date: "28/08/2023",
		},
		{
			id: "8",
			title: "BẢO MINH ĐƯỢC VINH DANH TOP 10 DOANH NGHIỆP BẢO HIỂM UY TÍN 2023",
			date: "25/08/2023",
		},
		{
			id: "9",
			title: "BẢO MINH MỞ RỘNG MẠNG LƯỚI ĐỐI TÁC BỆNH VIỆN TOÀN QUỐC",
			date: "20/08/2023",
		},
		{
			id: "10",
			title: "BẢO MINH TỔ CHỨC CHƯƠNG TRÌNH ĐÀO TẠO NÂNG CAO NGHIỆP VỤ CHO NHÂN VIÊN",
			date: "15/08/2023",
		},
	],
	featured: {
		id: "1",
		title: "BẢO MINH HỖ TRỢ KHÁCH HÀNG KHẮC PHỤC HẬU QUẢ DO BÃO SỐ 3 GÂY RA",
		date: "13/09/2024",
		description:
			"Bão Yagi đổ bộ, gây thiệt hại nặng nề cho các tỉnh phía Bắc. Ngay khi nhận tin, Bảo Minh lập tức vào cuộc, sát cánh cùng khách hàng, chung tay khắc phục hậu quả do bão gây ra.",
		imageUrl: images.news,
	},
	cards: [
		{
			id: "1",
			title: "BẢO MINH TẶNG BẢO HIỂM XE MÁY CHO ĐOÀN VIÊN CÓ HOÀN CẢNH KHÓ KHĂN TẠI QUẬN 1",
			date: "14/07/2024",
			imageUrl: images.news1,
		},
		{
			id: "2",
			title: "BẢO MINH HOÀN TẤT THỦ TỤC BỒI THƯỜNG CHO 3 TÀU CÁ BỊ CHÁY TẠI BÌNH THUẬN",
			date: "16/05/2024",
			imageUrl: images.news2,
		},
	],
};

const mockEvents = {
	list: [
		{
			id: "1",
			title: "THỜI GIAN CHỜ BẢO HIỂM LÀ GÌ? Ý NGHĨA VÀ YẾU TỐ QUYẾT ĐỊNH",
			date: "10/12/2024",
		},
		{
			id: "2",
			title: "TÁI TỤC BẢO HIỂM LÀ GÌ? ĐIỀU KIỆN, CHI PHÍ & THỜI ĐIỂM THỰC HIỆN",
			date: "10/12/2024",
		},
		{
			id: "3",
			title: "KHI NÀO NÊN VÀ KHÔNG NÊN MUA BẢO HIỂM DU LỊCH?",
			date: "10/12/2024",
		},
		{
			id: "4",
			title: "5 SỰ KHÁC BIỆT GIỮA BẢO HIỂM NHÂN THỌ VÀ PHI NHÂN THỌ",
			date: "10/12/2024",
		},
	],
	featured: {
		id: "1",
		title: "CÁC THUẬT NGỮ BẢO HIỂM CẦN BIẾT TRƯỚC KHI MUA BẢO HIỂM",
		date: "10/12/2024",
		description:
			"Khám phá 10 thuật ngữ bảo hiểm quan trọng bạn cần biết trước khi mua bảo hiểm. Hiểu rõ số tiền bảo hiểm, thời gian chờ và điều khoản loại trừ để đảm bảo quyền lợi tối đa.",
		imageUrl: images.personDrawing,
	},
	cards: [
		{
			id: "1",
			title: "SỰ KIỆN BẢO HIỂM LÀ GÌ? NHỮNG ĐIỀU CẦN BIẾT ĐỂ ĐẢM BẢO QUYỀN LỢI",
			date: "10/12/2024",
			imageUrl: images.healthInsurance,
		},
		{
			id: "2",
			title: "CÓ CẦN MUA BẢO HIỂM DU LỊCH ĐỂ XIN VISA SCHENGEN KHÔNG?",
			date: "10/12/2024",
			imageUrl: images.visaApplication,
		},
	],
};

const firstSectionTabs = [
	{ value: "daily", label: "Tin Tức Hàng Ngày" },
	{ value: "events", label: "Dành Cho CTV" },
];

const NewsEvents = () => {
	return (
		<Container className="bg-white px-28 my-16 space-y-4">
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
