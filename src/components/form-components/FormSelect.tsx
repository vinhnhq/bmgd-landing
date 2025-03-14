import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { FieldValues, Path, UseFormReturn } from "react-hook-form";
import { FaAsterisk } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { MyFormLabel, MyFormMessage } from "@/components/utils";

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
				<FormItem className={cn("flex items-center gap-4", containerClassName)}>
					<MyFormLabel label={label} required={required} labelColor={labelColor} className={labelClassName} />

					<div className="flex flex-col gap-2 w-full">
						<Select onValueChange={field.onChange} defaultValue={field.value} disabled={disabled}>
							<FormControl>
								<SelectTrigger
									type="button"
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

						<MyFormMessage errorColor={errorColor} />
					</div>
				</FormItem>
			)}
		/>
	);
};

export const VerticalFormSelect = <T extends FieldValues>({
	form,
	name,
	label,
	placeholder,
	options,
	required = false,
	labelColor = "black",
	errorColor = "red",
	disabled = false,
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
				<FormItem className={cn("flex flex-col gap-2", containerClassName)}>
					<MyFormLabel label={label} required={required} labelColor={labelColor} className={labelClassName} />
					<Select onValueChange={field.onChange} defaultValue={field.value} disabled={disabled}>
						<FormControl>
							<SelectTrigger
								type="button"
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
					<MyFormMessage errorColor={errorColor} />
				</FormItem>
			)}
		/>
	);
};
