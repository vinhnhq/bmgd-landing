import Image from "next/image";

export default function FeaturedNews({
	title,
	date,
	description,
	imageUrl,
}: {
	title: string;
	date: string;
	description: string;
	imageUrl: string;
}) {
	return (
		<div className="rounded-2xl shadow-elevation overflow-hidden h-full">
			<Image src={imageUrl} width={0} height={0} alt={title} className="w-full h-auto" />

			<div className="h-2 w-full bg-brand-redPrimary" />

			<div className="flex flex-col py-8 px-4 space-y-4">
				<h3 className="text-2xl tracking-tight font-bold text-black">{title}</h3>
				<div className="flex items-center gap-2 ml-4">
					<div className="w-2 h-2 rounded-full bg-black" />
					<span className="text-sm font-semibold italic text-text-third">{date}</span>
				</div>
				<p className="text-base text-black">{description}</p>
			</div>
		</div>
	);
}
