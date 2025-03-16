import { Selection } from "@/components/me/selection";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { AGE_OPTIONS, BENEFIT_OPTIONS, FEE_OPTIONS, INSURANCE_GROUP_OPTIONS, useSearch } from "./useSearch";

export default function FilterOptions() {
	const search = useSearch();
	const [activeFilter, setActiveFilter] = useState<"age" | "fee" | "benefit" | null>(null);

	const getSelectedAgeLabel = () => {
		if (!search.searchState.age) return "Độ Tuổi";
		const selected = AGE_OPTIONS.find((opt) => opt.id === search.searchState.age?.[0]);
		return selected ? selected.label : "Độ Tuổi";
	};

	const getSelectedFeeLabel = () => {
		if (!search.searchState.premium) return "Phí Bảo Hiểm";
		const selected = FEE_OPTIONS.find((opt) => opt.id === search.searchState.premium?.[0]);
		return selected ? selected.label : "Phí Bảo Hiểm";
	};

	const getSelectedBenefitLabel = () => {
		if (!search.searchState.benefit) return "Quyền lợi bảo hiểm";
		const selected = BENEFIT_OPTIONS.find((opt) => opt.id === search.searchState.benefit?.[0]);
		return selected ? selected.label : "Quyền lợi bảo hiểm";
	};

	return (
		<div className="relative">
			<div className="flex items-center bg-white border border-black rounded-full">
				<div className="basis-1/3 flex items-center">
					<TriggerButton
						title={`${getSelectedAgeLabel()}`}
						filter="age"
						currentFilter={activeFilter}
						onClick={() => setActiveFilter("age")}
					/>
				</div>

				<div className="w-px h-16 bg-black" />

				<div className="basis-1/3 flex items-center">
					<TriggerButton
						title={`${getSelectedFeeLabel()}`}
						filter="fee"
						currentFilter={activeFilter}
						onClick={() => setActiveFilter("fee")}
					/>
				</div>

				<div className="w-px h-16 bg-black" />

				<div className="basis-1/3 flex items-center">
					<TriggerButton
						title={`${getSelectedBenefitLabel()}`}
						filter="benefit"
						currentFilter={activeFilter}
						onClick={() => setActiveFilter("benefit")}
					/>
				</div>
			</div>

			<Dialog open={activeFilter === "age"} onOpenChange={(open: boolean) => setActiveFilter(open ? "age" : null)}>
				<VisuallyHidden>
					<DialogTitle>Độ Tuổi</DialogTitle>
				</VisuallyHidden>
				<DialogContent className={"p-0 border-none m-0 shadow-elevation"}>
					<VisuallyHidden>
						<DialogDescription>Độ Tuổi</DialogDescription>
					</VisuallyHidden>

					<Selection
						value={search.searchState.age || []}
						options={AGE_OPTIONS}
						onChange={(selectedIds) => search.updateSearch("age", selectedIds)}
						onFinish={() => setActiveFilter(null)}
					/>
				</DialogContent>
			</Dialog>

			<Dialog open={activeFilter === "fee"} onOpenChange={(open: boolean) => setActiveFilter(open ? "fee" : null)}>
				<VisuallyHidden>
					<DialogTitle>Phí Bảo Hiểm</DialogTitle>
				</VisuallyHidden>
				<DialogContent className={"p-0 border-none m-0 shadow-elevation"}>
					<VisuallyHidden>
						<DialogDescription>Phí Bảo Hiểm</DialogDescription>
					</VisuallyHidden>

					<Selection
						value={search.searchState.premium || []}
						options={FEE_OPTIONS}
						onChange={(selectedIds) => search.updateSearch("premium", selectedIds)}
						onFinish={() => setActiveFilter(null)}
					/>
				</DialogContent>
			</Dialog>

			<Dialog
				open={activeFilter === "benefit"}
				onOpenChange={(open: boolean) => setActiveFilter(open ? "benefit" : null)}
			>
				<VisuallyHidden>
					<DialogTitle>Quyền lợi bảo hiểm</DialogTitle>
				</VisuallyHidden>
				<DialogContent className={"p-0 border-none m-0 max-w-screen-sm shadow-elevation"}>
					<VisuallyHidden>
						<DialogDescription>Quyền lợi bảo hiểm</DialogDescription>
					</VisuallyHidden>

					<Selection
						value={search.searchState.benefit || []}
						options={BENEFIT_OPTIONS}
						onChange={(selectedIds) => search.updateSearch("benefit", selectedIds)}
						onFinish={() => setActiveFilter(null)}
					/>
				</DialogContent>
			</Dialog>
		</div>
	);
}

function TriggerButton({
	onClick,
	title,
	currentFilter,
	filter,
}: {
	onClick: () => void;
	title: string;
	currentFilter: "age" | "fee" | "benefit" | null;
	filter: string;
}) {
	return (
		<button
			type="button"
			className="flex items-center w-full px-6 cursor-pointer content-between justify-between"
			onClick={onClick}
		>
			<span className=" font-semibold text-2xl text-black">{title}</span>
			<FiChevronDown
				className={`w-8 h-8 flex-shrink-0 text-black stroke-2 transition-transform ${currentFilter === filter ? "rotate-180" : ""}`}
			/>
		</button>
	);
}
