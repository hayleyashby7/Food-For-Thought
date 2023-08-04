import sequelize from "./database";
import { DietOptions } from "../models/dietOptions";
import { Meal } from "../models/meal";
import { MealPlan } from "../models/mealplan";
import { Nutrients } from "../models/nutrients";

export async function syncDatabase() {

    console.debug("Synching database");
    try {
        await MealPlan.sync();
        await Meal.sync();
        await DietOptions.sync();
        console.log("Database has been synched")
    } catch (error) {
        console.error("Issue synching database", error)
    }
}