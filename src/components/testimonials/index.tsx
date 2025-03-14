import { Container } from "@/components/layout";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/me/carousel";
import { CreateTestimonialButton } from "./CreateButton";
import TestimonialCard from "./TestimonialCard";

const mockTestimonials = [
	{
		id: "1",
		name: "Bùi Vũ Uyên My",
		type: "Khách hàng mua BH Du Lịch Quốc Tế",
		content:
			"Khi tôi bay từ Việt Nam sang Úc, chuyến bay của tôi bị hoãn, và sau đó phải nghỉ lại một đêm ở Singapore. Tổng thời gian trễ nối chuyến là 15 tiếng. Rất may, Công ty Bảo Minh đã bồi thường cho tôi 4,7 triệu cho sự cố này, trong khi phí bảo hiểm cho 15 ngày chỉ 2 triệu đồng. Tôi rất hài lòng vì bồi thường viên hỗ trợ nhiệt tình, cập nhật liên tục.",
		rating: 5,
	},
	{
		id: "2",
		name: "Nguyễn Thị Thúy",
		type: "Khách hàng mua BH Sức Khỏe Cá Nhân",
		content:
			"Tôi mua bảo hiểm Sức Khỏe Cá Nhân của Bảo Minh từ nhân viên của FE Credit tư vấn với phí 3 triệu để chuẩn bị sinh con. Các bạn từ FE Credit đến Bảo Minh đều tư vấn rất nhiệt tình. Khi sinh, tôi bị vỡ ối sớm và được Bảo Minh bồi thường 10,6 triệu. Tôi thật sự biết ơn sự hỗ trợ tận tâm của FE Credit và Bảo Minh, và cảm thấy mình đã chọn đúng nơi để gửi gắm niềm tin!",
		rating: 5,
	},
	{
		id: "3",
		name: "Trương Công Huy",
		type: "Khách hàng mua BH Sức Khỏe Toàn Diện",
		content:
			"Tôi đã mua gói bảo hiểm Sức Khỏe Toàn Diện với mức phí 1 triệu. Trong hai đợt điều trị, từ 16/7 - 31/07 và 01/08 - 16/08, tôi gặp tình trạng cứng khớp, bong gân, tổn thương dây chằng chéo và phải phẫu thuật tái tạo dây chằng. Nhờ mua bảo hiểm tôi vừa được bồi thường tiền phẫu thuật vừa nhận được trợ cấp tiền mặt, tổng nhận là 14 triệu. Nếu không mua bảo hiểm của Bảo Minh, tôi đã phải mất một khoản tài chính rất đáng kể.",
		rating: 5,
	},
	{
		id: "4",
		name: "Nguyễn Thái Sơn",
		type: "Khách hàng mua BH Sức Khỏe Gia Đình",
		content:
			"Tôi đã mua bảo hiểm gia đình với mức phí 3,7 triệu cho ba mẹ và bản thân. Vừa rồi, mẹ tôi bị đau tức ngực, đi khám thì phát hiện bị viêm phế quản phổi. Sau khi điều trị, bảo hiểm đã bồi thường hơn 4 triệu. Tôi rất cảm ơn bồi thường viên của Bảo Minh đã nhiệt tình hỗ trợ trong quá trình này.",
		rating: 5,
	},
	{
		id: "5",
		name: "Nguyễn Kiều Trung",
		type: "Khách hàng mua BH Du Lịch Quốc Tế",
		content:
			"Mua bảo hiểm du lịch là quyết định sáng suốt của tôi. Khi đi Hungary, tôi không may bị ngộ độc thức ăn và phải nhập viện. Viện phí 890 USD, gần bằng tiền du lịch của một người! May mắn thay, Bảo Minh đã bồi thường gần 19 triệu đồng, trong khi phí bảo hiểm chỉ 700 nghìn. Thật sự hài lòng với sự hỗ trợ kịp thời!!!",
		rating: 5,
	},
	{
		id: "6",
		name: "Huỳnh Thị Thùy Trang",
		type: "Khách hàng mua BH Sức Khỏe Toàn Diện",
		content:
			"Công ty mua cho tôi bảo hiểm với phí 2,4 triệu. Khi nhập viện vì dị ứng mày đay, dù chi phí không lớn, tôi vẫn quyết định thử nộp yêu cầu bồi thường để xem bảo hiểm có mua để khó đòi như nhiều người nói không. Rất ngờ là chỉ sau 2 ngày, Bồi Thường Viên bên Bảo Minh đã gửi thư xác nhận tình trạng hồ sơ của tôi đầy đủ và chi trả 1,024 triệu. Thủ tục rất đơn giản, và tôi nhận được tiền bồi thường chỉ sau 1 ngày.",
		rating: 5,
	},
];

export default function Testimonials() {
	return (
		<Container className="bg-white px-28 py-8 space-y-4">
			<h2 className="text-4xl font-bold text-black">Đối Tác & Khách Hàng Nói Về Bảo Minh Gia Đình</h2>
			<p className="text-base text-black tracking-tight">
				Những ý kiến đánh giá từ đối tác và khách hàng luôn là động lực để Bảo Minh Gia Đình không ngừng nâng cao và
				hoàn thiện chất lượng dịch vụ của mình.
			</p>

			<Carousel opts={{ loop: true, align: "start" }} className="-mx-4">
				<CarouselContent className="">
					{mockTestimonials.map((testimonial) => (
						<CarouselItem key={testimonial.id} className="basis-1/3">
							<div className="h-full p-4">
								<div className="shadow-elevation rounded-2xl h-full">
									<TestimonialCard {...testimonial} />
								</div>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>

				<CarouselPrevious />
				<CarouselNext />
			</Carousel>

			<div className="flex justify-center">
				<CreateTestimonialButton />
			</div>
		</Container>
	);
}
