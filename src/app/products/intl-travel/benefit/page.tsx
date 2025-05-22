"use client";

import { ConditionalRenderer } from "@/components/utils";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDebounce } from "react-use";

export default function IntlTravelBenefitPage() {
	const [table, setTable] = useState<"first" | "second">("first");

	const containerRef = useRef<HTMLDivElement>(null);
	const leftButtonRef = useRef<HTMLButtonElement>(null);
	const rightButtonRef = useRef<HTMLButtonElement>(null);

	// Define the update function with useCallback to memoize it
	const updateButtonPositions = useCallback(() => {
		if (containerRef.current && leftButtonRef.current && rightButtonRef.current) {
			const minOffset = 256;

			const containerRect = containerRef.current.getBoundingClientRect();

			// Position buttons horizontally
			const containerLeft = containerRect.left + window.scrollX;
			const containerRight = containerRect.right + window.scrollX;
			leftButtonRef.current.style.left = `${containerLeft - 64}px`;
			rightButtonRef.current.style.right = `${document.documentElement.clientWidth - containerRight - 64}px`;

			const containerTop = containerRect.top;
			const containerBottom = containerRect.bottom;

			// Center in viewport
			const centerInViewport = window.innerHeight / 2;

			if (containerTop + minOffset > centerInViewport) {
				leftButtonRef.current.style.top = `${containerTop + minOffset}px`;
				rightButtonRef.current.style.top = `${containerTop + minOffset}px`;
				return;
			}

			if (containerBottom - minOffset < centerInViewport) {
				leftButtonRef.current.style.top = `${containerBottom - minOffset}px`;
				rightButtonRef.current.style.top = `${containerBottom - minOffset}px`;
				return;
			}

			// Clamp to container bounds
			const clampedPosition = centerInViewport;

			// Apply vertical position
			leftButtonRef.current.style.top = `${clampedPosition}px`;
			rightButtonRef.current.style.top = `${clampedPosition}px`;
		}
	}, []);

	// Use debounce for both scroll and manual updates
	const [, cancel] = useDebounce(updateButtonPositions, 100, [updateButtonPositions]);

	useEffect(() => {
		// Initial positioning (no debounce for this)
		updateButtonPositions();

		// Set up event listeners that will trigger the debounced function
		const handleEvents = () => updateButtonPositions();

		window.addEventListener("scroll", handleEvents);
		window.addEventListener("resize", handleEvents);

		return () => {
			window.removeEventListener("scroll", handleEvents);
			window.removeEventListener("resize", handleEvents);
			// Cancel any pending debounced updates
			cancel();
		};
	}, [updateButtonPositions, cancel]);

	return (
		<main className="bg-white px-28 py-8 space-y-12">
			<header>
				<h2 className="text-[40px] font-bold text-brand-redSecondary text-center leading-tight uppercase">
					Bảng quyền lợi <br /> bảo hiểm du lịch quốc tế
				</h2>
			</header>

			<section id="benefit" className="space-y-8">
				<article>
					<div className="space-y-1 relative" ref={containerRef}>
						<div className="text-[25px] italic font-medium text-black text-right">Đơn vị tính: USD</div>

						<ConditionalRenderer condition={table === "first"} component={<FirstTable />} fallback={<SecondTable />} />

						<button
							ref={leftButtonRef}
							className={cn(
								"fixed flex items-center justify-center h-8 w-8 rounded-full bg-white shadow-elevation z-50",
								"hover:bg-brand-redPrimary hover:text-white transition-all duration-300",
								table === "first" && "cursor-not-allowed",
							)}
							onClick={() => setTable("first")}
							type="button"
						>
							<ArrowLeft className="w-4 h-4" />
						</button>

						<button
							ref={rightButtonRef}
							className={cn(
								"fixed flex items-center justify-center h-8 w-8 rounded-full bg-white shadow-elevation z-50",
								"hover:bg-brand-redPrimary hover:text-white transition-all duration-300",
								table === "second" && "cursor-not-allowed",
							)}
							onClick={() => setTable("second")}
							type="button"
						>
							<ArrowRight className="w-4 h-4" />
						</button>
					</div>
				</article>
			</section>
		</main>
	);
}

