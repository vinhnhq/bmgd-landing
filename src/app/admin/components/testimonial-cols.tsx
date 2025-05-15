"use client";

import type { TestimonialRecord } from "@/db/schema/testimonial";
import type { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<TestimonialRecord>[] = [
	{
		accessorKey: "name",
		header: "Tên",
		cell: ({ row }) => {
			return <div className="tracking-tighter">{row.original.name}</div>;
		},
	},
	{
		accessorKey: "email",
		header: "Email",
		cell: ({ row }) => <div className="tracking-tighter">{row.original.email}</div>,
	},
	{
		accessorKey: "comment",
		header: "Nhận xét",
		cell: ({ row }) => <div className="w-[384px] tracking-wide">{row.original.comment}</div>,
	},
	{
		accessorKey: "company",
		header: "Công ty",
		cell: ({ row }) => <div className="tracking-tighter">{row.original.company}</div>,
	},
	{
		accessorKey: "occupation",
		header: "Nghề nghiệp",
		cell: ({ row }) => <div className="tracking-tighter">{row.original.occupation}</div>,
	},
	{
		accessorKey: "created_at",
		header: "Ngày tạo",
		cell: ({ row }) => {
			const date = new Date(row.original.created_at);
			return (
				<div className="tracking-tighter tabular-nums">
					{date.toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit", year: "numeric" })}
				</div>
			);
		},
	},
];
