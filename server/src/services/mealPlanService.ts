
import sequelize from '../database/database';
import { Meal } from '../models/meal';
import { MealPlan } from '../models/mealplan';
import { Nutrients } from '../models/nutrients';
import { MealPlanData } from '../types/mealdataController.types';

export class MealPlanService {
    public static async createMealPlan(mealPlanData: MealPlanData): Promise<void> {
        try {
            const transaction = await sequelize.transaction();
            try {
                const nutrients = await Nutrients.create(mealPlanData.nutrients)
                const mealPlan = await MealPlan.create({
                    userId: mealPlanData.userId,
                    nutrientsId: nutrients.id

                })
                await Meal.bulkCreate(mealPlanData.meals.map(meal => ({ ...meal, mealPlanId: mealPlan.id })));

                await transaction.commit();
            } catch (error) {
                await transaction.rollback();
                console.error(error);
                throw error;
            }
        } catch (error) {
            console.error('Error setting up transaction', error);
            throw error;
        }
    }

    public static async getMealPlan(userId: string): Promise<MealPlan[]> {
        try {
            return MealPlan.findAll({
                where: { userId },
                include: ['meals', 'nutrients']
            });

        } catch (error) {
            console.log(error)
            throw error;
        }
    }


}