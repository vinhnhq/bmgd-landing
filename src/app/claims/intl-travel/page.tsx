"use client";

import AgentRecruitment from "@/components/agent-recruitment";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import PromotionalBanner from "@/components/promotion-banner";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { BsFiletypePdf } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";
import { Container } from "@/components/layout";
import { faqFileUrl } from "../../../constants";
import Header from "@/components/me/header";

export default function IntlTravelClaim() {
	return (
		<main>
			<PromotionalBanner />
			<Navbar />

			<div className="relative">
				<Image
					src="/bao-hiem-du-lich-quoc-te.jpeg"
					alt="Bảo Hiểm Du Lịch Quốc Tế"
					width={1380}
					height={921}
					className="w-full h-auto max-h-[691px] object-cover"
				/>

				<div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-r from-[#FF7A79] to-transparent" />
				<div className="absolute top-0 left-24 w-1/2 h-full">
					<div className="flex flex-col items-start justify-center h-full gap-8">
						<button
							type="button"
							onClick={() => {
								document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "center" });
							}}
							className={cn(
								"bg-[#8CC166] text-white px-4 py-4 rounded-lg uppercase text-xl font-extrabold shadow-elevation",
								"hover:scale-105 transition-transform duration-300",
							)}
						>
							Xem brochure sản phẩm
						</button>
						<h1 className="text-white text-5xl font-extrabold">
							Bảo Hiểm <span className="block mt-2">Du Lịch Quốc Tế</span>
						</h1>
						<p className="text-white text-xl font-bold leading-10 w-2/3 justify-center">
							An tâm trên mọi hành trình với sự bảo vệ toàn diện từ tai nạn, chi phí y tế đến mất hành lý hay hủy chuyến
							bay, mang đến cho bạn chuyến đi trọn vẹn.
						</p>
					</div>
				</div>
			</div>

			<IntlTravelClaimPage />

			<div className="bg-white px-28 py-8">
				<AttachedDocuments />
			</div>

			<div className="my-12">
				<AgentRecruitment />
			</div>

			<FAQ />

			<section id="contact">
				<Contact type="claim" />
			</section>

			<Footer />
		</main>
	);
}

function Row({ step, children }: { step: string; children: React.ReactNode }) {
	return (
		<div
			className={cn(
				"flex gap-x-8 items-center",
				"before:content-[''] before:self-stretch before:border before:border-brand-redSecondary before:mt-6",
			)}
		>
			<div className="rounded-full border-2 border-brand-redSecondary w-56 h-56 flex items-center justify-center -order-1">
				<span className="text-brand-redSecondary font-bold text-[35px]">{step}</span>
			</div>

			{children}
		</div>
	);
}

