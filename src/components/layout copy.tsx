"use client";

import QuickActions from "@/components/quick-actions";
import { useScrollToHash } from "@/hooks/useScrollToHash";
import { cn } from "@/lib/utils";
import { Toaster } from "react-hot-toast";

export function Layout({ children, className }: { children: React.ReactNode; className?: string }) {
	useScrollToHash();

	return (
		<div className={cn("min-h-screen bg-[#f5f5f5] relative", className)}>
			<div className="mx-auto max-w-[1440px] bg-white shadow-elevation">{children}</div>

			<Toaster />
			<QuickActions />
		</div>
	);
}

export function Container({ children, className }: { children: React.ReactNode; className?: string }) {
	return <div className={cn("", className)}>{children}</div>;
}
