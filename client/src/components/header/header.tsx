import Nav from "./nav";
import FFTLogo from "../../assets/images/logo.png";
import LoginForm from "../login_form/login_form";

const Header: React.FC = () => (
  <header className="bg-yellow-400 text-green-900 border border-black p-2 font-bold w-full flex items-center justify-center box-border">
    <img
      src={FFTLogo}
      alt="Food For Thought Logo"
      className="block mx-auto h-32 m-2"
    />
    <h1 className="p-2 m-2 gradient-text text-4xl">
      <strong>Food For Thought</strong>
    </h1>
    <Nav />
    <LoginForm />
  </header>
);
export default Header;
