import { useMatch, Link } from "react-router-dom";
import { ReactNode, CSSProperties } from "react";

interface CustomNavLinkProps {
  to: string;
  children: ReactNode;
  activeStyle: CSSProperties;
  inactiveStyle: CSSProperties;
}

function CustomLink({
  to,
  children,
  activeStyle,
  inactiveStyle,
}: CustomNavLinkProps) {
  const match = useMatch({ path: to });

  return (
    <Link to={to} style={match ? activeStyle : inactiveStyle}>
      {children}
    </Link>
  );
}

const Nav = () => {
  const activeStyle = { color: "red", textDecoration: "underline" };
  const inactiveStyle = { color: "green-900", textDecoration: "none" };

  return (
    <ul className="flex space-x-96 text-3xl">
      <li className="inline">
        <CustomLink
          to="/"
          activeStyle={activeStyle}
          inactiveStyle={inactiveStyle}
        >
          Home
        </CustomLink>
      </li>
      <li className="inline">
        <CustomLink
          to="/login"
          activeStyle={activeStyle}
          inactiveStyle={inactiveStyle}
        >
          Login
        </CustomLink>
      </li>
      <li className="inline">
        <CustomLink
          to="/mealplanner"
          activeStyle={activeStyle}
          inactiveStyle={inactiveStyle}
        >
          Mealplanner
        </CustomLink>
      </li>
    </ul>
  );
};

export default Nav;
