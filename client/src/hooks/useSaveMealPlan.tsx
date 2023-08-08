import { useState } from "react";
import { useUserContext } from "../hooks/useUserContext";
import { MealPlanResponse } from "../types/mealplan_response.type";

const useSaveMealPlan = () => {
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState("");
  const { id } = useUserContext();

  const saveMealPlan = async (mealResponse: MealPlanResponse) => {
    try {
      if (!id) {
        throw new Error("Please sign in to save your meal plan.");
      }

      const response = await fetch("https://localhost:3000/api/mealplan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: id,
          meals: mealResponse.meals,
          nutrients: mealResponse.nutrients,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data && data.message) {
          setSuccessMessage(data.message);
        } else {
          setSuccessMessage("Meal plan saved successfully!");
        }
      } else {
        if (response.status === 401) {
          throw new Error("Please sign in to save your meal plan.");
        }
        const data = await response.json();
        if (data && data.details) {
          const errorMessage = data.details
            .map((detail: { message: string }) => detail.message)
            .join(" ");
          throw new Error(errorMessage);
        }
        throw new Error(response.statusText || "Failed to save meal plan.");
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
    }
  };

  return {
    saveMealPlan,
    error,
    successMessage,
  };
};

export default useSaveMealPlan;
