"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { Document, Page, pdfjs, Thumbnail } from "react-pdf";
import type { DocumentCallback } from "react-pdf/dist/esm/shared/types.js";
import { usePdf } from "./context";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { ScrollArea } from "@/components/ui/scroll-area";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PdfViewProps {
	containerClassName?: string;
	pageClassName?: string;
}

export default function PdfView({ containerClassName, pageClassName }: PdfViewProps) {
	const { setDimensions, totalPages, setTotalPages, currentPage, setCurrentPage } = usePdf();

	return (
		<>
			<Document
				file={"https://ontheline.trincoll.edu/images/bookdown/sample-local-pdf.pdf"}
				onLoadSuccess={(page: DocumentCallback) => {
					setTotalPages(page.numPages);
				}}
				className={cn("", containerClassName)}
			>
				<div className="flex gap-2">


					<div>
						<div className="overflow-y-auto overflow-x-hidden max-h-screen">
							{totalPages &&
								Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
									<Page key={pageNumber} pageNumber={pageNumber} />
								))}
						</div>
						<Button
							size="icon"
							variant="ghost"
							className={cn("absolute top-1/2 -left-10 cursor-pointer size-7")}
							onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
							disabled={currentPage <= 1}
						>
							<ArrowLeftIcon />
						</Button>

						<Button
							size="icon"
							variant="ghost"
							className={cn("absolute top-1/2 -right-10 cursor-pointer size-7")}
							onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
							disabled={currentPage >= totalPages}
						>
							<ArrowRightIcon />
						</Button>
					</div>
				</div>
			</Document>
		</>
	);
}
