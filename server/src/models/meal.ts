import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional, ForeignKey, Sequelize } from 'sequelize';
import sequelize from '../database/database'
import { MealPlan } from './mealplan';
import FoodForThoughtDatabase from '../database/database';

export class Meal extends Model<InferAttributes<Meal>, InferCreationAttributes<Meal>>{
    declare id: CreationOptional<number>;
    declare mealPlanId: ForeignKey<MealPlan['id']>
    declare title: string;
    declare imageType: string;
    declare readyInMinutes: number;
    declare servings: number;
    declare sourceUrl: string;


    static associate(models: any) {

    }
}

export function initModel(sequelize: Sequelize) {
    Meal.init(
        {
            id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
            title: { type: DataTypes.STRING, allowNull: false },
            imageType: { type: DataTypes.STRING, allowNull: false },
            readyInMinutes: { type: DataTypes.INTEGER, allowNull: false },
            servings: { type: DataTypes.INTEGER, allowNull: false },
            sourceUrl: { type: DataTypes.STRING, allowNull: false }
        },
        {
            sequelize,
        }
    )
}