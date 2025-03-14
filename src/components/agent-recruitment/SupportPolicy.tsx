"use client";

import { ConsultationDialog } from "@/components/agent-recruitment/ConsultationDialog";
import { Container } from "@/components/layout";
import Header from "@/components/me/header";
import { ConditionalRenderer } from "@/components/utils";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import { useState } from "react";
import { FiArrowRight, FiCheck, FiChevronRight } from "react-icons/fi";

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
			className={cn(
				"flex items-center gap-4 py-2 px-3 rounded-xl shadow-elevation cursor-pointer transition-all group",
				isActive
					? "bg-[#F24444] hover:bg-[#d83e3e]"
					: "bg-white hover:bg-[#F24444] border border-black hover:border-transparent",
			)}
			onClick={onClick}
			onKeyDown={handleKeyDown}
		>
			<div
				className={`w-12 h-12 bg-[#8CC166] rounded flex items-center justify-center flex-shrink-0 transition-all border-2 ${
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
				className={cn(
					"text-lg font-bold text-left transition-colors",
					isActive ? "text-white" : "text-black group-hover:text-white",
				)}
			>
				{title}
			</span>
			<div className="ml-auto">
				<FiChevronRight
					className={cn(
						"w-6 h-6 stroke-2 transition-colors",
						isActive ? "text-white" : "text-black group-hover:text-white",
					)}
				/>
			</div>
		</button>
	);
};

const BenefitItem: FC<BenefitItemProps> = ({ text }) => (
	<div className="flex items-center gap-4">
		<div className="w-6 h-6 rounded-full bg-primary flex-shrink-0 flex items-center justify-center">
			<FiCheck className="w-4 h-4 text-white" />
		</div>
		<p className="text-xl font-medium">{text}</p>
	</div>
);

const SupportPolicy: FC = () => {
	const [open, setOpen] = useState(false);
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
					<div className="relative shadow-elevation overflow-hidden rounded-xl">
						<Image
							src={"/support-ctv.png"}
							width={368}
							height={558}
							alt="Support CTV"
							className="h-[558px] w-full object-cover rounded-xl border border-black"
						/>
						<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/75 rounded-xl" />

						<div className="absolute bottom-4 inset-x-4 flex justify-between gap-4">
							<ConditionalRenderer
								condition={!open}
								component={
									<button
										type="button"
										className={cn(
											"flex items-center justify-center gap-2",
											"flex-1 py-2 bg-primary text-white font-semibold text-sm rounded-md shadow-elevation",
											"focus-visible:ring-0 focus-visible:ring-offset-0",
											"hover:scale-105 transition-all duration-300",
										)}
										onClick={() => setOpen(true)}
									>
										Tư Vấn Ngay
										<FiArrowRight className="text-xl stroke-2" />
									</button>
								}
								fallback={<ConsultationDialog open={open} onOpenChange={setOpen} />}
							/>

							<Link href="/agent-recruitment" className="flex-1">
								<button
									type="button"
									className={cn(
										"py-2 bg-white text-black font-semibold text-sm rounded-md w-full",
										"transition-all duration-300 hover:scale-105",
									)}
								>
									Tìm Hiểu Thêm
								</button>
							</Link>
						</div>
					</div>
				</div>

				{/* Right Column - Benefits */}
				<div className="col-span-4 flex flex-col items-start">
					<h3 className="text-3xl font-semibold font-montserrat mb-8 whitespace-pre-line">{activePolicy.heading}</h3>
					<div className="flex flex-col gap-4">
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
