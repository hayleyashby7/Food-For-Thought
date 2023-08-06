import { Model, DataTypes, InferAttributes, InferCreationAttributes, ForeignKey, Sequelize } from 'sequelize';
import sequelize from '../database/database';
import Database from '../database/database';

export class Nutrients extends Model<InferAttributes<Nutrients>, InferCreationAttributes<Nutrients>> {
    declare id: number;
    declare calories: number;
    declare protein: number;
    declare fat: number;
    declare carbohydrates: number;

    static associate(models: any) {

    }
}


export function initNutrientsModel(sequelize: Sequelize) {
    Nutrients.init(
        {
            id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
            calories: DataTypes.FLOAT,
            protein: DataTypes.FLOAT,
            fat: DataTypes.FLOAT,
            carbohydrates: DataTypes.FLOAT
        },
        {
            sequelize
        }
    )
}