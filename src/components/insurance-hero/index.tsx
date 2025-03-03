import { Container } from "@/components/layout";
import Menu from "./Menu";
import banner from "../../../public/banner.png";

const InsuranceHero = () => {
	return (
		<section className="relative w-full min-h-[737px] overflow-y-auto">
			{/* Background overlay */}
			<div className="absolute inset-0" style={{ backgroundColor: "rgba(255, 59, 59, 0.42)" }} />

			{/* Background image */}
			<div
				className="absolute inset-0 mix-blend-screen bg-cover bg-center"
				style={{ backgroundImage: `url(${banner})` }}
			/>

			<Container className="relative h-full px-28">
				<div className="flex h-full py-10">
					<div className="w-full max-w-[531px] bg-white shadow-md shadow-slate-900/40 rounded-3xl p-6">
						<Menu />
					</div>
				</div>
			</Container>
		</section>
	);
};

export default InsuranceHero;
