import express from 'express';
import * as mealPlan from '../controllers/mealplan_controller';
import * as diet from '../controllers/diet_controller';

export const router = express.Router();

// Mealplan routes
router.get('/mealplan', mealPlan.getMealPlan);

// Diet routes
router.get('/diets', diet.getAllDiets);
