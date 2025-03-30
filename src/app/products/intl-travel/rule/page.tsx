"use client";

import { ConditionalRenderer, FormSubmitButton, RenderIf } from "@/components/utils";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useReducer, useState } from "react";
import { BsFiletypePdf } from "react-icons/bs";
import { FiChevronRight } from "react-icons/fi";
import { ClaimDialog } from "./dialog";
import { DialogPdf } from "./dialog-pdf";

export default function IntlTravelRulePage() {
	const [stage, setStage] = useState<"waiting" | "exclude" | "compensation">("compensation");

	return (
		<main className="bg-white px-28 py-8">
			<section>
				<h2 className="text-[32px] font-bold">1. Quy Tắc & Điều Khoản</h2>
				<p className="text-[22px] font-medium">
					Các quy tắc và điều khoản được xây dựng để đảm bảo minh bạch và thuận tiện cho khách hàng.
				</p>

				<div className="flex items-center py-16 gap-24">
					<div className="flex flex-col gap-4">
						<SwitchButton isActive={stage === "waiting"} onClick={() => setStage("waiting")}>
							Thời gian chờ
						</SwitchButton>
						<SwitchButton isActive={stage === "exclude"} onClick={() => setStage("exclude")}>
							Điều khoản loại trừ
						</SwitchButton>
						<SwitchButton isActive={stage === "compensation"} onClick={() => setStage("compensation")}>
							Bồi thường
						</SwitchButton>
					</div>

					<div className="flex-1">
						<RenderIf condition={stage === "waiting"}>
							<Waiting />
						</RenderIf>

						<RenderIf condition={stage === "exclude"}>
							<Exclude />
						</RenderIf>

						<RenderIf condition={stage === "compensation"}>
							<Compensation />
						</RenderIf>
					</div>
				</div>
			</section>

			<section className="bg-brand-redSecondary/20 -mx-28 py-4">
				<div className="mx-28 space-y-4">
					<div>
						<h2 className="text-[32px] font-bold">2. Tài Liệu Đính Kèm</h2>
						<p className="text-[22px] font-medium">
							Tải tài liệu bên dưới để đọc và nắm chi tiết về thông tin sản phẩm bảo hiểm này.
						</p>
					</div>

					<PdfButton onClick={() => {}} className="ml-12">
						<div className="flex flex-col items-start">
							<span>Quy Tắc Bảo Hiểm Du Lịch</span>
							<span>Quốc Tế</span>
						</div>
					</PdfButton>
				</div>
			</section>
		</main>
	);
}

function Waiting() {
	return (
		<div className="min-h-[600px] border border-black rounded-md p-4">
			<p className="text-[28px] font-medium italic">Sản Phẩm Bảo Hiểm Du Lịch Quốc Tế không có thời gian chờ.</p>
		</div>
	);
}

const items = [
	"Loại trừ chung theo quy định.",
	"Bệnh tật hay tổn thương có sẵn, bệnh mãn tính.",
	"Nổi loạn, đình công, chiến tranh. Liên quan trực tiếp, gián tiếp tới hoạt động khủng bố.",
	"Tác động của phản ứng hạt nhân hoặc nhiễm phòng xạ.",
	"Tổn thất gián tiếp hoặc thệt hại mang tính hậu quả.",
];

function Exclude() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="space-y-8 flex flex-col items-center">
			<ConditionalRenderer
				condition={isOpen}
				component={<DialogPdf open={isOpen} onOpenChange={setIsOpen} />}
				fallback={<MainPdfButton onClick={() => setIsOpen(true)}>Quy Tắc Bảo Hiểm Du Lịch Quốc Tế</MainPdfButton>}
			/>

			<ul className="divide-y divide-black border border-black">
				{items.map((item, index) => (
					<li key={item} className="p-4 font-medium text-[20px] flex gap-2">
						<span className="flex-shrink-0">{`${index + 1}.`}</span>
						<span>{item}</span>
					</li>
				))}
			</ul>
		</div>
	);
}

