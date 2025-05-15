import { Loader2 } from "lucide-react";

export default function AdminLoading() {
	return (
		<div className="flex h-screen items-center justify-center">
			<Loader2 className="w-10 h-10 animate-spin" />
		</div>
	);
}
