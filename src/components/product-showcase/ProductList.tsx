import InsuranceProducts from "@/components/insurance-products";
import ProductCard from "@/components/insurance-products/ProductCard";
import { Container } from "@/components/layout";
import { useSearch } from "@/components/product-showcase/useSearch";
import { ConditionalRenderer } from "@/components/utils";
import { AnimatePresence, motion } from "framer-motion";

export default function ProductList() {
	const search = useSearch();

	return (
		<ConditionalRenderer
			condition={search.matchingProducts.length === 0}
			component={
				<AnimatePresence mode="wait">
					<motion.div
						key="empty-state"
						className="mt-8"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{
							duration: 0.4,
							ease: "easeOut",
						}}
					>
						<Hint />
						<InsuranceProducts />
					</motion.div>
				</AnimatePresence>
			}
			fallback={
				<AnimatePresence mode="wait">
					<motion.div
						key="product-list"
						className="mt-8"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{
							duration: 0.4,
							ease: "easeOut",
						}}
					>
						<Container className="mx-auto px-28 py-4 mt-8 space-y-8">
							<div className="grid grid-cols-3 gap-8">
								{search.matchingProducts.map((product) => (
									<div key={product.title} className="shadow-elevation rounded-2xl">
										<ProductCard {...product} isActive={product.status === "available"} />
									</div>
								))}
							</div>
							<Hint />
						</Container>
					</motion.div>
				</AnimatePresence>
			}
		/>
	);
}

function Hint() {
	return <p className="text-2xl text-center text-black/60 font-medium">Đang cập nhật thêm sản phẩm</p>;
}
