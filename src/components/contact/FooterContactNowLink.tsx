"use client";

import { submitContact } from "@/app/actions/contact";
import ContactInfo from "@/components/contact/ContactInfo";
import { contactTypes } from "@/components/contact/schema";
import { VerticalDateTimePicker } from "@/components/form-components/DateTimePicker";
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
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FiLoader } from "react-icons/fi";
import * as z from "zod";

const formSchema = z.object({
	name: z
		.string()
		.min(1, { message: "Họ và tên phải có ít nhất 1 ký tự." })
		.max(128, { message: "Họ và tên phải có tối đa 128 ký tự." }),
	phone: z.string().regex(/^[0-9]{10,11}$/, { message: "Số điện thoại phải có 10 số." }),
	email: z.union([z.string().email({ message: "Email không hợp lệ." }), z.literal("")]),
	type: z.array(z.enum(contactTypes)),
	datetime: z.object({
		date: z.date({ required_error: "Vui lòng chọn ngày tư vấn." }),
		time: z.string({ required_error: "Vui lòng chọn thời gian tư vấn." }),
	}),
});

type FormValues = z.infer<typeof formSchema>;

function ContactNowForm({
	onOpenChange,
	onFinish,
}: {
	onOpenChange: (open: boolean) => void;
	onFinish: () => void;
}) {
	const [isSubmitted, setIsSubmitted] = useState(false);

	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			phone: "",
			email: "",
			type: ["insurance"],
			datetime: undefined,
		},
	});

	useEffect(() => {
		const initialDate = new Date();
		const initialTime = `${initialDate.getHours() + 1}:00`;

		form.setValue("datetime", { date: initialDate, time: initialTime });
	}, [form]);

	async function onSubmit(values: FormValues) {
		try {
			setIsSubmitted(false);
			await submitContact(values);
			setIsSubmitted(true);
			onOpenChange(false);
			onFinish();
		} catch (error) {
			toast.error("Lỗi khi gửi liên hệ. Vui lòng thử lại sau.");
		}
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<div className="space-y-4">
					<FormField
						control={form.control}
						name="type"
						render={({ field }) => {
							const values = Array.isArray(field.value) ? field.value : ([] as string[]);

							return (
								<FormItem>
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
								</FormItem>
							);
						}}
					/>

					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<CustomFormLabel required>Họ và Tên</CustomFormLabel>
								<FormControl>
									<MyInput placeholder="Nguyễn Văn A" {...field} />
								</FormControl>
								<CustomFormMessage />
							</FormItem>
						)}
					/>

					<div className="grid grid-cols-2 gap-x-8">
						<FormField
							control={form.control}
							name="phone"
							render={({ field }) => (
								<FormItem>
									<CustomFormLabel required>Số Điện Thoại</CustomFormLabel>
									<FormControl>
										<MyInput
											className={cn(
												"[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
											)}
											type="number"
											placeholder="(123) 456 - 7890"
											{...field}
										/>
									</FormControl>
									<CustomFormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<CustomFormLabel>Email</CustomFormLabel>
									<FormControl>
										<MyInput placeholder="example@youremail.com" {...field} />
									</FormControl>
									<CustomFormMessage />
								</FormItem>
							)}
						/>
					</div>

					<VerticalDateTimePicker<FormValues>
						form={form}
						name="datetime"
						label="Thời gian tư vấn"
						required
						labelColor="black"
					/>

					<ConditionalRenderer
						condition={isSubmitted}
						component={
							<FormSubmitButton className="" disabled type="button">
								Liên Hệ Ngay <FiLoader className="w-4 h-4 ml-2 animate-spin" />
							</FormSubmitButton>
						}
						fallback={<FormSubmitButton type="submit">Liên Hệ Ngay</FormSubmitButton>}
					/>
				</div>
			</form>
		</Form>
	);
}

export function FooterContactNowLink() {
	const [renderer, setRenderer] = useState<"create" | "success" | "init">("init");

	return (
		<ConditionalRenderer
			condition={renderer === "init"}
			component={
				<button
					type="button"
					onClick={() => setRenderer("create")}
					className={cn("flex items-center gap-4 group hover:scale-105 duration-300")}
				>
					Hướng Dẫn Bồi Thường
				</button>
			}
			fallback={
				<Dialog open={renderer === "create" || renderer === "success"} onOpenChange={() => setRenderer("init")}>
					<VisuallyHidden>
						<DialogTitle>Hướng Dẫn Bồi Thường</DialogTitle>
					</VisuallyHidden>

					<DialogContent className="max-w-screen-lg md:shadow-elevation">
						<VisuallyHidden>
							<DialogDescription>Hướng Dẫn Bồi Thường</DialogDescription>
						</VisuallyHidden>

						<ConditionalRenderer
							condition={renderer === "create"}
							component={
								<>
									<DialogHeader className="space-y-4 pb-4">
										<DialogTitle className="text-2xl font-bold text-black">Hướng Dẫn Bồi Thường</DialogTitle>
										<Separator className="bg-black/20" />
										<DialogDescription className="text-base text-black/80">
											Để được hướng dẫn bồi thường, quý khách vui lòng liên hệ trực tiếp với chúng tôi.
										</DialogDescription>
									</DialogHeader>

									<div className="flex gap-16 align-top">
										<div className="flex-[2]">
											<ContactNowForm
												onOpenChange={(open) => setRenderer("init")}
												onFinish={() => setRenderer("success")}
											/>
										</div>
										<div className="flex-[1]">
											<ContactInfo hasZalo={false} />
										</div>
									</div>
								</>
							}
							fallback={
								<DialogSuccess
									title="Gửi thành công!"
									message="Thông tin của quý khách đã được ghi nhận. Chúng tôi sẽ liên hệ lại trong vòng 48 giờ. Cảm ơn quý khách!"
									onClose={() => setRenderer("init")}
								/>
							}
						/>
					</DialogContent>
				</Dialog>
			}
		/>
	);
}
