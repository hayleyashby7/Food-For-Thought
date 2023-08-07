import { Meal } from './meal_data.type';
import { Nutrients } from './nutrients_data.type';

export type MealPlanResponse = {
	status: number;
	meals: Meal[];
	nutrients: Nutrients;
};
