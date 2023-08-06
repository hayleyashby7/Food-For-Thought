import { Sequelize } from 'sequelize';
import { config } from 'dotenv';
import { Meal, initModel as initMealModel } from '../models/meal';
import { MealPlan, initMealPlanModel } from '../models/mealplan';
import { Nutrients, initNutrientsModel } from '../models/nutrients';
import { Diet, initDietModel } from '../models/diet';
import { DIET } from '../types/diet.types';


// Load environment variables
config({ path: './config/config.env' });

class Database {
    private static sequelizeInstance: Sequelize;
  
    private constructor() {
      
    }
  
    public static async initialize(connectionString: string): Promise<void> {
      if (!Database.sequelizeInstance) {
        Database.sequelizeInstance = new Sequelize(connectionString);
        try {
            await Database.getSequelizeInstance().authenticate();
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
            throw error;
        }
        Database.initializeModels();
        
        
        this.syncDatabase();
      }
    }
  
  private static initializeModels() {
    initMealModel(this.getSequelizeInstance());
    initNutrientsModel(this.getSequelizeInstance());
    initMealPlanModel(this.getSequelizeInstance());
    initDietModel(this.getSequelizeInstance());
  }

    public static getSequelizeInstance(): Sequelize {
      if (!Database.sequelizeInstance) {
        throw new Error('Sequelize instance has not been initialized. Call Database.initialize(connectionString) first.');
      }
      return Database.sequelizeInstance;
    }

    private static async syncDatabase() {
      console.debug('Syncing database');
      try {
        await Database.getSequelizeInstance().drop({cascade:true});
        await Database.getSequelizeInstance().sync();
        console.log('Database has been synced');
        await Database.seedDatabase();
      } catch (error) {
        console.error('Issue syncing database', error);
      }
    }
    
    private static async seedDatabase() {
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
  }

export default Database;