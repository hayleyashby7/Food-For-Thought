import React, { useEffect, useState } from 'react';
import Select from '../form_inputs/Select';

interface DietInputProps {
	inputChanged: (value: string, valid: boolean) => void;
}

const DietInput: React.FC<DietInputProps> = ({ inputChanged }) => {
	const [dietOptions, setdietOptions] = useState([]);

	const handleDietSelect = (diet: string) => {
		diet === '' ? inputChanged(diet, false) : inputChanged(diet, true);
	};

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('http://localhost:3000/api/diets');
			const data = await response.json();
			setdietOptions(data);
		};

		fetchData();
	}, []);

	return <Select name='diet' value='' label='Please Choose Your Type of Diet' onInput={handleDietSelect} options={dietOptions} />;
};

export default DietInput;