function FirstTable() {
	return (
		<TableRoot>
			<TableHeader>
				<TableRow>
					<ColumnHeaderCell rowSpan={2} className="border border-black w-2/5" size="large">
						MỤC A: TAI NẠN CÁ NHÂN
					</ColumnHeaderCell>
					<ColumnHeaderCell colSpan={2} className="border border-black" size="large">
						Nhóm
					</ColumnHeaderCell>
					<ColumnHeaderCell className="border border-black" size="large">
						Cá Nhân
					</ColumnHeaderCell>
				</TableRow>

				<TableRow>
					<ColumnHeaderCell className="border border-black w-1/5" size="medium">
						Cơ Bản 1
					</ColumnHeaderCell>
					<ColumnHeaderCell className="border border-black w-1/5" size="medium">
						Cơ Bản 2
					</ColumnHeaderCell>
					<ColumnHeaderCell className="border border-black w-1/5" size="medium">
						Phổ Thông
					</ColumnHeaderCell>
				</TableRow>
			</TableHeader>

			<TableBody>
				<TableRow>
					<TableCell size="medium" className="text-left space-y-4">
						Quyền Lợi 1: Tử Vong Do Tai Nạn
					</TableCell>
					<TableCell>$5,000</TableCell>
					<TableCell>$10,000</TableCell>
					<TableCell>$50,000</TableCell>
				</TableRow>
				<TableRow>
					<TableCell size="medium" className="text-left space-y-4">
						<span>Quyền Lợi 2:</span>
						<CellDescription>Thương tật toàn bộ vĩnh viễn và thương tật bộ phận vĩnh viễn do tai nạn</CellDescription>
					</TableCell>
					<TableCell>$5,000</TableCell>
					<TableCell>$10,000</TableCell>
					<TableCell>$50,000</TableCell>
				</TableRow>
				<TableRow>
					<TableCell size="medium" className="text-left space-y-4">
						<span>Quyền Lợi 3: Gấp Đôi Số Tiền Bảo Hiểm Khi Sử Dụng Phương Tiện Vận Tải Công Cộng</span>
						<CellDescription>
							Số tiền BH sẽ gấp đôi nếu người được BH bị tai nạn khi đang sử dụng phương tiện vận tải công cộng với lịch
							trình cụ thể (quyền lợi này không áp dụng đối với trẻ em dưới 18 tuổi và người lớn trên 70 tuổi)
						</CellDescription>
					</TableCell>
					<TableCell>Không áp dụng</TableCell>
					<TableCell>Không áp dụng</TableCell>
					<TableCell>Không áp dụng</TableCell>
				</TableRow>
				<TableRow>
					<TableCell size="medium" className="text-left space-y-4">
						<span>Quyền Lợi 4: Trợ Cấp Học Phí Cho Trẻ Phụ Thuộc</span>
						<CellDescription>
							Là số tiền sẽ được trả cho mỗi người con hợp pháp ( còn phụ thuộc, dưới 23 tuổi, đang còn theo học tại một
							trường chính thức) khi người được bảo hiểm chính chết do tai nạn ( tối đa 4 người con).
						</CellDescription>
					</TableCell>
					<TableCell>Không áp dụng</TableCell>
					<TableCell>Không áp dụng</TableCell>
					<TableCell>$500</TableCell>
				</TableRow>
			</TableBody>

			<TableHeader>
				<TableRow>
					<ColumnHeaderCell rowSpan={2} className="border border-black" size="large">
						MỤC B: CHI PHÍ Y TẾ
					</ColumnHeaderCell>
					<ColumnHeaderCell colSpan={2} className="border border-black" size="large">
						Nhóm
					</ColumnHeaderCell>
					<ColumnHeaderCell className="border border-black" size="large">
						Cá Nhân
					</ColumnHeaderCell>
				</TableRow>

				<TableRow>
					<ColumnHeaderCell className="border border-black" size="medium">
						Cơ Bản 1
					</ColumnHeaderCell>
					<ColumnHeaderCell className="border border-black" size="medium">
						Cơ Bản 2
					</ColumnHeaderCell>
					<ColumnHeaderCell className="border border-black" size="medium">
						Phổ Thông
					</ColumnHeaderCell>
				</TableRow>
			</TableHeader>

			<TableBody>
				<TableRow>
					<TableCell size="medium" className="text-left">
						Quyền Lợi 5: Chi Phí Y Tế Cho Tai Nạn Và Ốm Đau, Chi Phí Nha Khoa Do Tai Nạn
					</TableCell>
					<TableCell />
					<TableCell />
					<TableCell />
				</TableRow>
				<TableRow>
					<TableCell size="medium" className="text-left space-y-4">
						<span>5.1 Chi Phí Điều Trị Nội Trú</span>
						<CellDescription>
							Giới hạn chính áp dụng đối với các chi phí điều trị nội trú, phẫu thuật, xe cứu thương và nhân viên y tế
							đi kèm, xét nghiệm...Đây là giới hạn cho tất cả các chi phí phát sinh theo phần này.
						</CellDescription>
					</TableCell>
					<TableCell>$5,000</TableCell>
					<TableCell>$10,000</TableCell>
					<TableCell>$50,000</TableCell>
				</TableRow>
				<TableRow>
					<TableCell size="medium" className="text-left space-y-4">
						<span>5.2 Chi Phí Điều Trị Ngoại Trú</span>
						<CellDescription>
							Chi phí điều trị ngoại trú, bao gồm chi phí khám bệnh, thuốc kê theo đơn của bác sĩ điều trị, chụp
							X-quang, xét nghiệm theo chỉ định. Mức miễn thường 50USD cho một lần điều trị.
						</CellDescription>
					</TableCell>
					<TableCell>Không áp dụng</TableCell>
					<TableCell>Không áp dụng</TableCell>
					<TableCell>$2,500</TableCell>
				</TableRow>
				<TableRow>
					<TableCell size="medium" className="text-left space-y-4">
						<span>5.3 Chi phí y tế do thai sản</span>
						<CellDescription>
							Bồi thường chi phí y tế liên quan đến bệnh tật do thai sản khi đang ở nước ngoài.
						</CellDescription>
					</TableCell>
					<TableCell>Không áp dụng</TableCell>
					<TableCell>Không áp dụng</TableCell>
					<TableCell>$5,000</TableCell>
				</TableRow>
				<TableRow>
					<TableCell size="medium" className="text-left space-y-4">
						<span>5.4 Chi Phí Điều Trị Tiếp Theo</span>
						<CellDescription>
							Chi phí y tế phát sinh trong lãnh thổ Nước xuất hành trong vòng 90 ngày kể từ khi trở về Nước xuất hành.
						</CellDescription>
					</TableCell>
					<TableCell>$800</TableCell>
					<TableCell>$1,200</TableCell>
					<TableCell>$8,000</TableCell>
				</TableRow>
				<TableRow>
					<TableCell size="medium" className="text-left space-y-4">
						<span>Quyền Lợi 6: Trợ Cấp Nằm Viện</span>
						<CellDescription>Trả phụ cấp 50USD cho một ngày nằm viện ở nước ngoài.</CellDescription>
					</TableCell>
					<TableCell>Không áp dụng</TableCell>
					<TableCell>Không áp dụng</TableCell>
					<TableCell>$500</TableCell>
				</TableRow>
				<TableRow>
					<TableCell size="medium" className="text-left space-y-4">
						<span>Quyền Lợi 7: Chi Phí Cho Thân Nhân Đi Thăm</span>
						<CellDescription>
							Chi phí đi lại (vé máy bay khứ hồi) cho một người thân trong gia đình đi thăm khi Người được bảo hiểm phải
							nằm viện trên 5 ngày hay ở trong tình trạng không thể qua khỏi hay bị chết.
						</CellDescription>
					</TableCell>
					<TableCell>Không áp dụng</TableCell>
					<TableCell>Không áp dụng</TableCell>
					<TableCell>$3,500</TableCell>
				</TableRow>
				<TableRow>
					<TableCell size="medium" className="text-left space-y-4">
						<span>Quyền Lợi 8: Đưa Trẻ Em Hồi Hương</span>
						<CellDescription>
							Chi phí đi lại và ăn ở cần thiết phát sinh thêm cho một trẻ em dưới 14 tuổi để đưa trẻ em đó về Việt Nam
							hoặc Quê hương.
						</CellDescription>
					</TableCell>
					<TableCell>Không áp dụng</TableCell>
					<TableCell>Không áp dụng</TableCell>
					<TableCell>$3,500</TableCell>
				</TableRow>
			</TableBody>

			<TableHeader>
				<TableRow>
					<ColumnHeaderCell rowSpan={2} className="border border-black" size="large">
						MỤC C: TRỢ CỨU Y TẾ
					</ColumnHeaderCell>
					<ColumnHeaderCell colSpan={2} className="border border-black" size="large">
						Nhóm
					</ColumnHeaderCell>
					<ColumnHeaderCell className="border border-black" size="large">
						Cá Nhân
					</ColumnHeaderCell>
				</TableRow>

				<TableRow>
					<ColumnHeaderCell className="border border-black" size="medium">
						Cơ Bản 1
					</ColumnHeaderCell>
					<ColumnHeaderCell className="border border-black" size="medium">
						Cơ Bản 2
					</ColumnHeaderCell>
					<ColumnHeaderCell className="border border-black" size="medium">
						Phổ Thông
					</ColumnHeaderCell>
				</TableRow>
			</TableHeader>

			<TableBody>
				<TableRow>
					<TableCell size="medium" className="text-left space-y-4">
						<span>Quyền Lợi 9: Vận Chuyển Khẩn Cấp</span>
						<CellDescription>
							Vận chuyển khẩn cấp Người được bảo hiểm tới cơ sở y tế gần nhất có khả năng cung cấp dịch vụ y tế thích
						</CellDescription>
					</TableCell>
					<TableCell>$5,000</TableCell>
					<TableCell>$10,000</TableCell>
					<TableCell>$50,000</TableCell>
				</TableRow>
				<TableRow>
					<TableCell size="medium" className="text-left space-y-4">
						<span>Quyền Lợi 10: Hồi Hương</span>
						<CellDescription>
							Chi phí đưa Người được bảo hiểm về Việt Nam hoặc Quê hương (bao gồm cả chi phí cho thiết bị y tế di động
							và nhân viên y tế đi kèm).
						</CellDescription>
					</TableCell>
					<TableCell>$5,000</TableCell>
					<TableCell>$10,000</TableCell>
					<TableCell>$50,000</TableCell>
				</TableRow>
				<TableRow>
					<TableCell size="medium" className="text-left space-y-4">
						<span>Quyền Lợi 11: Vận Chuyển Hài Cốt/Mai Táng</span>
						<CellDescription>
							Vận chuyển hài cốt của Người được bảo hiểm về Việt Nam hoặc Quê hương hoặc mai táng ngay tại địa phương.
						</CellDescription>
					</TableCell>
					<TableCell>$5,000</TableCell>
					<TableCell>$10,000</TableCell>
					<TableCell>$50,000</TableCell>
				</TableRow>
				<TableRow>
					<TableCell size="medium" className="text-left space-y-4">
						<span>Quyền Lợi 12: Bảo Lãnh Thanh Toán Viện Phí</span>
						<CellDescription>
							Bảo lãnh thanh toán viện phí trực tiếp cho bệnh viện trong trường hợp nhập viện.
						</CellDescription>
					</TableCell>
					<TableCell>Bao gồm</TableCell>
					<TableCell>Bao gồm</TableCell>
					<TableCell>Bao gồm</TableCell>
				</TableRow>
			</TableBody>

			<TableHeader>
				<TableRow>
					<ColumnHeaderCell rowSpan={2} className="border border-black" size="large">
						MỤC D: HỖ TRỢ DU LỊCH
					</ColumnHeaderCell>
					<ColumnHeaderCell colSpan={2} className="border border-black" size="large">
						Nhóm
					</ColumnHeaderCell>
					<ColumnHeaderCell className="border border-black" size="large">
						Cá Nhân
					</ColumnHeaderCell>
				</TableRow>

				<TableRow>
					<ColumnHeaderCell className="border border-black" size="medium">
						Cơ Bản 1
					</ColumnHeaderCell>
					<ColumnHeaderCell className="border border-black" size="medium">
						Cơ Bản 2
					</ColumnHeaderCell>
					<ColumnHeaderCell className="border border-black" size="medium">
						Phổ Thông
					</ColumnHeaderCell>
				</TableRow>
			</TableHeader>

			<TableBody>
				<TableRow>
					<TableCell size="medium" className="text-left space-y-4">
						<span>Quyền Lợi 13: Thiệt Hại Hành Lý Và Tư Trang</span>
						<CellDescription>
							Mất mát hay hỏng hành lý và tư trang do bị tai nạn, cướp, trộm cắp hay do vận chuyển nhầm. Giới hạn cho
							một hạng mục là 250USD.
						</CellDescription>
					</TableCell>
					<TableCell>$500</TableCell>
					<TableCell>$1,000</TableCell>
					<TableCell>$1,000</TableCell>
				</TableRow>
				<TableRow>
					<TableCell size="medium" className="text-left space-y-4">
						<span>Quyền Lợi 14: Hỗ Trợ Du Lịch</span>
						<CellDescription>
							<ul>
								<li>a. Thông tin trước chuyến đi</li>
								<li>b. Thông tin về đại sứ quán</li>
								<li>c. Những vấn đề dịch thuật</li>
								<li>d. Những vấn đề về pháp luật</li>
								<li>e. Thông tin về người cung cấp dịch vụ y tế</li>
							</ul>
						</CellDescription>
					</TableCell>
					<TableCell>Bao gồm</TableCell>
					<TableCell>Bao gồm</TableCell>
					<TableCell>Bao gồm</TableCell>
				</TableRow>
				<TableRow>
					<TableCell size="medium" className="text-left space-y-4">
						<span>Quyền Lợi 15: Hành Lý Bị Trì Hoãn</span>
						<CellDescription>
							Thanh toán chi phí mua các vật dụng thiết yếu cho vệ sinh cá nhân thiết và quần áo vì lý do hành lý bị trì
							hoãn.
						</CellDescription>
					</TableCell>
					<TableCell>Không áp dụng</TableCell>
					<TableCell>Không áp dụng</TableCell>
					<TableCell>$400</TableCell>
				</TableRow>
				<TableRow>
					<TableCell size="medium" className="text-left space-y-4">
						<span>Quyền Lợi 16: Mất Giấy Tờ Thông Hành</span>
						<CellDescription>
							Chi phí xin cấp lại hộ chiếu, visa đã bị mất cùng chi phí đi lại và ăn ở phát sinh do việc xin cấp lại các
							giấy tờ đó. Giới hạn bồi thường tối đa một ngày là 10% của mức giới hạn cho của quyền lợi này.
						</CellDescription>
					</TableCell>
					<TableCell>Không áp dụng</TableCell>
					<TableCell>Không áp dụng</TableCell>
					<TableCell>$1,500</TableCell>
				</TableRow>
				<TableRow>
					<TableCell size="medium" className="text-left space-y-4">
						<span>Quyền Lợi 17: Cắt Ngắn Hay Hủy Bỏ Chuyến Đi</span>
						<CellDescription>
							Tiền đặt cọc không được hoàn lại cho chuyến đi và chi phí đi lại tăng lên vì cắt ngắn hay hủy chuyến do
							Người được bảo hiểm bị chết, ốm đau thương tật nghiêm trọng, phải ra làm chứng hay thu tòa hoặc được cách
							ly để kiểm dịch.
						</CellDescription>
					</TableCell>
					<TableCell>Không áp dụng</TableCell>
					<TableCell>Không áp dụng</TableCell>
					<TableCell>$4,500</TableCell>
				</TableRow>
				<TableRow>
					<TableCell size="medium" className="text-left space-y-4">
						<span>Quyền Lợi 18: Lỡ Nối Chuyến</span>
						<CellDescription>Thanh toán 100 USD cho mỗi 6 tiếng liên tục bị lỡ nối chuyến.</CellDescription>
					</TableCell>
					<TableCell>Không áp dụng</TableCell>
					<TableCell>Không áp dụng</TableCell>
					<TableCell>$200</TableCell>
				</TableRow>
				<TableRow>
					<TableCell size="medium" className="text-left space-y-4">
						<span>Quyền Lợi 19: Trách Nhiệm Cá Nhân</span>
						<CellDescription>
							Bảo hiểm trách nhiệm pháp lý của Người Được Bảo Hiểm đối với thiệt hại thân thể hay tài sản của bên thứ ba
							gây ra do lỗi bất cẩn của Người Được Bảo Hiểm. (quyền lợi bảo hiểm này không áp dụng cho việc sử dụng hay
							thuê xe có động cơ)
						</CellDescription>
					</TableCell>
					<TableCell>Không áp dụng</TableCell>
					<TableCell>Không áp dụng</TableCell>
					<TableCell>$50,000</TableCell>
				</TableRow>
				<TableRow>
					<TableCell size="medium" className="text-left space-y-4">
						<span>Quyền Lợi 20: Bắt Cóc Và Con Tin</span>
						<CellDescription>
							Thanh toán 150 USD cho mỗi 24 tiếng Người được bảo hiểm bị bắt cóc làm con tin xảy ra trong Chuyến đi nước
							ngoài.
						</CellDescription>
					</TableCell>
					<TableCell>Không áp dụng</TableCell>
					<TableCell>Không áp dụng</TableCell>
					<TableCell>$2,000</TableCell>
				</TableRow>
				<TableRow>
					<TableCell size="medium" className="text-left space-y-4">
						<span>Quyền Lợi 21: Hỗ Trợ Tổn Thất Tư Gia Vì Hỏa Hoạn</span>
						<CellDescription>
							Thanh toán cho các tổn thất hoặc thiệt hại đối với tài sản trong gia đình gây ra bởi hỏa hoạn xảy ra trong
							thời hạn bảo hiểm.
						</CellDescription>
					</TableCell>
					<TableCell>Không áp dụng</TableCell>
					<TableCell>Không áp dụng</TableCell>
					<TableCell>$1,000</TableCell>
				</TableRow>
				<TableRow>
					<TableCell size="medium" className="text-left space-y-4">
						<span>Quyền Lợi 22: Bảo Hiểm Trong Trường Hợp Bị Khủng Bố</span>
						<CellDescription>
							Toàn bộ các quyền lợi từ 1 - 20 của chương trình bảo hiểm đều được áp dụng khi chúng xảy ra bởi các hành
							động khủng bố khi người được bảo hiểm ở nước ngoài.
						</CellDescription>
					</TableCell>
					<TableCell>Bao gồm</TableCell>
					<TableCell>Bao gồm</TableCell>
					<TableCell>Bao gồm</TableCell>
				</TableRow>
			</TableBody>
		</TableRoot>
	);
}

