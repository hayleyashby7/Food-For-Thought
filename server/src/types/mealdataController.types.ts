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
  userId: string;
  meals: MealData[];
  nutrients: NutrientData
}

export interface NutrientData {
  id: number;
  calories: number;
  protein: number;
  fat: number;
  carbohydrates: number;
}

export interface UserMealPlanRequest{
  userId: string;
}

export const userMealPlanRequestSchema = Joi.object<UserMealPlanRequest>({
  userId: Joi.string().required()
});

export const nutrientSchema = Joi.object<NutrientData>({
  id: Joi.number().optional(),
  calories: Joi.number().required(),
  carbohydrates: Joi.number().required(),
  fat: Joi.number().required(),
  protein: Joi.number().required()
})

export const mealDataSchema = Joi.object<MealData>({
  imageType: Joi.string().required(),
  title: Joi.string().required(),
  readyInMinutes: Joi.number().required(),
  servings: Joi.number().required(),
  sourceUrl: Joi.string().required()
}).options({presence: 'required', stripUnknown: true})

export const mealSchema = Joi.object<MealPlanData>({
  userId: Joi.string().required(),
  meals: Joi.array().items(mealDataSchema).required(),
  nutrients: nutrientSchema.required()
  
})





