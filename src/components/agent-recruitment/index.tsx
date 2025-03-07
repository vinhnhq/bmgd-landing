import { cn } from "@/lib/utils";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { PiCheckBold } from "react-icons/pi";

const BenefitItem = ({ text }: { text: string }) => (
	<li className="flex items-center gap-2">
		<div className="w-4 h-4 rounded-full bg-white flex-shrink-0 flex items-center justify-center">
			<PiCheckBold className="text-xs text-brand-redPrimary" />
		</div>
		<span className="text-base font-medium">{text}</span>
	</li>
);

const ActionButton = ({
	variant,
	children,
}: {
	variant: "primary" | "secondary";
	children: React.ReactNode;
}) => {
	const baseStyles =
		"px-6 py-2 text-base font-semibold rounded-md transition-all duration-300 hover:scale-105 shadow-elevation";
	const styles = {
		primary: "bg-brand-redPrimary text-white flex items-center gap-1",
		secondary: "bg-text-gray text-black",
	};

	return (
		<button type="button" className={cn(baseStyles, styles[variant])}>
			{children}
		</button>
	);
};

const benefits = [
	"Cung cấp Poster/Video giúp CTV dễ dàng tiếp cận khách hàng",
	"Đội ngũ hỗ trợ luôn đồng hành, giúp CTV tự tin tư vấn sản phẩm",
	"Đào tạo chuyên sâu, giúp CTV tự tin thuyết phục khách hàng và nâng cao khả năng chốt đơn",
];

export default function AgentRecruitment() {
	return (
		<div className="relative bg-bg-red bg-opacity-[0.42] overflow-hidden">
			<Image
				src={"/light.png"}
				alt="light background with red overlay"
				width={1440}
				height={553}
				className="w-full h-auto mix-blend-screen"
			/>

			<div className="absolute inset-0">
				<div className="flex h-full">
					<div className="flex-1 flex flex-col justify-end pl-28 pb-8 max-w-prose">
						<div className="space-y-8">
							<h2 className="text-4xl font-bold text-black">Tuyển Dụng Cộng Tác Viên</h2>

							<h3
								className={cn(
									"text-4xl font-extrabold text-brand-redPrimary",
									"[-webkit-text-stroke:4px_white] [text-stroke:4px_white] [paint-order:stroke]",
								)}
							>
								KHỞI ĐẦU KHÔNG VỐN,
								<br />
								LỢI NHUẬN VÔ HẠN
							</h3>

							<p className="text-xl font-semibold ">
								Nhận ngay mức lợi nhuận cạnh tranh, cùng nhiều quyền lợi khi trở thành Cộng Tác Viên:
							</p>

							<ul className="space-y-2 -ml-6">
								{benefits.map((benefit) => (
									<BenefitItem key={benefit} text={benefit} />
								))}
							</ul>

							<div className="flex gap-4">
								<ActionButton variant="primary">
									Tư Vấn Ngay
									<FiArrowRight className="text-xl stroke-2" aria-hidden="true" />
								</ActionButton>

								<ActionButton variant="secondary">Tìm Hiểu Thêm</ActionButton>
							</div>
						</div>
					</div>

					<div className="flex-1 flex items-end">
						<Image
							src={"/group-asian-business-people-posing-white-background.png"}
							alt="group of asian business people posing on white background"
							className="w-full h-auto"
							width={762}
							height={546}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
