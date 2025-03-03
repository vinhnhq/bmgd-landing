import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { FieldValues, Path, UseFormReturn } from "react-hook-form";
import { FaAsterisk } from "react-icons/fa";
import { cn } from "@/lib/utils";

export interface SelectOption {
	label: string;
	value: string;
}

export interface FormSelectProps<T extends FieldValues> {
	form: UseFormReturn<T>;
	name: Path<T>;
	label: string;
	placeholder: string;
	options: SelectOption[];
	required?: boolean;
	labelColor?: "black" | "red";
	errorColor?: "black" | "red";
	disabled?: boolean;
	layout?: "vertical" | "horizontal";
	className?: string;
	containerClassName?: string;
	labelClassName?: string;
}

export const FormSelect = <T extends FieldValues>({
	form,
	name,
	label,
	placeholder,
	options,
	required = false,
	labelColor = "black",
	errorColor = "red",
	disabled = false,
	layout = "vertical",
	className,
	containerClassName,
	labelClassName,
}: FormSelectProps<T>) => {
	return (
		<FormField
			control={form.control}
			name={name}
			disabled={disabled}
			render={({ field }) => (
				<FormItem className={cn(layout === "vertical" ? "" : "flex flex-col", containerClassName)}>
					<div className={cn("flex", layout === "horizontal" ? "items-center gap-4" : "flex-col gap-2")}>
						<FormLabel
							className={cn(
								"font-semibold flex items-start gap-[6px]",
								layout === "horizontal" && "min-w-44 mb-0",
								{
									"text-black": labelColor === "black",
									"text-red-500": labelColor === "red",
								},
								labelClassName,
							)}
						>
							<span>{label}</span>
							{required && (
								<>
									<span className="text-[#FF0127] text-[8px]" aria-hidden="true">
										<FaAsterisk />
									</span>
									<span className="sr-only">(bắt buộc)</span>
								</>
							)}
						</FormLabel>
						<div className="flex-1">
							<Select onValueChange={field.onChange} defaultValue={field.value} disabled={disabled}>
								<FormControl>
									<SelectTrigger
										className={cn(
											"w-full h-12 px-4 text-base bg-white border border-black rounded-md",
											"font-medium placeholder:text-black/60 placeholder:text-base",
											"shadow-elevation outline-none hover:bg-white",
											"focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200",
											disabled && "bg-gray-100 cursor-not-allowed",
											className,
										)}
									>
										<SelectValue placeholder={placeholder} />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									{options.map((option) => (
										<SelectItem key={option.value} value={option.value} className="font-medium">
											{option.label}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</div>
					</div>
					<div className={cn("mt-1", layout === "horizontal" && "ml-[calc(176px+1rem)]")}>
						<FormMessage
							className={cn({
								"text-black": errorColor === "black",
								"text-red-500": errorColor === "red",
							})}
							role="alert"
						/>
					</div>
				</FormItem>
			)}
		/>
	);
};
