import { NextFunction, Request, Response } from 'express';
import fetch from 'node-fetch';

export const getHealthFromAPI = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.API_KEY}`);
		if (response.status !== 200) {
			throw new Error('API is down');
		}
		return res.json({ health: true }).status(200);
	} catch (error) {
		next(error);
	}
};
