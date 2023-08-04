import carrotWordCloud from "../../assets/images/CarrotWordCloud.jpg";

const StartPlanning: React.FC = () => {
  return (
    <div className="flex flex-row min-h-screen bg-yellow-100">
      <div className="flex-1 flex">
        <img
          src={carrotWordCloud}
          alt="carrot shaped word cloud"
          className="h-96 w-auto border-4 border-orange-400"
        />
      </div>
      <div>Start Planning your meals here...</div>
    </div>
  );
};

export default StartPlanning;
