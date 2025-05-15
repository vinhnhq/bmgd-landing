"use server";

import type { FormValues } from "@/components/contact/schema";
import { closeDb } from "@/db/connection";
import { ContactRepository } from "@/db/repositories/contact";
import { cookies } from "next/headers";

export async function submitContact(data: FormValues): Promise<{ success: boolean; error?: string }> {
	try {
		const _ = cookies();

		const repo = new ContactRepository();
		await repo.create(data);
		return { success: true };
	} catch (error) {
		console.error("[Contact] Error submitting:", error);
		return {
			success: false,
			error: error instanceof Error ? error.message : "Failed to submit contact form",
		};
	} finally {
		closeDb();
	}
}

export async function getAllContacts() {
	try {
		const _ = cookies();

		const repo = new ContactRepository();
		const contacts = await repo.findAll();
		return { success: true, data: contacts };
	} catch (error) {
		console.error("[Contact] Error fetching:", error);
		return { success: false, error: "Failed to fetch contacts", data: [] };
	} finally {
		closeDb();
	}
}
