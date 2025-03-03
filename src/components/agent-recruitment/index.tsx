import { Container } from "@/components/layout";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { PiCheckBold } from "react-icons/pi";

interface BenefitItemProps {
	text: string;
}

const BenefitItem = ({ text }: BenefitItemProps) => (
	<li className="flex items-center gap-2">
		<div className="w-4 h-4 rounded-full bg-white flex-shrink-0 relative flex items-center justify-center">
			<PiCheckBold className="w-3 h-3 text-[#F24444]" />
		</div>
		<span className="text-[17px]  font-medium">{text}</span>
	</li>
);

interface ActionButtonProps {
	variant: "primary" | "secondary";
	children: React.ReactNode;
}

const ActionButton = ({ variant, children }: ActionButtonProps) => {
	const baseStyles = "px-5 py-3 text-[14px] font-semibold rounded-md transition-colors";
	const styles = {
		primary: "shadow-lg shadow-slate-950/40 bg-[#F24444] text-white hover:bg-opacity-90 flex items-center gap-1",
		secondary: "bg-[#F8FAFF] text-black hover:bg-gray-50",
	};

	return (
		<button type="button" className={cn(baseStyles, styles[variant])}>
			{children}
		</button>
	);
};

const AgentRecruitment = () => {
	const benefits = [
		"Cung cấp Poster/Video giúp CTV dễ dàng tiếp cận khách hàng",
		"Đội ngũ hỗ trợ luôn đồng hành, giúp CTV tự tin tư vấn sản phẩm",
		"Đào tạo chuyên sâu, giúp CTV tự tin thuyết phục khách hàng và nâng cao khả năng chốt đơn",
	];

	return (
		<Container>
			<div className="relative bg-[#FF3B3B] bg-opacity-[0.42]">
				{/* Background image */}
				<Image src={"/light.png"} alt="Background" width={1200} height={800} className="w-full mix-blend-screen" />

				{/* Content */}
				<div className="absolute inset-0">
					<div className="flex h-full">
						{/* Left column - Text content */}
						<div className="flex-1 flex flex-col justify-end pl-28 pb-8 max-w-prose">
							<div>
								<h2 className="text-[40px] font-bold  text-black mb-4">Tuyển Dụng Cộng Tác Viên</h2>

								<h3 className="text-[40px] leading-[48px] font-extrabold  text-[#D71D22] [-webkit-text-stroke:6px_white] [text-stroke:6px_white] [paint-order:stroke] mb-6">
									KHỞI ĐẦU KHÔNG VỐN,
									<span className="block" />
									LỢI NHUẬN VÔ HẠN
								</h3>

								<p className="text-[21px] font-semibold  mb-4">
									Nhận ngay mức lợi nhuận cạnh tranh, cùng nhiều quyền lợi khi trở thành Cộng Tác Viên:
								</p>

								<ul className="mb-6 space-y-2 -ml-6">
									{benefits.map((benefit) => (
										<BenefitItem key={benefit} text={benefit} />
									))}
								</ul>

								<div className="flex gap-4">
									<ActionButton variant="primary">
										Tư Vấn Ngay
										<FiArrowRight className="w-4 h-4" aria-hidden="true" />
									</ActionButton>

									<ActionButton variant="secondary">Tìm Hiểu Thêm</ActionButton>
								</div>
							</div>
						</div>

						{/* Right column - Image */}
						<div className="flex-1 flex items-end">
							<Image
								src={"/group-asian-business-people-posing-white-background.png"}
								alt="Business Team"
								className="w-full object-contain"
								width={1200}
								height={800}
							/>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default AgentRecruitment;
