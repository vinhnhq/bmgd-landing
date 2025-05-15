import SupportPolicy from "@/components/agent-recruitment/SupportPolicy";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import AdvancedFilterForm from "@/components/product-showcase/AdvancedFilterForm";
import Banner from "@/components/product-showcase/Banner";
import ProductList from "@/components/product-showcase/ProductList";
import PromotionalBanner from "@/components/promotion-banner";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { trackPageVisit } from "../actions/visit";
import { Loader2 } from "lucide-react";

export default async function ProductShowcase() {
	await trackPageVisit("/product-showcase");

	return (
		<>
			<PromotionalBanner />
			<Navbar />
			<Banner />

			<Suspense fallback={<Loader2 className="w-10 h-10 animate-spin" />}>
				<AdvancedFilterForm />
			</Suspense>

			<Suspense fallback={<Loader2 className="w-10 h-10 animate-spin" />}>
				<ProductList />
			</Suspense>


		</>
	);
}
