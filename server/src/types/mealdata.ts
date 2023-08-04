import Joi from "joi";

export interface MealData {
    id: number;
    imageType: string;
    title: string;
    readyInMinutes: number;
    servings: number;
    sourceUrl: string;
}

export interface MealPlanData {
    userId?: string;
    meals: MealData[];
}

export const mealDataSchema = Joi.object<MealData>({
  id: Joi.number().optional(),
  imageType: Joi.string().required(),
  title: Joi.string().required(),
  readyInMinutes: Joi.number().required(),
  servings: Joi.number().required(),
  sourceUrl: Joi.string().required()
})

export const mealSchema = Joi.object<MealPlanData>({
  meals: Joi.array().items(mealDataSchema).required()
})



