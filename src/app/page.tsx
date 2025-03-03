"use client";

import AgentRecruitment from "@/components/agent-recruitment";
import CompanyIntro from "@/components/company-intro";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import InsuranceHero from "@/components/insurance-hero";
import InsuranceProducts from "@/components/insurance-products";
import Navbar from "@/components/navbar";
import NewsEvents from "@/components/news-events";
import Partners from "@/components/partners";
import PromotionalBanner from "@/components/promotion-banner";
import Testimonials from "@/components/testimonials";

export default function Home() {
	return (
		<>
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
		</>
	);
}
