import { NextFunction, Request, Response } from 'express';
import fetch from 'node-fetch';

export const getMealPlan = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const response = await fetch(
			`https://api.spoonacular.com/mealplanner/generate?apiKey=${process.env.API_KEY}&timeFrame=day&targetCalories=${req.query.calories}&diet=${req.query.diet}&exclude=${req.query.exclude}`
		);
		return res.json(await response.json()).status(200);
	} catch (error) {
		next(error);
	}
};
