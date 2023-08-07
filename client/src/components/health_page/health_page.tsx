import { useState } from "react";

const HealthPage = () => {
  const [apiStatus] = useState("Loading...");

  return (
    <div className="min-h-screen flex justify-center bg-yellow-100">
      <div className="w-64 h-48 sm:w-1/2 lg:w-1/3 p-6 bg-yellow-500 shadow-lg rounded-lg flex flex-col items-center sm:items-start">
        <h1 className="text-lg sm:text-base md:text-lg lg:text-xl font-bold mb-2 text-red-800 text-center sm:text-left">
          Health Page
        </h1>
        <p className="font-bold text-2x1  text-red-800 text-center sm:text-left">
          Status of Spoonacular API:
        </p>
        <br />
        <p
          className={
            apiStatus.startsWith("The API is up")
              ? "text-green-800 font-bold text-center sm:text-left"
              : "text-red-600 font-bold text-center sm:text-left"
          }
        >
          {apiStatus}
        </p>
      </div>
    </div>
  );
};
export default HealthPage;
