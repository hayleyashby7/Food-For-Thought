import React from "react";
import Logo from "../../assets/images/SpoonacularLogo.png";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-600  text-red-900">
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
      <img src={Logo} alt="spoonacular Logo" className="block mx-auto" />
    </div>
  );
};

export default Home;
