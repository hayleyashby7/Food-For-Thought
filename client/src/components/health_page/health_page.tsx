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
      <div className="h-48 w-64 p-6 bg-yellow-500 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-2 text-red-800">Health Page</h1>
        <p className="font bold text-2x1  text-red-800">
          Status of Spoonacular API:
        </p>
        <br />
        <p
          className={
            apiStatus.startsWith("The API is up")
              ? "text-green-800 font-bold"
              : "text-red-600 font-bold"
          }
        >
          {apiStatus}
        </p>
      </div>
    </div>
  );
};
export default HealthPage;
