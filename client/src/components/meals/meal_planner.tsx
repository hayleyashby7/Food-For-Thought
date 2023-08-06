import { useState, useEffect } from 'react';
import { useUserContext } from '../../hooks/useUserContext';

type Meal = {
	id: number;
	imageType: string;
	title: string;
	readyInMinutes: number;
	servings: number;
	sourceUrl: string;
};

type Nutrients = {
	calories: number;
	protein: number;
	fat: number;
	carbohydrates: number;
};

type MealPlanResponse = {
	status: number;
	meals: Meal[];
	nutrients: Nutrients;
};

function MealPlanner() {
	const [meals, setMeals] = useState<Meal[]>([]);
	const [nutrients, setNutrients] = useState<Nutrients | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [successMessage, setSuccessMessage] = useState('');
	const { id } = useUserContext();

	useEffect(() => {
		fetch('/api/mealplan')
			.then((response) => response.json())
			.then((data: MealPlanResponse) => {
				setMeals(data.meals);
				setNutrients(data.nutrients);
				setLoading(false);
			})
			.catch((err: Error) => {
				setError(err.message);
				setLoading(false);
			});
	}, []);

	const saveMealPlan = () => {
		fetch('https://localhost:3000/api/mealplan', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				userId: id,
				meals: meals,
				nutrients: nutrients,
			}),
		})
			.then((response) => {
				if (!response.ok) {
					return response.json().then((data) => {
						throw new Error(data.error || 'Failed to save meal plan.');
					});
				}
				return response.json();
			})
			.then(() => {
				setSuccessMessage('Meal plan saved successfully!');
			})
			.catch((err: Error) => {
				setError(err.message);
			});
	};

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error}</p>;

	return (
		<div>
			{meals.map((meal) => (
				<div key={meal.id}>
					<h2>{meal.title}</h2>

					<img src={`https://spoonacular.com/recipeImages/${meal.id}-${meal.imageType}`} alt={meal.title} className='w-full sm:w-1/2 md:w-1/3' />

					<p>Ready In: {meal.readyInMinutes} minutes</p>
					<p>Servings: {meal.servings}</p>
					<p>
						<a href={meal.sourceUrl} target='_blank' rel='noopener noreferrer'>
							See Recipe
						</a>
					</p>
				</div>
			))}

			<div>
				<h3>Nutritional Information:</h3>
				<p>Calories: {nutrients?.calories}</p>
				<p>Protein: {nutrients?.protein}g</p>
				<p>Fat: {nutrients?.fat}g</p>
				<p>Carbohydrates: {nutrients?.carbohydrates}g</p>
			</div>

			<button onClick={saveMealPlan}>Save</button>
			{successMessage && <div className='text-green-500 mt-4'>{successMessage}</div>}
			{error && <div className='text-red-500 mt-4'>{error}</div>}
		</div>
	);
}

export default MealPlanner;
