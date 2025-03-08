import { Container } from "@/components/layout";
import Image from "next/image";
import Menu from "./Menu";

export default function InsuranceHero() {
	return (
		<div className="relative h-auto overflow-y-auto">
			<div className="absolute inset-0 bg-bg-red bg-opacity-[0.42]" />
			<div className="absolute inset-0">
				<Image
					src={"/light.png"}
					alt="light background with red overlay"
					width={1440}
					height={553}
					className="w-full h-full mix-blend-screen object-cover object-center"
				/>
			</div>

			<Container className="relative h-full px-28 py-8">
				<div className="w-full max-w-xl bg-white shadow-elevation rounded-3xl px-6 py-4">
					<Menu />
				</div>
			</Container>
		</div>
	);
}
