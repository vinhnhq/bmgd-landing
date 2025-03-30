import { cn } from "@/lib/utils";
import type { InputHTMLAttributes } from "react";
import {
  type FieldPath,
  type FieldValues,
  type UseControllerProps,
  useController
} from "react-hook-form";

export function MyInput<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(props: UseControllerProps<TFieldValues, TName> & InputHTMLAttributes<HTMLInputElement>) {
	const { name, control, defaultValue, rules, shouldUnregister, className, ...rest } = props;

	const {
		field: { onChange, value, ref },
	} = useController({
		name,
		control,
		rules,
		defaultValue,
		shouldUnregister,
	});

	return (
		<input
			className={cn(
				"flex h-12 px-3 w-full rounded-md border border-black bg-white text-base font-medium ring-offset-background shadow-elevation",
				"file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground disabled:cursor-not-allowed disabled:opacity-50",
				"focus-visible:outline-none focus-visible:border-transparent focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
				"placeholder:text-black/60 placeholder:text-base",
				className,
			)}
			ref={ref}
			value={value}
			onChange={onChange}
			{...rest}
		/>
	);
}
