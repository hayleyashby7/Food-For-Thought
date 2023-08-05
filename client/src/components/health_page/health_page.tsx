import { useEffect, useState } from "react";

const HealthPage = () => {
  const [apiStatus, setApiStatus] = useState("Checking status...");

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
        import.meta.env.VITE_SPOONACULAR_API_KEY
      }`
    )
      .then((response) => {
        if (response.ok) {
          setApiStatus("The API is up and running!");
        } else {
          setApiStatus("The API seems to be down.");
        }
      })
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .catch((_error) => {
        setApiStatus("The API is down or not responding.");
      });
  }, []);

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
