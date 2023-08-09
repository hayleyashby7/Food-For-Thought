import React from 'react';
import { Meal } from '../../types/meal_data.type';

interface MealPlanCardsProps {
	meal: Meal;
}

const MealPlanCards: React.FC<MealPlanCardsProps> = ({ meal }) => (
	<div key={meal.id} className='prominent-shadow rounded flex-col flex items-center max-w-sm m-4 shadow-md bg-yellow-200 p-4 border-4 border-orange-400 min-h-96'>
		<img src={`https://spoonacular.com/recipeImages/${meal.id}-240x150.${meal.imageType}`} alt={meal.title} className='hidden md:block' />
		<div className='p-4 flex-col flex-wrap'>
			<h2 className='font-bold text-xl mb-2'>{meal.title}</h2>
			<p>Ready In: {meal.readyInMinutes} minutes</p>
			<p>Servings: {meal.servings}</p>
			<p>
				<a href={meal.sourceUrl} target='_blank' rel='noopener noreferrer' className='text-blue-500 hover:underline font bold'>
					See Recipe
				</a>
			</p>
		</div>
	</div>
);

export default MealPlanCards;
