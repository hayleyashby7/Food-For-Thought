
import sequelize from '../database/database';
import { Meal } from '../models/meal';
import { MealPlan } from '../models/mealplan';
import { MealPlanData } from '../types/mealdata';

export class MealPlanService {
    public static async createMealPlan(mealPlanData: MealPlanData): Promise<void> {
        try {
            const transaction = await sequelize.transaction();
            try {
                const mealPlan = await MealPlan.create({
                    userId: '44d1632d-9795-4696-932d-a8a99c251fda'
                })
                { transaction }

                await Meal.bulkCreate(mealPlanData.meals.map(meal => ({ ...meal, mealPlanId: mealPlan.id })));
                { transaction }

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

    // public static async getMealPlan(userId: number): Promise<MealPlanData | null> {
    //     const mealPlan = await MealPlan.findByPk(userId);
        
    //     if (mealPlan && mealPlan.meals) {

    //         return ({
    //             userId: mealPlan?.userId,
    //             meals: mealPlan?.meals?.map(mp => 
    //                 ({
    //                     id: mp.id,
    //                     title: mp.title,
    //                     imageType: mp.imageType,
    //                     readyInMinutes: mp.readyInMinutes,
    //                     servings: mp.servings,
    //                     sourceUrl: mp.sourceUrl
    //                 }))
    //         });
    //     }
    //     return null;
    // }
}