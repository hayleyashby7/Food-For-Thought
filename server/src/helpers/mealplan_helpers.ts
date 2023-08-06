import { DietType, isDietType } from '../types/diet.types';

interface validRequest {
	valid: boolean;
	error?: string;
}

export const validMealPlanRequest = (calories: string, diet: DietType | string): validRequest => {
	switch (true) {
		case calories === '' || isNaN(Number(calories)):
			return { valid: false, error: 'Please provide a calorie target' };
		case diet !== '' && !isDietType(diet):
			return { valid: false, error: 'Please provide a diet type' };
		default:
			return { valid: true };
	}
};
