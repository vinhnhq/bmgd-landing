import AgentRecruitment from "@/components/agent-recruitment";
import FAQ from "@/components/agent-recruitment/FAQ";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ProductList from "@/components/product-showcase/ProductList";
import ProductNav from "@/components/products/nav";
import PromotionalBanner from "@/components/promotion-banner";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
	title: "Bao Minh Gia Dinh",
	description: "Bao Minh Gia Dinh",
};

export default async function IntlTravelLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{
		url: {
			pathname: "intro" | "fee" | "benefit" | "claim" | "rule";
		};
	}>;
}>) {
	const currentPage = await params;

	console.log(currentPage);
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
				<ProductNav />
			</section>

			{children}

			<FAQ />
			<ProductList />

			<div className="mb-14">
				<AgentRecruitment />
			</div>

			<Footer />
		</>
	);
}
