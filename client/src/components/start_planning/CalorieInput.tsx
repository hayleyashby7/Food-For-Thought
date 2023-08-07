// src/components/CalorieInput.tsx

import React, { useState } from "react";

const CalorieInput: React.FC = () => {
  const [calories, setCalories] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCalories(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission here (e.g., save the calorie value to state or send data to backend)
    console.log("Calories:", calories);
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
          value={calories}
          onChange={handleChange}
          className="px-10 py-5 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-orange-500"
          placeholder="Enter Your Calories"
        />
        <button
          type="submit"
          className="px-4 py-2 font-semibold rounded-md text-white bg-orange-500 hover:bg-orange-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CalorieInput;
