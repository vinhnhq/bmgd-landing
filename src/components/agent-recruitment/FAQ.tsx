"use client";

import { FiChevronDown } from "react-icons/fi";
import { Container } from "@/components/layout";
import { faqFileUrl } from "../../constants";
import Header from "@/components/me/header";

export default function FAQ() {
	return (
		<Container className="px-28 my-16">
			<Header
				title="Câu Hỏi Thường Gặp Về Tuyển Dụng Cộng Tác Viên"
				description="Tải tài liệu bên dưới để đọc và nắm chi tiết về các vấn đề xoay quanh tuyển dụng Cộng Tác Viên"
			/>

			{/* FAQ Card */}
			<div className="max-w-md bg-[#F24444] rounded-xl py-10 px-8">
				<h3 className="text-4xl font-bold text-white mb-8 leading-snug">
					Tải Câu Hỏi
					<br />
					Thường Gặp Về
					<br />
					Tuyển Dụng CTV
				</h3>

				<button
					type="button"
					onClick={() => window.open(faqFileUrl, "_blank")}
					className="flex px-8 bg-white text-[#F24444] rounded-full items-center justify-center gap-2 group transition-all duration-300 hover:scale-105"
				>
					<span className="text-xl font-bold my-4 uppercase">xem tài liệu</span>
					<FiChevronDown className="w-8 h-8 group-hover:rotate-180 transition-all duration-300" />
				</button>
			</div>
		</Container>
	);
}
