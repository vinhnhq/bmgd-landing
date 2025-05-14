import { DateTimePicker } from "@/components/form-components/DateTimePicker";
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
  MyButton,
} from "@/components/utils";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FiLoader } from "react-icons/fi";
import { HiOutlinePhone } from "react-icons/hi";
import { LuRefreshCcw } from "react-icons/lu";
import { type ContactType, type FormValues, defaultValues, formSchema } from "./schema";

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
		defaultValues,
	});

	useEffect(() => {
		const initialDate = new Date();
		const initialTime = `${initialDate.getHours() + 1}:00`;

		form.setValue("datetime", { date: initialDate, time: initialTime });
	}, [form]);

	async function onSubmit(values: FormValues) {
		setIsSubmitted(true);

		await new Promise((resolve) => setTimeout(resolve, 1000));

		setIsSubmitted(false);
		onOpenChange(false);
		onFinish();
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
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<div className="space-y-4">
					<ConditionalRenderer
						condition={isOtherTypeSelected}
						component={
							<FormField
								control={form.control}
								name="otherType"
								render={({ field }) => (
									<FormItem className="flex items-center gap-4 w-full">
										<CustomFormLabel className="w-1/3">Thông tin cần liên hệ</CustomFormLabel>
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
										<FormItem className="flex items-center gap-4 w-full">
											<CustomFormLabel className="w-1/3">Thông tin cần liên hệ</CustomFormLabel>
											<div className="flex flex-col gap-2 w-full">
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
											</div>
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
						width={1440}
						height={553}
						alt="Tư vấn ngay"
						className="w-full h-auto object-cover absolute bottom-0 right-0 -z-10 max-w-72"
					/>
				</div>
			</form>
		</Form>
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
