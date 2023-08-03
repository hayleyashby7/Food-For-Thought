import { DietOptions } from "../models/dietOptions";
import { MealPlan } from "../models/mealplan";

export async function syncDatabase() {

    console.debug("Synching database");
    try {
        await MealPlan.sync();
        await DietOptions.sync();
        console.log("Database has been synched")
    } catch (error) {
        console.error("Issue synching database", error)
    }
}