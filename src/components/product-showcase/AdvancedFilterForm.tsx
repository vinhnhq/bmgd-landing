import { Container } from "@/components/layout";
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";
import { useState } from "react";
import FilterOptions from "./FilterOptions";
import SearchBar from "./SearchBar";

const AdvancedFilterForm = () => {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<Container className="mx-auto px-28 py-4 mt-8">
			<SearchBar isExpanded={isExpanded} onToggleExpand={() => setIsExpanded(!isExpanded)} />

			{/* Container with relative positioning */}
			<div className="relative">
				<LazyMotion features={domAnimation}>
					<AnimatePresence mode="wait">
						<m.div
							key={isExpanded ? "expanded" : "collapsed"}
							initial={{ height: 0 }}
							animate={{ height: isExpanded ? "auto" : 0 }}
							exit={{ height: 0 }}
							transition={{
								duration: 0.3,
								ease: "easeInOut",
							}}
							className="overflow-hidden mt-16"
						>
							<RenderIf condition={isExpanded}>
								<FilterOptions />
							</RenderIf>
						</m.div>
					</AnimatePresence>
				</LazyMotion>
			</div>
		</Container>
	);
};

function RenderIf(props: { condition: boolean; children: React.ReactNode }) {
	return props.condition ? props.children : null;
}

export default AdvancedFilterForm;
