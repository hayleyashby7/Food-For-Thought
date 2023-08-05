import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface DietInputProps {
  onDietSelect: (diet: string) => void;
}

const DietInput: React.FC<DietInputProps> = ({ onDietSelect }) => {
  const [selectedDiet, setSelectedDiet] = useState<string>("");
  const navigate = useNavigate();

  const handleDietSelect = (diet: string) => {
    setSelectedDiet(diet);
    onDietSelect(diet);
    navigate("/calorieinput");
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-4 ">
        Please Choose Your Type of Diet:
      </h2>
      <div className="flex flex-col space-y-4">
        <button
          className={`px-4 py-2 rounded-md ${
            selectedDiet === "vegetarian"
              ? "bg-orange-500 text-white"
              : "bg-gray-200 text-black"
          }`}
          onClick={() => handleDietSelect("vegetarian")}
        >
          Vegetarian
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            selectedDiet === "vegan"
              ? "bg-orange-500 text-white"
              : "bg-gray-200 text-black"
          }`}
          onClick={() => handleDietSelect("vegan")}
        >
          Vegan
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            selectedDiet === "gluten-free"
              ? "bg-orange-500 text-white"
              : "bg-gray-200 text-black"
          }`}
          onClick={() => handleDietSelect("gluten-free")}
        >
          Gluten-Free
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            selectedDiet === "omnivore"
              ? "bg-orange-500 text-white"
              : "bg-gray-200 text-black"
          }`}
          onClick={() => handleDietSelect("omnivore")}
        >
          Omnivore
        </button>
      </div>
    </div>
  );
};

export default DietInput;
