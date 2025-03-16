"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { ConditionalRenderer } from "@/components/utils";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import * as React from "react";
import type { Control, FieldValues, Path } from "react-hook-form";
import { FiChevronDown } from "react-icons/fi";

interface DropdownOption {
	value: string;
	label: string;
	disabled?: boolean;
}

interface FormDropdownCheckboxFieldProps<T extends FieldValues> {
	control: Control<T>;
	name: Path<T>;
	label?: string;
	description?: string;
	options: DropdownOption[];
	placeholder?: string;
}

export function FormDropdownCheckboxField<T extends FieldValues>({
	control,
	name,
	label,
	description,
	options,
	placeholder = "Chọn thông tin cần liên hệ",
}: FormDropdownCheckboxFieldProps<T>) {
	const [open, setOpen] = React.useState(false);

	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => {
				const values = Array.isArray(field.value) ? field.value : ([] as string[]);

				return (
					<FormItem className="flex flex-col text-base font-medium">
						<FormLabel>{label}</FormLabel>
						<FormControl>
							<DropdownMenu open={open} onOpenChange={(isOpen) => setOpen(isOpen)}>
								<DropdownMenuTrigger asChild>
									<button
										type="button"
										className={cn(
											"border border-black rounded-md shadow-elevation",
											"flex items-center justify-between w-full h-12 px-3 py-2",
											"focus-visible:outline-none focus-visible:border-transparent focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
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
									className="w-full border border-black rounded-md shadow-elevation"
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
															field.onChange(values.filter((value) => value !== option.value));
														} else {
															field.onChange([...values, option.value]);
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
						</FormControl>
						<FormMessage />
					</FormItem>
				);
			}}
		/>
	);
}
