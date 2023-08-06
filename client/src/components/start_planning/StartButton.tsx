interface ButtonProps {
	onClick: () => void;
	label: string;
	className?: string;
}

const StartButton: React.FC<ButtonProps> = ({ onClick, label, className }) => {
	return (
		<div className='flex justify-center items-center h-screen  bg-yellow-100'>
			<button className={`px-20 py-10 font-semibold rounded-md  text-green-900 bg-orange-500 hover:bg-orange-600 ${className}`} onClick={onClick}>
				{label}
			</button>
		</div>
	);
};

export default StartButton;
