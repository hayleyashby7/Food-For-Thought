import { rest } from 'msw';

export const handlers = [
	rest.get('https://api.spoonacular.com/mealplanner/generate', (req, res, ctx) => {
		return res(
			ctx.json({
				status: 200,
				meals: [
					{
						id: 665767,
						imageType: 'jpg',
						title: 'Zucchini Pineapple Muffins',
						readyInMinutes: 45,
						servings: 12,
						sourceUrl: 'https://spoonacular.com/zucchini-pineapple-muffins-665767',
					},
					{
						id: 1697625,
						imageType: 'jpg',
						title: 'Light and Tasty Tomato Basil Mozzarella Pasta for a Hot Summer Evening',
						readyInMinutes: 25,
						servings: 2,
						sourceUrl: 'https://spoonacular.com/light-and-tasty-tomato-basil-mozzarella-pasta-for-a-hot-summer-evening-1697625',
					},
					{
						id: 640338,
						imageType: 'jpg',
						title: 'Cracked Wheat Salad with Dates & Tahini Yogurt',
						readyInMinutes: 45,
						servings: 2,
						sourceUrl: 'https://spoonacular.com/cracked-wheat-salad-with-dates-tahini-yogurt-640338',
					},
				],
				nutrients: {
					calories: 2000.28,
					protein: 68.37,
					fat: 92.15,
					carbohydrates: 244.38,
				},
			})
		);
	}),

];
