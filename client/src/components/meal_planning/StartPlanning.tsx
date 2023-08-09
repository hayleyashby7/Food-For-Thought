import { useState } from "react";
import StartButton from "../form_inputs/StartButton";
import MealForm from "./MealPlanForm";
import { MealPlanRequest } from "../../types/mealplan_request.type";
import { MealPlanResponse } from "../../types/mealplan_response.type";
import MealPlanGenerator from "./MealPlanGenerator";

const StartPlanning: React.FC = () => {
  const [mealRequest, setMealRequest] = useState<MealPlanRequest>({
    calories: "",
    diet: "",
    remove: "",
  });
  const [formActive, setFormActive] = useState<boolean>(false);
  const [mealResponse, setMealResponse] = useState<MealPlanResponse>({
    status: 0,
    meals: [],
    nutrients: { calories: 0, carbohydrates: 0, fat: 0, protein: 0 },
  });

  const resetPlan = () => {
    setMealRequest({ calories: "", diet: "", remove: "" });
    setMealResponse({
      status: 0,
      meals: [],
      nutrients: { calories: 0, carbohydrates: 0, fat: 0, protein: 0 },
    });
    setFormActive(false);
  };

  const startPlan = () => {
    resetPlan();
    setFormActive(true);
  };

  return (
    <div className="flex flex-col items-center bg-yellow-100 text-red-900">
      {!formActive ? (
        <StartButton onClick={startPlan} label="Start Plan" />
      ) : (
        <StartButton onClick={resetPlan} label="Reset Plan" className="mb-4" />
      )}
      {formActive && mealResponse.status === 0 && (
        <MealForm
          mealRequest={mealRequest}
          setMealRequest={(field, value) =>
            setMealRequest({ ...mealRequest, [field]: value })
          }
          setMealResponse={(data) => setMealResponse(data)}
        />
      )}
      {formActive && mealResponse.status !== 0 && (
        <MealPlanGenerator mealResponse={mealResponse} />
      )}
    </div>
  );
};

export default StartPlanning;
