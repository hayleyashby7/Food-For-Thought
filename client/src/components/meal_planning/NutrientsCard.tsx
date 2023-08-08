import React from "react";
import { Nutrients } from "../../types/nutrients_data.type";

interface NutrientsCardProps {
  nutrients: Nutrients;
}

const NutrientsCard: React.FC<NutrientsCardProps> = ({ nutrients }) => (
  <div className="border-4  bg-yellow-200 border-orange-400 w-64 prominent-shadow rounded-md">
    <h3 className="font-bold text-green-600">Nutritional Information:</h3>
    <p>Calories: {nutrients?.calories}</p>
    <p>Protein: {nutrients?.protein}g</p>
    <p>Fat: {nutrients?.fat}g</p>
    <p>Carbohydrates: {nutrients?.carbohydrates}g</p>
  </div>
);

export default NutrientsCard;
