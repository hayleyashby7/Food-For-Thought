import { useEffect, useState } from "react";
import { MealPlan } from "../../types/mealplan_response.type";
import { getUserMealPlans } from "./getUserMealPlans";
import { useUserContext } from "../../hooks/useUserContext";
import MealPlanList from "./userMealPlanList";
import { ErrorMessage } from "@hookform/error-message";
import { Link, Navigate } from "react-router-dom";



const UserMealPlanPage: React.FC = () => {
    const { id, session } = useUserContext();
    const [loading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [meals, setMeals] = useState<MealPlan[]>([]);
    const [hasData, setHasData] = useState(false);
    
    const isAuthenticated = session?.user !== null && session?.user !== undefined;

    useEffect(() => {

        async function fetchUserMealPlans() {
            try {
                const data = await getUserMealPlans(id);
                setMeals(data);
                setIsLoading(false);
                setHasData(data && data.length > 0)
            } catch (error) {
                setError("An error occurred while fetching meal plans.");
                setIsLoading(false);
            }
        }
        isAuthenticated && fetchUserMealPlans();
    }, []);

    return (
        <div className="w-10/12 mx-auto mt-6">
            <h2 className="text-3xl text-red-900 font-bold text-center mb-8">Meal Plans</h2>
            {!isAuthenticated && <Navigate to="/login"/>}
            
            {
                error && <ErrorMessage message={error} name={""} />
            }
            {
                loading &&
                (<div className="w-96 mx-auto mt-6">
                    Loading...
                </div>)
            }

            {
                !loading && !hasData && (
                    <div className="custom-message">
                        <strong>You have not saved any meal plans!</strong>
                        <p>
                            <Link to="/startplanning" className="text-red-900 underline hover:no-underline hover:text-red-600 font-bold">Start planning your meals now!</Link>
                        </p>
                    </div>
                )
            }

            {
                isAuthenticated && !loading && hasData && <MealPlanList mealPlans={meals} />
            }

            {}

            </div>
    )


};

export default UserMealPlanPage;