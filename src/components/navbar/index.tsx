"use client";

import Image from "next/image";
import { Container } from "@/components/layout";
import { FiChevronRight } from "react-icons/fi";
import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { agentRecruitmentUrl, homePageUrl, productShowcaseUrl } from "@/constants";

// Move these outside component
const navLinkBase = "text-3xl font-bold transition-colors";
const navLinkPrimary = `${navLinkBase} text-[#D71D22] hover:opacity-80`;
const navLinkDefault = `${navLinkBase} text-black hover:text-[#D71D22] cursor-pointer`;

// Memoize the button classes
const useButtonClasses = () => {
	return useMemo(
		() => (isActive: boolean) =>
			`flex items-center text-2xl font-medium transition-all w-full text-left px-4 py-2 rounded-lg group/item ${
				isActive
					? "bg-[#F24444] text-white shadow-elevation"
					: "hover:bg-[#F24444] hover:text-white hover:shadow-elevation"
			}`,
		[],
	);
};

const insuranceProducts = [
	{
		title: "Bảo Hiểm Con Người",
		href: "/san-pham/bao-hiem-con-nguoi",
		children: [
			{
				title: "Bảo Hiểm Du Lịch Quốc Tế",
				href: "/san-pham/bao-hiem-du-lich-quoc-te",
			},
			{
				title: "Bảo Hiểm Sức Khoẻ Toàn Diện",
				href: "/san-pham/bao-hiem-suc-khoe-toan-dien",
			},
			{
				title: "Bảo Hiểm Sức Khoẻ Gia Đình",
				href: "/san-pham/bao-hiem-suc-khoe-gia-dinh",
			},
		],
	},
	{
		title: "Bảo Hiểm Xe Cơ Giới",
		href: "/san-pham/bao-hiem-xe-co-gioi",
	},
	{
		title: "Bảo Hiểm Tài Sản",
		href: "/san-pham/bao-hiem-tai-san",
	},
	{
		title: "Bảo Hiểm Hàng Hải",
		href: "/san-pham/bao-hiem-hang-hai",
	},
	{
		title: "Bảo Hiểm Hàng Không",
		href: "/san-pham/bao-hiem-hang-khong",
	},
	{
		title: "Bảo Hiểm Nông Nghiệp",
		href: "/san-pham/bao-hiem-nong-nghiep",
	},
];

const compensationItems = [
	{
		title: "Bảo Hiểm Con Người",
		href: "/boi-thuong/bao-hiem-con-nguoi",
		children: [
			{
				title: "Bảo Hiểm Du Lịch Quốc Tế",
				href: "/boi-thuong/bao-hiem-du-lich-quoc-te",
			},
			{
				title: "Bảo Hiểm Sức Khoẻ Toàn Diện",
				href: "/boi-thuong/bao-hiem-suc-khoe-toan-dien",
			},
			{
				title: "Bảo Hiểm Sức Khoẻ Gia Đình",
				href: "/boi-thuong/bao-hiem-suc-khoe-gia-dinh",
			},
		],
	},
	{
		title: "Bảo Hiểm Xe Cơ Giới",
		href: "/boi-thuong/bao-hiem-xe-co-gioi",
	},
	{
		title: "Bảo Hiểm Tài Sản",
		href: "/boi-thuong/bao-hiem-tai-san",
	},
	{
		title: "Bảo Hiểm Hàng Hải",
		href: "/boi-thuong/bao-hiem-hang-hai",
	},
	{
		title: "Bảo Hiểm Hàng Không",
		href: "/boi-thuong/bao-hiem-hang-khong",
	},
	{
		title: "Bảo Hiểm Nông Nghiệp",
		href: "/boi-thuong/bao-hiem-nong-nghiep",
	},
];

const dropdownVariants = {
	hidden: {
		opacity: 0,
		y: -20,
		scale: 0.98,
		transformOrigin: "top center",
		transition: {
			duration: 0.2,
			ease: [0.4, 0, 0.2, 1],
		},
	},
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			duration: 0.3,
			ease: [0, 0, 0.2, 1],
			staggerChildren: 0.05,
			when: "beforeChildren",
		},
	},
	exit: {
		opacity: 0,
		y: -10,
		scale: 0.98,
		transformOrigin: "top center",
		transition: {
			duration: 0.2,
			ease: [0.4, 0, 1, 1],
		},
	},
};

const navTitleVariants = {
	initial: { opacity: 0, y: -10 },
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.3,
			ease: [0, 0, 0.2, 1],
		},
	},
};

const menuItemVariants = {
	hidden: {
		opacity: 0,
		x: -10,
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.2,
			ease: "easeOut",
		},
	},
};

const childItemVariants = {
	hidden: {
		opacity: 0,
		x: -5,
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.15,
			ease: "easeOut",
		},
	},
};

