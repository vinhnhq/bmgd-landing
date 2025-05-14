"use client";

import { DateTimePicker } from "@/components/form-components";
import { DropdownCheckboxMenu } from "@/components/form-components/FormDropdownCheckboxField";
import { MyInput } from "@/components/form-components/FormInput";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import {
	ConditionalRenderer,
	CustomFormLabel,
	CustomFormMessage,
	DialogSuccess,
	FormSubmitButton,
} from "@/components/utils";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
	name: z
		.string()
		.min(1, { message: "Họ và tên phải có ít nhất 1 ký tự." })
		.max(128, { message: "Họ và tên phải có tối đa 128 ký tự." }),
	phone: z.string().regex(/^[0-9]{10,11}$/, {
		message: "Số điện thoại phải có 10 số.",
	}),
	email: z.union([z.string().email({ message: "Email không hợp lệ." }), z.literal("")]),
	type: z.array(z.string(), { required_error: "Vui lòng chọn thông tin cần liên hệ." }),
	datetime: z.object({
		date: z.date({ required_error: "Vui lòng chọn ngày tư vấn." }),
		time: z.string({ required_error: "Vui lòng chọn thời gian tư vấn." }),
	}),
});

type FormValues = z.infer<typeof formSchema>;

interface ClaimDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

export const ClaimDialog = ({ open, onOpenChange }: ClaimDialogProps) => {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			phone: "",
			email: "",
			type: [],
			datetime: undefined,
		},
	});

	useEffect(() => {
		const initialDate = new Date();
		const initialTime = `${initialDate.getHours() + 1}:00`;

		form.setValue("datetime", { date: initialDate, time: initialTime });
		form.setValue("type", ["insurance"]);
	}, [form]);

	function onSubmit(values: FormValues) {
		console.log(values);
		setIsSubmitted(true);
	}

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<VisuallyHidden>
				<DialogTitle>Tư vấn ngay</DialogTitle>
			</VisuallyHidden>

			<DialogContent className="max-w-screen-md md:shadow-elevation">
				<VisuallyHidden>
					<DialogDescription>Tư vấn ngay</DialogDescription>
				</VisuallyHidden>

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
								<DialogTitle className="text-2xl font-bold text-black">Tư vấn ngay</DialogTitle>
								<Separator className="bg-black/20" />
								<DialogDescription className="text-base text-black/80">
									Bảo Minh Gia Đình sẽ liên hệ lại theo thông tin bạn cung cấp
								</DialogDescription>
							</DialogHeader>

							<Form {...form}>
								<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
									<FormField
										control={form.control}
										name="type"
										render={({ field }) => {
											const values = Array.isArray(field.value) ? field.value : ([] as string[]);

											return (
												<FormItem className="flex items-center gap-4 w-full">
													<CustomFormLabel className="w-1/3">Thông tin cần liên hệ</CustomFormLabel>
													<div className="flex flex-col gap-2 w-full">
														<FormControl>
															<DropdownCheckboxMenu
																disabled
																values={values}
																onChange={field.onChange}
																options={[
																	{ value: "insurance", label: "Hỗ Trợ Bồi Thường" },
																	{ value: "claim", label: "Tư Vấn Sản Phẩm Phù Hợp Theo Doanh Nghiệp" },
																	{ value: "recruitment", label: "Tư Vấn Trở Thành Công Tác Viên" },
																	{ value: "other", label: "Khác (Điền Tại Đây)" },
																]}
																placeholder="Chọn thông tin cần liên hệ"
															/>
														</FormControl>
														<CustomFormMessage />
													</div>
												</FormItem>
											);
										}}
									/>

									<FormField
										control={form.control}
										name="name"
										render={({ field }) => (
											<FormItem className="flex items-center gap-4 w-full">
												<CustomFormLabel className="w-1/3" required>
													Họ và Tên
												</CustomFormLabel>
												<div className="flex flex-col gap-2 w-full">
													<FormControl>
														<MyInput placeholder="Nguyễn Văn A" {...field} />
													</FormControl>
													<CustomFormMessage />
												</div>
											</FormItem>
										)}
									/>

									<FormField
										control={form.control}
										name="phone"
										render={({ field }) => (
											<FormItem className="flex items-center gap-4 w-full">
												<CustomFormLabel className="w-1/3" required>
													Số Điện Thoại
												</CustomFormLabel>
												<div className="flex flex-col gap-2 w-full">
													<FormControl>
														<MyInput
															className={cn(
																"[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
																"w-1/2",
															)}
															type="number"
															placeholder="(123) 456 - 7890"
															{...field}
														/>
													</FormControl>
													<CustomFormMessage />
												</div>
											</FormItem>
										)}
									/>

									<FormField
										control={form.control}
										name="email"
										render={({ field }) => (
											<FormItem className="flex items-center gap-4 w-full">
												<CustomFormLabel className="w-1/3">Email</CustomFormLabel>
												<div className="flex flex-col gap-2 w-full">
													<FormControl>
														<MyInput className="w-1/2" placeholder="example@youremail.com" {...field} />
													</FormControl>
													<CustomFormMessage />
												</div>
											</FormItem>
										)}
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
								width={310}
								height={179}
								alt="Tư vấn ngay"
								className="w-full h-auto object-cover absolute bottom-0 right-0 -z-10 max-w-72"
							/>
						</>
					}
				/>
			</DialogContent>
		</Dialog>
	);
};
