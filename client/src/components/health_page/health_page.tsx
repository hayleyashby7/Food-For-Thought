import { useEffect, useState } from "react";

const HealthPage = () => {
  const [apiStatus, setApiStatus] = useState("Checking status...");

  useEffect(() => {
    const checkAPIHealth = async () => {
      try {
        const response = await fetch(`https://localhost:3000/api/health`);

        if (response.status === 200) {
          setApiStatus("The API is up and running!");
        } else {
          setApiStatus("The API seems to be down.");
        }
      } catch (error) {
        console.error("Error fetching API health:", error);
        setApiStatus("The API is down or not responding.");
      }
    };

    checkAPIHealth();
  }, []);

  return (
    <div className="min-h-screen flex justify-center bg-yellow-100">
      <div className="w-64 h-48 sm:w-1/2 lg:w-1/3 p-6 bg-yellow-500 shadow-lg rounded-lg flex flex-col items-center sm:items-start">
        <h1 className="text-lg sm:text-base md:text-lg lg:text-xl font-bold mb-2 text-red-800 text-center sm:text-left">
          Health Page
        </h1>
        <p className="font-bold text-red-800 text-center sm:text-left">
          Status of Spoonacular API:
        </p>
        <p
          className={
            apiStatus.startsWith("The API is up")
              ? "text-green-800 font-bold text-center sm:text-left m-4"
              : "text-red-600 font-bold text-center sm:text-left m-4"
          }
        >
          {apiStatus}
        </p>
      </div>
    </div>
  );
};

export default HealthPage;
