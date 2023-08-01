import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { config } from 'dotenv';

// Load environment variables
config({ path: './config/config.env' });

// Initialise express
export const app = express();

// Set CORS
app.use(cors());

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Developer logging
if (process.env.NODE_ENV === 'development') {
	console.log('Running in development mode');
	app.use(morgan('dev'));
}

// Routes
app.get('/', (req, res) => res.send('Food for thought API'));

// proof of concept route to Spoonacular API  for a daily meal plan - should be seperated into route/controller layout next
app.get('/mealplan', async (req, res, next) => {
	try {
		const calories = req.query.calories;
		const diet = req.query.diet;
		const exclude = req.query.exclude;
		const response = await fetch(`https://api.spoonacular.com/mealplanner/generate?apiKey=${process.env.API_KEY}&timeFrame=day&targetCalories=${calories}&diet=${diet}&exclude=${exclude}`);
		return res.json(await response.json()).status(200);
	} catch (error) {
		next(error);
	}
});

export default app;
