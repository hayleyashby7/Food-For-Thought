import React from "react";
import DishImage from "../../assets/images/dishes.jpg";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-yellow-100 text-red-900 w-full h-96">
      <p className="text-center text-2xl">
        <strong>Welcome to our Food For Thought App!</strong>
      </p>
      <br />
      <p className="text-center text-2xl">
        <strong>
          Here you can browse a list of recipes, or you can plan a meal by
          calorie intake, ingredients etc.
        </strong>
      </p>
      <br />
      <br />
      <img
        src={DishImage}
        alt="Images of different dishes"
        className="block mx-auto h-96"
      />
    </div>
  );
};

export default Home;
