import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { DateTimePicker, FormInput } from "@/components/form-components";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { DialogSuccess } from "./RegisterSuccess";
import { FaAsterisk } from "react-icons/fa";
import Image from "next/image";

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
			<DialogContent className="max-w-screen-md p-0 bg-white rounded-3xl overflow-hidden">
				<div className="relative p-8">
					{isSubmitted ? (
						<DialogSuccess onClose={() => onOpenChange(false)} />
					) : (
						<>
							<h2 className="text-2xl font-bold text-black mb-2">Tư Vấn Ngay</h2>
							<div className="h-[1px] bg-gray-200 mb-4" />

							<p className="text-gray-600 mb-6">Bảo Minh Gia Đình sẽ liên hệ lại theo thông tin bạn cung cấp</p>

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
										className="w-1/2"
									/>

									<div className="flex items-center gap-4">
										<div className="min-w-44 font-semibold flex items-start gap-[6px]">
											<span>Thời gian tư vấn</span>
											<span className="text-[#FF0127] text-[8px]" aria-hidden="true">
												<FaAsterisk />
											</span>
											<span className="sr-only">(bắt buộc)</span>
										</div>
										<div className="flex-1">
											<DateTimePicker<FormValues> form={form} name="datetime" label="" required className="w-1/2" />
										</div>
									</div>

									<div className="">
										<button
											type="submit"
											className="px-12 py-2 bg-[#F24444] text-white
												rounded-full shadow-elevation hover:scale-105
												transition-all duration-200 focus-visible:ring-0
												flex items-center justify-center"
										>
											<span className="text-base font-semibold">Tư Vấn Ngay</span>
										</button>
									</div>
								</form>
							</Form>

							{/* Illustration */}
							<div className="absolute bottom-0 right-0 w-[300px] -z-10">
								<Image src={"/tu-van-ngay.jpg"} width={300} height={300} alt="Tư vấn ngay" className="w-full h-auto" />
							</div>
						</>
					)}
				</div>
			</DialogContent>
		</Dialog>
	);
};