function SecondTable() {
	return (
		<TableRoot>
			<TableHeader>
				<TableRow>
					<ColumnHeaderCell rowSpan={2} className="border border-black w-2/5" size="large">
						MỤC A: TAI NẠN CÁ NHÂN
					</ColumnHeaderCell>
					<ColumnHeaderCell colSpan={3} className="border border-black" size="large">
						Cá Nhân
					</ColumnHeaderCell>
				</TableRow>

				<TableRow>
					<ColumnHeaderCell className="border border-black w-1/5" size="medium">
						Phổ Thông
					</ColumnHeaderCell>
					<ColumnHeaderCell className="border border-black w-1/5" size="medium">
						Cao Cấp
					</ColumnHeaderCell>
					<ColumnHeaderCell className="border border-black w-1/5" size="medium">
						Thượng Hạng
					</ColumnHeaderCell>
				</TableRow>
			</TableHeader>

			<TableBody>
				<TableRow>
					<TableCell size="medium" className="text-left">
						Quyền Lợi 1: Tử Vong Do Tai Nạn
					</TableCell>
					<TableCell>$50,000</TableCell>
					<TableCell>$70,000</TableCell>
					<TableCell>$100,000</TableCell>
				</TableRow>
				<TableRow>
					<TableCell size="medium" className="text-left space-y-4">
						<span>Quyền Lợi 2:</span>
						<CellDescription>Thương tật toàn bộ vĩnh viễn và thương tật bộ phận vĩnh viễn do tai nạn</CellDescription>
					</TableCell>
					<TableCell>$50,000</TableCell>
					<TableCell>$70,000</TableCell>
					<TableCell>$100,000</TableCell>
				</TableRow>
				<TableRow>
					<TableCell size="medium" className="text-left space-y-4">
						<span>Quyền Lợi 3: Gấp Đôi Số Tiền Bảo Hiểm Khi Sử Dụng Phương Tiện Vận Tải Công Cộng</span>
						<CellDescription>
							Số tiền BH sẽ gấp đôi nếu người được BH bị tai nạn khi đang sử dụng phương tiện vận tải công cộng với lịch
							trình cụ thể (quyền lợi này không áp dụng đối với trẻ em dưới 18 tuổi và người lớn trên 70 tuổi)
						</CellDescription>
					</TableCell>
					<TableCell>Không áp dụng</TableCell>
					<TableCell>Không áp dụng</TableCell>
					<TableCell>Không áp dụng</TableCell>
				</TableRow>
				<TableRow>
					<TableCell size="medium" className="text-left space-y-4">
						<span>Quyền Lợi 4: Trợ Cấp Học Phí Cho Trẻ Phụ Thuộc</span>
						<CellDescription>
							Là số tiền sẽ được trả cho mỗi người con hợp pháp ( còn phụ thuộc, dưới 23 tuổi, đang còn theo học tại một
							trường chính thức) khi người được bảo hiểm chính chết do tai nạn ( tối đa 4 người con).
						</CellDescription>
					</TableCell>
					<TableCell>$500</TableCell>
					<TableCell>$600</TableCell>
					<TableCell>$800</TableCell>
				</TableRow>
			</TableBody>

			<TableHeader>
				<TableRow>
					<ColumnHeaderCell rowSpan={2} className="border border-black" size="large">
						MỤC B: CHI PHÍ Y TẾ
					</ColumnHeaderCell>
					<ColumnHeaderCell colSpan={3} className="border border-black" size="large">
						Cá Nhân
					</ColumnHeaderCell>
				</TableRow>

				<TableRow>
					<ColumnHeaderCell className="border border-black" size="medium">
						Phổ Thông
					</ColumnHeaderCell>
					<ColumnHeaderCell className="border border-black" size="medium">
						Cao Cấp
					</ColumnHeaderCell>
					<ColumnHeaderCell className="border border-black" size="medium">
						Thượng Hạng
					</ColumnHeaderCell>
				</TableRow>
			</TableHeader>

			<TableBody>
				<TableRow>
					<TableCell size="medium" className="text-left">
						Quyền Lợi 5: Chi Phí Y Tế Cho Tai Nạn Và Ốm Đau, Chi Phí Nha Khoa Do Tai Nạn
					</TableCell>
					<TableCell />
					<TableCell />
					<TableCell />
				</TableRow>
				<TableRow>
					<TableCell size="medium" className="text-left space-y-4">
						<span>5.1 Chi Phí Điều Trị Nội Trú</span>
						<CellDescription>
							Giới hạn chính áp dụng đối với các chi phí điều trị nội trú, phẫu thuật, xe cứu thương và nhân viên y tế
							đi kèm, xét nghiệm...Đây là giới hạn cho tất cả các chi phí phát sinh theo phần này.
						</CellDescription>
					</TableCell>
					<TableCell>$50,000</TableCell>
					<TableCell>$70,000</TableCell>
					<TableCell>$100,000</TableCell>
				</TableRow>
				<TableRow>
					<TableCell size="medium" className="text-left space-y-4">
						<span>5.2 Chi Phí Điều Trị Ngoại Trú</span>
						<CellDescription>
							Chi phí điều trị ngoại trú, bao gồm chi phí khám bệnh, thuốc kê theo đơn của bác sĩ điều trị, chụp
							X-quang, xét nghiệm theo chỉ định. Mức miễn thường 50USD cho một lần điều trị.
						</CellDescription>
					</TableCell>
					<TableCell>$2,500</TableCell>
					<TableCell>$3,500</TableCell>
					<TableCell>$5,000</TableCell>
				</TableRow>
				<TableRow>
					<TableCell size="medium" className="text-left space-y-4">
						<span>5.3 Chi Phí Y Tế Do Thai Sản</span>
						<CellDescription>
							Bồi thường chi phí y tế liên quan đến bệnh tật do thai sản khi đang ở nước ngoài.
						</CellDescription>
					</TableCell>
					<TableCell>$5,000</TableCell>
					<TableCell>$7,000</TableCell>
					<TableCell>$10,000</TableCell>
				</TableRow>
				<TableRow>
					<TableCell size="medium" className="text-left space-y-4">
						<span>5.4 Chi Phí Điều Trị Tiếp Theo</span>
						<CellDescription>
							Chi phí y tế phát sinh trong lãnh thổ Nước xuất hành trong vòng 90 ngày kể từ khi trở về Nước xuất hành
							Chi phí y tế phát sinh trong lãnh thổ Nước xuất hành trong vòng 90 ngày kể từ khi trở về Nước xuất hành
						</CellDescription>
					</TableCell>
					<TableCell>$8,000</TableCell>
					<TableCell>$10,000</TableCell>
					<TableCell>$12,000</TableCell>
				</TableRow>
				<TableRow>
					<TableCell size="medium" className="text-left space-y-4">
						<span>Quyền Lợi 6: Trợ Cấp Nằm Viện</span>
						<CellDescription>Trả phụ cấp 50USD cho một ngày nằm viện ở nước ngoài.</CellDescription>
					</TableCell>
					<TableCell>$500</TableCell>
					<TableCell>$700</TableCell>
					<TableCell>$1,000</TableCell>
				</TableRow>
				<TableRow>
					<TableCell size="medium" className="text-left space-y-4">
						<span>Quyền Lợi 7: Chi Phí Cho Thân Nhân Đi Thăm</span>
						<CellDescription>
							Chi phí đi lại (vé máy bay khứ hồi) cho một người thân trong gia đình đi thăm khi Người được bảo hiểm Chi
							phí đi lại (vé máy bay khứ hồi) cho một người thân trong gia đình đi thăm khi Người được bảo hiểm
						</CellDescription>
					</TableCell>
					<TableCell>$3,500</TableCell>
					<TableCell>$5,000</TableCell>
					<TableCell>$7,000</TableCell>
				</TableRow>
				<TableRow>
					<TableCell size="medium" className="text-left space-y-4">
						<span>Quyền Lợi 8: Đưa Trẻ Em Hồi Hương</span>
						<CellDescription>
							Chi phí đi lại và ăn ở cần thiết phát sinh thêm cho một trẻ em dưới 14 tuổi để đưa trẻ em đó về Việt Nam
						</CellDescription>
					</TableCell>
					<TableCell>$3,500</TableCell>
					<TableCell>$5,000</TableCell>
					<TableCell>$7,000</TableCell>
				</TableRow>
			</TableBody>

			<TableHeader>
				<TableRow>
					<ColumnHeaderCell rowSpan={2} className="border border-black" size="large">
						MỤC C: TRỢ CỨU Y TẾ
					</ColumnHeaderCell>
					<ColumnHeaderCell colSpan={3} className="border border-black" size="large">
						Cá Nhân
					</ColumnHeaderCell>
				</TableRow>

				<TableRow>
					<ColumnHeaderCell className="border border-black" size="medium">
						Phổ Thông
					</ColumnHeaderCell>
					<ColumnHeaderCell className="border border-black" size="medium">
						Cao Cấp
					</ColumnHeaderCell>
					<ColumnHeaderCell className="border border-black" size="medium">
						Thượng Hạng
					</ColumnHeaderCell>
				</TableRow>
			</TableHeader>

			<TableBody>
				<TableRow>
					<TableCell size="medium" className="text-left space-y-4">
						<span>Quyền Lợi 9: Vận Chuyển Khẩn Cấp</span>
						<CellDescription>
							Vận chuyển khẩn cấp Người được bảo hiểm tới cơ sở y tế gần nhất có khả năng cung cấp dịch vụ y tế thích
						</CellDescription>
					</TableCell>
					<TableCell>$50,000</TableCell>
					<TableCell>$70,000</TableCell>
					<TableCell>$100,000</TableCell>
				</TableRow>
				<TableRow>
					<TableCell size="medium" className="text-left space-y-4">
						<span>Quyền Lợi 10: Hồi Hương</span>
						<CellDescription>
							Chi phí đưa Người được bảo hiểm về Việt Nam hoặc Quê hương (bao gồm cả chi phí cho thiết bị y tế di động
							và nhân viên y tế đi kèm).
						</CellDescription>
					</TableCell>
					<TableCell>$50,000</TableCell>
					<TableCell>$70,000</TableCell>
					<TableCell>$100,000</TableCell>
				</TableRow>
				<TableRow>
					<TableCell size="medium" className="text-left space-y-4">
						<span>Quyền Lợi 11: Vận Chuyển Hài Cốt/Mai Táng</span>
						<CellDescription>
							Vận chuyển hài cốt của Người được bảo hiểm về Việt Nam hoặc Quê hương hoặc mai táng ngay tại địa phương.
						</CellDescription>
					</TableCell>
					<TableCell>$50,000</TableCell>
					<TableCell>$70,000</TableCell>
					<TableCell>$100,000</TableCell>
				</TableRow>
				<TableRow>
					<TableCell size="medium" className="text-left space-y-4">
						<span>Quyền Lợi 12: Bảo Lãnh Thanh Toán Viện Phí</span>
						<CellDescription>
							Bảo lãnh thanh toán viện phí trực tiếp cho bệnh viện trong trường hợp nhập viện.
						</CellDescription>
					</TableCell>
					<TableCell>Bao gồm</TableCell>
					<TableCell>Bao gồm</TableCell>
					<TableCell>Bao gồm</TableCell>
				</TableRow>
			</TableBody>

			<TableHeader>
				<TableRow>
					<ColumnHeaderCell rowSpan={2} className="border border-black" size="large">
						MỤC D: HỖ TRỢ DU LỊCH
					</ColumnHeaderCell>
					<ColumnHeaderCell colSpan={3} className="border border-black" size="large">
						Cá Nhân
					</ColumnHeaderCell>
				</TableRow>

				<TableRow>
					<ColumnHeaderCell className="border border-black" size="medium">
						Phổ Thông
					</ColumnHeaderCell>
					<ColumnHeaderCell className="border border-black" size="medium">
						Cao Cấp
					</ColumnHeaderCell>
					<ColumnHeaderCell className="border border-black" size="medium">
						Thượng Hạng
					</ColumnHeaderCell>
				</TableRow>
			</TableHeader>

			<TableBody>
				<TableRow>
					<TableCell size="medium" className="text-left space-y-4">
						<span>Quyền Lợi 13: Thiệt Hại Hành Lý Và Tư Trang</span>
						<CellDescription>
							Mất mát hay hỏng hành lý và tư trang do bị tai nạn, cướp, trộm cắp hay do vận chuyển nhầm. Giới hạn cho
							một hạng mục là 250USD.
						</CellDescription>
					</TableCell>
					<TableCell>$1,000</TableCell>
					<TableCell>$1,500</TableCell>
					<TableCell>$2,500</TableCell>
				</TableRow>
				<TableRow>
					<TableCell size="medium" className="text-left space-y-4">
						<span>Quyền Lợi 14: Hỗ Trợ Du Lịch</span>
						<CellDescription>
							<ul>
								<li>a. Thông tin trước chuyến đi</li>
								<li>b. Thông tin về đại sứ quán</li>
								<li>c. Những vấn đề dịch thuật</li>
								<li>d. Những vấn đề về pháp luật</li>
								<li>e. Thông tin về người cung cấp dịch vụ y tế</li>
							</ul>
						</CellDescription>
					</TableCell>
					<TableCell>Bao gồm</TableCell>
					<TableCell>Bao gồm</TableCell>
					<TableCell>Bao gồm</TableCell>
				</TableRow>
				<TableRow>
					<TableCell size="medium" className="text-left space-y-4">
						<span>Quyền Lợi 15: Hành Lý Bị Trì Hoãn</span>
						<CellDescription>
							Thanh toán chi phí mua các vật dụng thiết yếu cho vệ sinh cá nhân thiết và quần áo vì lý do hành lý bị trì
							hoãn.
						</CellDescription>
					</TableCell>
					<TableCell>$400</TableCell>
					<TableCell>$550</TableCell>
					<TableCell>$800</TableCell>
				</TableRow>
				<TableRow>
					<TableCell size="medium" className="text-left space-y-4">
						<span>Quyền Lợi 16: Mất Giấy Tờ Thông Hành</span>
						<CellDescription>
							Chi phí xin cấp lại hộ chiếu, visa đã bị mất cùng chi phí đi lại và ăn ở phát sinh do việc xin cấp lại các
							giấy tờ đó. Giới hạn bồi thường tối đa một ngày là 10% của mức giới hạn cho của quyền lợi này.
						</CellDescription>
					</TableCell>
					<TableCell>$1,500</TableCell>
					<TableCell>$2,000</TableCell>
					<TableCell>$3,000</TableCell>
				</TableRow>
				<TableRow>
					<TableCell size="medium" className="text-left space-y-4">
						<span>Quyền Lợi 17: Cắt Ngắn Hay Hủy Bỏ Chuyến Đi</span>
						<CellDescription>
							Tiền đặt cọc không được hoàn lại cho chuyến đi và chi phí đi lại tăng lên vì cắt ngắn hay hủy chuyến do
							Người được bảo hiểm bị chết, ốm đau thương tật nghiêm trọng, phải ra làm chứng hay thu tòa hoặc được cách
							ly để kiểm dịch.
						</CellDescription>
					</TableCell>
					<TableCell>$4,500</TableCell>
					<TableCell>$6,000</TableCell>
					<TableCell>$9,500</TableCell>
				</TableRow>
				<TableRow>
					<TableCell size="medium" className="text-left space-y-4">
						<span>Quyền Lợi 18: Lỡ Nối Chuyến</span>
						<CellDescription>Thanh toán 100 USD cho mỗi 6 tiếng liên tục bị lỡ nối chuyến.</CellDescription>
					</TableCell>
					<TableCell>$200</TableCell>
					<TableCell>$200</TableCell>
					<TableCell>$200</TableCell>
				</TableRow>
				<TableRow>
					<TableCell size="medium" className="text-left space-y-4">
						<span>Quyền Lợi 19: Trách Nhiệm Cá Nhân</span>
						<CellDescription>
							Bảo hiểm trách nhiệm pháp lý của Người Được Bảo Hiểm đối với thiệt hại thân thể hay tài sản của bên thứ ba
							gây ra do lỗi bất cẩn của Người Được Bảo Hiểm. (quyền lợi bảo hiểm này không áp dụng cho việc sử dụng hay
							thuê xe có động cơ)
						</CellDescription>
					</TableCell>
					<TableCell>$50,000</TableCell>
					<TableCell>$70,000</TableCell>
					<TableCell>$100,000</TableCell>
				</TableRow>
				<TableRow>
					<TableCell size="medium" className="text-left space-y-4">
						<span>Quyền Lợi 20: Bắt Cóc Và Con Tin</span>
						<CellDescription>
							Thanh toán 150 USD cho mỗi 24 tiếng Người được bảo hiểm bị bắt cóc làm con tin xảy ra trong Chuyến đi nước
							ngoài.
						</CellDescription>
					</TableCell>
					<TableCell>$2,000</TableCell>
					<TableCell>$3,000</TableCell>
					<TableCell>$5,000</TableCell>
				</TableRow>
				<TableRow>
					<TableCell size="medium" className="text-left space-y-4">
						<span>Quyền Lợi 21: Hỗ Trợ Tổn Thất Tư Gia Vì Hỏa Hoạn</span>
						<CellDescription>
							Thanh toán cho các tổn thất hoặc thiệt hại đối với tài sản trong gia đình gây ra bởi hỏa hoạn xảy ra trong
							thời hạn bảo hiểm.
						</CellDescription>
					</TableCell>
					<TableCell>$1,000</TableCell>
					<TableCell>$3,000</TableCell>
					<TableCell>$5,000</TableCell>
				</TableRow>
				<TableRow>
					<TableCell size="medium" className="text-left space-y-4">
						<span>Quyền Lợi 22: Bảo Hiểm Trong Trường Hợp Bị Khủng Bố</span>
						<CellDescription>
							Toàn bộ các quyền lợi từ 1 - 20 của chương trình bảo hiểm đều được áp dụng khi chúng xảy ra bởi các hành
							động khủng bố khi người được bảo hiểm ở nước ngoài.
						</CellDescription>
					</TableCell>
					<TableCell>Bao gồm</TableCell>
					<TableCell>Bao gồm</TableCell>
					<TableCell>Bao gồm</TableCell>
				</TableRow>
			</TableBody>
		</TableRoot>
	);
}

