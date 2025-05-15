"use server";

import { closeDb } from "@/db/connection";
import { VisitRepository } from "@/db/repositories/visit";
import { cookies } from "next/headers";

export async function trackPageVisit(path: string) {
	try {
		const _ = cookies();

		const repo = new VisitRepository();
		const visit = await repo.incrementVisit(path);
		return { success: true, data: visit };
	} catch (error) {
		console.error("[Visit] Error tracking page visit:", error);
		return {
			success: false,
			error: error instanceof Error ? error.message : "Failed to track page visit",
		};
	} finally {
		closeDb();
	}
}

export async function getAllVisits() {
	try {
		const _ = cookies();

		const repo = new VisitRepository();
		const visits = await repo.getAllVisits();
		return { success: true, data: visits };
	} catch (error) {
		console.error("[Visit] Error fetching all visits:", error);
		return {
			success: false,
			error: error instanceof Error ? error.message : "Failed to fetch all visits",
			data: [],
		};
	} finally {
		closeDb();
	}
}
