import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../providers/MealPlannerStore";

const RemoveIngredient: React.FC = () => {
  const { mealPlannerData, setMealPlannerData } = useContext(Context);
  console.log("mealPlannerData", mealPlannerData);

  const [ingredient, setingredient] = useState("");
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setingredient(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission here (e.g., save the calorie value to state or send data to backend)
    console.log("ingredient:", ingredient);
  };

  // fetch('url/haga?calories=mealPlannerData.caloriesANDdiet=mealplanner.')

  return (
    <div className="p-4 bg-white">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <label htmlFor="RemoveIngredient" className="font-semibold">
          Remove Ingredients :
        </label>

        <input
          type="string"
          id="RemoveIngredient"
          value={ingredient}
          onChange={handleChange}
          className="px-10 py-5 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-orange-500"
          placeholder="Enter Your ingredient"
        />
        <button
          type="submit"
          className="px-4 py-2 font-semibold rounded-md text-white bg-orange-500 hover:bg-orange-600"
          onClick={() => navigate("/dietinput")}
        >
          Generate my meal planner
        </button>
      </form>
    </div>
  );
};

export default RemoveIngredient;
