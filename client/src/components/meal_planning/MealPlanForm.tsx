import CalorieInput from './CalorieInput';
import DietInput from './DietInput';
import RemoveIngredient from './RemoveIngredient';
import SubmitButton from '../form_inputs/SubmitButton';
import { useState } from 'react';
import { MealPlanRequest } from '../../types/mealplan_request.type';
import { MealPlanResponse } from '../../types/mealplan_response.type';

interface InputsValid {
	calories: boolean;
	diet: boolean;
	remove?: boolean;
}

interface MealFormProps {
	mealRequest: MealPlanRequest;
	setMealRequest: (field: string, value: string) => void;
	setMealResponse: (data: MealPlanResponse) => void;
}

export const MealForm: React.FC<MealFormProps> = ({ mealRequest, setMealRequest, setMealResponse }) => {
	const [inputsValid, setInputsValid] = useState<InputsValid>({ calories: false, diet: true, remove: false });

	function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
		event.preventDefault();
		const { calories, diet, remove } = mealRequest;

		const buildQueryString = () => {
			let queryString = `calories=${calories}`;
			diet ? (queryString += `&diet=${diet}`) : null;
			remove ? (queryString += `&exclude=${remove}`) : null;
			return queryString;
		};

		const fetchData = async () => {
			try {
				const response = await fetch(`https://localhost:3000/api/mealplan?${buildQueryString()}`);
				if (!response.ok) {
					throw new Error(`Server responded with ${response.status}`);
				}
				const contentType = response.headers.get('content-type');
				if (!contentType || !contentType.includes('application/json')) {
					throw new Error('Received non-JSON response from server.');
				}
				setMealResponse(await response.json());
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}

	const updateMealRequest = (field: string, value: string, valid: boolean) => {
		setMealRequest(field, value);
		setInputsValid({ ...inputsValid, [field]: valid });
	};

	return (
		<form method='post' onSubmit={handleSubmit}>
			<CalorieInput calories={mealRequest.calories} inputChanged={(value, valid) => updateMealRequest('calories', value, valid)} />
			{inputsValid.calories && <DietInput inputChanged={(value) => updateMealRequest('diet', value, true)} />}
			{inputsValid.calories && inputsValid.diet && <RemoveIngredient ingredient={mealRequest?.remove} inputChanged={(value, valid) => updateMealRequest('remove', value, valid)} />}
			{inputsValid.calories && inputsValid.diet && <SubmitButton text='Generate My Meals' />}
		</form>
	);
};

export default MealForm;
