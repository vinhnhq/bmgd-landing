export const dynamic = "force-dynamic";

import { getAllContacts } from "@/app/actions/contact";
import { getAllTestimonials } from "@/app/actions/testimonial";
import { columns as contactColumns } from "./components/contact-cols";
import { DataTable as ContactTable } from "./components/contact-table";
import { columns as testimonialColumns } from "./components/testimonial-cols";
import { DataTable as TestimonialTable } from "./components/testimonial-table";

export default async function AdminPage() {
	const contacts = await getAllContacts();
	const testimonials = await getAllTestimonials();

	if (!contacts.success || !testimonials.success) {
		return null;
	}

	return (
		<div className="container mx-auto min-h-screen p-8 space-y-8">
			<div className="space-y-4">
				<h2 className="text-2xl font-bold">Danh Sách Liên Hệ</h2>
				<ContactTable columns={contactColumns} data={contacts.data} />
			</div>

			<div className="space-y-4">
				<h2 className="text-2xl font-bold">Danh Sách Đánh Giá</h2>
				<TestimonialTable columns={testimonialColumns} data={testimonials.data} />
			</div>
		</div>
	);
}
