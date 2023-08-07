import { useState } from 'react';
import carrotWordCloud from '../../assets/images/CarrotWordCloud.jpg';
import StartButton from '../form_inputs/StartButton';
import MealForm from './MealPlanForm';
import { MealPlanRequest } from '../../types/mealplan_request.type';

const StartPlanning: React.FC = () => {
	const [mealRequest, setMealRequest] = useState<MealPlanRequest>({ calories: '', diet: '', remove: '' });
	const [formActive, setFormActive] = useState<boolean>(false);
	const [mealResponse, setMealResponse] = useState('');

	const resetPlan = () => {
		setMealRequest({ calories: '', diet: '', remove: '' });
		setMealResponse('');
		setFormActive(false);
	};

	const startPlan = () => {
		resetPlan();
		setFormActive(true);
	};

	return (
		<div className='flex flex-row min-h-screen bg-yellow-100'>
			<div className='flex-1'>
				<img src={carrotWordCloud} alt='carrot shaped word cloud' className='h-96 w-auto border-4 border-orange-400' />
			</div>
			<div className='flex-1 flex flex-col items-center bg-yellow-100 text-red-900 h-96 pl-30'>
				{!formActive ? <StartButton onClick={startPlan} label='Start Plan' /> : <StartButton onClick={resetPlan} label='Reset Plan' />}
				{formActive && !mealResponse ? (
					<MealForm mealRequest={mealRequest} setMealRequest={(field, value) => setMealRequest({ ...mealRequest, [field]: value })} setMealResponse={(data) => setMealResponse(data)} />
				) : (
					<p>{mealResponse}</p>
				)}
			</div>
		</div>
	);
};

export default StartPlanning;
