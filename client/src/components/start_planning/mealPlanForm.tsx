import CalorieInput from './CalorieInput';
import DietInput from './DietInput';
import RemoveIngredient from './RemoveIngredient';
import SubmitButton from '../form_inputs/SubmitButton';
import { useState } from 'react';

interface MealRequest {
	calories: string;
	diet: string;
	remove: string;
}

interface InputsValid {
	calories: boolean;
	diet: boolean;
	remove?: boolean;
}

export const MealForm: React.FC = () => {
	const [mealRequest, setMealRequest] = useState<MealRequest>({ calories: '', diet: '', remove: '' });
	const [inputsValid, setInputsValid] = useState<InputsValid>({ calories: false, diet: false, remove: false });

	function onSubmit(event: React.FormEvent<HTMLFormElement>): void {
		event.preventDefault();
		const form = event.currentTarget;
		const data = new FormData(form);
		console.log(data);
		console.log(mealRequest);

		// You can pass formData as a fetch body directly:
		//fetch('/some-api', { method: form.method, body: formData });
	}

	const updateMealRequest = (field: string, value: string, valid: boolean) => {
		setMealRequest({ ...mealRequest, [field]: value });
		setInputsValid({ ...inputsValid, [field]: valid });
	};

	return (
		<form method='post' onSubmit={onSubmit}>
			<CalorieInput calories={mealRequest.calories} inputChanged={(value, valid) => updateMealRequest('calories', value, valid)} />
			{inputsValid.calories && <DietInput inputChanged={(value, valid) => updateMealRequest('diet', value, valid)} />}
			{inputsValid.diet && <RemoveIngredient ingredient={mealRequest?.remove} inputChanged={(value, valid) => updateMealRequest('remove', value, valid)} />}
			{inputsValid.diet && <SubmitButton text='Generate My Meals' />}
		</form>
	);
};

export default MealForm;
