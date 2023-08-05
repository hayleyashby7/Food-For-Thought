import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../providers/MealPlannerStore";

const CalorieInput: React.FC = () => {
  const [calories, setCalories] = useState("");
  const navigate = useNavigate();
  const { mealPlannerData, setMealPlannerData } = useContext(Context);

  console.log(mealPlannerData);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCalories(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Calories:", calories);

    setMealPlannerData((data) => ({ ...data, dailyCalories: calories }));
    navigate("/dietinput");
  };

  return (
    <div className="p-4 bg-white">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <label htmlFor="calorieInput" className="font-semibold">
          Please Enter Your Daily Calories :
        </label>

        <input
          type="number"
          id="calorieInput"
          onChange={handleChange}
          className="px-10 py-5 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-orange-500"
          placeholder="Enter Your Calories"
        />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default CalorieInput;
