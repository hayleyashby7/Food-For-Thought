import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../providers/MealPlannerStore';

interface DietInputProps {
	onDietSelect: (diet: string) => void;
}

const DietInput: React.FC<DietInputProps> = ({ onDietSelect }) => {
	const { mealPlannerData, setMealPlannerData } = useContext(Context);
	const [dietOptions, setdietOptions] = useState([]);
	const navigate = useNavigate();

	console.log('mealPlannerData:', mealPlannerData);

	const handleDietSelect = (diet: string) => {
		onDietSelect(diet);
		setMealPlannerData((data) => ({ ...data, dietOption: diet }));
		navigate('/removeingredient');
	};

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('http://localhost:3000/api/diets');
			const data = await response.json();
			setdietOptions(data);
		};

		fetchData();
	}, []);

	return (
		<div className='flex flex-col items-center'>
			<h2 className='text-2xl font-semibold mb-4 '>Please Choose Your Type of Diet:</h2>
			<select onChange={(event) => handleDietSelect(event.target.value)}>
				{dietOptions.map((dietOption) => (
					<option key={dietOption}>{dietOption}</option>
				))}
			</select>
		</div>
	);
};

export default DietInput;
