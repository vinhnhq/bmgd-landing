"use client";

import AgentRecruitmentTiny from "@/components/agent-recruitment-tiny";
import FAQ from "@/components/agent-recruitment/FAQ";
import Footer from "@/components/footer";
import InsuranceProducts from "@/components/insurance-products";
import Navbar from "@/components/navbar";
import ProductNav from "@/components/products/nav";
import PromotionalBanner from "@/components/promotion-banner";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Suspense } from "react";

export default function IntlTravelLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<>
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
							className={cn(
								"bg-[#8CC166] text-white px-4 py-4 rounded-lg uppercase text-xl font-extrabold shadow-elevation",
								"hover:scale-105 transition-transform duration-300",
							)}
							onClick={() => {
								window.open(
									"https://drive.google.com/file/d/1t9vpZCsIBd8kTOMKe2W4DKFb-oTPRZhw/view?usp=drive_link",
									"_blank",
								);
							}}
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

			<section className="bg-white px-28 py-8">
				<Suspense fallback={null}>
					<ProductNav />
				</Suspense>
			</section>

			{children}

			<FAQ />
			<Suspense fallback={null}>
				<InsuranceProducts />
			</Suspense>

			<div className="mb-14">
				<AgentRecruitmentTiny />
			</div>

			<Footer />
		</>
	);
}
