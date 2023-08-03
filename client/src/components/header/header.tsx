import Nav from "./nav";
import "typeface-bungee";
import Spoonacularlogo from "../../assets/images/SpoonacularLogo1.png";
import FFTLogo from "../../assets/images/logo.png";

const Header: React.FC = () => (
  <header className="bg-yellow-400 text-green-900 border border-black p-2 font-bold w-full flex items-center justify-center box-border">
    <img
      src={FFTLogo}
      alt="Food For Thought Logo"
      className="block mx-auto h-24 m-2"
    />
    <img
      src={Spoonacularlogo}
      alt="Spoonacular Logo"
      className="block mx-auto h-24"
    />
    <Nav />
  </header>
);
export default Header;