function Compensation() {
	const [isOpen, setIsOpen] = useState(false);

	const items = [
		"Giấy tờ chứng minh quyền thụ hưởng thừa kế hợp pháp trong trường hợp Người được bảo hiểm chết hay giấy ủy quyền nhận tiền bảo hiểm trong trường hợp thay mặt Người được bảo hiểm nhận tiền bảo hiểm.",
		'Đối với khiếu nại về "Tai nạn cá nhân": Hồ sơ bệnh án của bệnh viện hay bác sĩ cung cấp những chi tiết về tính chất của tổn thương và mức độ và khoảng thời gian của thương tật, biên bản của Cơ quan có thẩm quyền nơi xảy ra tai nạn.Trường hợp chết phải có Giấy chứng tử và biên bản điều tra của cơ quan có thẩm quyền.',
		'Đối với khiếu nại về "Hành lý và tư trang", "Hành lý bị trì hoãn", hoặc "Mất giấy tờ thông hành": Cung cấp tất cả những chi tiết bao gồm hóa đơn ghi rõ ngày mua, giá, mẫu mã và loại của hạng mục bị mất hay bị thiệt hại, một bản thông báo khẩn cho hãng hàng không/hãng vận chuyển và văn bản xác nhận khi tài sản bị mất hay tổn thất, thiệt hại xảy ra trong quá trình quá cảnh và biên bản có xác nhận của Cơ quan có thẩm quyền khi tổn thất vừa xảy ra. Các thông báo tổn thất tới các cơ quan liên quan có thẩm quyền phải được thực hiện trong vòng 24 giờ đồng hồ kể từ khi sự cố xảy ra.',
		'Đối với khiếu nại về "Chi phí Y tế"; "Trợ cứu Y tế" và "Cắt ngắn hay hủy bỏ chuyến đi": Tất cả hóa đơn, biên lai, vé, cuống vé, hợp đồng hoặc các thỏa thuận liên quan tới khiếu nại và trong trường hợp khiếu nại về điều trị y tế thì phải cung cấp đầy đủ giấy tờ của bệnh viện, ý kiến của bác sĩ, trong đó ghi rõ chẩn đoán về bệnh tật được điều trị và bản tóm tắt quá trình điều trị bao gồm cả đơn thuốc theo toa và các dịch vụ được cung cấp.',
	];

	const positions = [[0, 1], [2], [3]];

	const [position, dispatch] = useReducer((state: number, action: { type: "next" | "prev" }) => {
		const total = positions.length;

		if (action.type === "next") {
			return (state + 1) % total;
		}

		if (action.type === "prev") {
			return (state - 1 + total) % total;
		}

		return state;
	}, 0);

	return (
		<div className="space-y-4 flex flex-col items-center relative">
			<MainPdfButton onClick={() => {}}>Đơn yêu cầu bồi thường</MainPdfButton>

			<ul className="w-full divide-y divide-black border border-black">
				{items.map((item, index) => {
					const shouldRender = positions[position].includes(index);

					if (!shouldRender) {
						return null;
					}

					return (
						<li key={item} className="p-4 font-medium text-[20px] flex gap-2">
							<span className="flex-shrink-0">{`${index + 1}.`}</span>
							<span>{item}</span>
						</li>
					);
				})}
			</ul>

			<button
				className={cn(
					"absolute top-1/2 -left-12 flex items-center justify-center h-8 w-8 rounded-full bg-white shadow-elevation",
					"hover:bg-brand-redPrimary hover:text-white transition-all duration-300",
				)}
				onClick={() => dispatch({ type: "prev" })}
				type="button"
			>
				<ArrowLeft className="w-4 h-4" />
			</button>

			<button
				className={cn(
					"absolute top-1/2 -right-12 flex items-center justify-center h-8 w-8 rounded-full bg-white shadow-elevation",
					"hover:bg-brand-redPrimary hover:text-white transition-all duration-300",
				)}
				onClick={() => dispatch({ type: "next" })}
				type="button"
			>
				<ArrowRight className="w-4 h-4" />
			</button>

			<ConditionalRenderer
				condition={isOpen}
				component={<ClaimDialog open={isOpen} onOpenChange={setIsOpen} />}
				fallback={
					<FormSubmitButton className="font-bold text-[20px] w-60" onClick={() => setIsOpen(true)}>
						Yêu cầu bồi thường
					</FormSubmitButton>
				}
			/>
		</div>
	);
}

function PdfButton({
	children,
	className,
	...props
}: { children: React.ReactNode; className?: string } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
	return (
		<button type="button" className={cn("flex items-center gap-4 text-[22px] font-medium", className)} {...props}>
			<div className="bg-brand-redSecondary py-2 px-1 rounded-md shadow-elevation">
				<BsFiletypePdf className="text-white w-12 h-auto" />
			</div>

			{children}
		</button>
	);
}

function MainPdfButton({
	children,
	className,
	...props
}: { children: React.ReactNode; className?: string } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
	return (
		<button
			type="button"
			className={cn(
				"flex items-center justify-center gap-4 text-[18px] font-semibold bg-brand-redPrimary w-full text-white rounded-full shadow-elevation py-2",
				className,
			)}
			{...props}
		>
			<BsFiletypePdf className="text-white w-12 h-auto" />

			{children}
		</button>
	);
}

function SwitchButton({
	children,
	className,
	onClick,
	isActive,
	...props
}: {
	children: React.ReactNode;
	className?: string;
	onClick?: () => void;
	isActive?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
	return (
		<button
			type="button"
			onClick={onClick}
			className={cn(
				"flex items-center gap-2 group border border-black rounded-md p-2 shadow-elevation group bg-white",
				"transition-all duration-300",
				"hover:bg-brand-redPrimary hover:border-transparent",
				isActive && "bg-brand-redPrimary text-white border-transparent",
				className,
			)}
			{...props}
		>
			<div
				className={cn(
					"w-12 h-12 bg-brand-green rounded flex items-center justify-center flex-shrink-0 transition-all border-2",
				)}
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

			<div
				className={cn(
					"uppercase font-semibold text-[16px]",
					isActive ? "text-white" : "text-black group-hover:text-white",
				)}
			>
				{children}
			</div>
			<FiChevronRight
				className={cn("w-6 h-6 ml-auto", isActive ? "text-white" : "text-black group-hover:text-white")}
			/>
		</button>
	);
}
