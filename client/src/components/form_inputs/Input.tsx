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
		<>
			<div className='flex flex-col flex-nowrap m-2 gap-2'>
				<label htmlFor={name}>{label}</label>
				<input className='flex-2 font-semibold rounded-md' type={inputType} id={name} name={name} value={value} onChange={onChange} placeholder={label} />
			</div>
			{errorMessage && <ErrorMessage message={errorMessage} />}
		</>
	);
};

export default Input;
