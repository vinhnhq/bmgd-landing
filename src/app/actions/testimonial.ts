"use server";

import type { FormValues } from "@/components/testimonials/CreateButton";
import { TestimonialRepository } from "@/db/repositories/testimonial";

export async function submitTestimonial(data: FormValues): Promise<{ success: boolean; error?: string }> {
  try {
    const repo = new TestimonialRepository();
    await repo.create(data);
    return { success: true };
  } catch (error) {
    console.error("Error submitting testimonial:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to submit testimonial",
    };
  }
}

export async function getAllTestimonials() {
  try {
    const repo = new TestimonialRepository();
    const testimonials = await repo.findAll();
    return { success: true, data: testimonials };
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return { success: false, error: "Failed to fetch testimonials", data: [] };
  }
}

export async function updateTestimonial(id: string, data: Partial<FormValues>) {
  try {
    const repo = new TestimonialRepository();
    const testimonial = await repo.update(id, data);
    return { success: true, data: testimonial };
  } catch (error) {
    console.error("Error updating testimonial:", error);
    return { success: false, error: "Failed to update testimonial" };
  }
}

export async function deleteTestimonial(id: string) {
  try {
    const repo = new TestimonialRepository();
    const success = await repo.delete(id);
    return { success };
  } catch (error) {
    console.error("Error deleting testimonial:", error);
    return { success: false, error: "Failed to delete testimonial" };
  }
}
