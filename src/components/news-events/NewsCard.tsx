import Image from "next/image";

export default function NewsCard({
	title,
	date,
	imageUrl,
}: {
	title: string;
	date: string;
	imageUrl: string;
}) {
	return (
		<div className="rounded-2xl shadow-elevation h-full flex flex-col justify-between overflow-hidden">
			<Image src={imageUrl} width={0} height={0} alt={title} className="w-full h-auto" />

			<div className="bg-white hover:bg-brand-redPrimary transition-all duration-300 h-full cursor-pointer group p-4 flex flex-col justify-between">
				<h3 className="text-base font-bold text-black group-hover:text-white uppercase">{title}</h3>
				<div className="flex items-center gap-2 ml-4">
					<div className="w-2 h-2 rounded-full bg-black group-hover:bg-white" />
					<span className="text-sm font-semibold italic text-text-third group-hover:text-white">{date}</span>
				</div>
			</div>
		</div>
	);
}
