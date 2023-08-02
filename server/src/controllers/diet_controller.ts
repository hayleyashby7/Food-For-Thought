import { NextFunction, Request, Response } from 'express';
import { Diet } from '../models/diet';

export const getAllDiets = async (req: Request, res: Response, next: NextFunction) => {
	const diets = await Diet.findAll();
	res.status(200).json(diets);
};
