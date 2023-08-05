import React, { useEffect, useState } from "react";
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
    navigate("/removeingredient");
  };

  const [dietOptions, setdietOptions] = useState(["apple", "lejuice", "foo"]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("localhost");
      // data.json()
      setdietOptions(data);
    };

    fetchData();
  });

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-4 ">
        Please Choose Your Type of Diet:
      </h2>
      <div className="flex flex-col space-y-4">
        {dietOptions.map((dietOption) => (
          <button
            className={`px-4 py-2 rounded-md ${
              selectedDiet === "vegetarian"
                ? "bg-orange-500 text-white"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => handleDietSelect(dietOption)}
          >
            {dietOption}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DietInput;
