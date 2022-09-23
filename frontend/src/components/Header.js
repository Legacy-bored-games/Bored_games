import React from "react";

//React Components
import DropdownMenu from "./DropdownMenu";

//Styled components
import { StyledHeader } from "./styles/Header.styled";

//ReactRouter
import { NavLink } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  function toggleMenu() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  return (
    <StyledHeader>
      <h1>
        <NavLink to="/" style={{ textDecoration: "none", color: "inherit" }}>
          Bored <br /> Games
        </NavLink>
      </h1>
      <nav>
        <p>
          <NavLink to="/" style={{ textDecoration: "none", color: "inherit" }}>
            Home
          </NavLink>
        </p>
        <p>
          <NavLink
            to="/about"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            About
          </NavLink>
        </p>
        <p>
          <NavLink
            to="/session/search"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Board game <br />
            sessions near you
          </NavLink>
        </p>
        <p>
          <NavLink
            to="/session/host-new"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Host a board <br />
            game session
          </NavLink>
        </p>
        {/* User icon */}
        <i
          class="fa-solid fa-user"
          style={{
            fontSize: "1.3em",
            background: "none",
            border: ".1em solid black",
            borderRadius: "3em",
            padding: ".5em",
            cursor: "pointer",
          }}
          onClick={toggleMenu}
        ></i>
        {isOpen && <DropdownMenu />}
      </nav>
    </StyledHeader>
  );
}

export default Header;
