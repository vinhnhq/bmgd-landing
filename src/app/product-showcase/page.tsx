"use client";

import Navbar from "@/components/navbar";
import PromotionalBanner from "@/components/promotion-banner";
import SupportPolicy from "@/components/agent-recruitment/SupportPolicy";
import AdvancedFilterForm from "@/components/product-showcase/AdvancedFilterForm";
import Banner from "@/components/product-showcase/Banner";
import ProductList from "@/components/product-showcase/ProductList";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";

export default function ProductShowcase() {
	return (
		<>
			<Toaster />
			<PromotionalBanner />
			<Navbar />
			<Banner />
			<AdvancedFilterForm />
			<ProductList />
			<SupportPolicy />
			<Footer />
		</>
	);
}
