interface SelectProps {
	name: string;
	value: string | number;
	options: string[];
	label: string;
	onInput: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({ name, value, label, onInput, options }) => {
	return (
		<>
			<div className='flex flex-col mb-4 w-full'>
				<label className='font-bold text-lg pl-1' htmlFor={name}>
					{label}
				</label>
				<select className='border py-2 px-3 font-semibold rounded-md mb-1' id={name} name={name} value={value} onChange={(event) => onInput(event.target.value)}>
					<option key='none'>None</option>
					{options.map((option) => (
						<option key={option}>{option}</option>
					))}
				</select>
			</div>
		</>
	);
};

export default Select;
