// Context.js
import React, { useState } from "react";

interface MealPlannerData {
  dailyCalories: number;
  dietOption: string;
  removedingredients: string[];
}
interface MealPlannerContext {
  mealPlannerData: MealPlannerData;
  setMealPlannerData: React.Dispatch<React.SetStateAction<MealPlannerData>>;
}

export const Context = React.createContext<MealPlannerContext>(
  {} as MealPlannerContext
);
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
