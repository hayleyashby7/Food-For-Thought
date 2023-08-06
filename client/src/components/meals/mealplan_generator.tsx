import { useState, useEffect } from "react";
import { useUserContext } from "../../hooks/useUserContext";
import { Meal } from "../../types/meal_data.types";
import { Nutrients } from "../../types/nutrients_data.types";
import { MealPlanResponse } from "../../types/mealplan_response.types";

function MealPlanGenerator() {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [nutrients, setNutrients] = useState<Nutrients | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState("");
  const { id } = useUserContext();

  useEffect(() => {
    fetch("/api/mealplan?calories=2000&diet=vegetarian&exclude=shellfish")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Server responded with ${response.status}`);
        }
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Received non-JSON response from server.");
        }
        return response.json();
      })
      .then((data: MealPlanResponse) => {
        setMeals(data.meals);
        setNutrients(data.nutrients);
        setLoading(false);
      })
      .catch((err: Error) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const saveMealPlan = () => {
    fetch("https://localhost:3000/api/mealplan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: id,
        meals: meals,
        nutrients: nutrients,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((data) => {
            throw new Error(data.error || "Failed to save meal plan.");
          });
        }
        return response.json();
      })
      .then(() => {
        setSuccessMessage("Meal plan saved successfully!");
      })
      .catch((err: Error) => {
        setError(err.message);
      });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="bg-yellow-100">
      <div className="border-2 border-orange-400 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {meals.map((meal) => (
          <div
            key={meal.id}
            className="rounded overflow-hidden shadow-md bg-white p-4"
          >
            <img
              src={`https://spoonacular.com/recipeImages/${meal.id}-${meal.imageType}`}
              alt={meal.title}
              className="w-full object-cover h-48"
            />
            <div className="p-4">
              <h2 className="font-bold text-xl mb-2">{meal.title}</h2>
              <p>Ready In: {meal.readyInMinutes} minutes</p>
              <p>Servings: {meal.servings}</p>
              <p>
                <a
                  href={meal.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  See Recipe
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <h3>Nutritional Information:</h3>
        <p>Calories: {nutrients?.calories}</p>
        <p>Protein: {nutrients?.protein}g</p>
        <p>Fat: {nutrients?.fat}g</p>
        <p>Carbohydrates: {nutrients?.carbohydrates}g</p>
      </div>

      <button
        onClick={saveMealPlan}
        className="mt-4 bg-green-600 text-black p-2 rounded hover:bg-green-800"
      >
        Save
      </button>
      {successMessage && (
        <div className="text-green-500 mt-4">{successMessage}</div>
      )}
      {error && <div className="text-red-500 mt-4">{error}</div>}
    </div>
  );
}

export default MealPlanGenerator;
