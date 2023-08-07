import request from 'supertest';
import app from '../app';
import { server } from '../mocks/server';
import FoodForThoughtDatabase from '../database/database';


beforeAll(async () => {
	server.listen({
		onUnhandledRequest(req, print) {
			// Exclude our own API calls as they are not mocked
			if (req.url.pathname.startsWith('/api')) {
				return;
			}

			print.warning();
		},
	})

	await FoodForThoughtDatabase.initialize(process.env.DATABASE_TESTING_URL as string, async (sequelize) => {
		try {
			await sequelize.query(`CREATE TABLE IF NOT EXISTS auth.users(id uuid NOT NULL,CONSTRAINT users_pkey PRIMARY KEY (id))`);
			await sequelize.query(`INSERT INTO auth.users (id) VALUES ('44d1632d-9795-4696-932d-a8a99c251fda') ON CONFLICT (id) DO NOTHING;`);
		} catch (error) { console.log(error); throw error };
	});
});

afterEach(async () => server.resetHandlers());

afterAll(async () => {
	server.close();
	await FoodForThoughtDatabase.getSequelizeInstance().drop({ cascade: true });
	await FoodForThoughtDatabase.getSequelizeInstance().close();
});



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

describe('GET /mealplan endpoint', () => {
	test('It should respond with a 200 status code', async () => {
		// Arrange

		// Act
		const response = await request(app).get('/api/mealplan?calories=2000&diet=vegetarian&exclude=shellfish');

		// Assert
		expect(response.statusCode).toEqual(200);
	});

	test('It should return a meal list when passed the correct parameters', async () => {
		// Act
		const response = await request(app).get('/api/mealplan?calories=2000&diet=vegetarian&exclude=shellfish');

		// Assert
		expect(response.body).toEqual(mockResponse);
	});

	test('It should return a 400 status code and error when calories not passed in', async () => {
		// Arrange
		const url = '/api/mealplan?diet=vegetarian&exclude=shellfish';

		// Act
		const response = await request(app).get(url);

		// Assert
		expect(response.statusCode).toEqual(400);
	});

	test('It should return a 400 status code and error when diet not passed in', async () => {
		// Arrange
		const url = '/api/mealplan?calories=2000&exclude=shellfish';

		// Act
		const response = await request(app).get(url);

		// Assert
		expect(response.statusCode).toEqual(400);
	});

	test('It should return a 400 status code and error when diet is not a valid diet type', async () => {
		// Arrange
		const url = '/api/mealplan?calories=2000&diet=notvalid&exclude=shellfish';

		// Act
		const response = await request(app).get(url);

		// Assert
		expect(response.statusCode).toEqual(400);
	});

	test('It should return a 200 status code and meal list even if exclude not passed in', async () => {
		// Act
		const response = await request(app).get('/api/mealplan?calories=2000&diet=vegetarian');

		// Assert
		expect(response.body).toEqual(mockResponse);
		expect(response.statusCode).toEqual(200);
	});
});

describe('POST /mealplan endpoint', () => {
	const validTestData = {
		userId: "44d1632d-9795-4696-932d-a8a99c251fda" as string | undefined,
		meals: [
			{
				id: 640767,
				imageType: "jpg",
				title: "Crepes Suzette",
				readyInMinutes: 45,
				servings: 4,
				sourceUrl: "https://spoonacular.com/crepes-suzette-640767"
			},
			{
				id: 1697625,
				imageType: "jpg",
				title: "Light and Tasty Tomato Basil Mozzarella Pasta for a Hot Summer Evening",
				readyInMinutes: 25,
				servings: 2,
				sourceUrl: "https://spoonacular.com/light-and-tasty-tomato-basil-mozzarella-pasta-for-a-hot-summer-evening-1697625"
			},
			{
				id: 664718,
				imageType: "jpg",
				title: "Vegetarian Tostadas",
				readyInMinutes: 45,
				servings: 2,
				sourceUrl: "https://spoonacular.com/vegetarian-tostadas-664718"
			}
		],
		nutrients: {
			calories: 2199.89,
			protein: 63.92,
			fat: 104.07,
			carbohydrates: 254.8
		}
	};

	test('It should respond with a 201 status code and create a meal plan', async () => {
		// Act
		const response = await request(app)
			.post('/api/mealplan')
			.send(validTestData)

		// Assert
		expect(response.statusCode).toEqual(201);
	});

	test('It should respond with a 400 status code when userId is missing', async () => {
		// Act
		const invalidTestData = {...validTestData};
		invalidTestData.userId = undefined;
		const response = await request(app)
			.post('/api/mealplan')
			.send(invalidTestData)

		// Assert
		expect(response.statusCode).toEqual(400);
	});

	test('It should respond with a 500 status code when userId does not exist in the database table', async () => {
		// Act
		const invalidTestData = {...validTestData};
		invalidTestData.userId = "a00452ff-6008-41b1-85d7-484c71bc464e";
		const response = await request(app)
			.post('/api/mealplan')
			.send(invalidTestData)

		// Assert
		expect(response.statusCode).toEqual(500);
	});
});
