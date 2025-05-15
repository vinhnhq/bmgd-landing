import "@/app/globals.css";
import { Layout } from "@/components/layout";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
	subsets: ["latin", "vietnamese", "latin-ext"],
	display: "swap",
	variable: "--font-montserrat",
	fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
	title: "Bảo Minh Gia Định",
	description: "Bảo Minh Gia Định - Đại lý bảo hiểm Bảo Minh",
	icons: {
		icon: "/favicon.ico",
	},
	robots: {
		index: true,
		follow: true,
	},
	alternates: {
		canonical: "https://baominhgiadinh.com.vn",
	},
	category: "Bảo Hiểm",
	authors: [
		{
			name: "Bảo Minh Gia Định",
		},
	],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="vi" className="scroll-smooth">
			<body className={cn("font-sans antialiased", montserrat.variable)}>
				<Layout>{children}</Layout>
			</body>
		</html>
	);
}
