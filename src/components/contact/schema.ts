import { z } from "zod";

export const contactTypes = ["insurance", "claim", "recruitment", "other"] as const;

export type ContactType = (typeof contactTypes)[number];

export const formSchema = z
	.object({
		name: z
			.string()
			.min(1, { message: "Họ và tên phải có ít nhất 1 ký tự." })
			.max(128, { message: "Họ và tên phải có tối đa 128 ký tự." }),
		phone: z.string().regex(/^[0-9]{10,11}$/, { message: "Số điện thoại phải có 10 số." }),
		email: z.union([z.string().email({ message: "Email không hợp lệ." }), z.literal("")]),
		type: z
			.array(z.enum(contactTypes))
			.refine((data) => data.length > 0, { message: "Vui lòng chọn thông tin cần liên hệ." })
			.default([]),
		otherType: z.string().optional(),
		datetime: z.object({
			date: z.date({ message: "Vui lòng chọn ngày tư vấn." }),
			time: z.string({ message: "Vui lòng chọn thời gian tư vấn." }),
		}),
	})
	.superRefine((data, ctx) => {
		if (data.type.includes("other") && data.otherType?.length === 0) {
			ctx.addIssue({
				path: ["otherType"],
				code: z.ZodIssueCode.custom,
				message: "Vui lòng cung cấp thông tin cần liên hệ.",
			});
		}

		if (data.type.includes("other") && data.otherType?.length && data.otherType.length > 150) {
			ctx.addIssue({
				path: ["otherType"],
				code: z.ZodIssueCode.custom,
				message: "Tối đa 150 ký tự.",
			});
		}
	});

export type FormValues = z.infer<typeof formSchema>;

export const defaultValues: FormValues = {
	name: "",
	phone: "",
	email: "",
	type: [],
	otherType: "",
	datetime: { date: new Date(), time: "" },
};
