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
    console.log(mealResponse);
  };

  return (
    <div className="flex flex-row min-h-screen bg-yellow-100">
      <div className="flex-1 flex flex-col items-center text-red-900 h-96 pl-30">
        {!formActive ? (
          <StartButton onClick={startPlan} label="Start Plan" />
        ) : (
          <StartButton onClick={resetPlan} label="Reset Plan" />
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
          <>
            <br />
            <MealPlanGenerator mealResponse={mealResponse} />
          </>
        )}
      </div>
    </div>
  );
};

export default StartPlanning;
