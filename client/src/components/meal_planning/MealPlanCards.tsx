import React from "react";
import { Meal } from "../../types/meal_data.type"; // Update the path to where your types are defined

interface MealPlanCardsProps {
  meal: Meal;
}

const MealPlanCards: React.FC<MealPlanCardsProps> = ({ meal }) => (
  <div
    key={meal.id}
    className="prominent-shadow rounded overflow:auto shadow-md bg-yellow-200 p-4 border-4 border-orange-400 h-96"
  >
    <img
      src={`https://spoonacular.com/recipeImages/${meal.id}-240x150.${meal.imageType}`}
      alt={meal.title}
      className="object-cover h-48"
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
          className="text-blue-500 hover:underline font bold"
        >
          See Recipe
        </a>
      </p>
    </div>
  </div>
);

export default MealPlanCards;
