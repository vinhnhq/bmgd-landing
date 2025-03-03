import { Container } from "@/components/layout";
import Image from "next/image";

export default function Banner() {
	return (
		<Container className="relative bg-[#F24444]">
			<Image
				src={"/cac-san-pham-bao-hiem-banner.png"}
				width={1920}
				height={1080}
				alt="Các Sản Phẩm Bảo Hiểm"
				className="w-full mix-blend-screen"
			/>

			<div className="absolute inset-0">
				<div className="flex h-5/6 justify-center items-end">
					<h1 className="font-bold text-8xl text-white text-center">Các Sản Phẩm Bảo Hiểm</h1>
				</div>
			</div>
		</Container>
	);
}
