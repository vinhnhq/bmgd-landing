import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import type { FieldValues, Path, UseFormReturn } from "react-hook-form";
import { FaAsterisk } from "react-icons/fa";
import { cn } from "@/lib/utils";

export interface FormTextAreaProps<T extends FieldValues> {
	form: UseFormReturn<T>;
	name: Path<T>;
	label: string;
	placeholder: string;
	required?: boolean;
	rows?: number;
	labelColor?: "black" | "red";
	errorColor?: "black" | "red";
	disabled?: boolean;
	readOnly?: boolean;
	layout?: "vertical" | "horizontal";
	className?: string;
	containerClassName?: string;
	labelClassName?: string;
}

export const FormTextArea = <T extends FieldValues>({
	form,
	name,
	label,
	placeholder,
	required = false,
	rows = 4,
	labelColor = "black",
	errorColor = "red",
	disabled = false,
	readOnly = false,
	layout = "vertical",
	className,
	containerClassName,
	labelClassName,
}: FormTextAreaProps<T>) => {
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

						<FormControl>
							<Textarea {...field} placeholder={placeholder} rows={rows} readOnly={readOnly} className={className} />
						</FormControl>
					</div>

					<div className={cn(layout === "horizontal" && "ml-[calc(176px+1rem)]")}>
						<FormMessage
							className={cn("font-semibold", {
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
