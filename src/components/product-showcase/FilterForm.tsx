import { Selection } from "@/components/me/selection";
import type { FC } from "react";

const FILTER_OPTIONS = [
	{
		id: "1",
		label: "Điều Trị Ngoại Trú",
	},
	{
		id: "2",
		label: "Mất/Giảm Thu Nhập Trong Thời Gian Điều Trị",
	},
	{
		id: "3",
		label: "Nằm Viện Tại Bệnh Viện Tây Y",
	},
	{
		id: "4",
		label: "Phẫu Thuật Do Ốm Đau, Bệnh Tật",
	},
	{
		id: "5",
		label: "Thương Tật Thân Thể Tạm Thời Do Tai Nạn",
	},
	{
		id: "6",
		label: "Thương Tật Thân Thể Vĩnh Viễn Do Tai Nạn",
	},
	{
		id: "7",
		label: "Trường Hợp Tử Vong",
	},
];

interface FilterFormProps {
	onFilterChange?: (selectedIds: string[]) => void;
	className?: string;
}

const FilterForm: FC<FilterFormProps> = ({ onFilterChange, className }) => {
	const handleChange = (selectedIds: string[]) => {
		onFilterChange?.(selectedIds);
	};

	return <Selection options={FILTER_OPTIONS} onChange={handleChange} className={className} />;
};

export default FilterForm;
