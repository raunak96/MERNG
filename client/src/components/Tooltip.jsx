import { useRef } from "react";

const Tooltip = ({ tooltipText, children }) => {
	const tooltipRef = useRef(null);
	const handleMouseEnter = () => {
		tooltipRef.current.style.opacity = 1;
	};
	const handleMouseLeave = () => {
		tooltipRef.current.style.opacity = 0;
	};
	return (
		<div
			className="relative flex justify-center"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}>
			<div
				ref={tooltipRef}
				className="absolute top-full w-auto mt-3 opacity-0 bg-gradient-to-b from-black to-gray-700 text-white px-4 py-2 rounded flex items-center transition duration-100">
				<div
					className="absolute h-0 w-0 bottom-full left-1/2 transform -translate-x-1/2"
					style={{
						border: "10px solid transparent",
						borderTop: "none",
						borderBottom: "10px solid black",
					}}
				/>
				{tooltipText}
			</div>
			{children}
		</div>
	);
};

export default Tooltip;
