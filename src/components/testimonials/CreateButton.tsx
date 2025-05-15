"use client";

import { submitTestimonial } from "@/app/actions/testimonial";
import { MyInput } from "@/components/form-components/FormInput";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import {
	ConditionalRenderer,
	CustomFormLabel,
	CustomFormMessage,
	DialogSuccess,
	FormSubmitButton,
} from "@/components/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FiLoader } from "react-icons/fi";
import * as z from "zod";

export const formSchema = z.object({
	name: z
		.string()
		.min(1, { message: "Họ và tên phải có ít nhất 1 ký tự." })
		.max(128, { message: "Họ và tên phải có tối đa 128 ký tự." }),
	email: z.union([z.string().email({ message: "Email không hợp lệ." }), z.literal("")]),
	occupation: z.string().optional(),
	company: z.string().optional(),
	comment: z.string().min(10, { message: "Nhận xét phải có ít nhất 10 ký tự." }),
});

export type FormValues = z.infer<typeof formSchema>;

const NewForm = ({
	onOpenChange,
	onFinish,
}: {
	onOpenChange: (open: boolean) => void;
	onFinish: () => void;
}) => {
	const [isSubmitted, setIsSubmitted] = useState(false);

	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			comment: "",
			occupation: "",
			company: "",
		},
	});

	async function onSubmit(values: FormValues) {
		setIsSubmitted(true);

		try {
			const result = await submitTestimonial(values);
			if (!result.success) {
				toast.error(result.error || "Lỗi khi gửi nhận xét. Vui lòng thử lại sau.");
			}
			onOpenChange(false);
			onFinish();
		} catch (error) {
			toast.error("Lỗi khi gửi nhận xét. Vui lòng thử lại sau.");
		} finally {
			setIsSubmitted(false);
		}
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<div className="space-y-8">
					<div className="grid grid-cols-2 gap-8">
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

						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<CustomFormLabel required>Email</CustomFormLabel>
									<FormControl>
										<MyInput placeholder="example@youremail.com" {...field} />
									</FormControl>
									<CustomFormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="occupation"
							render={({ field }) => (
								<FormItem>
									<CustomFormLabel>Nghề Nghiệp</CustomFormLabel>
									<FormControl>
										<MyInput placeholder="Công Nhân" {...field} />
									</FormControl>
									<CustomFormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="company"
							render={({ field }) => (
								<FormItem>
									<CustomFormLabel>Doanh Nghiệp</CustomFormLabel>
									<FormControl>
										<MyInput placeholder="Công Ty ABC" {...field} />
									</FormControl>
									<CustomFormMessage />
								</FormItem>
							)}
						/>
					</div>

					<FormField
						control={form.control}
						name="comment"
						render={({ field }) => (
							<FormItem>
								<CustomFormLabel required>Nhận Xét</CustomFormLabel>
								<FormControl>
									<Textarea placeholder="Điền nhận xét tại đây..." rows={4} className="resize-none" {...field} />
								</FormControl>
								<CustomFormMessage />
							</FormItem>
						)}
					/>

					<ConditionalRenderer
						condition={isSubmitted}
						component={
							<FormSubmitButton disabled type="button">
								Gửi Nhận Xét <FiLoader className="w-4 h-4 ml-2 animate-spin" />
							</FormSubmitButton>
						}
						fallback={<FormSubmitButton type="submit">Gửi Nhận Xét</FormSubmitButton>}
					/>
				</div>
			</form>
		</Form>
	);
};

export function CreateTestimonialButton({ onFinish }: { onFinish?: () => void }) {
	const [renderer, setRenderer] = useState<"create" | "success" | "init">("init");

	return (
		<ConditionalRenderer
			condition={renderer === "init"}
			component={<FormSubmitButton onClick={() => setRenderer("create")}>Gửi Nhận Xét</FormSubmitButton>}
			fallback={
				<Dialog open={renderer === "create" || renderer === "success"} onOpenChange={() => setRenderer("init")}>
					<VisuallyHidden>
						<DialogTitle>Gửi Nhận Xét</DialogTitle>
					</VisuallyHidden>

					<DialogContent className="max-w-screen-md md:shadow-elevation">
						<VisuallyHidden>
							<DialogDescription>Gửi Nhận Xét</DialogDescription>
						</VisuallyHidden>

						<ConditionalRenderer
							condition={renderer === "create"}
							component={
								<>
									<DialogHeader className="space-y-4 pb-4">
										<DialogTitle className="text-2xl font-bold text-black">Gửi Nhận Xét</DialogTitle>
										<Separator className="bg-black/20" />
										<DialogDescription className="text-base text-black/80">
											Chúng tôi rất vui khi nhận được phản hồi từ bạn. Mọi ý kiến đóng góp của bạn đều hữu ích đối với
											chúng tôi.
										</DialogDescription>
									</DialogHeader>

									<NewForm onOpenChange={(open) => setRenderer("init")} onFinish={onFinish || (() => {})} />
								</>
							}
							fallback={
								<DialogSuccess
									title="Đánh giá thành công!"
									message="Cảm ơn bạn đã gửi đánh giá đến chúng tôi"
									onClose={() => {
										setRenderer("init");
										onFinish?.();
									}}
								/>
							}
						/>
					</DialogContent>
				</Dialog>
			}
		/>
	);
}
