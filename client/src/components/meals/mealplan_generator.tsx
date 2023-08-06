import { useState, useEffect } from "react";
import { useUserContext } from "../../hooks/useUserContext";

type Meal = {
  id: number;
  imageType: string;
  title: string;
  readyInMinutes: number;
  servings: number;
  sourceUrl: string;
};

type Nutrients = {
  calories: number;
  protein: number;
  fat: number;
  carbohydrates: number;
};

type MealPlanResponse = {
  status: number;
  meals: Meal[];
  nutrients: Nutrients;
};

function MealPlanGenerator() {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [nutrients, setNutrients] = useState<Nutrients | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState("");
  const { id } = useUserContext();

  useEffect(() => {
    fetch("/api/mealplan?calories=2000&diet=vegetarian")
      .then((response) => response.json())
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
    fetch("http://localhost:3000/api/mealplan", {
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
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
        className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
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
