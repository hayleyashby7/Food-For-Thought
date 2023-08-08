import { MealPlan } from "../../types/mealplan_response.type";


export async function getUserMealPlans(userId: string) {
  const response = await fetch(
    `https://localhost:3000/api/user-meal-plan?userId=${userId}`
  );
  const body = await response.json() as MealPlan[];

  return body;
}