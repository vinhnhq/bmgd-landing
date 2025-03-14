"use client";

import { FormInput, FormTextArea } from "@/components/form-components";
import { VerticalFormInput } from "@/components/form-components/FormInput";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { ConditionalRenderer, DialogSuccess, FormSubmitButton } from "@/components/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FiLoader } from "react-icons/fi";
import * as z from "zod";

const formSchema = z.object({
	name: z
		.string()
		.min(1, { message: "Họ và tên phải có ít nhất 1 ký tự." })
		.max(128, { message: "Họ và tên phải có tối đa 128 ký tự." }),
	email: z.union([z.string().email({ message: "Email không hợp lệ." }), z.literal("")]),
	occupation: z.string().optional(),
	company: z.string().optional(),
	comment: z.string().min(10, {
		message: "Nhận xét phải có ít nhất 10 ký tự.",
	}),
});

type FormValues = z.infer<typeof formSchema>;

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

		await new Promise((resolve) => setTimeout(resolve, 1000));

		setIsSubmitted(false);
		onOpenChange(false);
		onFinish();
	}

	return (
		<form onSubmit={form.handleSubmit(onSubmit)}>
			<Form {...form}>
				<div className="space-y-8">
					<div className="grid grid-cols-2 gap-8">
						<VerticalFormInput<FormValues>
							form={form}
							name="name"
							label="Họ và Tên"
							placeholder="Nguyễn Văn A"
							required
							labelColor="black"
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

						<VerticalFormInput<FormValues>
							form={form}
							name="occupation"
							label="Nghề Nghiệp"
							placeholder="Công Nhân"
							labelColor="black"
						/>

						<VerticalFormInput<FormValues>
							form={form}
							name="company"
							label="Doanh Nghiệp"
							placeholder="Công Ty ABC"
							labelColor="black"
						/>
					</div>

					<FormTextArea<FormValues>
						form={form}
						name="comment"
						label="Nhận Xét"
						placeholder="Điền nhận xét tại đây..."
						labelColor="black"
						required
						rows={4}
						labelClassName="w-full"
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
			</Form>
		</form>
	);
};

export function CreateTestimonialButton() {
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

									<NewForm onOpenChange={(open) => setRenderer("init")} onFinish={() => setRenderer("success")} />
								</>
							}
							fallback={
								<DialogSuccess
									title="Đánh giá thành công!"
									message="Cảm ơn bạn đã gửi đánh giá đến chúng tôi"
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
