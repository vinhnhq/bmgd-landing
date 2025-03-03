import Image from "next/image";
import { FiArrowRight, FiChevronRight } from "react-icons/fi";
import { FiCheck } from "react-icons/fi";
import { Container } from "@/components/layout";
import type { FC } from "react";
import Header from "@/components/me/header";
import { useState } from "react";

interface PolicyCardProps {
	title: string;
	isActive?: boolean;
	onClick?: () => void;
}

interface BenefitItemProps {
	text: string;
}

interface PolicyContent {
	id: string;
	title: string;
	heading: string;
	benefits: string[];
}

const POLICY_CONTENTS: PolicyContent[] = [
	{
		id: "training",
		title: "Hỗ trợ đào tạo từ Cơ Bản đến Nâng Cao",
		heading: "Hỗ Trợ Đào Tạo Từ\nCơ Bản Đến Nâng Cao",
		benefits: [
			"Hỗ trợ đào tạo từ cơ bản đến nâng cao cho cộng tác viên mới.",
			"Hướng dẫn chi tiết về sản phẩm, quyền lợi, và điều khoản bảo hiểm.",
			"Cung cấp tài liệu ôn tập và hỗ trợ thi chứng chỉ.",
			"Giúp cộng tác viên tự tin tư vấn dù chưa có kinh nghiệm.",
		],
	},
	{
		id: "sales-script",
		title: "Có sẵn kịch bản bán hàng chuyên sâu",
		heading: "Có Sẵn Kịch Bản\nBán Hàng Chuyên Sâu",
		benefits: [
			"Kịch bản chi tiết cho từng tình huống bán hàng",
			"Hướng dẫn xử lý từ chối và phản hồi khách hàng",
			"Cách tư vấn sản phẩm phù hợp nhu cầu khách hàng",
			"Kỹ thuật chốt sale hiệu quả trong mọi tình huống",
		],
	},
	{
		id: "marketing",
		title: "Hỗ trợ thiết kế ấn phẩm truyền thông",
		heading: "Hỗ Trợ Thiết Kế\nẤn Phẩm Truyền Thông",
		benefits: [
			"Cung cấp Content quảng cáo hàng tuần cho CTV",
			"Thiết kế Brochure, Poster dành cho CTV",
			"Cung cấp video quảng cáo ngắn gọn, chuyên nghiệp giúp CTV dễ dàng tiếp cận khách hàng",
		],
	},
	{
		id: "platform",
		title: "Nền tảng bán hàng tiện lợi",
		heading: "Nền Tảng Bán Hàng\nTiện Lợi",
		benefits: [
			"Portal cấp đơn bảo hiểm nhanh chóng, dễ dàng sử dụng cho CTV",
			"Đầy đủ tài liệu hướng dẫn sử dụng từ hình ảnh đến video",
			"Hệ thống báo cáo doanh số tự động giúp CTV dễ dàng theo dõi",
			"Đội ngũ hỗ trợ sẵn sàng giải quyết mọi vướng mắc khi CTV gặp khó khăn trong quy trình cấp đơn",
		],
	},
] as const;

const POLICY_ITEMS = POLICY_CONTENTS.map((content, index) => ({
	id: content.id,
	title: content.title,
	isActive: index === 0,
}));

