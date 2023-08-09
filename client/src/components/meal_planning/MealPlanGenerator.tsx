import React from "react";
import useSaveMealPlan from "../../hooks/useSaveMealPlan";
import MealPlanCards from "../meal_planning/MealPlanCards";
import NutrientsCard from "../meal_planning/NutrientsCard";
import { MealPlanResponse } from "../../types/mealplan_response.type";

interface MealPlanGeneratorProps {
  mealResponse: MealPlanResponse;
}

const MealPlanGenerator: React.FC<MealPlanGeneratorProps> = ({
  mealResponse,
}) => {
  const { meals, nutrients } = mealResponse;
  const { saveMealPlan, error, successMessage } = useSaveMealPlan();

  return (
    <div className="bg-yellow-100 p-1">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {meals.map((meal) => (
          <MealPlanCards key={meal.id} meal={meal} />
        ))}
      </div>

      <div className="flex mt-4 items-center gap-2">
        <NutrientsCard nutrients={nutrients} />
        <div className="flex items-center gap-2">
          {" "}
          <button
            onClick={() => saveMealPlan(mealResponse)}
            className="bg-green-600 prominent-shadow text-white p-2 rounded hover:bg-green-800 w-24"
          >
            Save
          </button>
          {successMessage && (
            <div className="text-green-500 font-bold">{successMessage}</div>
          )}
          {error && <div className="text-red-500 font-bold">{error}</div>}
        </div>
      </div>
    </div>
  );
};

export default MealPlanGenerator;
