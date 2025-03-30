import { VerticalDateTimePicker } from "@/components/form-components/DateTimePicker";
import { DropdownCheckboxMenu } from "@/components/form-components/FormDropdownCheckboxField";
import { MyInput } from "@/components/form-components/FormInput";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import {
	ConditionalRenderer,
	CustomFormLabel,
	CustomFormMessage,
	FormSubmitButton,
	MyButton,
} from "@/components/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FiCheck } from "react-icons/fi";
import { LuRefreshCcw } from "react-icons/lu";
import { type ContactType, type FormValues, defaultValues, formSchema } from "./schema";

function ContactForm({
	isSubmitted,
	setIsSubmitted,
}: { isSubmitted: boolean; setIsSubmitted: (isSubmitted: boolean) => void }) {
	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues,
	});

	useEffect(() => {
		const initialDate = new Date();
		const initialTime = `${initialDate.getHours() + 1}:00`;

		form.setValue("datetime", { date: initialDate, time: initialTime });
	}, [form]);

	async function onSubmit(values: FormValues) {
		console.log(values);
		await new Promise((resolve) => setTimeout(resolve, 1000));
		setIsSubmitted(true);
	}

	const type = form.watch("type");
	const isOtherTypeSelected = type.includes("other");

	useEffect(() => {
		if (isOtherTypeSelected) {
			form.setFocus("otherType");
			form.setValue("otherType", "");
		}
	}, [isOtherTypeSelected, form]);

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col h-full space-y-6">
				<div className="space-y-4">
					<ConditionalRenderer
						condition={isOtherTypeSelected}
						component={
							<FormField
								control={form.control}
								name="otherType"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<div className="flex items-center gap-2 w-full">
												<MyInput className="flex-1" placeholder="Bạn muốn tư vấn về gì?" {...field} />
												<MyButton
													className="shrink-0"
													icon={<LuRefreshCcw className="w-6 h-6" />}
													onClick={() => form.reset()}
												/>
											</div>
										</FormControl>
										<CustomFormMessage />
									</FormItem>
								)}
							/>
						}
						fallback={
							<FormField
								control={form.control}
								name="type"
								render={({ field }) => {
									const values = Array.isArray(field.value) ? field.value : [];

									return (
										<FormItem>
											<FormControl>
												<DropdownCheckboxMenu<ContactType>
													values={values}
													onChange={field.onChange}
													options={[
														{ value: "insurance", label: "Hỗ Trợ Bồi Thường" },
														{ value: "claim", label: "Tư Vấn Sản Phẩm Phù Hợp Theo Doanh Nghiệp" },
														{ value: "recruitment", label: "Tư Vấn Trở Thành Công Tác Viên" },
														{ value: "other", label: "Khác (Điền Tại Đây)" },
													]}
													placeholder="Chọn thông tin cần liên hệ"
													shouldClose={isOtherTypeSelected}
												/>
											</FormControl>
											<CustomFormMessage />
										</FormItem>
									);
								}}
							/>
						}
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
						labelClassName="w-1/3"
					/>
				</div>

				<FormSubmitButton type="submit">Liên Hệ Ngay</FormSubmitButton>
			</form>
		</Form>
	);
}

export default function ContactFormContainer() {
	const [isSubmitted, setIsSubmitted] = useState(false);

	return (
		<ConditionalRenderer
			condition={isSubmitted}
			component={<Success />}
			fallback={<ContactForm isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted} />}
		/>
	);
}

function Success() {
	return (
		<div className="flex flex-col justify-center items-center space-y-4 h-full">
			<div className="w-12 h-12 rounded-full bg-brand-redPrimary flex items-center justify-center">
				<FiCheck className="w-8 h-8 text-white stroke-2" />
			</div>
			<h3 className="font-bold text-xl text-black">Gửi thành công!</h3>
			<p className="text-base text-center mx-28">
				Thông tin của quý khách đã được ghi nhận. Chúng tôi sẽ liên hệ lại trong vòng 48 giờ. Cảm ơn quý khách!
			</p>
		</div>
	);
}
