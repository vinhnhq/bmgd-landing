"use client";

import QuickActions from "@/components/quick-actions";
import { cn } from "@/lib/utils";

export function Layout({ children, className }: { children: React.ReactNode; className?: string }) {
	return (
		<div className={cn("min-h-screen bg-[#f5f5f5] relative", className)}>
			<div className="mx-auto max-w-[1440px] bg-white shadow-elevation">{children}</div>

			<QuickActions />
		</div>
	);
}

export function Container({ children, className }: { children: React.ReactNode; className?: string }) {
	return <div className={cn("", className)}>{children}</div>;
}
