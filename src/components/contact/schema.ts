import { z } from "zod";

export const contactTypes = ["insurance", "claim", "recruitment", "other"] as const;

export type ContactType = (typeof contactTypes)[number];

export const formSchema = z.object({
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
	email: z.union([
		z.string().email({
			message: "Email không hợp lệ.",
		}),
		z.literal(""),
	]),
	type: z
		.array(
			z.enum(contactTypes, {
				required_error: "Vui lòng chọn thông tin cần liên hệ.",
			}),
		)
		.default([]),
	otherType: z
		.string()
		.min(1, {
			message: "Bạn chưa cung cấp thông tin cần liên hệ.",
		})
		.max(150, {
			message: "Tối đa 150 ký tự.",
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

export type FormValues = z.infer<typeof formSchema>;

export const defaultValues: FormValues = {
	name: "",
	phone: "",
	email: "",
	type: [],
	otherType: "",
	datetime: {
		date: new Date(),
		time: "",
	},
};
