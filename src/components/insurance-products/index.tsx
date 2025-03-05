import { Container } from "@/components/layout";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/me/carousel";
import ProductCard from "./ProductCard";

const images = {
	product1Banner: "/product-1-banner.jpeg",
	product2Banner: "/product-2-banner.jpeg",
	product3Banner: "/product-3-banner.jpeg",
};

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
		isActive: true,
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
		isActive: false,
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
		isActive: false,
	},
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
		isActive: true,
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
		isActive: false,
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
		isActive: false,
	},
];

export default function InsuranceProducts() {
	return (
		<Container className="bg-white px-28 py-16 space-y-4">
			<h2 className="text-4xl font-bold text-black">Các Sản Phẩm Bảo Hiểm Nổi Bật</h2>

			<Carousel opts={{ loop: true, align: "start" }} className="-mx-4">
				<CarouselContent className="">
					{products.map((product) => (
						<CarouselItem key={product.id} className="basis-1/3">
							<div className="h-full p-4">
								<div className="shadow-elevation rounded-2xl h-full">
									<ProductCard {...product} />
								</div>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>

				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</Container>
	);
}
