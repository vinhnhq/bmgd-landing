import { Container } from "@/components/layout";
import type { ContactType } from "./schema";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function Contact({ type }: { type: ContactType | null }) {
	return (
		<Container className="bg-white px-28 py-8 space-y-8">
			<h2 className="text-4xl font-bold">Liên Hệ Ngay</h2>

			<div className="flex gap-16">
				<div className="flex-[2]">
					<ContactForm type={type} />
				</div>
				<div className="flex-[1]">
					<ContactInfo />
				</div>
			</div>
		</Container>
	);
}
