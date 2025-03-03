import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/layout";

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

const CompanyIntro = () => {
	return (
		<Container className="px-28 py-8 bg-white">
			<h2 className="text-[40px] font-bold mb-8 leading-[48px] text-black">Giới Thiệu Về Bảo Minh Gia Định</h2>

			<div className="grid grid-cols-2 gap-8">
				{features.map((feature) => (
					<Card
						key={feature.id}
						className="border-none shadow-md shadow-slate-900/40 hover:shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#F24444] cursor-pointer group"
					>
						<CardContent className="grid grid-cols-[1fr_auto] items-center p-8">
							<div className="flex flex-col gap-4">
								<h3 className="text-[28px] font-[700] text-[#D71D22] leading-[1.21] group-hover:text-white transition-all duration-300 ease-in-out origin-left scale-[0.9] group-hover:scale-100">
									{feature.title}
								</h3>
								{feature.description ? (
									<p className="text-[14px] font-[500] text-black leading-[1.43] group-hover:text-white transition-all duration-300 ease-in-out text-justify origin-left scale-[0.9] group-hover:scale-100">
										{feature.description}
									</p>
								) : (
									<ul className="text-[14px] font-[500] text-black leading-[1.43] group-hover:text-white transition-all duration-300 ease-in-out space-y-1 origin-left scale-[0.9] group-hover:scale-100">
										{feature.details?.map((detail) => (
											<li key={`${feature.id}-${detail}`} className="flex items-start gap-2">
												<span className="inline-block w-2 text-center">-</span>
												<span>{detail}</span>
											</li>
										))}
									</ul>
								)}
							</div>
							<div className="ml-4">
								<div className="w-[127px] h-[127px] rounded-full bg-[#FFEAC8] group-hover:bg-white flex items-center justify-center transition-colors duration-300 ease-in-out">
									<Image
										src={feature.icon}
										alt={feature.title}
										width={127}
										height={127}
										className="w-auto h-auto object-contain transition-transform duration-300 ease-in-out group-hover:scale-[1.03]"
									/>
								</div>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</Container>
	);
};

export default CompanyIntro;
