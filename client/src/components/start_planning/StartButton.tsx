import React from "react";
interface ButtonProps {
  onClick: () => void;
  label: string;
  className?: string;
}

const StartButton: React.FC<ButtonProps> = ({ onClick, label, className }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <button
        className={`px-20 py-10 font-semibold rounded-md  text-white bg-orange-500 hover:bg-orange-600 ${className}`}
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
};

export default StartButton;
