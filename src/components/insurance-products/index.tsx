import Image from "next/image";
import { Carousel, type CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Container } from "@/components/layout";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const images = {
	product1Banner: "/product-1-banner.jpeg",
	product2Banner: "/product-2-banner.jpeg",
	product3Banner: "/product-3-banner.jpeg",
} as const;

const InsuranceProducts = () => {
	const [api, setApi] = useState<CarouselApi>();

	useEffect(() => {
		if (!api) return;

		const timer = setInterval(() => {
			api.scrollPrev();
		}, 4000);

		return () => clearInterval(timer);
	}, [api]);

	const products = [
		{
			id: 1,
			title: "Bảo Hiểm Du Lịch Quốc Tế",
			description:
				"An tâm trên mọi hành trình với sự bảo vệ toàn diện từ tai nạn, chi phí y tế đến mất hành lý hay hủy chuyến bay, mang đến cho bạn chuyến đi trọn vẹn.",
			image: images.product1Banner,
			buttonText: "TÌM HIỂU THÊM",
			tag: "BẢO HIỂM TAI NẠN",
			category: "Bảo hiểm du lịch",
			status: "available",
		},
		{
			id: 2,
			title: "Bảo Hiểm Sức Khỏe Toàn Diện",
			description:
				"Tấm khiên bảo vệ bạn trước những rủi ro do tai nạn, ốm đau, bệnh tật, thai sản... Hỗ trợ viện phí và phẫu thuật, an tâm trước mọi biến cố không lường trước được.",
			image: images.product2Banner,
			buttonText: "SẮP RA MẮT",
			tag: "BẢO HIỂM TAI NẠN",
			category: "Bảo hiểm sức khỏe",
			status: "coming",
		},
		{
			id: 3,
			title: "Bảo Hiểm Sức Khỏe Gia Đình",
			description:
				"Bảo vệ tài chính cho gia đình trước những sự kiện không mong muốn, từ thương tật, ốm đau đến thai sản, giữ trọn nụ cười cho những người thân yêu.",
			image: images.product3Banner,
			buttonText: "SẮP RA MẮT",
			tag: "BẢO HIỂM TAI NẠN",
			category: "Bảo hiểm sức khỏe",
			status: "coming",
		},
		// Duplicate cards for continuous effect
		{
			id: 4,
			title: "Bảo Hiểm Du Lịch Quốc Tế",
			description:
				"An tâm trên mọi hành trình với sự bảo vệ toàn diện từ tai nạn, chi phí y tế đến mất hành lý hay hủy chuyến bay, mang đến cho bạn chuyến đi trọn vẹn.",
			image: images.product1Banner,
			buttonText: "TÌM HIỂU THÊM",
			tag: "BẢO HIỂM TAI NẠN",
			category: "Bảo hiểm du lịch",
			status: "available",
		},
		{
			id: 5,
			title: "Bảo Hiểm Sức Khỏe Toàn Diện",
			description:
				"Tấm khiên bảo vệ bạn trước những rủi ro do tai nạn, ốm đau, bệnh tật, thai sản... Hỗ trợ viện phí và phẫu thuật, an tâm trước mọi biến cố không lường trước được.",
			image: images.product2Banner,
			buttonText: "SẮP RA MẮT",
			tag: "BẢO HIỂM TAI NẠN",
			category: "Bảo hiểm sức khỏe",
			status: "coming",
		},
		{
			id: 6,
			title: "Bảo Hiểm Sức Khỏe Gia Đình",
			description:
				"Bảo vệ tài chính cho gia đình trước những sự kiện không mong muốn, từ thương tật, ốm đau đến thai sản, giữ trọn nụ cười cho những người thân yêu.",
			image: images.product3Banner,
			buttonText: "SẮP RA MẮT",
			tag: "BẢO HIỂM TAI NẠN",
			category: "Bảo hiểm sức khỏe",
			status: "coming",
		},
	];

	return (
		<Container className="bg-white py-16 px-28">
			<h2 className="text-[40px] font-bold mb-8">Các Sản Phẩm Bảo Hiểm Nổi Bật</h2>
			<div className="relative -mx-16">
				<Carousel
					opts={{
						align: "start",
						loop: true,
					}}
					setApi={setApi}
					className="w-full"
				>
					<div className="px-16">
						<CarouselContent className="-ml-8">
							{products.map((product) => (
								<CarouselItem key={product.id} className="pl-8 basis-1/3 py-2">
									<ProductCard {...product} />
								</CarouselItem>
							))}
						</CarouselContent>
					</div>

					<button
						type="button"
						onClick={() => api?.scrollNext()}
						className="absolute -left-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-md shadow-slate-900/40 flex items-center justify-center hover:bg-[#F24444] hover:text-white transition-colors"
						aria-label="Previous slide"
					>
						<IoIosArrowBack className="h-4 w-4" />
					</button>

					<button
						type="button"
						onClick={() => api?.scrollPrev()}
						className="absolute -right-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-md shadow-slate-900/40 flex items-center justify-center hover:bg-[#F24444] hover:text-white transition-colors"
						aria-label="Next slide"
					>
						<IoIosArrowForward className="h-4 w-4" />
					</button>
				</Carousel>
			</div>
		</Container>
	);
};

export default InsuranceProducts;
