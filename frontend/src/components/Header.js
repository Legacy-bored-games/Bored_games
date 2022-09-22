//Styling using styled components
import { StyledHeader } from "./styles/Header.styled";

//ReactRouter
import { NavLink } from "react-router-dom";

function Header() {
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
            Host a board  <br />
            game session
          </NavLink>
        </p>
      </nav>
      <p>User Icon</p>
    </StyledHeader>
  );
}

export default Header;
