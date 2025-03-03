import { FiArrowRight } from "react-icons/fi";
import { Container } from "@/components/layout";
import type { FC } from "react";
import Header from "@/components/me/header";

interface BaseStepCardProps {
	number: string;
}

interface StepCardWithButtonProps extends BaseStepCardProps {
	hasButton: true;
}

interface StepCardWithoutButtonProps extends BaseStepCardProps {
	content: string;
	hasButton?: false;
}

type StepCardProps = StepCardWithButtonProps | StepCardWithoutButtonProps;

const StepCard: FC<StepCardProps> = (props) => {
	if (props.hasButton) {
		return (
			<div className="w-full bg-[#F24444] rounded-[20px] p-10 relative">
				<span className="font-inter font-semibold text-[90px] leading-[60px] text-white">{props.number}</span>
				<p className="font-montserrat font-semibold text-[27px] leading-[40px] text-white mt-7">
					Nhấn
					<a
						href="/tu-van"
						className="inline-flex justify-center items-center mx-2 py-2 px-4 bg-white text-black font-semibold text-xl rounded-md shadow-elevation"
					>
						Tư Vấn Ngay
						<FiArrowRight className="w-8 h-8 ml-2 stroke-2" />
					</a>
					đăng ký trở thành Cộng Tác Viên.
				</p>
			</div>
		);
	}

	return (
		<div className="w-full bg-[#F24444] rounded-[20px] p-10 relative">
			<span className="font-inter font-semibold text-[90px] leading-[60px] text-white">{props.number}</span>
			<p className="font-montserrat font-semibold text-[27px] leading-[40px] text-white mt-7 max-w-[455px]">
				{props.content}
			</p>
		</div>
	);
};

const STEPS = [
	{
		number: "01",
		hasButton: true,
	},
	{
		number: "02",
		content: "Bảo Minh sẽ nhanh chóng hỗ trợ và tư vấn kỹ lưỡng về quyền lợi khi trở thành Cộng Tác Viên.",
	},
	{
		number: "03",
		content: "Xác nhận đăng ký và chính thức trở thành Cộng Tác Viên.",
	},
	{
		number: "04",
		content: "Tham gia buổi đào tạo sản phẩm và kỹ năng bán hàng, sẵn sàng cho hành trình mới.",
	},
] as const;

export default function Steps() {
	return (
		<Container className="my-16 px-28">
			<Header title="Các Bước Trở Thành Cộng Tác Viên" description="" />

			<div className="grid grid-cols-2 gap-8">
				{STEPS.map((step) => (
					<StepCard key={step.number} {...step} />
				))}
			</div>
		</Container>
	);
}
