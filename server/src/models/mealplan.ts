import { Model, DataTypes, InferCreationAttributes, InferAttributes, CreationOptional, HasManyGetAssociationsMixin, Association, NonAttribute, HasManySetAssociationsMixin, HasManyAddAssociationsMixin, ForeignKey, HasOneGetAssociationMixin, Sequelize } from 'sequelize';
import sequelize from '../database/database'
import { Meal } from './meal';
import { Nutrients } from './nutrients';
import FoodForThoughtDatabase from '../database/database';


export class MealPlan extends Model<InferAttributes<MealPlan>, InferCreationAttributes<MealPlan>> {
  declare id: CreationOptional<number>;
  declare userId: string;
  declare nutrientsId: ForeignKey<Nutrients['id']>;

  declare getMeals: HasManyGetAssociationsMixin<Meal>;
  declare setMeals: HasManyAddAssociationsMixin<Meal, number>;
  declare getNutrients: HasOneGetAssociationMixin<Nutrients>;

  declare nutrients?: NonAttribute<Nutrients>;
  declare meals?: NonAttribute<Meal[]>;
  static associate(models: any) {
    MealPlan.belongsTo(models['auth.users'], { foreignKey: 'userId', as: 'user', targetKey: "id" });
  }

  declare static associations: {
    meals: Association<MealPlan, Meal>;
    nutrients: Association<MealPlan, Nutrients>;
  };
}
export function initMealPlanModel(sequelize: Sequelize) {
  MealPlan.init(
    {
      id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
      userId: {
        type: DataTypes.UUID, references:
        {
          model: {
            tableName: 'users',
            schema: 'auth'
          },
          key: 'id'
        }
      }
    },
    {
      sequelize
    }
  )

  MealPlan.hasMany(Meal, {
    sourceKey: 'id',
    foreignKey: 'mealPlanId',
    as: 'meals'
  });

  MealPlan.belongsTo(Nutrients, {
    foreignKey: 'nutrientsId',
    targetKey: 'id',
    as: 'nutrients'
  })
};




