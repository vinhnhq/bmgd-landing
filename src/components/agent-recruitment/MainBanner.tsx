import { Container } from "@/components/layout";
import { FiArrowRight } from "react-icons/fi";
import { useState } from "react";
import { ConsultationDialog } from "./ConsultationDialog";
import Image from "next/image";

interface SloganProps {
	icon: string;
	text: string;
}

const Slogan = ({ icon, text }: SloganProps) => (
	<div className="relative mt-0">
		<div className="absolute -left-8 top-1/2 -translate-y-1/2 z-10">
			<div className="w-[64px] h-[64px] rounded-full flex items-center justify-center flex-shrink-0">
				<div className="w-[64px] h-[64px] relative">
					<div className="absolute inset-0 flex items-center justify-center">
						<div className="w-[64px] h-[64px] bg-[#F24444] rounded-full flex items-center justify-center">
							<Image src={icon} width={64} height={64} alt="" className="w-full object-contain" aria-hidden="true" />
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="bg-[#F24444] rounded-full py-3 pl-14 pr-8">
			<span className="text-[20px] leading-[24px] font-bold text-white">{text}</span>
		</div>
	</div>
);

export const MainBanner: React.FC = () => {
	const [showConsultationDialog, setShowConsultationDialog] = useState(false);

	return (
		<Container>
			<div className="relative bg-[#ff3b3b]">
				{/* Background image */}
				<Image src={"/light.png"} width={1920} height={1080} alt="Background" className="w-full mix-blend-screen" />

				{/* Content */}
				<div className="absolute inset-0">
					<div className="flex h-full">
						{/* Left column - Image */}
						<div className="flex-1 flex items-end">
							<Image
								src={"/group-asian-business-people-posing-white-background.png"}
								width={1920}
								height={1080}
								alt="Business Team"
								className="w-full object-contain"
							/>
						</div>

						{/* Right column - Text content */}
						<div className="flex-1 flex flex-col justify-between pr-28 pt-28 pb-12">
							{/* Top content */}
							<div className="flex flex-col items-end">
								<h2 className="text-[60px] leading-[60px] font-extrabold font-montserrat text-black text-right uppercase tracking-[0.01em]">
									Tuyển Dụng
								</h2>

								<h2 className="text-[60px] font-extrabold font-montserrat tracking-wider text-white text-right uppercase [-webkit-text-stroke:6px_black] [text-stroke:6px black] [paint-order:stroke]">
									Cộng Tác Viên
								</h2>

								{/* Slogan */}
								<Slogan icon={"/handshake.svg"} text="Khởi Đầu Không Vốn, Lợi Nhuận Vô Hạn" />
							</div>

							{/* Bottom button */}
							<button
								type="button"
								onClick={() => setShowConsultationDialog(true)}
								className="ml-auto bg-black text-white rounded-md px-6 py-3 font-montserrat font-extrabold text-[18px] flex items-center gap-2 transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 group"
							>
								<span>Tư Vấn Ngay</span>
								<FiArrowRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
							</button>
						</div>
					</div>
				</div>
			</div>

			<ConsultationDialog open={showConsultationDialog} onOpenChange={setShowConsultationDialog} />
		</Container>
	);
};

export default MainBanner;
