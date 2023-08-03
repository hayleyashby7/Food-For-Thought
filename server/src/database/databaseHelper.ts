import { Diet } from '../models/diet';
import { MealPlan } from '../models/mealplan';
import { DIET } from '../types/diet.types';

export async function syncDatabase() {
	console.debug('Syncing database');
	try {
		await MealPlan.sync({ alter: true });
		await Diet.sync({ alter: true });
		console.log('Database has been synced');
		await seedDatabase();
	} catch (error) {
		console.error('Issue syncing database', error);
	}
}

async function seedDatabase() {
	console.debug('Seeding database if necessary');
	try {
		const diets = await Diet.findAll();
		if (diets.length === 0) {
			DIET.forEach(async (diet) => {
				await Diet.create({ diet });
			});
			console.log('Database has been seeded');
		} else {
			console.log('Database has already been seeded');
		}
	} catch (error) {
		console.error('Issue seeding database', error);
	}
}
