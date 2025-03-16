"use client";

import Navbar from "@/components/navbar";
import PromotionalBanner from "@/components/promotion-banner";
import SupportPolicy from "@/components/agent-recruitment/SupportPolicy";
import AdvancedFilterForm from "@/components/product-showcase/AdvancedFilterForm";
import Banner from "@/components/product-showcase/Banner";
import ProductList from "@/components/product-showcase/ProductList";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import { Suspense } from "react";

export default function ProductShowcase() {
	return (
		<>
			<Toaster />
			<PromotionalBanner />
			<Navbar />
			<Banner />

			<Suspense fallback={<span />}>
				<AdvancedFilterForm />
			</Suspense>

			<Suspense fallback={<span />}>
				<ProductList />
			</Suspense>

			<SupportPolicy />
			<Footer />
		</>
	);
}
