import React, { useState } from "react";

const diets = ["vegetarians", "vegan", "gluten-free", "omnivore"];

const DietInput: React.FC = () => {
  const [selectedDiet, setSelectedDiet] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDiet(event.target.value);
  };

  return (
    <div className="p-4">
      <label
        htmlFor="diet"
        className="block text-lg font-medium text-black-700 mb-2"
      >
        Please Choose Your Type Of Diet:
      </label>
      <select
        id="diet"
        name="diet"
        value={selectedDiet}
        onChange={handleInputChange}
        className="block w-full p-10 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-orange-500 focus:border-orange-500 bg-orange-500 hover:bg-orange-600"
      >
        <option value="">Select a diet</option>
        {diets.map((diet) => (
          <option key={diet} value={diet}>
            {diet}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DietInput;
