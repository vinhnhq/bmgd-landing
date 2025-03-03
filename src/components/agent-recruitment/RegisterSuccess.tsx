import { FiCheck } from "react-icons/fi";
import Image from "next/image";
interface SuccessProps {
	onClose?: () => void;
}

export const RegisterSuccess = () => {
	return (
		<div className="h-full flex flex-col">
			<div className="flex-1 flex flex-col items-center justify-center space-y-4">
				<div className="w-12 h-12 rounded-full bg-[#F24444] flex items-center justify-center">
					<FiCheck className="w-8 h-8 text-white stroke-2" />
				</div>

				<h3 className="font-bold text-xl text-black">Gửi thành công!</h3>

				<p className="text-base text-center max-w-[68%]">
					Thông tin của quý khách đã được ghi nhận. Chúng tôi sẽ liên hệ lại trong vòng 48 giờ. Cảm ơn quý khách!
				</p>
			</div>
		</div>
	);
};

// New dialog success component
export const DialogSuccess = ({ onClose }: SuccessProps) => {
	return (
		<div className="relative flex flex-col items-center justify-center py-12">
			{/* Logo */}
			<div className="absolute top-0 right-0 w-16 h-16">
				<Image src={"/logo.png"} width={64} height={64} alt="Bảo Minh Logo" className="w-full h-full object-contain" />
			</div>

			{/* Success Icon */}
			<div className="w-16 h-16 bg-[#F24444] rounded-full flex items-center justify-center mb-6">
				<FiCheck className="w-8 h-8 text-white" />
			</div>

			{/* Title */}
			<h3 className="text-2xl font-bold text-black mb-4">Gửi thành công!</h3>

			{/* Message */}
			<p className="text-center text-gray-600 mb-8 max-w-[80%]">
				Thông tin của quý khách đã được ghi nhận. Chúng tôi sẽ liên hệ lại trong vòng 48 giờ. Cảm ơn quý khách!
			</p>

			{/* Button */}
			{onClose && (
				<button
					type="button"
					onClick={onClose}
					className="px-12 py-2 bg-[#F24444] text-white
						rounded-full shadow-elevation hover:scale-105
						transition-all duration-200 focus-visible:ring-0"
				>
					<span className="text-base font-semibold">OK</span>
				</button>
			)}
		</div>
	);
};
