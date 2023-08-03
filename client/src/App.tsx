import React from "react";
import { useNavigate } from "react-router-dom";

import StartButton from "./components/StartButton";
import "./App.css";

const App: React.FC = () => {
  const navigate = useNavigate();

  const handleStartButtonClick = () => {
    // Add your logic here
    navigate("/calorieinput");

    console.log("Start button clicked!");
  };

  return (
    <div>
      <StartButton
        onClick={handleStartButtonClick}
        label="Start Planning My Meal"
      />
    </div>
  );
};

export default App;
