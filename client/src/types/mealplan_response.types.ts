import { Meal } from "./meal_data.types";
import { Nutrients } from "./nutrients_data.types";

export type MealPlanResponse = {
  status: number;
  meals: Meal[];
  nutrients: Nutrients;
};
