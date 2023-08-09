import CalorieInput from "./CalorieInput";
import DietInput from "./DietInput";
import RemoveIngredient from "./RemoveIngredient";
import SubmitButton from "../form_inputs/SubmitButton";
import { useState } from "react";
import { MealPlanRequest } from "../../types/mealplan_request.type";
import { MealPlanResponse } from "../../types/mealplan_response.type";

interface InputsValid {
  calories: boolean;
  diet: boolean;
  remove?: boolean;
}

interface MealFormProps {
  mealRequest: MealPlanRequest;
  setMealRequest: (field: string, value: string) => void;
  setMealResponse: (data: MealPlanResponse) => void;
}

export const MealForm: React.FC<MealFormProps> = ({
  mealRequest,
  setMealRequest,
  setMealResponse,
}) => {
  const [inputsValid, setInputsValid] = useState<InputsValid>({
    calories: false,
    diet: true,
    remove: false,
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const { calories, diet, remove } = mealRequest;

    const buildURL = () => {
      const url = new URL("https://localhost:3000/api/mealplan");
      url.searchParams.append("calories", calories);
      diet ? url.searchParams.append("diet", diet) : null;
      remove ? url.searchParams.append("exclude", remove) : null;
      return url;
    };

    const fetchData = async () => {
      try {
        const response = await fetch(buildURL().toString());
        if (!response.ok) {
          throw new Error(`Server responded with ${response.status}`);
        }
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Received non-JSON response from server.");
        }
        setMealResponse(await response.json());
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }

  const updateMealRequest = (field: string, value: string, valid: boolean) => {
    setMealRequest(field, value);
    setInputsValid({ ...inputsValid, [field]: valid });
  };

  return (
    <form
      className="flex flex-col w-screen md:max-w-screen-md md:mx-auto justify-center px-2 my-2 border-4 border-orange-400 p-4"
      onSubmit={handleSubmit}
    >
      <CalorieInput
        calories={mealRequest.calories}
        inputChanged={(value, valid) =>
          updateMealRequest("calories", value, valid)
        }
      />
      {inputsValid.calories && (
        <DietInput
          inputChanged={(value) => updateMealRequest("diet", value, true)}
        />
      )}
      {inputsValid.calories && inputsValid.diet && (
        <RemoveIngredient
          ingredient={mealRequest?.remove}
          inputChanged={(value, valid) =>
            updateMealRequest("remove", value, valid)
          }
        />
      )}
      {inputsValid.calories && inputsValid.diet && (
        <SubmitButton text="Generate My Meals" />
      )}
    </form>
  );
};

export default MealForm;
