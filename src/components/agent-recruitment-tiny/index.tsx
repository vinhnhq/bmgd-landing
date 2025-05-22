"use client";

import { ConsultationDialog } from "@/components/agent-recruitment/ConsultationDialog";
import { ConditionalRenderer } from "@/components/utils";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiArrowRight, FiCheck } from "react-icons/fi";

const benefits = [
	"Cung cấp Poster/Video giúp CTV truyền tải sản phẩm hiệu quả và dễ dàng tiếp cận khách hàng.",
	"Đào tạo chuyên sâu, giúp CTV tự tin thuyết phục khách hàng và chốt sale nhanh chóng.",
	"Đội ngũ hỗ trợ luôn đồng hành, giúp CTV tự tin tư vấn sản phẩm.",
];

export default function AgentRecruitment() {
	const [open, setOpen] = useState(false);

	return (
		<div className="relative bg-bg-red bg-opacity-[0.42] overflow-hidden">
			<Image
				src={"/light.png"}
				alt="light background with red overlay"
				width={1440}
				height={553}
				priority
				className="w-full mix-blend-screen h-96"
			/>

			<div className="absolute inset-0">
				<div className="flex h-full mx-28 gap-x-8">
					<div className="flex-1 flex flex-col justify-center max-w-prose">
						<div className="space-y-6">
							<h2 className="text-4xl font-bold text-black leading-loose [-webkit-text-stroke:4px_white] [text-stroke:4px_white] [paint-order:stroke]">
								Tuyển Dụng Cộng Tác Viên
							</h2>

							<ul className="space-y-2 -ml-6">
								{benefits.map((benefit) => (
									<BenefitItem key={benefit} text={benefit} />
								))}
							</ul>

							<div className="flex gap-4">
								<ConditionalRenderer
									condition={!open}
									component={
										<ActionButton variant="primary" onClick={() => setOpen(true)}>
											Tư Vấn Ngay
											<FiArrowRight className="text-xl stroke-2" aria-hidden="true" />
										</ActionButton>
									}
									fallback={<ConsultationDialog open={open} onOpenChange={setOpen} />}
								/>

								<Link href="/agent-recruitment">
									<ActionButton variant="secondary">Tìm Hiểu Thêm</ActionButton>
								</Link>
							</div>
						</div>
					</div>

					<div className="flex-1 flex items-center">
						<div className="w-full h-full max-h-[280px] overflow-hidden rounded-xl">
							<Image
								src={"/working-meeting-asian-colleagues.jpg"}
								alt="register form image"
								className="w-full h-full object-cover object-top"
								width={4096}
								height={2734}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

const BenefitItem = ({ text }: { text: string }) => (
	<li className="flex items-center gap-2">
		<div className="w-4 h-4 rounded-full bg-primary flex-shrink-0 flex items-center justify-center">
			<FiCheck className="w-3 h-3 text-white" />
		</div>
		<span className="text-base font-medium">{text}</span>
	</li>
);

const ActionButton = ({
	variant,
	children,
	...props
}: {
	variant: "primary" | "secondary";
	children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
	const baseStyles =
		"px-6 py-2 text-base font-semibold rounded-md transition-all duration-300 hover:scale-105 shadow-elevation";
	const styles = {
		primary: "bg-brand-redPrimary text-white flex items-center gap-1",
		secondary: "bg-text-gray text-black",
	};

	return (
		<button type="button" className={cn(baseStyles, styles[variant])} {...props}>
			{children}
		</button>
	);
};
