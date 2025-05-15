import FAQ from "@/components/agent-recruitment/FAQ";
import MainBanner from "@/components/agent-recruitment/MainBanner";
import RegisterForm from "@/components/agent-recruitment/RegisterForm";
import StatisticsCounter from "@/components/agent-recruitment/statistic-counter";
import Steps from "@/components/agent-recruitment/Steps";
import SupportPolicy from "@/components/agent-recruitment/SupportPolicy";
import Navbar from "@/components/navbar";
import NewsEvents from "@/components/news-events";
import Partners from "@/components/partners";
import PromotionalBanner from "@/components/promotion-banner";
import Footer from "@/components/footer";
import { trackPageVisit } from "../actions/visit";

export default async function AgentRecruitment() {
	await trackPageVisit("/agent-recruitment");

	return (
		<>
			<PromotionalBanner />
			<Navbar />
			<MainBanner />
			<StatisticsCounter totalPartners={4} />
			<SupportPolicy />
			<Steps />
			<NewsEvents />
			<Partners />
			<FAQ />
			<RegisterForm />
			<Footer />
		</>
	);
}