function TableRoot({
	children,
	className,
	...props
}: { children: React.ReactNode; className?: string } & React.HTMLAttributes<HTMLTableElement>) {
	return (
		<table className={cn("min-w-full", className)} {...props}>
			{children}
		</table>
	);
}

function TableHeader({
	children,
	className,
	...props
}: { children: React.ReactNode; className?: string } & React.HTMLAttributes<HTMLTableSectionElement>) {
	return (
		<thead className={cn("bg-white", className)} {...props}>
			{children}
		</thead>
	);
}

function TableBody({
	children,
	className,
	...props
}: { children: React.ReactNode; className?: string } & React.HTMLAttributes<HTMLTableSectionElement>) {
	return (
		<tbody className={cn("bg-white", className)} {...props}>
			{children}
		</tbody>
	);
}

function TableRow({
	children,
	className,
	...props
}: { children: React.ReactNode; className?: string } & React.HTMLAttributes<HTMLTableRowElement>) {
	return (
		<tr className={cn(className)} {...props}>
			{children}
		</tr>
	);
}

function TableCell({
	children,
	className,
	size = "large",
	...props
}: {
	children?: React.ReactNode;
	className?: string;
	size?: "medium" | "large";
} & React.HTMLAttributes<HTMLTableCellElement>) {
	return (
		<td
			className={cn(
				"px-4 py-8 text-black text-center border border-black text-[25px] font-medium",
				size === "medium" && "text-[25px] font-semibold",
				className,
			)}
			{...props}
		>
			{children}
		</td>
	);
}

function ColumnHeaderCell({
	children,
	className,
	rowSpan,
	colSpan,
	size = "medium",
	...props
}: {
	children?: React.ReactNode;
	className?: string;
	rowSpan?: number;
	colSpan?: number;
	size?: "medium" | "large";
} & React.HTMLAttributes<HTMLTableCellElement>) {
	return (
		<th
			scope="col"
			className={cn(
				"px-4 py-8 text-center text-black",
				size === "medium" && "text-[25px] font-semibold",
				size === "large" && "text-[25px] font-bold uppercase",
				className,
			)}
			rowSpan={rowSpan}
			colSpan={colSpan}
			{...props}
		>
			{children}
		</th>
	);
}

function CellDescription({
	children,
	className,
	...props
}: { children: React.ReactNode; className?: string } & React.HTMLAttributes<HTMLTableCellElement>) {
	return (
		<div className={cn("text-black text-[23px] font-medium", className)} {...props}>
			{children}
		</div>
	);
}
