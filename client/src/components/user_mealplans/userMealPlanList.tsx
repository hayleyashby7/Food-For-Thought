import React from "react";
import { MealPlan } from "../../types/mealplan_response.type";

type Props = {
  mealPlans: MealPlan[];
};

const MealPlanList: React.FC<Props> = ({ mealPlans }) => {
  return (
    <table className="min-w-full table-auto">
      <thead className="mt-10">
        <tr>
          <th>Meal number</th>
          <th>Meals</th>
        </tr>
      </thead>
      <tbody>
        {mealPlans.map((mealPlan, index) => (
          <>
            <tr key={index}>
              <td className="text-center" rowSpan={2}>
                {index}
              </td>
              <td>
                <table className="bg-red-900 mt-6 text-yellow-400 w-full border-b-8 border-red-900">
                  <thead className="bg-green text-sm text-center">
                    <tr>
                      <th>Meal ID</th>
                      <th>Title</th>
                      <th>Ready</th>
                      <th>Servings</th>
                      <th>Recipe link</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mealPlan.meals.map((meal, mealIndex) => (
                      <tr key={mealIndex}>
                        <td>{meal.id}</td>
                        <td>{meal.title}</td>
                        <td>{meal.readyInMinutes}</td>
                        <td>{meal.servings}</td>
                        <td>
                          <a
                            href={meal.sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Recipe
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <table className="bg-green-800 w-full">
                  <thead>
                    <tr>
                      <th>Calories</th>
                      <th>Protein</th>
                      <th>Fat</th>
                      <th>Carbohydrates</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-center">
                      <td>{mealPlan.nutrients.calories}</td>
                      <td>{mealPlan.nutrients.protein}</td>
                      <td>{mealPlan.nutrients.fat}</td>
                      <td>{mealPlan.nutrients.carbohydrates}</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </>
        ))}
      </tbody>
    </table>
  );
};

export default MealPlanList;