function IntlTravelClaimPage() {
	return (
		<main className="bg-white px-28 py-8">
			<div className="space-y-16">
				<Row step="Bước 1">
					<div className="flex-1 space-y-4">
						<h2 className="text-brand-redSecondary font-bold text-[30px]">Hồ sơ bồi thường du lịch quốc tế</h2>
						<p className="text-black font-medium text-[20px]">
							Hồ sơ khiếu nại phải được gửi kèm đầy đủ bằng chứng theo yêu cầu của Bảo Minh trong trường hợp tử vong, ốm
							đau, thương tật hay thiệt hại dẫn đến phát sinh khiếu nại theo Đơn bảo hiểm này và Người được bảo hiểm khi
							có yêu cầu của Bảo Minh phải bằng chi phí của mình cung cấp toàn bộ thông tin cần thiết cho việc giải
							quyết bồi thường. <br />
							Các chứng từ khiếu nại bằng tiếng nước ngoài khi gửi đến Bảo Minh phải được dịch sang tiếng Việt và đảm
							bảo tính pháp lý. Chi phí dịch chứng từ này do Người được bảo hiểm chịu chi phí.
						</p>
					</div>
				</Row>

				<Row step="Bước 2">
					<div className="flex-1 space-y-4">
						<div>
							<h2 className="text-brand-redSecondary font-bold text-[30px]">Tập hợp các giấy tờ</h2>
							<p className="text-black font-medium text-[20px]">
								Các chứng từ được yêu cầu có thể thay đổi theo từng trường hợp.
							</p>
						</div>

						<article>
							<h3 className="text-brand-redSecondary font-bold text-[20px]">Các chứng từ khiếu nại cơ bản:</h3>
							<ul className="list-disc list-outside pl-6 text-black font-medium text-[20px]">
								<li>
									Giấy yêu cầu bồi thường (
									<a
										href="https://tructuyen.baominh.vn/wp-content/uploads/2016/09/GYCBT-CLAIMFORM-IW_IH-EN.doc"
										className="text-blue-500 hover:underline"
									>
										Tải tại đây
									</a>
									)
								</li>
								<li>Bản gốc Hợp đồng/Giấy chứng nhận bảo hiểm kèm bản sao Hợp đồng bảo hiểm (nếu có)</li>
								<li>Bản sao Hộ chiếu</li>
								<li>Bản sao Vé máy bay/Thẻ lên máy bay</li>
								<li>Các chứng từ chứng minh hoàn cảnh tổn thất và số tiền khiếu nại</li>
								<li>Các hóa đơn tài chính gốc liên quan đến yêu cầu trả tiền bảo hiểm.</li>
								<li>
									Trường hợp tai nạn dẫn đến thương tật thân thể của Người được bảo hiểm hoặc mất hành lý do mất cắp,
									mất trộm: Người được bảo hiểm phải thông báo cho công an và phải có Biên bản tai nạn của cơ quan có
									thẩm quyền và nêu rõ trách nhiệm pháp lý của bên thứ ba (nếu có) về sự việc đó.
								</li>
								<li>
									Những rủi ro liên quan đến hãng vận chuyển dẫn đến nhận hành lý chậm, mất hành lý, chuyến đi bị trì
									hoàn, Người được bảo hiểm phải lấy báo cáo hành lý bất thường, văn bản từ hãng vận chuyển xác nhận về
									thời gian hành lý chậm hoặc xác nhận mất hành lý.
								</li>
							</ul>
						</article>

						<article>
							<h3 className="text-brand-redSecondary font-bold text-[20px]">
								Trong từng trường hợp, hồ sơ bồi thường bao gồm:
							</h3>
							<ul className="list-none list-outside text-black font-medium text-[20px] space-y-2">
								<li>
									<h4 className="font-semibold text-[20px] underline underline-offset-4">
										Trường hợp yêu cầu bồi thường thương tật tạm thời và Chi phí y tế do tai nạn
									</h4>
									<ul className="list-[lower-alpha] list-outside pl-12 text-black font-medium text-[20px]">
										<li>
											Giấy yêu cầu bồi thường (
											<a
												href="https://tructuyen.baominh.vn/wp-content/uploads/2016/09/GYCBT-CLAIMFORM-IW_IH-EN.doc"
												className="text-blue-500 hover:underline"
											>
												Tải tại đây
											</a>
											)
										</li>
										<li>Biên bản tai nạn của công an hoặc cơ quan có thẩm quyền (Nếu có )</li>
										<li>
											Toàn bộ hồ sơ y tế có liên quan đến tai nạn (Chỉ định xét nghiệm, kết quả xét nghiệm, chỉ định
											nhập viện, phiếu khám bệnh, toa thuốc, chỉ định của bác sĩ…)
										</li>
										<li>
											Toàn bộ hóa đơn tài chính của các chi phí y tế phát sinh do tai nạn (Bản gốc) (Hóa đơn tiền phòng,
											hóa đơn xe cấp cứu, hóa đơn mua thuốc và các hóa đơn khác của bệnh viện…)
										</li>
										<li>Giấy ra viện (Sao y bản chính)</li>
									</ul>
								</li>
								<li>
									<h4 className="font-semibold text-[20px] underline underline-offset-4">
										Trường hợp Tử vong do tai nạn
									</h4>
									<ul className="list-[lower-alpha] list-outside pl-12 text-black font-medium text-[20px]">
										<li>
											Giấy yêu cầu bồi thường (
											<a
												href="https://tructuyen.baominh.vn/wp-content/uploads/2016/09/GYCBT-CLAIMFORM-IW_IH-EN.doc"
												className="text-blue-500 hover:underline"
											>
												Tải tại đây
											</a>
											)
										</li>
										<li>Biên bản tai nạn, kết luận điều tra nguyên nhân chết của công an.</li>
										<li>Giấy chứng tử.</li>
										<li>Giấy khám nghiệm tử thi (Trường hợp nếu có khám nghiệm tử thi)</li>
										<li>Chứng từ chứng minh quyền thụ hưởng tiền bồi thường </li>
										<li>Bản sao Giấy chứng minh nhân dân của người thụ hưởng</li>
									</ul>
								</li>
								<li>
									<h4 className="font-semibold text-[20px] underline underline-offset-4">
										Trường hợp thương tật vĩnh viễn
									</h4>
									<ul className="list-[lower-alpha] list-outside pl-12 text-black font-medium text-[20px]">
										<li>
											Giấy yêu cầu bồi thường (
											<a
												href="https://tructuyen.baominh.vn/wp-content/uploads/2016/09/GYCBT-CLAIMFORM-IW_IH-EN.doc"
												className="text-blue-500 hover:underline"
											>
												Tải tại đây
											</a>
											)
										</li>
										<li>Biên bản tai nạn của công an hoặc cơ quan có thẩm quyền (Nếu có biên bản được lập)</li>
										<li>Giấy chứng thương hoặc giấy chứng nhận Thương tật vĩnh viễn </li>
										<li>Hồ sơ y tế về tình trạng thương tật</li>
									</ul>
								</li>
							</ul>
						</article>
					</div>
				</Row>

				<Row step="Lưu Ý">
					<div className="flex-1 space-y-4">
						<h2 className="text-brand-redSecondary font-bold text-[30px]">Các lưu ý khác:</h2>
						<ul className="list-[lower-alpha] list-outside pl-12 text-black font-medium text-[20px]">
							<li>
								Trường hợp tai nạn giao thông có Cảnh sát giao thông, Người được bảo hiểm cung cấp Biên bản giải quyết
								tai nạn hoặc Giấy chứng nhận tai nạn của Cảnh sát giao thông.
							</li>
							<li>
								Các trường hợp tai nạn khác như: Tai nạn trong sinh hoạt, va quẹt tai nạn giao thông không có cảnh sát
								giao thông,… Người được bảo hiểm cung cấp bản tường trình tai nạn, bản tường trình có xác nhận của chính
								quyền địa phương/cơ quan Người được bảo hiểm hoặc công an nơi bị tai nạn.
							</li>
							<li>
								Nếu Người được bảo hiểm bị tai nạn có điều khiển xe cơ giới thì yêu cầu cung cấp cho Bảo Minh Giấy đăng
								ký xe và Giấy phép lái xe hợp lệ.
							</li>
							<li>
								Người được bảo hiểm nếu bị tai nạn có sử dụng rượu bia, yêu cầu cán bộ giải quyết bồi thường tiến hành
								xác minh nồng độ alcol trong máu để xem xét.
							</li>
							<li>
								Chứng từ y tế: Các chứng từ cung cấp cho Bảo Minh phải là bản gốc, trường hợp không có bản gốc phải có
								giải trình hoặc sao y có xác nhận của cán bộ Bảo Minh hoặc đã được công chứng. Lưu ý hóa đơn thanh toán
								phải là bản gốc nếu Bảo Minh thanh toán hết giá trị của Hóa đơn.
							</li>
							<li>
								Trong những trường hợp đặc biệt cần thiết, chúng tôi có quyền yêu cầu bổ sung những chứng từ không được
								liệt kê ở trên để việc giải quyết bồi thường được thực hiện nhanh chóng và chính xác.
							</li>
						</ul>
					</div>
				</Row>
			</div>
		</main>
	);
}

function AttachedDocuments() {
	return (
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

function FAQ() {
	return (
		<Container className="px-28 my-16">
			<Header
				title="Câu Hỏi Thường Gặp Về Bồi Thường"
				description="Tải tài liệu bên dưới để đọc và nắm chi tiết về các vấn đề xoay quanh về Bồi Thường"
			/>

			{/* FAQ Card */}
			<div className="max-w-md bg-[#F24444] rounded-xl py-10 px-8">
				<h3 className="text-4xl font-bold text-white mb-8 leading-snug">
					Tải Câu Hỏi
					<br />
					Thường Gặp
					<br />
					Về Bồi Thường
				</h3>

				<button
					type="button"
					onClick={() => window.open(faqFileUrl, "_blank")}
					className="flex px-8 bg-white text-[#F24444] rounded-full items-center justify-center gap-2 group transition-all duration-300 hover:scale-105"
				>
					<span className="text-xl font-bold my-4 uppercase">xem tài liệu</span>
					<FiChevronDown className="w-8 h-8 group-hover:rotate-180 transition-all duration-300" />
				</button>
			</div>
		</Container>
	);
}
