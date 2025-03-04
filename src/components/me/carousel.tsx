import { cn } from "@/lib/utils";
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import * as React from "react";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
	opts?: CarouselOptions;
	plugins?: CarouselPlugin;
	orientation?: "horizontal" | "vertical";
	setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
	carouselRef: ReturnType<typeof useEmblaCarousel>[0];
	api: ReturnType<typeof useEmblaCarousel>[1];
	scrollPrev: () => void;
	scrollNext: () => void;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
	const context = React.useContext(CarouselContext);

	if (!context) {
		throw new Error("useCarousel must be used within a <Carousel />");
	}

	return context;
}

const Carousel = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & CarouselProps>(
	({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
		const [carouselRef, api] = useEmblaCarousel(
			{
				...opts,
				axis: orientation === "horizontal" ? "x" : "y",
			},
			plugins,
		);

		const onSelect = React.useCallback((api: CarouselApi) => {
			if (!api) {
				return;
			}
		}, []);

		const scrollPrev = React.useCallback(() => {
			api?.scrollNext();
		}, [api]);

		const scrollNext = React.useCallback(() => {
			api?.scrollPrev();
		}, [api]);

		const handleKeyDown = React.useCallback(
			(event: React.KeyboardEvent<HTMLDivElement>) => {
				if (event.key === "ArrowLeft") {
					event.preventDefault();
					scrollPrev();
				} else if (event.key === "ArrowRight") {
					event.preventDefault();
					scrollNext();
				}
			},
			[scrollPrev, scrollNext],
		);

		React.useEffect(() => {
			if (!api || !setApi) {
				return;
			}

			setApi(api);
		}, [api, setApi]);

		React.useEffect(() => {
			if (!api) {
				return;
			}

			onSelect(api);
			api.on("reInit", onSelect);
			api.on("select", onSelect);

			return () => {
				api?.off("select", onSelect);
			};
		}, [api, onSelect]);

		React.useEffect(() => {
			if (!api) {
				return;
			}

			const timer = setInterval(() => {
				scrollNext();
			}, 5000);

			return () => clearInterval(timer);
		}, [api, scrollNext]);

		return (
			<CarouselContext.Provider
				value={{
					carouselRef,
					api: api,
					opts,
					orientation: orientation || "horizontal",
					scrollPrev,
					scrollNext,
				}}
			>
				<section
					ref={ref}
					onKeyDownCapture={handleKeyDown}
					className={cn("relative", className)}
					aria-roledescription="carousel"
					{...props}
				>
					{children}
				</section>
			</CarouselContext.Provider>
		);
	},
);

Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => {
		const { carouselRef } = useCarousel();

		return (
			<div ref={carouselRef} className="overflow-hidden">
				<div ref={ref} className={cn("flex p-0 bg-red-0", className)} {...props} />
			</div>
		);
	},
);

CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => {
		return (
			<div
				ref={ref}
				role="group"
				aria-roledescription="slide"
				className={cn("min-w-0 shrink-0 grow-0 basis-full", className)}
				{...props}
			/>
		);
	},
);

CarouselItem.displayName = "CarouselItem";

const CarouselPrevious = React.forwardRef<HTMLButtonElement, React.ComponentProps<"button">>(
	({ className, ...props }, ref) => {
		const { orientation, scrollPrev } = useCarousel();

		return (
			<button
				ref={ref}
				type="button"
				className={cn(
					"absolute h-8 w-8 rounded-full bg-white shadow-elevation -left-12 top-1/2 -translate-y-1/2 flex items-center justify-center",
					"hover:bg-brand-redPrimary hover:text-white transition-all duration-300",
					className,
				)}
				onClick={scrollPrev}
				{...props}
			>
				<ArrowLeft className="h-4 w-4" />
				<span className="sr-only">previous slide</span>
			</button>
		);
	},
);

CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = React.forwardRef<HTMLButtonElement, React.ComponentProps<"button">>(
	({ className, ...props }, ref) => {
		const { orientation, scrollNext } = useCarousel();

		return (
			<button
				ref={ref}
				type="button"
				className={cn(
					"absolute h-8 w-8 rounded-full bg-white shadow-elevation -right-12 top-1/2 -translate-y-1/2 flex items-center justify-center",
					"hover:bg-brand-redPrimary hover:text-white transition-all duration-300",
					className,
				)}
				onClick={scrollNext}
				{...props}
			>
				<ArrowRight className="h-4 w-4" />
				<span className="sr-only">next slide</span>
			</button>
		);
	},
);

CarouselNext.displayName = "CarouselNext";

export { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi };
