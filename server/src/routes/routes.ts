import express from "express";
import * as mealPlan from "../controllers/mealplan_controller";
import * as diet from "../controllers/diet_controller";
import * as health from "../controllers/health_controller";

export const router = express.Router();

// Mealplan routes
router.get("/mealplan", mealPlan.getMealPlan);
router.post("/mealplan", mealPlan.createMealPlan);
router.get("/user-meal-plan", mealPlan.getUserMealPlan);

// Diet routes
router.get("/diets", diet.getAllDiets);

// Health routes
router.get("/health", (req, res) => {
  res.status(200).json({ message: "Server is running successfully" });
});
