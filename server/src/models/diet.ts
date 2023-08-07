import { Model, DataTypes, InferAttributes, InferCreationAttributes, Sequelize, CreationOptional } from 'sequelize';
import sequelize from '../database/database';
import { DietType, DIET } from '../types/diet.types';

export class Diet extends Model<InferAttributes<Diet>, InferCreationAttributes<Diet>> {
    declare id: CreationOptional<number>;
    declare diet: DietType;

    static associate(models: any) {
        
    }
}

export function initDietModel(sequelize: Sequelize) {
    Diet.init(
        {
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            diet: { type: DataTypes.ENUM(...DIET), allowNull: false }
        },
        {
            sequelize
        }
    );
}