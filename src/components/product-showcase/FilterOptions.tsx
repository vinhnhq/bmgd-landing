import { Selection } from "@/components/me/selection";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

// Mock data for each filter
const AGE_OPTIONS = [
	{ id: "1", label: "Dưới 12 Tháng Tuổi" },
	{ id: "2", label: "Từ 12 Tháng - Dưới 06 Tuổi" },
	{ id: "3", label: "Từ 06 Tuổi - Dưới 18 Tuổi" },
	{ id: "4", label: "Từ 18 Đến 50 Tuổi" },
	{ id: "5", label: "Từ 50 Đến 65 Tuổi" },
	{ id: "6", label: "Trên 65 Tuổi" },
];

const FEE_OPTIONS = [
	{ id: "1", label: "Dưới 1 Triệu Đồng" },
	{ id: "2", label: "Từ 1 - 3 Triệu Đồng" },
	{ id: "3", label: "Từ 3 - 5 Triệu Đồng" },
	{ id: "4", label: "Từ 5 - 7 Triệu Đồng" },
	{ id: "5", label: "Từ 7 - 9 Triệu Đồng" },
	{ id: "6", label: "Trên 9 Triệu Đồng" },
];

const BENEFIT_OPTIONS = [
	{ id: "1", label: "Điều Trị Ngoại Trú" },
	{ id: "2", label: "Mất/ Giảm Thu Nhập Trong Thời Gian Điều Trị" },
	{ id: "3", label: "Nằm Viện Tại Bệnh Viện Tây Y" },
	{ id: "4", label: "Phẫu Thuật Do Ốm Đau, Bệnh Tật" },
	{ id: "5", label: "Thương Tật Thân Thể Tạm Thời Do Tai Nạn" },
	{ id: "6", label: "Thương Tật Thân Thể Vĩnh Viễn Do Tai Nạn" },
	{ id: "7", label: "Trường Hợp Tử Vong" },
];

const FilterOptions = () => {
	const [activeFilter, setActiveFilter] = useState<"age" | "fee" | "benefit" | null>(null);

	const handleFilterClick = (filter: "age" | "fee" | "benefit") => {
		setActiveFilter(filter === activeFilter ? null : filter);
	};

	const getOptionsForFilter = () => {
		switch (activeFilter) {
			case "age":
				return AGE_OPTIONS;
			case "fee":
				return FEE_OPTIONS;
			case "benefit":
				return BENEFIT_OPTIONS;
			default:
				return [];
		}
	};

	const getFilterTitle = () => {
		switch (activeFilter) {
			case "age":
				return "Độ Tuổi";
			case "fee":
				return "Phí Bảo Hiểm";
			case "benefit":
				return "Quyền lợi bảo hiểm";
			default:
				return "";
		}
	};

	return (
		<div className="relative">
			{/* Main filter bar */}
			<div className="flex items-center bg-white border border-black rounded-full">
				{/* Age Range */}
				<div className="basis-1/3 flex items-center">
					<button
						type="button"
						className="flex items-center w-full px-6 cursor-pointer content-between justify-between"
						onClick={() => handleFilterClick("age")}
					>
						<span className=" font-semibold text-2xl text-black">Độ Tuổi</span>
						<FiChevronDown
							className={`w-8 h-8 text-black stroke-2 transition-transform ${activeFilter === "age" ? "rotate-180" : ""}`}
						/>
					</button>
				</div>

				{/* Divider */}
				<div className="w-px h-16 bg-black" />

				{/* Insurance Fee */}
				<div className="basis-1/3 flex items-center">
					<button
						type="button"
						className="flex items-center w-full px-6 cursor-pointer content-between justify-between"
						onClick={() => handleFilterClick("fee")}
					>
						<span className=" font-semibold text-2xl text-black">Phí Bảo Hiểm</span>
						<FiChevronDown
							className={`w-8 h-8 text-black stroke-2 transition-transform ${activeFilter === "fee" ? "rotate-180" : ""}`}
						/>
					</button>
				</div>

				{/* Divider */}
				<div className="w-px h-16 bg-black" />

				{/* Insurance Benefits */}
				<div className="basis-1/3 flex items-center">
					<button
						type="button"
						className="flex items-center w-full px-6 cursor-pointer content-between justify-between"
						onClick={() => handleFilterClick("benefit")}
					>
						<span className=" font-semibold text-2xl text-black">Quyền lợi bảo hiểm</span>
						<FiChevronDown
							className={`w-8 h-8 text-black stroke-2 transition-transform ${activeFilter === "benefit" ? "rotate-180" : ""}`}
						/>
					</button>
				</div>
			</div>

			{/* Dialog Modal */}
			<Dialog open={activeFilter !== null} onOpenChange={(open: boolean) => !open && setActiveFilter(null)}>
				<VisuallyHidden>
					<DialogTitle>{getFilterTitle()}</DialogTitle>
				</VisuallyHidden>
				<DialogContent className={`p-0 border-none m-0 ${activeFilter === "benefit" ? "max-w-screen-sm" : ""}`}>
					<Selection
						options={getOptionsForFilter()}
						onChange={(selectedIds) => {
							console.log(activeFilter, selectedIds);
						}}
					/>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default FilterOptions;
