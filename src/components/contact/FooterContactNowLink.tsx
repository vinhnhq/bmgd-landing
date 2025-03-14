"use client";

import ContactInfo from "@/components/contact/ContactInfo";
import { FormInput } from "@/components/form-components";
import { DateTimePicker, VerticalDateTimePicker } from "@/components/form-components/DateTimePicker";
import { VerticalFormInput } from "@/components/form-components/FormInput";
import { VerticalFormSelect } from "@/components/form-components/FormSelect";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { ConditionalRenderer, DialogSuccess, FormSubmitButton } from "@/components/utils";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FiLoader } from "react-icons/fi";
import { HiOutlinePhone } from "react-icons/hi";
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
	type: z.string({ required_error: "Vui lòng chọn thông tin cần liên hệ." }),
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
			type: "insurance",
			datetime: {
				date: new Date(),
				time: `${new Date().getHours() + 1}:00`,
			},
		},
	});

	async function onSubmit(values: FormValues) {
		setIsSubmitted(true);

		await new Promise((resolve) => setTimeout(resolve, 1000));

		setIsSubmitted(false);
		onOpenChange(false);
		onFinish();
	}

	return (
		<form onSubmit={form.handleSubmit(onSubmit)}>
			<Form {...form}>
				<div className="space-y-4">
					<VerticalFormSelect<FormValues>
						form={form}
						name="type"
						label=""
						disabled
						placeholder="Chọn thông tin cần liên hệ"
						options={[
							{ value: "insurance", label: "Hỗ Trợ Bồi Thường" },
							{ value: "claim", label: "Tư Vấn Sản Phẩm Phù Hợp Theo Doanh Nghiệp" },
							{ value: "recruitment", label: "Tư Vấn Trở Thành Công Tác Viên" },
							{ value: "other", label: "Khác" },
						]}
						labelColor="black"
						errorColor="red"
					/>

					<VerticalFormInput<FormValues>
						form={form}
						name="name"
						label="Họ và Tên"
						placeholder="Nguyễn Văn A"
						required
						labelColor="black"
					/>

					<div className="grid grid-cols-2 gap-x-8">
						<VerticalFormInput<FormValues>
							form={form}
							name="phone"
							label="Số Điện Thoại"
							placeholder="(123) 456 - 7890"
							type="tel"
							inputMode="numeric"
							required
							labelColor="black"
							onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
								if (!/[0-9]/.test(e.key)) {
									e.preventDefault();
								}
							}}
						/>

						<VerticalFormInput<FormValues>
							form={form}
							name="email"
							label="Email"
							placeholder="example@youremail.com"
							type="email"
							inputMode="email"
							labelColor="black"
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
			</Form>
		</form>
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

									<div className="flex gap-16">
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
