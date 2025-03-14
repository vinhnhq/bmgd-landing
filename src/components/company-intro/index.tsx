import { Container } from "@/components/layout";
import Image from "next/image";

const features = [
	{
		id: 1,
		title: "Tổng Quan Công Ty",
		icon: "/tong-quan-cong-ty.png",
		description:
			"Bảo Minh Gia Định là công ty thành viên của Tổng Công Ty Cổ Phần Bảo Minh. Với 29 năm hoạt động và đứng top 3 trong 29 các doanh nghiệp Bảo Hiểm Phi Nhân Thọ tại Việt Nam.",
	},
	{
		id: 2,
		title: "Mạng Lưới Hoạt Động",
		icon: "/mang-luoi-hoat-dong.png",
		details: [
			"1,643 Nhân Viên",
			"65 đơn vị thành viên trên toàn quốc",
			"29 năm hoạt động bền vững",
			"Top 3 trong lĩnh vực Bảo Hiểm Phi Nhân Thọ",
		],
	},
	{
		id: 3,
		title: "Khen Thưởng",
		icon: "/khen-thuong.png",
		details: [
			"Huân chương Lao động Hạng I, II, III.",
			"Thương hiệu Việt được yêu thích nhất.",
			"Doanh nghiệp chăm lo tốt đời sống Người lao động.",
			"Top 500 doanh nghiệp lớn nhất Việt Nam.",
		],
	},
	{
		id: 4,
		title: "Sứ Mệnh Hoạt Động",
		icon: "/su-menh-hoat-dong.png",
		details: [
			"Mang lại sự an toàn, ổn định của nền kinh tế xã hội.",
			"Góp phần thúc đẩy sự phát triển vững mạnh của thị trường bảo hiểm Việt Nam.",
			"Mang lại lợi ích cho các cổ đông và góp phần giải quyết công ăn việc làm cho người dân.",
		],
	},
];

export default function CompanyIntro() {
	return (
		<Container className="px-28 py-8 bg-white space-y-8">
			<h2 className="text-4xl font-bold text-black">Giới Thiệu Về Bảo Minh Gia Định</h2>

			<div className="grid grid-cols-2 gap-8">
				{features.map((feature) => (
					<div
						key={feature.id}
						className="transition-all duration-300 hover:scale-105 hover:bg-brand-redPrimary cursor-pointer group shadow-elevation rounded-2xl"
					>
						<div className="grid grid-cols-[1fr_auto] items-center gap-4 p-6 h-full">
							<div className="flex flex-col justify-between gap-4">
								<h3 className="text-2xl font-bold text-brand-redPrimary group-hover:text-white">{feature.title}</h3>
								{feature.description ? (
									<p className="text-sm font-medium text-black group-hover:text-white text-justify">
										{feature.description}
									</p>
								) : (
									<ul className="text-sm font-medium text-black space-y-1 origin-left group-hover:text-white">
										{feature.details?.map((detail) => (
											<li key={`${feature.id}-${detail}`} className="flex items-start gap-2">
												<span className="inline-block w-2 text-center">-</span>
												<span>{detail}</span>
											</li>
										))}
									</ul>
								)}
							</div>

							<div className="w-32 h-32 rounded-full bg-bg-accent group-hover:bg-white flex items-center justify-center">
								<Image src={feature.icon} alt={feature.title} width={0} height={0} className="w-32 h-32" />
							</div>
						</div>
					</div>
				))}
			</div>
		</Container>
	);
}
