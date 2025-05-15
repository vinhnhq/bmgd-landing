"use server";

import { ContactRepository } from "@/db/repositories/contact";
import type { FormValues } from "@/components/contact/schema";

export async function submitContact(data: FormValues): Promise<{ success: boolean; error?: string }> {
	try {
		const repo = new ContactRepository();
		await repo.create(data);
		return { success: true };
	} catch (error) {
		console.error("Error submitting contact:", error);
		return {
			success: false,
			error: error instanceof Error ? error.message : "Failed to submit contact form",
		};
	}
}

export async function getAllContacts() {
	try {
		const repo = new ContactRepository();
		const contacts = await repo.findAll();
		return { success: true, data: contacts };
	} catch (error) {
		console.error("Error fetching contacts:", error);
		return { success: false, error: "Failed to fetch contacts" };
	}
}
