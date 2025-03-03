import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import type { FieldValues, Path, UseFormReturn } from "react-hook-form";
import { FaAsterisk } from "react-icons/fa";
import { cn } from "@/lib/utils";

export interface FormInputProps<T extends FieldValues> {
	form: UseFormReturn<T>;
	name: Path<T>;
	label: string;
	placeholder: string;
	type?: string;
	required?: boolean;
	inputMode?: "text" | "numeric" | "tel" | "email";
	onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
	labelColor?: "black" | "red";
	errorColor?: "black" | "red";
	disabled?: boolean;
	readOnly?: boolean;
	layout?: "vertical" | "horizontal";
	className?: string;
	containerClassName?: string;
	labelClassName?: string;
}

export const FormInput = <T extends FieldValues>({
	form,
	name,
	label,
	placeholder,
	type = "text",
	required = false,
	inputMode,
	onKeyPress,
	labelColor = "black",
	errorColor = "red",
	disabled = false,
	readOnly = false,
	layout = "vertical",
	className,
	containerClassName,
	labelClassName,
}: FormInputProps<T>) => {
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
							<FormControl>
								<input
									{...field}
									placeholder={placeholder}
									type={type}
									inputMode={inputMode}
									onKeyPress={onKeyPress}
									readOnly={readOnly}
									className={cn(
										"w-full h-12 px-4 text-base bg-white border border-black rounded-md",
										"font-medium placeholder:text-black/60 placeholder:text-base",
										"shadow-elevation outline-none hover:bg-white",
										"focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200",
										readOnly && "bg-gray-100 cursor-not-allowed",
										className,
									)}
								/>
							</FormControl>
						</div>
					</div>
					<div className={cn("mt-1", layout === "horizontal" && "ml-[calc(176px+1rem)]")}>
						<FormMessage
							className={cn("font-semibold", {
								"text-black": errorColor === "black",
								"text-red-500": errorColor === "red",
							})}
						/>
					</div>
				</FormItem>
			)}
		/>
	);
};
