import { Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes } from 'sequelize';
import { DataType } from 'sequelize-typescript';
import { DietType, DIET } from '../types/diet.types';
import sequelize from '../database/database';

interface DietModel extends Model<InferAttributes<DietModel>, InferCreationAttributes<DietModel>> {
	id: CreationOptional<number>;
	diet: DietType;
}

export const Diet = sequelize.define<DietModel>('Diet', {
	id: {
		primaryKey: true,
		type: DataTypes.INTEGER,
		allowNull: false,
		autoIncrement: true,
	},
	diet: {
		type: DataType.ENUM(...DIET),
		allowNull: false,
	},
});
