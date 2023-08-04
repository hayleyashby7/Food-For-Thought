import Nav from "./nav";
import FFTLogo from "../../assets/images/logo.png";
import LoginForm from "../login_form/login_form";

const Header: React.FC = () => (
  <header className="bg-yellow-400 text-green-800 border border-black p-2 font-bold w-full flex flex-col sm:flex-row items-center justify-center box-border">
    <img
      src={FFTLogo}
      alt="Food For Thought Logo"
      className="block mx-auto h-30 sm:h-24 md:h-32 m-2"
    />
    <h1 className="p-2 m-2 gradient-text text-3xl text-center sm:text-left">
      {" "}
      <strong>Food For Thought</strong>
    </h1>
    <Nav />
    <LoginForm />
  </header>
);
export default Header;
