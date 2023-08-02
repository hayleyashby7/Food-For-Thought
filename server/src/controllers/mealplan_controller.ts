import { NextFunction, Request, Response } from 'express';
import fetch from 'node-fetch';
import { validMealPlanRequest } from '../helpers/mealplan_helpers';

export const getMealPlan = async (req: Request, res: Response, next: NextFunction) => {
	const request = validMealPlanRequest(req.query.calories as string, req.query.diet as string, req.query.exclude as string);
	if (request.valid === false) {
		return res.status(400).json({ error: request.error });
	}

	try {
		const response = await fetch(
			`https://api.spoonacular.com/mealplanner/generate?apiKey=${process.env.API_KEY}&timeFrame=day&targetCalories=${req.query.calories}&diet=${req.query.diet}&exclude=${req.query.exclude}`
		);
		return res.json(await response.json()).status(200);
	} catch (error) {
		next(error);
	}
};
