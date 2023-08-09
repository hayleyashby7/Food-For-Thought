import React from 'react';
import useSaveMealPlan from '../../hooks/useSaveMealPlan';
import MealPlanCards from '../meal_planning/MealPlanCards';
import NutrientsCard from '../meal_planning/NutrientsCard';
import { MealPlanResponse } from '../../types/mealplan_response.type';

interface MealPlanGeneratorProps {
	mealResponse: MealPlanResponse;
}

const MealPlanGenerator: React.FC<MealPlanGeneratorProps> = ({ mealResponse }) => {
	const { meals, nutrients } = mealResponse;
	const { saveMealPlan, error, successMessage } = useSaveMealPlan();

	return (
		<div className='bg-yellow-100 p-1 mb-8 flex flex-col md:flex-row'>
			<div className='flex flex-col items-center gap-2'>
				<button onClick={() => saveMealPlan(mealResponse)} className='bg-green-600 prominent-shadow text-white p-2 rounded hover:bg-green-800 w-24'>
					Save
				</button>
				{successMessage && <div className='text-green-500 font-bold'>{successMessage}</div>}
				{error && <div className='text-red-500 font-bold'>{error}</div>}
			</div>
			<div className='flex flex-wrap mt-4 justify-center gap-2'>
				<NutrientsCard nutrients={nutrients} />
			</div>
			<div className='flex flex-wrap justify-center'>
				{meals.map((meal) => (
					<MealPlanCards key={meal.id} meal={meal} />
				))}
			</div>
		</div>
	);
};

export default MealPlanGenerator;