const PolicyCard: FC<PolicyCardProps> = ({ title, isActive = false, onClick }) => {
	const handleKeyDown = (event: React.KeyboardEvent) => {
		if (event.key === "Enter" || event.key === " ") {
			onClick?.();
		}
	};

	return (
		<button
			type="button"
			className={`w-[309px] h-20 flex items-center gap-4 px-3 rounded-[6px] shadow-elevation hover:shadow-elevation-hover cursor-pointer transition-all group ${
				isActive
					? "bg-[#F24444] hover:bg-[#d83e3e]"
					: "bg-white hover:bg-[#F24444] border border-black hover:border-transparent"
			}`}
			onClick={onClick}
			onKeyDown={handleKeyDown}
		>
			<div
				className={`w-[45px] h-[45px] bg-[#8CC166] rounded flex items-center justify-center flex-shrink-0 transition-all border-2 ${
					isActive ? "border-white" : "border-transparent group-hover:border-white"
				}`}
			>
				<Image
					src={"/support-ctv-group.svg"}
					width={24}
					height={24}
					alt="Policy Icon"
					className="w-6 h-6"
					title="Policy Icon"
				/>
			</div>
			<span
				className={`text-[17px] font-extrabold text-left font-montserrat leading-[25px] transition-colors ${
					isActive ? "text-white" : "text-black group-hover:text-white"
				}`}
			>
				{title}
			</span>
			<div className="ml-auto">
				<FiChevronRight
					className={`w-6 h-6 stroke-2 transition-colors ${isActive ? "text-white" : "text-black group-hover:text-white"}`}
				/>
			</div>
		</button>
	);
};

const BenefitItem: FC<BenefitItemProps> = ({ text }) => (
	<div className="flex items-center gap-4">
		<div className="w-7 h-7 rounded-full bg-[#F24444] flex-shrink-0 flex items-center justify-center">
			<FiCheck className="w-4 h-4 text-white" />
		</div>
		<p className="text-xl font-medium font-montserrat">{text}</p>
	</div>
);

const CTAButtons: FC = () => (
	<div className="absolute bottom-4 inset-x-4 flex justify-between">
		<button
			type="button"
			className="w-[146px] h-10 bg-[#F24444] text-white font-extrabold text-sm rounded-md shadow-elevation flex items-center justify-center gap-1 transition-all hover:bg-[#d83e3e] hover:shadow-elevation-hover"
		>
			Tư Vấn Ngay
			<FiArrowRight className="w-6 h-6 stroke-2" />
		</button>
		<button
			type="button"
			className="w-[146px] h-10 bg-[#F8FAFF] text-black font-semibold text-sm rounded-md border border-[#E1E4ED] transition-all hover:bg-gray-50 hover:border-gray-400"
		>
			Tìm Hiểu Thêm
		</button>
	</div>
);

const SupportPolicy: FC = () => {
	const [activePolicy, setActivePolicy] = useState(POLICY_CONTENTS[0]);

	const handlePolicyClick = (policyId: string) => {
		const policy = POLICY_CONTENTS.find((p) => p.id === policyId);
		if (policy) {
			setActivePolicy(policy);
		}
	};

	return (
		<Container className="px-28 my-16">
			<Header
				title="Chính Sách Hỗ Trợ Dành Cho Cộng Tác Viên"
				description="Mức lợi nhuận cạnh tranh, cùng ngàn quyền lợi khi trở thành CTV của Bảo Minh Gia Đình."
			/>

			{/* Content Grid */}
			<div className="grid grid-cols-10 gap-8 items-center">
				{/* Left Column - Policy Cards */}
				<div className="col-span-3 flex flex-col gap-4 justify-end items-end">
					{POLICY_ITEMS.map((item) => (
						<PolicyCard
							key={item.id}
							title={item.title}
							isActive={activePolicy.id === item.id}
							onClick={() => handlePolicyClick(item.id)}
						/>
					))}
				</div>

				{/* Middle Column - Image */}
				<div className="col-span-3 flex justify-center">
					<div className="relative w-[368px]">
						<Image
							src={"/support-ctv.png"}
							width={368}
							height={558}
							alt="Support CTV"
							className="h-[558px] w-full object-cover rounded-[10px] border border-[#575756]"
						/>
						<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/75 rounded-[10px]" />
						<CTAButtons />
					</div>
				</div>

				{/* Right Column - Benefits */}
				<div className="col-span-4 flex flex-col items-start">
					<h3 className="text-[33px] font-semibold font-montserrat leading-[45px] mb-8 whitespace-pre-line">
						{activePolicy.heading}
					</h3>
					<div className="flex flex-col gap-4 mr-20">
						{activePolicy.benefits.map((text) => (
							<BenefitItem key={text} text={text} />
						))}
					</div>
				</div>
			</div>
		</Container>
	);
};

export default SupportPolicy;
