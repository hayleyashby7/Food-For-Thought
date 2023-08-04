import React from "react";
import DishImage from "../../assets/images/dishes.jpg";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-yellow-100 text-red-900 w-full h-full sm:h-96 p-4 sm:p-0">
      <p className="text-center text-sm sm:text-2xl px-2">
        <strong>
          Welcome to our{" "}
          <span className="gradient-text text-2xl">Food For Thought</span> App!
        </strong>
      </p>
      <br />
      <p className="text-center text-sm sm:text-2xl px-2">
        <strong>
          Here you can browse recipes for daily meal plans by calorie intake,
          diet type, nutritional info etc.
        </strong>
      </p>
      <br />
      <br />
      <img
        src={DishImage}
        alt="Images of different dishes"
        className="block mx-auto h-32 sm:h-64"
      />
    </div>
  );
};

export default Home;
