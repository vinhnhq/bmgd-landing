import "@/app/globals.css";
import { Layout } from "@/components/layout";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
	subsets: ["latin", "latin-ext"],
	display: "swap",
	variable: "--font-montserrat",
	fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
	title: "Bao Minh Gia Dinh",
	description: "Bao Minh Gia Dinh",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="vi" className="scroll-smooth">
			<body className={cn("font-sans antialiased", montserrat.variable)}>
				<Layout>{children}</Layout>
			</body>
		</html>
	);
}
