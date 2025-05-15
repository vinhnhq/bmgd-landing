"use client";

import { getAllVisits } from "@/app/actions/visit";
import { useEffect, useState } from "react";

const fetchVisitCount = async (): Promise<number> => {
	const response = await getAllVisits();
	if (!response.success) {
		return 0;
	}

	return response.data.reduce((total, visit) => total + visit.count, 0);
};

export const useVisitCount = () => {
	const [visitCount, setVisitCount] = useState<number>(0);

	useEffect(() => {
		const updateCount = async () => {
			try {
				const count = await fetchVisitCount();
				setVisitCount(count);
			} catch (error) {
				console.error("Failed to fetch visit count:", error);
			}
		};

		updateCount();

		const intervalId = setInterval(updateCount, 5000);

		return () => clearInterval(intervalId);
	}, []);

	return visitCount;
};
