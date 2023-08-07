import { NextFunction, Request, Response } from 'express';
import fetch from 'node-fetch';
import { validMealPlanRequest } from '../helpers/mealplan_helpers';
import { MealPlanService } from '../services/mealPlanService';
import { MealPlanData, UserMealPlanRequest, mealSchema, userMealPlanRequestSchema } from '../types/mealdataController.types';
import { MealPlanModelConverter } from '../converters/mealPlanConverter';



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

export const createMealPlan = async (req: Request, res: Response, next: NextFunction) => {
	try {
		let mealPlanDataValidationResult: MealPlanData;
		try {
			mealPlanDataValidationResult = await mealSchema.validateAsync(req.body,);
		} catch (error) {
			return res.status(400).json({ error: error });
		}
		const mealPlan = await MealPlanService.createMealPlan(mealPlanDataValidationResult);
		return res.status(201).json(mealPlan);

	} catch (error) {
		return res.status(500).json({ error: 'An error occurred while creating the meal plan.' });
	}
};

export const getUserMealPlan = async (req: Request, res: Response, next: NextFunction) => {
	try {
		let userRequestValidationResult: UserMealPlanRequest;
		try {
			userRequestValidationResult = await userMealPlanRequestSchema.validateAsync(req.query);
		} catch (error) {
			return res.status(400).json({ error: error });
		}
		const mealPlanModel = await MealPlanService.getMealPlan(req.query.userId as string);
		
		const mealPlanDto : MealPlanData[] = mealPlanModel.map(MealPlanModelConverter.toMealPlanData);		
		return res.status(200).json(mealPlanDto);
	} catch (error) {
		return res.status(400).json({ error: error });
	}
}
