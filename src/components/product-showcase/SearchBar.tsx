import { Selection } from "@/components/me/selection";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { ConditionalRenderer, FilterChip, Title } from "@/components/utils";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useState } from "react";
import { FiChevronDown, FiRotateCw, FiSearch } from "react-icons/fi";
import { INSURANCE_GROUP_OPTIONS, useSearch } from "./useSearch";

interface SearchBarProps {
	isExpanded: boolean;
	onToggleExpand: () => void;
}

const SearchBar = ({ isExpanded, onToggleExpand }: SearchBarProps) => {
	const search = useSearch();
	const [showGroupDialog, setShowGroupDialog] = useState(false);

	const handleGroupSelection = (selectedIds: string[]) => {
		search.updateSearch("type", selectedIds);
	};

	const getSelectedGroupLabel = () => {
		if (!search.searchState.type) return "Nhóm Nghiệp Vụ BH";
		const selected = INSURANCE_GROUP_OPTIONS.find((opt) => opt.id === search.searchState.type?.[0]);
		return selected ? selected.label : "Nhóm Nghiệp Vụ BH";
	};

	const getSelectedGroupCount = () => {
		if (!search.searchState.type) return 0;
		return search.searchState.type?.length || 0;
	};

	const handleReset = () => {
		search.resetSearch();
	};

	return (
		<div className="w-full">
			{/* Main container with flex layout */}
			<div className="flex">
				{/* Section 1: Group Selection Dropdown (4/12) */}
				<div className="basis-4/12 flex bg-white border border-black rounded-full rounded-r-none border-r-transparent">
					<button
						type="button"
						onClick={() => setShowGroupDialog(true)}
						className="flex items-center justify-between w-full px-6 cursor-pointer"
					>
						<ConditionalRenderer
							condition={!search.searchState.type}
							component={<Title>{getSelectedGroupLabel()}</Title>}
							fallback={
								<ConditionalRenderer
									condition={Array.isArray(search.searchState.type) && search.searchState.type.length > 1}
									component={
										<Title className="flex items-center gap-1">
											<FilterChip label={getSelectedGroupLabel()} count={getSelectedGroupCount()} />
											<FilterChip label={`+${getSelectedGroupCount() - 1}`} count={getSelectedGroupCount()} />
										</Title>
									}
									fallback={<FilterChip label={getSelectedGroupLabel()} count={getSelectedGroupCount()} />}
								/>
							}
						/>
						<FiChevronDown className={`w-8 h-8 stroke-2 transition-transform ${showGroupDialog ? "rotate-180" : ""}`} />
					</button>
				</div>

				{/* Vertical divider between sections 1 and 2 */}
				<div className="w-px h-16 bg-black" />

				{/* Section 2: Search Input Field (5/12) */}
				<div className="basis-5/12 flex bg-white border border-black border-l-transparent rounded-r-full">
					<div className="flex items-center w-full px-6">
						<input
							type="text"
							value={search.searchState.keyword || ""}
							onChange={(e) => search.updateSearch("keyword", e.target.value)}
							placeholder="Nhập Sản Phẩm Cần Tìm"
							className="w-full text-2xl font-semibold placeholder-black border-none outline-none"
						/>
						<FiSearch className="w-10 h-full stroke-2" />
					</div>
				</div>

				{/* Section 3: Filter Toggle and Reset Buttons (3/12) */}
				<div className="basis-3/12 flex">
					<div className="relative flex items-center justify-center flex-1 ml-4">
						{/* Filter toggle button */}
						<button
							type="button"
							onClick={onToggleExpand}
							className="flex items-center justify-center w-full h-16 bg-[#F24444] rounded-full shadow-elevation"
						>
							<span className="px-4 text-2xl font-bold text-white">
								{isExpanded ? "Ẩn Lọc Chi Tiết" : "Hiện Lọc Chi Tiết"}
							</span>
						</button>

						{/* Reset button - Absolutely positioned relative to its container */}
						<button
							type="button"
							className="absolute -right-16 flex items-center justify-center w-16"
							aria-label="Làm mới"
							onClick={handleReset}
						>
							<FiRotateCw className="w-8 h-8 stroke-2 text-[#F24444]" />
						</button>
					</div>
				</div>
			</div>

			{/* Dialog for Insurance Group Selection */}
			<Dialog open={showGroupDialog} onOpenChange={setShowGroupDialog}>
				<VisuallyHidden>
					<DialogTitle>Nhóm Nghiệp Vụ Bảo Hiểm</DialogTitle>
				</VisuallyHidden>
				<DialogContent className="p-0 border-none m-0 shadow-elevation">
					<VisuallyHidden>
						<DialogDescription>Nhóm Nghiệp Vụ Bảo Hiểm</DialogDescription>
					</VisuallyHidden>

					<Selection
						options={INSURANCE_GROUP_OPTIONS}
						value={search.searchState.type || []}
						onChange={handleGroupSelection}
						onFinish={() => setShowGroupDialog(false)}
					/>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default SearchBar;
