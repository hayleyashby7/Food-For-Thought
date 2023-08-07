import Input from '../form_inputs/Input';
interface CalorieInputProps {
	calories: string;
	inputChanged: (value: string, valid: boolean) => void;
	validated?: boolean;
}

const CalorieInput: React.FC<CalorieInputProps> = ({ calories, inputChanged }) => {
	const validateCaloriesInput = (value: string): string | undefined => {
		return value.length === undefined
			? 'Total number of calories is required'
			: value.match(/^[0-9]+$/) === null
			? 'Only numbers allowed'
			: parseInt(value) < 1200
			? 'We need a minimum of 1200 calories per day to stay healthy'
			: parseInt(value) > 3500
			? 'We need a maximum of 3500 calories per day to stay healthy'
			: undefined;
	};

	return <Input name='calorieInput' value={calories} label='Please Enter Your Daily Calories' onInput={inputChanged} validate={validateCaloriesInput} />;
};

export default CalorieInput;
