import carrotWordCloud from "../../assets/images/CarrotWordCloud.jpg";

const Startplanning: React.FC = () => {
  return (
    <div className="flex flex-row min-h-screen bg-yellow-100">
      <div className="flex-1 flex">
        <img
          src={carrotWordCloud}
          alt="carrot shaped word cloud"
          className="h-96 w-auto border-4 border-orange-400"
        />
      </div>
    </div>
  );
};

export default Startplanning;
