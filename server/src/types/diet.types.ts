export const DIET = ['vegetarian', 'vegan', 'pescatarian', 'gluten free', 'ketogenic', 'paleo', 'whole30', 'lacto-vegetarian', 'ovo-vegetarian', 'primal', 'low FODMAP'] as const;
export type DietType = (typeof DIET)[number];

export const isDietType = (diet: string): boolean => {
	return DIET.includes(diet as DietType);
};
