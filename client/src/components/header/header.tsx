import Nav from "./nav";
import FFTLogo from "../../assets/images/logo.png";

const Header: React.FC = () => (
  <header className="bg-yellow-400 text-green-800 border border-black p-2 font-bold w-full flex items-center justify-between box-border">
    <div className="flex items-center space-x-32">
      <img
        src={FFTLogo}
        alt="Food For Thought Logo"
        className="h-35 sm:h-24 md:h-32"
      />
      <h1 className="gradient-text text-3xl">
        <strong>Food For Thought</strong>
      </h1>
    </div>
    <Nav />
  </header>
);

export default Header;
