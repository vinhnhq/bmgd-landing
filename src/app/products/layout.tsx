import { Layout } from "@/components/layout";
import { redirect } from "next/navigation";

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
	if (process.env.RELEASE_PHASE === "1") {
		redirect("/");
	}

	return <Layout>{children}</Layout>;
}
