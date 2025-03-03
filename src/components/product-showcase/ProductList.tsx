import ProductCard from "@/components/insurance-products/ProductCard";
import { Container } from "@/components/layout";

const PRODUCTS = [
	{
		title: "Bảo Hiểm Du Lịch Quốc Tế",
		category: "BẢO HIỂM TAI NẠN",
		description:
			"An tâm trên mọi hành trình với sự bảo vệ toàn diện từ tai nạn, chi phí y tế đến mất hành lý hay hủy chuyến bay, mang đến cho bạn chuyến đi trọn vẹn.",
		image: "/product-1-banner.jpeg",
		status: "available" as const,
		buttonText: "TÌM HIỂU THÊM",
		tag: "BẢO HIỂM TAI NẠN",
	},
	{
		title: "Bảo Hiểm Sức Khỏe Toàn Diện",
		category: "BẢO HIỂM TAI NẠN",
		description:
			"Tâm khiến bảo vệ bạn trước những rủi ro do tai nạn, ốm đau, bệnh tật, thai sản... Hỗ trợ viện phí và phẫu thuật, an tâm trước mọi biến cố không lường trước được.",
		image: "/product-2-banner.jpeg",
		status: "coming" as const,
		buttonText: "TÌM HIỂU THÊM",
		tag: "BẢO HIỂM TAI NẠN",
	},
	{
		title: "Bảo Hiểm Sức Khỏe Gia Đình",
		category: "BẢO HIỂM TAI NẠN",
		description:
			"Bảo vệ tài chính cho gia đình trước những sự kiện không mong muốn, từ thương tật, ốm đau đến thai sản, giữ trọn nụ cười cho những người thân yêu.",
		image: "/product-3-banner.jpeg",
		status: "coming" as const,
		buttonText: "TÌM HIỂU THÊM",
		tag: "BẢO HIỂM TAI NẠN",
	},
];

const ProductList = () => {
	return (
		<Container className="mx-auto px-28 py-4 mt-8">
			<div className="grid grid-cols-3 gap-8">
				{PRODUCTS.map((product) => (
					<ProductCard key={product.title} {...product} />
				))}
			</div>

			<div className="text-center mt-12">
				<p className="text-2xl text-gray-600 font-medium">Đang cập nhật thêm sản phẩm</p>
			</div>
		</Container>
	);
};

export default ProductList;
