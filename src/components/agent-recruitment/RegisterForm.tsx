import { DateTimePicker, FormInput } from "@/components/form-components";
import { VerticalDateTimePicker } from "@/components/form-components/DateTimePicker";
import { VerticalFormInput } from "@/components/form-components/FormInput";
import { Container } from "@/components/layout";
import Header from "@/components/me/header";
import { Form } from "@/components/ui/form";
import { ConditionalRenderer, RegisterSuccess } from "@/components/utils";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FiArrowRight } from "react-icons/fi";
import * as z from "zod";

const formSchema = z.object({
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

const RegisterForm = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
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
					width={1920}
					height={1080}
					alt="Register Form Background"
					className="absolute inset-0 w-full h-full object-cover mix-blend-lighten rounded-lg"
				/>

				{/* Content Grid */}
				<div className="relative grid grid-cols-12 gap-8 p-8">
					{/* Left Column - Image */}
					<div className="col-span-5 rounded-lg overflow-hidden">
						<Image
							src={"/register-form-img.png"}
							width={0}
							height={0}
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
								<>
									{/* Form Title */}
									<div className="bg-[#EDEDED] border border-black rounded-md py-4 px-4 flex items-center mb-6 shadow-elevation">
										<span className="font-montserrat font-semibold text-base text-[#58595D]">
											Tư Vấn Trở Thành Cộng Tác Viên
										</span>
									</div>

									<Form {...form}>
										<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
											<VerticalFormInput<FormValues>
												form={form}
												name="name"
												label="Họ và Tên"
												placeholder="Nguyễn Văn A"
												required
												labelColor="black"
												errorColor="black"
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
													errorColor="black"
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
													errorColor="black"
												/>
											</div>

											<VerticalDateTimePicker<FormValues>
												form={form}
												name="datetime"
												label="Thời Gian Tư Vấn"
												required
											/>

											<button
												type="submit"
												className={cn(
													"h-12 bg-brand-redPrimary text-white rounded-md shadow-elevation flex items-center justify-center gap-2",
													"hover:scale-105 px-6 transition-all duration-300 focus-visible:ring-0",
													isSubmitted && "opacity-50 cursor-not-allowed",
												)}
												disabled={isSubmitted}
											>
												<span className="text-base font-semibold uppercase">Tư vấn ngay</span>
												<FiArrowRight className="w-6 h-6" />
											</button>
										</form>
									</Form>
								</>
							}
						/>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default RegisterForm;
