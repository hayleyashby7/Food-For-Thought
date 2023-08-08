import { useState } from 'react';
import ErrorMessage from '../error_message/ErrorMessage';

interface InputProps {
	name: string;
	value: string | number;
	label: string;
	onInput: (value: string, valid: boolean) => void;
	validate?: (value: string) => string | undefined;
}

const Input: React.FC<InputProps> = ({ name, value, label, onInput, validate }) => {
	const [errorMessage, setErrorMessage] = useState<string | undefined>();
	const [inputType] = useState(typeof value === 'number' ? 'number' : 'text');

	const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		let error: string | undefined;

		if (validate) {
			// Validate input
			error = validate(event.target.value);
			setErrorMessage(error);
			event.target.setCustomValidity(error || '');
		}

		// Pass input value and validation status to parent component
		onInput(event.target.value, error === undefined);
	};

	return (
		<div className='flex flex-col mb-4 w-full'>
			<label className='font-bold text-lg pl-1' htmlFor={name}>
				{label}
			</label>
			<input className='border py-2 px-3 font-semibold rounded-md mb-1' type={inputType} id={name} name={name} value={value} onChange={onChange} placeholder={label} />
			{errorMessage && <ErrorMessage message={errorMessage} />}
		</div>
	);
};

export default Input;
