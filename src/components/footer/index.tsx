import { FooterContactNowLink } from "@/components/contact/FooterContactNowLink";
import { agentRecruitmentUrl, homePageUrl, privacyPolicyUrl, productShowcaseUrl, termsOfServiceUrl } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import type { ComponentType } from "react";
import { FaFacebookF, FaLinkedinIn, FaTiktok, FaYoutube } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const logoUrl = "/logo.png";

const introLinks = [
	{ id: "about-us", href: homePageUrl, text: "Về Chúng Tôi" },
	{ id: "partners", href: `${homePageUrl}#partners`, text: "Đối Tác Bảo Hiểm" },
	{ id: "recruitment", href: agentRecruitmentUrl, text: "Tuyển Dụng CTV" },
	{ id: "news", href: `${homePageUrl}#news`, text: "Tin Tức & Sự Kiện" },
];

const productLinks = [{ id: "product-showcase", href: productShowcaseUrl, text: "Trưng Bày Bảo Hiểm" }];

const docLinks = [
	{ id: "privacy-policy", href: privacyPolicyUrl, text: "Chính Sách Bảo Mật" },
	{ id: "terms-of-service", href: termsOfServiceUrl, text: "Điều Khoản & Điều Kiện" },
];

export default function Footer() {
	return (
		<footer className="bg-brand-gray px-28">
			<div className="grid grid-cols-10 gap-4 py-16">
				<div className="col-span-2 space-y-8">
					<h4 className="text-xl font-bold">Giới Thiệu</h4>
					<ul className="space-y-4 text-base font-normal">
						{introLinks.map((link) => (
							<Link
								key={link.id}
								href={link.href}
								className="flex items-center gap-4 group hover:scale-105 duration-300"
								scroll={true}
							>
								{link.text}
							</Link>
						))}
					</ul>
				</div>

				<div className="col-span-2 space-y-8">
					<h4 className="text-xl font-bold">Sản Phẩm</h4>
					<ul className="space-y-4 text-base font-normal">
						{productLinks.map((link) => (
							<FooterLink key={link.id} href={link.href} text={link.text} />
						))}
						<FooterContactNowLink />
					</ul>
				</div>

				<div className="col-span-2 space-y-8">
					<h4 className="text-xl font-bold">Tài Liệu Bổ Sung</h4>
					<ul className="space-y-4 text-base font-normal">
						{docLinks.map((link) => (
							<FooterLink key={link.id} href={link.href} text={link.text} />
						))}
					</ul>
				</div>

				<div className="col-span-1" />

				<div className="col-span-3">
					<div className={"flex flex-col gap-8"}>
						<div className="flex items-center gap-4 justify-center">
							<Image src={logoUrl} width={281} height={351} alt="bmgd logo" className="w-8 h-auto aspect-auto" />
							<h4 className="text-xl font-bold text-brand-redSecondary">Bảo Minh Gia Định</h4>
						</div>

						<div className="space-y-4">
							<LinkButton
								href="https://maps.google.com/?q=778B+đường+Nguyễn+Kiệm,+Phường+4,+Quận+Phú+Nhuận,+TP.+Hồ+Chí+Minh"
								text="778B đường Nguyễn Kiệm, Phường 4, Quận Phú Nhuận, TP. Hồ Chí Minh"
								icon={MdLocationOn}
								className="flex items-center gap-4 group hover:scale-105 duration-300"
							/>

							<LinkButton
								href="tel:0785258686"
								text="(078) 5258 686"
								icon={MdPhone}
								className="flex items-center gap-4 group hover:scale-105 duration-300"
							/>

							<LinkButton
								href="mailto:BMgiadinh.noreply@baominh.com.vn"
								text="BMgiadinh.noreply@baominh.com.vn"
								icon={MdEmail}
								className="flex items-center gap-4 group hover:scale-105 duration-300"
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="h-0.5 bg-black -mx-28" />

			<div className="flex items-center justify-between py-2">
				<div className="flex items-center gap-4">
					<Image src={logoUrl} width={281} height={351} alt="bmgd logo" className="w-12 h-auto aspect-auto" />
					<p className="text-base font-normal">
						Copyright © {new Date().getFullYear()} Bảo Hiểm Bảo Minh Gia Định | All Rights Reserved
					</p>
				</div>

				<div className="flex gap-4">
					<SocialLinkButton href="https://facebook.com" icon={FaFacebookF} />
					<SocialLinkButton href="https://tiktok.com" icon={FaTiktok} />
					<SocialLinkButton href="https://youtube.com" icon={FaYoutube} />
					<SocialLinkButton href="https://linkedin.com" icon={FaLinkedinIn} />
				</div>
			</div>
		</footer>
	);
}

function LinkButton({
	href,
	text,
	icon: Icon,
	className,
}: { href: string; text: string; icon: ComponentType<{ className: string }>; className?: string }) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className={`flex items-center gap-4 group hover:scale-105 duration-300 ${className}`}
		>
			<Icon className="w-8 h-8 shrink-0" />
			{text}
		</a>
	);
}

const FooterLink = ({
	href,
	target,
	rel,
	text,
	className,
}: {
	href: string;
	target?: string;
	rel?: string;
	text: string;
	className?: string;
}) => (
	<a
		href={href}
		target={target}
		rel={rel}
		className={`flex items-center gap-4 group hover:scale-105 duration-300 ${className}`}
	>
		{text}
	</a>
);

function SocialLinkButton({
	href,
	icon: Icon,
}: {
	href: string;
	icon: ComponentType<{
		className: string;
	}>;
}) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="
        w-8 h-8 text-white bg-brand-redPrimary rounded flex items-center justify-center
        hover:bg-white hover:shadow-elevation hover:text-brand-redPrimary
        transition-all duration-300"
		>
			<Icon className="w-4 h-4" />
		</a>
	);
}
