import { NextFunction, Request, Response } from "express";
import fetch from "node-fetch";

export const getHealthFromAPI = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.API_KEY}`
    );
    return res.json(await response.json()).status(200);
  } catch (error) {
    next(error);
  }
};
