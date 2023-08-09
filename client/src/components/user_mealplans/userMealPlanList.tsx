import React from "react";
import { MealPlan } from "../../types/mealplan_response.type";

type Props = {
  mealPlans: MealPlan[];
};

const MealPlanList: React.FC<Props> = ({ mealPlans }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto">
        <thead className="mt-10">
          <tr>
            <th className="hidden lg:table-cell">Meal number</th>
            <th>Meals</th>
          </tr>
        </thead>
        <tbody>
          {mealPlans.map((mealPlan, index) => (
            <React.Fragment key={index}>
              <tr>
                <td className="text-center hidden lg:table-cell">
                  {index + 1}
                </td>
                <td>
                  <div className="flex flex-wrap md:flex-nowrap space-x-4 md:space-x-6 prominent-shadow">
                    {mealPlan.meals.map((meal, mealIndex) => (
                      <div
                        key={mealIndex}
                        className="flex-1 bg-red-900 p-4 text-yellow-400 border-b-4 border-red-900 prominent-shadow"
                      >
                        <p>
                          <strong>ID:</strong> {meal.id}
                        </p>
                        <p>
                          <strong>Title:</strong> {meal.title}
                        </p>
                        <p>
                          <strong>Ready in:</strong> {meal.readyInMinutes} mins
                        </p>
                        <p>
                          <strong>Servings:</strong> {meal.servings}
                        </p>
                        <p>
                          <a
                            href={meal.sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Recipe
                          </a>
                        </p>
                      </div>
                    ))}
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <div className="flex justify-between bg-green-800 p-4 prominent-shadow">
                    <div>
                      <strong>Calories:</strong> {mealPlan.nutrients.calories}
                    </div>
                    <div>
                      <strong>Protein:</strong> {mealPlan.nutrients.protein}
                    </div>
                    <div>
                      <strong>Fat:</strong> {mealPlan.nutrients.fat}
                    </div>
                    <div>
                      <strong>Carbs:</strong> {mealPlan.nutrients.carbohydrates}
                    </div>
                  </div>
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MealPlanList;
