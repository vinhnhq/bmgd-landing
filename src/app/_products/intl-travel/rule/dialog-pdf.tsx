"use client";

import { PdfProvider, PdfView } from "@/components/pdf";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const i18n = {
	title: "Tư vấn ngay",
	description: "Bảo Minh Gia Đình sẽ liên hệ lại theo thông tin bạn cung cấp",
};

export const DialogPdf = ({
	open,
	onOpenChange,
}: {
	open: boolean;
	onOpenChange: (open: boolean) => void;
}) => {
	return (
		<PdfProvider>
			<Dialog open={open} onOpenChange={onOpenChange}>
				<VisuallyHidden>
					<DialogTitle>{i18n.title}</DialogTitle>
				</VisuallyHidden>

				<DialogContent className="max-w-fit md:shadow-elevation h-4/5">
					<VisuallyHidden>
						<DialogDescription>{i18n.description}</DialogDescription>
					</VisuallyHidden>

					<PdfView />
				</DialogContent>
			</Dialog>
		</PdfProvider>
	);
};
