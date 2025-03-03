import { useState } from "react";
import { PiCaretDownBold } from "react-icons/pi";
import Image from "next/image";

const InsuranceMenu = () => {
	const [activeTab, setActiveTab] = useState("insurance");

	const insuranceOptions = [
		{
			id: 1,
			title: "Bảo Hiểm Du Lịch Quốc Tế",
			description:
				"An tâm trên mọi hành trình với sự bảo vệ toàn diện từ tai nạn, chi phí y tế đến mất hành lý hay hủy chuyến bay, mang đến cho bạn chuyến đi trọn vẹn.",
			price: "20.000 VNĐ/ ngày",
			buttonText: "Tìm Hiểu Thêm",
			icon: "/product-1.png",
			bgColor: "bg-[#F24444]",
		},
		{
			id: 2,
			title: "Bảo Hiểm Sức Khỏe Toàn Diện",
			description:
				"Tấm khiên bảo vệ bạn trước những rủi ro do tai nạn, ốm đau, bệnh tật, thai sản... Hỗ trợ viện phí và phẫu thuật, an tâm trước mọi biến cố không lường trước được.",
			price: "3.000 VNĐ/ ngày",
			buttonText: "Sắp Ra Mắt",
			bgColor: "bg-white",
			icon: "/product-2.png",
		},
		{
			id: 3,
			title: "Bảo Hiểm Sức Khỏe Toàn Diện",
			description:
				"Bảo vệ tài chính cho gia đình trước những sự kiện không mong muốn, từ thương tật, ốm đau đến thai sản, giữ trọn nụ cười cho những người thân yêu.",
			price: "4.000 VNĐ/ ngày",
			buttonText: "Sắp Ra Mắt",
			icon: "/product-3.png",
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
			icon: "/art-1.png",
			bgColor: "bg-[#F24444]",
		},
		{
			id: 2,
			title: "Có Sẵn Kịch Bản Bán Hàng",
			description:
				"Cung cấp kịch bản bán hàng chuyên sâu, giúp xử lý tình huống, tư vấn sản phẩm và chốt sale hiệu quả, gia tăng doanh số bán hàng.",
			buttonText: "Tìm Hiểu Thêm",
			icon: "/art-2.png",
			bgColor: "bg-white",
		},
		{
			id: 3,
			title: "Hỗ Trợ Thiết Kế Ấn Phẩm",
			description:
				"Hỗ trợ thiết kế poster, cung cấp nội dung và video, giúp cộng tác viên dễ dàng tiếp cận khách hàng và giới thiệu sản phẩm hiệu quả hơn.",
			buttonText: "Tìm Hiểu Thêm",
			icon: "/art-3.png",
			bgColor: "bg-white",
		},
		{
			id: 4,
			title: "Nền Tảng Bán Hàng Tiện Lợi",
			description:
				"Nền tảng bán hàng tiện lợi với portal cấp đơn nhanh chóng, tài liệu hướng dẫn đầy đủ, báo cáo tự động và đội ngũ hỗ trợ tận tình.",
			buttonText: "Tìm Hiểu Thêm",
			icon: "/art-4.png",
			bgColor: "bg-white",
		},
	];

	return (
		<div className="w-full">
			{/* Tabs */}
			<div className="flex border-b mb-4">
				<button
					type="button"
					className={`flex-1 pb-4 text-[20px] font-bold ${activeTab === "insurance" ? "text-[#D71D22] border-b-2 border-[#D71D22]" : "text-[#333333]"}`}
					onClick={() => setActiveTab("insurance")}
				>
					Bảo Hiểm
				</button>
				<button
					type="button"
					className={`flex-1 pb-4 text-[20px] font-bold ${activeTab === "recruitment" ? "text-[#D71D22] border-b-2 border-[#D71D22]" : "text-[#333333]"}`}
					onClick={() => setActiveTab("recruitment")}
				>
					Tuyển Dụng CTV
				</button>
			</div>

			{/* Options */}
			<div className="space-y-4">
				{activeTab === "insurance"
					? insuranceOptions.map((option) => (
							<div
								key={option.id}
								className="flex items-stretch bg-white border-[1px] border-[#959595] rounded-[15px] p-4 px-4 cursor-pointer hover:bg-[#F24444] hover:border-[#F24444] group transition-colors duration-300"
							>
								<div className="flex-shrink-0 flex items-center justify-center mr-4">
									<Image src={option.icon} alt="" className="w-auto h-auto object-contain" width={76} height={76} />
								</div>
								<div className="flex-1 flex flex-col">
									<h3 className="text-[20px] font-bold mb-2 text-black group-hover:text-white transition-colors duration-300">
										{option.title}
									</h3>
									<p className="text-[12.5px] font-medium mb-2 leading-[18px] text-black group-hover:text-white transition-colors duration-300 text-justify">
										{option.description}
									</p>
									<div className="flex items-center justify-between mt-auto">
										<span className="text-[15px] font-extrabold leading-[26px] text-[#D71D22] group-hover:text-white transition-colors duration-300">
											{option.price}
										</span>
										<button
											type="button"
											className={
												"px-6 h-[18px] text-[11px] font-bold rounded-full flex items-center justify-center transition-colors duration-300 bg-[#F24444] text-white group-hover:bg-white group-hover:text-[#F24444]"
											}
										>
											{option.buttonText}
										</button>
									</div>
								</div>
							</div>
						))
					: recruitmentOptions.map((option) => (
							<div
								key={option.id}
								className="flex items-stretch bg-white border-[1px] border-[#959595] rounded-[15px] p-2 px-4 cursor-pointer hover:bg-[#F24444] hover:border-[#F24444] group transition-colors duration-300"
							>
								<div className="flex-shrink-0 flex items-center justify-center mr-6">
									<Image src={option.icon} alt="" width={76} height={76} className="w-auto h-auto object-contain" />
								</div>
								<div className="flex-1">
									<h3 className="text-[20px] font-bold text-black group-hover:text-white transition-colors duration-300">
										{option.title}
									</h3>
									<p className="text-[11px] font-medium leading-[16px] text-black group-hover:text-white transition-colors duration-300 pb-[2px] text-justify">
										{option.description}
									</p>
									<div className="flex items-center justify-end">
										<button
											type="button"
											className="px-6 h-[18px] text-[11px] font-bold rounded-full flex items-center justify-center transition-colors duration-300 bg-[#F24444] text-white group-hover:bg-white group-hover:text-[#F24444]"
										>
											{option.buttonText}
										</button>
									</div>
								</div>
							</div>
						))}
			</div>

			<button
				type="button"
				className="w-full flex items-center justify-center gap-2 text-[20px] font-bold mt-4 text-black hover:opacity-80 transition-opacity duration-300 cursor-pointer"
			>
				TÌM HIỂU THÊM <PiCaretDownBold className="size-6" />
			</button>
		</div>
	);
};

export default InsuranceMenu;