const Navbar = () => {
	const [activeProduct, setActiveProduct] = useState<(typeof insuranceProducts)[0] | null>(null);
	const [activeCompensation, setActiveCompensation] = useState<(typeof compensationItems)[0] | null>(null);
	const [activeMenu, setActiveMenu] = useState<"products" | "compensation" | null>(null);

	// Use the memoized classes
	const getButtonClass = useButtonClasses();

	const renderMenuItem = (item: (typeof insuranceProducts)[0], isActive: boolean, onMouseEnter: () => void) => (
		<motion.button
			type="button"
			key={item.href}
			className={getButtonClass(isActive)}
			onMouseEnter={onMouseEnter}
			variants={menuItemVariants}
			whileHover={{ x: 4 }}
			transition={{ duration: 0.2 }}
		>
			<span>{item.title}</span>
			<FiChevronRight
				className={`w-8 h-8 ml-4 transition-colors ${
					isActive ? "stroke-white" : "stroke-black group-hover/item:stroke-white"
				}`}
			/>
		</motion.button>
	);

	return (
		<Container className="bg-white px-28 py-4 flex items-center justify-center relative z-50">
			<div className="w-[1440px] flex items-center relative">
				<motion.div className="w-[78px] flex items-center justify-center">
					<Image src="/logo.png" alt="Bảo Minh" width={281} height={351} className="w-auto h-auto" />
				</motion.div>

				{/* Navigation items */}
				<div className="flex gap-12 ml-24">
					{/* Giới Thiệu */}
					<motion.a
						href={homePageUrl}
						className={navLinkPrimary}
						whileHover={{ scale: 1.05 }}
						transition={{ duration: 0.2 }}
					>
						Giới Thiệu
					</motion.a>

					{/* Sản Phẩm */}
					<div className="group">
						<motion.button
							type="button"
							className={`${navLinkDefault} group/nav flex items-center`}
							onMouseEnter={() => setActiveMenu("products")}
							whileHover={{ scale: 1.05 }}
							transition={{ duration: 0.2 }}
							onClick={() => {
								window.location.href = productShowcaseUrl;
							}}
						>
							<span>Sản Phẩm</span>
							<motion.div
								animate={{
									rotate: activeMenu === "products" ? 270 : 90,
									scale: activeMenu === "products" ? 1.2 : 1,
								}}
								transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
							>
								<FiChevronRight className="w-8 h-8 ml-1 transition-colors stroke-2" />
							</motion.div>
						</motion.button>

						{/* Safe hover zone */}
						<div className="absolute w-8 h-8 bg-transparent" onMouseEnter={() => setActiveMenu("products")} />

						{/* Dropdown Menu for Products */}
						<AnimatePresence>
							{activeMenu === "products" && (
								<motion.div
									className="absolute left-0 -ml-28 mt-8 z-50 w-[1440px]"
									onMouseEnter={() => setActiveMenu("products")}
									onMouseLeave={() => {
										setActiveMenu(null);
										setActiveProduct(null);
									}}
								>
									<motion.div
										className="bg-white shadow-elevation origin-top w-full"
										variants={dropdownVariants}
										initial="hidden"
										animate="visible"
										exit="exit"
									>
										<div className="w-full px-8">
											<div className="grid grid-cols-[1fr_1fr_1fr] py-8">
												<div className="col-span-2">
													<motion.h3
														className="text-3xl font-bold"
														variants={navTitleVariants}
														initial="initial"
														animate="animate"
													>
														Các Sản Phẩm Bảo Hiểm
													</motion.h3>
													<div className="grid grid-cols-2">
														{/* First Column */}
														<div className="pr-8">
															<motion.div
																className="mt-4 space-y-2"
																variants={{
																	visible: {
																		transition: {
																			staggerChildren: 0.05,
																		},
																	},
																}}
															>
																{insuranceProducts.map((item) =>
																	renderMenuItem(item, activeProduct?.href === item.href, () => setActiveProduct(item)),
																)}
															</motion.div>
														</div>

														{/* Second Column */}
														<div className="border-l border-r border-neutral-300 pl-8">
															{activeProduct?.children ? (
																<motion.div
																	className="mt-4 space-y-2"
																	initial="hidden"
																	animate="visible"
																	variants={{
																		visible: {
																			transition: {
																				staggerChildren: 0.05,
																			},
																		},
																	}}
																>
																	{activeProduct.children.map((child) => (
																		<motion.a
																			key={child.href}
																			href={child.href}
																			className="block text-2xl font-medium text-black hover:text-[#F24444] transition-colors px-4 py-2"
																			variants={childItemVariants}
																			whileHover={{ x: 4 }}
																			transition={{ duration: 0.2 }}
																		>
																			<span>{child.title}</span>
																		</motion.a>
																	))}
																</motion.div>
															) : activeProduct ? (
																<motion.p
																	className="text-2xl text-neutral-gray-300"
																	initial={{ opacity: 0 }}
																	animate={{ opacity: 1 }}
																	transition={{ duration: 0.2 }}
																>
																	Đang cập nhật
																</motion.p>
															) : null}
														</div>
													</div>
												</div>

												{/* Third Column */}
												<div className="pl-8">
													<h3 className="text-3xl font-bold mb-8">Tuyển Dụng Agents</h3>
													<div>
														<div className="bg-[#F24444] rounded-2xl p-6 text-white shadow-elevation">
															<h3 className="text-2xl font-bold mb-12">Tư Vấn Sản Phẩm Phù Hợp Theo Doanh Nghiệp</h3>
															<a
																href={agentRecruitmentUrl}
																className="inline-flex items-center text-2xl font-bold w-full"
															>
																<span>TƯ VẤN NGAY</span>
																<FiChevronRight className="w-8 h-8 ml-4" />
															</a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</motion.div>
								</motion.div>
							)}
						</AnimatePresence>
					</div>

					{/* Bồi Thường */}
					<div className="group">
						<motion.button
							type="button"
							className={`${navLinkDefault} group/nav flex items-center`}
							onMouseEnter={() => setActiveMenu("compensation")}
							whileHover={{ scale: 1.05 }}
							transition={{ duration: 0.2 }}
						>
							<span>Bồi thường</span>
							<motion.div
								animate={{
									rotate: activeMenu === "compensation" ? 270 : 90,
									scale: activeMenu === "compensation" ? 1.2 : 1,
								}}
								transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
							>
								<FiChevronRight className="w-8 h-8 ml-1 transition-colors stroke-2" />
							</motion.div>
						</motion.button>

						{/* Safe hover zone */}
						<div className="absolute w-8 h-8 bg-transparent" onMouseEnter={() => setActiveMenu("compensation")} />

						{/* Dropdown Menu for Compensation */}
						<AnimatePresence>
							{activeMenu === "compensation" && (
								<motion.div
									className="absolute left-0 -ml-28 mt-8 z-50 w-[1440px]"
									onMouseEnter={() => setActiveMenu("compensation")}
									onMouseLeave={() => {
										setActiveMenu(null);
										setActiveCompensation(null);
									}}
								>
									<motion.div
										className="bg-white shadow-elevation origin-top w-full"
										variants={dropdownVariants}
										initial="hidden"
										animate="visible"
										exit="exit"
									>
										<div className="w-full px-8">
											<div className="grid grid-cols-[1fr_1fr_1fr] py-8">
												<div className="col-span-2">
													<motion.h3
														className="text-3xl font-bold"
														variants={navTitleVariants}
														initial="initial"
														animate="animate"
													>
														Hướng dẫn bồi thường
													</motion.h3>
													<div className="grid grid-cols-2">
														{/* First Column */}
														<div className="pr-8">
															<motion.div
																className="mt-4 space-y-2"
																variants={{
																	visible: {
																		transition: {
																			staggerChildren: 0.05,
																		},
																	},
																}}
															>
																{compensationItems.map((item) =>
																	renderMenuItem(item, activeCompensation?.href === item.href, () =>
																		setActiveCompensation(item),
																	),
																)}
															</motion.div>
														</div>

														{/* Second Column */}
														<div className="border-l border-r border-neutral-300 pl-8">
															{activeCompensation?.children ? (
																<motion.div
																	className="mt-4 space-y-2"
																	initial="hidden"
																	animate="visible"
																	variants={{
																		visible: {
																			transition: {
																				staggerChildren: 0.05,
																			},
																		},
																	}}
																>
																	{activeCompensation.children.map((child) => (
																		<motion.a
																			key={child.href}
																			href={child.href}
																			className="block text-2xl font-medium text-black hover:text-[#F24444] transition-colors px-4 py-2"
																			variants={childItemVariants}
																			whileHover={{ x: 4 }}
																			transition={{ duration: 0.2 }}
																		>
																			<span>{child.title}</span>
																		</motion.a>
																	))}
																</motion.div>
															) : activeCompensation ? (
																<motion.p
																	className="text-2xl text-neutral-gray-300"
																	initial={{ opacity: 0 }}
																	animate={{ opacity: 1 }}
																	transition={{ duration: 0.2 }}
																>
																	Đang cập nhật
																</motion.p>
															) : null}
														</div>
													</div>
												</div>

												{/* Third Column */}
												<div className="pl-8">
													<h3 className="text-3xl font-bold mb-8">Tuyển Dụng Agents</h3>
													<div>
														<div className="bg-[#F24444] rounded-2xl p-6 text-white shadow-elevation">
															<h3 className="text-2xl font-bold mb-12">Tư Vấn Sản Phẩm Phù Hợp Theo Doanh Nghiệp</h3>
															<a
																href={agentRecruitmentUrl}
																className="inline-flex items-center text-2xl font-bold w-full"
															>
																<span>TƯ VẤN NGAY</span>
																<FiChevronRight className="w-8 h-8 ml-4" />
															</a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</motion.div>
								</motion.div>
							)}
						</AnimatePresence>
					</div>

					{/* Tuyển Dụng CTV */}
					<a href={agentRecruitmentUrl} className={navLinkDefault}>
						Tuyển Dụng CTV
					</a>
				</div>
			</div>
		</Container>
	);
};

export default Navbar;
