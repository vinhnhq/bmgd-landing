"use client";

import { DateTimePicker, FormInput } from "@/components/form-components";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { ConditionalRenderer, DialogSuccess, FormSubmitButton } from "@/components/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaAsterisk } from "react-icons/fa";
import * as z from "zod";

const formSchema = z.object({
	consultationType: z.string(),
	name: z
		.string()
		.min(1, {
			message: "Họ và tên phải có ít nhất 1 ký tự.",
		})
		.max(128, {
			message: "Họ và tên phải có tối đa 128 ký tự.",
		}),
	phone: z.string().regex(/^[0-9]{10,11}$/, {
		message: "Số điện thoại phải có 10 số.",
	}),
	email: z.string().email({
		message: "Email không hợp lệ.",
	}),
	datetime: z.object({
		date: z.date({
			required_error: "Vui lòng chọn ngày tư vấn.",
		}),
		time: z.string({
			required_error: "Vui lòng chọn thời gian tư vấn.",
		}),
	}),
});

type FormValues = z.infer<typeof formSchema>;

interface ConsultationDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

export const ConsultationDialog = ({ open, onOpenChange }: ConsultationDialogProps) => {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			consultationType: "Tư Vấn Trở Thành CTV",
			name: "",
			phone: "",
			email: "",
			datetime: {
				date: new Date(),
				time: `${new Date().getHours() + 1}:00`,
			},
		},
	});

	function onSubmit(values: FormValues) {
		console.log(values);
		setIsSubmitted(true);
	}

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<VisuallyHidden>
				<DialogTitle>Tư vấn ngay trở thành Cộng Tác Viên</DialogTitle>
			</VisuallyHidden>

			<DialogContent className="max-w-screen-md p-0 bg-white rounded-3xl overflow-hidden">
				<VisuallyHidden>
					<DialogDescription>Tư vấn ngay trở thành Cộng Tác Viên</DialogDescription>
				</VisuallyHidden>

				<div className="relative p-8">
					<ConditionalRenderer
						condition={isSubmitted}
						component={
							<DialogSuccess
								onClose={() => onOpenChange(false)}
								title="Gửi thành công!"
								message="Thông tin của quý khách đã được ghi nhận. Chúng tôi sẽ liên hệ lại trong vòng 48 giờ. Cảm ơn quý khách!"
							/>
						}
						fallback={
							<>
								<DialogHeader className="space-y-4 pb-4">
									<DialogTitle className="text-2xl font-bold text-black">
										Tư vấn ngay trở thành Cộng Tác Viên
									</DialogTitle>
									<Separator className="bg-black/20" />
									<DialogDescription className="text-base text-black/80">
										Bảo Minh Gia Đình sẽ liên hệ lại theo thông tin bạn cung cấp
									</DialogDescription>
								</DialogHeader>

								<Form {...form}>
									<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
										<FormInput<FormValues>
											form={form}
											name="consultationType"
											label="Thông tin cần liên hệ"
											placeholder="Tư Vấn Trở Thành CTV"
											required
											labelColor="black"
											errorColor="black"
											readOnly
											layout="horizontal"
											className="bg-gray-100"
											labelClassName="w-1/3"
										/>

										<FormInput<FormValues>
											form={form}
											name="name"
											label="Họ và Tên"
											placeholder="Nguyễn Văn A"
											required
											labelColor="black"
											errorColor="red"
											layout="horizontal"
											labelClassName="w-1/3"
										/>

										<FormInput<FormValues>
											form={form}
											name="phone"
											label="Số Điện Thoại"
											placeholder="(123) 456 - 7890"
											type="tel"
											inputMode="numeric"
											required
											labelColor="black"
											errorColor="red"
											layout="horizontal"
											onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
												if (!/[0-9]/.test(e.key)) {
													e.preventDefault();
												}
											}}
											labelClassName="w-1/3"
											className="w-1/2"
										/>

										<FormInput<FormValues>
											form={form}
											name="email"
											label="Email"
											placeholder="example@youremail.com"
											type="email"
											inputMode="email"
											labelColor="black"
											errorColor="red"
											layout="horizontal"
											labelClassName="w-1/3"
											className="w-1/2"
										/>

										<DateTimePicker<FormValues>
											form={form}
											name="datetime"
											label="Thời gian tư vấn"
											required
											labelColor="black"
											labelClassName="w-1/3"
											className="w-1/2"
										/>

										<FormSubmitButton type="submit">Tư Vấn Ngay</FormSubmitButton>
									</form>
								</Form>

								<Image
									src={"/tu-van-ngay.jpg"}
									width={0}
									height={0}
									alt="Tư vấn ngay"
									className="w-full h-auto object-cover absolute bottom-0 right-0 -z-10 max-w-72"
								/>
							</>
						}
					/>
				</div>
			</DialogContent>
		</Dialog>
	);
};
