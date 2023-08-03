import { NavLink } from "react-router-dom";

interface Nav_Item_Props {
  linkTo: string;
  text: string;
}

const Nav_Item: React.FC<Nav_Item_Props> = ({ linkTo, text }) => (
  <li>
    <NavLink
      to={linkTo}
      className={({ isActive }) =>
        isActive ? "text-red-500" : "text-green-900"
      }
    >
      {text}
    </NavLink>
  </li>
);

const Nav: React.FC = () => (
  <nav className="flex flex-grow items-center w-full">
    <ul className="flex flex-row justify-evenly w-full font-bold text-lg">
      <Nav_Item linkTo="/" text="Home" />
      <Nav_Item linkTo="/startplanning" text="Start Planning" />
    </ul>
  </nav>
);

export default Nav;
