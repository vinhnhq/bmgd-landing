"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import toast from "react-hot-toast";
import { FiCheck } from "react-icons/fi";
import { IoShareSocialOutline } from "react-icons/io5";

async function handleShare() {
	try {
		await navigator.clipboard.writeText(window.location.href);

		toast.success("Đã sao chép liên kết", {
			className: "bg-white text-black font-medium shadow-elevation !rounded-full",
			icon: (
				<div className="bg-brand-green rounded-full w-6 h-6 flex items-center justify-center">
					<FiCheck className="w-4 h-4 text-white" />
				</div>
			),
			position: "top-center",
			duration: 5000,
		});
	} catch (err) {
		toast.error("Không thể sao chép liên kết");
	}
}

export default function ProductCard({
	title,
	category,
	description,
	image,
	status,
	buttonText,
	tag,
	isActive,
}: {
	title: string;
	category: string;
	description: string;
	image: string;
	status: string;
	buttonText: string;
	tag: string;
	isActive: boolean;
}) {
	return (
		<div className="h-full">
			<div
				className={cn(
					"bg-white rounded-2xl overflow-hidden h-full cursor-pointer group flex flex-col justify-between p-6 gap-4",
					"hover:bg-brand-redPrimary transition-all duration-300 ",
				)}
			>
				<div className="flex flex-col gap-4">
					<div className="w-full">
						<Image
							src={image}
							width={0}
							height={0}
							alt={title}
							className="w-full h-auto aspect-auto rounded-2xl"
							priority
						/>
					</div>

					<div className="flex justify-between items-center">
						<span className="bg-brand-green text-white text-base font-bold px-4 py-1.5">{tag}</span>
						<button
							type="button"
							onClick={handleShare}
							className="flex items-center justify-center text-black group-hover:text-white"
							aria-label="copy link"
						>
							<IoShareSocialOutline className="h-6 w-6" />
						</button>
					</div>

					<div className="flex flex-col gap-4">
						<h3 className="font-bold text-3xl text-black group-hover:text-white">{title}</h3>
						<p className="font-medium text-base text-black group-hover:text-white text-justify">{description}</p>
					</div>
				</div>

				<button
					type="button"
					className={cn(
						"w-full py-2 text-center font-bold text-lg rounded-xl",
						isActive
							? "bg-brand-redPrimary text-white group-hover:bg-white group-hover:text-brand-redPrimary"
							: "bg-text-secondary text-white group-hover:bg-white group-hover:text-text-secondary",
					)}
				>
					{buttonText}
				</button>
			</div>
		</div>
	);
}
