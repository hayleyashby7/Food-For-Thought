import CalorieInput from './CalorieInput';
import DietInput from './DietInput';
import RemoveIngredient from './RemoveIngredient';
import SubmitButton from '../form_inputs/SubmitButton';
import { useState } from 'react';
import { MealPlanRequest } from '../../types/mealplan_request.type';

interface InputsValid {
	calories: boolean;
	diet: boolean;
	remove?: boolean;
}

interface MealFormProps {
	mealRequest: MealPlanRequest;
	setMealRequest: (field: string, value: string) => void;
	setMealResponse: (data: string) => void;
}

export const MealForm: React.FC<MealFormProps> = ({ mealRequest, setMealRequest, setMealResponse }) => {
	const [inputsValid, setInputsValid] = useState<InputsValid>({ calories: false, diet: false, remove: false });

	function onSubmit(event: React.FormEvent<HTMLFormElement>): void {
		event.preventDefault();
		const form = event.currentTarget;
		const data = new FormData(form);
		console.log(data);
		setMealResponse(data.toString());

		/* useEffect(() => {
			fetch('https://localhost:3000/api/mealplan?calories=2000&diet=vegetarian&exclude=shellfish')
				.then((response) => {
					if (!response.ok) {
						throw new Error(`Server responded with ${response.status}`);
					}
					const contentType = response.headers.get('content-type');
					if (!contentType || !contentType.includes('application/json')) {
						throw new Error('Received non-JSON response from server.');
					}
					return response.json();
				})
				.then((data: MealPlanResponse) => {
					setMeals(data.meals);
					setNutrients(data.nutrients);
					setLoading(false);
				})
				.catch((err: Error) => {
					setError(err.message);
					setLoading(false);
				});
		}, []); */
	}

	const updateMealRequest = (field: string, value: string, valid: boolean) => {
		setMealRequest(field, value);
		setInputsValid({ ...inputsValid, [field]: valid });
	};

	return (
		<form method='post' onSubmit={onSubmit}>
			<CalorieInput calories={mealRequest.calories} inputChanged={(value, valid) => updateMealRequest('calories', value, valid)} />
			{inputsValid.calories && <DietInput inputChanged={(value) => updateMealRequest('diet', value, true)} />}
			{inputsValid.diet && <RemoveIngredient ingredient={mealRequest?.remove} inputChanged={(value, valid) => updateMealRequest('remove', value, valid)} />}
			{inputsValid.diet && <SubmitButton text='Generate My Meals' />}
		</form>
	);
};

export default MealForm;
