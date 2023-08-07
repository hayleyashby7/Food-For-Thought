import { NavLink } from "react-router-dom";

interface Nav_Item_Props {
  linkTo: string;
  text: string;
}

const Nav_Item: React.FC<Nav_Item_Props> = ({ linkTo, text }) => (
  <li className="flex-shrink text-center sm:text-left mx-2 sm:mx-4 md:mx-8">
    <NavLink
      to={linkTo}
      className={({ isActive }) =>
        isActive ? "text-red-500" : "text-green-800"
      }
    >
      {text}
    </NavLink>
  </li>
);

const Nav: React.FC = () => (
  <nav className="flex flex-grow items-center w-full md:max-w-xl">
    <ul className="flex flex-col sm:flex-row justify-evenly w-full font-bold text-lg">
      <Nav_Item linkTo="/" text="Home" />
      <Nav_Item linkTo="/startplanning" text="Start Planning" />
      <Nav_Item linkTo="/login" text="Sign In/Up" />
    </ul>
  </nav>
);

export default Nav;
