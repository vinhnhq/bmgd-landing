"use client";

import { Container } from "@/components/layout";
import type { FC, ReactNode } from "react";
import Image from "next/image";
import { useVisitCount } from "./useVisitCount";

interface StatisticsCounterProps {
	totalPartners: number;
}

interface CounterCardProps {
	title: string;
	value: number;
	icon?: ReactNode;
	digitCount: number;
}

const CounterCard: FC<CounterCardProps> = ({ title, value, icon, digitCount }) => {
	const safeValue = Math.min(value, 10 ** digitCount - 1);
	const digits = safeValue.toString().padStart(digitCount, "0").split("");

	return (
		<div className="flex-1 bg-[#F24444] rounded-lg shadow-elevation flex items-center p-4">
			{icon && <div className="w-12 bg-white rounded-md flex items-center justify-center mr-2">{icon}</div>}
			<span className="text-white text-[22px] font-extrabold font-montserrat leading-[27px] mr-auto">{title}</span>
			<div className="flex gap-2">
				{digits.map((digit, i) => (
					<div
						key={`${title}-digit-${i + 1}`}
						className="w-9 h-12 bg-white rounded-lg flex items-center justify-center"
					>
						<span className="text-[25px] font-bold font-montserrat text-black">{digit}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default function StatisticsCounter({ totalPartners }: StatisticsCounterProps) {
	const visitCount = useVisitCount();

	return (
		<Container className="bg-white px-28 my-16">
			<div className="grid grid-cols-2 gap-8">
				<CounterCard title="Lượt truy cập Website" value={visitCount} digitCount={6} />
				<CounterCard
					title="Tổng Số Đại Lý Hợp Tác"
					value={totalPartners}
					digitCount={4}
					icon={<Image src={"/handshake-2.svg"} width={50} height={52} alt="Partner Icon" className="w-full h-auto" />}
				/>
			</div>
		</Container>
	);
}
