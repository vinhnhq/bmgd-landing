"use client";

import AgentRecruitment from "@/components/agent-recruitment";
import FAQ from "@/components/agent-recruitment/FAQ";
import Footer from "@/components/footer";
import ProductList from "@/components/product-showcase/ProductList";
import { cn } from "@/lib/utils";
import { Suspense } from "react";
import { BsFiletypePdf } from "react-icons/bs";

export default function IntlTravelIntroPage() {
	return (
		<>
			<section className="bg-white px-28 py-8">
				<div className="space-y-8 font-medium">
					<div className="text-xl font-medium">
						Liên hệ hỗ trợ y tế toàn cầu khẩn cấp 24/24 của EATH khi gặp sự cố tại nước ngoài
						<a href="tel:+842835359818" className="ml-2">
							(+84) (028).3535.9818
						</a>
					</div>

					<div className="text-brand-redSecondary leading-10 text-2xl font-medium">
						(*) Lưu ý: Tất cả các điều khoản liên quan tới Covid-19 áp dụng cho người dưới 70 tuổi và đã tiêm ít nhất 2
						mũi vắc xin Covid-19
					</div>
					<div className="text-brand-redSecondary leading-10 text-2xl font-medium">
						(*) BẢO MINH HOÀN 80% PHÍ BẢO HIỂM TRONG TRƯỜNG HỢP QUÝ KHÁCH TRƯỢT VISA VÀ CÓ THƯ TỪ CHỐI CỦA ĐẠI SỨ QUÁN.
					</div>
					<div className="font-bold text-2xl">Xem và download quyền lợi các gói (Áp dụng cá nhân)</div>
					<div className="font-bold text-2xl">Đối với Toàn cầu (không bao gồm khối Schengen).</div>

					<a href="https://www.baominh.com.vn/uploads/source/QUYEN%20LOI%20PHO%20THONG%20-%20STANDARD_1.pdf" target="_blank" rel="noopener noreferrer">
						<div className="text-blue-700 underline underline-offset-4 cursor-pointer text-xl font-medium">
							- Quyền lợi phổ thông (Mức trách nhiệm tối đa đến 50.000 USD)
						</div>
					</a>

					<a href="https://www.baominh.com.vn/uploads/source/BANG%20QUYEN%20LOI%20CAO%20CAP%20-%20SUPERIOR_2.pdf" target="_blank" rel="noopener noreferrer">
						<div className="text-blue-700 underline underline-offset-4 cursor-pointer text-xl font-medium">
							- Quyền lợi cao cấp (Mức trách nhiệm tối đa đến 100.000 USD)
						</div>
					</a>

					<a href="https://www.baominh.com.vn/uploads/source/QUYEN%20LOI%20THUONG%20HANG%20-%20PREMIER_2.pdf" target="_blank" rel="noopener noreferrer">
						<div className="text-blue-700 underline underline-offset-4 cursor-pointer text-xl font-medium">
							- Quyền lợi thượng hạng (Mức trách nhiệm tối đa đến 150.000 USD)
						</div>
					</a>

					<div className="py-8">
						<div className="border border-black border-b-0 p-4 space-y-4">
							<h2 className="text-3xl font-bold text-center text-brand-redSecondary">BẢNG TÓM TẮT VỀ SẢN PHẨM</h2>
							<p className="text-center text-2xl font-bold">
								(Chi tiết xin vui lòng xem tại Quy Tắc Bảo Hiểm Du Lịch Quốc Tế
								<a href="https://www.baominh.com.vn/uploads/source/File%20t%C3%A0i%20li%E1%BB%87u/con%20nguoi/Du%20lich/quy-tac-du-lich-quoc-te.pdf" target="_blank" rel="noopener noreferrer">
									<span className="text-blue-700 underline underline-offset-4 cursor-pointer ml-2">tại đây</span>
								</a>)
							</p>
						</div>

						<table className="w-full border-collapse border border-black text-2xl font-medium">
							<tbody>
								<tr>
									<td className="border border-black p-4 font-bold w-1/3">1. Tên Sản Phẩm</td>
									<td className="border border-black p-4 text-brand-redSecondary font-bold">
										Bảo Hiểm Du Lịch Quốc Tế
									</td>
								</tr>
								<tr>
									<td className="border border-black p-4 font-bold w-1/4">2. Mã Nghiệp Vụ</td>
									<td className="border border-black p-4">
										IW chương trình bảo hiểm du lịch quốc tế cá nhân.
										<br />
										IH chương trình bảo hiểm du lịch quốc tế nhóm.
									</td>
								</tr>
								<tr>
									<td className="border border-black p-4 font-bold w-1/4">3. Đối Tượng Bảo Hiểm</td>
									<td className="border border-black p-4">Con người, tài sản.</td>
								</tr>
								<tr>
									<td className="border border-black p-4 font-bold w-1/4">4. Người Được Bảo Hiểm</td>
									<td className="border border-black p-4">
										Công dân Việt Nam ra nước ngoài tham quan, nghỉ mát, thăm viếng bạn bè, bà con dự các hội nghị quốc
										tế, đại hội, thi đấu thể thao, biểu diễn nghệ thuật, làm việc theo các hình thức sau:
										<br />- Tập thể đi thành đoàn có tổ chức và chương trình cụ thể đã định trước.
										<br />- Cá nhân.
									</td>
								</tr>
								<tr>
									<td className="border border-black p-4 font-bold w-1/4">5. Phạm Vi Bảo Hiểm</td>
									<td className="border border-black p-4">
										- Tử vong do tai nạn; Thương tật vĩnh viễn do tai nạn; Khi sử dụng phương tiện vận tải công cộng; Hỗ
										trợ chi phí học hành của trẻ em; Chi phí y tế do tai nạn và ốm đau, chi phí nha khoa do tai nạn; Trợ
										cấp tiền mặt khi nằm viện; Chi phí cho thân nhân đi thăm.
										<br />
										<br />- Chi phí đưa trẻ em hồi hương, vận chuyển khẩn cấp, vận chuyển hài cốt/mài tàng, bảo lãnh
										thanh toán viện phí, thiệt hại hành lý và tư trang, hỗ trợ du lịch toàn cầu, hành lý bị trì hoãn,
										mất giấy tờ thông hành, cắt ngắn hay hủy bỏ chuyến đi, lỡ nối chuyến, trách nhiệm cá nhân, bắt cóc
										và con tin, tổn thất tư gia vì hỏa hoạn và trong trường hợp bị khủng bố.
									</td>
								</tr>
								<tr>
									<td className="border border-black p-4 font-bold w-1/4">6. Các Loại Trừ Bảo Hiểm</td>
									<td className="border border-black p-4">
										- Loại trừ chung theo quy định.
										<br />- Bệnh tật hay tổn thương có sẵn, bệnh mãn tính.
										<br />- Nội loạn, đình công, chiến tranh. Liên quan trực tiếp, gián tiếp tới hoạt động khủng bố.
										<br />- Tác động của phản ứng hạt nhân hoặc nhiễm phóng xạ.
										<br />- Tổn thất gián tiếp hoặc thiệt hại mang tính hậu quả.
									</td>
								</tr>
								<tr>
									<td className="border border-black p-4 font-bold w-1/4">7. Quyền Lợi Người Được Bảo Hiểm</td>
									<td className="border border-black p-4">
										Tùy theo trường hợp cụ thể Bảo Minh bồi thường chi phí cho người được bảo hiểm bị chết, thương tật,
										về hành lý và vật dụng riêng bị mất.
									</td>
								</tr>
								<tr>
									<td className="border border-black p-4 font-bold w-1/4">8. Thời Hạn Bảo Hiểm</td>
									<td className="border border-black p-4">
										Từ ngày & thời điểm khởi hành tính từ điểm khởi hành quốc tế tại nước xuất hành và kết thúc vào thời
										điểm trở về nước xuất hành tại khu vực đến quốc tế hoặc vào lúc nửa đêm của ngày cuối cùng của hiệu
										lực bảo hiểm, tùy theo thời điểm nào sớm hơn sẽ được áp dụng.
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</section>

			<section className="bg-white px-28">
				<div className="grid grid-cols-2 gap-8">
					<a href="https://www.baominh.com.vn/uploads/source/QUYEN%20LOI%20THUONG%20HANG%20-%20PREMIER_2.pdf" target="_blank" rel="noopener noreferrer">
						<FileMenuItem>Quyền lợi thượng hạng USD</FileMenuItem>
					</a>
					<a href="https://www.baominh.com.vn/uploads/source/QUYEN%20LOI%20PHO%20THONG%20-%20STANDARD_1.pdf" target="_blank" rel="noopener noreferrer">
						<FileMenuItem>Quyền lợi phổ thông USD</FileMenuItem>
					</a>
					<a href="https://www.baominh.com.vn/uploads/source/BANG%20QUYEN%20LOI%20CAO%20CAP%20-%20SUPERIOR_2.pdf" target="_blank" rel="noopener noreferrer">
						<FileMenuItem>Quyền lợi cao cấp USD</FileMenuItem>
					</a>
					<a href="https://www.baominh.com.vn/uploads/source/File%20t%C3%A0i%20li%E1%BB%87u/con%20nguoi/Du%20lich/quy-tac-du-lich-quoc-te.pdf" target="_blank" rel="noopener noreferrer">
						<FileMenuItem>Quy tắc bảo hiểm du lịch quốc tế</FileMenuItem>
					</a>
				</div>
			</section>

			<FAQ />
			<Suspense fallback={null}>
				<ProductList />
			</Suspense>

			<div className="mb-14">
				<AgentRecruitment />
			</div>
		</>
	);
}

function FileMenuItem({ children }: { children: React.ReactNode }) {
	return (
		<div
			className={cn(
				"flex items-center gap-4 text-xl font-medium cursor-pointer",
				"hover:scale-105 transition-transform duration-300",
			)}
		>
			<div className="bg-brand-redSecondary py-3 px-2 rounded-md shadow-elevation">
				<BsFiletypePdf className="text-white text-4xl" />
			</div>
			{children}
		</div>
	);
}
