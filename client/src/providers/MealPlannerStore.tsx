// Context.js
import React, { useState } from "react";

interface MealPlannerData {
  dailyCalories: number;
  dietOption: string;
  removedingredients: string[];
}

export const Context = React.createContext({});
export const ContextProvider = ({ children }) => {
  const [mealPlannerData, setMealPlannerData] = useState<MealPlannerData>(
    {} as MealPlannerData
  );

  return (
    <Context.Provider value={{ mealPlannerData, setMealPlannerData }}>
      {children}
    </Context.Provider>
  );
};
