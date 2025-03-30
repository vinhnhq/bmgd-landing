"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const validPaths = {
	intro: "/products/intl-travel/intro",
	benefit: "/products/intl-travel/benefit",
	claim: "/products/intl-travel/claim",
	rule: "/products/intl-travel/rule",
	fee: "/products/intl-travel/fee",
};

export default function ProductNav() {
	const pathname = usePathname();

	return (
		<nav>
			<ul className={cn("flex justify-evenly gap-8")}>
				<MenuItem isActive={pathname === validPaths.intro}>
					<Link href={validPaths.intro} scroll={false}>
						giới thiệu
					</Link>
				</MenuItem>
				<MenuItem isActive={pathname === validPaths.fee}>
					<Link href={validPaths.fee} scroll={false}>
						phí bảo hiểm
					</Link>
				</MenuItem>
				<MenuItem isActive={pathname === validPaths.benefit}>
					<Link href={validPaths.benefit} scroll={false}>
						quyền lợi
					</Link>
				</MenuItem>
				<MenuItem isActive={pathname === validPaths.claim}>
					<Link href={validPaths.claim} scroll={false}>
						bồi thường
					</Link>
				</MenuItem>
				<MenuItem isActive={pathname === validPaths.rule}>
					<Link href={validPaths.rule} scroll={false}>
						quy tắc
					</Link>
				</MenuItem>
			</ul>
		</nav>
	);
}

function MenuItem({ children, isActive = false }: { children: React.ReactNode; isActive?: boolean }) {
	return (
		<li
			className={cn(
				"uppercase font-bold text-3xl text-black cursor-pointer px-4 py-2",
				"hover:text-white hover:bg-brand-redSecondary hover:shadow-elevation transition-colors duration-300",
				isActive && "text-white bg-brand-redSecondary shadow-elevation",
			)}
		>
			{children}
		</li>
	);
}
