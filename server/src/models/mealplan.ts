import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/database'

export class MealPlan extends Model {
  public title!: string;
  public imageType!: string;
  public readyInMinutes!: number;
  public servings!: number;
  public sourceUrl!: string;
  public userId!: string;
  // public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static associate(models: any) {
    MealPlan.belongsTo(sequelize.models['auth.users'], { foreignKey: 'userId', as: 'user', targetKey: "id" });
  }
}

MealPlan.init(
  {
    title: DataTypes.STRING,
    imageType: DataTypes.STRING,
    readyInMinutes: DataTypes.INTEGER,
    servings: DataTypes.INTEGER,
    sourceUrl: DataTypes.STRING,
    userId: {
      type: DataTypes.UUID, references:
      {
        model: {
          tableName: 'users',
          schema: 'auth'
        },
        key:'id'
      }
    }
  },
  {
    sequelize: sequelize,
    modelName: 'MealPlan',
  }
);