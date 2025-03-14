import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
	return (
		<textarea
			className={cn(
				"w-full px-4 py-3 text-base bg-white border border-black rounded-md",
				"font-medium placeholder:text-black/60 placeholder:text-base",
				"shadow-elevation outline-none hover:bg-white",
				"focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200",
				props.readOnly && "bg-gray-100 cursor-not-allowed",
				className,
			)}
			ref={ref}
			{...props}
		/>
	);
});
Textarea.displayName = "Textarea";

export { Textarea };
