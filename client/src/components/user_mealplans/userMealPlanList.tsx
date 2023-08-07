import { MealPlan } from "../../types/mealplan_response.type";

type Props = {
    mealPlans: MealPlan[];
};

export function MealPlanList({ mealPlans: mealPlans }: Props) {
    
    
    return (
        <ul className="list-none">
            {mealPlans.map((mealPlan, mealPlanIndex) => (
                <li className="border-b border-b-red-900 py-4">
                    {mealPlan.meals.map((meal, mealIndex) => (
                        <h3 className="text-slate-900 font-bold text-center">
                            <p className=" text-slate-900 ">{meal.title}</p>
                        </h3>
                    ))}
                </li>
            ))}
        </ul>

        
    );
}