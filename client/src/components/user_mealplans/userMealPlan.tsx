import { useEffect, useState } from "react";
import { MealPlan } from "../../types/mealplan_response.type";
import { getUserMealPlans } from "./getUserMealPlans";
import { MealPlanList } from "./userMealPlanList";
import { useUserContext } from "../../hooks/useUserContext";


export function UserMealPlanPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [meals, setMeals] = useState<MealPlan[]>([]);
    const id = "44d1632d-9795-4696-932d-a8a99c251fda";

    useEffect(() => {
        getUserMealPlans(id).then((data) => {
            setMeals(data);
            setIsLoading(false);
        });
    }, []);
    if (isLoading) {
        return (
            <div className="w-96 mx-auto mt-6">
                Loading
            </div>
        );
    } return (
        <div className="w-10/12 mx-auto mt-6">
            <h2 className="text-xl text-red-900 font-bold text-center">Meals</h2>
            <MealPlanList mealPlans={meals} />
        </div>
    );

}