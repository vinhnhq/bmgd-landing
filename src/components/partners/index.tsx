import Image from "next/image";
import Header from "@/components/me/header";
import { Carousel, type CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Container } from "@/components/layout";

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

const Partners = () => {
	const [api, setApi] = useState<CarouselApi>();

	useEffect(() => {
		if (!api) return;

		const timer = setInterval(() => {
			api.scrollPrev();
		}, 4000);

		return () => clearInterval(timer);
	}, [api]);

	return (
		<Container className="bg-white px-28 my-16">
			<Header title="Đối Tác Bảo Hiểm" description="" />

			<div className="relative -mx-16">
				<Carousel
					opts={{
						align: "start",
						loop: true,
					}}
					setApi={setApi}
					className="w-full"
				>
					<div className="px-16">
						<CarouselContent className="-ml-2">
							{partners.map((partner) => (
								<CarouselItem key={partner.id} className="pl-2 basis-1/5">
									<div className="p-1">
										<div className="max-w-[50%] mx-auto">
											<div className="rounded-xl shadow-md shadow-slate-900/40 overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-[#F24444]/40">
												<div className="aspect-square bg-white p-2 group-hover:scale-105 transition-all duration-300">
													<Image
														src={partner.logo}
														alt={partner.name}
														width={100}
														height={100}
														className="w-full h-full object-contain"
													/>
												</div>
											</div>
										</div>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
					</div>
					<button
						type="button"
						onClick={() => api?.scrollNext()}
						className="absolute -left-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-md shadow-slate-900/40 flex items-center justify-center hover:bg-[#F24444] hover:text-white transition-colors"
						aria-label="Previous slide"
					>
						<IoIosArrowBack className="h-4 w-4" />
					</button>
					<button
						type="button"
						onClick={() => api?.scrollPrev()}
						className="absolute -right-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-md shadow-slate-900/40 flex items-center justify-center hover:bg-[#F24444] hover:text-white transition-colors"
						aria-label="Next slide"
					>
						<IoIosArrowForward className="h-4 w-4" />
					</button>
				</Carousel>
			</div>
		</Container>
	);
};

export default Partners;
