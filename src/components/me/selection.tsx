import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { ScrollArea, ScrollBar } from "@/components/me/scroll-area";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { useState } from "react";

// Types
interface Option {
	id: string;
	label: string;
}

interface SelectionProps {
	options: Option[];
	onChange?: (selectedIds: string[]) => void;
	className?: string;
}

interface SectionHeaderProps {
	title: string;
	buttonText: string;
	onButtonClick: () => void;
	variant?: "primary" | "secondary";
}

interface SearchBarProps {
	value: string;
	onChange: (value: string) => void;
}

interface OptionListProps {
	options: Option[];
	selectedIds: string[];
	onToggle: (id: string) => void;
}

interface ActionButtonsProps {
	onCancel: () => void;
	onApply: () => void;
}

// Components
function SearchBar({ value, onChange }: SearchBarProps) {
	return (
		<div className="h-[4.5rem] px-6 flex items-center">
			<div className="relative flex-1">
				<Input
					placeholder="Tìm kiếm"
					value={value}
					onChange={(e) => onChange(e.target.value)}
					className="border-none text-2xl md:text-2xl font-semibold placeholder:text-black bg-transparent"
				/>
				<Search className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 pr-2" />
			</div>
		</div>
	);
}

function SectionHeader({ title, buttonText, onButtonClick, variant = "secondary" }: SectionHeaderProps) {
	const isPrimary = variant === "primary";

	return (
		<div
			className={cn("h-[4.5rem] px-6 flex items-center justify-between", isPrimary ? "bg-[#F24444] shadow-md" : "mb-4")}
		>
			<span className={cn("font-semibold", isPrimary ? "text-2xl font-extrabold text-white" : "text-xl text-black")}>
				{title}
			</span>
			<Button
				variant="link"
				onClick={onButtonClick}
				className={cn(
					"font-medium",
					isPrimary
						? "text-2xl font-bold text-white hover:bg-white/20"
						: "text-lg text-[#F24444] hover:bg-[#F24444]/10",
				)}
			>
				{buttonText}
			</Button>
		</div>
	);
}

function OptionList({ options, selectedIds, onToggle }: OptionListProps) {
	return (
		<div className="space-y-4 pr-[10px]">
			{options.map((option) => (
				<div key={option.id} className="flex items-center gap-4 cursor-pointer">
					<Checkbox
						id={`option-${option.id}`}
						checked={selectedIds.includes(option.id)}
						onCheckedChange={() => onToggle(option.id)}
						className="w-5 h-5 border-2 border-black rounded-none data-[state=checked]:bg-[#F24444] data-[state=checked]:text-white data-[state=checked]:border-[#F24444] focus-visible:ring-1 focus-visible:ring-[#F24444] focus-visible:ring-offset-2"
					/>
					<label
						htmlFor={`option-${option.id}`}
						className="text-2xl font-medium leading-8 text-black capitalize cursor-pointer"
					>
						{option.label}
					</label>
				</div>
			))}
		</div>
	);
}

function ActionButtons({ onCancel, onApply }: ActionButtonsProps) {
	return (
		<div className="h-24 px-6 flex items-center justify-end gap-4">
			<Button
				variant="outline"
				onClick={onCancel}
				className="h-12 w-28 text-xl font-bold capitalize border-black shadow-md rounded-2xl"
			>
				Huỷ
			</Button>
			<Button
				onClick={onApply}
				className="h-12 w-40 text-xl font-bold text-white capitalize bg-[#F24444] border-[#F24444] shadow-md rounded-2xl hover:bg-[#F24444]/90"
			>
				Áp Dụng
			</Button>
		</div>
	);
}

// Main Component
export function Selection({ options, onChange, className }: SelectionProps) {
	const [search, setSearch] = useState("");
	const [selectedIds, setSelectedIds] = useState<string[]>([]);

	// Filter options based on search
	const filteredOptions = options.filter((option) => option.label.toLowerCase().includes(search.toLowerCase()));

	// Separate selected and unselected options
	const selectedOptions = options.filter((opt) => selectedIds.includes(opt.id));
	const unselectedOptions = filteredOptions.filter((opt) => !selectedIds.includes(opt.id));

	const handleToggle = (id: string) => {
		const newSelectedIds = selectedIds.includes(id)
			? selectedIds.filter((selectedId) => selectedId !== id)
			: [...selectedIds, id];

		setSelectedIds(newSelectedIds);
		onChange?.(newSelectedIds);
	};

	const handleClearAll = () => {
		setSelectedIds([]);
		onChange?.([]);
	};

	const handleApply = () => {
		onChange?.(selectedIds);
	};

	const handleCancel = () => {
		setSelectedIds([]);
		onChange?.([]);
	};

	return (
		<div className={cn("w-full min-w-fit bg-white rounded-xl flex flex-col", className)}>
			<SearchBar value={search} onChange={setSearch} />

			{selectedOptions.length > 0 && (
				<div>
					<SectionHeader title="Đã chọn" buttonText="Bỏ chọn" onButtonClick={handleClearAll} variant="primary" />
					<div className="px-6 py-4 border-b border-black pr-0">
						<ScrollArea className="h-[12rem] my-4">
							<OptionList options={selectedOptions} selectedIds={selectedIds} onToggle={handleToggle} />
							<ScrollBar />
						</ScrollArea>
					</div>
				</div>
			)}

			{unselectedOptions.length > 0 && (
				<div>
					<SectionHeader
						title="Danh sách lựa chọn"
						buttonText="Chọn hết"
						onButtonClick={() => setSelectedIds(options.map((opt) => opt.id))}
						variant="primary"
					/>

					<div className="px-6 flex-1 pr-0">
						<ScrollArea className="h-[16rem] my-4">
							<OptionList options={unselectedOptions} selectedIds={selectedIds} onToggle={handleToggle} />
							<ScrollBar />
						</ScrollArea>
					</div>
				</div>
			)}

			<ActionButtons onCancel={handleCancel} onApply={handleApply} />
		</div>
	);
}
