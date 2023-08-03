import React from "react";
import Spoonacularlogo from "../../assets/images/SpoonacularLogo1.png";

const Footer: React.FC = () => (
  <footer className="bg-yellow-400 text-green-900 flex items-center justify-center">
    <div className="flex items-center">
      <img src={Spoonacularlogo} alt="Spoonacular Logo" className="h-12 mr-4" />
      <strong>@ Food For Thought 2023</strong>
    </div>
  </footer>
);

export default Footer;
