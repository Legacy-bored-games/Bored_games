//Styled Components
import { StyledAbout } from "../styles/About.styled";
//ReactRouter
import { NavLink } from "react-router-dom";

function About() {
  return (
    <StyledAbout>
      <h1>About Bored Games</h1>
      <p>
        Bored Games is a web app that aspires to connect people over their love
        for board games. Find people near you who wish to play the same board
        games as you. Host board game sessions, attend board game sessions
        hosted by others, make new friends, expand your knowledge of board games
        and, above all, HAVE FUN!&nbsp;
        <NavLink to="/signup" style={{ color: "tomato" }}>
          Sign up now
        </NavLink>
        .
      </p>
    </StyledAbout>
  );
}

export default About;
