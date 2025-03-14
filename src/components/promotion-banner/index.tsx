import { Container } from "@/components/layout";

export default function PromotionalBanner() {
	return (
		<Container className="flex items-center justify-center bg-primary mx-auto py-4">
			<p className="font-bold text-2xl text-white">
				Liên hệ ngay để nhận tư vấn sản phẩm bảo hiểm phù hợp với nhu cầu doanh nghiệp!
			</p>
		</Container>
	);
}
