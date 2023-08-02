import React from "react";
import StartButton from "./components/StartButton";
import "./App.css";

const App: React.FC = () => {
  const handleStartButtonClick = () => {
    // Add your logic here
    console.log("Start button clicked!");
  };

  return (
    <div>
      <StartButton onClick={handleStartButtonClick} label="Start Planning" />
    </div>
  );
};

export default App;
