import { IoShareSocialOutline } from "react-icons/io5";
import { FiCheck } from "react-icons/fi";
import toast from "react-hot-toast";

interface ProductCardProps {
	title: string;
	category: string;
	description: string;
	image: string;
	status: string;
	buttonText: string;
	tag: string;
}

const ProductCard = ({ title, description, image, buttonText, tag }: ProductCardProps) => {
	const handleShare = async () => {
		try {
			await navigator.clipboard.writeText(window.location.href);
			toast.success("Đã sao chép liên kết", {
				style: {
					background: "#fff",
					color: "#000",
					fontWeight: 500,
					fontSize: "16px",
					borderRadius: "9999px",
					boxShadow: "0px 3px 6px rgba(0,0,0,0.16), 0px 3px 6px rgba(0,0,0,0.23)",
				},
				icon: (
					<div className="bg-[#8CC166] p-1 rounded-full">
						<FiCheck className="w-5 h-5 text-white" />
					</div>
				),
				position: "top-center",
				duration: 4000,
			});
		} catch (err) {
			toast.error("Không thể sao chép liên kết");
		}
	};

	return (
		<div className="h-full">
			<div className="bg-white border border-slate-900/40 shadow-elevation rounded-2xl overflow-hidden group h-full transition-colors duration-300 hover:bg-[#F24444] cursor-pointer">
				<div className="p-6 flex flex-col h-full">
					<div className="relative flex-shrink-0">
						<img src={image} alt={title} className="w-full h-[190.87px] object-cover rounded-2xl" />
					</div>

					<div className="flex justify-between items-center mt-4 flex-shrink-0">
						<span className="bg-[#8CC166] text-white text-[15px] font-bold px-4 py-1.5">{tag}</span>
						<button
							type="button"
							onClick={handleShare}
							className="w-8 h-8 flex items-center justify-center text-[#353E5C] group-hover:text-white transition-colors cursor-pointer hover:text-[#F24444] group-hover:hover:text-white/80"
							aria-label="Share"
						>
							<IoShareSocialOutline className="h-6 w-6" />
						</button>
					</div>

					<div className="flex flex-col flex-grow mt-4">
						<h3 className="font-bold text-[30px] leading-[40px] text-black group-hover:text-white transition-colors mb-4">
							{title}
						</h3>
						<p className="font-medium text-[15px] leading-[22px] text-black group-hover:text-white transition-colors text-justify">
							{description}
						</p>
					</div>

					<button
						type="button"
						className={`w-full h-[39.42px] text-center font-extrabold text-[18px] rounded-[10px] transition-colors duration-300 mt-6 ${
							buttonText === "TÌM HIỂU THÊM"
								? "bg-[#F24444] text-white group-hover:bg-white group-hover:text-[#F24444]"
								: "bg-[#999999] text-white group-hover:bg-white group-hover:text-[#999999]"
						}`}
					>
						{buttonText}
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
