import { NextFunction, Request, Response } from 'express';
import { Diet } from '../models/diet';

export const getAllDiets = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const diets = await Diet.findAll();
		if (!diets) {
			return res.status(404).json({ message: 'Diets not found' });
		}
		res.status(200).json(diets);
	} catch (error) {
		next(error);
	}
};
