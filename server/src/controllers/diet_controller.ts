import { NextFunction, Request, Response } from 'express';
import { Diet } from '../models/diet';

export const getAllDiets = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const diets = await Diet.findAll();
		return res.status(200).json({ diets: diets });
	} catch (error) {
		next(error);
	}
};
