import { VerticalDateTimePicker } from "@/components/form-components/DateTimePicker";
import { DropdownCheckboxMenu } from "@/components/form-components/FormDropdownCheckboxField";
import { MyInput } from "@/components/form-components/FormInput";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { ConditionalRenderer, CustomFormLabel, CustomFormMessage, FormSubmitButton } from "@/components/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FiCheck } from "react-icons/fi";
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

function ContactForm({
	isSubmitted,
	setIsSubmitted,
}: { isSubmitted: boolean; setIsSubmitted: (isSubmitted: boolean) => void }) {
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
	}, [form]);

	async function onSubmit(values: FormValues) {
		console.log(values);
		await new Promise((resolve) => setTimeout(resolve, 1000));
		setIsSubmitted(true);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col h-full space-y-6">
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
