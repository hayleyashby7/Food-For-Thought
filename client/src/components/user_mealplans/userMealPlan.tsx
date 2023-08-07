import { useEffect, useState } from "react";
import { MealPlan } from "../../types/mealplan_response.type";
import { getUserMealPlans } from "./getUserMealPlans";
import { MealPlanList } from "./userMealPlanList";


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
            <h2 className="text-3xl text-red-900 font-bold text-center mb-8">Meal Plans</h2>
            <MealPlanList mealPlans={meals} />
        </div>
    );

}