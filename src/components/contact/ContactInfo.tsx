import { MdEmail, MdPhone } from "react-icons/md";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ConditionalRenderer } from "@/components/utils";
const ContactItem = ({
	href,
	icon,
	title,
	description,
	srText,
	isExternal,
}: {
	href: string;
	icon: React.ReactNode;
	title: string;
	description: string;
	srText: string;
	isExternal?: boolean;
}) => (
	<li>
		<a
			href={href}
			aria-label={srText}
			aria-describedby={srText}
			target={isExternal ? "_blank" : "_self"}
			rel={isExternal ? "noopener noreferrer" : ""}
			className={cn("flex items-center gap-4 group outline-none", "hover:scale-105 transition-all duration-300")}
		>
			<div className={"w-12 h-12 flex items-center justify-center rounded-lg shadow-elevation"}>{icon}</div>
			<div>
				<h4 className="text-xl font-semibold">{title}</h4>
				<p className="text-base font-normal">{description}</p>
			</div>
		</a>
	</li>
);

const ContactInfo = ({ hasZalo = true }: { hasZalo?: boolean }) => {
	return (
		<div className="space-y-6 py-[1px]">
			<h3 className="text-3xl font-bold">Thông tin liên hệ</h3>

			<p className="text-lg font-normal">
				Lưu ý thời gian liên hệ: Thứ 2 - Thứ 6 (Sáng: 8:00 - 12:00, Chiều: 13h30 - 17h)
			</p>

			<ul className="space-y-4 list-none">
				<ContactItem
					href="mailto:BMgiadinh.noreply@baominh.com.vn"
					icon={<MdEmail className="w-10 h-10" />}
					title="Email liên hệ"
					description="BMgiadinh.noreply@baominh.com.vn"
					srText="Gửi email cho chúng tôi"
				/>

				<ContactItem
					href="tel:0785258686"
					icon={<MdPhone className="w-10 h-10" />}
					title="Hotline"
					description="078 5258 686"
					srText="Gọi cho chúng tôi"
				/>

				<ConditionalRenderer
					condition={hasZalo}
					component={
						<ContactItem
							href="https://zalo.me/3824695044861019950"
							icon={<Image src="/zalo.svg" alt="zalo icon" width={0} height={0} className="w-10 h-auto" />}
							title="Zalo Liên Hệ"
							description="Bảo Minh Gia Định"
							srText="Mở Zalo để liên hệ (mở trong tab mới)"
							isExternal
						/>
					}
					fallback={null}
				/>
			</ul>
		</div>
	);
};

export default ContactInfo;
