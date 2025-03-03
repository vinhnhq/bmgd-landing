import "@/app/globals.css";
import { Layout } from "@/components/layout";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
	subsets: ["latin", "latin-ext"],
	display: "swap",
	variable: "--font-montserrat",
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
		<html lang="vi">
			<body className={cn("font-sans antialiased", montserrat.variable)}>
				<Layout>{children}</Layout>
			</body>
		</html>
	);
}
