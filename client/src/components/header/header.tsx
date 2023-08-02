import Nav from "./nav";
import "typeface-bungee";
import logo from "../../assets/images/SpoonacularLogo.png";

const Header: React.FC = () => (
  <header className="bg-yellow-400 text-green-900 border border-black p-2 font-bold w-full flex items-center justify-center box-border">
    <h1 className="font-bungee text-4xl">Food for Thought</h1>
    <img
      src={logo}
      alt="Images of different dishes"
      className="block mx-auto h-24"
    />
    <Nav />
  </header>
);
export default Header;
