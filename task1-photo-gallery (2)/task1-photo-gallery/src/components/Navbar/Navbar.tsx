import { Link, useLocation } from "react-router-dom";
import { NavbarWrapper, NavBrand, NavLinks, NavLink } from "./Navbar.styles";

function Navbar() {
  const location = useLocation();

  return (
    <NavbarWrapper>
      <NavBrand>Pictura</NavBrand>
      <NavLinks>
        <NavLink to="/" $active={location.pathname === "/"}>
          Home
        </NavLink>
        <NavLink to="/details" $active={location.pathname === "/details"}>
          Details
        </NavLink>
        <NavLink to="/saved" $active={location.pathname === "/saved"}>
          Saved
        </NavLink>
      </NavLinks>
    </NavbarWrapper>
  );
}

export default Navbar;
