export default function Header({ title, description }: { title: string; description: string }) {
	return (
		<div className="mb-8">
			<HeaderTitle title={title} />
			<HeaderDescription description={description} />
		</div>
	);
}

export function HeaderTitle({ title }: { title: string }) {
	return <h2 className="text-4xl font-bold">{title}</h2>;
}

export function HeaderDescription({ description }: { description: string }) {
	return <p className="text-2xl font-medium">{description}</p>;
}
