"use server";

import type { FormValues } from "@/components/testimonials/CreateButton";
import { closeDb } from "@/db/connection";
import { TestimonialRepository } from "@/db/repositories/testimonial";
import { cookies } from "next/headers";

export async function submitTestimonial(data: FormValues): Promise<{ success: boolean; error?: string }> {
	try {
		const _ = cookies();

		const repo = new TestimonialRepository();
		await repo.create(data);
		return { success: true };
	} catch (error) {
		console.error("[Testimonial] Error submitting testimonial:", error);
		return {
			success: false,
			error: error instanceof Error ? error.message : "Failed to submit testimonial",
		};
	} finally {
		closeDb();
	}
}

export async function getAllTestimonials() {
	try {
		const _ = cookies();

		const repo = new TestimonialRepository();
		const testimonials = await repo.findAll();
		return { success: true, data: testimonials };
	} catch (error) {
		console.error("[Testimonial] Error fetching testimonials:", error);
		return { success: false, error: "Failed to fetch testimonials", data: [] };
	} finally {
		closeDb();
	}
}

export async function updateTestimonial(id: string, data: Partial<FormValues>) {
	try {
		const _ = cookies();
		const repo = new TestimonialRepository();
		const testimonial = await repo.update(id, data);
		return { success: true, data: testimonial };
	} catch (error) {
		console.error("[Testimonial] Error updating testimonial:", error);
		return { success: false, error: "Failed to update testimonial" };
	} finally {
		closeDb();
	}
}

export async function deleteTestimonial(id: string) {
	try {
		const _ = cookies();

		const repo = new TestimonialRepository();
		const success = await repo.delete(id);
		return { success };
	} catch (error) {
		console.error("[Testimonial] Error deleting testimonial:", error);
		return { success: false, error: "Failed to delete testimonial" };
	} finally {
		closeDb();
	}
}
