import toast from "react-hot-toast";

export function toastSuccessMessage({ message }: { message: string }) {
	return toast.success(message, {
		className: "bg-white text-black font-medium shadow-elevation !rounded-full",
		position: "top-center",
		duration: 5000,
	});
}

export function ConditionalRenderer({
	condition,
	component,
	fallback,
}: {
	condition: boolean;
	component: React.ReactNode;
	fallback: React.ReactNode;
}) {
	if (condition) {
		return component;
	}

	return fallback;
}

import { cn } from "@/lib/utils";
import Image from "next/image";
import { FiCheck } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { forwardRef } from "react";
import { FormLabel, FormMessage } from "@/components/ui/form";
import { FaAsterisk } from "react-icons/fa";

interface SuccessProps {
	onClose?: () => void;
}

export const RegisterSuccess = () => {
	return (
		<div className="h-full flex flex-col">
			<div className="flex-1 flex flex-col items-center justify-center space-y-4">
				<div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
					<FiCheck className="w-8 h-8 text-white stroke-2" />
				</div>

				<h3 className="font-bold text-xl text-black">Gửi thành công!</h3>

				<p className="text-base text-center max-w-[68%]">
					Thông tin của quý khách đã được ghi nhận. Chúng tôi sẽ liên hệ lại trong vòng 48 giờ. Cảm ơn quý khách!
				</p>
			</div>
		</div>
	);
};

export const DialogSuccess = ({
	onClose,
	title,
	message,
}: {
	onClose?: () => void;
	title: string;
	message: string;
}) => {
	return (
		<div className="relative flex flex-col items-center justify-center py-12">
			{/* Logo */}
			<div className="absolute top-0 right-0 w-16 h-16">
				<Image src={"/logo.png"} width={64} height={64} alt="Bảo Minh Logo" className="w-full h-full object-contain" />
			</div>

			{/* Success Icon */}
			<div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
				<FiCheck className="w-8 h-8 text-white" />
			</div>

			{/* Title */}
			<h3 className="text-2xl font-bold text-black mb-4">{title}</h3>

			{/* Message */}
			<p className="text-center text-gray-600 mb-8 max-w-md">{message}</p>

			{/* Button */}
			{onClose && (
				<button
					type="button"
					onClick={onClose}
					className={cn(
						"px-12 py-2 bg-primary text-white rounded-full shadow-elevation w-full max-w-md",
						"hover:scale-105 transition-all duration-300 focus-visible:ring-0",
					)}
				>
					<span className="text-base font-semibold">OK</span>
				</button>
			)}
		</div>
	);
};

export const FormSubmitButton = forwardRef<
	HTMLButtonElement,
	React.ComponentProps<typeof Button> & { children: React.ReactNode }
>(({ children, className, ...props }, ref) => {
	return (
		<Button
			type="button"
			className={cn(
				"w-48 h-12 bg-brand-redPrimary text-white rounded-3xl shadow-elevation font-bold cursor-pointer",
				"hover:scale-105 transition-all duration-300",
				className,
			)}
			ref={ref}
			{...props}
		>
			{children}
		</Button>
	);
});

export const MyFormMessage = forwardRef<
	HTMLDivElement,
	React.ComponentProps<typeof FormMessage> & { errorColor: "black" | "red" }
>(({ className, errorColor, ...props }, ref) => {
	return (
		<FormMessage
			role="alert"
			className={cn(
				"font-semibold text-text-error",
				errorColor === "black" && "text-black",
				errorColor === "red" && "text-text-error",
				className,
			)}
			{...props}
			ref={ref}
		/>
	);
});

export const MyFormLabel = forwardRef<
	HTMLLabelElement,
	React.ComponentProps<typeof FormLabel> & {
		className?: string;
		required: boolean;
		label: string;
		labelColor: "black" | "red";
	}
>(({ className, required, label, labelColor, ...props }, ref) => {
	return (
		<ConditionalRenderer
			condition={!!label}
			component={
				<FormLabel
					className={cn(
						"font-semibold flex items-start gap-2",
						{ "text-text-primary": labelColor === "black", "text-text-error": labelColor === "red" },
						className,
					)}
					{...props}
					ref={ref}
				>
					{label}

					<ConditionalRenderer
						condition={required}
						component={<FaAsterisk className="text-text-error w-2 h-2" />}
						fallback={null}
					/>
				</FormLabel>
			}
			fallback={null}
		/>
	);
});

export function CustomFormLabel({
	children,
	required = false,
	className,
}: { children: React.ReactNode; required?: boolean; className?: string }) {
	return (
		<FormLabel className={cn("font-semibold text-text-primary flex items-start gap-1", className)}>
			{children}

			<ConditionalRenderer
				condition={required}
				component={<FaAsterisk className="text-text-error w-2 h-2" />}
				fallback={null}
			/>
		</FormLabel>
	);
}

export function CustomFormMessage({ errorColor = "red" }: { errorColor?: "red" | "black" }) {
	return (
		<FormMessage
			className={cn("font-semibold", {
				"text-text-error": errorColor === "red",
				"text-text-primary": errorColor === "black",
			})}
		/>
	);
}

export function RenderIf(props: { condition: boolean; children: React.ReactNode }) {
	return props.condition ? props.children : null;
}
