import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/database'

export class DietOptions extends Model {
  declare diet: string;

  static associate(models: any) {
    
  }
}

DietOptions.init(
    {
        diet: DataTypes.ENUM(
            "vegetarian", 
            "vegan", 
            "pescatarian", 
            "gluten free", 
            "ketogenic", 
            "paleo", 
            "whole30", 
            "lacto-vegetarian", 
            "ovo-vegetarian")
    },
    {
        sequelize
    }
)