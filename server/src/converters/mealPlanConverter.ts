import { MealPlan } from '../models/mealplan';
import { MealPlanData } from '../types/mealdataController.types'
export class MealPlanModelConverter {
  static toMealPlanData = (mealPlan: MealPlan): MealPlanData => {
    return {
      userId: mealPlan.userId,
      meals: mealPlan.meals?.map(meal => ({
        id: meal.id,
        imageType: meal.imageType,
        title: meal.title,
        readyInMinutes: meal.readyInMinutes,
        servings: meal.servings,
        sourceUrl: meal.sourceUrl
      })) || [],
      nutrients: {
        id: mealPlan.nutrients?.id || 0,
        calories: mealPlan.nutrients?.calories || 0,
        protein: mealPlan.nutrients?.protein || 0,
        fat: mealPlan.nutrients?.fat || 0,
        carbohydrates: mealPlan.nutrients?.carbohydrates || 0
      }
    };
  }
}