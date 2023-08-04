import express from 'express';
import { createMealPlan, getMealPlan } from '../controllers/mealplan_controller';

export const router = express.Router();

// Mealplan routes
router.post('/mealplan', createMealPlan)
router.get('/mealplan', getMealPlan);