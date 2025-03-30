"use client";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ConditionalRenderer } from "@/components/utils";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import * as React from "react";
import { FiChevronDown } from "react-icons/fi";

interface DropdownOption<T extends string> {
	value: T;
	label: string;
	disabled?: boolean;
}

export interface DropdownCheckboxMenuProps<T extends string> {
	values: T[];
	onChange: (values: T[]) => void;
	options: DropdownOption<T>[];
	placeholder?: string;
	className?: string;
	triggerClassName?: string;
	contentClassName?: string;
	disabled?: boolean;
	shouldClose?: boolean;
}

export function DropdownCheckboxMenu<T extends string>({
	values,
	onChange,
	options,
	placeholder = "Select options",
	className,
	triggerClassName,
	contentClassName,
	disabled = false,
	shouldClose = false,
}: DropdownCheckboxMenuProps<T>) {
	const [open, setOpen] = React.useState(false);

	return (
		<div className={className}>
			<DropdownMenu open={open} onOpenChange={(isOpen) => setOpen(isOpen)}>
				<DropdownMenuTrigger asChild disabled={disabled}>
					<button
						type="button"
						className={cn(
							"text-base font-medium bg-white",
							"border border-black rounded-md shadow-elevation",
							"flex items-center justify-between w-full h-12 px-3 py-2",
							"focus-visible:outline-none focus-visible:border-transparent focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
							triggerClassName,
							disabled && "cursor-not-allowed",
						)}
					>
						<ConditionalRenderer
							condition={values.length > 0}
							component={
								values.length === 1
									? options.find((opt) => opt.value === values[0])?.label || placeholder
									: `${values.length} lựa chọn`
							}
							fallback={<span className="text-black/60">{placeholder}</span>}
						/>

						<FiChevronDown className="!w-6 !h-6 shrink-0" />
					</button>
				</DropdownMenuTrigger>

				<DropdownMenuContent
					className={cn("w-full border border-black rounded-md shadow-elevation", contentClassName)}
					align="start"
					alignOffset={0}
					sideOffset={4}
					style={{ width: "var(--radix-dropdown-menu-trigger-width)" }}
				>
					<div className="overflow-y-auto p-1">
						{options.map((option) => {
							const isSelected = values.includes(option.value);

							return (
								<DropdownMenuItem
									key={option.value}
									className={cn(
										"focus:bg-primary/10 text-base font-medium",
										"relative flex items-center gap-4 h-12 cursor-pointer rounded",
										option.disabled && "opacity-50 cursor-not-allowed",
									)}
									onClick={(e) => {
										e.preventDefault();

										if (option.disabled) {
											return;
										}

										if (isSelected) {
											onChange(values.filter((value) => value !== option.value));
										} else {
											onChange([...values, option.value]);
										}

										if (shouldClose) {
											setOpen(false);
										}
									}}
								>
									<div className={cn("flex-shrink-0 w-5 h-5 border-2 border-primary")}>
										<ConditionalRenderer
											condition={isSelected}
											component={<Check className="h-4 w-4 text-primary" />}
											fallback={null}
										/>
									</div>
									<span>{option.label}</span>
								</DropdownMenuItem>
							);
						})}
					</div>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}
