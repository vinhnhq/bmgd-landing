"use client";

import { FormInput } from "@/components/form-components";
import { DateTimePicker } from "@/components/form-components/DateTimePicker";
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
	consultationType: z.string(),
	name: z
		.string()
		.min(1, { message: "Họ và tên phải có ít nhất 1 ký tự." })
		.max(128, { message: "Họ và tên phải có tối đa 128 ký tự." }),
	phone: z.string().regex(/^[0-9]{10,11}$/, { message: "Số điện thoại phải có 10 số." }),
	email: z.union([z.string().email({ message: "Email không hợp lệ." }), z.literal("")]),
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
			consultationType: "",
			name: "",
			phone: "",
			email: "",
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
					<FormInput<FormValues>
						form={form}
						name="consultationType"
						label="Thông tin cần liên hệ"
						placeholder="Tư Vấn Trở Thành CTV"
						required
						labelColor="black"
						readOnly
						labelClassName="w-1/3"
					/>

					<FormInput<FormValues>
						form={form}
						name="name"
						label="Họ và Tên"
						placeholder="Nguyễn Văn A"
						required
						labelColor="black"
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
						labelClassName="w-1/3"
						onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
							if (!/[0-9]/.test(e.key)) {
								e.preventDefault();
							}
						}}
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

					<ConditionalRenderer
						condition={isSubmitted}
						component={
							<FormSubmitButton className="" disabled type="button">
								Liên Hệ Ngay <FiLoader className="w-4 h-4 ml-2 animate-spin" />
							</FormSubmitButton>
						}
						fallback={<FormSubmitButton type="submit">Liên Hệ Ngay</FormSubmitButton>}
					/>

					<Image
						src={"/tu-van-ngay.jpg"}
						width={0}
						height={0}
						alt="Tư vấn ngay"
						className="w-full h-auto object-cover absolute bottom-0 right-0 -z-10 max-w-72"
					/>
				</div>
			</Form>
		</form>
	);
}

export function ContactNowButton() {
	const [renderer, setRenderer] = useState<"create" | "success" | "init">("init");

	return (
		<ConditionalRenderer
			condition={renderer === "init"}
			component={
				<button
					type="button"
					onClick={() => setRenderer("create")}
					className={cn(
						"rounded-full bg-brand-redPrimary text-white w-12 h-12 flex items-center justify-center shadow-elevation",
						"transition-all duration-300 hover:-translate-y-1 hover:scale-105",
					)}
				>
					<HiOutlinePhone className="w-6 h-6" />
				</button>
			}
			fallback={
				<Dialog open={renderer === "create" || renderer === "success"} onOpenChange={() => setRenderer("init")}>
					<VisuallyHidden>
						<DialogTitle>Liên Hệ Ngay</DialogTitle>
					</VisuallyHidden>

					<DialogContent className="max-w-screen-md md:shadow-elevation">
						<VisuallyHidden>
							<DialogDescription>Liên Hệ Ngay Bảo Minh Gia Đình để được tư vấn và hỗ trợ</DialogDescription>
						</VisuallyHidden>

						<ConditionalRenderer
							condition={renderer === "create"}
							component={
								<>
									<DialogHeader className="space-y-4 pb-4">
										<DialogTitle className="text-2xl font-bold text-black">Liên Hệ Ngay</DialogTitle>
										<Separator className="bg-black/20" />
										<DialogDescription className="text-base text-black/80">
											Bảo Minh Gia Đình sẽ liên hệ lại theo thông tin bạn cung cấp
										</DialogDescription>
									</DialogHeader>

									<ContactNowForm
										onOpenChange={(open) => setRenderer("init")}
										onFinish={() => setRenderer("success")}
									/>
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
