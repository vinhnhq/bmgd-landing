import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { PiCaretDownBold } from "react-icons/pi";

const images = {
	product1: "/product-1.png",
	product2: "/product-2.png",
	product3: "/product-3.png",
	art1: "/art-1.png",
	art2: "/art-2.png",
	art3: "/art-3.png",
	art4: "/art-4.png",
};

const insuranceOptions = [
	{
		id: 1,
		title: "Bảo Hiểm Du Lịch Quốc Tế",
		description:
			"An tâm trên mọi hành trình với sự bảo vệ toàn diện từ tai nạn, chi phí y tế đến mất hành lý hay hủy chuyến bay, mang đến cho bạn chuyến đi trọn vẹn.",
		price: "20.000 VNĐ/ ngày",
		buttonText: "Tìm Hiểu Thêm",
		icon: images.product1,
		bgColor: "bg-brand-redPrimary",
	},
	{
		id: 2,
		title: "Bảo Hiểm Sức Khỏe Toàn Diện",
		description:
			"Tấm khiên bảo vệ bạn trước những rủi ro do tai nạn, ốm đau, bệnh tật, thai sản... Hỗ trợ viện phí và phẫu thuật, an tâm trước mọi biến cố không lường trước được.",
		price: "3.000 VNĐ/ ngày",
		buttonText: "Sắp Ra Mắt",
		bgColor: "bg-white",
		icon: images.product2,
	},
	{
		id: 3,
		title: "Bảo Hiểm Sức Khỏe Toàn Diện",
		description:
			"Bảo vệ tài chính cho gia đình trước những sự kiện không mong muốn, từ thương tật, ốm đau đến thai sản, giữ trọn nụ cười cho những người thân yêu.",
		price: "4.000 VNĐ/ ngày",
		buttonText: "Sắp Ra Mắt",
		icon: images.product3,
		bgColor: "bg-white",
	},
];

const recruitmentOptions = [
	{
		id: 1,
		title: "Hỗ Trợ Đào Tạo CTV Miễn Phí",
		description:
			"Hỗ trợ đào tạo toàn diện với giáo trình dễ hiểu: Từ kiến thức, thi chứng chỉ bảo hiểm đến kỹ năng mềm, tư vấn cách xử lý các tình huống bán hàng và chốt sale hiệu quả.",
		buttonText: "Tìm Hiểu Thêm",
		icon: images.art1,
		bgColor: "bg-[#F24444]",
	},
	{
		id: 2,
		title: "Có Sẵn Kịch Bản Bán Hàng",
		description:
			"Cung cấp kịch bản bán hàng chuyên sâu, giúp xử lý tình huống, tư vấn sản phẩm và chốt sale hiệu quả, gia tăng doanh số bán hàng.",
		buttonText: "Tìm Hiểu Thêm",
		icon: images.art2,
		bgColor: "bg-white",
	},
	{
		id: 3,
		title: "Hỗ Trợ Thiết Kế Ấn Phẩm",
		description:
			"Hỗ trợ thiết kế poster, cung cấp nội dung và video, giúp cộng tác viên dễ dàng tiếp cận khách hàng và giới thiệu sản phẩm hiệu quả hơn.",
		buttonText: "Tìm Hiểu Thêm",
		icon: images.art3,
		bgColor: "bg-white",
	},
	{
		id: 4,
		title: "Nền Tảng Bán Hàng Tiện Lợi",
		description:
			"Nền tảng bán hàng tiện lợi với portal cấp đơn nhanh chóng, tài liệu hướng dẫn đầy đủ, báo cáo tự động và đội ngũ hỗ trợ tận tình.",
		buttonText: "Tìm Hiểu Thêm",
		icon: images.art4,
		bgColor: "bg-white",
	},
];

