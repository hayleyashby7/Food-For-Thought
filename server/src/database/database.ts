import { Sequelize } from 'sequelize';
import { config } from 'dotenv';
import { Meal, initModel as initMealModel } from '../models/meal';
import { MealPlan, initMealPlanModel } from '../models/mealplan';
import { Nutrients, initNutrientsModel } from '../models/nutrients';
import { Diet, initDietModel } from '../models/diet';
import { DIET } from '../types/diet.types';
import sequelize from 'sequelize';


// Load environment variables
config({ path: './config/config.env' });

class FoodForThoughtDatabase {
    private static sequelizeInstance: Sequelize;
  
    private constructor() {
      
    }
  
    public static async initialize(connectionString: string, beforeSync?: (sequelize: Sequelize) => Promise<void>): Promise<void> {
      if (!FoodForThoughtDatabase.sequelizeInstance) {
        FoodForThoughtDatabase.sequelizeInstance =  new Sequelize(connectionString);
        try {
            await FoodForThoughtDatabase.getSequelizeInstance().authenticate();
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
            throw error;
        }
        if(beforeSync){
          await beforeSync(FoodForThoughtDatabase.getSequelizeInstance());
        }

        FoodForThoughtDatabase.initializeModels();       
        
        await this.syncDatabase();
      }
    }
  
  private static initializeModels() {
    initMealModel(this.getSequelizeInstance());
    initNutrientsModel(this.getSequelizeInstance());
    initMealPlanModel(this.getSequelizeInstance());
    initDietModel(this.getSequelizeInstance());
  }

    public static getSequelizeInstance(): Sequelize {
      if (!FoodForThoughtDatabase.sequelizeInstance) {
        throw new Error('Sequelize instance has not been initialized. Call Database.initialize(connectionString) first.');
      }
      return FoodForThoughtDatabase.sequelizeInstance;
    }

    private static async syncDatabase() {
      console.debug('Syncing database');
      try {
        await FoodForThoughtDatabase.getSequelizeInstance().sync();
        console.log('Database has been synced');
        await FoodForThoughtDatabase.seedDatabase();
      } catch (error) {
        console.error('Issue syncing database', error);
      }
    }
    
    private static async seedDatabase() {
      console.debug('Seeding database if necessary');
      try {
        const diets = await Diet.findAll();
        if (diets.length === 0) {
          await Diet.bulkCreate(DIET.map(diet => ({ diet })));
          console.log('Database has been seeded');
        } else {
          console.log('Database has already been seeded');
        }
      } catch (error) {
        console.error('Issue seeding database', error);
      }
    }
  }

export default FoodForThoughtDatabase;