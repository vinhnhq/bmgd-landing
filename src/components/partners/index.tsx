"use client";

import { Container } from "@/components/layout";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/me/carousel";
import Header from "@/components/me/header";
import { cn } from "@/lib/utils";
import Image from "next/image";

const partners = [
	{ id: 1, name: "FE Credit", logo: "/fe.png" },
	{ id: 2, name: "VPBank", logo: "/vpbank.png" },
	{ id: 3, name: "IZI", logo: "/izi.png" },
	{ id: 4, name: "Saladin", logo: "/saladin.png" },
	{ id: 5, name: "Sasco", logo: "/sasco.png" },

	{ id: 6, name: "FE Credit", logo: "/fe.png" },
	{ id: 7, name: "VPBank", logo: "/vpbank.png" },
	{ id: 8, name: "IZI", logo: "/izi.png" },
	{ id: 9, name: "Saladin", logo: "/saladin.png" },
	{ id: 10, name: "Sasco", logo: "/sasco.png" },
];

export default function Partners() {
	return (
		<Container className="bg-white px-28 py-16 space-y-4">
			<Header title="Đối Tác Bảo Hiểm" description="" />

			<Carousel opts={{ loop: true, align: "start" }} className="-mx-4">
				<CarouselContent className="">
					{partners.map((partner) => (
						<CarouselItem key={partner.id} className="basis-1/5">
							<div className="h-full p-4">
								<div
									className={cn(
										"shadow-elevation rounded-2xl w-full h-full flex items-center justify-center aspect-square cursor-pointer",
										"hover:scale-105 transition-all duration-300",
									)}
								>
									<Image
										src={partner.logo}
										alt={partner.name}
										width={165}
										height={137}
										className="w-3/4 h-auto"
									/>
								</div>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>

				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</Container>
	);
}
