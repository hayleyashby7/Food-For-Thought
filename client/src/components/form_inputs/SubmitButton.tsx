interface SubmitButtonProps {
  text: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ text }) => {
  return (
    <button
      type="submit"
      className="prominent-shadow px-4 py-2 font-semibold rounded-md text-white bg-orange-500 hover:bg-orange-600"
    >
      {text}
    </button>
  );
};

export default SubmitButton;
