export default function Loader({
	message = "Loading...",
}: {
	message?: string;
}) {
	return (
		<div className="flex flex-col items-center justify-center h-48 gap-2">
			<svg
				className="animate-spin h-8 w-8 text-[#ba7a00]"
				viewBox="0 0 24 24"
				fill="none"
			>
				<circle
					className="opacity-25"
					cx="12"
					cy="12"
					r="10"
					stroke="currentColor"
					strokeWidth="4"
				/>
				<path
					className="opacity-75"
					fill="currentColor"
					d="M4 12a8 8 0 018-8v8H4z"
				/>
			</svg>
			<p className="text-sm text-gray-500">{message}</p>
		</div>
	);
}
