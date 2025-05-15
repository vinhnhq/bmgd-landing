import AgentRecruitment from "@/components/agent-recruitment";
import CompanyIntro from "@/components/company-intro";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import InsuranceHero from "@/components/insurance-hero";
import InsuranceProducts from "@/components/insurance-products";
import { Layout } from "@/components/layout";
import Navbar from "@/components/navbar";
import NewsEvents from "@/components/news-events";
import Partners from "@/components/partners";
import PromotionalBanner from "@/components/promotion-banner";
import Testimonials from "@/components/testimonials";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Bảo Minh Gia Định",
	description: "Bảo Minh Gia Định",
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
	authors: [{ name: "Bảo Minh Gia Định" }],
};

export default async function Home() {
	return (
		<Layout>
			<PromotionalBanner />
			<Navbar />
			<InsuranceHero />
			<InsuranceProducts />
			<CompanyIntro />

			<section id="partners">
				<Partners />
			</section>

			<AgentRecruitment />

			<section id="news">
				<NewsEvents />
			</section>

			<Testimonials />

			<section id="contact">
				<Contact />
			</section>

			<Footer />
		</Layout>
	);
}
