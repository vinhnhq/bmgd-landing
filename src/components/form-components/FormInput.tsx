import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { MyFormLabel, MyFormMessage } from "@/components/utils";
import { cn } from "@/lib/utils";
import type { FieldValues, Path, UseFormReturn } from "react-hook-form";

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
				<FormItem className={cn("flex items-center gap-4", containerClassName)}>
					<MyFormLabel label={label} labelColor={labelColor} required={required} className={labelClassName} />

					<div className="flex flex-col gap-2 w-full">
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

						<MyFormMessage errorColor={errorColor} />
					</div>
				</FormItem>
			)}
		/>
	);
};

export const VerticalFormInput = <T extends FieldValues>({
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
				<FormItem className={cn("flex flex-col", containerClassName)}>
					<MyFormLabel label={label} labelColor={labelColor} required={required} className={labelClassName} />
					<FormControl>
						<Input
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

					<MyFormMessage errorColor={errorColor} />
				</FormItem>
			)}
		/>
	);
};
