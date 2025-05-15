"use client";

import { submitContact } from "@/app/actions/contact";
import { contactTypes } from "@/components/contact/schema";
import { VerticalDateTimePicker } from "@/components/form-components/DateTimePicker";
import { DropdownCheckboxMenu } from "@/components/form-components/FormDropdownCheckboxField";
import { MyInput } from "@/components/form-components/FormInput";
import { Container } from "@/components/layout";
import Header from "@/components/me/header";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { ConditionalRenderer, CustomFormLabel, CustomFormMessage, RegisterSuccess } from "@/components/utils";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FiArrowRight } from "react-icons/fi";
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
	type: z.array(z.enum(contactTypes)),
	datetime: z.object({
		date: z.date({ required_error: "Vui lòng chọn ngày tư vấn." }),
		time: z.string({ required_error: "Vui lòng chọn thời gian tư vấn." }),
	}),
});

type FormValues = z.infer<typeof formSchema>;

export default function RegisterForm() {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			phone: "",
			email: "",
			type: ["recruitment"],
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
			await submitContact(values);
			setIsSubmitted(true);
		} catch (error) {
			toast.error("Lỗi khi gửi liên hệ. Vui lòng thử lại sau.");
		}
	}

	return (
		<Container className="bg-white px-28 my-16">
			<Header
				title="Đăng Ký Trở Thành Cộng Tác Viên"
				description="Trở thành Cộng Tác Viên ngay hôm nay để tự chủ tài chính, làm chủ tương lai. Hãy để lại thông tin đăng ký, chúng tôi sẽ hỗ trợ bạn!"
			/>

			{/* Content */}
			<div className="w-full bg-[#FF3B3B]/[0.42] relative">
				{/* Background Image */}
				<Image
					src={"/light.png"}
					width={1440}
					height={553}
					priority
					alt="Register Form Background"
					className="absolute inset-0 w-full h-auto object-cover mix-blend-lighten rounded-lg"
				/>

				{/* Content Grid */}
				<div className="relative grid grid-cols-12 gap-8 p-8 items-center">
					{/* Left Column - Image */}
					<div className="col-span-5 rounded-lg overflow-hidden">
						<Image
							src={"/register-form-img.png"}
							width={440}
							height={432}
							alt="Working Meeting"
							className="w-full h-auto object-cover rounded-lg"
						/>
					</div>

					{/* Right Column - Form */}
					<div className="col-span-7">
						<ConditionalRenderer
							condition={isSubmitted}
							component={<RegisterSuccess />}
							fallback={
								<Form {...form}>
									<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
																className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
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
											label="Thời Gian Tư Vấn"
											required
											labelColor="black"
										/>

										<RectSubmitButton isSubmitted={isSubmitted} type="submit">
											<span className="text-base font-semibold uppercase">Tư vấn ngay</span>
											<FiArrowRight className="w-6 h-6" />
										</RectSubmitButton>
									</form>
								</Form>
							}
						/>
					</div>
				</div>
			</div>
		</Container>
	);
}

function RectSubmitButton({
	isSubmitted,
	children,
	...props
}: { isSubmitted: boolean; children: React.ReactNode } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
	return (
		<button
			type="submit"
			className={cn(
				"h-12 bg-brand-redPrimary text-white rounded-md shadow-elevation flex items-center justify-center gap-2",
				"hover:scale-105 px-6 transition-all duration-300 focus-visible:ring-0",
				isSubmitted && "opacity-50 cursor-not-allowed",
			)}
			disabled={isSubmitted}
			{...props}
		>
			{children}
		</button>
	);
}
