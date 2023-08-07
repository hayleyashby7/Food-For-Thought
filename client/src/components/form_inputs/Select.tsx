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
			<div className='flex flex-col flex-nowrap m-2 gap-2'>
				<label htmlFor={name}>{label}</label>
				<select className='flex-2 font-semibold rounded-md' id={name} name={name} value={value} onChange={(event) => onInput(event.target.value)}>
					<option key=''>-Choose Option-</option>
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
