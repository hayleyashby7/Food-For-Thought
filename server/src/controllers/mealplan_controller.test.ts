import request from 'supertest';
import app from '../app';
import { server } from '../mocks/server';

beforeAll(() =>
	server.listen({
		onUnhandledRequest(req, print) {
			// Exclude our own API calls as they are not mocked
			if (req.url.pathname.startsWith('/api')) {
				return;
			}

			print.warning();
		},
	})
);

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe('GET /mealplan endpoint', () => {
	test('It should respond with a 200 status code', async () => {
		// Arrange

		// Act
		const response = await request(app).get('/api/mealplan?calories=2000&diet=vegetarian&exclude=shellfish');

		// Assert
		expect(response.statusCode).toEqual(200);
	});

	test('It should return a meal list when passed the correct parameters', async () => {
		// Arrange
		const mockResponse = {
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
		};
		// Act
		const response = await request(app).get('/api/mealplan?calories=2000&diet=vegetarian&exclude=shellfish');

		// Assert
		expect(response.body).toEqual(mockResponse);
	});
});
