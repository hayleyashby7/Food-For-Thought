interface ButtonProps {
	onClick: () => void;
	label: string;
	className?: string;
}

const StartButton: React.FC<ButtonProps> = ({ onClick, label }) => {
	return (
		<button className={` prominent-shadow px-10 py-5 font-semibold rounded-md mb-4 text-white bg-orange-500 hover:bg-orange-600`} onClick={onClick}>
			{label}
		</button>
	);
};

export default StartButton;
