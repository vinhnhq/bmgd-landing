"use client";

import type { ContactType } from "@/components/contact/schema";
import type { ContactRecord } from "@/db/schema/contact";
import type { ColumnDef } from "@tanstack/react-table";

const mapType = (type: ContactType) => {
	switch (type) {
		case "claim":
			return "Hỗ Trợ Bồi Thường";
		case "insurance":
			return "Tư Vấn Sản Phẩm Phù Hợp Theo Doanh Nghiệp";
		case "recruitment":
			return "Tư Vấn Trở Thành Công Tác Viên";
		case "other":
			return "";
		default:
			return type;
	}
};

export const columns: ColumnDef<ContactRecord>[] = [
	{
		accessorKey: "name",
		header: "Tên",
		cell: ({ row }) => {
			return <div className="">{row.original.name}</div>;
		},
	},
	{
		accessorKey: "email",
		header: "Email",
		cell: ({ row }) => <div className="">{row.original.email}</div>,
	},
	{
		accessorKey: "phone",
		header: "Số điện thoại",
		cell: ({ row }) => <div className="tabular-nums">{row.original.phone}</div>,
	},
	{
		accessorKey: "type",
		header: "Loại liên hệ",
		cell: ({ row }) => {
			return (
				<div className="flex flex-col gap-1 tabular-nums">
					{row.original.type.map((type) => (
						<div key={type} className="">
							{mapType(type)}
						</div>
					))}

					<div className="">{row.original.otherType}</div>
				</div>
			);
		},
	},
	{
		accessorKey: "datetime",
		header: "Ngày gặp",
		cell: ({ row }) => {
			const date = new Date(row.original.datetime.date).toLocaleDateString("vi-VN", {
				day: "2-digit",
				month: "2-digit",
				year: "numeric",
			});

			const time = row.original.datetime.time;

			return (
				<div className="tracking-tighter tabular-nums">
					{date} {time}
				</div>
			);
		},
	},
];