export default function InsuranceMenu() {
	const [activeTab, setActiveTab] = useState("insurance");

	return (
		<div className="space-y-2">
			<div className="flex">
				<button
					type="button"
					className={cn(
						"flex-1 text-xl font-bold py-2",
						activeTab === "insurance" ? "text-brand-redSecondary border-b-2 border-brand-redSecondary" : "text-black",
					)}
					onClick={() => setActiveTab("insurance")}
				>
					Bảo Hiểm
				</button>
				<button
					type="button"
					className={cn(
						"flex-1 text-xl font-bold py-2",
						activeTab === "recruitment" ? "text-brand-redSecondary border-b-2 border-brand-redSecondary" : "text-black",
					)}
					onClick={() => setActiveTab("recruitment")}
				>
					Tuyển Dụng CTV
				</button>
			</div>

			{activeTab === "insurance" && (
				<div className="space-y-3">
					{insuranceOptions.map((option) => (
						<InsuranceCard key={option.id} option={option} />
					))}
				</div>
			)}

			{activeTab === "recruitment" && (
				<div className="space-y-2">
					{recruitmentOptions.map((option) => (
						<RecruitmentCard key={option.id} option={option} />
					))}
				</div>
			)}

			<button
				type="button"
				className="w-full flex items-center justify-center gap-2 text-xl font-bold pt-2 text-black hover:scale-105 transition-all duration-300"
			>
				TÌM HIỂU THÊM <PiCaretDownBold className="size-6" />
			</button>
		</div>
	);
}

function InsuranceCard({ option }: { option: (typeof insuranceOptions)[number] }) {
	return (
		<div
			key={option.id}
			className="flex justify-between items-center gap-4 bg-white border border-black/20 rounded-2xl px-4 py-4 cursor-pointer hover:bg-brand-redPrimary group transition-all duration-300"
		>
			<div className="w-24 flex items-center justify-center">
				<Image src={option.icon} alt="" className="w-auto h-auto object-contain" width={73} height={83} />
			</div>
			<div className="flex-1 flex flex-col justify-between gap-2 py-[1px]">
				<div className="flex flex-col gap-2">
					<h3 className="text-lg font-bold text-black group-hover:text-white">{option.title}</h3>
					<p className="text-sm font-medium text-black group-hover:text-white text-justify">{option.description}</p>
				</div>
				<div className="flex items-center justify-between mt-auto">
					<span className="text-base font-extrabold text-brand-redSecondary group-hover:text-white">
						{option.price}
					</span>
					<button
						type="button"
						className={cn(
							"px-4 py-1 min-w-40 text-base font-bold rounded-full flex items-center justify-center bg-brand-redPrimary text-white ",
							"group-hover:bg-white group-hover:text-brand-redPrimary",
						)}
					>
						{option.buttonText}
					</button>
				</div>
			</div>
		</div>
	);
}

function RecruitmentCard({ option }: { option: (typeof recruitmentOptions)[number] }) {
	return (
		<div
			key={option.id}
			className="flex justify-between items-center gap-4 bg-white border border-black/20 rounded-2xl px-4 py-2 cursor-pointer hover:bg-brand-redPrimary group transition-all duration-300"
		>
			<div className="w-24 flex items-center justify-center">
				<Image src={option.icon} alt="" width={73} height={83} className="w-auto h-auto object-contain" />
			</div>
			<div className="flex-1 flex flex-col justify-between gap-2">
				<div className="flex flex-col gap-2">
					<h3 className="text-base font-bold text-black group-hover:text-white">{option.title}</h3>
					<p className="text-xs font-medium text-black group-hover:text-white text-justify">{option.description}</p>
				</div>

				<div className="flex items-center justify-end">
					<button
						type="button"
						className="px-2 py-1 min-w-36 text-sm font-bold rounded-full bg-brand-redPrimary text-white group-hover:bg-white group-hover:text-brand-redPrimary"
					>
						{option.buttonText}
					</button>
				</div>
			</div>
		</div>
	);
}
