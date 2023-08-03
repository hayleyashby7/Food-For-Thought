import express from 'express';
import { getMealPlan } from '../controllers/mealplan_controller';

export const router = express.Router();

// Mealplan routes
router.get('/mealplan', getMealPlan);
