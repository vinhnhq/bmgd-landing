import { DateTimePicker, FormInput, FormSelect } from "@/components/form-components";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FiCheck } from "react-icons/fi";
import * as z from "zod";

const formSchema = z.object({
	name: z.string().min(2, {
		message: "Họ và tên phải có ít nhất 2 ký tự.",
	}),
	phone: z.string().regex(/^[0-9]{10,11}$/, {
		message: "Số điện thoại phải có 10 số.",
	}),
	email: z.string().email({
		message: "Email không hợp lệ.",
	}),
	type: z.string({
		required_error: "Vui lòng chọn thông tin cần liên hệ.",
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

const ContactForm = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);

	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			phone: "",
			email: "",
			type: "",
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

	if (isSubmitted) {
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

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex flex-col h-full space-y-8"
				aria-label="Liên hệ tư vấn"
			>
				<div className="space-y-8">
					<FormSelect<FormValues>
						form={form}
						name="type"
						label=""
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

					<FormInput<FormValues>
						form={form}
						name="name"
						label="Họ và Tên"
						placeholder="Nguyễn Văn A"
						required
						labelColor="black"
						errorColor="red"
					/>

					<div className="grid grid-cols-2 gap-x-8">
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
							onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
								if (!/[0-9]/.test(e.key)) {
									e.preventDefault();
								}
							}}
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
						/>
					</div>

					<DateTimePicker<FormValues> form={form} name="datetime" label="Thời Gian Tư Vấn" required />
				</div>

				<Button
					type="submit"
					className={cn(
						"w-48 h-12 bg-brand-redPrimary text-white font-semibold rounded-3xl shadow-elevation",
						"hover:scale-105 transition-all duration-300",
					)}
				>
					Liên Hệ Ngay
				</Button>
			</form>
		</Form>
	);
};

export default ContactForm;
