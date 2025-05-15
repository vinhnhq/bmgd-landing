"use server";

import { VisitRepository } from "@/db/repositories/visit";

export async function trackPageVisit(path: string) {
	try {
		const repo = new VisitRepository();
		const visit = await repo.incrementVisit(path);
		return { success: true, data: visit };
	} catch (error) {
		console.error("Error tracking page visit:", error);
		return {
			success: false,
			error: error instanceof Error ? error.message : "Failed to track page visit",
		};
	}
}

export async function getAllVisits() {
	try {
		const repo = new VisitRepository();
		const visits = await repo.getAllVisits();
		return { success: true, data: visits };
	} catch (error) {
		console.error("Error fetching all visits:", error);
		return {
			success: false,
			error: error instanceof Error ? error.message : "Failed to fetch all visits",
			data: [],
		};
	}
}
